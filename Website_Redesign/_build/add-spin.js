// 360°-Ansicht auf den Produktseiten (DE + EN) – wie bei großen Laserherstellern aus einer Fotoserie.
// Liegen in assets/360/<produkt>/ Fotos namens 1.jpg … 36.jpg (oder .png/.webp), wird die Ansicht als erstes,
// sofort sichtbares Galeriebild eingebaut. Ohne Fotos bleibt die Seite beim normalen Produktfoto.
// Aufruf: node Website_Redesign/_build/add-spin.js   (kann beliebig oft laufen)
const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const SLUGS = ["mvnano", "mvfemto", "mvpico", "mvmicro", "mvpulse", "mvpulsehp", "mvgoldhp", "mvsquare", "linienlaser", "punktlaser", "doe", "powell-linsen", "oem"];
const T = {
  de: { alt: (n) => `${n} – 360°-Ansicht`, sub: "DREHEN", sr: "360°-Ansicht anzeigen", imgs: "Produktbilder", one: "Bild 1 anzeigen" },
  en: { alt: (n) => `${n} – 360° view`, sub: "ROTATE", sr: "Show 360° view", imgs: "Product images", one: "Show image 1" },
};

function frames(slug) {
  const dir = path.join(root, "assets", "360", slug);
  if (!fs.existsSync(dir)) return null;
  for (const ext of ["jpg", "png", "webp"]) {
    let n = 0;
    while (fs.existsSync(path.join(dir, `${n + 1}.${ext}`))) n++;
    if (n >= 8) return { n, ext };
  }
  return null;
}

let on = 0, off = 0;
for (const lang of ["de", "en"]) {
  const A = lang === "en" ? "../assets/" : "assets/", t = T[lang];
  for (const slug of SLUGS) {
    const file = path.join(root, lang === "en" ? "en" : "", `produkt-${slug}.html`);
    if (!fs.existsSync(file)) continue;
    let h = fs.readFileSync(file, "utf8");
    // frühere Einfügungen entfernen (auch Vorversionen)
    h = h.replace(/\s*<button type="button" aria-pressed="(true|false)" class="thumb-3d thumb-spin"[^]*?<\/button>(?=\s)/, "");
    h = h.replace(/<iframe data-gallery-frame data-spin[^>]*><\/iframe>/, "");
    h = h.replace(/<div class="main is-frame">/, '<div class="main">');
    const f = frames(slug);
    if (!f) {
      // ohne Fotoserie: erstes Produktfoto wieder gewählt
      h = h.replace(/(<div class="thumbs"[^>]*>\s*<button type="button" )aria-pressed="false"/, '$1aria-pressed="true"');
      fs.writeFileSync(file, h); off++; continue;
    }
    const name = (h.match(/<li aria-current="page">([^<]+)<\/li>/) || [, slug])[1];
    const src = `${A}3d/360.html?folder=../360/${slug}/&amp;n=${f.n}&amp;ext=${f.ext}&amp;alt=${encodeURIComponent(name)}${lang === "en" ? "&amp;lang=en" : ""}`;
    if (!h.includes('<div class="thumbs"')) {
      const m = h.match(/<div class="main">\s*<img data-gallery-main src="([^"]+)" alt="([^"]*)"[^>]*><\/div>/);
      if (m) h = h.replace(m[0], `${m[0]}\n        <div class="thumbs" role="group" aria-label="${t.imgs}">\n          <button type="button" aria-pressed="false" data-gallery-thumb data-src="${m[1]}" data-alt="${m[2]}"><img src="${m[1]}" alt="${t.one}"></button>\n        </div>`);
    }
    h = h.replace(/(<div class="thumbs"[\s\S]*?<\/div>)/, (m) => m.replace(/aria-pressed="true"/g, 'aria-pressed="false"'));
    h = h.replace(/(<div class="thumbs"[^>]*>)/, `$1\n          <button type="button" aria-pressed="true" class="thumb-3d thumb-spin" data-gallery-thumb data-frame="${src}" data-alt="${t.alt(name)}"><span aria-hidden="true">360°<small>${t.sub}</small></span><span class="sr-only">${t.sr}</span></button>`);
    h = h.replace(/<div class="main">(<img data-gallery-main[^>]*>)/, `<div class="main is-frame">$1<iframe data-gallery-frame data-spin allow="fullscreen" title="${t.alt(name)}" src="${src}"></iframe>`);
    fs.writeFileSync(file, h); on++;
  }
}
console.log(`360°-Ansicht: ${on} Seiten mit Fotoserie, ${off} Seiten ohne (normales Foto)`);
