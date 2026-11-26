// Eigene Tools-Seite (tools.html, DE + EN) statt Sprung auf blauoptoelektronik.de/tools – damit man im Redesign bleibt
// und jederzeit zum Konfigurator zurückkommt. Zusätzlich: alle übrigen Links auf die alte BLAU-Seite öffnen in einem neuen Tab.
// Aufruf: node _build/tools-page.js (beliebig oft)
const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const EXT = "https://blauoptoelektronik.de/tools";
const arrow = '<svg aria-hidden="true"><use href="#i-arrow"/></svg>';
const T = {
  de: {
    title: "Tools – Konfigurator, Produktfinder und Laserrechner | BLAU Optoelektronik",
    desc: "Online-Tools von BLAU Optoelektronik: Modul-Konfigurator mit 3D-Modell, Produktfinder sowie Rechner für Liniendicke, maximale Leistung und MTTF.",
    crumb: '<li><a href="index.html">Start</a></li><li aria-current="page">Tools</li>', crumbLabel: "Brotkrumen",
    eyebrow: "Tools", h1: "Online-Tools für Ihre Laserauslegung", lead: "Kostenlos und ohne Anmeldung – vom Konfigurator mit 3D-Modell bis zur Lebensdauer-Prognose.",
    k1: "Auf dieser Website", k2: "Laserrechner auf blauoptoelektronik.de", ext: "öffnet in neuem Tab",
    own: [["konfigurator.html", "Modul-Konfigurator", "In 7 Schritten zu Ihrem Lasermodul – mit 3D-Modell, Datenblatt und direkter Anfrage.", "Jetzt konfigurieren", true],
          ["produkte.html#produktfinder", "Produktfinder", "Passende Produkte nach Wellenlänge, Leistung, Anwendung und Ausstattung finden.", "Finder öffnen"]],
    calc: [["Liniendicken-Simulation", "Liniendicke bei verschiedenen Fokusabständen berechnen."], ["Maximale Leistung", "Maximale Laserleistung für verschiedene Parameter und Laserklassen berechnen."], ["MTTF-Prognose", "Mittlere Lebensdauer (Mean Time to Failure) von Lasermodulen abschätzen."]],
    open: "Rechner öffnen",
  },
  en: {
    title: "Tools – configurator, product finder and laser calculators | BLAU Optoelektronik",
    desc: "Online tools by BLAU Optoelektronik: module configurator with 3D model, product finder and calculators for line thickness, maximum power and MTTF.",
    crumb: '<li><a href="index.html">Home</a></li><li aria-current="page">Tools</li>', crumbLabel: "Breadcrumb",
    eyebrow: "Tools", h1: "Online tools for designing your laser", lead: "Free of charge and without registration – from the configurator with 3D model to the lifetime forecast.",
    k1: "On this website", k2: "Laser calculators on blauoptoelektronik.de", ext: "opens in a new tab",
    own: [["konfigurator.html", "Module configurator", "Your laser module in 7 steps – with 3D model, datasheet and direct inquiry.", "Configure now", true],
          ["produkte.html#produktfinder", "Product finder", "Find matching products by wavelength, power, application and features.", "Open finder"]],
    calc: [["Line thickness simulation", "Calculate the line thickness at different focus distances."], ["Maximum power", "Calculate the maximum laser power for different parameters and laser classes."], ["MTTF forecast", "Estimate the mean time to failure of laser modules."]],
    open: "Open calculator",
  },
};

function mainHtml(t) {
  return `<main id="main">
  <section class="page-hero" aria-labelledby="page-title">
    <div class="wrap">
      <nav class="breadcrumb" aria-label="${t.crumbLabel}"><ol>${t.crumb}</ol></nav>
      <p class="eyebrow">${t.eyebrow}</p>
      <h1 id="page-title">${t.h1}</h1>
      <p class="lead">${t.lead}</p>
    </div>
  </section>

  <section class="section" aria-labelledby="own-title">
    <div class="wrap">
      <div class="section-head"><p class="eyebrow">${t.k1}</p><h2 id="own-title" class="sr-only">${t.k1}</h2></div>
      <div class="tool-grid tools-own reveal-stagger">${t.own.map(([href, h, p, l, feat]) => `
        <a class="tool${feat ? " tool--featured" : ""}" href="${href}"><h3>${h}</h3><p>${p}</p><span class="link-arrow">${l} ${arrow}</span></a>`).join("")}
      </div>
    </div>
  </section>

  <section class="section section--panel" aria-labelledby="calc-title">
    <div class="wrap">
      <div class="section-head"><p class="eyebrow">${t.k2}</p><h2 id="calc-title" class="sr-only">${t.k2}</h2></div>
      <div class="tool-grid tools-calc reveal-stagger">${t.calc.map(([h, p]) => `
        <a class="tool" href="${EXT}" target="_blank" rel="noopener"><h3>${h}</h3><p>${p}</p><span class="link-arrow">${t.open} <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg></span><small class="tool__ext">${t.ext}</small></a>`).join("")}
      </div>
    </div>
  </section>
</main>`;
}

const files = [];
for (const dir of [root, path.join(root, "en")]) for (const f of fs.readdirSync(dir)) if (f.endsWith(".html")) files.push(path.join(dir, f));
for (const f of ["build-products.ps1", "konfigurator.body.html", "lasersicherheit.body.html", "downloads.body.html"]) { const p = path.join(root, "_build", f); if (fs.existsSync(p)) files.push(p); }

// 1) Tools-Seiten aus der Unternehmensseite ableiten (Kopf/Fuß gleich)
for (const lang of ["de", "en"]) {
  const dir = lang === "en" ? path.join(root, "en") : root, t = T[lang];
  let h = fs.readFileSync(path.join(dir, "unternehmen.html"), "utf8");
  h = h.replace(/<title>[^<]*<\/title>/, `<title>${t.title}</title>`)
       .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${t.desc}">`)
       .replace(/<link rel="canonical" href="[^"]*">/, '<link rel="canonical" href="https://blauoptoelektronik.de/tools">')
       .replace(/<main id="main">[\s\S]*?<\/main>/, () => mainHtml(t))
       .replace(/ aria-current="page"(?=>[^<]*<\/a><\/li>)/g, "")
       .replace(/href="((?:\.\.\/|en\/)?)unternehmen\.html" hreflang=/g, 'href="$1tools.html" hreflang='); // Sprachumschalter auf die Tools-Seite
  fs.writeFileSync(path.join(dir, "tools.html"), h);
  if (!files.includes(path.join(dir, "tools.html"))) files.push(path.join(dir, "tools.html"));
}

// 2) Menü-/Fußzeilen-Links "Tools" auf die eigene Seite; übrige Links zur alten Seite in neuem Tab
let changed = 0;
for (const file of files) {
  let h = fs.readFileSync(file, "utf8"), before = h;
  h = h.replace(/href="https:\/\/blauoptoelektronik\.de\/tools">Tools</g, 'href="tools.html">Tools<');
  // auch Textlinks wie "Online-Tools nutzen" führen zur eigenen Tools-Seite (nur dort gehen die Rechner nach außen)
  if (path.basename(file) !== "tools.html") h = h.replace(/href="https:\/\/blauoptoelektronik\.de\/tools"( target="_blank" rel="noopener")?/g, 'href="tools.html"');
  h = h.replace(/(<a [^>]*href="https:\/\/blauoptoelektronik\.de[^"]*")(?![^>]*target=)/g, '$1 target="_blank" rel="noopener"');
  if (path.basename(file) === "tools.html") h = h.replace(/(<li><a href="tools\.html")>Tools</g, '$1 aria-current="page">Tools<');
  if (h !== before) { fs.writeFileSync(file, h); changed++; }
}
console.log("Tools-Seite erstellt (DE/EN); Links angepasst in", changed, "Dateien");
