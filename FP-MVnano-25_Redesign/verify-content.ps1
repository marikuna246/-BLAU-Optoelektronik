# Checks that every original string from FP-MVnano-25_Datasheet.pdf (Rev 0, 24.03.2026)
# appears character-exact (with the 5 approved typo corrections applied) in the redesigned HTML (tags stripped, whitespace collapsed).
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$raw = [IO.File]::ReadAllText((Join-Path $here 'FP-MVnano-25_Datasheet_Redesign.html'), [Text.Encoding]::UTF8)
$raw = [regex]::Replace($raw, '(?s)<script.*?</script>|<style.*?</style>|<!--.*?-->', ' ')
$raw = $raw -replace '<br\s*/?>', ' '
$txt = [regex]::Replace($raw, '<[^>]+>', '')
$txt = [Net.WebUtility]::HtmlDecode($txt) -replace ' ', ' '
$txt = ($txt -replace '\s+', ' ')

$orig = @(
 # identification
 'FP-MVnano-25', 'FP-MVnano-25 Produktdatenblatt',
 # basic properties
 '405nm (1-100mW), 450nm (1-75mW), 520nm (1-80mW), 635-640nm (1-100mW), 650-660nm (1-100mW), 685nm (1-40mW), 785nm (1-100mW), 830nm (1-80mW), 850nm (1-40mW) (other wavelengths on request)',
 '1mW-100mW (depending on wavelength)',
 '4,5-30V (10-30V for 405/450/520nm); (405/520nm available with 5V electronics on request) | no electronics for optical heads',
 '< 200mA (supply current)',
 '-20° to +50°C (case temperature, depending on wavelength and heat sink)',
 '-20°C to +60°C (depends on wavelength)',
 'digital (high/low active 0-5V, 0 - 10kHz; on request: 0-24V, higher freq.), analog (high/low active by control wire 0-5V, see technical note)',
 '≤5% at 25°C (after warm up, only for modules with driver electronics)',
 'Wavelength stability:', '<0.25nm/K',
 # beam properties
 'laser line with uniform power distribution (thin lines, TS versions and FOV correction available)',
 'adjustable by pin tool (see instruction manual for details) | factory focused for FIX versions',
 '≤10 mrad (≤3mrad as option)',
 '≤10µrad/K (improved pointing stability available on request)',
 '1°, 5°, 10°, 15°, 20°, 30°, 45°, 60°, 75°, 90°',
 'STD, DL, DLE, DLSE, TS1, TS2',
 '±20% (opt. ± 10%) related to average power (within 80% of the line)',
 '±0,1% ( ±0,05 as option)',
 # mechanical properties
 'Aluminum (blue anodised; potential free), IP67 Rating',
 'Ø=11,5 × Length (see product map for length --> depending on chosen features)',
 'Brown: +VDC, Blue: GND, Black: modulation 3 core cable, 2 m length, wires tin-coated at ends | no wires for optical heads | 150mm cable between housing for 2H versions',
 'IEC 60825-1:2014, EN 60825-1:2014+A11:2021',
 # labels EN / DE
 'Order number','Artikelnummer','Module','Bezeichnung','Basic properties','Allgemeine Eigenschaften',
 'Spectral range','Wellenlänge','Output power','Ausgangsleistung','Operating voltage','Versorgungsspannung',
 'Current consumption','Stromverbrauch','Operating temperature','Betriebstemperatur','Storage temperature','Lagertemperatur',
 'Modulation','Power stability','Leistungsstabilität','Beam properties','Optische Eigenschaften',
 'Beam profile','Strahlcharakteristik','Focus distance','Fokusabstand','Boresight deviation','Strahlrichtungsfehler',
 'Pointing stability','Punktstabilität','Fan angle','Öffnungswinkel','Line thickness','Liniendicke',
 'Line intensity variation','Homogenität','Line straightness','Geradheit','Mechanical properties','Mechanische Eigenschaften',
 'Housing material','Gehäusematerial','Housing size','Abmessungen','Pin definition','Anschlussbelegung','Laser class','Laserklasse',
 'Datasheet','Datenblatt',
 # document data & company block
 'Date','24.03.2026','Rev',
 'GESCHÄFTSFÜHRER Dr.-Ing. Ingmar Blau, Dipl.-Ing. (FH) Eugen Romasew',
 'Telefon +49 (0) 7551/93748-0','Telefax +49 (0) 7551/93748-29','E-MAIL info@blauoptoelektronik.de','WEB www.blauoptoelektronik.de',
 'HANDELSREGISTER: Freiburg HRB 580681','UST-IDNR. DE 169489277',
 'BANKVERBINDUNG Sparkasse Bodensee','IBAN DE 40 6905 0001 0001 0270 28','BIC/SWIFT SOLADES1KNZ'
)
$fail = 0
foreach ($o in $orig) {
  if ($txt.Contains($o)) { "OK    $o" } else { "MISS  $o"; $fail++ }
}
$old = @('Bronw','defintion','stabillity','Fokussabstand','driver electro ')
foreach ($o in $old) { if ($txt.Contains($o)) { "OLD!  $o still present"; $fail++ } }
"`n$($orig.Count) strings checked, $fail problems."
