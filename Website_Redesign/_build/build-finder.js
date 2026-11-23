// Erzeugt den Produktfinder (DE + EN) aus den vorhandenen Produktdaten.
// Aufruf:  node Website_Redesign/_build/build-finder.js
// Quelle der Werte: _build/products.json (Matrix Wellenlänge × Leistung, Öffnungswinkel, Kenndaten)
// und die Tabelle auf produkt-mvnano.html (MVnano ist eine handgebaute Seite).
// Es werden KEINE neuen Werte erfunden: Produkte ohne Tabelle erscheinen als "Werte auf Anfrage".
const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "products.json"), "utf8"));

// MVnano-Tabelle (Stand der Produktseite vom 20.11.2026; die Seite zeigt sie inzwischen nur noch in der interaktiven Auswahl)
const MVNANO_MATRIX = { cols: ["1","3","5","10","20","30","35","40","50","75","80","100"], rows: [["405","YYYYYYYYYYYY"],["450","YYYYYYYYYYNN"],["520","YYYYYYYYYYYN"],["640","YYYYYYYYYYYY"],["660","YYYYYYYYYYYY"],["685","YYYYYYYYNNNN"],["785","YYYYYYYYYYYY"],["830","YYYYYYYYYYYN"],["850","YYYYYYYYNNNN"]] };
// ---- MVnano-Matrix aus der Produktseite lesen (falls Tabelle noch vorhanden) ----
function readMatrixFromPage(file) {
  const h = fs.readFileSync(path.join(root, file), "utf8");
  const t = h.slice(h.indexOf('class="matrix"'));
  const tb = t.slice(0, t.indexOf("</table>"));
  const cols = [...tb.slice(0, tb.indexOf("</thead>")).matchAll(/<th scope="col">(\d+)<\/th>/g)].map(m => m[1]);
  const rows = [];
  for (const r of tb.split("<tr").slice(2)) {
    const wl = (r.match(/<\/span>(\d+) nm/) || [])[1];
    if (!wl) continue;
    rows.push([wl, [...r.matchAll(/<td class="(\w+)"/g)].map(m => (m[1] === "y" ? "Y" : "N")).join("")]);
  }
  return { cols, rows };
}

const catEN = { "Machine Vision": "Machine Vision", "Linienlaser": "Line lasers", "Punktlaser": "Dot lasers", "Powell-Linsen": "Powell lenses", "OEM-Module": "OEM modules" };
const nameEN = { linienlaser: "Line laser", punktlaser: "Dot laser", "powell-linsen": "Powell lenses", oem: "OEM modules", doe: "DOE laser modules" };
const typeOf = { linienlaser: "line", punktlaser: "dot", doe: "pattern", "powell-linsen": "lens", oem: "oem" };
const cfg = { mvnano: "mvnano", mvpulse: "mvpulse", mvpulsehp: "mvpulsehp", mvsquare: "mvsquare", mvfemto: "mvfemto", mvmicro: "mvmicro", mvpico: "mvpico" };
// Besonderheiten – nur was in den Kenndaten/Varianten belegt ist
const feats = {
  mvpulse: ["pulsed", "m12"],      // gepulst; Variante FP-MVpulse-25-ST-F-M12
  mvpulsehp: ["pulsed", "nocool"],  // gepulst; "keine aktive Kühlung nötig"
  mvmicro: ["m12"],                 // "M12, integriert"
  mvfemto: ["mod"],                 // "digital / analog (optional)"
  linienlaser: ["mod"],             // "bis 1 MHz"
  mvgoldhp: ["mod", "tec"],         // "< 100 ns rise/fall", "integrierter TEC"
  mvsquare: ["fixed"],              // "ab Werk fixiert"
};

const products = [];
const add = (p, extra) => {
  const fact = k => (p.facts || []).find(f => f[0] === k);
  const m = extra.matrix || p.matrix || null;
  const combos = {}; // Wellenlänge -> max. Leistung (mW)
  if (m) for (const [wl, s] of m.rows) { let max = 0; s.split("").forEach((c, i) => { if (c === "Y") max = Math.max(max, +m.cols[i]); }); if (max) combos[wl] = max; }
  let wls = Object.keys(combos).map(Number);
  // Linienlaser: Wellenlängen-Auswahl und "bis 100 mW" belegt, aber keine Kombinationstabelle
  if (!m && p.chips && /Wellenl/.test(p.chips.title)) wls = p.chips.items.map(x => parseInt(x.replace(/\D+/g, ""), 10)).filter(Boolean);
  const angles = p.focus ? p.focus.angles.map(Number) : (fact("Öffnungswinkel") ? [] : []);
  const angleRange = fact("Öffnungswinkel") ? fact("Öffnungswinkel")[1] : "";
  products.push({
    slug: p.slug, name: data.names[p.slug] || p.name, nameEN: nameEN[p.slug] || data.names[p.slug] || p.name,
    cat: p.cat, catEN: catEN[p.cat] || p.cat, type: typeOf[p.slug] || "line",
    img: data.img + data.thumbs[p.slug],
    combos, wls, maxPower: extra.maxPower || (Object.values(combos).length ? Math.max(...Object.values(combos)) : null),
    angles, angleRange, feats: feats[p.slug] || [], cfg: cfg[p.slug] || null,
    housing: (fact("Gehäuse") || fact("Standardgehäuse") || [])[1] || "",
  });
};

// MVnano (handgebaute Seite)
add({ slug: "mvnano", name: "MVnano", cat: "Machine Vision", facts: [["Gehäuse", "Ø 11,5 × 54 mm"], ["Öffnungswinkel", "1° – 90°"]], focus: { angles: ["1", "5", "10", "20", "30", "45", "60", "75", "90"] } },
  { matrix: (fs.readFileSync(path.join(root, "produkt-mvnano.html"), "utf8").includes('class="matrix"') ? readMatrixFromPage("produkt-mvnano.html") : MVNANO_MATRIX) });
for (const p of data.products) add(p, p.slug === "linienlaser" ? { maxPower: 100 } : {});

const allWl = [...new Set(products.flatMap(p => p.wls))].sort((a, b) => a - b);
const allAngles = [...new Set(products.flatMap(p => p.angles))].sort((a, b) => a - b);
const allPower = [...new Set(products.flatMap(p => Object.values(p.combos)).concat([1, 5, 10, 20, 50, 100, 500, 1000, 2000]))].sort((a, b) => a - b);

fs.writeFileSync(path.join(root, "assets", "finder-data.js"),
  "/* Automatisch erzeugt von _build/build-finder.js – nicht von Hand bearbeiten. */\nwindow.BLAU_FINDER = " +
  JSON.stringify({ products, wavelengths: allWl, angles: allAngles, powers: allPower }) + ";\n");

// ---- Seiten erzeugen (Header/Footer aus der Produktübersicht) ----
function page(lang) {
  const en = lang === "en";
  const refFile = path.join(root, en ? "en/produkte.html" : "produkte.html");
  const ref = fs.readFileSync(refFile, "utf8");
  const header = ref.slice(ref.indexOf('<svg width="0"'), ref.indexOf('<main id="main">')).trimEnd()
    .replace(/<div class="lang([^"]*)"[^>]*>.*?<\/div>/g, (_, c) => en
      ? `<div class="lang${c}" aria-label="Language"><a href="../produktfinder.html" hreflang="de" lang="de">DE</a><span aria-current="true">EN</span></div>`
      : `<div class="lang${c}" aria-label="Sprache"><span aria-current="true">DE</span><a href="en/produktfinder.html" hreflang="en" lang="en">EN</a></div>`);
  const footer = ref.slice(ref.indexOf("<footer"), ref.indexOf("</body>")).trimEnd();
  const A = en ? "../assets/" : "assets/";
  const T = en ? {
    title: "Product finder – find the right laser module | BLAU Optoelektronik",
    desc: "Product finder by BLAU Optoelektronik: filter line lasers, dot lasers and machine vision modules by wavelength, output power, fan angle and features.",
    crumbs: '<li><a href="index.html">Home</a></li><li><a href="produkte.html">Products</a></li><li aria-current="page">Product finder</li>',
    bc: "Breadcrumb", eyebrow: "Product finder", h1: "Which laser module fits your application?",
    lead: "Choose your values – the finder shows which BLAU products cover them according to our data tables. Anything else we gladly build to your specification.",
    form: "Filter products",
  } : {
    title: "Produktfinder – das passende Lasermodul finden | BLAU Optoelektronik",
    desc: "Produktfinder von BLAU Optoelektronik: Linienlaser, Punktlaser und Machine-Vision-Module nach Wellenlänge, Ausgangsleistung, Öffnungswinkel und Besonderheiten filtern.",
    crumbs: '<li><a href="index.html">Start</a></li><li><a href="produkte.html">Produkte</a></li><li aria-current="page">Produktfinder</li>',
    bc: "Brotkrumen", eyebrow: "Produktfinder", h1: "Welches Lasermodul passt zu Ihrer Anwendung?",
    lead: "Wählen Sie Ihre Werte – der Finder zeigt, welche BLAU-Produkte sie laut unseren Datentabellen abdecken. Alles andere fertigen wir gerne nach Ihren Vorgaben.",
    form: "Produkte filtern",
  };
  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${T.title}</title>
  <meta name="description" content="${T.desc}">
  <meta name="theme-color" content="#003d74">
  <link rel="alternate" hreflang="de" href="${en ? "../" : ""}produktfinder.html">
  <link rel="alternate" hreflang="en" href="${en ? "" : "en/"}produktfinder.html">
  <link rel="icon" href="${A}blau-logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${A}styles.css">
</head>
<body>
${header}

<main id="main">
  <section class="page-hero page-hero--compact" aria-labelledby="page-title">
    <div class="wrap">
      <nav class="breadcrumb" aria-label="${T.bc}"><ol>${T.crumbs}</ol></nav>
      <p class="eyebrow">${T.eyebrow}</p>
      <h1 id="page-title">${T.h1}</h1>
      <p class="lead">${T.lead}</p>
    </div>
  </section>

  <section class="section finder-sec" style="padding-top:32px" aria-label="${T.eyebrow}">
    <div class="wrap finder-layout">
      <form class="finder-form" id="finder-form" aria-label="${T.form}" onsubmit="return false"></form>
      <div class="finder-results">
        <p class="finder-status" id="finder-status" aria-live="polite"></p>
        <div class="finder-grid" id="finder-grid"></div>
        <div id="finder-more"></div>
      </div>
    </div>
  </section>
</main>

${footer}
<script src="${A}finder-data.js"></script>
<script src="${A}finder.js"></script>
</body>
</html>
`;
}
fs.writeFileSync(path.join(root, "produktfinder.html"), page("de"));
fs.writeFileSync(path.join(root, "en", "produktfinder.html"), page("en"));
console.log("Produktfinder erzeugt:", products.length, "Produkte,", allWl.length, "Wellenlängen,", allAngles.length, "Winkel");
