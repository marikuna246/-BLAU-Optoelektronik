// Website-Suche: erzeugt aus allen Seiten einen Suchindex (assets/search-de.js / search-en.js)
// und baut in jeden Header einen Such-Button ein (Suchfenster: assets/search.js + Stile in styles.css).
// Aufruf: node _build/site-search.js (beliebig oft; läuft auch automatisch am Ende von build-products.ps1)
const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const SKIP = new Set(["onepage.html", "produktfinder.html", "404.html"]);

const ent = { amp: "&", lt: "<", gt: ">", quot: '"', "#39": "'", nbsp: " ", ndash: "–", mdash: "—", auml: "ä", ouml: "ö", uuml: "ü", Auml: "Ä", Ouml: "Ö", Uuml: "Ü", szlig: "ß", deg: "°", times: "×", middot: "·" };
const txt = (s) => s.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<svg[\s\S]*?<\/svg>/g, " ").replace(/<[^>]+>/g, " ")
  .replace(/&(#?\w+);/g, (m, e) => ent[e] ?? (e[0] === "#" ? String.fromCharCode(+e.slice(1)) : m)).replace(/\s+/g, " ").trim();
const meta = (h, n) => (h.match(new RegExp(`<meta name="${n}" content="([^"]*)"`)) || [])[1] || "";

// Produktdaten (Wellenlängen, Leistung, Winkel) aus dem Produktfinder, damit z. B. "660 nm" gefunden wird
const FD = {};
try {
  const w = {}; new Function("window", fs.readFileSync(path.join(root, "assets", "finder-data.js"), "utf8"))(w);
  for (const p of w.BLAU_FINDER.products) {
    FD[p.slug] = [p.cat, p.catEN, (p.wls || []).map((n) => `${n} nm ${n}nm`).join(" "), p.maxPower ? `${p.maxPower} mW` : "", (p.angles || []).map((a) => `${a}°`).join(" "), p.housing || ""].join(" ");
  }
} catch (e) { console.warn("finder-data.js nicht gelesen:", e.message); }

function index(lang) {
  const dir = lang === "en" ? path.join(root, "en") : root;
  const out = [];
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".html") && !SKIP.has(f)).sort()) {
    const h = fs.readFileSync(path.join(dir, f), "utf8");
    const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
    const type = f.startsWith("produkt-") ? "p" : f === "index.html" ? "h" : "s";
    const h1 = txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ""])[1]), tt = txt((h.match(/<title>([^<]*)/) || [, f])[1].split("|")[0]);
    const title = type === "p" ? h1 || tt : tt || h1; // Produkte: Name; sonst Seitentitel (z. B. "Modul-Konfigurator – …")
    const heads = [...main.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/g)].map((m) => txt(m[1])).filter(Boolean);
    const slug = f.replace(/^produkt-|\.html$/g, "");
    out.push({ u: f, t: title, d: txt(meta(h, "description")), k: [h1].concat(heads).join(" · ") + (FD[slug] ? " · " + FD[slug] : ""), x: txt(main).slice(0, 4000), y: type });
    // einzelne Abschnitte mit Anker als eigene Treffer (z. B. Lasersicherheit → Laserklassen)
    for (const m of main.matchAll(/<section[^>]*\sid="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g)) {
      const h2 = m[2].match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
      if (!h2 || type === "h") continue;
      const st = txt(h2[1]);
      if (!st || st === title) continue;
      out.push({ u: `${f}#${m[1]}`, t: st, d: title, k: "", x: txt(m[2]).slice(0, 1200), y: "a" });
    }
    // Datenblätter / Zertifikate als eigene Treffer
    if (f === "downloads.html") {
      for (const m of main.matchAll(/<a class="dl-prod__name"[^>]*><b>([^<]+)<\/b><small>([^<]*)<\/small><\/a><div class="ds-links">([\s\S]*?)<\/div>/g)) {
        const pdf = (m[3].match(/href="([^"]+\.pdf)"/) || [])[1];
        if (pdf) out.push({ u: pdf, t: `${m[1]} – ${lang === "en" ? "Datasheet" : "Datenblatt"}`, d: m[2], k: m[1], x: "PDF", y: "d" });
      }
      for (const m of main.matchAll(/<article[^>]*>([\s\S]*?)<\/article>/g)) {
        const h3 = m[1].match(/<h3[^>]*>([\s\S]*?)<\/h3>/), pdf = (m[1].match(/class="download" href="([^"]+)"/) || [])[1];
        if (h3 && pdf) out.push({ u: pdf, t: txt(h3[1]), d: "PDF", k: "", x: txt(m[1]).slice(0, 300), y: "d" });
      }
    }
  }
  return out;
}

for (const lang of ["de", "en"]) {
  const data = index(lang);
  fs.writeFileSync(path.join(root, "assets", `search-${lang}.js`), `window.BLAU_SEARCH=${JSON.stringify(data)};\n`);
  console.log(`Suchindex ${lang}: ${data.length} Einträge`);
}

// Such-Button in alle Header + Skript einbinden
const L = {
  de: { open: "Suche öffnen", t: "Suchen" },
  en: { open: "Open search", t: "Search" },
};
const ICON = '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>';
let n = 0;
for (const dir of [root, path.join(root, "en")]) {
  const en = dir !== root, pre = en ? "../" : "";
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".html"))) {
    const file = path.join(dir, f);
    let h = fs.readFileSync(file, "utf8"); const before = h;
    const l = L[en ? "en" : "de"];
    h = h.replace(/<button class="search-toggle"[\s\S]*?<\/button>\s*/, ""); // vorhandenen Button ersetzen
    h = h.replace(/(<div class="header-actions">\s*)/, `$1<button class="search-toggle" type="button" aria-label="${l.open}" aria-haspopup="dialog">${ICON}<span class="search-toggle__t">${l.t}</span><kbd>/</kbd></button>\n      `);
    if (h.includes('class="search-toggle"') && !h.includes("assets/search.js"))
      h = h.replace(/(<script src="[^"]*assets\/main\.js" defer><\/script>)/, `$1\n<script src="${pre}assets/search.js" defer></script>`);
    if (h !== before) { fs.writeFileSync(file, h); n++; }
  }
}
console.log("Such-Button eingebaut in", n, "Seiten");
