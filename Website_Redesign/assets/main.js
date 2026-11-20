/* BLAU Optoelektronik – kleine, abhängigkeitsfreie Interaktionen */
(function () {
  "use strict";
  var EN = (document.documentElement.lang || "").toLowerCase().indexOf("en") === 0;
  var doc = document.documentElement;
  doc.classList.add("js");

  /* Intro der Startseite: Logo → Laserlinie → Öffnen (ca. 2,3 s, überspringbar) */
  var intro = document.getElementById("intro");
  if (intro && doc.classList.contains("intro-active")) {
    var opened = false;
    var open = function () {
      if (opened) return;
      opened = true;
      try { sessionStorage.setItem("blau-intro", "1"); } catch (e) {}
      intro.classList.add("is-opening");
      doc.classList.remove("intro-active");
      setTimeout(function () { intro.remove(); }, 950);
    };
    var timer = setTimeout(open, 1550);
    intro.querySelector(".intro__skip").addEventListener("click", function () { clearTimeout(timer); open(); });
    intro.addEventListener("click", function () { clearTimeout(timer); open(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" || e.key === "Enter" || e.key === " ") { clearTimeout(timer); open(); } });
  } else if (intro) {
    intro.remove();
  }
  /* Animationen werden auf Wunsch immer gezeigt – auch wenn im System "Bewegung reduzieren" aktiv ist */
  var reduceMotion = false;

  /* Header-Schatten beim Scrollen */
  var header = document.querySelector(".site-header");
  var darkHero = document.querySelector(".dark-top .hero-dark, .dark-top .page-hero, .dark-top .pd-hero");
  var onScroll = function () {
    var limit = darkHero ? Math.max(8, darkHero.offsetHeight - (header ? header.offsetHeight : 0) - 40) : 8;
    if (header) header.classList.toggle("is-scrolled", window.scrollY > limit);
    var mcta = document.querySelector(".mobile-cta");
    if (mcta) mcta.classList.toggle("is-visible", window.scrollY > 520);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile Navigation */
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    var setOpen = function (open) {
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? (EN ? "Close menu" : "Menü schließen") : (EN ? "Open menu" : "Menü öffnen"));
    };
    toggle.addEventListener("click", function () { setOpen(toggle.getAttribute("aria-expanded") !== "true"); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });
    document.querySelectorAll(".mobile-nav a").forEach(function (a) { a.addEventListener("click", function () { setOpen(false); }); });
    window.addEventListener("resize", function () { if (window.innerWidth >= 1120) setOpen(false); });
  }

  /* Scroll-Animationen automatisch auf allen Seiten vergeben */
  var each = function (sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); };
  each("main .section .section-head, .cta-band, .spotlight, .notice, .partner, .form-card", function (el) {
    if (!el.closest(".reveal, .reveal-stagger")) el.classList.add("reveal");
  });
  each(".cat-grid, .product-grid, .housing-grid, .benefit-list, .downloads, .feature-grid, .steps, .tool-grid, .finder, .jobs, .contact-cards, .stat-strip, .timeline", function (el) {
    if (!el.closest(".hero, .pd-top, .tabpanel")) el.classList.add("reveal-stagger");
  });
  each(".reveal-stagger", function (el) {
    Array.prototype.forEach.call(el.children, function (c, i) { c.style.setProperty("--i", i); });
  });
  /* Datentabellen: Spalten-/Zeilenindex für den "Scan"-Effekt */
  each(".table-wrap .matrix", function (t) {
    Array.prototype.forEach.call(t.tBodies[0] ? t.tBodies[0].rows : [], function (row, r) {
      Array.prototype.forEach.call(row.cells, function (cell, c) { cell.style.setProperty("--c", c); cell.style.setProperty("--r", r); });
    });
  });

  var revealEls = document.querySelectorAll(".reveal, .reveal-stagger, .table-wrap");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); countUp(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* Zahlen zählen hoch (nur belegte Werte, z. B. 100 mW) */
  function countUp(root) {
    if (reduceMotion) return;
    var els = root.matches && root.matches("[data-count]") ? [root] : root.querySelectorAll ? root.querySelectorAll("[data-count]") : [];
    Array.prototype.forEach.call(els, function (el) {
      if (el.dataset.counted) return;
      el.dataset.counted = "1";
      var target = parseFloat(el.dataset.count), suffix = el.dataset.suffix || "", t0 = null, dur = 1200;
      var step = function (ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * e) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  /* Hero: Laserfächer an der Optik des Moduls ausrichten */
  var beam = document.querySelector(".laser-beam");
  var beamImg = document.querySelector(".hero-visual img[data-apex], .hero-product[data-apex]");
  if (beam && beamImg && beamImg.classList.contains("hero-product")) {
    /* Dunkler Hero: freigestelltes Produkt, Fächer bis zum rechten Rand der Bühne */
    var place = function () {
      var stage = beamImg.parentElement, w = stage.offsetWidth, h = stage.offsetHeight;
      var f = beamImg.dataset.apex.split(",").map(parseFloat);
      var ax = beamImg.offsetLeft + f[0] * beamImg.offsetWidth;
      var ay = beamImg.offsetTop + f[1] * beamImg.offsetHeight;
      var x2 = w * 0.985, y1 = Math.max(h * 0.04, ay - h * 0.42), y2 = Math.min(h * 0.98, ay + h * 0.36);
      beam.setAttribute("viewBox", "0 0 " + w + " " + h);
      beam.querySelector(".fan").setAttribute("points", ax + "," + ay + " " + x2 + "," + y1 + " " + x2 + "," + y2);
      ["beam-line", "beam-core"].forEach(function (c) {
        var l = beam.querySelector("." + c);
        l.setAttribute("x1", x2); l.setAttribute("x2", x2); l.setAttribute("y1", y1); l.setAttribute("y2", y2);
      });
      var g = beam.querySelector(".glint"), gh = Math.min(80, (y2 - y1) / 3);
      g.setAttribute("x", x2 - 2); g.setAttribute("width", 4); g.setAttribute("y", y1); g.setAttribute("height", gh);
      g.style.setProperty("--g-to", (y2 - y1 - gh) + "px");
      var ap = beam.querySelector(".aperture");
      ap.setAttribute("cx", ax); ap.setAttribute("cy", ay); ap.setAttribute("r", 4);
      beam.classList.add("is-ready");
    };
    if (beamImg.complete) place(); else beamImg.addEventListener("load", place);
    window.addEventListener("resize", place);
  } else if (beam && beamImg) {
    var place = function () {
      var box = beamImg.parentElement, w = box.offsetWidth, h = box.offsetHeight;
      var W = beamImg.naturalWidth || 3184, H = beamImg.naturalHeight || 2388;
      var f = beamImg.dataset.apex.split(",").map(parseFloat);
      var s = Math.max(w / W, h / H), dw = W * s, dh = H * s;
      var ox = (w - dw) / 2, oy = (h - dh) * 0.52;
      var m = getComputedStyle(beamImg).transform, k = 1;
      if (m && m !== "none") k = parseFloat(m.split("(")[1]) || 1;
      var ax = w / 2 + (ox + f[0] * dw - w / 2) * k;
      var ay = h / 2 + (oy + f[1] * dh - h / 2) * k;
      var x2 = w * 0.93, y1 = Math.max(h * 0.1, ay - h * 0.36), y2 = Math.min(h * 0.92, ay + h * 0.3);
      beam.setAttribute("viewBox", "0 0 " + w + " " + h);
      beam.querySelector(".fan").setAttribute("points", ax + "," + ay + " " + x2 + "," + y1 + " " + x2 + "," + y2);
      ["beam-line", "beam-core"].forEach(function (c) {
        var l = beam.querySelector("." + c);
        l.setAttribute("x1", x2); l.setAttribute("x2", x2); l.setAttribute("y1", y1); l.setAttribute("y2", y2);
      });
      var g = beam.querySelector(".glint"), gh = Math.min(70, (y2 - y1) / 3);
      g.setAttribute("x", x2 - 2); g.setAttribute("width", 4); g.setAttribute("y", y1); g.setAttribute("height", gh);
      g.style.setProperty("--g-to", (y2 - y1 - gh) + "px");
      var ap = beam.querySelector(".aperture");
      ap.setAttribute("cx", ax); ap.setAttribute("cy", ay); ap.setAttribute("r", 3.5);
      beam.classList.add("is-ready");
    };
    if (beamImg.complete) place(); else beamImg.addEventListener("load", place);
    window.addEventListener("resize", place);
  }

  /* Produkt-Slideshow: Autoplay, Pfeile, Tabs, Tastatur, Wischen */
  each("[data-slider]", function (root) {
    var medias = root.querySelectorAll(".slider__media"), panels = root.querySelectorAll(".slider__panel");
    var tabs = root.querySelectorAll('[role="tab"]'), stage = root.querySelector(".slider__stage"), scan = root.querySelector(".slider__scan");
    var toggle = root.querySelector("[data-toggle]"), n = medias.length, cur = 0, timer = null;
    var interval = parseInt(root.dataset.interval, 10) || 6000, stopped = false, hover = false, inView = false;
    root.style.setProperty("--interval", interval + "ms");
    var setH = function () { stage.style.setProperty("--stage-h", stage.offsetHeight + "px"); };
    setH(); window.addEventListener("resize", setH);
    var go = function (i, focusTab) {
      i = (i + n) % n; if (i === cur) return;
      var prev = medias[cur];
      prev.classList.remove("is-active"); prev.classList.add("is-leaving");
      setTimeout(function () { prev.classList.remove("is-leaving"); }, 650);
      medias[i].classList.add("is-active");
      panels.forEach(function (p, k) { var on = k === i; p.classList.toggle("is-active", on); if (on) p.removeAttribute("aria-hidden"); else p.setAttribute("aria-hidden", "true"); });
      tabs.forEach(function (t, k) { var on = k === i; t.setAttribute("aria-selected", String(on)); t.tabIndex = on ? 0 : -1; });
      var tab = tabs[i];
      if (tab && tab.scrollIntoView && root.querySelector(".slider__tabs").scrollWidth > root.querySelector(".slider__tabs").clientWidth) {
        tab.parentNode.scrollTo({ left: tab.offsetLeft - 40, behavior: "smooth" });
      }
      if (focusTab) tab.focus();
      scan.classList.remove("is-scanning"); void scan.offsetWidth; scan.classList.add("is-scanning");
      cur = i; schedule();
    };
    var schedule = function () {
      clearTimeout(timer);
      if (stopped || hover || !inView || document.hidden) return;
      timer = setTimeout(function () { go(cur + 1); }, interval);
    };
    var setPaused = function () { root.classList.toggle("is-paused", hover && !stopped); };
    root.querySelector("[data-next]").addEventListener("click", function () { go(cur + 1); });
    root.querySelector("[data-prev]").addEventListener("click", function () { go(cur - 1); });
    tabs.forEach(function (t, k) {
      t.addEventListener("click", function () { go(k); });
      t.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") { e.preventDefault(); go(cur + 1, true); }
        if (e.key === "ArrowLeft") { e.preventDefault(); go(cur - 1, true); }
      });
    });
    toggle.addEventListener("click", function () {
      stopped = !stopped;
      toggle.setAttribute("aria-pressed", String(stopped));
      toggle.setAttribute("aria-label", stopped ? (EN ? "Start automatic rotation" : "Automatischen Wechsel starten") : (EN ? "Pause automatic rotation" : "Automatischen Wechsel anhalten"));
      root.classList.toggle("is-stopped", stopped);
      root.querySelector(".slider__info").setAttribute("aria-live", stopped ? "polite" : "off");
      /* Fortschrittsbalken neu starten */
      var t = tabs[cur]; t.setAttribute("aria-selected", "false"); void t.offsetWidth; t.setAttribute("aria-selected", "true");
      schedule();
    });
    root.addEventListener("mouseenter", function () { hover = true; setPaused(); clearTimeout(timer); });
    root.addEventListener("mouseleave", function () { hover = false; setPaused(); schedule(); });
    root.addEventListener("focusin", function () { hover = true; setPaused(); clearTimeout(timer); });
    root.addEventListener("focusout", function (e) { if (!root.contains(e.relatedTarget)) { hover = false; setPaused(); schedule(); } });
    document.addEventListener("visibilitychange", schedule);
    /* Wischen auf dem Bild */
    var x0 = null;
    stage.addEventListener("pointerdown", function (e) { x0 = e.clientX; });
    stage.addEventListener("pointerup", function (e) {
      if (x0 === null) return; var dx = e.clientX - x0; x0 = null;
      if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1));
    });
    stage.addEventListener("pointercancel", function () { x0 = null; });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (en) { inView = en[0].isIntersecting; schedule(); }, { threshold: 0.35 }).observe(root);
    } else { inView = true; schedule(); }
  });

  /* Downloads: Datei noch nicht hochgeladen? Dann Hinweis statt totem Link */
  each("[data-optional-file]", function (card) {
    var url = card.dataset.optionalFile;
    fetch(url, { cache: "no-store" }).then(function (r) {
      if (!r.ok) throw new Error("fehlt");
      var len = r.headers.get("content-length"), sz = card.querySelector("[data-size]");
      if (len && sz) sz.textContent = "PDF · " + (len / 1048576).toFixed(2).replace(".", (EN ? "." : ",")) + " MB";
    }).catch(function () {
      card.classList.add("is-missing");
      var m = card.querySelector(".dl-missing"); if (m) m.hidden = false;
      card.querySelectorAll(".dl-links a").forEach(function (a) { a.setAttribute("aria-disabled", "true"); a.tabIndex = -1; });
    });
  });

  /* Wechselnde Branche im Hero */
  each(".hero-rotator .rot", function (el) {
    var words = (el.dataset.words || "").split("|"), i = 0;
    if (words.length < 2) return;
    setInterval(function () {
      if (document.hidden) return;
      el.classList.add("is-out");
      setTimeout(function () { i = (i + 1) % words.length; el.textContent = words[i]; el.classList.remove("is-out"); }, 380);
    }, 2600);
  });

  /* Video: erst laden und abspielen, wenn es sichtbar ist */
  each(".video-frame", function (frame) {
    var v = frame.querySelector("video"), btn = frame.querySelector(".video-toggle"), userPaused = false;
    var setVH = function () { frame.style.setProperty("--vh", frame.offsetHeight + "px"); };
    setVH(); window.addEventListener("resize", setVH);
    var play = function () {
      if (!v.src && v.dataset.src) v.src = v.dataset.src;
      var p = v.play(); if (p && p.catch) p.catch(function () {});
      frame.classList.add("is-playing");
    };
    btn.addEventListener("click", function () {
      if (v.paused) { userPaused = false; play(); btn.setAttribute("aria-pressed", "false"); btn.setAttribute("aria-label", (EN ? "Pause video" : "Video pausieren")); }
      else { userPaused = true; v.pause(); btn.setAttribute("aria-pressed", "true"); btn.setAttribute("aria-label", (EN ? "Play video" : "Video abspielen")); }
    });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (en) {
        if (en[0].isIntersecting) { if (!userPaused) play(); } else if (!v.paused) v.pause();
      }, { threshold: 0.25 }).observe(frame);
    } else { play(); }
  });

  /* Laufband: Inhalt verdoppeln für eine nahtlose Schleife */
  each(".ticker__track", function (t) { t.innerHTML += t.innerHTML; });

  /* Laser-Fortschrittsbalken */
  var bar = document.createElement("div");
  bar.className = "scroll-progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);
  var ticking = false;
  var updateBar = function () {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? window.scrollY / max : 0;
    bar.style.setProperty("--p", p.toFixed(4));
    bar.classList.toggle("is-visible", window.scrollY > 80);
    ticking = false;
  };
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(updateBar); } }, { passive: true });
  updateBar();

  /* Tabs (Branchen) – WAI-ARIA Tabs-Muster mit Pfeiltasten */
  document.querySelectorAll("[data-tabs]").forEach(function (root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
    var select = function (tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
      });
      if (focus) tab.focus();
    };
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { select(t); });
      t.addEventListener("keydown", function (e) {
        var n = null;
        if (e.key === "ArrowRight") n = tabs[(i + 1) % tabs.length];
        if (e.key === "ArrowLeft") n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === "Home") n = tabs[0];
        if (e.key === "End") n = tabs[tabs.length - 1];
        if (n) { e.preventDefault(); select(n, true); }
      });
    });
  });

  /* Produktfilter */
  var filterBar = document.querySelector("[data-filter]");
  if (filterBar) {
    var buttons = filterBar.querySelectorAll("button");
    var cards = document.querySelectorAll("[data-category]");
    var intros = document.querySelectorAll("[data-intro]");
    var status = document.getElementById("filter-status");
    var apply = function (cat, push) {
      var shown = 0;
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.value === cat)); });
      cards.forEach(function (c) {
        var match = cat === "alle" || c.dataset.category === cat;
        c.hidden = !match;
        c.classList.remove("is-entering");
        if (match) {
          if (push && !reduceMotion) { c.style.setProperty("--i", shown); void c.offsetWidth; c.classList.add("is-entering"); }
          shown++;
        }
      });
      intros.forEach(function (i) { i.classList.toggle("is-visible", i.dataset.intro === cat); });
      if (status) status.textContent = shown + (shown === 1 ? (EN ? " product" : " Produkt") : (EN ? " products" : " Produkte")) + (EN ? " shown" : " angezeigt");
      if (push) {
        var url = new URL(window.location.href);
        if (cat === "alle") url.searchParams.delete("kategorie"); else url.searchParams.set("kategorie", cat);
        history.replaceState(null, "", url);
      }
    };
    buttons.forEach(function (b) { b.addEventListener("click", function () { apply(b.dataset.value, true); }); });
    var initial = new URLSearchParams(window.location.search).get("kategorie");
    var valid = Array.prototype.some.call(buttons, function (b) { return b.dataset.value === initial; });
    apply(valid ? initial : "alle", false);
  }

  /* Produktgalerie */
  var mainImg = document.querySelector("[data-gallery-main]");
  if (mainImg) {
    document.querySelectorAll("[data-gallery-thumb]").forEach(function (btn, _, all) {
      btn.addEventListener("click", function () {
        all.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
        if (mainImg.getAttribute("src") === btn.dataset.src) return;
        var swap = function () {
          mainImg.src = btn.dataset.src;
          mainImg.alt = btn.dataset.alt;
          var done = function () { mainImg.classList.remove("is-swapping"); };
          if (mainImg.complete) requestAnimationFrame(done); else mainImg.addEventListener("load", done, { once: true });
        };
        if (reduceMotion) { swap(); return; }
        mainImg.classList.add("is-swapping");
        setTimeout(swap, 220);
      });
    });
  }

  /* Sub-Navigation: aktiven Abschnitt markieren */
  var subLinks = document.querySelectorAll(".subnav a");
  if (subLinks.length && "IntersectionObserver" in window) {
    var map = {};
    subLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          subLinks.forEach(function (a) { a.classList.remove("is-active"); });
          if (map[en.target.id]) map[en.target.id].classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) so.observe(s); });
  }

  /* Kontaktformular: Validierung (Versand im Prototyp nicht angebunden) */
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    var params = new URLSearchParams(window.location.search);
    var produkt = params.get("produkt");
    if (produkt) {
      var subj = form.querySelector("#betreff");
      var msg = form.querySelector("#nachricht");
      if (subj) subj.value = (EN ? "Inquiry about " : "Anfrage zu ") + produkt;
      if (msg && !msg.value) msg.value = (EN ? "Hello,\n\nI am interested in " : "Guten Tag,\n\nich interessiere mich für ") + produkt + (EN ? ".\n\nMy application:\n" : ".\n\nMeine Anwendung:\n");
    }
    /* Übergabe aus dem Modul-Konfigurator */
    var konfig = params.get("konfig");
    if (konfig) {
      var subj2 = form.querySelector("#betreff"), msg2 = form.querySelector("#nachricht"), sel = form.querySelector("#anliegen");
      if (subj2) subj2.value = (EN ? "Quote request " : "Angebotsanfrage ") + (produkt || (EN ? "laser module" : "Lasermodul")) + (EN ? " (configurator)" : " (Konfigurator)");
      if (sel) sel.value = (EN ? "Request a quote" : "Angebot anfragen");
      if (msg2) msg2.value = (EN ? "Hello,\n\nplease send me a quote for the following configuration:\n\n" : "Guten Tag,\n\nbitte senden Sie mir ein Angebot für folgende Konfiguration:\n\n") + konfig + (EN ? "\n\nMy application:\n" : "\n\nMeine Anwendung:\n");
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstInvalid = null;
      form.querySelectorAll("[required]").forEach(function (f) {
        var ok = f.type === "checkbox" ? f.checked : f.value.trim() !== "" && (f.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
        f.setAttribute("aria-invalid", String(!ok));
        if (!ok && !firstInvalid) firstInvalid = f;
      });
      if (firstInvalid) { firstInvalid.focus(); return; }
      var success = form.querySelector(".form-success");
      success.classList.add("is-visible");
      success.focus();
      form.reset();
    });
    form.querySelectorAll("[required]").forEach(function (f) {
      f.addEventListener("input", function () { if (f.getAttribute("aria-invalid") === "true") f.setAttribute("aria-invalid", "false"); });
    });
  }

  /* Jahr im Footer */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
