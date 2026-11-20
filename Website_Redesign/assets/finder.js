/* Produktfinder – filtert BLAU-Produkte nach belegten Werten (Daten: finder-data.js) */
(function () {
  "use strict";
  var D = window.BLAU_FINDER;
  var form = document.getElementById("finder-form");
  if (!D || !form) return;
  var EN = (document.documentElement.lang || "").toLowerCase().indexOf("en") === 0;
  var L = EN ? {
    type: "Product type", all: "All", any: "Any", mv: "Line for machine vision", line: "Line laser (positioning)", dot: "Dot laser", pattern: "Patterns (DOE)", lens: "Powell lens (optics)", oem: "OEM module",
    wl: "Wavelength", pw: "Min. output power", ang: "Fan angle", feats: "Features",
    f: { pulsed: "Pulsed operation", m12: "M12 connector", mod: "Modulation", nocool: "No active cooling needed", tec: "Integrated cooling (TEC)", fixed: "Factory-adjusted" },
    reset: "Reset filters", details: "Details", cfg: "Configure", ask: "Request", upTo: "up to", wls: "Wavelengths",
    angles: "Fan angle", found: function (n) { return n === 1 ? "1 product matches your values." : n + " products match your values."; },
    none: "No product matches all values from our data tables – but we often build exactly that as a custom module.",
    noneCta: "Send your values", more: "Values not listed in our tables – please ask",
    moreLead: "For these products, the selected values are not listed in our data tables. They may still be possible:",
    onReq: "on request", mw: "mW", nm: "nm", note: "Matches are based on the published data tables of each product. Combinations not listed are often possible on request."
  } : {
    type: "Produktart", all: "Alle", any: "Egal", mv: "Linie für Bildverarbeitung", line: "Linienlaser (Positionierung)", dot: "Punktlaser", pattern: "Muster (DOE)", lens: "Powell-Linse (Optik)", oem: "OEM-Modul",
    wl: "Wellenlänge", pw: "Mindestleistung", ang: "Öffnungswinkel", feats: "Besonderheiten",
    f: { pulsed: "Gepulster Betrieb", m12: "M12-Anschluss", mod: "Modulation", nocool: "Keine aktive Kühlung nötig", tec: "Integrierte Kühlung (TEC)", fixed: "Ab Werk justiert" },
    reset: "Filter zurücksetzen", details: "Details", cfg: "Konfigurieren", ask: "Anfragen", upTo: "bis", wls: "Wellenlängen",
    angles: "Öffnungswinkel", found: function (n) { return n === 1 ? "1 Produkt passt zu Ihren Werten." : n + " Produkte passen zu Ihren Werten."; },
    none: "Kein Produkt erfüllt laut unseren Datentabellen alle Werte – genau so etwas fertigen wir aber oft als Sondermodul.",
    noneCta: "Werte anfragen", more: "Werte nicht tabelliert – bitte anfragen",
    moreLead: "Für diese Produkte sind die gewählten Werte nicht in unseren Datentabellen aufgeführt. Möglich sind sie trotzdem oft:",
    onReq: "auf Anfrage", mw: "mW", nm: "nm", note: "Die Treffer beruhen auf den veröffentlichten Datentabellen der Produkte. Nicht aufgeführte Kombinationen sind oft auf Anfrage möglich."
  };
  var num = function (n) { return Number(n).toLocaleString(EN ? "en-US" : "de-DE"); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var wlColor = function (w) { return w < 430 ? "#7b2cff" : w < 490 ? "#2a3cff" : w < 560 ? "#19b84a" : w < 600 ? "#e0c000" : w < 700 ? "#e3121b" : "#6b1a1a"; };

  // ---- Formular aufbauen ----
  var types = [["", L.all], ["mv", L.mv], ["line", L.line], ["dot", L.dot], ["pattern", L.pattern], ["lens", L.lens], ["oem", L.oem]];
  var opt = function (v, t) { return '<option value="' + v + '">' + t + "</option>"; };
  var featKeys = ["pulsed", "m12", "mod", "nocool", "tec", "fixed"];
  form.innerHTML =
    '<fieldset class="finder-field"><legend>' + L.type + '</legend><div class="finder-chips">' +
    types.map(function (t) { return '<label><input type="radio" name="type" value="' + t[0] + '"' + (t[0] === "" ? " checked" : "") + "><span>" + t[1] + "</span></label>"; }).join("") +
    "</div></fieldset>" +
    '<div class="finder-row">' +
    '<div class="field"><label for="f-wl">' + L.wl + '</label><select id="f-wl" name="wl">' + opt("", L.any) + D.wavelengths.map(function (w) { return opt(w, w + " " + L.nm); }).join("") + "</select></div>" +
    '<div class="field"><label for="f-pw">' + L.pw + '</label><select id="f-pw" name="pw">' + opt("", L.any) + D.powers.map(function (p) { return opt(p, "≥ " + num(p) + " " + L.mw); }).join("") + "</select></div>" +
    '<div class="field"><label for="f-ang">' + L.ang + '</label><select id="f-ang" name="ang">' + opt("", L.any) + D.angles.map(function (a) { return opt(a, a + "°"); }).join("") + "</select></div>" +
    "</div>" +
    '<fieldset class="finder-field"><legend>' + L.feats + '</legend><div class="finder-checks">' +
    featKeys.map(function (k) { return '<label><input type="checkbox" name="feat" value="' + k + '"><span>' + L.f[k] + "</span></label>"; }).join("") +
    "</div></fieldset>" +
    '<button type="button" class="btn btn--ghost finder-reset">' + L.reset + "</button>" +
    '<p class="finder-note">' + L.note + "</p>";

  // ---- Zustand aus URL übernehmen ----
  var qs = new URLSearchParams(location.search);
  if (qs.get("art")) { var r = form.querySelector('input[name="type"][value="' + qs.get("art") + '"]'); if (r) r.checked = true; }
  ["wl", "pw", "ang"].forEach(function (k) { if (qs.get(k)) form.elements[k].value = qs.get(k); });
  (qs.get("feat") || "").split(",").forEach(function (k) { var c = form.querySelector('input[name="feat"][value="' + k + '"]'); if (c) c.checked = true; });

  function state() {
    return {
      type: (form.querySelector('input[name="type"]:checked') || {}).value || "",
      wl: form.elements.wl.value ? +form.elements.wl.value : null,
      pw: form.elements.pw.value ? +form.elements.pw.value : null,
      ang: form.elements.ang.value ? +form.elements.ang.value : null,
      feats: Array.prototype.map.call(form.querySelectorAll('input[name="feat"]:checked'), function (c) { return c.value; })
    };
  }
  function rangeHas(text, a) { var m = (text || "").match(/(\d+)\D+(\d+)/); return m ? a >= +m[1] && a <= +m[2] : null; }

  // Ergebnis je Produkt: "yes" | "ask" | "no"
  function check(p, s) {
    var t = p.cat === "Machine Vision" ? "mv" : p.type;
    if (s.type && s.type !== t) return "no";
    for (var i = 0; i < s.feats.length; i++) if (p.feats.indexOf(s.feats[i]) < 0) return "no";
    var res = "yes";
    var hasCombos = Object.keys(p.combos).length > 0;
    if (s.wl) {
      if (hasCombos) { if (!p.combos[s.wl]) return "no"; if (s.pw && p.combos[s.wl] < s.pw) return "no"; }
      else if (p.wls.length) { if (p.wls.indexOf(s.wl) < 0) return "no"; if (s.pw && p.maxPower && s.pw > p.maxPower) return "no"; res = "ask"; }
      else res = "ask";
    } else if (s.pw) {
      if (p.maxPower) { if (s.pw > p.maxPower) return "no"; if (!hasCombos) res = "ask"; } else res = "ask";
    }
    if (s.ang) {
      if (p.type === "dot") return "no"; // Punktlaser haben keinen Öffnungswinkel
      if (p.angles.length) { if (p.angles.indexOf(s.ang) < 0) return "no"; }
      else { var ok = rangeHas(p.angleRange, s.ang); if (ok === false) return "no"; if (ok === null) res = "ask"; }
    }
    return res;
  }

  function wlRange(p) { var w = p.wls.length ? p.wls.slice().sort(function (a, b) { return a - b; }) : Object.keys(p.combos).map(Number).sort(function (a, b) { return a - b; }); return w.length ? w[0] + "–" + w[w.length - 1] + " " + L.nm : ""; }
  function card(p, s, ask) {
    var name = EN ? p.nameEN : p.name, facts = [];
    if (s.wl && p.combos[s.wl]) facts.push('<li><span class="wl" style="background:' + wlColor(s.wl) + '"></span>' + s.wl + " " + L.nm + ": " + L.upTo + " " + num(p.combos[s.wl]) + " " + L.mw + "</li>");
    else { if (wlRange(p)) facts.push("<li>" + wlRange(p) + "</li>"); if (p.maxPower) facts.push("<li>" + L.upTo + " " + num(p.maxPower) + " " + L.mw + "</li>"); }
    if (p.angleRange) facts.push("<li>" + esc(p.angleRange.replace(/ – /, "–")) + "</li>");
    if (p.housing) facts.push("<li>" + esc(EN ? p.housing.replace(/(\d),(\d)/g, "$1.$2") : p.housing) + "</li>");
    p.feats.forEach(function (f) { facts.push('<li class="feat">' + L.f[f] + "</li>"); });
    var cfg = p.cfg ? '<a class="btn btn--ghost btn--sm" href="konfigurator.html?g=mv&amp;s=' + p.cfg + (s.wl ? "&amp;wl=" + s.wl : "") + '&amp;step=wlpower">' + L.cfg + "</a>" : "";
    return '<article class="finder-card' + (ask ? " is-ask" : "") + '">' +
      '<a class="finder-card__media" href="produkt-' + p.slug + '.html" tabindex="-1" aria-hidden="true"><img src="' + esc(p.img) + '" alt="" loading="lazy"></a>' +
      '<div class="finder-card__body"><span class="cat">' + esc(EN ? p.catEN : p.cat) + (ask ? " · " + L.onReq : "") + "</span>" +
      '<h2><a href="produkt-' + p.slug + '.html">' + esc(name) + "</a></h2>" +
      '<ul class="finder-facts">' + facts.join("") + "</ul>" +
      '<div class="finder-actions"><a class="btn btn--accent btn--sm" href="produkt-' + p.slug + '.html">' + L.details + "</a>" + cfg +
      '<a class="btn btn--ghost btn--sm" href="kontakt.html?produkt=' + encodeURIComponent(p.name) + '">' + L.ask + "</a></div></div></article>";
  }

  var grid = document.getElementById("finder-grid"), status = document.getElementById("finder-status"), more = document.getElementById("finder-more");
  function render() {
    var s = state(), yes = [], ask = [];
    D.products.forEach(function (p) { var r = check(p, s); if (r === "yes") yes.push(p); else if (r === "ask") ask.push(p); });
    if (s.wl) yes.sort(function (a, b) { return (b.combos[s.wl] || 0) - (a.combos[s.wl] || 0); });
    status.textContent = L.found(yes.length);
    grid.innerHTML = yes.length ? yes.map(function (p) { return card(p, s, false); }).join("")
      : '<div class="finder-empty"><p>' + L.none + '</p><a class="btn btn--accent" href="kontakt.html?produkt=' + encodeURIComponent((EN ? "Product finder: " : "Produktfinder: ") + [s.wl ? s.wl + " nm" : "", s.pw ? "≥" + s.pw + " mW" : "", s.ang ? s.ang + "°" : ""].filter(Boolean).join(", ")) + '">' + L.noneCta + "</a></div>";
    more.innerHTML = ask.length ? '<h2 class="finder-more__title">' + L.more + '</h2><p class="finder-more__lead">' + L.moreLead + '</p><div class="finder-grid">' + ask.map(function (p) { return card(p, s, true); }).join("") + "</div>" : "";
    // URL aktualisieren (teilbar)
    var q = new URLSearchParams();
    if (s.type) q.set("art", s.type); if (s.wl) q.set("wl", s.wl); if (s.pw) q.set("pw", s.pw); if (s.ang) q.set("ang", s.ang); if (s.feats.length) q.set("feat", s.feats.join(","));
    history.replaceState(null, "", location.pathname + (q.toString() ? "?" + q.toString() : ""));
  }
  form.addEventListener("change", render);
  form.querySelector(".finder-reset").addEventListener("click", function () { form.reset(); render(); });
  render();
})();
