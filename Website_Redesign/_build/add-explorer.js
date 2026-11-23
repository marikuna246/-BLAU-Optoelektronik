// Fügt die interaktive Produktauswahl ("Produkt interaktiv zusammenstellen") in die Produktseiten ein (DE + EN).
// Idempotent – kann nach build-products.ps1 beliebig oft laufen:  node Website_Redesign/_build/add-explorer.js
// Das Skript assets/explorer/product-explorer.js wird im Projekt Projekt-Nr48-Website-Redesign-Konfigurator gebaut
// (pnpm vite build --config vite.embed.config.ts) – ohne Preise, Laserklasse und MTTF.
const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");

// Prototyp-Seite -> Produkt-ID der echten Website (für die Serienzuordnung im Explorer)
const PAGES = { mvnano: 1, mvfemto: 2, linienlaser: 3, punktlaser: 6, mvmicro: 8, mvpico: 9, mvpulse: 10, mvpulsehp: 11, mvsquare: 12, doe: 13 };

const T = {
  de: { eyebrow: "Interaktiv", h: "Produkt interaktiv zusammenstellen", lead: "Wählen Sie Wellenlänge, Leistung, Optik und Elektrik – mit Linienlänge, Leistungsverteilung, Liniendicke, Modulationspegeln und technischen Daten zu Ihrer Konfiguration.", note: "Preis und Laserklasse nennen wir Ihnen mit dem Angebot.", load: "Produktauswahl wird geladen …", nav: "Konfigurieren", noscript: "Bitte JavaScript aktivieren, um die Produktauswahl zu nutzen." },
  en: { eyebrow: "Interactive", h: "Configure interactively", lead: "Choose wavelength, power, optics and electrics – with line length, power distribution, line thickness, modulation levels and technical data for your configuration.", note: "We will provide price and laser class with your quote.", load: "Loading product selection …", nav: "Configure", noscript: "Please enable JavaScript to use the product selection." },
};

// Versionsparameter gegen Browser-Cache (Einstiegsdatei hat keinen Hash im Namen)
const entryFile = path.join(root, "assets", "explorer", "product-explorer.js");
const VER = fs.existsSync(entryFile) ? require("crypto").createHash("md5").update(fs.readFileSync(entryFile)).digest("hex").slice(0, 8) : "0";

let changed = 0;
for (const lang of ["de", "en"]) {
  const t = T[lang], dir = lang === "en" ? path.join(root, "en") : root, A = lang === "en" ? "../assets/" : "assets/";
  for (const [slug, id] of Object.entries(PAGES)) {
    const file = path.join(dir, `produkt-${slug}.html`);
    if (!fs.existsSync(file)) continue;
    let h = fs.readFileSync(file, "utf8");
    const before = h;
    // alte Einfügung entfernen (idempotent)
    h = h.replace(/\s*<!-- explorer:start -->[\s\S]*?<!-- explorer:end -->/g, "");
    h = h.replace(/\s*<script (type="module" )?src="[^"]*explorer\/product-explorer\.js(\?v=\w+)?"( defer)?><\/script>/g, "");
    h = h.replace(/<li><a href="#produkt-interaktiv">[^<]*<\/a><\/li>/g, "");

    const section = `
  <!-- explorer:start -->
  <section class="section section--panel pd-explorer" id="produkt-interaktiv" aria-labelledby="pe-title">
    <div class="wrap">
      <div class="section-head">
        <p class="eyebrow">${t.eyebrow}</p>
        <h2 id="pe-title">${t.h}</h2>
        <p class="lead">${t.lead}</p>
        <p class="pd-explorer__note">${t.note}</p>
      </div>
      <div class="pd-explorer__app" data-product-explorer data-product-id="${id}" data-lang="${lang}"><p class="pd-explorer__loading">${t.load}</p></div>
      <noscript><p>${t.noscript}</p></noscript>
    </div>
  </section>
  <!-- explorer:end -->`;
    // Der Abschnitt "Technische Daten" (Wellenlänge/Leistung, Fokus, Öffnungswinkel, Muster) steckt jetzt in der
    // interaktiven Auswahl -> wird durch sie ersetzt. Bei erneutem Lauf: vor "Downloads" bzw. dem Kontaktaufruf einfügen.
    const td = /\n\s*<section class="section" id="technische-daten"[\s\S]*?<\/section>/;
    if (td.test(h)) h = h.replace(td, section);
    else if (/\n\s*<section class="section section--panel" id="downloads"/.test(h)) h = h.replace(/(\n\s*<section class="section section--panel" id="downloads")/, section + "$1");
    else h = h.replace(/(\n\s*<section class="section"[^>]*aria-labelledby="(rel|cta)-title")/, section + "$1");
    // In-Page-Navigation: "Technische Daten" -> "Konfigurieren"
    h = h.replace(/<li><a href="#technische-daten">[^<]*<\/a><\/li>/, `<li><a href="#produkt-interaktiv">${t.nav}</a></li>`);
    if (!h.includes('href="#produkt-interaktiv">' + t.nav)) h = h.replace(/(<li><a href="#downloads">)/, `<li><a href="#produkt-interaktiv">${t.nav}</a></li>$1`);
    // "Jetzt konfigurieren" im Kopf springt zur Auswahl auf der Seite
    h = h.replace(/href="konfigurator\.html\?g=mv&amp;s=[a-z0-9]+&amp;step=wlpower"/g, 'href="#produkt-interaktiv"');
    // Skript laden
    h = h.replace(/(<script src="[^"]*main\.js" defer><\/script>)/, `$1\n<script type="module" src="${A}explorer/product-explorer.js?v=${VER}"></script>`);
    if (!h.includes('id="produkt-interaktiv"')) { console.warn("Kein Einfügepunkt:", file); continue; }
    if (h !== before) { fs.writeFileSync(file, h); changed++; }
  }
}
console.log("Produktauswahl eingefügt/aktualisiert in", changed, "Seiten");
