/* BLAU Optoelektronik – Modul-Konfigurator (Prototyp im neuen Design)
   Daten stammen aus dem bestehenden Konfigurator bzw. den Produktseiten.
   Preis, Laserklasse und MTTF werden hier bewusst NICHT berechnet (Formeln liegen nur im Live-Konfigurator). */
(function () {
  "use strict";
  var EN = (document.documentElement.lang || "").toLowerCase().indexOf("en") === 0;
  var main = document.getElementById("cfg-main");
  if (!main) return;

  var IMG = "https://xtuwjizliuthdgytloju.supabase.co/storage/v1/object/public/uploads/products/";
  var STEPS = ["group", "series", "wlpower", "optics", "electrical", "options", "summary"];
  var ALL6 = ["STD", "DL", "DLE", "DLSE", "TS1", "TS2"];
  var A_1_90 = [1, 5, 10, 15, 20, 30, 45, 60, 75, 90];
  var C11 = [1, 3, 5, 10, 20, 30, 35, 40, 50, 75, 100];

  var GROUPS = [
    { id: "mv", name: "Machine Vision", img: (EN ? "../" : "") + "assets/products/mvnano-duo.png",
      text: (EN ? "Laser line with uniform intensity distribution for machine vision." : "Laserlinie mit homogener Intensitätsverteilung für die industrielle Bildverarbeitung."),
      props: [(EN ? "Uniform intensity along the line (Powell optics)" : "Homogene Intensität entlang der Linie (Powell-Optik)"), (EN ? "Fine line, selectable depth of field" : "Feine Linie, wählbare Schärfentiefe"), (EN ? "Modulation for camera synchronisation" : "Modulation zur Kamerasynchronisation")],
      apps: [(EN ? "3D triangulation" : "3D-Triangulation"), (EN ? "Optical measurement with cameras" : "Optische Messverfahren mit Kamera"), (EN ? "Profile and surface inspection" : "Profil- und Oberflächeninspektion")] },
    { id: "gauss", name: (EN ? "Gaussian line" : "Gaußlinie"), img: IMG + "3/images/Linienlaser-main.jpg", href: "produkt-linienlaser.html",
      text: (EN ? "Laser line with Gaussian intensity distribution – bright in the centre, soft at the ends." : "Laserlinie mit gaußförmiger Intensitätsverteilung – hell in der Mitte, weich auslaufend."),
      props: [(EN ? "Gaussian intensity distribution" : "Gaußförmige Intensitätsverteilung"), (EN ? "Clearly visible, sharp centre line" : "Gut sichtbare, scharfe Mittellinie"), (EN ? "Rugged and cost-effective" : "Robust und kostengünstig")],
      apps: [(EN ? "Alignment tasks" : "Ausrichtaufgaben"), (EN ? "Patient positioning (medical technology)" : "Patientenpositionierung (Medizintechnik)"), (EN ? "Positioning and marking aids in machines" : "Positionier- und Markierhilfen in Maschinen")] },
    { id: "dot", name: (EN ? "Dot module" : "Punktmodul"), img: IMG + "6/images/Punkt-Laser.jpg", href: "produkt-punktlaser.html",
      text: (EN ? "Laser dot with round beam profile, adjustable or fixed focus." : "Laserpunkt mit rundem Strahlprofil, fokussierbar oder fix."),
      props: [(EN ? "Round laser dot" : "Runder Laserpunkt"), (EN ? "Adjustable or fixed focus" : "Fokussierbar oder fix fokussiert"), (EN ? "Compact design" : "Kompakte Bauform")],
      apps: [(EN ? "Positioning and adjustment" : "Positionieren und Justieren"), (EN ? "Marking and aiming aids" : "Markier- und Zielhilfen"), (EN ? "Sensors and light barriers" : "Sensorik und Lichtschranken")] },
    { id: "doe", name: (EN ? "Pattern laser (DOE)" : "Musterlaser (DOE)"), img: IMG + "13/images/FP-DOE-CX_Abbildung_4.jpeg", href: "produkt-doe.html",
      text: (EN ? "Laser with diffractive optical element (DOE): projects crosses, multiple lines, dot matrices, circles and more." : "Laser mit diffraktivem optischem Element (DOE): projiziert Kreuze, Linienscharen, Punktmatrizen, Kreise und mehr."),
      props: [(EN ? "More than 30 standard patterns" : "Über 30 Standardmuster"), (EN ? "Sharp patterns over a long working distance" : "Scharfe Muster über großen Arbeitsabstand"), (EN ? "Custom DOEs possible" : "Kundenspezifische DOEs möglich")],
      apps: [(EN ? "Crosshair for alignment and aiming" : "Fadenkreuz zum Ausrichten und Zielen"), (EN ? "Structured illumination and 3D capture" : "Strukturierte Beleuchtung und 3D-Erfassung"), (EN ? "Calibration and distance measurement" : "Kalibrierung und Abstandsmessung")] },
    { id: "powell", name: (EN ? "Powell lenses" : "Powell-Linsen"), img: IMG + "5/images/powelllinsen1.jpg", href: "produkt-powell-linsen.html",
      text: (EN ? "Aspherical cylindrical lenses from in-house production: transform a Gaussian beam into a homogeneous laser line." : "Asphärische Zylinderlinsen aus eigener Fertigung: formen einen Gaußstrahl in eine homogene Laserlinie um."),
      props: [(EN ? "Fan angle 1°–90°, Ø 6 or 9 mm" : "Fächerwinkel 1°–90°, Ø 6 oder 9 mm"), (EN ? "Intensity variation ≤20 % (80 % of the line)" : "Homogenität ≤20 % (80 % der Linie)"), (EN ? "Matched to the beam diameter" : "Auf den Strahldurchmesser abgestimmt")],
      apps: [(EN ? "Camera-based measuring devices" : "Kamerabasierte Messgeräte"), (EN ? "Light-section and triangulation methods" : "Lichtschnitt- und Triangulationsverfahren"), (EN ? "Machine vision systems" : "Machine-Vision-Systeme")] }
  ];

  /* ---------- Powell-Linsen (BO_AxBxDx) – nur öffentliche Datenblattwerte (Datenblatt Rev 4, 26.06.2024).
     Die Linsenauslegung/Simulation ist vertraulich und läuft nur serverseitig im Live-Konfigurator – hier bewusst NICHT enthalten. ---------- */
  var P_FANS = [1, 5, 10, 15, 20, 30, 45, 60, 75, 90];
  var P_BEAMS = [5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 24, 28, 30]; // Strahldurchmesser 1/e² [mm] × 10
  var P_DIAMS = [6, 9];
  var P_GEO = { 1: [5.5, 8.1], 5: [5.2, 7.8], 10: [5.0, 7.5], 15: [4.8, 7.0], 20: [4.5, 6.7], 30: [4.0, 5.9], 45: [3.9, 4.6], 60: [3.5, 5.1], 75: [2.9, 4.3], 90: [2.3, 3.4] }; // EH [mm] für Ø6 / Ø9
  var P_H = { 6: [5.5, 5.9], 9: [8.2, 8.9] };
  var P_PHOTO = IMG + "5/images/powelllinsen2.jpg";
  function num1(v) { return v.toLocaleString(EN ? "en-US" : "de-DE", { maximumFractionDigits: 1 }); }
  function pCode() { return "BO_A" + S.pa + "B" + (S.pb < 10 ? "0" : "") + S.pb + "D" + S.pd; }
  function pEH() { var g = P_GEO[S.pa]; return g ? (S.pd === 6 ? g[0] : g[1]) : 0; }
  function pTol(f) { return f === 1 ? 1 : f <= 45 ? 3 : 5; }
  function pSpecRows() {
    var mat = S.pa <= 45 ? "BK7" : "SF6";
    return [
      [(EN ? "Product" : "Produkt"), (EN ? "Powell lens" : "Powell-Linse")],
      [(EN ? "Fan angle" : "Fächerwinkel"), S.pa + "° (+" + pTol(S.pa) + "°) @660 nm"],
      [(EN ? "Beam diameter (1/e²)" : "Strahldurchmesser (1/e²)"), num1(S.pb / 10) + " mm"],
      [(EN ? "Lens diameter" : "Linsendurchmesser"), S.pd + " mm"],
      [(EN ? "Line intensity variation" : "Homogenität"), (EN ? "≤20 % (80 % of the laser line)" : "≤20 % (80 % der Laserlinie)")],
      [(EN ? "Line straightness" : "Geradheit"), (EN ? "≤0.1 %" : "≤0,1 %")],
      [(EN ? "Material" : "Werkstoff"), mat === "SF6" ? (EN ? "SF6 or equivalent (AR coating plane surface)" : "SF6 o. glw. (AR-Beschichtung Planfläche)") : (EN ? "BK7 or equivalent" : "BK7 o. glw.")],
      [(EN ? "Dimensions" : "Abmessungen"), S.pd === 6 ? (EN ? "Ø 5.9–6.0 mm, height 5.5–5.9 mm" : "Ø 5,9–6,0 mm, Höhe 5,5–5,9 mm") : (EN ? "Ø 8.9–9.0 mm, height 8.2–8.9 mm" : "Ø 8,9–9,0 mm, Höhe 8,2–8,9 mm")],
      [(EN ? "Height cylindrical part EH" : "Höhe zylindrischer Teil EH"), num1(pEH()) + " mm"],
      [(EN ? "Operating temperature" : "Betriebstemperatur"), (EN ? "-20 °C to +120 °C" : "-20 °C bis +120 °C")],
      [(EN ? "Storage temperature" : "Lagertemperatur"), (EN ? "-20 °C to +120 °C" : "-20 °C bis +120 °C")]
    ];
  }
  function powellSketch() {
    var d = S.pd, eh = pEH(), h = P_H[d], hNom = (h[0] + h[1]) / 2, k = 120 / d, x0 = 70, cy = 95, hd = (d / 2) * k, xe = x0 + eh * k, xa = x0 + hNom * k, N = "#003d74";
    var arr = function (x1, y1, x2, y2) { return "<line x1='" + x1 + "' y1='" + y1 + "' x2='" + x2 + "' y2='" + y2 + "' stroke='" + N + "' stroke-width='1' marker-start='url(#ps-a)' marker-end='url(#ps-a)'/>"; };
    return "<svg viewBox='0 0 330 230' role='img' aria-label='" + (EN ? "Dimensional sketch Powell lens" : "Maßskizze Powell-Linse") + "'><defs><marker id='ps-a' viewBox='0 0 10 10' refX='5' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M0 0 L10 5 L0 10 z' fill='" + N + "'/></marker><marker id='ps-r' viewBox='0 0 10 10' refX='8' refY='5' markerWidth='5' markerHeight='5' orient='auto'><path d='M0 0 L10 5 L0 10 z' fill='#00a6c1'/></marker></defs>" +
      "<path d='M" + x0 + " " + (cy - hd) + " L" + xe + " " + (cy - hd) + " L" + xa + " " + cy + " L" + xe + " " + (cy + hd) + " L" + x0 + " " + (cy + hd) + " Z' fill='#e0e7ef' stroke='" + N + "' stroke-width='1.5'/>" +
      "<line x1='" + (x0 - 10) + "' x2='" + (xa + 30) + "' y1='" + cy + "' y2='" + cy + "' stroke='" + N + "' stroke-width='.8' stroke-dasharray='8 3 2 3'/>" +
      "<line x1='" + (x0 - 34) + "' x2='" + (x0 - 2) + "' y1='" + (cy - hd) + "' y2='" + (cy - hd) + "' stroke='#94a3b8' stroke-width='.8'/><line x1='" + (x0 - 34) + "' x2='" + (x0 - 2) + "' y1='" + (cy + hd) + "' y2='" + (cy + hd) + "' stroke='#94a3b8' stroke-width='.8'/>" +
      arr(x0 - 26, cy - hd, x0 - 26, cy + hd) + "<text x='" + (x0 - 32) + "' y='" + cy + "' transform='rotate(-90 " + (x0 - 32) + " " + cy + ")' text-anchor='middle' font-size='12' fill='" + N + "'>Ø " + d + " mm</text>" +
      "<line x1='" + x0 + "' x2='" + x0 + "' y1='" + (cy + hd + 2) + "' y2='" + (cy + hd + 62) + "' stroke='#94a3b8' stroke-width='.8'/><line x1='" + xe + "' x2='" + xe + "' y1='" + (cy + hd + 2) + "' y2='" + (cy + hd + 30) + "' stroke='#94a3b8' stroke-width='.8'/><line x1='" + xa + "' x2='" + xa + "' y1='" + (cy + 4) + "' y2='" + (cy + hd + 62) + "' stroke='#94a3b8' stroke-width='.8'/>" +
      arr(x0, cy + hd + 22, xe, cy + hd + 22) + "<text x='" + ((x0 + xe) / 2) + "' y='" + (cy + hd + 17) + "' text-anchor='middle' font-size='11' fill='" + N + "'>EH " + num1(eh) + " mm</text>" +
      arr(x0, cy + hd + 54, xa, cy + hd + 54) + "<text x='" + ((x0 + xa) / 2) + "' y='" + (cy + hd + 49) + "' text-anchor='middle' font-size='11' fill='" + N + "'>H " + num1(h[0]) + "–" + num1(h[1]) + " mm</text>" +
      "<text x='" + (xa + 6) + "' y='" + (cy - hd + 4) + "' font-size='11' font-weight='600' fill='" + N + "'>" + (EN ? "Roof apex" : "Dachfirst") + "</text><line x1='" + (xa + 22) + "' y1='" + (cy - hd + 8) + "' x2='" + (xa + 2) + "' y2='" + (cy - 4) + "' stroke='" + N + "' stroke-width='.8'/>" +
      "<line x1='" + (xa + 75) + "' x2='" + (xa + 8) + "' y1='" + cy + "' y2='" + cy + "' stroke='#00a6c1' stroke-width='2.5' marker-end='url(#ps-r)'/><text x='" + (xa + 42) + "' y='" + (cy - 8) + "' text-anchor='middle' font-size='10' fill='#00a6c1'>Laser</text></svg>";
  }
  function powellView() {
    var pill = function (k, v, label) { return "<button type='button' class='cfg-pill" + (S[k] === v ? " is-selected" : "") + "' data-set='" + k + "' data-val='" + v + "' aria-pressed='" + (S[k] === v) + "'>" + label + "</button>"; };
    return "<h2 class='cfg-h'>" + (EN ? "Configure your Powell lens" : "Powell-Linse zusammenstellen") + "</h2><p class='cfg-sub'>" + (EN ? "The lens is designed for the beam diameter of your laser. Order code: BO_A (fan angle) B (beam diameter × 10) D (lens diameter)." : "Die Linse wird auf den Strahldurchmesser Ihres Lasers ausgelegt. Bestellcode: BO_A (Fächerwinkel) B (Strahldurchmesser × 10) D (Linsendurchmesser).") + "</p>" +
      "<div class='cfg-powell'><div>" +
      "<h3 class='cfg-h3'>" + (EN ? "A – Fan angle" : "A – Fächerwinkel") + "</h3><div class='cfg-pills'>" + P_FANS.map(function (f) { return pill("pa", f, f + "°"); }).join("") + "</div>" +
      "<h3 class='cfg-h3'>" + (EN ? "B – Beam diameter (1/e²)" : "B – Strahldurchmesser (1/e²)") + "</h3><div class='cfg-pills'>" + P_BEAMS.map(function (b) { return pill("pb", b, num1(b / 10) + " mm"); }).join("") + "</div>" +
      "<p class='cfg-hint'>" + (EN ? "in mm; order code: value × 10" : "in mm; Bestellcode: Wert × 10") + "</p>" +
      "<h3 class='cfg-h3'>" + (EN ? "D – Lens diameter" : "D – Linsendurchmesser") + "</h3><div class='cfg-pills'>" + P_DIAMS.map(function (d) { return pill("pd", d, "Ø " + d + " mm"); }).join("") + "</div>" +
      "<div class='cfg-sumhead' style='margin-top:20px'><p class='label'>" + (EN ? "Order code" : "Bestellbezeichnung") + "</p><div class='cfg-code'><code>" + pCode() + "</code><button type='button' class='cfg-copy' data-copy aria-label='" + (EN ? "Copy order code" : "Bezeichnung kopieren") + "'>" + (EN ? "Copy" : "Kopieren") + "</button></div></div>" +
      "</div><div><div class='cfg-powell__media'><img src='" + P_PHOTO + "' alt='" + (EN ? "Powell lens" : "Powell-Linse") + "' loading='lazy'><figure>" + powellSketch() + "<figcaption>" + (EN ? "Dimensional sketch (schematic)" : "Maßskizze (schematisch)") + "</figcaption></figure></div></div></div>" +
      "<h3 class='cfg-h3'>" + (EN ? "Technical data" : "Technische Daten") + "</h3><div class='table-wrap'><table class='matrix spec'><tbody>" + pSpecRows().map(function (r) { return "<tr><th scope='row'>" + esc(r[0]) + "</th><td>" + esc(r[1]) + "</td></tr>"; }).join("") + "</tbody></table></div>" +
      "<p class='cfg-hint'>" + (EN ? "Values according to the Powell lens datasheet; the datasheet supplied with the quote is binding." : "Werte laut Datenblatt Powell-Linsen; verbindlich ist das Datenblatt zum Angebot.") + "</p>" +
      "<div class='cfg-order'><label class='cfg-field'><span>" + (EN ? "Quantity" : "Menge") + "</span><input type='number' min='1' max='9999' value='" + S.qty + "' data-input='qty'> <em>" + (EN ? "pcs" : "Stück") + "</em></label>" +
      "<a class='btn btn--accent' id='cfg-request' href='" + requestHref() + "'>" + (EN ? "Request a quote" : "Angebot anfordern") + " <svg aria-hidden='true'><use href='#i-arrow'/></svg></a>" +
      "<a class='btn btn--ghost' href='produkt-powell-linsen.html'>" + (EN ? "Product page Powell lenses" : "Produktseite Powell-Linsen") + "</a></div>" +
      "<div class='cfg-callout cfg-callout--muted'><p>" + (EN ? "<b>Simulator:</b> The intensity distribution along the line for your laser (beam diameter, wavelength, distance) and prices are available to registered customers in the live configurator." : "<b>Simulator:</b> Die Intensitätsverteilung entlang der Linie für Ihren Laser (Strahldurchmesser, Wellenlänge, Abstand) und Preise stehen freigeschalteten Kunden im Live-Konfigurator zur Verfügung.") + "</p></div>";
  }

  function m(cols, rows) { return { cols: cols, rows: rows }; }
  var M_NANO = m([1, 3, 5, 10, 20, 30, 35, 40, 50, 75, 80, 100], [[405, "YYYYYYYYYYYY"], [450, "YYYYYYYYYYNN"], [520, "YYYYYYYYYYYN"], [640, "YYYYYYYYYYYY"], [660, "YYYYYYYYYYYY"], [685, "YYYYYYYYNNNN"], [785, "YYYYYYYYYYYY"], [830, "YYYYYYYYYYYN"], [850, "YYYYYYYYNNNN"]]);
  var M_PICO = m(C11, [[405, "YYYYYYNNNNN"], [450, "YYYYYYYYYNN"], [520, "YYYYNNNNNNN"], [640, "YYYYYYYYYYY"], [660, "YYYYYYYYYYY"], [685, "YYYYYYYYNNN"], [785, "YYYYYYYYYYY"], [830, "YYYYYYYYNNN"], [850, "YYYYYYYYNNN"]]);
  var M_FEMTO = m(C11, [[405, "YYYYYYNNNNN"], [450, "YYYYYYYYYNN"], [520, "YYYYNNNNNNN"], [640, "YYYYYNNNNNN"], [660, "YYYYYYNNNNN"], [685, "YYYYYYYYNNN"], [785, "YYYYNNNNNNN"], [830, "YYYYYYYYNNN"], [850, "YYYYYYYYNNN"]]);
  var M_MICRO = m([1, 3, 5, 10, 20, 30, 35, 40, 50, 70, 80, 100], [[405, "YYYYYYYYYYYY"], [450, "YYYYYYYYYYNN"], [520, "YYYYYYYYYYYN"], [640, "YYYYYYYYYYYY"], [660, "YYYYYYYYYYYY"], [685, "YYYYYYYYNNNN"], [785, "YYYYYYYYYYYY"], [830, "YYYYYYYYYYYN"], [850, "YYYYYYYYNNNN"]]);
  var M_SQUARE = m(C11, [[405, "YYYYYYYYYYY"], [450, "NNYYYYYYYYN"], [520, "YYYYYYYYYYN"], [640, "YYYYYYYYYYY"], [660, "YYYYYYYYYYY"], [685, "YYYYYYYYNNN"], [785, "NNYYYYYYYYY"], [850, "YYYYYYYYNNN"]]);
  var M_PULSE = m([1, 3, 5, 10, 20, 30, 35, 40, 50, 80, 100], [[450, "NNNYYYYYYYN"], [520, "NNNYYYYYYYN"], [640, "NNNYYYYYYYY"], [660, "NNNYYYYYYYY"], [785, "NNNYYYYYYYY"]]);
  var M_PULSEHP = m([500, 1000], [[445, "YY"], [525, "YN"], [660, "YN"], [808, "YN"]]);

  var SERIES = [
    { id: "mvnano", name: "MVnano", img: IMG + "14/images/MVnano2.jpg", href: "produkt-mvnano.html", text: (EN ? "The versatile machine vision line laser at optimised cost." : "Der vielseitige Linienlaser für die Bildverarbeitung bei optimierten Kosten."), bullets: [(EN ? "11.5 × 54 mm housing" : "Gehäuse 11,5 × 54 mm"), (EN ? "Stand-alone or for integration" : "Stand-alone oder zur Integration"), (EN ? "Also available with two housings or as optical head" : "Auch als 2-Gehäuse- oder Optikkopf-Variante")], matrix: M_NANO, angles: A_1_90, optics: ALL6, housings: ["ST", "2H", "OH"] },
    { id: "mvpico", name: "MVpico", img: IMG + "9/images/MVpico.jpg", href: "produkt-mvpico.html", text: (EN ? "Compact line laser for integration into 3D vision sensors." : "Kompakter Linienlaser für die Integration in 3D-Vision-Sensoren."), bullets: [(EN ? "10 × 50 mm housing" : "Gehäuse 10 × 50 mm"), (EN ? "Ideal for smart 3D sensors" : "Ideal für intelligente 3D-Sensoren"), (EN ? "ST, 2H or optical head" : "ST, 2H oder Optikkopf")], matrix: M_PICO, angles: A_1_90, optics: ALL6, housings: ["ST", "2H", "OH"] },
    { id: "mvfemto", name: "MVfemto", img: IMG + "2/images/FP-MVfemto_2.jpg", href: "produkt-mvfemto.html", text: (EN ? "The smallest line laser for the tightest spaces." : "Der kleinste Linienlaser für engste Einbauräume."), bullets: [(EN ? "Only 8 mm diameter, 40 mm length" : "Nur 8 mm Durchmesser, 40 mm Länge"), (EN ? "High power, homogeneous line" : "Hohe Leistung, homogene Linie"), (EN ? "ST, 2H or optical head" : "ST, 2H oder Optikkopf")], matrix: M_FEMTO, angles: A_1_90, optics: ALL6, housings: ["ST", "2H", "OH"] },
    { id: "mvmicro", name: "MVmicro", img: IMG + "8/images/MVmicroMV18.jpg", href: "produkt-mvmicro.html", text: (EN ? "Easy-to-focus line laser for stand-alone tasks." : "Einfach zu fokussierender Linienlaser für Stand-alone-Aufgaben."), bullets: [(EN ? "Fine line, homogeneous power distribution" : "Feine Linie, homogene Leistungsverteilung"), (EN ? "Easy focusing" : "Einfache Fokussierung"), (EN ? "For stand-alone machine vision" : "Für Stand-alone-Bildverarbeitung")], matrix: M_MICRO, angles: A_1_90, optics: ALL6 },
    { id: "mv18", name: "MV18", img: IMG + "8/images/FP-MVmicro-25-MV18_3.png", href: "produkt-mvmicro.html", text: (EN ? "Rugged line laser in an 18 mm housing." : "Robuster Linienlaser im 18-mm-Gehäuse."), bullets: [(EN ? "18 mm housing" : "18-mm-Gehäuse"), (EN ? "Fine, homogeneous line" : "Feine, homogene Linie"), (EN ? "Easy focusing" : "Einfache Fokussierung")], matrix: M_MICRO, angles: A_1_90, optics: ALL6 },
    { id: "mv12", name: "MV12", text: (EN ? "Line laser in a 12 mm housing." : "Linienlaser im 12-mm-Gehäuse."), bullets: [(EN ? "12 mm housing" : "12-mm-Gehäuse"), (EN ? "Homogeneous line" : "Homogene Linie"), (EN ? "For machine vision applications" : "Für Machine-Vision-Anwendungen")], request: true },
    { id: "mvsquare", name: "MVsquare", img: (EN ? "../" : "") + "assets/products/mvsquare-duo.png", href: "produkt-mvsquare.html", text: (EN ? "Rectangular housing for simple plug-and-play mounting." : "Rechteckiges Gehäuse für einfache Plug-and-play-Montage."), bullets: [(EN ? "65 × 15 × 15 mm housing" : "Gehäuse 65 × 15 × 15 mm"), "Plug and play", (EN ? "Line orientation 0° or 90°" : "Linienausrichtung 0° oder 90°")], matrix: M_SQUARE, angles: A_1_90, optics: ALL6, variants: ["R0R0", "R0R90", "R90R0", "R90R90"], wideOnly: { angles: [60, 75, 90], variants: ["R0R0", "R0R90", "R90R0"] }, focusDefault: "FIX" },
    { id: "mvpulse", name: "MVpulse", img: (EN ? "../" : "") + "assets/products/mvpulse-duo.webp", href: "produkt-mvpulse.html", text: (EN ? "Up to 5× peak power within the same laser class thanks to pulse control." : "Bis zu 5-fache Spitzenleistung bei gleicher Laserklasse durch Pulssteuerung."), bullets: [(EN ? "Up to 100 mW peak power" : "Bis 100 mW Spitzenleistung"), (EN ? "Laser class 2 or 3R" : "Laserklasse 2 oder 3R"), (EN ? "Pulse control 2×–5× vs. CW" : "Pulssteuerung 2×–5× ggü. Dauerstrich")], matrix: M_PULSE, angles: [5, 10, 20, 30, 45, 60, 75, 90], optics: ALL6, housings: ["ST", "2H"] },
    { id: "mvpulsehp", name: "MVpulseHP", img: IMG + "16/images/MVpulseHP1.jpg", href: "produkt-mvpulsehp.html", text: (EN ? "High-power pulsed laser up to 1 W without active cooling." : "Hochleistungs-Pulslaser bis 1 W ohne aktive Kühlung."), bullets: [(EN ? "Up to 1 W" : "Bis 1 W"), (EN ? "Limited duty cycle, no active cooling" : "Begrenzter Tastgrad, keine aktive Kühlung"), (EN ? "ST or 2H" : "ST oder 2H")], matrix: M_PULSEHP, angles: [5, 10, 20, 30, 45, 60, 75], optics: ["STD", "DL"], housings: ["ST", "2H"] },
    { id: "mvgoldhp", name: "MVgoldHP", img: IMG + "7/images/zz_FP-MVgoldHP_1.png", href: "produkt-mvgoldhp.html", text: (EN ? "High-power machine vision module with uniform line." : "Leistungsstarkes Machine-Vision-Modul mit gleichmäßiger Linie."), bullets: [(EN ? "Configuration on request" : "Konfiguration auf Anfrage")], request: true },
    { id: "mvbasic", name: "MVbasic", text: (EN ? "Basic line laser for series quantities (from 100 pcs)." : "Basis-Linienlaser für Serienstückzahlen (ab 100 Stück)."), bullets: [(EN ? "Configuration on request" : "Konfiguration auf Anfrage")], request: true }
  ];

  var OPTICS = {
    STD: ["Standard", (EN ? "good compromise of line width and depth of field" : "guter Kompromiss aus Liniendicke und Schärfentiefe"), "145 µm", "49 mm"],
    DL: [(EN ? "Thin line" : "Dünne Linie"), (EN ? "finer line, less depth of field" : "feinere Linie, geringere Schärfentiefe"), "98 µm", "22 mm"],
    DLE: [(EN ? "Thin line enhanced" : "Dünne Linie, verstärkt"), (EN ? "even finer line" : "noch feinere Linie"), "72 µm", "12 mm"],
    DLSE: [(EN ? "Thin line super enhanced" : "Dünne Linie, super verstärkt"), (EN ? "finest line, smallest depth of field" : "feinste Linie, kleinste Schärfentiefe"), "56 µm", (EN ? "7.3 mm" : "7,3 mm")],
    TS1: [(EN ? "Enhanced depth of field" : "Erhöhte Schärfentiefe"), (EN ? "thicker line, large depth range" : "dickere Linie, großer Tiefenbereich"), "230 µm", "124 mm"],
    TS2: [(EN ? "Enhanced depth of field, higher factor" : "Erhöhte Schärfentiefe, höherer Faktor"), (EN ? "largest depth range" : "größter Tiefenbereich"), "340 µm", "271 mm"]
  };
  var MODS = [
    { id: "none", code: "–", name: (EN ? "No modulation" : "Keine Modulation"), text: (EN ? "Laser is permanently on when voltage is applied." : "Laser ist bei anliegender Spannung dauerhaft an."), kind: "none", std: true },
    { id: "M", code: "M", name: (EN ? "Digital, low active" : "Digital, low aktiv"), text: (EN ? "TTL: 0–0.8 V laser on, 2.1–5 V laser off, on with open input, up to 20 kHz." : "TTL: 0–0,8 V Laser an, 2,1–5 V Laser aus, an bei offenem Eingang, bis 20 kHz."), kind: "dig", std: true, lvl: true },
    { id: "MI", code: "MI", name: (EN ? "Digital, high active" : "Digital, high aktiv"), text: (EN ? "TTL: 0–0.8 V laser off, 2.1–5 V laser on, up to 20 kHz." : "TTL: 0–0,8 V Laser aus, 2,1–5 V Laser an, bis 20 kHz."), kind: "digi", std: true, lvl: true },
    { id: "D", code: "D", name: (EN ? "Analog, low active" : "Analog, low aktiv"), text: (EN ? "Max. power at 0 V, power decreases as the control voltage rises. Linear range 0–1 V to 4–5 V, up to 10 Hz." : "Max. Leistung bei 0 V, Leistung sinkt mit steigender Steuerspannung. Linearer Bereich 0–1 V bis 4–5 V, bis 10 Hz."), kind: "ana", std: true },
    { id: "DI", code: "DI", name: (EN ? "Analog, high active" : "Analog, high aktiv"), text: (EN ? "Power increases with the control voltage, linear range 0–1 V to 4–5 V, up to 10 Hz. Non-linear characteristic, slight residual emission in the off state." : "Leistung steigt mit der Steuerspannung, linearer Bereich 0–1 V bis 4–5 V, bis 10 Hz. Nichtlineare Kennlinie, geringes Restleuchten im Aus-Zustand."), kind: "anai", std: false },
    { id: "MD", code: "MD", name: (EN ? "Digital low + analog low active" : "Digital low + analog low aktiv"), text: (EN ? "Combination of digital (up to 20 kHz) and analog input (up to 10 Hz)." : "Kombination aus digitalem (bis 20 kHz) und analogem Eingang (bis 10 Hz)."), kind: "dig", std: true, lvl: true },
    { id: "MID", code: "MID", name: (EN ? "Digital high + analog low active" : "Digital high + analog low aktiv"), text: (EN ? "Combination of digital (up to 20 kHz) and analog input (up to 10 Hz)." : "Kombination aus digitalem (bis 20 kHz) und analogem Eingang (bis 10 Hz)."), kind: "digi", std: true, lvl: true },
    { id: "MDI", code: "MDI", name: (EN ? "Digital low + analog high active" : "Digital low + analog high aktiv"), text: (EN ? "Combination of digital (up to 20 kHz) and analog input (up to 10 Hz)." : "Kombination aus digitalem (bis 20 kHz) und analogem Eingang (bis 10 Hz)."), kind: "dig", std: false },
    { id: "MIDI", code: "MIDI", name: (EN ? "Digital high + analog high active" : "Digital high + analog high aktiv"), text: (EN ? "Combination of digital (up to 20 kHz) and analog input (up to 10 Hz)." : "Kombination aus digitalem (bis 20 kHz) und analogem Eingang (bis 10 Hz)."), kind: "digi", std: false }
  ];
  var OPTIONS = [
    { id: "bs", name: (EN ? "Boresight deviation ≤ 3 mrad" : "Ausrichtung (Boresight) ≤ 3 mrad") },
    { id: "lg", name: (EN ? "Line straightness ±0.05 %" : "Liniengeradheit ±0,05 %") },
    { id: "cos4", name: (EN ? "COS4 correction FOV 2:1" : "COS4-Korrektur FOV 2:1"), text: (EN ? "Power rises towards the line ends to twice the centre value, compensating for the brightness fall-off (cos⁴) at the edge of the camera image." : "Die Leistung steigt zum Linienende auf das Doppelte der Mitte und gleicht so den Helligkeitsabfall (cos⁴) am Bildrand der Kamera aus.") }
  ];

  /* ---------- Zustand (in der URL, damit Konfigurationen teilbar sind) ---------- */
  var q = new URLSearchParams(location.search);
  var S = {
    step: STEPS.indexOf(q.get("step")) >= 0 ? q.get("step") : "group",
    g: q.get("g") || "mv", s: q.get("s") || "", wl: +q.get("wl") || 0, p: +q.get("p") || 0,
    fan: +q.get("fan") || 45, d: +q.get("d") || 500, o: q.get("o") || "STD", f: q.get("f") || "",
    h: q.get("h") || "ST", r: q.get("r") || "R0R0", mod: q.get("mod") || "none", lvl: q.get("lvl") || "5",
    opt: (q.get("opt") || "").split(",").filter(Boolean), qty: +q.get("qty") || 1,
    pa: +q.get("pa") || 30, pb: +q.get("pb") || 10, pd: +q.get("pd") || 9
  };
  if (P_FANS.indexOf(S.pa) < 0) S.pa = 30;
  if (P_BEAMS.indexOf(S.pb) < 0) S.pb = 10;
  if (P_DIAMS.indexOf(S.pd) < 0) S.pd = 9;
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
    if (S.g === "powell") { p.set("pa", S.pa); p.set("pb", S.pb); p.set("pd", S.pd); }
    p.set("mod", S.mod); if (S.opt.length) p.set("opt", S.opt.join(",")); p.set("qty", S.qty); p.set("step", S.step);
    history.replaceState(null, "", "?" + p.toString());
  }

  /* ---------- Hilfen ---------- */
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function lineLen(fan, d) { return 2 * d * Math.tan((fan / 2) * Math.PI / 180); }
  function fmt(n) { return Math.round(n).toLocaleString((EN ? "en-US" : "de-DE")); }
  function wlColor(w) { return { 405: "#7b2cff", 445: "#2a3cff", 450: "#1f4dff", 520: "#19b84a", 525: "#19b84a", 640: "#ff3b1f", 660: "#e3121b", 685: "#b00d1c" }[w] || "#6b7280"; }
  function code() {
    if (S.g === "powell") return pCode();
    var sr = series(); if (!sr) return "–";
    if (sr.request) return sr.name + (EN ? " – on request" : " – auf Anfrage");
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
    return "<h2 class='cfg-h'>" + (EN ? "Which product group suits your application?" : "Welche Produktgruppe passt zu Ihrer Anwendung?") + "</h2><div class='cfg-grid cfg-grid--2'>" +
      GROUPS.map(function (g) {
        return "<button type='button' class='cfg-choice" + (S.g === g.id ? " is-selected" : "") + "' data-set='g' data-val='" + g.id + "' aria-pressed='" + (S.g === g.id) + "'>" +
          "<span class='cfg-choice__img'><img src='" + g.img + "' alt='' loading='lazy'></span><span class='cfg-choice__body'><b>" + esc(g.name) + "</b><span>" + esc(g.text) + "</span>" +
          "<span class='cfg-mini'><em>" + (EN ? "Properties" : "Eigenschaften") + "</em>" + g.props.map(esc).join(" · ") + "</span><span class='cfg-mini'><em>" + (EN ? "Applications" : "Anwendungen") + "</em>" + g.apps.map(esc).join(" · ") + "</span></span></button>";
      }).join("") + "</div>";
  };
  R.series = function () {
    var g = group();
    if (g.id === "powell") return powellView();
    if (g.id !== "mv") {
      return "<h2 class='cfg-h'>" + esc(g.name) + "</h2><div class='cfg-callout'><p>" + (EN ? "For this product group, we put together your module individually. Briefly tell us about your application – we will get back to you with a proposal and quote." : "Für diese Produktgruppe stellen wir Ihr Modul individuell zusammen. Nennen Sie uns kurz Ihre Anwendung – wir melden uns mit einem Vorschlag und Angebot.") + "</p>" +
        "<div class='btn-row'><a class='btn btn--accent' href='kontakt.html?produkt=" + encodeURIComponent(g.name) + "'>" + (EN ? "Send inquiry" : "Anfrage senden") + "</a><a class='btn btn--ghost' href='" + g.href + "'>" + (EN ? "Go to product page" : "Zur Produktseite") + "</a></div></div>";
    }
    return "<h2 class='cfg-h'>" + (EN ? "Which series suits your application?" : "Welche Serie passt zu Ihrer Anwendung?") + "</h2><div class='cfg-grid cfg-grid--3'>" +
      SERIES.map(function (s) {
        return "<button type='button' class='cfg-choice cfg-choice--sm" + (S.s === s.id ? " is-selected" : "") + (s.request ? " is-request" : "") + "' data-set='s' data-val='" + s.id + "' aria-pressed='" + (S.s === s.id) + "'>" +
          (s.img ? "<span class='cfg-choice__img'><img src='" + s.img + "' alt='' loading='lazy'></span>" : "<span class='cfg-choice__img cfg-choice__img--empty'>" + esc(s.name) + "</span>") +
          "<span class='cfg-choice__body'><b>" + esc(s.name) + (s.request ? " <small class='tag-req'>" + (EN ? "on request" : "auf Anfrage") + "</small>" : "") + "</b><span>" + esc(s.text) + "</span><ul>" + s.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul></span></button>";
      }).join("") + "</div>" + (series() && series().request ? requestBox(series()) : "");
  };
  function requestBox(s) {
    return "<div class='cfg-callout'><p>" + (EN ? "We configure the " : "") + "<b>" + esc(s.name) + "</b>" + (EN ? " individually for you." : " konfigurieren wir individuell für Sie.") + "</p><div class='btn-row'><a class='btn btn--accent' href='kontakt.html?produkt=" + encodeURIComponent(s.name) + "'>" + (EN ? "Send inquiry" : "Anfrage senden") + "</a>" + (s.href ? "<a class='btn btn--ghost' href='" + s.href + "'>" + (EN ? "Go to product page" : "Zur Produktseite") + "</a>" : "") + "</div></div>";
  }
  R.wlpower = function () {
    var sr = series(), mx = sr.matrix;
    var head = "<tr><th scope='col'>nm / mW</th>" + mx.cols.map(function (c) { return "<th scope='col'>" + c + "</th>"; }).join("") + "</tr>";
    var body = mx.rows.map(function (r) {
      return "<tr><th scope='row'><span class='wl' style='background:" + wlColor(r[0]) + "'></span>" + r[0] + "</th>" + mx.cols.map(function (c, i) {
        var ok = r[1].charAt(i) === "Y", sel = S.wl === r[0] && S.p === c;
        return "<td>" + (ok ? "<button type='button' class='cfg-cell" + (sel ? " is-selected" : "") + "' data-wlp='" + r[0] + "|" + c + "' aria-pressed='" + sel + "' aria-label='" + r[0] + " nm, " + c + " mW'></button>" : "<span class='cfg-na' aria-label='" + (EN ? "not available" : "nicht verfügbar") + "'>–</span>") + "</td>";
      }).join("") + "</tr>";
    }).join("");
    return "<h2 class='cfg-h'>" + (EN ? "Choose wavelength and power" : "Wellenlänge und Leistung wählen") + "</h2><p class='cfg-sub'>" + (EN ? "Choose a combination of wavelength (row) and power (column) – available as " : "Wählen Sie eine Kombination aus Wellenlänge (Zeile) und Leistung (Spalte) – verfügbar als ") + esc(sr.name) + ".</p>" +
      "<div class='table-wrap'><table class='matrix cfg-matrix'><thead>" + head + "</thead><tbody>" + body + "</tbody></table></div>" +
      "<p class='cfg-picked'>" + (S.wl ? (EN ? "Selected: <b>" : "Gewählt: <b>") + S.wl + " nm, " + S.p + " mW</b>" : (EN ? "No combination selected yet." : "Noch keine Kombination gewählt.")) + "</p>" +
      "<p class='cfg-hint'>" + (EN ? "Which power is permitted for laser class 2 or 3R depends on fan angle and optics. Service life: see <a href='https://blauoptoelektronik.de/tools'>MTTF forecast</a>." : "Welche Leistung für Laserklasse 2 oder 3R zulässig ist, hängt von Fächerwinkel und Optik ab. Lebensdauer: siehe <a href='https://blauoptoelektronik.de/tools'>MTTF-Prognose</a>.") + "</p>";
  };
  R.optics = function () {
    var sr = series(), L = lineLen(S.fan, S.d), fanSvg = fanDiagram(S.fan);
    var angles = sr.angles.map(function (a) {
      var dis = sr.variants && sr.wideOnly && sr.wideOnly.angles.indexOf(a) >= 0 && sr.wideOnly.variants.indexOf(S.r) < 0;
      return "<button type='button' class='cfg-pill" + (S.fan === a ? " is-selected" : "") + "' data-set='fan' data-val='" + a + "' aria-pressed='" + (S.fan === a) + "'" + (dis ? " disabled" : "") + ">" + a + "°</button>";
    }).join("");
    var table = "<tr><th scope='row'>" + (EN ? "L at " : "L bei ") + fmt(S.d) + " mm</th>" + sr.angles.map(function (a) { return "<td" + (a === S.fan ? " class='is-on'" : "") + ">" + fmt(lineLen(a, S.d)) + "</td>"; }).join("") + "</tr>";
    var opts = sr.optics.map(function (o) {
      var d = OPTICS[o];
      return "<button type='button' class='cfg-opt" + (S.o === o ? " is-selected" : "") + "' data-set='o' data-val='" + o + "' aria-pressed='" + (S.o === o) + "'><b>" + o + "</b><span>" + esc(d[0]) + "</span><small>" + esc(d[1]) + "</small></button>";
    }).join("");
    var cmp = sr.optics.map(function (o) { var d = OPTICS[o]; return "<tr" + (S.o === o ? " class='is-on'" : "") + "><th scope='row'>" + o + "</th><td>" + d[2] + "</td><td>" + d[3] + "</td></tr>"; }).join("");
    var extra = "";
    if (sr.variants) extra += "<h3 class='cfg-h3'>" + (EN ? "Version / beam exit" : "Ausführung / Strahlaustritt") + "</h3><div class='cfg-pills'>" + sr.variants.map(function (v) {
      var dis = sr.wideOnly && sr.wideOnly.angles.indexOf(S.fan) >= 0 && sr.wideOnly.variants.indexOf(v) < 0;
      return "<button type='button' class='cfg-pill" + (S.r === v ? " is-selected" : "") + "' data-set='r' data-val='" + v + "' aria-pressed='" + (S.r === v) + "'" + (dis ? " disabled" : "") + ">" + v + "</button>";
    }).join("") + "</div>" + (sr.wideOnly ? "<p class='cfg-hint'>" + (EN ? "60°, 75° and 90° only for R0R0, R0R90 and R90R0." : "60°, 75° und 90° nur für R0R0, R0R90 und R90R0.") + "</p>" : "");
    if (sr.housings) extra += "<h3 class='cfg-h3'>" + (EN ? "Housing" : "Gehäuse") + "</h3><div class='cfg-pills'>" + sr.housings.map(function (h) {
      var label = { ST: "ST · Standard", "2H": (EN ? "2H · two housings" : "2H · zwei Gehäuse"), OH: (EN ? "OH · optical head" : "OH · Optikkopf") }[h];
      return "<button type='button' class='cfg-pill" + (S.h === h ? " is-selected" : "") + "' data-set='h' data-val='" + h + "' aria-pressed='" + (S.h === h) + "'>" + label + "</button>";
    }).join("") + "</div>";
    return "<h2 class='cfg-h'>" + (EN ? "Optics and focus" : "Optik und Fokus") + "</h2>" +
      "<div class='cfg-optics'><div><h3 class='cfg-h3'>" + (EN ? "Fan angle" : "Fächerwinkel") + "</h3><div class='cfg-pills'>" + angles + "</div>" +
      "<label class='cfg-field'><span>" + (EN ? "Working distance d" : "Arbeitsabstand d") + "</span><input type='number' min='10' max='5000' step='10' value='" + S.d + "' data-input='d'> <em>mm</em></label>" +
      "<label class='cfg-field'><span>" + (EN ? "Desired line length (optional)" : "Gewünschte Linienlänge (optional)") + "</span><input type='number' min='1' max='10000' step='1' placeholder='" + (EN ? "e.g. 400" : "z. B. 400") + "' data-input='want'> <em>mm</em></label><p class='cfg-hint' id='cfg-want'></p></div>" +
      "<figure class='cfg-fan'>" + fanSvg + "<figcaption><b>L = " + fmt(L) + " mm</b>" + (EN ? " at d = " : " bei d = ") + fmt(S.d) + " mm</figcaption></figure></div>" +
      "<div class='table-wrap'><table class='matrix cfg-lentable'><thead><tr><th scope='col'>" + (EN ? "Fan angle" : "Fächerwinkel") + "</th>" + sr.angles.map(function (a) { return "<th scope='col'>" + a + "°</th>"; }).join("") + "</tr></thead><tbody>" + table + "</tbody></table></div>" +
      "<p class='cfg-hint'>" + (EN ? "Line length in mm. The power is distributed uniformly over approx. 80 % of the line length (±20 %). Fan angle = full width of the line at 50 % of the maximum power." : "Linienlänge in mm. Die Leistung ist auf ca. 80 % der Linienlänge gleichmäßig verteilt (±20 %). Fächerwinkel = volle Breite der Linie bei 50 % der maximalen Leistung.") + "</p>" +
      "<h3 class='cfg-h3'>" + (EN ? "Optics / line type" : "Optik / Linienart") + "</h3><div class='cfg-grid cfg-grid--3 cfg-grid--tight'>" + opts + "</div>" +
      "<div class='table-wrap' style='margin-top:16px'><table class='matrix spec cfg-cmp'><caption>" + (EN ? "Comparison of line types at 300 mm (example MVsquare, 640 nm)" : "Vergleich der Linienarten bei 300 mm (Beispiel MVsquare, 640 nm)") + "</caption><thead><tr><th scope='col'>" + (EN ? "Line type" : "Linienart") + "</th><th scope='col'>" + (EN ? "Line width (1/e²)" : "Liniendicke (1/e²)") + "</th><th scope='col'>" + (EN ? "Depth of field" : "Schärfentiefe") + "</th></tr></thead><tbody>" + cmp + "</tbody></table></div>" +
      "<p class='cfg-hint'>" + (EN ? "Theoretical values (Gaussian optics) from the existing configurator; laser diode tolerances lead to deviations." : "Theoretische Werte (Gauß-Optik) aus dem bestehenden Konfigurator; Toleranzen der Laserdiode führen zu Abweichungen.") + "</p>" +
      extra +
      "<h3 class='cfg-h3'>" + (EN ? "Focus" : "Fokus") + "</h3><div class='cfg-pills'><button type='button' class='cfg-pill" + (S.f === "F" ? " is-selected" : "") + "' data-set='f' data-val='F' aria-pressed='" + (S.f === "F") + "'>" + (EN ? "Adjustable · by the user" : "Einstellbar · vom Anwender") + "</button><button type='button' class='cfg-pill" + (S.f === "FIX" ? " is-selected" : "") + "' data-set='f' data-val='FIX' aria-pressed='" + (S.f === "FIX") + "'>" + (EN ? "Fixed · at the factory" : "Fix · ab Werk") + "</button></div>";
  };
  function fanDiagram(fan) {
    var W = 320, H = 200, ax = 160, ay = 26, by = 176, half = Math.min(150, Math.tan((fan / 2) * Math.PI / 180) * (by - ay));
    return "<svg viewBox='0 0 " + W + " " + H + "' role='img' aria-label='" + (EN ? "Laser fan with " : "Laserfächer mit ") + fan + (EN ? " degrees" : " Grad") + "'><defs><linearGradient id='cfg-fan' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#00a6c1' stop-opacity='.55'/><stop offset='1' stop-color='#00a6c1' stop-opacity='.08'/></linearGradient></defs>" +
      "<rect x='" + (ax - 9) + "' y='0' width='18' height='" + (ay - 2) + "' rx='3' fill='#2d8de8'/><rect x='" + (ax - 10) + "' y='" + (ay - 8) + "' width='20' height='8' rx='2' fill='#111'/>" +
      "<polygon class='cfg-fan__poly' points='" + ax + "," + ay + " " + (ax - half) + "," + by + " " + (ax + half) + "," + by + "' fill='url(#cfg-fan)'/>" +
      "<line x1='" + (ax - half) + "' y1='" + by + "' x2='" + (ax + half) + "' y2='" + by + "' stroke='#00a6c1' stroke-width='3' stroke-linecap='round' class='cfg-fan__line'/>" +
      "<line x1='12' y1='" + ay + "' x2='12' y2='" + by + "' stroke='#9fb0c4' stroke-dasharray='3 3'/><text x='18' y='" + ((ay + by) / 2) + "' font-size='11' fill='#5f6b7c'>d</text>" +
      "<text x='" + ax + "' y='" + (by + 18) + "' font-size='12' text-anchor='middle' fill='#003d74' font-weight='700'>L</text>" +
      "<text x='" + (ax + 12) + "' y='" + (ay + 34) + "' font-size='11' fill='#00a6c1'>" + fan + "°</text></svg>";
  }
  R.electrical = function () {
    return "<h2 class='cfg-h'>" + (EN ? "Modulation, cable and connector" : "Modulation, Kabel und Stecker") + "</h2><div class='cfg-grid cfg-grid--3 cfg-grid--tight'>" + MODS.map(function (md) {
      return "<button type='button' class='cfg-opt cfg-mod" + (S.mod === md.id ? " is-selected" : "") + "' data-set='mod' data-val='" + md.id + "' aria-pressed='" + (S.mod === md.id) + "'>" + modCurve(md.kind) +
        "<b>" + md.code + "</b><span>" + esc(md.name) + "</span><small>" + esc(md.text) + "</small><i class='" + (md.std ? "std" : "extra") + "'>" + (md.std ? "Standard" : (EN ? "additional effort" : "mit Mehraufwand")) + "</i></button>";
    }).join("") + "</div>" +
      (modById(S.mod).lvl ? "<h3 class='cfg-h3'>" + (EN ? "Digital input" : "Digitaleingang") + "</h3><div class='cfg-pills'><button type='button' class='cfg-pill" + (S.lvl === "5" ? " is-selected" : "") + "' data-set='lvl' data-val='5'>5 V / TTL</button><button type='button' class='cfg-pill" + (S.lvl === "24" ? " is-selected" : "") + "' data-set='lvl' data-val='24'>" + (EN ? "24 V (low 0–0.8 V, high 10–24 V)" : "24 V (Low 0–0,8 V, High 10–24 V)") + "</button></div>" : "") +
      "<h3 class='cfg-h3'>" + (EN ? "Connection" : "Anschluss") + "</h3><div class='cfg-pills'><span class='cfg-pill is-selected'>" + (EN ? "Cable 2 m" : "Kabel 2 m") + "</span></div><p class='cfg-hint'>" + (EN ? "Other cable lengths or connectors on request." : "Andere Kabellängen oder Stecker auf Anfrage.") + "</p>";
  };
  function modById(id) { for (var i = 0; i < MODS.length; i++) if (MODS[i].id === id) return MODS[i]; return MODS[0]; }
  function modCurve(kind) {
    var path = { none: "M6 10 H54", dig: "M6 6 H24 V30 H54", digi: "M6 30 H24 V6 H54", ana: "M6 6 L14 6 L46 30 L54 30", anai: "M6 30 L14 30 L46 6 L54 6" }[kind];
    return "<svg class='cfg-curve' viewBox='0 0 60 36' aria-hidden='true'><path d='M6 2 V32 H58' fill='none' stroke='#c9d3df'/><path d='" + path + "' fill='none' stroke='#00a6c1' stroke-width='2'/></svg>";
  }
  R.options = function () {
    return "<h2 class='cfg-h'>" + (EN ? "Further options" : "Weitere Optionen") + "</h2><div class='cfg-checks'>" + OPTIONS.map(function (o) {
      var on = S.opt.indexOf(o.id) >= 0;
      return "<label class='cfg-check'><input type='checkbox' data-opt='" + o.id + "'" + (on ? " checked" : "") + "><span><b>" + esc(o.name) + "</b>" + (o.text ? "<small>" + esc(o.text) + "</small>" : "") + "</span></label>";
    }).join("") + "</div>";
  };
  R.summary = function () {
    var sr = series(), rows = summaryRows();
    return "<h2 class='cfg-h'>" + (EN ? "Your configuration" : "Ihre Konfiguration") + "</h2><div class='cfg-sumhead'><p class='label'>" + (EN ? "Configuration code" : "Konfigurationsschlüssel") + "</p><div class='cfg-code'><code>" + esc(code()) + "</code><button type='button' class='cfg-copy' data-copy aria-label='" + (EN ? "Copy code" : "Schlüssel kopieren") + "'>" + (EN ? "Copy" : "Kopieren") + "</button></div>" +
      "<p class='cfg-hint'>" + (EN ? "You will receive the binding order code with the quote." : "Die verbindliche Bestellbezeichnung erhalten Sie mit dem Angebot.") + "</p></div>" +
      "<div class='table-wrap'><table class='matrix spec'><tbody>" + rows.map(function (r) { return "<tr><th scope='row'>" + esc(r[0]) + "</th><td>" + esc(r[1]) + "</td></tr>"; }).join("") + "</tbody></table></div>" +
      "<div class='cfg-order'><label class='cfg-field'><span>" + (EN ? "Quantity" : "Menge") + "</span><input type='number' min='1' max='100000' value='" + S.qty + "' data-input='qty'> <em>" + (EN ? "pcs" : "Stück") + "</em></label>" +
      "<a class='btn btn--accent' id='cfg-request' href='" + requestHref() + "'>" + (EN ? "Request a quote" : "Angebot anfordern") + " <svg aria-hidden='true'><use href='#i-arrow'/></svg></a>" +
      (sr && sr.href ? "<a class='btn btn--ghost' href='" + sr.href + "'>" + (EN ? "Product page " : "Produktseite ") + esc(sr.name) + "</a>" : "") + "</div>" +
      "<div class='cfg-callout cfg-callout--muted'><p>" + (EN ? "<b>Note on the prototype:</b> Price, laser class (according to IEC 60825-1) and MTTF forecast are calculated by the existing configurator for authorised customers. These calculations will be adopted in the implementation." : "<b>Hinweis zum Prototyp:</b> Preis, Laserklasse (nach IEC 60825-1) und MTTF-Prognose berechnet der bestehende Konfigurator für freigeschaltete Kunden. Diese Berechnungen werden bei der Umsetzung übernommen.") + "</p></div>";
  };
  function summaryRows() {
    if (S.g === "powell") return [[(EN ? "Product group" : "Produktgruppe"), group().name], [(EN ? "Fan angle" : "Fächerwinkel"), S.pa + "°"], [(EN ? "Beam Ø (1/e²)" : "Strahl-Ø (1/e²)"), num1(S.pb / 10) + " mm"], [(EN ? "Lens Ø" : "Linsen-Ø"), S.pd + " mm"], [(EN ? "Quantity" : "Menge"), S.qty + (EN ? " pcs" : " Stück")]];
    var sr = series(), md = modById(S.mod), rows = [[(EN ? "Product group" : "Produktgruppe"), group().name]];
    if (sr) rows.push([(EN ? "Series" : "Serie"), sr.name]);
    if (sr && sr.housings) rows.push([(EN ? "Housing" : "Gehäuse"), { ST: "Standard (ST)", "2H": (EN ? "Two housings (2H)" : "Zwei Gehäuse (2H)"), OH: (EN ? "Optical head (OH)" : "Optikkopf (OH)") }[S.h]]);
    if (S.wl) rows.push([(EN ? "Wavelength" : "Wellenlänge"), S.wl + " nm"]);
    if (S.p) rows.push([(EN ? "Power" : "Leistung"), S.p + " mW"]);
    if (sr && !sr.request) {
      rows.push([(EN ? "Fan angle" : "Fächerwinkel"), S.fan + "°"], [(EN ? "Line length" : "Linienlänge"), fmt(lineLen(S.fan, S.d)) + (EN ? " mm at " : " mm bei ") + fmt(S.d) + (EN ? " mm distance" : " mm Abstand")], [(EN ? "Optics" : "Optik"), S.o + " – " + OPTICS[S.o][0]], [(EN ? "Focus" : "Fokus"), S.f === "FIX" ? (EN ? "Fixed (at the factory)" : "Fix (ab Werk)") : (EN ? "Adjustable" : "Einstellbar")]);
      if (sr.variants) rows.push([(EN ? "Version" : "Ausführung"), S.r]);
      rows.push(["Modulation", md.id === "none" ? (EN ? "No modulation" : "Keine Modulation") : md.code + " – " + md.name + (md.lvl ? " (" + (S.lvl === "24" ? "24 V" : "5 V / TTL") + ")" : "")], [(EN ? "Connection" : "Anschluss"), (EN ? "Cable 2 m" : "Kabel 2 m")]);
      if (S.opt.length) rows.push([(EN ? "Options" : "Optionen"), S.opt.map(function (id) { for (var i = 0; i < OPTIONS.length; i++) if (OPTIONS[i].id === id) return OPTIONS[i].name; return id; }).join(", ")]);
      rows.push([(EN ? "Quantity" : "Menge"), S.qty + (EN ? " pcs" : " Stück")]);
    }
    return rows;
  }
  function requestHref() {
    var sr = series();
    var text = (EN ? "Configuration: " : "Konfiguration: ") + code() + "\n" + summaryRows().map(function (r) { return r[0] + ": " + r[1]; }).join("\n");
    var prod = S.g === "powell" ? (EN ? "Powell lens " : "Powell-Linse ") + pCode() : (sr ? sr.name : group().name);
    return "kontakt.html?produkt=" + encodeURIComponent(prod) + "&konfig=" + encodeURIComponent(text);
  }

  /* ---------- Seitenleiste & Stepper ---------- */
  var stepBtns = document.querySelectorAll(".cfg-stepper button");
  function updateAside() {
    document.getElementById("cfg-key").textContent = code();
    var rows = summaryRows().filter(function (r) { return r[0] !== (EN ? "Line length" : "Linienlänge"); });
    document.getElementById("cfg-list").innerHTML = rows.map(function (r) { return "<div><dt>" + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd></div>"; }).join("");
    var idx = STEPS.indexOf(S.step), sr = series(), mv = S.g === "mv";
    stepBtns.forEach(function (b, i) {
      var reachable = i <= 1 || (sr && !sr.request && mv && (i <= 2 || (S.wl && S.p)));
      b.disabled = !reachable;
      // Powell & Anfrage-Gruppen haben nur 2 Schritte – übrige Schritte ausblenden statt ausgrauen
      b.parentNode.hidden = !mv && i >= 2;
      if (i === 1) b.querySelector("span").textContent = S.g === "powell" ? (EN ? "Lens" : "Linse") : !mv ? (EN ? "Inquiry" : "Anfrage") : (EN ? "Series" : "Serie");
      b.classList.toggle("is-done", i < idx);
      if (i === idx) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current");
    });
    document.querySelector(".cfg-progress i").style.transform = "scaleX(" + (mv ? idx / (STEPS.length - 1) : Math.min(idx, 1)) + ")";
    /* aktiven Schritt in der Leiste sichtbar halten (Smartphone) */
    var list = document.querySelector(".cfg-stepper"), act = stepBtns[idx];
    if (list && act && list.scrollWidth > list.clientWidth) list.scrollTo({ left: act.parentNode.offsetLeft - 20, behavior: "smooth" });
    document.querySelectorAll("[data-prev]").forEach(function (b) { b.disabled = idx === 0; });
    var finish = !mv && S.step === "series"; // letzter Schritt bei Powell / Anfrage-Gruppen
    document.querySelectorAll("[data-next]").forEach(function (b) {
      var last = idx === STEPS.length - 1;
      b.disabled = finish ? false : (!canAdvance() || last);
      b.hidden = last;
      var label = finish ? (S.g === "powell" ? (EN ? "Request a quote" : "Angebot anfordern") : (EN ? "Send inquiry" : "Anfrage senden")) : (EN ? "Next" : "Weiter");
      b.innerHTML = esc(label) + " <svg aria-hidden='true'><use href='#i-arrow'/></svg>";
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
      if (k === "fan" || k === "pa" || k === "pb" || k === "pd") v = +v;
      if (k === "g" && S.g !== v) { S.s = ""; S.wl = 0; S.p = 0; S.f = ""; }
      if (k === "s" && S.s !== v) { S.f = ""; }
      S[k] = v;
      if (k === "s" && series() && !series().request) { render(); setTimeout(function () { go("wlpower"); }, 260); return; }
      if (k === "g") { render(); setTimeout(function () { go("series"); }, 260); return; } // Gruppe gewählt -> direkt weiter
      render(); return;
    }
    var c = e.target.closest("[data-wlp]");
    if (c) { var a = c.dataset.wlp.split("|"); S.wl = +a[0]; S.p = +a[1]; render(); return; }
    if (e.target.closest("[data-copy]")) {
      var t = code(); if (navigator.clipboard) navigator.clipboard.writeText(t).catch(function () {});
      e.target.textContent = (EN ? "Copied ✓" : "Kopiert ✓"); setTimeout(function () { e.target.textContent = (EN ? "Copy" : "Kopieren"); }, 1500);
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
      out.innerHTML = (EN ? "Required: " : "Benötigt: ") + need.toFixed(1).replace(".", (EN ? "." : ",")) + (EN ? "° – nearest standard: " : "° – nächster Standard: ") + "<button type='button' class='cfg-link' data-set='fan' data-val='" + best + "'>" + best + (EN ? "° apply" : "° übernehmen") + "</button>";
    }
  });
  function refreshOptics() {
    var fig = main.querySelector(".cfg-fan figcaption"); if (fig) fig.innerHTML = "<b>L = " + fmt(lineLen(S.fan, S.d)) + " mm</b>" + (EN ? " at d = " : " bei d = ") + fmt(S.d) + " mm";
    var sr = series(), tr = main.querySelector(".cfg-lentable tbody tr");
    if (tr && sr) tr.innerHTML = "<th scope='row'>" + (EN ? "L at " : "L bei ") + fmt(S.d) + " mm</th>" + sr.angles.map(function (a) { return "<td" + (a === S.fan ? " class='is-on'" : "") + ">" + fmt(lineLen(a, S.d)) + "</td>"; }).join("");
    updateAside(); saveUrl();
  }
  document.querySelectorAll("[data-next]").forEach(function (b) { b.addEventListener("click", function () {
    if (S.g !== "mv" && S.step === "series") { location.href = S.g === "powell" ? requestHref() : "kontakt.html?produkt=" + encodeURIComponent(group().name); return; }
    var i = STEPS.indexOf(S.step); if (canAdvance() && i < STEPS.length - 1) go(STEPS[i + 1]);
  }); });
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
