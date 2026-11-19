/* BLAU Optoelektronik – Modul-Konfigurator (Prototyp im neuen Design)
   Daten stammen aus dem bestehenden Konfigurator bzw. den Produktseiten.
   Preis, Laserklasse und MTTF werden hier bewusst NICHT berechnet (Formeln liegen nur im Live-Konfigurator). */
(function () {
  "use strict";
  var main = document.getElementById("cfg-main");
  if (!main) return;

  var IMG = "https://xtuwjizliuthdgytloju.supabase.co/storage/v1/object/public/uploads/products/";
  var STEPS = ["group", "series", "wlpower", "optics", "electrical", "options", "summary"];
  var ALL6 = ["STD", "DL", "DLE", "DLSE", "TS1", "TS2"];
  var A_1_90 = [1, 5, 10, 15, 20, 30, 45, 60, 75, 90];
  var C11 = [1, 3, 5, 10, 20, 30, 35, 40, 50, 75, 100];

  var GROUPS = [
    { id: "mv", name: "Machine Vision", img: "assets/products/mvnano-duo.png",
      text: "Laserlinie mit homogener Intensitätsverteilung für die industrielle Bildverarbeitung.",
      props: ["Homogene Intensität entlang der Linie (Powell-Optik)", "Feine Linie, wählbare Schärfentiefe", "Modulation zur Kamerasynchronisation"],
      apps: ["3D-Triangulation", "Optische Messverfahren mit Kamera", "Profil- und Oberflächeninspektion"] },
    { id: "gauss", name: "Gaußlinie", img: IMG + "3/images/Linienlaser-main.jpg", href: "produkt-linienlaser.html",
      text: "Laserlinie mit gaußförmiger Intensitätsverteilung – hell in der Mitte, weich auslaufend.",
      props: ["Gaußförmige Intensitätsverteilung", "Gut sichtbare, scharfe Mittellinie", "Robust und kostengünstig"],
      apps: ["Ausrichtaufgaben", "Patientenpositionierung (Medizintechnik)", "Positionier- und Markierhilfen in Maschinen"] },
    { id: "dot", name: "Punktmodul", img: IMG + "6/images/Punkt-Laser.jpg", href: "produkt-punktlaser.html",
      text: "Laserpunkt mit rundem Strahlprofil, fokussierbar oder fix.",
      props: ["Runder Laserpunkt", "Fokussierbar oder fix fokussiert", "Kompakte Bauform"],
      apps: ["Positionieren und Justieren", "Markier- und Zielhilfen", "Sensorik und Lichtschranken"] },
    { id: "doe", name: "Musterlaser (DOE)", img: IMG + "13/images/FP-DOE-CX_Abbildung_4.jpeg", href: "produkt-doe.html",
      text: "Laser mit diffraktivem optischem Element (DOE): projiziert Kreuze, Linienscharen, Punktmatrizen, Kreise und mehr.",
      props: ["Über 30 Standardmuster", "Scharfe Muster über großen Arbeitsabstand", "Kundenspezifische DOEs möglich"],
      apps: ["Fadenkreuz zum Ausrichten und Zielen", "Strukturierte Beleuchtung und 3D-Erfassung", "Kalibrierung und Abstandsmessung"] }
  ];

  function m(cols, rows) { return { cols: cols, rows: rows }; }
  var M_NANO = m([1, 3, 5, 10, 20, 30, 35, 40, 50, 75, 80, 100], [[405, "YYYYYYYYYYYY"], [450, "YYYYYYYYYYNN"], [520, "YYYYYYYYYYYN"], [640, "YYYYYYYYYYYY"], [660, "YYYYYYYYYYYY"], [685, "YYYYYYYYNNNN"], [785, "YYYYYYYYYYYY"], [830, "YYYYYYYYYYYN"], [850, "YYYYYYYYNNNN"]]);
  var M_PICO = m(C11, [[405, "YYYYYYNNNNN"], [450, "YYYYYYYYYNN"], [520, "YYYYNNNNNNN"], [640, "YYYYYYYYYYY"], [660, "YYYYYYYYYYY"], [685, "YYYYYYYYNNN"], [785, "YYYYYYYYYYY"], [830, "YYYYYYYYNNN"], [850, "YYYYYYYYNNN"]]);
  var M_FEMTO = m(C11, [[405, "YYYYYYNNNNN"], [450, "YYYYYYYYYNN"], [520, "YYYYNNNNNNN"], [640, "YYYYYNNNNNN"], [660, "YYYYYYNNNNN"], [685, "YYYYYYYYNNN"], [785, "YYYYNNNNNNN"], [830, "YYYYYYYYNNN"], [850, "YYYYYYYYNNN"]]);
  var M_MICRO = m([1, 3, 5, 10, 20, 30, 35, 40, 50, 70, 80, 100], [[405, "YYYYYYYYYYYY"], [450, "YYYYYYYYYYNN"], [520, "YYYYYYYYYYYN"], [640, "YYYYYYYYYYYY"], [660, "YYYYYYYYYYYY"], [685, "YYYYYYYYNNNN"], [785, "YYYYYYYYYYYY"], [830, "YYYYYYYYYYYN"], [850, "YYYYYYYYNNNN"]]);
  var M_SQUARE = m(C11, [[405, "YYYYYYYYYYY"], [450, "NNYYYYYYYYN"], [520, "YYYYYYYYYYN"], [640, "YYYYYYYYYYY"], [660, "YYYYYYYYYYY"], [685, "YYYYYYYYNNN"], [785, "NNYYYYYYYYY"], [850, "YYYYYYYYNNN"]]);
  var M_PULSE = m([1, 3, 5, 10, 20, 30, 35, 40, 50, 80, 100], [[450, "NNNYYYYYYYN"], [520, "NNNYYYYYYYN"], [640, "NNNYYYYYYYY"], [660, "NNNYYYYYYYY"], [785, "NNNYYYYYYYY"]]);
  var M_PULSEHP = m([500, 1000], [[445, "YY"], [525, "YN"], [660, "YN"], [808, "YN"]]);

  var SERIES = [
    { id: "mvnano", name: "MVnano", img: IMG + "14/images/MVnano2.jpg", href: "produkt-mvnano.html", text: "Der vielseitige Linienlaser für die Bildverarbeitung bei optimierten Kosten.", bullets: ["Gehäuse 11,5 × 54 mm", "Stand-alone oder zur Integration", "Auch als 2-Gehäuse- oder Optikkopf-Variante"], matrix: M_NANO, angles: A_1_90, optics: ALL6, housings: ["ST", "2H", "OH"] },
    { id: "mvpico", name: "MVpico", img: IMG + "9/images/MVpico.jpg", href: "produkt-mvpico.html", text: "Kompakter Linienlaser für die Integration in 3D-Vision-Sensoren.", bullets: ["Gehäuse 10 × 50 mm", "Ideal für intelligente 3D-Sensoren", "ST, 2H oder Optikkopf"], matrix: M_PICO, angles: A_1_90, optics: ALL6, housings: ["ST", "2H", "OH"] },
    { id: "mvfemto", name: "MVfemto", img: IMG + "2/images/FP-MVfemto_2.jpg", href: "produkt-mvfemto.html", text: "Der kleinste Linienlaser für engste Einbauräume.", bullets: ["Nur 8 mm Durchmesser, 40 mm Länge", "Hohe Leistung, homogene Linie", "ST, 2H oder Optikkopf"], matrix: M_FEMTO, angles: A_1_90, optics: ALL6, housings: ["ST", "2H", "OH"] },
    { id: "mvmicro", name: "MVmicro", img: IMG + "8/images/MVmicroMV18.jpg", href: "produkt-mvmicro.html", text: "Einfach zu fokussierender Linienlaser für Stand-alone-Aufgaben.", bullets: ["Feine Linie, homogene Leistungsverteilung", "Einfache Fokussierung", "Für Stand-alone-Bildverarbeitung"], matrix: M_MICRO, angles: A_1_90, optics: ALL6 },
    { id: "mv18", name: "MV18", img: IMG + "8/images/FP-MVmicro-25-MV18_3.png", href: "produkt-mvmicro.html", text: "Robuster Linienlaser im 18-mm-Gehäuse.", bullets: ["18-mm-Gehäuse", "Feine, homogene Linie", "Einfache Fokussierung"], matrix: M_MICRO, angles: A_1_90, optics: ALL6 },
    { id: "mv12", name: "MV12", text: "Linienlaser im 12-mm-Gehäuse.", bullets: ["12-mm-Gehäuse", "Homogene Linie", "Für Machine-Vision-Anwendungen"], request: true },
    { id: "mvsquare", name: "MVsquare", img: "assets/products/mvsquare-duo.png", href: "produkt-mvsquare.html", text: "Rechteckiges Gehäuse für einfache Plug-and-play-Montage.", bullets: ["Gehäuse 65 × 15 × 15 mm", "Plug and play", "Linienausrichtung 0° oder 90°"], matrix: M_SQUARE, angles: A_1_90, optics: ALL6, variants: ["R0R0", "R0R90", "R90R0", "R90R90"], wideOnly: { angles: [60, 75, 90], variants: ["R0R0", "R0R90", "R90R0"] }, focusDefault: "FIX" },
    { id: "mvpulse", name: "MVpulse", img: "assets/products/mvpulse-duo.webp", href: "produkt-mvpulse.html", text: "Bis zu 5-fache Spitzenleistung bei gleicher Laserklasse durch Pulssteuerung.", bullets: ["Bis 100 mW Spitzenleistung", "Laserklasse 2 oder 3R", "Pulssteuerung 2×–5× ggü. Dauerstrich"], matrix: M_PULSE, angles: [5, 10, 20, 30, 45, 60, 75, 90], optics: ALL6, housings: ["ST", "2H"] },
    { id: "mvpulsehp", name: "MVpulseHP", img: IMG + "16/images/MVpulseHP1.jpg", href: "produkt-mvpulsehp.html", text: "Hochleistungs-Pulslaser bis 1 W ohne aktive Kühlung.", bullets: ["Bis 1 W", "Begrenzter Tastgrad, keine aktive Kühlung", "ST oder 2H"], matrix: M_PULSEHP, angles: [5, 10, 20, 30, 45, 60, 75], optics: ["STD", "DL"], housings: ["ST", "2H"] },
    { id: "mvgoldhp", name: "MVgoldHP", img: IMG + "7/images/zz_FP-MVgoldHP_1.png", href: "produkt-mvgoldhp.html", text: "Leistungsstarkes Machine-Vision-Modul mit gleichmäßiger Linie.", bullets: ["Konfiguration auf Anfrage"], request: true },
    { id: "mvbasic", name: "MVbasic", text: "Basis-Linienlaser für Serienstückzahlen (ab 100 Stück).", bullets: ["Konfiguration auf Anfrage"], request: true }
  ];

  var OPTICS = {
    STD: ["Standard", "guter Kompromiss aus Liniendicke und Schärfentiefe", "145 µm", "49 mm"],
    DL: ["Dünne Linie", "feinere Linie, geringere Schärfentiefe", "98 µm", "22 mm"],
    DLE: ["Dünne Linie, verstärkt", "noch feinere Linie", "72 µm", "12 mm"],
    DLSE: ["Dünne Linie, super verstärkt", "feinste Linie, kleinste Schärfentiefe", "56 µm", "7,3 mm"],
    TS1: ["Erhöhte Schärfentiefe", "dickere Linie, großer Tiefenbereich", "230 µm", "124 mm"],
    TS2: ["Erhöhte Schärfentiefe, höherer Faktor", "größter Tiefenbereich", "340 µm", "271 mm"]
  };
  var MODS = [
    { id: "none", code: "–", name: "Keine Modulation", text: "Laser ist bei anliegender Spannung dauerhaft an.", kind: "none", std: true },
    { id: "M", code: "M", name: "Digital, low aktiv", text: "TTL: 0–0,8 V Laser an, 2,1–5 V Laser aus, an bei offenem Eingang, bis 20 kHz.", kind: "dig", std: true, lvl: true },
    { id: "MI", code: "MI", name: "Digital, high aktiv", text: "TTL: 0–0,8 V Laser aus, 2,1–5 V Laser an, bis 20 kHz.", kind: "digi", std: true, lvl: true },
    { id: "D", code: "D", name: "Analog, low aktiv", text: "Max. Leistung bei 0 V, Leistung sinkt mit steigender Steuerspannung. Linearer Bereich 0–1 V bis 4–5 V, bis 10 Hz.", kind: "ana", std: true },
    { id: "DI", code: "DI", name: "Analog, high aktiv", text: "Leistung steigt mit der Steuerspannung, linearer Bereich 0–1 V bis 4–5 V, bis 10 Hz. Nichtlineare Kennlinie, geringes Restleuchten im Aus-Zustand.", kind: "anai", std: false },
    { id: "MD", code: "MD", name: "Digital low + analog low aktiv", text: "Kombination aus digitalem (bis 20 kHz) und analogem Eingang (bis 10 Hz).", kind: "dig", std: true, lvl: true },
    { id: "MID", code: "MID", name: "Digital high + analog low aktiv", text: "Kombination aus digitalem (bis 20 kHz) und analogem Eingang (bis 10 Hz).", kind: "digi", std: true, lvl: true },
    { id: "MDI", code: "MDI", name: "Digital low + analog high aktiv", text: "Kombination aus digitalem (bis 20 kHz) und analogem Eingang (bis 10 Hz).", kind: "dig", std: false },
    { id: "MIDI", code: "MIDI", name: "Digital high + analog high aktiv", text: "Kombination aus digitalem (bis 20 kHz) und analogem Eingang (bis 10 Hz).", kind: "digi", std: false }
  ];
  var OPTIONS = [
    { id: "bs", name: "Ausrichtung (Boresight) ≤ 3 mrad" },
    { id: "lg", name: "Liniengeradheit ±0,05 %" },
    { id: "cos4", name: "COS4-Korrektur FOV 2:1", text: "Die Leistung steigt zum Linienende auf das Doppelte der Mitte und gleicht so den Helligkeitsabfall (cos⁴) am Bildrand der Kamera aus." }
  ];

  /* ---------- Zustand (in der URL, damit Konfigurationen teilbar sind) ---------- */
  var q = new URLSearchParams(location.search);
  var S = {
    step: STEPS.indexOf(q.get("step")) >= 0 ? q.get("step") : "group",
    g: q.get("g") || "mv", s: q.get("s") || "", wl: +q.get("wl") || 0, p: +q.get("p") || 0,
    fan: +q.get("fan") || 45, d: +q.get("d") || 500, o: q.get("o") || "STD", f: q.get("f") || "",
    h: q.get("h") || "ST", r: q.get("r") || "R0R0", mod: q.get("mod") || "none", lvl: q.get("lvl") || "5",
    opt: (q.get("opt") || "").split(",").filter(Boolean), qty: +q.get("qty") || 1
  };
  function series() { for (var i = 0; i < SERIES.length; i++) if (SERIES[i].id === S.s) return SERIES[i]; return null; }
  function group() { for (var i = 0; i < GROUPS.length; i++) if (GROUPS[i].id === S.g) return GROUPS[i]; return GROUPS[0]; }
  function avail(sr, wl, p) {
    if (!sr || !sr.matrix) return false;
    var ci = sr.matrix.cols.indexOf(p); if (ci < 0) return false;
    for (var i = 0; i < sr.matrix.rows.length; i++) if (sr.matrix.rows[i][0] === wl) return sr.matrix.rows[i][1].charAt(ci) === "Y";
    return false;
  }
  function sanitize() {
    var sr = series();
    if (!sr) return;
    if (sr.matrix && !avail(sr, S.wl, S.p)) { S.wl = 0; S.p = 0; }
    if (sr.angles && sr.angles.indexOf(S.fan) < 0) S.fan = sr.angles.indexOf(45) >= 0 ? 45 : sr.angles[0];
    if (sr.optics && sr.optics.indexOf(S.o) < 0) S.o = sr.optics[0];
    if (!S.f) S.f = sr.focusDefault || "F";
    if (sr.housings && sr.housings.indexOf(S.h) < 0) S.h = sr.housings[0];
    if (sr.variants) {
      if (sr.variants.indexOf(S.r) < 0) S.r = sr.variants[0];
      if (sr.wideOnly && sr.wideOnly.angles.indexOf(S.fan) >= 0 && sr.wideOnly.variants.indexOf(S.r) < 0) S.r = sr.wideOnly.variants[0];
    }
  }
  function saveUrl() {
    var p = new URLSearchParams();
    p.set("g", S.g); if (S.s) p.set("s", S.s); if (S.wl) p.set("wl", S.wl); if (S.p) p.set("p", S.p);
    p.set("fan", S.fan); p.set("d", S.d); p.set("o", S.o); if (S.f) p.set("f", S.f);
    var sr = series(); if (sr && sr.housings) p.set("h", S.h); if (sr && sr.variants) p.set("r", S.r);
    p.set("mod", S.mod); if (S.opt.length) p.set("opt", S.opt.join(",")); p.set("qty", S.qty); p.set("step", S.step);
    history.replaceState(null, "", "?" + p.toString());
  }

  /* ---------- Hilfen ---------- */
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function lineLen(fan, d) { return 2 * d * Math.tan((fan / 2) * Math.PI / 180); }
  function fmt(n) { return Math.round(n).toLocaleString("de-DE"); }
  function wlColor(w) { return { 405: "#7b2cff", 445: "#2a3cff", 450: "#1f4dff", 520: "#19b84a", 525: "#19b84a", 640: "#ff3b1f", 660: "#e3121b", 685: "#b00d1c" }[w] || "#6b7280"; }
  function code() {
    var sr = series(); if (!sr) return "–";
    if (sr.request) return sr.name + " – auf Anfrage";
    var parts = ["FP", sr.name];
    if (sr.housings) parts.push(S.h);
    parts.push(S.wl || "…", S.p || "…", S.fan, S.f, S.o);
    if (sr.variants) parts.push(S.r);
    if (S.mod !== "none") parts.push(S.mod);
    return parts.join("-");
  }
  function canAdvance() {
    var sr = series();
    if (S.step === "group") return true;
    if (S.step === "series") return !!sr && !sr.request;
    if (S.step === "wlpower") return !!(S.wl && S.p);
    return S.step !== "summary";
  }

  /* ---------- Schritte rendern ---------- */
  var R = {};
  R.group = function () {
    return "<h2 class='cfg-h'>Welche Produktgruppe passt zu Ihrer Anwendung?</h2><div class='cfg-grid cfg-grid--2'>" +
      GROUPS.map(function (g) {
        return "<button type='button' class='cfg-choice" + (S.g === g.id ? " is-selected" : "") + "' data-set='g' data-val='" + g.id + "' aria-pressed='" + (S.g === g.id) + "'>" +
          "<span class='cfg-choice__img'><img src='" + g.img + "' alt='' loading='lazy'></span><span class='cfg-choice__body'><b>" + esc(g.name) + "</b><span>" + esc(g.text) + "</span>" +
          "<span class='cfg-mini'><em>Eigenschaften</em>" + g.props.map(esc).join(" · ") + "</span><span class='cfg-mini'><em>Anwendungen</em>" + g.apps.map(esc).join(" · ") + "</span></span></button>";
      }).join("") + "</div>";
  };
  R.series = function () {
    var g = group();
    if (g.id !== "mv") {
      return "<h2 class='cfg-h'>" + esc(g.name) + "</h2><div class='cfg-callout'><p>Für diese Produktgruppe stellen wir Ihr Modul individuell zusammen. Nennen Sie uns kurz Ihre Anwendung – wir melden uns mit einem Vorschlag und Angebot.</p>" +
        "<div class='btn-row'><a class='btn btn--accent' href='kontakt.html?produkt=" + encodeURIComponent(g.name) + "'>Anfrage senden</a><a class='btn btn--ghost' href='" + g.href + "'>Zur Produktseite</a></div></div>";
    }
    return "<h2 class='cfg-h'>Welche Serie passt zu Ihrer Anwendung?</h2><div class='cfg-grid cfg-grid--3'>" +
      SERIES.map(function (s) {
        return "<button type='button' class='cfg-choice cfg-choice--sm" + (S.s === s.id ? " is-selected" : "") + (s.request ? " is-request" : "") + "' data-set='s' data-val='" + s.id + "' aria-pressed='" + (S.s === s.id) + "'>" +
          (s.img ? "<span class='cfg-choice__img'><img src='" + s.img + "' alt='' loading='lazy'></span>" : "<span class='cfg-choice__img cfg-choice__img--empty'>" + esc(s.name) + "</span>") +
          "<span class='cfg-choice__body'><b>" + esc(s.name) + (s.request ? " <small class='tag-req'>auf Anfrage</small>" : "") + "</b><span>" + esc(s.text) + "</span><ul>" + s.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul></span></button>";
      }).join("") + "</div>" + (series() && series().request ? requestBox(series()) : "");
  };
  function requestBox(s) {
    return "<div class='cfg-callout'><p><b>" + esc(s.name) + "</b> konfigurieren wir individuell für Sie.</p><div class='btn-row'><a class='btn btn--accent' href='kontakt.html?produkt=" + encodeURIComponent(s.name) + "'>Anfrage senden</a>" + (s.href ? "<a class='btn btn--ghost' href='" + s.href + "'>Zur Produktseite</a>" : "") + "</div></div>";
  }
  R.wlpower = function () {
    var sr = series(), mx = sr.matrix;
    var head = "<tr><th scope='col'>nm / mW</th>" + mx.cols.map(function (c) { return "<th scope='col'>" + c + "</th>"; }).join("") + "</tr>";
    var body = mx.rows.map(function (r) {
      return "<tr><th scope='row'><span class='wl' style='background:" + wlColor(r[0]) + "'></span>" + r[0] + "</th>" + mx.cols.map(function (c, i) {
        var ok = r[1].charAt(i) === "Y", sel = S.wl === r[0] && S.p === c;
        return "<td>" + (ok ? "<button type='button' class='cfg-cell" + (sel ? " is-selected" : "") + "' data-wlp='" + r[0] + "|" + c + "' aria-pressed='" + sel + "' aria-label='" + r[0] + " nm, " + c + " mW'></button>" : "<span class='cfg-na' aria-label='nicht verfügbar'>–</span>") + "</td>";
      }).join("") + "</tr>";
    }).join("");
    return "<h2 class='cfg-h'>Wellenlänge und Leistung wählen</h2><p class='cfg-sub'>Wählen Sie eine Kombination aus Wellenlänge (Zeile) und Leistung (Spalte) – verfügbar als " + esc(sr.name) + ".</p>" +
      "<div class='table-wrap'><table class='matrix cfg-matrix'><thead>" + head + "</thead><tbody>" + body + "</tbody></table></div>" +
      "<p class='cfg-picked'>" + (S.wl ? "Gewählt: <b>" + S.wl + " nm, " + S.p + " mW</b>" : "Noch keine Kombination gewählt.") + "</p>" +
      "<p class='cfg-hint'>Welche Leistung für Laserklasse 2 oder 3R zulässig ist, hängt von Fächerwinkel und Optik ab. Lebensdauer: siehe <a href='https://blauoptoelektronik.de/tools'>MTTF-Prognose</a>.</p>";
  };
  R.optics = function () {
    var sr = series(), L = lineLen(S.fan, S.d), fanSvg = fanDiagram(S.fan);
    var angles = sr.angles.map(function (a) {
      var dis = sr.variants && sr.wideOnly && sr.wideOnly.angles.indexOf(a) >= 0 && sr.wideOnly.variants.indexOf(S.r) < 0;
      return "<button type='button' class='cfg-pill" + (S.fan === a ? " is-selected" : "") + "' data-set='fan' data-val='" + a + "' aria-pressed='" + (S.fan === a) + "'" + (dis ? " disabled" : "") + ">" + a + "°</button>";
    }).join("");
    var table = "<tr><th scope='row'>L bei " + fmt(S.d) + " mm</th>" + sr.angles.map(function (a) { return "<td" + (a === S.fan ? " class='is-on'" : "") + ">" + fmt(lineLen(a, S.d)) + "</td>"; }).join("") + "</tr>";
    var opts = sr.optics.map(function (o) {
      var d = OPTICS[o];
      return "<button type='button' class='cfg-opt" + (S.o === o ? " is-selected" : "") + "' data-set='o' data-val='" + o + "' aria-pressed='" + (S.o === o) + "'><b>" + o + "</b><span>" + esc(d[0]) + "</span><small>" + esc(d[1]) + "</small></button>";
    }).join("");
    var cmp = sr.optics.map(function (o) { var d = OPTICS[o]; return "<tr" + (S.o === o ? " class='is-on'" : "") + "><th scope='row'>" + o + "</th><td>" + d[2] + "</td><td>" + d[3] + "</td></tr>"; }).join("");
    var extra = "";
    if (sr.variants) extra += "<h3 class='cfg-h3'>Ausführung / Strahlaustritt</h3><div class='cfg-pills'>" + sr.variants.map(function (v) {
      var dis = sr.wideOnly && sr.wideOnly.angles.indexOf(S.fan) >= 0 && sr.wideOnly.variants.indexOf(v) < 0;
      return "<button type='button' class='cfg-pill" + (S.r === v ? " is-selected" : "") + "' data-set='r' data-val='" + v + "' aria-pressed='" + (S.r === v) + "'" + (dis ? " disabled" : "") + ">" + v + "</button>";
    }).join("") + "</div>" + (sr.wideOnly ? "<p class='cfg-hint'>60°, 75° und 90° nur für R0R0, R0R90 und R90R0.</p>" : "");
    if (sr.housings) extra += "<h3 class='cfg-h3'>Gehäuse</h3><div class='cfg-pills'>" + sr.housings.map(function (h) {
      var label = { ST: "ST · Standard", "2H": "2H · zwei Gehäuse", OH: "OH · Optikkopf" }[h];
      return "<button type='button' class='cfg-pill" + (S.h === h ? " is-selected" : "") + "' data-set='h' data-val='" + h + "' aria-pressed='" + (S.h === h) + "'>" + label + "</button>";
    }).join("") + "</div>";
    return "<h2 class='cfg-h'>Optik und Fokus</h2>" +
      "<div class='cfg-optics'><div><h3 class='cfg-h3'>Fächerwinkel</h3><div class='cfg-pills'>" + angles + "</div>" +
      "<label class='cfg-field'><span>Arbeitsabstand d</span><input type='number' min='10' max='5000' step='10' value='" + S.d + "' data-input='d'> <em>mm</em></label>" +
      "<label class='cfg-field'><span>Gewünschte Linienlänge (optional)</span><input type='number' min='1' max='10000' step='1' placeholder='z. B. 400' data-input='want'> <em>mm</em></label><p class='cfg-hint' id='cfg-want'></p></div>" +
      "<figure class='cfg-fan'>" + fanSvg + "<figcaption><b>L = " + fmt(L) + " mm</b> bei d = " + fmt(S.d) + " mm</figcaption></figure></div>" +
      "<div class='table-wrap'><table class='matrix cfg-lentable'><thead><tr><th scope='col'>Fächerwinkel</th>" + sr.angles.map(function (a) { return "<th scope='col'>" + a + "°</th>"; }).join("") + "</tr></thead><tbody>" + table + "</tbody></table></div>" +
      "<p class='cfg-hint'>Linienlänge in mm. Die Leistung ist auf ca. 80 % der Linienlänge gleichmäßig verteilt (±20 %). Fächerwinkel = volle Breite der Linie bei 50 % der maximalen Leistung.</p>" +
      "<h3 class='cfg-h3'>Optik / Linienart</h3><div class='cfg-grid cfg-grid--3 cfg-grid--tight'>" + opts + "</div>" +
      "<div class='table-wrap' style='margin-top:16px'><table class='matrix spec cfg-cmp'><caption>Vergleich der Linienarten bei 300 mm (Beispiel MVsquare, 640 nm)</caption><thead><tr><th scope='col'>Linienart</th><th scope='col'>Liniendicke (1/e²)</th><th scope='col'>Schärfentiefe</th></tr></thead><tbody>" + cmp + "</tbody></table></div>" +
      "<p class='cfg-hint'>Theoretische Werte (Gauß-Optik) aus dem bestehenden Konfigurator; Toleranzen der Laserdiode führen zu Abweichungen.</p>" +
      extra +
      "<h3 class='cfg-h3'>Fokus</h3><div class='cfg-pills'><button type='button' class='cfg-pill" + (S.f === "F" ? " is-selected" : "") + "' data-set='f' data-val='F' aria-pressed='" + (S.f === "F") + "'>Einstellbar · vom Anwender</button><button type='button' class='cfg-pill" + (S.f === "FIX" ? " is-selected" : "") + "' data-set='f' data-val='FIX' aria-pressed='" + (S.f === "FIX") + "'>Fix · ab Werk</button></div>";
  };
  function fanDiagram(fan) {
    var W = 320, H = 200, ax = 160, ay = 26, by = 176, half = Math.min(150, Math.tan((fan / 2) * Math.PI / 180) * (by - ay));
    return "<svg viewBox='0 0 " + W + " " + H + "' role='img' aria-label='Laserfächer mit " + fan + " Grad'><defs><linearGradient id='cfg-fan' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#e51837' stop-opacity='.55'/><stop offset='1' stop-color='#e51837' stop-opacity='.08'/></linearGradient></defs>" +
      "<rect x='" + (ax - 9) + "' y='0' width='18' height='" + (ay - 2) + "' rx='3' fill='#2d8de8'/><rect x='" + (ax - 10) + "' y='" + (ay - 8) + "' width='20' height='8' rx='2' fill='#111'/>" +
      "<polygon class='cfg-fan__poly' points='" + ax + "," + ay + " " + (ax - half) + "," + by + " " + (ax + half) + "," + by + "' fill='url(#cfg-fan)'/>" +
      "<line x1='" + (ax - half) + "' y1='" + by + "' x2='" + (ax + half) + "' y2='" + by + "' stroke='#e51837' stroke-width='3' stroke-linecap='round' class='cfg-fan__line'/>" +
      "<line x1='12' y1='" + ay + "' x2='12' y2='" + by + "' stroke='#9fb0c4' stroke-dasharray='3 3'/><text x='18' y='" + ((ay + by) / 2) + "' font-size='11' fill='#5f6b7c'>d</text>" +
      "<text x='" + ax + "' y='" + (by + 18) + "' font-size='12' text-anchor='middle' fill='#003368' font-weight='700'>L</text>" +
      "<text x='" + (ax + 12) + "' y='" + (ay + 34) + "' font-size='11' fill='#e51837'>" + fan + "°</text></svg>";
  }
  R.electrical = function () {
    return "<h2 class='cfg-h'>Modulation, Kabel und Stecker</h2><div class='cfg-grid cfg-grid--3 cfg-grid--tight'>" + MODS.map(function (md) {
      return "<button type='button' class='cfg-opt cfg-mod" + (S.mod === md.id ? " is-selected" : "") + "' data-set='mod' data-val='" + md.id + "' aria-pressed='" + (S.mod === md.id) + "'>" + modCurve(md.kind) +
        "<b>" + md.code + "</b><span>" + esc(md.name) + "</span><small>" + esc(md.text) + "</small><i class='" + (md.std ? "std" : "extra") + "'>" + (md.std ? "Standard" : "mit Mehraufwand") + "</i></button>";
    }).join("") + "</div>" +
      (modById(S.mod).lvl ? "<h3 class='cfg-h3'>Digitaleingang</h3><div class='cfg-pills'><button type='button' class='cfg-pill" + (S.lvl === "5" ? " is-selected" : "") + "' data-set='lvl' data-val='5'>5 V / TTL</button><button type='button' class='cfg-pill" + (S.lvl === "24" ? " is-selected" : "") + "' data-set='lvl' data-val='24'>24 V (Low 0–0,8 V, High 10–24 V)</button></div>" : "") +
      "<h3 class='cfg-h3'>Anschluss</h3><div class='cfg-pills'><span class='cfg-pill is-selected'>Kabel 2 m</span></div><p class='cfg-hint'>Andere Kabellängen oder Stecker auf Anfrage.</p>";
  };
  function modById(id) { for (var i = 0; i < MODS.length; i++) if (MODS[i].id === id) return MODS[i]; return MODS[0]; }
  function modCurve(kind) {
    var path = { none: "M6 10 H54", dig: "M6 6 H24 V30 H54", digi: "M6 30 H24 V6 H54", ana: "M6 6 L14 6 L46 30 L54 30", anai: "M6 30 L14 30 L46 6 L54 6" }[kind];
    return "<svg class='cfg-curve' viewBox='0 0 60 36' aria-hidden='true'><path d='M6 2 V32 H58' fill='none' stroke='#c9d3df'/><path d='" + path + "' fill='none' stroke='#e51837' stroke-width='2'/></svg>";
  }
  R.options = function () {
    return "<h2 class='cfg-h'>Weitere Optionen</h2><div class='cfg-checks'>" + OPTIONS.map(function (o) {
      var on = S.opt.indexOf(o.id) >= 0;
      return "<label class='cfg-check'><input type='checkbox' data-opt='" + o.id + "'" + (on ? " checked" : "") + "><span><b>" + esc(o.name) + "</b>" + (o.text ? "<small>" + esc(o.text) + "</small>" : "") + "</span></label>";
    }).join("") + "</div>";
  };
  R.summary = function () {
    var sr = series(), rows = summaryRows();
    return "<h2 class='cfg-h'>Ihre Konfiguration</h2><div class='cfg-sumhead'><p class='label'>Konfigurationsschlüssel</p><div class='cfg-code'><code>" + esc(code()) + "</code><button type='button' class='cfg-copy' data-copy aria-label='Schlüssel kopieren'>Kopieren</button></div>" +
      "<p class='cfg-hint'>Die verbindliche Bestellbezeichnung erhalten Sie mit dem Angebot.</p></div>" +
      "<div class='table-wrap'><table class='matrix spec'><tbody>" + rows.map(function (r) { return "<tr><th scope='row'>" + esc(r[0]) + "</th><td>" + esc(r[1]) + "</td></tr>"; }).join("") + "</tbody></table></div>" +
      "<div class='cfg-order'><label class='cfg-field'><span>Menge</span><input type='number' min='1' max='100000' value='" + S.qty + "' data-input='qty'> <em>Stück</em></label>" +
      "<a class='btn btn--accent' id='cfg-request' href='" + requestHref() + "'>Angebot anfordern <svg aria-hidden='true'><use href='#i-arrow'/></svg></a>" +
      (sr && sr.href ? "<a class='btn btn--ghost' href='" + sr.href + "'>Produktseite " + esc(sr.name) + "</a>" : "") + "</div>" +
      "<div class='cfg-callout cfg-callout--muted'><p><b>Hinweis zum Prototyp:</b> Preis, Laserklasse (nach IEC 60825-1) und MTTF-Prognose berechnet der bestehende Konfigurator für freigeschaltete Kunden. Diese Berechnungen werden bei der Umsetzung übernommen.</p></div>";
  };
  function summaryRows() {
    var sr = series(), md = modById(S.mod), rows = [["Produktgruppe", group().name]];
    if (sr) rows.push(["Serie", sr.name]);
    if (sr && sr.housings) rows.push(["Gehäuse", { ST: "Standard (ST)", "2H": "Zwei Gehäuse (2H)", OH: "Optikkopf (OH)" }[S.h]]);
    if (S.wl) rows.push(["Wellenlänge", S.wl + " nm"]);
    if (S.p) rows.push(["Leistung", S.p + " mW"]);
    if (sr && !sr.request) {
      rows.push(["Fächerwinkel", S.fan + "°"], ["Linienlänge", fmt(lineLen(S.fan, S.d)) + " mm bei " + fmt(S.d) + " mm Abstand"], ["Optik", S.o + " – " + OPTICS[S.o][0]], ["Fokus", S.f === "FIX" ? "Fix (ab Werk)" : "Einstellbar"]);
      if (sr.variants) rows.push(["Ausführung", S.r]);
      rows.push(["Modulation", md.id === "none" ? "Keine Modulation" : md.code + " – " + md.name + (md.lvl ? " (" + (S.lvl === "24" ? "24 V" : "5 V / TTL") + ")" : "")], ["Anschluss", "Kabel 2 m"]);
      if (S.opt.length) rows.push(["Optionen", S.opt.map(function (id) { for (var i = 0; i < OPTIONS.length; i++) if (OPTIONS[i].id === id) return OPTIONS[i].name; return id; }).join(", ")]);
      rows.push(["Menge", S.qty + " Stück"]);
    }
    return rows;
  }
  function requestHref() {
    var sr = series();
    var text = "Konfiguration: " + code() + "\n" + summaryRows().map(function (r) { return r[0] + ": " + r[1]; }).join("\n");
    return "kontakt.html?produkt=" + encodeURIComponent(sr ? sr.name : group().name) + "&konfig=" + encodeURIComponent(text);
  }

  /* ---------- Seitenleiste & Stepper ---------- */
  var stepBtns = document.querySelectorAll(".cfg-stepper button");
  function updateAside() {
    document.getElementById("cfg-key").textContent = code();
    var rows = summaryRows().filter(function (r) { return r[0] !== "Linienlänge"; });
    document.getElementById("cfg-list").innerHTML = rows.map(function (r) { return "<div><dt>" + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd></div>"; }).join("");
    var idx = STEPS.indexOf(S.step), sr = series();
    stepBtns.forEach(function (b, i) {
      var reachable = i <= 1 || (sr && !sr.request && S.g === "mv" && (i <= 2 || (S.wl && S.p)));
      b.disabled = !reachable;
      b.classList.toggle("is-done", i < idx);
      if (i === idx) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current");
    });
    document.querySelector(".cfg-progress i").style.transform = "scaleX(" + (idx / (STEPS.length - 1)) + ")";
    /* aktiven Schritt in der Leiste sichtbar halten (Smartphone) */
    var list = document.querySelector(".cfg-stepper"), act = stepBtns[idx];
    if (list && act && list.scrollWidth > list.clientWidth) list.scrollTo({ left: act.parentNode.offsetLeft - 20, behavior: "smooth" });
    document.querySelectorAll("[data-prev]").forEach(function (b) { b.disabled = idx === 0; });
    document.querySelectorAll("[data-next]").forEach(function (b) {
      var last = idx === STEPS.length - 1;
      b.disabled = !canAdvance() || last || (S.step === "series" && S.g !== "mv");
      b.hidden = last;
    });
  }

  function render(focus) {
    sanitize();
    main.classList.remove("is-in"); void main.offsetWidth;
    main.innerHTML = R[S.step]();
    main.classList.add("is-in");
    updateAside(); saveUrl();
    if (focus) { main.focus({ preventScroll: true }); var top = main.getBoundingClientRect().top + window.scrollY - 150; if (window.scrollY > top) window.scrollTo({ top: top, behavior: "smooth" }); }
  }
  function go(step) { S.step = step; render(true); }

  /* ---------- Ereignisse ---------- */
  main.addEventListener("click", function (e) {
    var b = e.target.closest("[data-set]");
    if (b && !b.disabled) {
      var k = b.dataset.set, v = b.dataset.val;
      if (k === "fan") v = +v;
      if (k === "g" && S.g !== v) { S.s = ""; S.wl = 0; S.p = 0; S.f = ""; }
      if (k === "s" && S.s !== v) { S.f = ""; }
      S[k] = v;
      if (k === "s" && series() && !series().request) { render(); setTimeout(function () { go("wlpower"); }, 260); return; }
      render(); return;
    }
    var c = e.target.closest("[data-wlp]");
    if (c) { var a = c.dataset.wlp.split("|"); S.wl = +a[0]; S.p = +a[1]; render(); return; }
    if (e.target.closest("[data-copy]")) {
      var t = code(); if (navigator.clipboard) navigator.clipboard.writeText(t).catch(function () {});
      e.target.textContent = "Kopiert ✓"; setTimeout(function () { e.target.textContent = "Kopieren"; }, 1500);
    }
  });
  main.addEventListener("change", function (e) {
    var o = e.target.closest("[data-opt]");
    if (o) { var id = o.dataset.opt; S.opt = S.opt.filter(function (x) { return x !== id; }); if (o.checked) S.opt.push(id); updateAside(); saveUrl(); }
  });
  main.addEventListener("input", function (e) {
    var i = e.target.closest("[data-input]"); if (!i) return;
    var k = i.dataset.input, v = parseFloat(i.value);
    if (k === "d" && v > 0) { S.d = v; refreshOptics(); }
    if (k === "qty" && v > 0) { S.qty = Math.round(v); updateAside(); saveUrl(); var a = document.getElementById("cfg-request"); if (a) a.href = requestHref(); }
    if (k === "want") {
      var out = document.getElementById("cfg-want"), sr = series();
      if (!(v > 0)) { out.textContent = ""; return; }
      var need = 2 * Math.atan(v / (2 * S.d)) * 180 / Math.PI, best = null;
      sr.angles.forEach(function (a) { if (best === null || Math.abs(a - need) < Math.abs(best - need)) best = a; });
      out.innerHTML = "Benötigt: " + need.toFixed(1).replace(".", ",") + "° – nächster Standard: <button type='button' class='cfg-link' data-set='fan' data-val='" + best + "'>" + best + "° übernehmen</button>";
    }
  });
  function refreshOptics() {
    var fig = main.querySelector(".cfg-fan figcaption"); if (fig) fig.innerHTML = "<b>L = " + fmt(lineLen(S.fan, S.d)) + " mm</b> bei d = " + fmt(S.d) + " mm";
    var sr = series(), tr = main.querySelector(".cfg-lentable tbody tr");
    if (tr && sr) tr.innerHTML = "<th scope='row'>L bei " + fmt(S.d) + " mm</th>" + sr.angles.map(function (a) { return "<td" + (a === S.fan ? " class='is-on'" : "") + ">" + fmt(lineLen(a, S.d)) + "</td>"; }).join("");
    updateAside(); saveUrl();
  }
  document.querySelectorAll("[data-next]").forEach(function (b) { b.addEventListener("click", function () { var i = STEPS.indexOf(S.step); if (canAdvance() && i < STEPS.length - 1) go(STEPS[i + 1]); }); });
  document.querySelectorAll("[data-prev]").forEach(function (b) { b.addEventListener("click", function () { var i = STEPS.indexOf(S.step); if (i > 0) go(STEPS[i - 1]); }); });
  stepBtns.forEach(function (b) { b.addEventListener("click", function () { if (!b.disabled) go(b.dataset.step); }); });

  // Ungültige Startschritte abfangen (z. B. Link direkt auf "optics" ohne Serie)
  (function () {
    var sr = series(), i = STEPS.indexOf(S.step);
    if (i >= 2 && (!sr || sr.request || S.g !== "mv")) S.step = sr ? "series" : "group";
    sanitize();
    if (STEPS.indexOf(S.step) >= 3 && !(S.wl && S.p)) S.step = "wlpower";
  })();
  render(false);
})();
