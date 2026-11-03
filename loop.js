/* "How it works": a highlight steps round the recipe book loop. Without this
   script, or with reduced motion, the whole diagram simply stays as it is. */
"use strict";

(function () {
  const root = document.getElementById("loop");
  if (!root || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const steps = [...root.querySelectorAll("[data-step]")];
  const arrows = [...root.querySelectorAll("[data-from]")];
  const toggle = document.getElementById("loop-toggle");
  const STEP_MS = 3000;

  let current = 0;
  let playing = true;
  let onScreen = false;
  let timer = null;

  function show(i) {
    current = i;
    steps.forEach((s) => s.classList.toggle("is-current", Number(s.dataset.step) === i));
    arrows.forEach((a) => a.classList.toggle("is-current", Number(a.dataset.from) === i));
  }

  function sync() {
    clearInterval(timer);
    timer = null;
    if (playing && onScreen && !document.hidden) {
      timer = setInterval(() => show((current + 1) % steps.length), STEP_MS);
    }
    toggle.textContent = t(playing ? "loop.pause" : "loop.play");
  }

  toggle.addEventListener("click", () => {
    playing = !playing;
    sync();
  });
  document.addEventListener("visibilitychange", sync);
  document.addEventListener("langchange", sync);
  new IntersectionObserver((entries) => {
    onScreen = entries[entries.length - 1].isIntersecting;
    sync();
  }, { threshold: 0.25 }).observe(root);

  root.classList.add("is-animated");
  show(0);
  sync();
})();
