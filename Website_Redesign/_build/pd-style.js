// Bindet auf allen Produktseiten (DE + EN) den Z-Laser-Aufbau ein: Stylesheet assets/pd-z.css + Klasse "pd-z" am <body>.
// Die Inhalte (Produktdaten) bleiben unverändert. Aufruf: node _build/pd-style.js (beliebig oft).
const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
let n = 0;
for (const dir of [root, path.join(root, "en")]) {
  const A = dir === root ? "assets/" : "../assets/";
  for (const f of fs.readdirSync(dir).filter((x) => /^produkt-[\w-]+\.html$/.test(x))) {
    const file = path.join(dir, f);
    let h = fs.readFileSync(file, "utf8");
    if (!h.includes("pd-z.css")) h = h.replace(/(<link rel="stylesheet" href="[^"]*styles\.css">)/, `$1\n  <link rel="stylesheet" href="${A}pd-z.css">`);
    h = h.replace(/<body class="([^"]*)">/, (m, c) => (c.split(" ").includes("pd-z") ? m : `<body class="${c} pd-z">`));
    if (!/<body class="[^"]*pd-z/.test(h)) h = h.replace("<body>", '<body class="pd-z">');
    fs.writeFileSync(file, h); n++;
  }
}
console.log("Z-Laser-Aufbau eingebunden in", n, "Produktseiten");
