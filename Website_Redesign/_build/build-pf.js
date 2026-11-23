// Ersetzt auf produkte.html (DE + EN) Kategorie-Leiste und Produktliste durch den Produktfinder (assets/pf.js).
// Aufruf: node Website_Redesign/_build/build-pf.js   (kann beliebig oft laufen)
const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const T = {
  de: { h: "Produktfinder", p: "Wählen Sie die passenden Kriterien – wir zeigen Ihnen alle Lasermodule und Optiken, die dazu passen.", label: "Produktfinder", noscript: "Bitte JavaScript aktivieren, um den Produktfinder zu nutzen." },
  en: { h: "Product finder", p: "Select the relevant criteria – we show you all laser modules and optics that match.", label: "Product finder", noscript: "Please enable JavaScript to use the product finder." },
};
for (const lang of ["de", "en"]) {
  const t = T[lang], A = lang === "en" ? "../assets/" : "assets/";
  const file = path.join(root, lang === "en" ? "en" : "", "produkte.html");
  let h = fs.readFileSync(file, "utf8");
  const sec = `<!-- pf:start -->
  <section class="pf-sec" id="produktfinder" aria-labelledby="pf-title">
    <div class="wrap">
      <div class="pf-head"><h2 id="pf-title">${t.h}</h2><p>${t.p}</p></div>
      <div data-pf aria-label="${t.label}"><noscript><p>${t.noscript}</p></noscript></div>
    </div>
  </section>
  <!-- pf:end -->`;
  if (h.includes("<!-- pf:start -->")) h = h.replace(/<!-- pf:start -->[\s\S]*?<!-- pf:end -->/, sec);
  else h = h.replace(/<div class="filter-bar">[\s\S]*?(\n\s*<section class="section section--panel" aria-labelledby="help-title">)/, sec + "\n$1");
  // Knopf "Produktfinder öffnen" springt jetzt zum Finder auf der Seite
  h = h.replace(/(<p class="finder-cta"><a class="btn btn--accent" href=")produktfinder\.html/, "$1#produktfinder");
  if (!h.includes("pf.css")) h = h.replace(/(<link rel="stylesheet" href="[^"]*styles\.css">)/, `$1\n  <link rel="stylesheet" href="${A}pf.css">`);
  if (!h.includes("pf.js")) h = h.replace(/(<script src="[^"]*main\.js" defer><\/script>)/, `$1\n<script src="${A}finder-data.js" defer></script>\n<script src="${A}pf.js" defer></script>`);
  if (!h.includes('data-pf ')) throw new Error("Einfügen fehlgeschlagen: " + file);
  fs.writeFileSync(file, h);
  console.log("Produktfinder eingebaut:", path.relative(root, file));
}
