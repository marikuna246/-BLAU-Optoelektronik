/* Startseiten-Video: Pause-Knopf */
(function () {
  var sec = document.querySelector(".c-video"); if (!sec) return;
  var v = sec.querySelector("video"), b = sec.querySelector(".c-video__toggle");
  function set(paused) {
    if (paused) v.pause(); else { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
    sec.classList.toggle("is-paused", paused);
    b.setAttribute("aria-pressed", paused ? "true" : "false");
    b.setAttribute("aria-label", paused ? b.dataset.lPlay : b.dataset.lPause);
  }
  b.addEventListener("click", function () { set(!v.paused); });
})();
