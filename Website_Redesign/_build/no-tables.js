// Wunsch von BLAU: Wenn der Konfigurator umgesetzt ist, keine Datentabellen mehr auf der Website – alles steht im Konfigurator.
// Ersetzt auf Produktseiten OHNE eingebaute Produktauswahl den Abschnitt "Technische Daten" (Tabellen) durch einen
// Abschnitt mit Sprung in den Konfigurator (Produkt vorausgewählt). Aufruf: node _build/no-tables.js (beliebig oft).
const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const PAGES = {
  mvgoldhp: { link: "konfigurator.html?g=mv&amp;s=mvgoldhp&amp;step=wlpower", name: "MVgoldHP",
    de: "Wellenlänge, Leistung, Fokus und Öffnungswinkel stellen Sie im Konfigurator zusammen – mit allen verfügbaren Kombinationen.",
    en: "Put together wavelength, power, focus and fan angle in the configurator – with all available combinations." },
  "powell-linsen": { link: "konfigurator.html?g=powell&amp;step=series", name: "Powell-Linsen", nameEN: "Powell lenses",
    de: "Außendurchmesser, Öffnungswinkel und Strahldurchmesser wählen Sie im Konfigurator – wir passen jede Linse an Ihren Laser an.",
    en: "Choose outer diameter, fan angle and beam diameter in the configurator – we adapt every lens to your laser." },
};
let n = 0;
for (const lang of ["de", "en"]) {
  for (const [slug, p] of Object.entries(PAGES)) {
    const file = path.join(root, lang === "en" ? "en" : "", `produkt-${slug}.html`);
    if (!fs.existsSync(file)) continue;
    let h = fs.readFileSync(file, "utf8");
    const name = lang === "en" ? p.nameEN || p.name : p.name;
    const sec = `<section class="section section--panel cfg-jump" id="konfigurieren" aria-labelledby="cfg-title">
    <div class="wrap cfg-jump__in">
      <div>
        <p class="eyebrow">${lang === "en" ? "Configurator" : "Konfigurator"}</p>
        <h2 id="cfg-title">${lang === "en" ? `Configure ${name}` : `${name} konfigurieren`}</h2>
        <p class="lead">${p[lang]}</p>
      </div>
      <a class="btn btn--accent" href="${p.link}">${lang === "en" ? "Open configurator" : "Zum Konfigurator"} <svg aria-hidden="true"><use href="#i-arrow"/></svg></a>
    </div>
  </section>`;
    h = h.replace(/<section class="section" id="technische-daten"[\s\S]*?<\/section>/, sec);
    h = h.replace(/<li><a href="#technische-daten">[^<]*<\/a><\/li>/, `<li><a href="#konfigurieren">${lang === "en" ? "Configure" : "Konfigurieren"}</a></li>`);
    if (/<table/.test(h)) console.warn("Noch eine Tabelle in", file);
    fs.writeFileSync(file, h); n++;
  }
}
console.log("Tabellen durch Konfigurator-Abschnitt ersetzt auf", n, "Seiten");

// OEM-Module gibt es nicht im Konfigurator: Tabelle "Anpassungsmöglichkeiten" wird zu drei Karten (Inhalt bleibt, keine Tabelle)
for (const lang of ["de", "en"]) {
  const file = path.join(root, lang === "en" ? "en" : "", "produkt-oem.html");
  if (!fs.existsSync(file)) continue;
  let h = fs.readFileSync(file, "utf8");
  const m = h.match(/<section class="section" id="technische-daten"[\s\S]*?<\/section>/);
  if (!m) continue;
  const rows = [...m[0].matchAll(/<tr><th scope="row">([^<]+)<\/th><td>([^<]+)<\/td><\/tr>/g)].map((r) => [r[1], r[2]]);
  const ICONS = ['<path d="M4 20V9l8-5 8 5v11z"/><path d="M9 20v-6h6v6"/>', '<path d="M9 3c-2.5 2.5-2.5 15.5 0 18M15 3c2.5 2.5 2.5 15.5 0 18M9 3h6M9 21h6"/><path d="M2 12h3M19 12h3"/>', '<rect x="6" y="6" width="12" height="12" rx="1.5"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>'];
  const sec = `<section class="section" id="anpassungen" aria-labelledby="ad-title">
    <div class="wrap">
      <div class="section-head">
        <p class="eyebrow">${lang === "en" ? "Customisation" : "Anpassungen"}</p>
        <h2 id="ad-title">${lang === "en" ? "What we adapt for you" : "Was wir für Sie anpassen"}</h2>
      </div>
      <div class="adapt-grid">${rows.map(([a, b], i) => `
        <div class="adapt"><span class="adapt__icon" aria-hidden="true"><svg viewBox="0 0 24 24">${ICONS[i % 3]}</svg></span><h3>${a}</h3><p>${b}</p></div>`).join("")}
      </div>
    </div>
  </section>`;
  h = h.replace(m[0], sec);
  h = h.replace(/<li><a href="#technische-daten">[^<]*<\/a><\/li>/, `<li><a href="#anpassungen">${lang === "en" ? "Customisation" : "Anpassungen"}</a></li>`);
  if (/<table/.test(h)) console.warn("Noch eine Tabelle in", file);
  fs.writeFileSync(file, h);
  console.log("OEM: Tabelle zu Karten umgebaut:", path.relative(root, file));
}
