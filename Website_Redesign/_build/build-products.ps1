# Erzeugt die Produktdetailseiten aus products.json nach der MVnano-Vorlage.
# Aufruf (UTF-8-sicher):
#   powershell -NoProfile -Command "& ([scriptblock]::Create([IO.File]::ReadAllText('Website_Redesign\_build\build-products.ps1',[Text.Encoding]::UTF8)))"
$ErrorActionPreference = 'Stop'
$root = Resolve-Path 'Website_Redesign'
$utf8 = New-Object Text.UTF8Encoding($false)
$data = [IO.File]::ReadAllText("$root\_build\products.json", $utf8) | ConvertFrom-Json
$IMG = $data.img

# Gemeinsamer Header/Footer aus der Produktübersicht (Produkte ist dort als aktuelle Seite markiert)
$ref = [IO.File]::ReadAllText("$root\produkte.html", $utf8)
$hs = $ref.IndexOf('<svg width="0"'); $he = $ref.IndexOf('<main id="main">')
$HEADER = $ref.Substring($hs, $he - $hs).TrimEnd()
$fs = $ref.IndexOf('<footer'); $fe = $ref.IndexOf('</body>')
$FOOTER = $ref.Substring($fs, $fe - $fs).TrimEnd()

function Enc([string]$s) { [Net.WebUtility]::HtmlEncode($s) }
$wlColor = @{ '405'='#7b2cff'; '445'='#2a3cff'; '450'='#1f4dff'; '520'='#19b84a'; '525'='#19b84a'; '532'='#27c93f'; '640'='#ff3b1f'; '660'='#e3121b'; '685'='#b00d1c' }
$focusLabel = @{ 'STD'='Standard'; 'DL'='dünne Linie'; 'DLE'='dünne Linie, verbessert'; 'DLSE'='dünne Linie, stark verbessert'; 'TS'='erweiterte Tiefenschärfe'; 'TS2'='erweiterte Tiefenschärfe, verbessert' }
$arrow = '<svg aria-hidden="true"><use href="#i-arrow"/></svg>'

foreach ($p in $data.products) {
  $live = "https://blauoptoelektronik.de/produkte/$($p.liveId)"
  $nameH = Enc $p.name
  $q = [Uri]::EscapeDataString($p.name)
  $sb = New-Object Text.StringBuilder
  function A([string]$s) { [void]$sb.AppendLine($s) }

  # ---------- Kopf ----------
  $first = $IMG + $p.images[0][0]
  $ld = @{ '@context'='https://schema.org'; '@type'='Product'; name = ($(if ($p.brand) { "$($p.brand) " } else { '' }) + $p.name); manufacturer = @{ '@type'='Organization'; name='BLAU Optoelektronik GmbH' }; category = $p.cat; image = $first; description = $p.tagline } | ConvertTo-Json -Depth 4
  A '<!doctype html>'
  A '<html lang="de">'
  A '<head>'
  A '  <meta charset="utf-8">'
  A '  <meta name="viewport" content="width=device-width, initial-scale=1">'
  A "  <title>$(Enc $p.title) | BLAU Optoelektronik</title>"
  A "  <meta name=`"description`" content=`"$(Enc $p.desc)`">"
  A "  <link rel=`"canonical`" href=`"$live`">"
  A "  <meta property=`"og:title`" content=`"$(Enc $p.title)`">"
  A "  <meta property=`"og:image`" content=`"$first`">"
  A '  <meta name="theme-color" content="#003368">'
  A '  <link rel="icon" href="assets/blau-logo.png">'
  A '  <link rel="preconnect" href="https://fonts.googleapis.com">'
  A '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
  A '  <link rel="preconnect" href="https://xtuwjizliuthdgytloju.supabase.co">'
  A '  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@600;700;800&display=swap" rel="stylesheet">'
  A '  <link rel="stylesheet" href="assets/styles.css">'
  A "  <script type=`"application/ld+json`">$ld</script>"
  A '</head>'
  A '<body class="dark-top">'
  A ($HEADER.Replace('href="en/produkte.html"', "href=`"en/produkt-$($p.slug).html`""))
  A ''
  A '<main id="main">'
  A '  <section class="pd-hero" aria-label="Produktübersicht">'
  A '  <div class="wrap">'
  A "    <nav class=`"breadcrumb`" aria-label=`"Brotkrumen`" style=`"padding-top:24px`"><ol><li><a href=`"index.html`">Start</a></li><li><a href=`"produkte.html`">Produkte</a></li><li><a href=`"produkte.html?kategorie=$($p.catKey)`">$(Enc $p.cat)</a></li><li aria-current=`"page`">$nameH</li></ol></nav>"
  A '    <div class="pd-top">'
  A '      <div class="pd-gallery">'
  A "        <div class=`"main`"><img data-gallery-main src=`"$first`" alt=`"$(Enc $p.images[0][1])`"></div>"
  if ($p.images.Count -gt 1) {
    A '        <div class="thumbs" role="group" aria-label="Produktbilder">'
    $i = 0
    foreach ($im in $p.images) {
      $i++; $src = $IMG + $im[0]; $pressed = if ($i -eq 1) { 'true' } else { 'false' }
      A "          <button type=`"button`" aria-pressed=`"$pressed`" data-gallery-thumb data-src=`"$src`" data-alt=`"$(Enc $im[1])`"><img src=`"$src`" alt=`"Bild $i anzeigen`" loading=`"lazy`"></button>"
    }
    A '        </div>'
  }
  A '      </div>'
  A '      <div class="pd-info">'
  $eyebrow = if ($p.brand) { "$($p.brand) · $($p.cat)" } else { $p.cat }
  A "        <p class=`"eyebrow`">$(Enc $eyebrow)</p>"
  A "        <h1>$nameH</h1>"
  A "        <p class=`"tagline`">$(Enc $p.tagline)</p>"
  A '        <dl class="keyfacts">'
  foreach ($f in $p.facts) { A "          <div><dt>$(Enc $f[0])</dt><dd>$(Enc $f[1])</dd></div>" }
  A '        </dl>'
  A '        <div class="btn-row">'
  A "          <a class=`"btn btn--accent`" href=`"kontakt.html?produkt=$q`">Angebot anfragen $arrow</a>"
  $cfgMap = @{ mvpulse="mvpulse"; mvpulsehp="mvpulsehp"; mvsquare="mvsquare"; mvfemto="mvfemto"; mvmicro="mvmicro"; mvpico="mvpico" }
  if ($cfgMap.ContainsKey($p.slug)) { A "          <a class=`"btn btn--ghost`" href=`"konfigurator.html?g=mv&amp;s=$($cfgMap[$p.slug])&amp;step=wlpower`"><svg aria-hidden=`"true`"><use href=`"#i-sliders`"/></svg> Jetzt konfigurieren</a>" }
  if ($p.downloads.Count) { A '          <a class="btn btn--ghost" href="#downloads">Datenblatt</a>' } else { A '          <a class="btn btn--ghost" href="tel:+497551937480">Direkt anrufen</a>' }
  A '        </div>'
  A '        <p class="pd-note"><svg aria-hidden="true"><use href="#i-sliders"/></svg>Ihre Anwendung braucht andere Werte? Sprechen Sie uns an – wir passen gern an.</p>'
  A '      </div>'
  A '    </div>'
  A '  </div>'
  A '  </section>'

  # ---------- Sub-Navigation ----------
  $hasVar = $p.variants -and $p.variants.Count
  $hasTD = $p.matrix -or $p.focus -or $p.extra -or $p.chips
  $hasDL = $p.downloads.Count -gt 0
  A '  <nav class="subnav" aria-label="Abschnitte"><div class="wrap"><ul>'
  A '    <li><a href="#vorteile">Vorteile</a></li>'
  if ($hasVar) { A '    <li><a href="#varianten">Gehäusevarianten</a></li>' }
  if ($hasTD) { A '    <li><a href="#technische-daten">Technische Daten</a></li>' }
  if ($hasDL) { A '    <li><a href="#downloads">Downloads</a></li>' }
  A '  </ul></div></nav>'

  # ---------- Vorteile ----------
  A '  <section class="section" id="vorteile" aria-labelledby="vorteile-title">'
  A '    <div class="wrap two-col">'
  A '      <div>'
  A '        <p class="eyebrow">Ihre Vorteile</p>'
  A "        <h2 id=`"vorteile-title`">$(Enc $p.introH)</h2>"
  A "        <p class=`"lead`">$(Enc $p.introLead)</p>"
  foreach ($para in $p.introP) { A "        <p>$(Enc $para)</p>" }
  A '      </div>'
  A '      <div class="benefit-list">'
  foreach ($b in $p.benefits) { A "        <div class=`"benefit`"><div class=`"icon`"><svg aria-hidden=`"true`"><use href=`"#i-$($b[0])`"/></svg></div><div><h3>$(Enc $b[1])</h3><p>$(Enc $b[2])</p></div></div>" }
  A '      </div>'
  A '    </div>'
  A '  </section>'

  # ---------- Varianten ----------
  if ($hasVar) {
    A '  <section class="section section--panel" id="varianten" aria-labelledby="varianten-title">'
    A '    <div class="wrap">'
    A '      <div class="section-head">'
    A '        <p class="eyebrow">Gehäusevarianten</p>'
    $vh = if ($p.variants.Count -eq 1) { 'Bauform und Abmessungen' } else { "$($p.variants.Count) Bauformen für Ihren Einbauraum" }
    A "        <h2 id=`"varianten-title`">$vh</h2>"
    A "        <p class=`"lead`">$(Enc $p.variantsLead)</p>"
    A '      </div>'
    A '      <div class="housing-grid">'
    foreach ($v in $p.variants) {
      A '        <article class="housing">'
      A "          <div class=`"media`"><img src=`"$IMG$($v[2])`" alt=`"Maßzeichnung $(Enc $v[0])`" loading=`"lazy`"></div>"
      $sub = if ($v[1]) { "<h3>$(Enc $v[1])</h3>" } else { '' }
      A "          <div class=`"body`"><code>$(Enc $v[0])</code>$sub</div>"
      A '        </article>'
    }
    A '      </div>'
    A '    </div>'
    A '  </section>'
  }

  # ---------- Technische Daten ----------
  if ($hasTD) {
    A '  <section class="section" id="technische-daten" aria-labelledby="td-title">'
    A '    <div class="wrap">'
    A '      <div class="section-head">'
    A '        <p class="eyebrow">Technische Daten</p>'
    if ($p.matrix) {
      A '        <h2 id="td-title">Wellenlänge und Leistung</h2>'
      A '        <p class="lead">Verfügbare Kombinationen aus Wellenlänge und maximaler Ausgangsleistung.</p>'
    } else { A '        <h2 id="td-title">Technische Daten im Überblick</h2>' }
    A '      </div>'
    if ($p.matrix) {
      A '      <div class="table-wrap">'
      A '        <table class="matrix">'
      A '          <caption>Maximale Leistung [mW] je Wellenlänge</caption>'
      $head = ($p.matrix.cols | ForEach-Object { "<th scope=`"col`">$_</th>" }) -join ''
      A "          <thead><tr><th scope=`"col`">Wellenlänge</th>$head</tr></thead>"
      A '          <tbody>'
      foreach ($r in $p.matrix.rows) {
        $wl = $r[0]; $c = $wlColor[$wl]; $ir = ''
        if (-not $c) { $c = '#6b7280'; $ir = ' <small>(IR)</small>' }
        $cells = ($r[1].ToCharArray() | ForEach-Object { if ($_ -eq 'Y') { '<td class="y"><span class="sr-only">verfügbar</span></td>' } else { '<td class="n"><span class="sr-only">nicht verfügbar</span></td>' } }) -join ''
        A "            <tr><th scope=`"row`"><span class=`"wl`" style=`"background:$c`"></span>$wl nm$ir</th>$cells</tr>"
      }
      A '          </tbody>'
      A '        </table>'
      A '      </div>'
    }
    if ($p.extra) {
      A '      <div class="table-wrap" style="margin-top:24px">'
      A '        <table class="matrix spec">'
      A "          <caption>$(Enc $p.extra.caption)</caption>"
      A "          <thead><tr><th scope=`"col`">$(Enc $p.extra.head[0])</th><th scope=`"col`">$(Enc $p.extra.head[1])</th></tr></thead>"
      A '          <tbody>'
      foreach ($r in $p.extra.rows) { A "            <tr><th scope=`"row`">$(Enc $r[0])</th><td>$(Enc $r[1])</td></tr>" }
      A '          </tbody>'
      A '        </table>'
      A '      </div>'
    }
    if ($p.focus -or $p.chips) {
      A '      <div class="two-col" style="margin-top:48px">'
      if ($p.focus) {
        A '        <div>'
        A '          <h3>Fokusoptionen</h3>'
        A '          <p>Bestimmen das Verhältnis aus Liniendicke und Tiefenschärfe. Jede Option ist mit allen Öffnungswinkeln kombinierbar.</p>'
        $chips = ($p.focus.opts | ForEach-Object { "<li><span class=`"chip`">$_ · $($focusLabel[$_])</span></li>" }) -join ''
        A "          <ul class=`"chips`" aria-label=`"Fokusoptionen`">$chips</ul>"
        A '        </div>'
        A '        <div>'
        A '          <h3>Öffnungswinkel</h3>'
        A '          <p>Der Öffnungswinkel bestimmt die Linienlänge im jeweiligen Arbeitsabstand.</p>'
        $ang = ($p.focus.angles | ForEach-Object { "<li><span class=`"chip`">$_°</span></li>" }) -join ''
        A "          <ul class=`"chips`" aria-label=`"Öffnungswinkel`">$ang</ul>"
        if ($p.focus.note) { A "          <p style=`"margin-top:12px;font-size:.9rem;color:var(--muted)`">$(Enc $p.focus.note)</p>" }
        A "          <p style=`"margin-top:16px`"><a class=`"link-arrow`" href=`"https://blauoptoelektronik.de/tools`">Liniendicke online simulieren $arrow</a></p>"
        A '        </div>'
      }
      if ($p.chips) {
        A '        <div>'
        A "          <h3>$(Enc $p.chips.title)</h3>"
        $ch = ($p.chips.items | ForEach-Object { "<li><span class=`"chip`">$(Enc $_)</span></li>" }) -join ''
        A "          <ul class=`"chips`">$ch</ul>"
        A '        </div>'
      }
      A '      </div>'
    }
    A '    </div>'
    A '  </section>'
  }

  # ---------- Downloads ----------
  if ($hasDL) {
    A '  <section class="section section--panel" id="downloads" aria-labelledby="dl-title">'
    A '    <div class="wrap two-col">'
    A '      <div>'
    A '        <p class="eyebrow">Downloads</p>'
    A '        <h2 id="dl-title">Datenblatt und Unterlagen</h2>'
    A '        <p class="lead">Alle technischen Details zum Download.</p>'
    A '      </div>'
    A '      <div class="downloads">'
    foreach ($d in $p.downloads) {
      # Optionales 3. Feld = eigene Datei unter assets/downloads/ (sonst Link zur Live-Produktseite)
      if ($d.Count -ge 3 -and $d[2]) { $href = $d[2]; $extra = ' target="_blank" rel="noopener"' } else { $href = $live; $extra = '' }
      A "        <a class=`"download`" href=`"$href`"$extra><span class=`"ft`">PDF</span><span><b>$(Enc $d[0])</b><small>$(Enc $d[1])</small></span></a>"
    }
    A '      </div>'
    A '    </div>'
    A '  </section>'
  }

  # ---------- Ähnliche Produkte ----------
  A '  <section class="section" aria-labelledby="rel-title">'
  A '    <div class="wrap">'
  A '      <div class="section-head section-head--row">'
  A '        <div><p class="eyebrow">Auch interessant</p><h2 id="rel-title">Ähnliche Produkte</h2></div>'
  A "        <a class=`"link-arrow`" href=`"produkte.html`">Alle Produkte $arrow</a>"
  A '      </div>'
  A '      <div class="product-grid">'
  foreach ($r in $p.related) {
    A "        <article class=`"product-card`"><div class=`"media`"><img src=`"$IMG$($data.thumbs.$r)`" alt=`"`" loading=`"lazy`"></div><div class=`"body`"><h3><a href=`"produkt-$r.html`">$(Enc $data.names.$r)</a></h3><div class=`"foot`">Details ansehen $arrow</div></div></article>"
  }
  A '      </div>'
  A '    </div>'
  A '  </section>'

  # ---------- CTA ----------
  A '  <section class="section" style="padding-top:0" aria-labelledby="cta-title">'
  A '    <div class="wrap">'
  A '      <div class="cta-band">'
  A '        <div>'
  A "          <h2 id=`"cta-title`">Interesse an $($nameH)?</h2>"
  A '          <p>Beschreiben Sie uns kurz Ihre Anwendung – wir beraten Sie zur passenden Ausführung und erstellen Ihnen ein Angebot.</p>'
  A "          <div class=`"btn-row`" style=`"margin-top:26px`"><a class=`"btn btn--accent`" href=`"kontakt.html?produkt=$q`">Angebot anfragen $arrow</a></div>"
  A '        </div>'
  A '        <div class="cta-contact">'
  A '          <a class="direct" href="tel:+497551937480"><svg aria-hidden="true"><use href="#i-phone"/></svg>+49 7551 93748-0</a>'
  A "          <a class=`"direct`" href=`"mailto:info@blauoptoelektronik.de?subject=Anfrage%20$q`"><svg aria-hidden=`"true`"><use href=`"#i-mail`"/></svg>info@blauoptoelektronik.de</a>"
  A '          <small>Telefonisch erreichbar Mo–Fr, 8:00–17:00 Uhr</small>'
  A '        </div>'
  A '      </div>'
  A '    </div>'
  A '  </section>'
  A '</main>'
  A ''
  A '<div class="mobile-cta" aria-label="Schnellkontakt">'
  A '  <a class="btn btn--ghost" href="tel:+497551937480"><svg aria-hidden="true"><use href="#i-phone"/></svg> Anrufen</a>'
  A "  <a class=`"btn btn--accent`" href=`"kontakt.html?produkt=$q`">Angebot anfragen</a>"
  A '</div>'
  A ''
  A $FOOTER
  A '</body>'
  A '</html>'

  [IO.File]::WriteAllText("$root\produkt-$($p.slug).html", $sb.ToString(), $utf8)
  "erzeugt: produkt-$($p.slug).html"
}
