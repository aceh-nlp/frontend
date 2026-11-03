/* Aceh NLP: talk with the model. No sign-in needed; the backend rate-limits it. */
"use strict";

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

checkModel();
