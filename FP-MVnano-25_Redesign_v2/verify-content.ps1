# Checks that every visible original string of FP-MVnano-25_Datasheet.pdf (Rev 0, 24.03.2026)
# appears character-exact (original Unicode characters; 5 typos corrected after approval on 09.11.2026) in the redesigned HTML.
param([string]$TextFile)
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$raw0 = [IO.File]::ReadAllText((Join-Path $here 'FP-MVnano-25_Datasheet.html'), [Text.Encoding]::UTF8)
$raw = [IO.File]::ReadAllText((Join-Path $here 'FP-MVnano-25_Datasheet.html'), [Text.Encoding]::UTF8)
$raw = [regex]::Replace($raw, '(?s)<script.*?</script>|<style.*?</style>|<!--.*?-->', ' ')
$raw = $raw -replace '<br\s*/?>', ' '
$txt = [regex]::Replace($raw, '<[^>]+>', '')
$txt = [Net.WebUtility]::HtmlDecode($txt) -replace [char]0xA0, ' '
$txt = ($txt -replace '\s+', ' ')
if($TextFile){ $dumpRaw=[IO.File]::ReadAllText($TextFile,[Text.Encoding]::UTF8); $txt=($dumpRaw -replace "`t",' ' -replace [string][char]11,' ' -replace '\s+',' '); "Checking text dump: $TextFile" }

$mu = [char]0x03BC   # original uses GREEK SMALL LETTER MU
$orig = @(
 'Datasheet/ Datenblatt',
 'Order number/ Artikelnummer', 'FP-MVnano-25',
 'Module/ Bezeichnung', 'FP-MVnano-25 Produktdatenblatt',
 'Basic properties', 'Allgemeine Eigenschaften',
 'Spectral range', 'Wellenlänge',
 '405nm (1-100mW), 450nm (1-75mW), 520nm (1-80mW), 640nm (1-100mW), 660nm (1-100mW), 685nm (1-40mW), 785nm (1-100mW), 830nm (1-80mW), 845nm (1-40mW) (other wavelengths on request)',
 'Output power', 'Ausgangsleistung', '1mW-100mW (depending on wavelength)',
 'Operating voltage', 'Versorgungsspannung', '4,5-30V (10-30V for 405/450/520nm); (405/450/520nm available with 5V electronics on request) | no electronics for optical heads',
 'Current consumption', 'Stromverbrauch', '< 200mA (supply current)',
 'Operating temperature', 'Betriebstemperatur', '-10° to +50°C (case temperature, depending on wavelength and heat sink)',
 'Storage temperature', 'Lagertemperatur', '-20°C to +60°C (depends on wavelength)',
 'Modulation', 'digital (high/low active 0-5V, < 20kHz; on request: 0-24V, higher freq.), analog (high/low active by control wire 0-5V, see technical note)',
 'Power stability', 'Leistungsstabilität', '≤5% at 25°C (after warm up, only for modules with driver electronics)',
 'Wavelength stability:', '<0.25nm/K',
 'Beam properties', 'Optische Eigenschaften',
 'Beam profile', 'Strahlcharakteristik', 'laser line with uniform power distribution (thin lines, TS versions and FOV correction available)',
 'Focus distance', 'Fokusabstand', 'adjustable by pin tool (see instruction manual for details) | factory focused for FIX versions',
 'Boresight deviation', 'Strahlrichtungsfehler', '≤10 mrad (≤3 or 5mrad as option)',
 'Pointing stability', 'Punktstabilität', "≤10$($mu)rad/K (improved pointing stability available on request)",
 'Fan angle', 'Öffnungswinkel', '1°, 5°, 10°, 15°, 20°, 30°, 45°, 60°, 75°, 90°',
 'Line thickness', 'Liniendicke', 'STD, DL, DLE, DLSE, TS1, TS2',
 'Line intensity variation', 'Homogenität', '±20% (opt. ± 10%) related to average power (within 80% of the line)',
 'Line straightness', 'Geradheit', '±0,1% ( ±0,05 as option)',
 'Mechanical properties', 'Mechanische Eigenschaften',
 'Housing material', 'Gehäusematerial', 'Aluminum (blue anodised; potential free), IP67 Rating',
 'Housing size', 'Abmessungen', 'Ø=11,5 × Length (see product map for length --> depending on chosen features)',
 'Pin definition', 'Anschlussbelegung', 'Brown: +VDC, Blue: GND, Black: modulation 3 core cable, 2 m length, wires tin-coated at ends | no wires for optical heads | 150mm cable between housing for 2H versions',
 'Laser class', 'Laserklasse', 'IEC 60825-1:2014, EN 60825-1:2014+A11:2021',
 'GESCHÄFTSFÜHRER Dr.-Ing. Ingmar Blau, Dipl.-Ing. (FH) Eugen Romasew',
 'Telefon +49 (0) 7551/93748-0', 'Telefax +49 (0) 7551/93748-29',
 'E-MAIL info@blauoptoelektronik.de', 'WEB www.blauoptoelektronik.de',
 'HANDELSREGISTER: Freiburg HRB 580681', 'UST-IDNR. DE 169489277',
 'BANKVERBINDUNG Sparkasse Bodensee', 'IBAN DE 40 6905 0001 0001 0270 28', 'BIC/SWIFT SOLADES1KNZ',
 'Date', '24.03.2026', 'Rev'
)
$fail = 0
foreach ($o in $orig) { if ($txt.Contains($o)) { "OK    $o" } else { "MISS  $o"; $fail++ } }
# old typos (approved corrections 09.11.2026) must no longer appear
foreach ($c in @('Bronw','defintion','stabillity','Fokussabstand','driver electro ','µrad')) { if ($txt.Contains($c)) { "CHANGED!  '$c' found"; $fail++ } }
"`n$($orig.Count) original strings checked, $fail problems."

# ---- Supplementary content (exact wording of the sources) ----
# LC = flexpoint-mvnano-machine-vision-laser-2025.pdf ; WEB = blauoptoelektronik.de/produkte/1
$supp = @(
 'A COMPACT AND FLEXIBLE LASER MODULE SUITABLE AS STAND-ALONE SOLUTION OR FOR INTEGRATION',
 'MVnano line lasers have a diameter of 11.5 mm and are 54 mm long. They are therefore suitable as a stand-alone solution with a camera for 3D triangulation or for integration in intelligent 3D vision sensors. They provide great flexibility with various wavelength (405 – 850 nm), output powers up to 100 mW, fixed as well as adjustable focus and different versions of modulation e.g. 24 V.',
 'The MVnano with new focus mechanics (Edition 2025) offers improved dust- and moisture proofness, an even shorter design and an improved beam drift while focusing the laser. The established, easy focusing method will remain untouched.',
 'A variety of options of optics provide the right combination of line thickness and depth of focus for various applications. Different housing versions are available e.g. 2H (separate housing for optics and electronics).',
 'Superior line quality for a variety of wavelengths','Fixed and adjustable focus available','Improved focus mechanics for the adjustable focus',
 'Many optics options for the right match of line thickness and depth of focus','Modular housing options available (Standard, 2H = 2 Housing, OH = Optical Head)','24 V Modulation available',
 '3D machine vision','Integration in 3D sensors','3D Triangulation','Industrial inspection','Structured lighting',
 'Focussing range [mm]','50 – 5000',
 'Line Thickness and Depth of Focus (DOF) for Standard (STD) Focus Option at 660 nm',
 'MVnano is available with different focus options to achieve the right combination of line thickness and depth of focus depending on the application.',
 'Thin Line Super Enhanced','Thin Line Enhanced','Thin Line','Standard, good compromise for Line Thickness and Depth of Focus','Enhanced Depth of Focus, higher factor',
 'left side - optimized for thin line','right side - optimized for high DOF','LT = Line Thickness','DOF = Depth of Focus',
 'Shock tolerance','30 G, 6 ms 75 G, 4 ms',
 'Standard, 2H (separate housing for optics and electronics) or OH (without electronics)',
 'Fixed focus (fixed at factory to defined working distance) or adjustable focus',
 'Accessories available','(optional, order separately)','Mount; Mobile power pack for modules ≥ 640 nm; Power supply for 5 V (≥ 640 nm); Power supply for 12 V',
 'Output power: The output power is defined behind optics which means at the beam exit of the laser module',
 'Below 0 °C condensate formation must be avoided (due to optical and electronic components)',
 'Fan angle: Defined by the ends of the laser line using FWHM based on the average power (within 80 % of line)',
 'Line intensity variation and line straightness are measured at 80 % of the fan angle',
 'MVnano 2025 standard housing, focusable (ST-F)','MVnano 2025 with 2 housings, focusable (2H-F)','MVnano 2025 standard housing, fixed focus (ST-FIX)',
 'MVnano ST-F','MVnano 2H-F','MVnano ST-FIX','54 ±1','29 ±1','38 ±1','60 ±1','Units: mm',
 '1For optimal heat dissipation in a mount, we recommend to apply thermal paste on the surface overlap.',
 'Im 11,5 x 54 mm Gehäuse ist der MVnano ein Stand-Alone-Produkt oder ein Lasermodul zur Integration in verschiedenste Anwendungen bei optimierten Kosten.',
 'FLEXPOINT® MVnano Linienlaser',
 'Der FLEXPOINT® MVnano-Linienlaser ist der Standardlaser für die industrielle Bildverarbeitung. Mit einer Länge von 54 mm und einem Durchmesser von 11,5 mm eignet er sich ideal als Stand-Alone-Produkt oder für die platzsparende Integration in Sensoren oder 3D-Scanner.',
 'Bei der Edition 2025 wurde die Fokussiermechanik grundlegend überarbeitet. Dadurch sind die Module zuverlässig gegen Staub, Spritzwasser und das Eindringen von Feuchtigkeit geschützt. Gleichzeitig wurde die Strahlabweichung bei der Fokussierung auf ein Minimum reduziert.',
 'Homogene Leistungsverteilung und perfekte Linienqualität',
 'Die Linienlaser der FLEXPOINT® MVnano-Serie bieten dank der hochpräzisen Powell-Linse aus eigener Produktion eine hervorragende homogene Linienqualität über eine Vielzahl von Wellenlängen hinweg.',
 'Mehrere Optiken stehen zur Auswahl und ermöglichen für jede Anwendung das optimale Verhältnis zwischen Liniendicke und Tiefenschärfe.',
 'Gehäuse Optionen','FP-MVnano-25-ST','Standard Gehäuseoption bei der Optik und Elektronik zusammen in einem einzigen Gehäuse untergebracht sind (Standard, ST).',
 'FP-MVnano-25-OH','Gehäuse mit Optik ohne Elektronik (Optical Head, OH)',
 'FP-MVnano-25-2H','Bei dieser Gehäuseoption sind Optik und Elektronik jeweils in einem separaten Gehäuse untergebracht (2 Housing, 2H).'
)
$sf=0
foreach ($o in $supp) { if ($txt.Contains($o)) { "OK    $o" } else { "MISS  $o"; $sf++ } }
# old Blau values replaced by LC values (decision 09.11.2026: LC values are correct) must not appear
foreach ($c in @('635-640','650-660','850nm','-20° to +50°C','0 - 10kHz','405/520nm','≤3mrad as option')) { if ($txt.Contains($c)) { "CONFLICT!  '$c' found"; $sf++ } }
"$($supp.Count) supplementary strings checked, $sf problems."
# ---- LC tables added after decision "LC values are correct" ----
$lc2=@('Wavelength tolerance (typ.) [nm]','405: ± 5, 450: ± 10, 520: ± 10, 640: ± 5, 660: ± 5, 685: ± 10, 785: ± 10, 830: ± 10, 845: ± 10',
 '5 V Option available (»StepUp« electronics 4.5 – 6 V) for 405 nm, 450 nm and 520 nm, no standard product but available on request',
 'The values shown in the table below are the factors which should be used in combination with the graph above.',
 '(conversion factor related to reference laser marked in red left side - optimized for thin line / right side - optimized for high DOF)',
 'The standard module comes without modulation and power adjustment.',
 '< 20 kHz active high and active low available 0 / 5 V 24 V Version available (0 / 24 V)','high/low by control wire 0 – 5 V',
 'M active low','MI active high','D active low','DI active high','Delay + Rise time (max.) [μs]1010','On [V]0 – 0.54.5 – 505','Off [V]4.5 – 50 – 0.550','Linear range [V]> 3> 3',
 'Available combinations of options M and D are listed in the table below. For the combined modulations (last four columns), the properties of the modulation components apply according to the columns of M, MI, D and DI. The standard module comes without modulation and power adjustment.',
 'FP-MVnano-25-ST-785-50M-30-F-DL','M | Digital Modulation, active low','MI | Digital Modulation inverted, active high','D | Dimmable, active low','DI | Dimmable inverted, active high',
 'F | Focusable','FYYY | Prefocused to YYY mm, but still focusable','FIXYYY | Fixed focus to YYY mm')
# factor table rows compared cell-by-cell against the LC text layer (p.3)
$rowsTxt = [regex]::Matches($raw0,'(?s)<table class="ft">.*?</table>')[0].Value
$cells = [regex]::Matches($rowsTxt,'<tr>(.*?)</tr>') | % { ([regex]::Matches($_.Groups[1].Value,'<td[^>]*>(.*?)</td>') | % { $_.Groups[1].Value }) -join '|' } | Where-Object { $_ }
$ref=@('405|1 – 30|±5|0.27|0.12|0.35|0.20|0.49|0.39|0.71|0.81|1.04|1.76|1.53|3.80','405|30 – 100|±6|0.27|0.12|0.35|0.20|0.49|0.39|0.71|0.81|1.04|1.76|1.53|3.80','450|1 – 75|±10|0.25|0.10|0.33|0.16|0.45|0.30|0.69|0.69|1.49|3.25|2.20|7.06','520|1 – 10|±10|0.29|0.11|0.39|0.19|0.53|0.36|0.78|0.78|1.71|3.69|2.55|8.23','520|11 – 40|±10|0.29|0.11|0.39|0.19|0.53|0.36|0.78|0.78|1.71|3.69|2.55|8.23','640|1 – 20|±5|0.39|0.16|0.51|0.27|0.69|0.48|1.02|1.07|1.65|2.79|2.43|6.08','640|21 – 30|±5|0.39|0.16|0.51|0.27|0.69|0.48|1.02|1.07|1.47|2.23|2.18|4.87','640|31 – 100|±5|0.47|0.23|0.59|0.36|0.80|0.67|1.20|1.47|1.65|2.79|2.43|6.08','660|1 – 30|±5|0.39|0.15|0.49|0.24|0.67|0.44|1.00|1.00|1.51|2.27|2.25|5.07','660|31 – 100|±5|0.51|0.26|0.65|0.42|0.88|0.78|1.31|1.72|1.51|2.27|2.25|5.07','685|1 – 40|±10|0.45|0.20|0.57|0.31|0.76|0.56|1.14|1.24|1.43|1.97|2.12|4.31','785|1 – 10|±10|0.35|0.10|0.45|0.17|0.61|0.31|0.90|0.68|1.65|2.28|2.43|4.96','785|11 – 100|±10|0.65|0.35|0.82|0.57|1.12|1.05|1.65|2.28|2.00|3.36|2.98|7.45','830|1 – 40|±10|0.69|0.37|0.88|0.62|1.22|1.17|1.78|2.53|2.29|4.18|3.39|9.13','845|1 – 40|±10|0.35|0.10|0.45|0.16|0.61|0.29|0.90|0.63|1.63|2.05|2.41|4.51')
$lf=0
foreach ($o in $lc2) { if ($txt.Contains($o) -or ($txt -replace ' ','').Contains(($o -replace ' ',''))) { "OK    $o" } else { "MISS  $o"; $lf++ } }
if ($TextFile) { $dumpPipe=$dumpRaw -replace "`t",'|'; $miss=@($ref | ? { -not $dumpPipe.Contains($_) }); if($miss.Count){ "MISS  focus factor rows: $($miss -join ' / ')"; $lf++ } else { "OK    focus factor table 15 rows identical (pptx)" } } elseif (($cells -join "`n") -ne ($ref -join "`n")) { "MISS  focus factor table differs"; $lf++ } else { "OK    focus factor table 15 x 15 cells identical" }
"$($lc2.Count+1) LC table checks, $lf problems."