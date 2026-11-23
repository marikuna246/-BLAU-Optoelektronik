// Startseite im Stil "Hell & ruhig" (nur Testordner). Ersetzt <main> in index.html und en/index.html.
// Aufruf:  node Website_Test/_build/home-calm.js   (kann beliebig oft laufen)
const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const SB = "https://xtuwjizliuthdgytloju.supabase.co/storage/v1/object/public/uploads/products";
const arrow = '<svg aria-hidden="true"><use href="#i-arrow"/></svg>';

const T = {
  de: {
    h1: 'Lasermodule.<br><span>Präzise gefertigt am Bodensee.</span>',
    lead: "Linienlaser, Punktlaser und Powell-Linsen für Bildverarbeitung, Maschinenbau, Medizintechnik und Forschung – als Standardprodukt oder genau nach Ihren Vorgaben.",
    b1: "Produkte entdecken", b2: "Beratung anfragen",
    tag: "MVnano – der Standard für Machine Vision", imgAlt: "MVnano Linienlaser",
    trust: [["Seit 1987", "Erfahrung in Optoelektronik"], ["Made in Germany", "Entwicklung &amp; Fertigung"], ["ISO 9001:2015", "zertifiziert"], ["Eigene Powell-Linsen", "aus eigener Fertigung"]],
    trustLabel: "Fakten über BLAU Optoelektronik",
    catK: "Sortiment", catH: "Was wir herstellen", catP: "Fünf Produktbereiche – alle in Überlingen entwickelt und gefertigt.", catAll: "Alle Produkte",
    cats: [
      ["machine-vision", `${SB}/15/images/MVpulse1.jpg`, "Linienlaser für Machine Vision", "Feine, gleichmäßig helle Laserlinien für 3D-Messung und Prüfung mit Kamerasystemen – 8 Modelle.", "Machine Vision ansehen"],
      ["linienlaser", `${SB}/3/images/Linienlaser-main.jpg`, "Linienlaser für Positionierung", "Klar definierte Linien und Strahlmuster (DOE).", "Ansehen"],
      ["punktlaser", `${SB}/6/images/Punkt-Laser.jpg`, "Punktlaser", "Rundes Strahlprofil – Optik und Elektronik passend zu Ihrer Aufgabe.", "Ansehen"],
      ["powell-linsen", `${SB}/5/images/powelllinsen1.jpg`, "Powell-Linsen", "Laserlinien mit gleichmäßiger Helligkeit. Eigenfertigung seit 2019.", "Ansehen"],
      ["oem", `${SB}/4/images/Oem-Module.jpg`, "OEM-Module", "Nach Ihren Vorgaben – von der Entwicklung bis zur Serie.", "Ansehen"],
    ],
    pickK: "Ausgewählte Produkte", pickH: "Unsere meistgefragten Linienlaser",
    picks: [
      ["mvnano", "products/mvnano-duo.png", "Machine Vision", "MVnano", "Der bewährte Standard für die industrielle Bildverarbeitung.", [["Gehäuse", "Ø 11,5 × 54 mm"], ["Leistung", "bis 100 mW"]]],
      ["mvpulse", "products/mvpulse-duo.webp", "Machine Vision", "MVpulse", "Viel Licht für Ihre Kamera – und trotzdem augensicher.", [["Leistung", "bis 100 mW"], ["Laserklasse", "2"]]],
      ["mvsquare", "products/mvsquare-duo.png", "Machine Vision", "MVsquare", "Einschrauben, fertig: ab Werk nach Ihren Vorgaben justiert.", [["Gehäuse", "65 × 15 × 15 mm"], ["Justage", "ab Werk"]]],
    ],
    pathK: "So finden Sie Ihr Modul", pathH: "Drei Wege zum passenden Laser",
    paths: [
      ["produktfinder.html", "Produktfinder", "Ein paar Fragen zu Ihrer Anwendung – wir zeigen die passenden Produkte.", "Finder starten"],
      ["konfigurator.html", "Konfigurator", "Wellenlänge, Leistung, Optik und Elektrik selbst zusammenstellen – mit Datenblatt.", "Konfigurieren"],
      ["kontakt.html", "Persönliche Beratung", "Beschreiben Sie uns Ihre Aufgabe. Wir empfehlen das passende Modul oder eine Anpassung.", "Anfrage senden"],
    ],
    indK: "Anwendungen", indH: "Im Einsatz in vielen Branchen",
    inds: [
      ["Medizintechnik", "Patientenpositionierung, Bildgebung, augensichere Module."],
      ["Maschinenbau", "Positionierung, Dimensionsmessung, Schweißnahtführung."],
      ["Automatisierung", "Bildverarbeitung, Qualitätskontrolle, Roboterführung."],
      ["Mikroelektronik", "Wafer-Inspektion, Lötstellen- und Leiterplattenprüfung."],
      ["Forschung", "Spektroskopie, optische Messtechnik, Holografie."],
    ],
    ctaH: "Sie haben eine konkrete Anwendung?", ctaP: "Beschreiben Sie uns kurz Ihre Aufgabe. Wir sagen Ihnen, welches Modul passt – oder was wir für Sie anpassen können.", ctaB: "Anfrage senden", hours: "Telefonisch erreichbar Mo–Fr, 8:00–17:00 Uhr",
  },
  en: {
    h1: 'Laser modules.<br><span>Precision-made on Lake Constance.</span>',
    lead: "Line lasers, dot lasers and Powell lenses for machine vision, mechanical engineering, medical technology and research – as standard products or built to your specifications.",
    b1: "Explore products", b2: "Request consultation",
    tag: "MVnano – the standard for machine vision", imgAlt: "MVnano line laser",
    trust: [["Since 1987", "Experience in optoelectronics"], ["Made in Germany", "Development &amp; production"], ["ISO 9001:2015", "certified"], ["Own Powell lenses", "made in-house"]],
    trustLabel: "Facts about BLAU Optoelektronik",
    catK: "Product range", catH: "What we make", catP: "Five product areas – all developed and manufactured in Überlingen.", catAll: "All products",
    cats: [
      ["machine-vision", `${SB}/15/images/MVpulse1.jpg`, "Line lasers for machine vision", "Fine, evenly bright laser lines for 3D measurement and inspection with camera systems – 8 models.", "View machine vision"],
      ["linienlaser", `${SB}/3/images/Linienlaser-main.jpg`, "Line lasers for positioning", "Clearly defined lines and beam patterns (DOE).", "View"],
      ["punktlaser", `${SB}/6/images/Punkt-Laser.jpg`, "Dot lasers", "Round beam profile – optics and electronics matched to your task.", "View"],
      ["powell-linsen", `${SB}/5/images/powelllinsen1.jpg`, "Powell lenses", "Laser lines with uniform brightness. Made in-house since 2019.", "View"],
      ["oem", `${SB}/4/images/Oem-Module.jpg`, "OEM modules", "Built to your specifications – from development to series production.", "View"],
    ],
    pickK: "Featured products", pickH: "Our most requested line lasers",
    picks: [
      ["mvnano", "products/mvnano-duo.png", "Machine vision", "MVnano", "The proven standard for industrial machine vision.", [["Housing", "Ø 11.5 × 54 mm"], ["Power", "up to 100 mW"]]],
      ["mvpulse", "products/mvpulse-duo.webp", "Machine vision", "MVpulse", "Plenty of light for your camera – and still eye-safe.", [["Power", "up to 100 mW"], ["Laser class", "2"]]],
      ["mvsquare", "products/mvsquare-duo.png", "Machine vision", "MVsquare", "Screw in, done: factory-aligned to your specifications.", [["Housing", "65 × 15 × 15 mm"], ["Alignment", "factory"]]],
    ],
    pathK: "Finding your module", pathH: "Three ways to the right laser",
    paths: [
      ["produktfinder.html", "Product finder", "A few questions about your application – we show you the matching products.", "Start finder"],
      ["konfigurator.html", "Configurator", "Put together wavelength, power, optics and electrics yourself – with datasheet.", "Configure"],
      ["kontakt.html", "Personal advice", "Describe your task. We recommend the right module or a customisation.", "Send inquiry"],
    ],
    indK: "Applications", indH: "In use across many industries",
    inds: [
      ["Medical technology", "Patient positioning, imaging, eye-safe modules."],
      ["Mechanical engineering", "Positioning, dimensional measurement, weld seam guidance."],
      ["Automation", "Machine vision, quality control, robot guidance."],
      ["Microelectronics", "Wafer inspection, solder joint and PCB inspection."],
      ["Research", "Spectroscopy, optical metrology, holography."],
    ],
    ctaH: "Do you have a specific application?", ctaP: "Briefly describe your task. We will tell you which module fits – or what we can customise for you.", ctaB: "Send inquiry", hours: "Phone: Mon–Fri, 8:00–17:00 CET",
  },
};

function main(t, A) {
  const [wide, ...cats] = t.cats;
  const cat = ([k, img, h, p, more], cls = "") => `
        <a class="c-cat${cls}" href="produkte.html?kategorie=${k}">
          <div class="c-cat__img"><img src="${img}" alt="" loading="lazy"></div>
          <div class="c-cat__body"><h3>${h}</h3><p>${p}</p><span class="more">${more} ${arrow}</span></div>
        </a>`;
  return `<main id="main">

  <!-- HERO -->
  <section class="c-hero" aria-labelledby="hero-title">
    <div class="wrap c-hero__grid">
      <div>
        <h1 id="hero-title">${t.h1}</h1>
        <p class="c-hero__lead">${t.lead}</p>
        <div class="btn-row">
          <a class="btn" href="produkte.html">${t.b1} ${arrow}</a>
          <a class="btn btn--ghost" href="kontakt.html">${t.b2}</a>
        </div>
      </div>
      <div class="c-hero__media">
        <span class="c-hero__beam" aria-hidden="true"></span>
        <img src="${A}hero-mvnano.png" alt="${t.imgAlt}" width="1083" height="727">
        <a class="c-hero__tag" href="produkt-mvnano.html"><i aria-hidden="true"></i>${t.tag}</a>
      </div>
    </div>
  </section>

  <section class="c-trust" aria-label="${t.trustLabel}">
    <div class="wrap"><ul>${t.trust.map(([b, s]) => `<li><b>${b}</b><span>${s}</span></li>`).join("")}</ul></div>
  </section>

  <!-- SORTIMENT -->
  <section class="c-sec" id="sortiment" aria-labelledby="sortiment-title">
    <div class="wrap">
      <div class="c-head reveal">
        <div><p class="c-kicker">${t.catK}</p><h2 class="c-h2" id="sortiment-title">${t.catH}</h2></div>
        <p>${t.catP} <a class="link-arrow" href="produkte.html">${t.catAll} ${arrow}</a></p>
      </div>
      <div class="c-cats reveal-stagger">${cat(wide, " c-cat--wide")}${cats.map((c) => cat(c)).join("")}
      </div>
    </div>
  </section>

  <!-- AUSGEWÄHLTE PRODUKTE -->
  <section class="c-sec c-sec--soft" aria-labelledby="picks-title">
    <div class="wrap">
      <div class="c-head reveal"><div><p class="c-kicker">${t.pickK}</p><h2 class="c-h2" id="picks-title">${t.pickH}</h2></div></div>
      <div class="c-picks reveal-stagger">${t.picks.map(([slug, img, k, h, p, dl]) => `
        <a class="c-pick" href="produkt-${slug}.html">
          <div class="c-pick__img"><img src="${A}${img}" alt="${h}" loading="lazy"></div>
          <small>${k}</small><h3>${h}</h3><p>${p}</p>
          <dl>${dl.map(([a, b]) => `<div><dt>${a}</dt><dd>${b}</dd></div>`).join("")}</dl>
        </a>`).join("")}
      </div>
    </div>
  </section>

  <!-- DREI WEGE -->
  <section class="c-sec" aria-labelledby="paths-title">
    <div class="wrap">
      <div class="c-head reveal"><div><p class="c-kicker">${t.pathK}</p><h2 class="c-h2" id="paths-title">${t.pathH}</h2></div></div>
      <div class="c-paths reveal-stagger">${t.paths.map(([href, h, p, l], i) => `
        <a class="c-path" href="${href}"><span class="n">0${i + 1}</span><h3>${h}</h3><p>${p}</p><span class="link-arrow">${l} ${arrow}</span></a>`).join("")}
      </div>
    </div>
  </section>

  <!-- ANWENDUNGEN -->
  <section class="c-sec c-sec--soft" id="anwendungen" aria-labelledby="ind-title">
    <div class="wrap">
      <div class="c-head reveal"><div><p class="c-kicker">${t.indK}</p><h2 class="c-h2" id="ind-title">${t.indH}</h2></div></div>
      <ul class="c-ind reveal-stagger">${t.inds.map(([h, p]) => `<li><h3>${h}</h3><p>${p}</p></li>`).join("")}</ul>
    </div>
  </section>

  <!-- KONTAKT -->
  <section class="c-sec" aria-labelledby="cta-title">
    <div class="wrap c-cta reveal">
      <div>
        <h2 id="cta-title">${t.ctaH}</h2>
        <p>${t.ctaP}</p>
        <div class="btn-row" style="margin-top:24px"><a class="btn btn--accent" href="kontakt.html">${t.ctaB} ${arrow}</a></div>
      </div>
      <div class="c-cta__box">
        <a class="direct" href="tel:+497551937480"><svg aria-hidden="true"><use href="#i-phone"/></svg>+49 7551 93748-0</a>
        <a class="direct" href="mailto:info@blauoptoelektronik.de"><svg aria-hidden="true"><use href="#i-mail"/></svg>info@blauoptoelektronik.de</a>
        <small>${t.hours}</small>
      </div>
    </div>
  </section>
</main>`;
}

for (const lang of ["de", "en"]) {
  const file = path.join(root, lang === "en" ? "en" : "", "index.html");
  const A = lang === "en" ? "../assets/" : "assets/";
  let h = fs.readFileSync(file, "utf8");
  h = h.replace(/<main id="main">[\s\S]*?<\/main>/, () => main(T[lang], A));
  // kein dunkler Kopf, kein Intro, keine Laser-Animation
  h = h.replace(/<body class="home dark-top">/, '<body class="home calm">');
  h = h.replace(/\s*<script>\s*\/\*[^]*?intro[^]*?<\/script>/, "");
  h = h.replace(/<div class="intro" id="intro">[\s\S]*?<button class="intro__skip"[^>]*>[^<]*<\/button>\s*<\/div>\s*/, "");
  h = h.replace(/\s*<script src="[^"]*laser-scene\.js" defer><\/script>/, "");
  if (!h.includes("home-calm.css")) h = h.replace(/(<link rel="stylesheet" href="[^"]*styles\.css">)/, `$1\n  <link rel="stylesheet" href="${A}home-calm.css">`);
  fs.writeFileSync(file, h);
  console.log("Startseite neu:", path.relative(root, file));
}
