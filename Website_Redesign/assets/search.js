/* Website-Suche (Such-Button im Header, Tastenkürzel "/" oder Strg+K).
   Index: assets/search-de.js / search-en.js (erzeugt von _build/site-search.js). */
(function () {
  var EN = document.documentElement.lang === "en";
  var BASE = EN ? "../" : "";
  var T = EN
    ? { ph: "Search products, topics, datasheets …", close: "Close", none: "No results for", hint: "Try e.g. “MVnano”, “Powell”, “660 nm” or “laser class”.", finder: "Search in product finder", types: { p: "Product", s: "Page", a: "Section", d: "Download", h: "Home" }, sug: ["MVnano", "Powell lens", "Laser class", "Datasheet", "Configurator"] , label: "Website search" }
    : { ph: "Produkte, Themen, Datenblätter suchen …", close: "Schließen", none: "Keine Treffer für", hint: "Versuchen Sie z. B. „MVnano“, „Powell“, „660 nm“ oder „Laserklasse“.", finder: "Im Produktfinder suchen", types: { p: "Produkt", s: "Seite", a: "Abschnitt", d: "Download", h: "Start" }, sug: ["MVnano", "Powell-Linse", "Laserklasse", "Datenblatt", "Konfigurator"], label: "Website-Suche" };
  var data = null, dlg, input, list, sel = -1, items = [], lastFocus;

  function norm(s) {
    return (s || "").toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
      .normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9.]+/g, " ").trim();
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function load(cb) {
    if (data) return cb();
    var s = document.createElement("script");
    s.src = BASE + "assets/search-" + (EN ? "en" : "de") + ".js";
    s.onload = function () {
      data = (window.BLAU_SEARCH || []).map(function (e) { e._t = norm(e.t); e._k = norm(e.k + " " + e.d); e._x = norm(e.x); return e; });
      cb();
    };
    document.head.appendChild(s);
  }

  function build() {
    dlg = document.createElement("div");
    dlg.className = "ss"; dlg.hidden = true;
    dlg.setAttribute("role", "dialog"); dlg.setAttribute("aria-modal", "true"); dlg.setAttribute("aria-label", T.label);
    dlg.innerHTML =
      '<div class="ss__back" data-close></div>' +
      '<div class="ss__box">' +
        '<div class="ss__bar"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>' +
        '<input type="search" autocomplete="off" spellcheck="false" placeholder="' + esc(T.ph) + '" aria-label="' + esc(T.ph) + '" aria-controls="ss-list">' +
        '<button type="button" class="ss__x" data-close aria-label="' + esc(T.close) + '"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>' +
        '<div class="ss__body"><ul class="ss__list" id="ss-list" role="listbox"></ul></div>' +
      "</div>";
    document.body.appendChild(dlg);
    input = dlg.querySelector("input"); list = dlg.querySelector(".ss__list");
    dlg.addEventListener("click", function (e) { if (e.target.closest("[data-close]")) close(); var s = e.target.closest("[data-sug]"); if (s) { input.value = s.getAttribute("data-sug"); run(); input.focus(); } });
    input.addEventListener("input", run);
    input.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); move(e.key === "ArrowDown" ? 1 : -1); }
      else if (e.key === "Enter") { var a = items[sel < 0 ? 0 : sel]; if (a) { e.preventDefault(); a.click(); } }
    });
    dlg.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { e.preventDefault(); close(); }
      if (e.key === "Tab") { // Fokus im Dialog halten
        var f = dlg.querySelectorAll("input,button,a[href]"), first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  function search(q) {
    var words = norm(q).split(" ").filter(Boolean);
    if (!words.length) return [];
    var res = [];
    data.forEach(function (e) {
      var s = 0;
      for (var i = 0; i < words.length; i++) {
        var w = words[i], ws = 0;
        if (e._t === w) ws = 60;
        else if ((" " + e._t).indexOf(" " + w) > -1) ws = 30;
        else if (e._t.indexOf(w) > -1) ws = 20;
        else if (e._k.indexOf(w) > -1) ws = 10;
        else if (e._x.indexOf(w) > -1) ws = 3;
        if (!ws) return; // alle Wörter müssen vorkommen
        s += ws;
      }
      s += { p: 8, d: 4, s: 3, h: 0, a: 1 }[e.y] || 0;
      res.push({ e: e, s: s });
    });
    return res.sort(function (a, b) { return b.s - a.s; }).slice(0, 10).map(function (r) { return r.e; });
  }

  function snippet(e, q) {
    var w = norm(q).split(" ")[0], src = e.d || "";
    if (!src || (e.y !== "d" && norm(src).indexOf(w) < 0)) {
      var low = norm(e.x), i = low.indexOf(w);
      if (i > -1 && e.x.length === low.length) { var a = Math.max(0, i - 50); src = (a ? "… " : "") + e.x.slice(a, a + 150) + " …"; }
      else if (!src) src = e.x.slice(0, 140) + " …";
    }
    return esc(src.length > 170 ? src.slice(0, 168) + " …" : src);
  }
  function mark(t, q) {
    var out = esc(t);
    norm(q).split(" ").filter(function (w) { return w.length > 1; }).forEach(function (w) {
      out = out.replace(new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>");
    });
    return out;
  }

  function run() {
    var q = input.value.trim();
    sel = -1;
    if (!q) {
      list.innerHTML = '<li class="ss__sug">' + T.sug.map(function (s) { return '<button type="button" data-sug="' + esc(s) + '">' + esc(s) + "</button>"; }).join("") + "</li>";
      items = []; return;
    }
    var r = search(q);
    var finder = '<li class="ss__more"><a href="produkte.html?q=' + encodeURIComponent(q) + '#produktfinder">' + esc(T.finder) + ": „" + esc(q) + "“ →</a></li>";
    if (!r.length) {
      list.innerHTML = '<li class="ss__none"><b>' + esc(T.none) + " „" + esc(q) + "“</b><span>" + esc(T.hint) + "</span></li>" + finder;
    } else {
      list.innerHTML = r.map(function (e, i) {
        var href = /^https?:|^assets\//.test(e.u) ? (/^assets\//.test(e.u) ? BASE + e.u : e.u) : e.u;
        var ext = e.y === "d" ? ' target="_blank" rel="noopener"' : "";
        return '<li><a class="ss__hit ss__hit--' + e.y + '" id="ss-' + i + '" role="option" href="' + esc(href) + '"' + ext + ">" +
          '<span class="ss__type">' + esc(T.types[e.y] || "") + "</span>" +
          '<span class="ss__t">' + mark(e.t, q) + "</span>" +
          '<span class="ss__d">' + snippet(e, q) + "</span></a></li>";
      }).join("") + finder;
    }
    items = [].slice.call(list.querySelectorAll("a"));
  }
  function move(d) {
    if (!items.length) return;
    sel = (sel + d + items.length) % items.length;
    items.forEach(function (a, i) { a.classList.toggle("is-sel", i === sel); a.setAttribute("aria-selected", i === sel); });
    items[sel].scrollIntoView({ block: "nearest" });
    input.setAttribute("aria-activedescendant", items[sel].id || "");
  }

  function open() {
    if (!dlg) build();
    lastFocus = document.activeElement;
    if (document.body.classList.contains("nav-open")) { var nt = document.querySelector(".nav-toggle"); if (nt) nt.click(); }
    dlg.hidden = false; document.documentElement.classList.add("ss-open");
    input.focus(); input.select();
    load(run);
  }
  function close() {
    dlg.hidden = true; document.documentElement.classList.remove("ss-open");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.addEventListener("click", function (e) { if (e.target.closest(".search-toggle")) { e.preventDefault(); open(); } });
  document.addEventListener("keydown", function (e) {
    if (dlg && !dlg.hidden) return;
    var t = e.target, typing = t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));
    if ((e.key === "/" && !typing) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k")) { e.preventDefault(); open(); }
  });
})();
