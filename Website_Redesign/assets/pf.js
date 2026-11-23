/* Produktfinder auf der Produktseite – Aufbau nach dem Muster großer Laserhersteller:
   Filterfeld (Wellenlänge, Betriebsart, Leistung, Anwendung, Bereich, Produkt, Ausstattung, Suche) + Ergebniskarten.
   Daten: window.BLAU_FINDER (assets/finder-data.js, aus products.json erzeugt) + Ergänzungen unten. */
(function () {
  var root = document.querySelector("[data-pf]");
  if (!root || !window.BLAU_FINDER) return;
  var EN = (document.documentElement.lang || "de").slice(0, 2) === "en";
  var t = function (de, en) { return EN ? en : de; };
  var DS = (EN ? "../" : "") + "assets/downloads/datenblaetter/";
  var PAGE = 9;

  // Ergänzungen je Produkt (aus den Produktseiten und der Startseite des Prototyps)
  var X = {
    mvnano:   { area: "machine-vision", apps: ["mv", "auto", "me"], mode: ["cw"], feats: [], ds: ["FP-MVnano-25_Datenblatt_DE.pdf", "FP-MVnano-25_Datasheet_EN.pdf"] },
    mvpulse:  { area: "machine-vision", apps: ["mv", "auto", "med"], mode: ["pulsed"], feats: ["m12"], cls: "2", ds: ["FP-MVpulse-25_Datenblatt_DE.pdf", "FP-MVpulse-25_Datasheet_EN.pdf"] },
    mvpulsehp:{ area: "machine-vision", apps: ["mv", "auto"], mode: ["pulsed"], feats: [], ds: ["MVpulseHP_Datenblatt_DE.pdf", "MVpulseHP_Datasheet_EN.pdf"] },
    mvsquare: { area: "machine-vision", apps: ["mv", "auto"], mode: ["cw"], feats: ["fixed"] },
    mvfemto:  { area: "machine-vision", apps: ["mv", "auto", "me"], mode: ["cw", "mod"], feats: ["compact"] },
    mvpico:   { area: "machine-vision", apps: ["mv", "auto", "me"], mode: ["cw"], feats: ["compact", "focus"] },
    mvmicro:  { area: "machine-vision", apps: ["mv", "auto"], mode: ["cw"], feats: ["m12", "focus"] },
    mvgoldhp: { area: "machine-vision", apps: ["mv", "auto"], mode: ["cw", "mod"], feats: ["tec"], ds: ["FP-MVgoldHP_Datenblatt_DE.pdf", "FP-MVgoldHP_Datasheet_EN.pdf"] },
    linienlaser: { area: "linienlaser", apps: ["med", "mb", "auto"], mode: ["cw", "mod"], feats: [], wl: [405, 905], p: 100, ds: ["FP-L-XXX-2026_Datenblatt_DE.pdf", "FP-L-XXX-2026_Datasheet_EN.pdf"] },
    doe:      { area: "linienlaser", apps: ["mb", "fe"], mode: ["cw"], feats: ["focus"] },
    punktlaser: { area: "punktlaser", apps: ["med", "mb", "me", "fe"], mode: ["cw"], feats: [], ds: ["FP-D-XXX-2026_Datenblatt_DE.pdf", "FP-D-XXX-2026_Datasheet_EN.pdf"] },
    "powell-linsen": { area: "powell-linsen", apps: ["fe"], mode: [], feats: [], ds: ["Powell-Linsen_Datenblatt_DE.pdf", "Powell-Lenses_Datasheet_EN.pdf"] },
    oem:      { area: "oem", apps: ["med", "mb", "me", "fe"], mode: [], feats: [] },
  };
  var APPS = { mv: t("Bildverarbeitung / 3D-Messung", "Machine vision / 3D measurement"), med: t("Medizintechnik", "Medical technology"), mb: t("Maschinenbau", "Mechanical engineering"), auto: t("Automatisierung", "Automation"), me: t("Mikroelektronik", "Microelectronics"), fe: t("Forschung & Entwicklung", "Research & development") };
  var AREAS = { "machine-vision": "Machine Vision", linienlaser: t("Linienlaser", "Line lasers"), punktlaser: t("Punktlaser", "Dot lasers"), "powell-linsen": t("Powell-Linsen", "Powell lenses"), oem: t("OEM-Module", "OEM modules") };
  var FEATS = {
    focus: [t("Fokus einstellbar", "Adjustable focus"), '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M1 12h4M19 12h4"/>'],
    m12: [t("M12-Anschluss", "M12 connector"), '<circle cx="12" cy="12" r="9"/><circle cx="9" cy="9" r="1.2"/><circle cx="15" cy="9" r="1.2"/><circle cx="9" cy="15" r="1.2"/><circle cx="15" cy="15" r="1.2"/>'],
    tec: [t("Aktive Kühlung (TEC)", "Active cooling (TEC)"), '<path d="M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z"/><path d="M17 6h3M17 10h3M17 14h2"/>'],
    compact: [t("Kompakt (bis Ø 10 mm)", "Compact (up to Ø 10 mm)"), '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/><rect x="9" y="9" width="6" height="6" rx="1"/>'],
    fixed: [t("Ab Werk justiert", "Factory-aligned"), '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>'],
  };
  var MODES = { cw: t("Dauerbetrieb (CW)", "Continuous (CW)"), pulsed: t("Gepulst", "Pulsed"), mod: t("Modulierbar", "Modulatable") };
  var POWERS = [["p1", "≤ 10 mW", 0, 10], ["p2", "11 – 50 mW", 11, 50], ["p3", "51 – 100 mW", 51, 100], ["p4", "> 100 mW", 101, 1e9]];
  var TYPES = { line: t("Linienlaser", "Line laser"), dot: t("Punktlaser", "Dot laser"), pattern: t("Strahlmuster (DOE)", "Beam patterns (DOE)"), lens: t("Optik", "Optics"), oem: t("Kundenspezifisch", "Custom") };
  var WLC = { 405: "#7b2cff", 445: "#2a3cff", 450: "#1f4dff", 520: "#19b84a", 525: "#19b84a", 532: "#27c93f", 640: "#ff3b1f", 660: "#e3121b", 685: "#b00d1c" };
  var arrow = '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var fmtP = function (mw) { return mw >= 1000 ? (mw / 1000).toLocaleString(EN ? "en" : "de") + " W" : mw + " mW"; };

  // Einträge: je Wellenlänge eine Karte (wie Bestellvarianten), sonst eine Karte je Produkt
  var items = [];
  window.BLAU_FINDER.products.forEach(function (p) {
    var x = X[p.slug] || { area: "", apps: [], mode: [], feats: [] };
    var base = { slug: p.slug, name: EN ? p.nameEN : p.name, img: p.img, type: p.type, angle: p.angleRange, housing: p.housing, x: x };
    var wls = Object.keys(p.combos || {});
    if (wls.length) wls.forEach(function (w) { items.push(Object.assign({ wl: +w, wlMin: +w, wlMax: +w, p: p.combos[w] }, base)); });
    else items.push(Object.assign({ wl: x.wl ? x.wl[0] : null, wlMin: x.wl ? x.wl[0] : null, wlMax: x.wl ? x.wl[1] : null, p: x.p || null }, base));
  });
  items.sort(function (a, b) { return (a.wl || 9999) - (b.wl || 9999) || a.name.localeCompare(b.name); });

  // ---------- Filterfeld ----------
  var WMIN = 405, WMAX = 905;
  var opt = function (o) { return Object.keys(o).map(function (k) { return '<option value="' + k + '">' + esc(o[k]) + "</option>"; }).join(""); };
  var names = {}; items.forEach(function (i) { names[i.slug] = i.name; });
  root.innerHTML =
    '<form class="pf-panel" data-pf-form onsubmit="return false">' +
      '<div class="pf-row pf-row--top">' +
        '<fieldset class="pf-f pf-f--wl"><legend>' + t("Wellenlänge", "Wavelength") + '</legend>' +
          '<div class="pf-range"><label class="pf-num"><input type="number" min="' + WMIN + '" max="' + WMAX + '" step="1" value="' + WMIN + '" data-wl-min aria-label="' + t("Wellenlänge von", "Wavelength from") + '"><span>nm</span></label>' +
          '<div class="pf-slider"><span class="pf-slider__fill" data-wl-fill></span><input type="range" min="' + WMIN + '" max="' + WMAX + '" value="' + WMIN + '" data-wl-a aria-label="' + t("Wellenlänge von", "Wavelength from") + '"><input type="range" min="' + WMIN + '" max="' + WMAX + '" value="' + WMAX + '" data-wl-b aria-label="' + t("Wellenlänge bis", "Wavelength to") + '"></div>' +
          '<label class="pf-num"><input type="number" min="' + WMIN + '" max="' + WMAX + '" step="1" value="' + WMAX + '" data-wl-max aria-label="' + t("Wellenlänge bis", "Wavelength to") + '"><span>nm</span></label></div></fieldset>' +
        '<fieldset class="pf-f"><legend>' + t("Betriebsart", "Operating mode") + '</legend><div class="pf-chips">' + Object.keys(MODES).map(function (k) { return '<button type="button" aria-pressed="false" data-mode="' + k + '">' + MODES[k] + "</button>"; }).join("") + "</div></fieldset>" +
        '<fieldset class="pf-f"><legend>' + t("Max. Leistung", "Max. power") + '</legend><div class="pf-chips">' + POWERS.map(function (r) { return '<button type="button" aria-pressed="false" data-power="' + r[0] + '">' + r[1] + "</button>"; }).join("") + "</div></fieldset>" +
      "</div>" +
      '<div class="pf-row pf-row--3">' +
        '<label class="pf-f"><span class="pf-l">' + t("Anwendung", "Application") + '</span><select data-app><option value="">' + t("Alle", "All") + "</option>" + opt(APPS) + "</select></label>" +
        '<label class="pf-f"><span class="pf-l">' + t("Bereich", "Product area") + '</span><select data-area><option value="">' + t("Alle", "All") + "</option>" + opt(AREAS) + "</select></label>" +
        '<label class="pf-f"><span class="pf-l">' + t("Produktfamilie", "Product family") + '</span><select data-fam><option value="">' + t("Alle", "All") + "</option>" + opt(names) + "</select></label>" +
      "</div>" +
      '<div class="pf-row pf-row--bottom">' +
        '<fieldset class="pf-f"><legend>' + t("Ausstattung wählen", "Select features") + '</legend><div class="pf-feats">' + Object.keys(FEATS).map(function (k) { return '<button type="button" aria-pressed="false" data-feat="' + k + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + FEATS[k][1] + "</svg><span>" + FEATS[k][0] + "</span></button>"; }).join("") + "</div></fieldset>" +
        '<label class="pf-f pf-f--search"><span class="pf-l">' + t("Suche", "Search") + '</span><input type="search" data-q placeholder="' + t("z. B. MVpico, 660 nm, M12", "e.g. MVpico, 660 nm, M12") + '"></label>' +
        '<button type="button" class="pf-reset" data-reset>' + t("Zurücksetzen", "Reset") + "</button>" +
      "</div>" +
    "</form>" +
    '<div class="pf-bar"><p class="pf-count" aria-live="polite" data-count></p></div>' +
    '<div class="pf-grid" data-grid></div>' +
    '<p class="pf-empty" data-empty hidden>' + t("Kein passendes Produkt gefunden. Viele Werte passen wir für Sie an – ", "No matching product found. We can adapt many values for you – ") + '<a href="kontakt.html">' + t("fragen Sie uns", "ask us") + "</a>.</p>" +
    '<div class="pf-more"><button type="button" class="pf-more__btn" data-more hidden>' + t("Mehr laden", "Load more") + "</button></div>";

  var $ = function (s) { return root.querySelector(s); }, $$ = function (s) { return Array.prototype.slice.call(root.querySelectorAll(s)); };
  var wa = $("[data-wl-a]"), wb = $("[data-wl-b]"), wmin = $("[data-wl-min]"), wmax = $("[data-wl-max]"), fill = $("[data-wl-fill]");
  var shown = PAGE;

  function wlRange() { var a = +wa.value, b = +wb.value; return [Math.min(a, b), Math.max(a, b)]; }
  function syncSlider(from) {
    if (from === "num") { wa.value = Math.max(WMIN, Math.min(WMAX, +wmin.value || WMIN)); wb.value = Math.max(WMIN, Math.min(WMAX, +wmax.value || WMAX)); }
    var r = wlRange(); if (from !== "num") { wmin.value = r[0]; wmax.value = r[1]; }
    fill.style.left = ((r[0] - WMIN) / (WMAX - WMIN) * 100) + "%"; fill.style.right = ((WMAX - r[1]) / (WMAX - WMIN) * 100) + "%";
  }
  function pressed(attr) { return $$("[" + attr + '][aria-pressed="true"]').map(function (b) { return b.getAttribute(attr); }); }

  function match(i) {
    var r = wlRange(), full = r[0] <= WMIN && r[1] >= WMAX;
    if (!full) { if (i.wlMin == null || i.wlMax < r[0] || i.wlMin > r[1]) return false; }
    var modes = pressed("data-mode"); if (modes.length && !modes.some(function (m) { return i.x.mode.indexOf(m) >= 0; })) return false;
    var pw = pressed("data-power"); if (pw.length && !pw.some(function (k) { var R = POWERS.filter(function (x) { return x[0] === k; })[0]; return i.p != null && i.p >= R[2] && i.p <= R[3]; })) return false;
    var app = $("[data-app]").value; if (app && i.x.apps.indexOf(app) < 0) return false;
    var area = $("[data-area]").value; if (area && i.x.area !== area) return false;
    var fam = $("[data-fam]").value; if (fam && i.slug !== fam) return false;
    var feats = pressed("data-feat"); if (feats.length && !feats.every(function (f) { return i.x.feats.indexOf(f) >= 0; })) return false;
    var q = $("[data-q]").value.trim().toLowerCase();
    if (q) {
      var hay = [i.name, i.wl ? i.wl + " nm" : "", i.wl || "", AREAS[i.x.area] || "", TYPES[i.type] || "", i.x.feats.map(function (f) { return FEATS[f][0]; }).join(" "), i.x.apps.map(function (a) { return APPS[a]; }).join(" ")].join(" ").toLowerCase();
      if (!q.split(/\s+/).every(function (w) { return hay.indexOf(w) >= 0; })) return false;
    }
    return true;
  }

  function card(i) {
    var ds = i.x.ds ? DS + i.x.ds[EN ? 1 : 0] : null;
    var code = i.name + (i.wl ? (i.wlMin !== i.wlMax ? " · " + i.wlMin + "–" + i.wlMax + " nm" : " · " + i.wl + " nm") : "");
    var spec = [];
    if (i.wl) spec.push([t("Wellenlänge", "Wavelength"), i.wlMin !== i.wlMax ? i.wlMin + " – " + i.wlMax + " nm" : i.wl + " nm"]);
    if (i.p) spec.push([t("Leistung", "Power"), t("bis ", "up to ") + fmtP(i.p)]);
    if (i.angle && i.type !== "dot") spec.push([t("Öffnungswinkel", "Fan angle"), i.angle]);
    if (i.housing) spec.push([t("Gehäuse", "Housing"), i.housing]);
    var sub = [TYPES[i.type], i.x.mode.map(function (m) { return MODES[m]; }).join(" · ")].filter(Boolean);
    return '<article class="pf-card">' +
      '<a class="pf-card__img" href="produkt-' + i.slug + '.html" tabindex="-1" aria-hidden="true"><img src="' + esc(i.img) + '" alt="" loading="lazy"></a>' +
      '<div class="pf-card__body">' +
        '<p class="pf-card__code">' + esc(code) + "</p>" +
        '<h3 class="pf-card__title"><a href="produkt-' + i.slug + '.html">' + esc(i.name) + "</a></h3>" +
        '<dl class="pf-card__spec">' + spec.map(function (s) { return "<div><dt>" + s[0] + ":</dt><dd>" + esc(s[1]) + "</dd></div>"; }).join("") + "</dl>" +
        '<p class="pf-card__sub">' + sub.map(esc).join("<br>") + "</p>" +
        (i.x.feats.length ? '<ul class="pf-card__feats">' + i.x.feats.map(function (f) { return '<li title="' + FEATS[f][0] + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + FEATS[f][1] + '</svg><span class="sr-only">' + FEATS[f][0] + "</span></li>"; }).join("") + "</ul>" : "") +
        '<a class="pf-card__more" href="produkt-' + i.slug + '.html">' + arrow + t("Mehr erfahren", "Read more") + "</a>" +
        '<div class="pf-card__btns">' +
          (ds ? '<a class="pf-btn" href="' + ds + '" target="_blank" rel="noopener">' + t("Datenblatt", "Datasheet") + ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg></a>' : '<a class="pf-btn" href="produkt-' + i.slug + '.html#produkt-interaktiv">' + t("Konfigurieren", "Configure") + "</a>") +
          '<a class="pf-btn" href="kontakt.html?produkt=' + encodeURIComponent(code) + '">' + t("Angebot anfordern", "Get quote") + "</a>" +
        "</div>" +
      "</div></article>";
  }

  function render() {
    var res = items.filter(match);
    $("[data-grid]").innerHTML = res.slice(0, shown).map(card).join("");
    $("[data-count]").textContent = res.length + " " + (res.length === 1 ? t("Ergebnis", "result") : t("Ergebnisse", "results")) + (res.length > shown ? " · " + t("angezeigt: ", "showing ") + shown : "");
    $("[data-empty]").hidden = res.length > 0;
    $("[data-more]").hidden = res.length <= shown;
  }
  function update() { shown = PAGE; render(); }

  [wa, wb].forEach(function (s) { s.addEventListener("input", function () { syncSlider("range"); update(); }); });
  [wmin, wmax].forEach(function (n) { n.addEventListener("change", function () { syncSlider("num"); syncSlider(); update(); }); });
  $$("[data-mode],[data-power],[data-feat]").forEach(function (b) { b.addEventListener("click", function () { b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") === "true" ? "false" : "true"); update(); }); });
  $$("select").forEach(function (s) { s.addEventListener("change", update); });
  $("[data-q]").addEventListener("input", update);
  $("[data-more]").addEventListener("click", function () { shown += PAGE; render(); });
  $("[data-reset]").addEventListener("click", function () {
    wa.value = WMIN; wb.value = WMAX; syncSlider("range");
    $$('[aria-pressed="true"]').forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
    $$("select").forEach(function (s) { s.value = ""; }); $("[data-q]").value = ""; update();
  });

  // Links wie produkte.html?kategorie=punktlaser wählen den Bereich vor
  var k = (location.search.match(/kategorie=([\w-]+)/) || [])[1];
  if (k && AREAS[k]) $("[data-area]").value = k;
  // Suchwort von der Startseite (produkte.html?q=…) übernehmen und zum Finder springen
  var qq = new URLSearchParams(location.search).get("q");
  if (qq) { $("[data-q]").value = qq.slice(0, 80); setTimeout(function () { root.closest("section").scrollIntoView(); }, 50); }
  if (k || qq) setTimeout(function () { var sec = root.closest("section"); if (sec && !qq) sec.scrollIntoView(); }, 50);
  syncSlider("range"); render();
})();
