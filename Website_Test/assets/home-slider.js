/* Vollbild-Produktslideshow auf der Startseite (Testordner) */
(function () {
  var root = document.querySelector("[data-stage]");
  if (!root) return;
  var slides = root.querySelectorAll(".c-slide"), dots = root.querySelectorAll("[data-go]"), toggle = root.querySelector("[data-toggle]");
  var n = slides.length, cur = 0, timer = null, stopped = false, hold = false;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var DELAY = 6500;
  root.style.setProperty("--delay", DELAY + "ms");

  function go(i) {
    i = (i + n) % n;
    slides.forEach(function (s, k) {
      var on = k === i;
      s.classList.toggle("is-active", on);
      if (on) s.removeAttribute("aria-hidden"); else s.setAttribute("aria-hidden", "true");
      s.querySelectorAll("a").forEach(function (a) { if (on) a.removeAttribute("tabindex"); else a.setAttribute("tabindex", "-1"); });
    });
    dots.forEach(function (d, k) { d.setAttribute("aria-selected", k === i ? "true" : "false"); });
    cur = i;
    restart();
  }
  function restart() {
    clearTimeout(timer);
    root.classList.remove("is-running"); void root.offsetWidth;
    if (stopped || hold) return;
    root.classList.add("is-running");
    timer = setTimeout(function () { go(cur + 1); }, DELAY);
  }
  function setStopped(v) {
    stopped = v;
    toggle.setAttribute("aria-pressed", v ? "true" : "false");
    toggle.setAttribute("aria-label", v ? toggle.dataset.lPlay : toggle.dataset.lPause);
    root.classList.toggle("is-stopped", v);
    restart();
  }
  dots.forEach(function (d) { d.addEventListener("click", function () { go(+d.dataset.go); }); });
  toggle.addEventListener("click", function () { setStopped(!stopped); });
  root.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); go(cur + 1); dots[cur].focus(); }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); go(cur - 1); dots[cur].focus(); }
  });
  // Pause beim Lesen (Maus darüber oder Tastaturfokus)
  root.addEventListener("mouseenter", function () { hold = true; restart(); });
  root.addEventListener("mouseleave", function () { hold = false; restart(); });
  root.addEventListener("focusin", function () { hold = true; restart(); });
  root.addEventListener("focusout", function (e) { if (!root.contains(e.relatedTarget)) { hold = false; restart(); } });
  // Wischen auf dem Handy
  var x0 = null;
  root.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  root.addEventListener("touchend", function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 50) go(cur + (dx < 0 ? 1 : -1));
  });
  document.addEventListener("visibilitychange", function () { if (document.hidden) clearTimeout(timer); else restart(); });
  // Bei "Bewegung reduzieren" läuft der Wechsel weiter, aber nur als Überblenden (siehe CSS); Pause-Knopf bleibt
  restart();
})();
