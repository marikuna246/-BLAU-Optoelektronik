/* One-Page-Startseite (Testordner): ruhige Animationen */
(function () {
  document.documentElement.classList.add("js");

  // Kopfzeile beim Scrollen absetzen
  var header = document.querySelector("[data-header]");
  function onScroll() { header.classList.toggle("is-scrolled", scrollY > 20); parallax(); }

  // Einblenden beim Scrollen, Elemente einer Gruppe leicht versetzt
  var items = [].slice.call(document.querySelectorAll(".op-reveal"));
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, sib = [].slice.call(el.parentElement.children).filter(function (c) { return c.classList.contains("op-reveal"); });
        el.style.transitionDelay = (Math.max(0, sib.indexOf(el)) * 0.09) + "s";
        el.classList.add("is-in"); io.unobserve(el);
        setTimeout(function () { el.style.transitionDelay = ""; }, 1600); // danach reagiert Hover ohne Verzögerung
        el.querySelectorAll("[data-count]").forEach(count);
        if (el.hasAttribute("data-count")) count(el);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: .15 });
    items.forEach(function (el) { io.observe(el); });
  } else items.forEach(function (el) { el.classList.add("is-in"); });

  // Zahlen hochzählen
  function count(el) {
    var end = +el.dataset.count, start = end > 1000 ? end - 40 : 0, t0 = performance.now(), dur = 1400;
    (function step(now) {
      var p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(start + (end - start) * e);
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }

  // Hero-Produkt: dreht sich langsam (Bildfolge), mit der Maus ziehen dreht von Hand
  var spin = document.querySelector("[data-spin]");
  if (spin) {
    var base = spin.dataset.spin, N = +spin.dataset.n || 36, frames = [], loaded = 0, cur = 0, auto = true, timer;
    for (var i = 1; i <= N; i++) { var im = new Image(); im.onload = function () { if (++loaded === N) play(); }; im.src = base + i + "." + (spin.dataset.ext || "jpg"); frames.push(im); }
    function show(k) { cur = ((k % N) + N) % N; spin.src = frames[cur].src; }
    function play() { clearInterval(timer); timer = setInterval(function () { if (auto && !document.hidden) show(cur + 1); }, 140); }
    var stage = spin.closest(".op-hero__stage"), drag = false, x0 = 0, f0 = 0;
    stage.style.cursor = "grab"; stage.style.touchAction = "pan-y";
    stage.addEventListener("pointerdown", function (e) { drag = true; auto = false; x0 = e.clientX; f0 = cur; stage.setPointerCapture(e.pointerId); stage.style.cursor = "grabbing"; });
    stage.addEventListener("pointermove", function (e) { if (drag) show(f0 - Math.round((e.clientX - x0) / (stage.clientWidth / N * .9))); });
    function up() { if (!drag) return; drag = false; stage.style.cursor = "grab"; setTimeout(function () { auto = true; }, 2500); }
    stage.addEventListener("pointerup", up); stage.addEventListener("pointercancel", up);
  }

  // leichte Tiefenwirkung: Hero-Produkt bewegt sich beim Scrollen etwas langsamer
  var stageEl = document.querySelector(".op-hero__stage");
  function parallax() { if (stageEl && scrollY < innerHeight) stageEl.style.translate = "0 " + (scrollY * .12).toFixed(1) + "px"; }

  addEventListener("scroll", onScroll, { passive: true }); onScroll();
})();
