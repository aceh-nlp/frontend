/* "How it works": a coconut palm that grows through four stages. Without this
   script, or with reduced motion, the full palm and all stages simply show. */
"use strict";

(function () {
  const root = document.getElementById("loop");
  if (!root || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const scene = document.getElementById("palm");
  const stages = [...root.querySelectorAll(".loop-stage")];
  const panels = [...root.querySelectorAll(".loop-panel")];
  const toggle = document.getElementById("loop-toggle");
  const panelBox = root.querySelector(".loop-panels");
  const MIN_STEP_MS = 6000;
  const MS_PER_WORD = 250;

  let current = 0;
  let playing = true;
  let onScreen = false;
  let hovering = false;
  let timer = null;

  function show(i) {
    current = i;
    scene.dataset.stage = String(i);
    stages.forEach((b, n) => {
      if (n === i) b.setAttribute("aria-current", "step");
      else b.removeAttribute("aria-current");
    });
    panels.forEach((p, n) => p.classList.toggle("active", n === i));
  }

  // Long panels stay up longer, whatever language they are in.
  function stepMs() {
    const words = panels[current].textContent.trim().split(/\s+/).length;
    return Math.max(MIN_STEP_MS, words * MS_PER_WORD);
  }

  function sync() {
    clearTimeout(timer);
    timer = null;
    const focusWithin = panelBox.contains(document.activeElement);
    if (playing && onScreen && !hovering && !focusWithin && !document.hidden) {
      timer = setTimeout(() => {
        show((current + 1) % stages.length);
        sync();
      }, stepMs());
    }
    toggle.textContent = t(playing ? "loop.pause" : "loop.play");
  }

  stages.forEach((b, i) => b.addEventListener("click", () => {
    playing = false;
    show(i);
    sync();
  }));
  toggle.addEventListener("click", () => {
    playing = !playing;
    sync();
  });
  // Every panel stays in the page for screen readers and the Tab key, so moving
  // focus into one brings it into view.
  panels.forEach((p, i) => p.addEventListener("focusin", () => {
    show(i);
    sync();
  }));
  panelBox.addEventListener("mouseenter", () => { hovering = true; sync(); });
  panelBox.addEventListener("mouseleave", () => { hovering = false; sync(); });
  panelBox.addEventListener("focusout", () => setTimeout(sync));
  document.addEventListener("visibilitychange", sync);
  document.addEventListener("langchange", sync);
  // Watching the palm rather than the section also stops the loop on phones once
  // the reader has scrolled down to the panel text.
  new IntersectionObserver((entries) => {
    onScreen = entries[entries.length - 1].isIntersecting;
    sync();
  }, { threshold: 0.5 }).observe(root.querySelector(".loop-scene"));

  root.classList.add("is-animated");
  show(0);
  sync();
})();
