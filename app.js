/* Aceh NLP tool page — interface only; all state lives behind /api (same origin).
   Two tabs: Review (sign-in, tiered controls) and Try the model (open to anyone). */
"use strict";

const $ = (id) => document.getElementById(id);
let token = localStorage.getItem("aceh_token") || "";
let profile = null;
let current = { dataset: null, queue: [], item: null };
let tier = "everyday";
let lastProgress = null;

// The sentence being reviewed is shown large; these never need showing.
const PRIMARY_FIELDS = ["ace_draft", "ace", "aceh", "question", "prompt_ace"];
const HIDDEN_FIELDS = new Set(["id", "type", "verified"]);
const META_FIELDS = new Set(["section", "setting", "speaker", "dialogue", "turn", "title"]);

function datasetLabel(name) {
  const parts = name.split("/");
  const layer = /^layer_(\d)/.exec(parts[0]);
  const title = (parts[0] === "upload" || layer) ? parts[1] : parts[parts.length - 1];
  return {
    chip: layer ? `${t("datasets.layer")} ${layer[1]}` : parts[0] === "upload" ? "Upload" : "",
    title: (title || name).replaceAll("_", " "),
  };
}

async function api(path, { method = "GET", body } = {}) {
  const resp = await fetch("/api" + path, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: "Bearer " + token } : {}),
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  const data = await resp.json().catch(() => ({ error: "Bad response" }));
  if (!resp.ok) throw new Error(data.error || resp.statusText);
  return data;
}

function show(view) {
  for (const v of ["login", "datasets", "review"]) $("view-" + v).hidden = v !== view;
}

function setWho() {
  $("whoami").textContent = profile
    ? `${profile.name || profile.email}${profile.dialect ? " · " + profile.dialect : ""}`
    : "";
}

/* ---------- tabs ---------- */

function showTab(name) {
  if (!["review", "try"].includes(name)) name = "review";
  for (const tab of ["review", "try"]) $("tab-" + tab).hidden = tab !== name;
  for (const btn of document.querySelectorAll(".tabs [role=tab]")) {
    btn.setAttribute("aria-selected", btn.dataset.tab === name ? "true" : "false");
  }
  if (location.hash !== "#" + name) history.replaceState(null, "", "#" + name);
}

for (const btn of document.querySelectorAll(".tabs [role=tab]")) {
  btn.addEventListener("click", () => showTab(btn.dataset.tab));
}
window.addEventListener("hashchange", () => showTab(location.hash.slice(1)));

/* ---------- sign in ---------- */

async function start() {
  showTab(location.hash.slice(1));
  checkModel();
  if (token) {
    try {
      const me = await api("/me");
      profile = me.profile;
      setWho();
      return openDatasets();
    } catch { token = ""; localStorage.removeItem("aceh_token"); }
  }
  show("login");
  try {
    const health = await api("/health");
    if (health.google_client_id) initGoogle(health.google_client_id);
  } catch { /* backend down; form still renders */ }
}

$("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const data = await api("/login", { method: "POST", body: {
      email: $("login-email").value.trim(),
      name: $("login-name").value.trim(),
      dialect: $("login-dialect").value,
    }});
    token = data.token; profile = data.profile;
    localStorage.setItem("aceh_token", token);
    setWho(); openDatasets();
  } catch (err) { alert(err.message); }
});

function initGoogle(clientId) {
  const s = document.createElement("script");
  s.src = "https://accounts.google.com/gsi/client";
  s.onload = () => {
    google.accounts.id.initialize({
      client_id: clientId,
      callback: async (resp) => {
        try {
          const data = await api("/login", { method: "POST", body: {
            google_id_token: resp.credential, dialect: $("login-dialect").value,
          }});
          token = data.token; profile = data.profile;
          localStorage.setItem("aceh_token", token);
          setWho(); openDatasets();
        } catch (err) { alert(err.message); }
      },
    });
    google.accounts.id.renderButton($("google-signin"), { theme: "outline", size: "large" });
  };
  document.head.appendChild(s);
}

/* ---------- datasets ---------- */

async function openDatasets() {
  show("datasets");
  const { datasets } = await api("/datasets");
  const ul = $("dataset-list");
  ul.innerHTML = "";
  // raw/ holds source files for the merged dataset.
  const reviewable = datasets.filter((d) => !d.dataset.includes("/raw/"));
  for (const d of reviewable) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const { chip, title } = datasetLabel(d.dataset);
    const name = document.createElement("span");
    if (chip) {
      const c = document.createElement("span");
      c.className = "chip";
      c.textContent = chip;
      name.appendChild(c);
    }
    name.appendChild(document.createTextNode(title));
    const count = document.createElement("small");
    count.textContent = `${d.rows} ${t("datasets.items")}`;
    btn.title = d.dataset;
    btn.append(name, count);
    btn.addEventListener("click", () => openReview(d.dataset));
    li.appendChild(btn);
    ul.appendChild(li);
  }
  if (!reviewable.length) {
    ul.innerHTML = "";
    const li = document.createElement("li");
    li.className = "muted";
    li.textContent = t("datasets.empty");
    ul.appendChild(li);
  }
}

$("upload-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const file = $("upload-file").files[0];
  if (!file) return;
  const text = await file.text();
  let rows;
  try {
    rows = file.name.endsWith(".json")
      ? JSON.parse(text)
      : text.split("\n").filter((l) => l.trim()).map((l) => JSON.parse(l));
  } catch { return alert("File is not valid JSON/JSONL"); }
  try {
    const data = await api("/uploads", { method: "POST",
      body: { name: $("upload-name").value, rows } });
    $("upload-result").textContent =
      `Uploaded as "${data.dataset}" (${data.rows} rows). Share this page and the dataset name with your speakers.`;
    openDatasets();
  } catch (err) { alert(err.message); }
});

/* ---------- review ---------- */

async function openReview(dataset) {
  current = { dataset, queue: [], item: null };
  tier = (await api("/me")).tier;
  $("specialist-controls").hidden = tier !== "specialist";
  $("everyday-controls").hidden = tier !== "everyday";
  show("review");
  await refill();
}

function renderProgress() {
  if (!lastProgress) return;
  const { total, remaining } = lastProgress;
  $("progress").textContent = `${datasetLabel(current.dataset).title} — ${total - remaining}/${total} ${t("review.rated")}`;
  $("progress-bar").style.width = `${total ? ((total - remaining) / total) * 100 : 0}%`;
}

async function refill() {
  const data = await api(`/items?dataset=${encodeURIComponent(current.dataset)}&limit=25`);
  current.queue = data.items;
  lastProgress = data;
  renderProgress();
  next();
}

function next() {
  current.item = current.queue.shift() || null;
  $("card").hidden = !current.item;
  $("done-msg").hidden = !!current.item;
  if (!current.item) return;
  const holder = $("card-fields");
  holder.innerHTML = "";
  const item = current.item;
  const primary = PRIMARY_FIELDS.find((k) => typeof item[k] === "string" && item[k]);
  const meta = document.createElement("p");
  meta.className = "meta";
  const rest = [];
  for (const [k, v] of Object.entries(item)) {
    if (k === primary || HIDDEN_FIELDS.has(k) || v === null || typeof v === "object") continue;
    if (META_FIELDS.has(k)) {
      const s = document.createElement("span");
      s.textContent = String(v);
      meta.appendChild(s);
    } else rest.push([k, v]);
  }
  if (meta.childNodes.length) holder.appendChild(meta);
  if (primary) {
    const s = document.createElement("p");
    s.className = "sentence";
    s.lang = "ace";
    s.textContent = item[primary];
    holder.appendChild(s);
  }
  for (const [k, v] of rest) {
    const p = document.createElement("p");
    p.className = "field";
    const b = document.createElement("b");
    b.textContent = STRINGS.en["field." + k] ? t("field." + k) : k.replaceAll("_", " ");
    p.append(b, document.createTextNode(String(v)));
    holder.appendChild(p);
  }
  $("correction").value = "";
  $("annotation").value = "";
}

async function submitReview(fields) {
  const body = { dataset: current.dataset, item_id: current.item.id, ...fields };
  try {
    await api("/ratings", { method: "POST", body });
    if (lastProgress) { lastProgress.remaining -= 1; renderProgress(); }
    if (current.queue.length) next(); else await refill();
  } catch (err) { alert(err.message); }
}

$("score-buttons").addEventListener("click", (e) => {
  const score = e.target.dataset?.score;
  if (!score || !current.item) return;
  const fields = { score: Number(score) };
  if ($("correction").value.trim()) fields.correction = $("correction").value.trim();
  if ($("annotation").value.trim()) fields.annotation = $("annotation").value.trim();
  submitReview(fields);
});

$("vote-buttons").addEventListener("click", (e) => {
  const vote = e.target.dataset?.vote;
  if (!vote || !current.item) return;
  submitReview({ vote: Number(vote) });
});

$("back").addEventListener("click", openDatasets);

/* ---------- try the model (no sign-in needed) ---------- */

async function checkModel() {
  let online = false;
  try {
    const health = await api("/health");
    online = !!(health.gpu && health.gpu.configured && health.gpu.ok !== false);
  } catch { online = false; }
  $("gen-offline").hidden = online;
  $("gen-submit").disabled = !online;
  $("gen-prompt").disabled = !online;
}

$("gen-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  $("gen-out").textContent = t("try.wait");
  try {
    const data = await api("/generate", { method: "POST",
      body: { prompt: $("gen-prompt").value } });
    $("gen-out").textContent = `${data.text}\n\n[${data.model} · ${data.ms} ms]`;
  } catch (err) { $("gen-out").textContent = err.message; }
});

document.addEventListener("langchange", () => { renderProgress(); });

start();
