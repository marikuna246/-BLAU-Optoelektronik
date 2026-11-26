// Startseite im Stil "Hell & ruhig" . Ersetzt <main> in index.html und en/index.html.
// Aufruf:  node Website_Redesign/_build/home-calm.js   (kann beliebig oft laufen)
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
    vPill: "Präzision in Licht und Optik", vH1: "Lasermodule für präzises Messen, Prüfen und Ausrichten",
    vLead: "Wir entwickeln und fertigen Linienlaser, Punktlaser und Powell-Linsen – für Bildverarbeitung, Maschinenbau, Medizintechnik und Forschung. Als Standardprodukt oder genau nach Ihren Vorgaben, seit 1987 in Überlingen am Bodensee.",
    vB2: "Beratung anfragen", vPause: "Video anhalten", vPlay: "Video abspielen",
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
    vPill: "Precision in light and optics", vH1: "Laser modules for precise measuring, inspection and alignment",
    vLead: "We develop and manufacture line lasers, dot lasers and Powell lenses – for machine vision, mechanical engineering, medical technology and research. As standard products or built to your specifications, in Überlingen on Lake Constance since 1987.",
    vB2: "Request advice", vPause: "Pause video", vPlay: "Play video",
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

// Branchen-Abschnitt (Reiter mit Bild, Liste und passenden Produkten) 1:1 aus der Redesign-Startseite übernehmen
function branchen(lang) {
  const src = fs.readFileSync(path.join(root, "..", "Website_Redesign", lang === "en" ? "en" : "", "index.html"), "utf8");
  const m = src.match(/<section class="section section--panel" id="anwendungen"[\s\S]*?<\/section>/);
  if (!m) throw new Error("Branchen-Abschnitt im Redesign nicht gefunden");
  return m[0];
}

// Produktsuche-Kreis (Idee von heidenhain.de): Kreis mit Frage, Produktbereich-Symbole, Suchfeld -> Produktfinder
const SEARCH = {
  de: { h: "Sie wissen genau, welches Produkt Sie benötigen?", label: "Produktsuche", ph: "Produktname, Wellenlänge oder Anwendung – z. B. MVpico, 660 nm", btn: "Suchen",
    nodes: [["machine-vision", "Machine Vision"], ["punktlaser", "Punktlaser"], ["powell-linsen", "Powell-Linsen"], ["linienlaser", "Linienlaser"]],
    hint: "Oder direkt zu:" },
  en: { h: "You know exactly which product you need?", label: "Product search", ph: "Product name, wavelength or application – e.g. MVpico, 660 nm", btn: "Search",
    nodes: [["machine-vision", "Machine vision"], ["punktlaser", "Dot lasers"], ["powell-linsen", "Powell lenses"], ["linienlaser", "Line lasers"]],
    hint: "Or go straight to:" },
};
const ICONS = {
  "machine-vision": '<rect x="-15" y="-6" width="14" height="12" rx="2"/><path d="M-1 0l16-9M-1 0l16 9M15-9v18"/>',
  punktlaser: '<rect x="-15" y="-6" width="14" height="12" rx="2"/><path d="M-1 0h12"/><circle cx="14" cy="0" r="2.5"/>',
  "powell-linsen": '<path d="M-6-14c-4 4-4 24 0 28M6-14c4 4 4 24 0 28M-6-14h12M-6 14h12"/>',
  linienlaser: '<path d="M-14 0h28M0-14v28"/><circle cx="0" cy="0" r="4"/>',
};
const NAMES_ALL = ["MVnano","MVfemto","MVpico","MVmicro","MVpulse","MVpulseHP","MVgoldHP","MVsquare","DOE","Powell","405 nm","450 nm","520 nm","532 nm","640 nm","660 nm","685 nm","785 nm","808 nm","830 nm","850 nm","M12"];

// Neuheiten-Banner unter dem Video (Idee von z-laser.com); Inhalt wie "Neues aus der Fertigung" auf blauoptoelektronik.de
const NEWS = {
  de: { tag: "Neu aus der Fertigung", h: "MVpulse – Augensicherheit und hohe Leistung", p: "Unser MVpulse verbindet zwei Kriterien der industriellen Bildverarbeitung: viel Licht mit bis zu 100 mW Ausgangsleistung – und Augensicherheit nach Laserklasse 2.", more: "Mehr erfahren", ds: "Datenblatt (PDF)", dsFile: "FP-MVpulse-25_Datenblatt_DE.pdf", alt: "MVpulse Lasermodule" },
  en: { tag: "New from production", h: "MVpulse – eye safety and high power", p: "Our MVpulse combines two criteria of industrial machine vision: plenty of light with up to 100 mW output power – and eye safety according to laser class 2.", more: "Learn more", ds: "Datasheet (PDF)", dsFile: "FP-MVpulse-25_Datasheet_EN.pdf", alt: "MVpulse laser modules" },
};

function main(t, A, lang) {
  const N = NEWS[lang];
  const S = SEARCH[lang];
  const [wide, ...cats] = t.cats;
  const cat = ([k, img, h, p, more], cls = "") => `
        <a class="c-cat${cls}" href="produkte.html?kategorie=${k}">
          <div class="c-cat__img"><img src="${img}" alt="" loading="lazy"></div>
          <div class="c-cat__body"><h3>${h}</h3><p>${p}</p><span class="more">${more} ${arrow}</span></div>
        </a>`;
  return `<main id="main">

  <!-- HERO: BLAU-Video wie auf blauoptoelektronik.de -->
  <section class="c-video" aria-labelledby="hero-title">
    <div class="c-video__bg" aria-hidden="true">
      <video src="https://blauoptoelektronik.de/Hero.mp4" autoplay muted loop playsinline preload="auto"></video>
      <span class="c-video__shade"></span>
    </div>
    <div class="wrap c-video__text">
      <p class="c-video__pill">${t.vPill}</p>
      <h1 id="hero-title">${t.vH1}</h1>
      <p class="c-video__lead">${t.vLead}</p>
      <div class="btn-row">
        <a class="c-vbtn c-vbtn--fill" href="produkte.html">${t.b1} ${arrow}</a>
        <a class="c-vbtn c-vbtn--line" href="kontakt.html">${t.vB2}</a>
      </div>
    </div>
    <span class="c-video__mouse" aria-hidden="true"><i></i></span>
    <button class="c-video__toggle" type="button" aria-pressed="false" aria-label="${t.vPause}" data-l-pause="${t.vPause}" data-l-play="${t.vPlay}">
      <svg class="i-pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3v14H7zM14 5h3v14h-3z" fill="currentColor"/></svg>
      <svg class="i-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5l11 7-11 7z" fill="currentColor"/></svg>
    </button>
  </section>

  <section class="c-trust" aria-label="${t.trustLabel}">
    <div class="wrap"><ul>${t.trust.map(([b, s]) => `<li><b>${b}</b><span>${s}</span></li>`).join("")}</ul></div>
  </section>

  <!-- NEUHEIT -->
  <section class="c-news-sec" aria-labelledby="news-title">
    <div class="wrap">
      <article class="c-news reveal">
        <div class="c-news__txt">
          <p class="c-news__tag">${N.tag}</p>
          <h2 id="news-title">${N.h}</h2>
          <p>${N.p}</p>
          <p class="c-news__links"><a class="c-news__more" href="produkt-mvpulse.html">${N.more} ${arrow}</a><a class="c-news__ds" href="${A}downloads/datenblaetter/${N.dsFile}" target="_blank" rel="noopener">${N.ds}</a></p>
        </div>
        <div class="c-news__img"><img src="${A}products/mvpulse-duo-wide.png" alt="${N.alt}" loading="lazy"></div>
      </article>
    </div>
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

  <!-- PRODUKTSUCHE-KREIS -->
  <section class="c-search" aria-labelledby="search-title">
    <div class="wrap">
      <div class="c-search__stage reveal">
        <svg class="c-search__art" viewBox="0 0 1200 420" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <g class="c-search__ring"><circle cx="600" cy="200" r="150"/><path class="c-search__arc" d="M600 38 A162 162 0 0 1 762 200"/><path class="c-search__arc c-search__arc--2" d="M600 362 A162 162 0 0 1 438 200"/></g>
          ${S.nodes.map((n, i) => { const [x, y] = [[170,110],[120,300],[1080,320],[1040,95]][i]; const dx = 600 - x, dy = 200 - y, L = Math.hypot(dx, dy), ex = 600 - dx / L * 150, ey = 200 - dy / L * 150, sx = x + dx / L * 34, sy = y + dy / L * 34;
            return `<line class="c-search__line" style="--d:${i * .2}s" x1="${sx.toFixed(1)}" y1="${sy.toFixed(1)}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}"/><g class="c-search__node" style="--d:${i * .2}s" transform="translate(${x} ${y})"><circle r="32"/><g class="c-search__ico">${ICONS[n[0]]}</g></g>`; }).join("")}
        </svg>
        <h2 class="c-search__title" id="search-title">${S.h}</h2>
      </div>
      <form class="c-search__form reveal" action="produkte.html" method="get" role="search">
        <label class="c-search__label" for="c-search-q">${S.label}</label>
        <div class="c-search__row">
          <input id="c-search-q" name="q" type="search" list="c-search-list" placeholder="${S.ph}" autocomplete="off">
          <button type="submit">${S.btn}</button>
        </div>
        <datalist id="c-search-list">${NAMES_ALL.map((n) => `<option value="${n}">`).join("")}</datalist>
        <p class="c-search__chips"><span>${S.hint}</span>${S.nodes.map(([k, l]) => `<a href="produkte.html?kategorie=${k}#produktfinder">${l}</a>`).join("")}</p>
      </form>
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

  <!-- ANWENDUNGEN: Branchen-Abschnitt unverändert aus Website_Redesign -->
  ${branchen(lang)}

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
  h = h.replace(/<main id="main">[\s\S]*?<\/main>/, () => main(T[lang], A, lang));
  // kein dunkler Kopf, keine Laser-Animation – aber das BLAU-Logo-Intro beim ersten Aufruf
  // (einmal pro Sitzung; ?intro=neu spielt es erneut ab). Alte Fassung erst entfernen, dann neu einsetzen.
  h = h.replace(/<body class="home dark-top">/, '<body class="home calm">');
  h = h.replace(/\s*<script>\s*\/\*[^]*?intro[^]*?<\/script>/, "");
  h = h.replace(/<div class="intro" id="intro">[\s\S]*?<button class="intro__skip"[^>]*>[^<]*<\/button>\s*<\/div>\s*/, "");
  h = h.replace(/(\n\s*<link rel="stylesheet" href="[^"]*styles\.css">)/, `
  <script>
    /* Intro beim ersten Aufruf der Startseite pro Sitzung (?intro=neu spielt es erneut ab) */
    (function (d) {
      var play = true;
      try {
        if (/intro=neu/.test(location.search)) sessionStorage.removeItem("blau-intro");
        play = !sessionStorage.getItem("blau-intro");
      } catch (e) {}
      d.classList.add(play ? "intro-active" : "no-intro");
      /* Sicherheitsnetz: falls das Skript nicht lädt, Intro nach 5 s beenden */
      if (play) setTimeout(function () { d.classList.remove("intro-active"); }, 5000);
    })(document.documentElement);
  </script>$1`);
  h = h.replace(/(<body class="home calm">)/, `$1
<div class="intro" id="intro">
  <div class="intro__half intro__top" aria-hidden="true"></div>
  <div class="intro__half intro__bottom" aria-hidden="true"></div>
  <div class="intro__center" aria-hidden="true">
    <img class="intro__logo" src="${A}blau-logo-white.png" alt="" width="372" height="157">
  </div>
  <span class="intro__line" aria-hidden="true"></span>
  <button class="intro__skip" type="button">${lang === "en" ? "Skip intro" : "Intro überspringen"}</button>
</div>`);
  h = h.replace(/\s*<script src="[^"]*laser-scene\.js" defer><\/script>/, "");
  if (!h.includes("home-video.js")) h = h.replace(/(<script src="[^"]*main\.js" defer><\/script>)/, `$1\n<script src="${A}home-video.js" defer></script>`);
  if (!h.includes("home-calm.css")) h = h.replace(/(<link rel="stylesheet" href="[^"]*styles\.css">)/, `$1\n  <link rel="stylesheet" href="${A}home-calm.css">`);
  fs.writeFileSync(file, h);
  console.log("Startseite neu:", path.relative(root, file));
}
