/* Aceh NLP pages: what the evaluation and model pages share. All state lives behind
   /api (same origin). */
"use strict";

const $ = (id) => document.getElementById(id);
let token = localStorage.getItem("aceh_token") || "";

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
  // A refused token is over: back to the sign-in form.
  if (resp.status === 401 && token && !path.startsWith("/login")) { localStorage.removeItem("aceh_token"); location.reload(); }
  if (!resp.ok) throw Object.assign(new Error(data.error || resp.statusText), { status: resp.status });
  return data;
}
