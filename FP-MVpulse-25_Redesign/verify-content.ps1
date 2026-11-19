# Checks that the original strings of the sources appear character-exact in the redesigned HTML.
#   DS  = FP-MVpulse-25_Datasheet.pdf (BLAU, 12.02.2026, Rev 0)          -> authoritative, checked 1:1
#   LC  = flexpoint-mvpulse-machine-vision-laser-2025.pdf (01/26 / V8)   -> supplementary content
#   WEB = blauoptoelektronik.de/produkte/10                              -> German product text
#   PC1/PC2 = FP-MVpulse-25_Pulse-control_1/_2.pdf -> image-only PDFs, embedded unaltered (checked by file presence)
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$raw0 = [IO.File]::ReadAllText((Join-Path $here 'FP-MVpulse-25_Datasheet.html'), [Text.Encoding]::UTF8)
$raw = [regex]::Replace($raw0, '(?s)<script.*?</script>|<style.*?</style>|<!--.*?-->', ' ')
$raw = $raw -replace '<br\s*/?>|</li>|</td>|</th>', ' '
$txt = [regex]::Replace($raw, '<[^>]+>', '')
$txt = [Net.WebUtility]::HtmlDecode($txt) -replace [char]0xA0, ' '
$txt = ($txt -replace '\s+', ' ')

function Check($name, $list) {
  $f = 0
  foreach ($o in $list) { if ($txt.Contains($o)) { "OK    $o" } else { "MISS  $o"; $script:fail++; $f++ } }
  "---- $name : $($list.Count) strings, $f missing`n"
}
$fail = 0
$DS = @(
 'Datasheet/ Datenblatt','Order number','Artikelnummer','FP-MVpulse-25','Module','Bezeichnung','FP-MVpulse-25 Produktdatenblatt',
 'Basic properties','Allgemeine Eigenschaften',
 'Spectral range','Wellenlänge','450nm, 520nm, 640nm, 660nm, 785nm',
 'Output power','Ausgangsleistung','640nm, 660nm, 785nm: 10 - 100 mW 450nm, 520nm: 10 - 80 mW (peak power)',
 'Operating voltage','Versorgungsspannung','640nm, 660nm, 785nm: 4,5 - 30 V | 450nm, 520nm: 10 - 30 V',
 'Current consumption','Stromverbrauch','< 200 mA @ 5 V (supply current)',
 'Operating temperature','Betriebstemperatur','450nm, 520nm, 640nm: 0°C to +50°C 660nm, 785nm: 0°C to +60°C (housing temperature)',
 'Storage temperature','Lagertemperatur','-20°C to +60°C',
 'Modulation','digital high/low active, 0 - 20 kHz, pulse length and duty cycle limited low = 0 V, high = 5 V, input impedance of 10 kOhm at 5 V',
 'Power stability','Leistungsstabilität','≤ 5 % at 25°C (after warm up)',
 'peak power increase compared to cw mode in same laser class',
 '5x @ pulse length < 0,38 ms, off time between pulses > 1,52 ms, 4x @ pulse length < 0,9 ms, off time between pulses > 2,7 ms, 3x @ pulse length < 2,9 ms, off time between pulses > 5,8 ms 2x @ pulse length < 15 ms, off time between pulses > 15 ms higher frequencies on request',
 'Temperature coefficient of wavelength /','Temperaturkoeffizient der Wellenlänge','< 0,25 nm/K',
 'Beam properties','Optische Eigenschaften',
 'Beam profile','Strahlcharakteristik','laser line with uniform power distribution',
 'Focus distance','Fokusabstand','F: focusable by pin tool (see instruction manual for details) FYYY: factory pre-focused to YYY mm, but still focusable FIXYYY: fixed focus to YYY mm',
 'Boresight deviation','Strahlrichtungsfehler','≤ 10 mrad (≤ 3 mrad as option)',
 'Pointing stability','Punktstabilität',"≤ 10 $([char]0x03BC)rad/K (improved pointing stability as option)",
 'Fan angle','Öffnungswinkel','5°, 10°, 15°, 20°, 30°, 45°, 60°, 75°, 90°',
 'Line thickness','Liniendicke','STD, DL, DLE, DLSE, TS1, TS2',
 'Line intensity variation','Homogenität','± 20 % (± 10 % as option) related to average power (within 80 % of the line)',
 'Line straightness','Geradheit','± 0,1 % (± 0,05 % as option)',
 'Mechanical properties','Mechanische Eigenschaften',
 'Housing material','Gehäusematerial','Aluminum (blue anodized, potential free)',
 'Housing size','Abmessungen','ST-F/ST-FIX: Ø19x90 mm 2H-F: Ø11,5x36 mm (optics) + Ø19x58 mm (electronics), connected by 150 mm wire 2H-FIX: Ø11,5x29 mm (optics) + Ø19x58 mm (electronics), connected by 150 mm wire',
 'Pin definition','Anschlussbelegung','open leads: +VDC (brown), MOD (black), GND (blue) (M12 connector on request)',
 'Laser class','Laserklasse','2 (IEC 60825-1:2014, EN 60825-1:2014+A11:2021)',
 'GESCHÄFTSFÜHRER Dr.-Ing. Ingmar Blau, Dipl.-Ing. (FH) Eugen Romasew','Telefon +49 (0) 7551/93748-0','Telefax +49 (0) 7551/93748-29',
 'E-MAIL info@blauoptoelektronik.de','WEB www.blauoptoelektronik.de','HANDELSREGISTER: Freiburg HRB 580681','UST-IDNR. DE 169489277',
 'BANKVERBINDUNG Sparkasse Bodensee','IBAN DE 40 6905 0001 0001 0270 28','BIC/SWIFT SOLADES1KNZ','Date','12.02.2026','Rev'
)
Check 'BLAU datasheet (DS)' $DS

$LC = @(
 'FLEXPOINT® MVpulse SERIES (2025)','Machine Vision Laser with Pulse Control',
 'INCREASED PEAK POWER (UP TO 5 TIMES) WITHIN THE SAME LASER CLASS.',
 'High light intensity and therefore high laser power is a key factor in various machine vision applications. However, when using laser light, obeying laser class regulations is sometimes a limiting factor.',
 'Laser manufacturers classify their lasers in continuous-wave operation, which, in combination with a camera, is not the most commonly used operating mode. The pulse control can align the laser signals with the camera, so that up to 5-times higher peak power (compared to cw mode) can be achieved while staying in the same laser class.',
 'The MVpulse (2025) is available in 5 wavelengths (450 – 785 nm) at peak powers up to 100 mW. Various fan angles (5–90°) are available to achieve the required line length, and six different optical options provide a suitable combination of line width and depth of field for your application. The modules come with fixed or adjustable focus in different housings: Standard or 2H (two separate housings - one for the optics with the laser diode and the other for the electronics).',
 'FEATURES','Safe laser classes so that no safety equipment is required (can be set to laser class 2 or 3R)','High pulse power, low average optical power',
 'High output power for high-contrast images and higher accuracy','Pulse control by integrated microcontroller',
 'APPLICATIONS','3D Triangulation','3D Laser Scanners','Industrial Inspection','Structured Lighting',
 'Model','Line laser with uniform power distribution (FOV correction available)','Wavelength [nm]','Wavelength tolerance (typ.) [nm]',
 'Output power (max. peak power) [mW]','Power stability at 25 °C (after warm up) [%]','Operating voltage [VDC]','10 – 30','4.5 – 30',
 'Current consumption [mA]','< 200 @ 5 VDC','Operating temperature (housing temp.) [°C]','0 to +50','0 to +60',
 'Peak power increase compared to cw mode in same laser class',
 '5x @ pulse length < 0.38 ms, laser off time between pulses > 1.52 ms 4x @ pulse length < 0.9ms, laser off time between pulses > 2.7 ms 3x @ pulse length < 2.9 ms, laser off time between pulses > 5.8 ms 2x @ pulse length < 15 ms, laser off time > 15 ms',
 'Fan angle [°]','5, 10, 15, 20, 30, 45, 60, 75, 90','Focusing range [mm]','50 – 5000',
 'Line intensity variation (typ) [%]','±20 related to average power (within 80 % of the line)','Line straightness [%]','±0.1 ( ±0.05 as option)',
 "Pointing stability [$([char]0x03BC)rad/K]",'≤ 10 (improved pointing stability as option)','Boresight deviation [mrad]','≤ 10 (≤ 3 as option)',
 'Storage temperature [°C]','-20 to +60',
 'Digital modulation 0 – 20 kHz, (0 – 1 MHz on request), digital High or Low active, Low = 0 V, High = 5 V, input impedance of 10 kOhm at 5 V',
 'Housing','Aluminium (blue anodized, potential free) ST (Standard) or 2H (separate housing for optics and electronics)',
 'Connector','Open leads (length 500 mm): Brown: +VDC, Black: MOD (digital modulation), Blue: GND M12-connector on request',
 'Laser preset at factory to 2 or 3R (IEC 60825-1:2014, EN60825-1:2014+A11:2021)',
 'Accessories available','(optional, order separately)','Mount; Power supply for 5 V (≥ 640 nm); Power supply for 12 V with M12 connector',
 'Foot Note','The output power is defined as the laser power emitted from the laser module','Condensate formation must be avoided (due to optical and electronic components)',
 'Fan angle: Defined by the ends of the laser line using FWHM based on the average power (within 80 % of line)',
 'Line intensity variation and line straightness are measured at 80 % of the fan angle',
 'Line Thickness and Depth of Focus (DOF) for Standard (STD) Focus Option at 660 nm',
 'Standard laser line characteristics (short range)','Standard laser line characteristics (long range)','Focus Options',
 'MVpulse (2025) lasers are available with different focus options to achieve the right combination of line thickness and depth of focus for the application.',
 'To calculate line thickness and DOF, note the value in the graphs above and multiply them by the factors for your requested wavelength, output power, and focus option listed in the following table.',
 '(conversion factor related to standard laser marked in red)','Foot Note / Abbreviations',
 'LT = Line Thickness','DOF = Depth of Focus','STD = Standard, good compromise for Line Thickness and Depth of Focus','DL = Thin Line','FD = Focus Distance',
 'DLE = Thin line enhanced','DLSE = Thin line super enhanced','TS1 = Enhanced depth of focus','TS2 = Enhanced depth of focus, higher factor',
 'Pulse and Monitor / Control Features',
 'The pulse peak power can be increased by the factor 2/3/4/5 compared to the maximum continuous wave average power whilst the laser still stays within the limits of laser class 2 or laser class 3R. By increasing the pulse peak power, the maximum pulse length has to be limited.',
 'Below is a visualization how the pulse peak power can be increased to the limits of laser class 2 and how the pulse length and the minimum off-time will change accordingly.',
 'The following graph shows the relation between the pulse increase factor, the max. pulse length and the minimum off-time valid for both laser class 2 and laser class 3R.',
 'Pulse increase factor compared to cw 5x 4x 3x 2x','Max. Pulse Length [ms] 0.38 0.9 2.9 15','Min. Laser off time [ms] > 1.52 > 2.7 > 5.8 > 15',
 'The MVpulse (2025) driver electronics automatically monitors and controls the pulse modulation function. If the user applies a higher duty cycle or longer pulse length to the modulation input of the laser which would lead to an exceedance of the laser class, the driver electronics will ignore the signal and will limit the laser output power to stay in the specified laser class. Refer to the examples below.',
 'Modulation signal: on time | off time','Pulse control: factory preset maximum on time | minimum off time',
 'TECHNICAL DRAWING','MVpulse (2025) with adjustable focus and standard housing (ST-F)','MVpulse 25 ST-F',
 'MVpulse-25 with adjustable focus, standard housing (ST-F) and M12-connector (on request)','MVpulse 25 ST-F-M12',
 'MVpulse (2025) with fixed focus and standard housing (ST-FIX)','MVpulse 25 ST-FIX',
 'MVpulse (2025) with adjustable focus and 2 housings (separate housing for optics and electronics) (2H-F)','MVpulse 25 2H-F',
 'MVpulse (2025) with fixed focus and 2 housings (separate housing for optics and electronics) (2H-FIX)','MVpulse 25 2H-FIX',
 '1For optimal heat dissipation in a mount, we recommend to apply thermal paste on the surface overlap.','Units: mm',
 'ORDERING CODE','Housing','Wavelength [nm]','Output Power [mW]','Modulation / Power Adjustment','Fan Angle [°]','Focus [mm]','Optics','Laser Class','Pulse Increase Factor',
 'ST 2H','450 520 640 660 785','10 – 80 10 – 100','M | Digital Modulation, active low','MI | Digital Modulation inverted, active high',
 '5 10 15 20 30 45 60 75 90','F | Focus adjustable','FYYY | Focus factory-preset to YYY mm, but still adjustable','FIXYYY | Fixed Focus to YYY mm',
 'STD DL DLE DLSE TS1 TS2','Laser ClassX2 3R Pulse Increase FactorX2x 3x 4x 5x','Example: FP-MVpulse-25-ST-785-50M-30-F-DL-2-2x',
 'laser class limit','pulse factor 4','pulse factor 3','pulse factor 2','continuous wave',
 'duty cycle < 25% · pulse length < 0.9 ms','duty cycle < 33% · pulse length < 2.9 ms','duty cycle < 50% · pulse length < 15 ms',
 'SAFETY AND HANDLING INFORMATION','Personal Hazard',
 'Depending on the mode of operation, these devices emit highly concentrated non visible infrared light which can be hazardous to the human eye. Products which incorporate these devices have to follow the safety precautions given in IEC 60825-1 »Safety of laser products«.',
 'Handling Precautions','Products are subject to the risks normally associated with sensitive electronic devices including static discharge, transients, and overload.',
 'RoHS','compliant'
)
Check 'LASER COMPONENTS datasheet (LC)' $LC

$WEB = @(
 'Das MVpulse-Lasermodul verbindet zwei Kriterien: Viel Licht, mit Ausgangsleistungen bis 100 mW, unter Beibehaltung von Laserklasse 2.',
 'Das BLAU MVpulse-Lasermodul verbindet zwei Kriterien der industriellen Bildverarbeitung: Helles Licht mit Ausgangsleistungen bis 100 mW und Augensicherheit nach Laserklasse 2.',
 'Hohe Ausgangsleistungen für kontrastreiche Bilder',
 'Hohe Ausgangsleistungen sind in der industriellen Bildverarbeitung nötig, um ein kontrastreiches Bild zu schaffen, was eine detaillierte Auswertung möglich macht. Dieses Licht muss allerdings nur dann zur Verfügung stehen, wenn die Kamera des IVB-Systems eine Aufnahme macht.',
 'Präzise Synchronisation',
 'Die Elektronik des Lasermoduls stimmt Aufnahmefrequenz und Beleuchtungspulse so aufeinander ab, dass hohe Ausgangsleistungen auch ohne aufwändige Schutzvorrichtungen möglich sind. Abhängig von der gewünschten Laserklasse liefert das BLAU MVpulse bei Pulslängen zwischen 15 ms und 0,38 ms Ausgangsleistungen von 10 mW bis 100 mW.',
 'Verfügbare Wellenlängen','Das Modul ist in den Wellenlängen 450 nm, 520 nm, 640 nm, 660 nm und 785 nm verfügbar.',
 'Gehäuse Optionen','FP-MVpulse-25-ST-F-M12','FP-MVpulse-25-ST-FIX','FP-MVpulse-25-2H-FIX','FP-MVpulse-25-2H-F','FP-MVpulse-25-ST-F'
)
Check 'Website produkte/10 (WEB)' $WEB

# Focus factor table: compared cell by cell with the LC text layer (p.3)
$tbl = [regex]::Matches($raw0,'(?s)<table class="ft">.*?</table>')[0].Value
$rows = [regex]::Matches($tbl,'<tr>(.*?)</tr>') | ForEach-Object { ([regex]::Matches($_.Groups[1].Value,'<td[^>]*>(.*?)</td>') | ForEach-Object { $_.Groups[1].Value }) -join '|' } | Where-Object { $_ }
# P_out lower bounds set to 10 mW after BLAU decision 12.11.2026 (all other cells = LC text layer)
$ref = @('450|10 – 80|±10|0.25|0.10|0.33|0.16|0.45|0.30|0.69|0.69|1.49|3.25|2.20|7.06',
 '520|10 – 80|±10|0.29|0.11|0.39|0.19|0.53|0.36|0.78|0.78|1.71|3.69|2.55|8.23',
 '640|10 – 20|±5|0.39|0.16|0.51|0.27|0.69|0.48|1.02|1.07|1.65|2.79|2.43|6.08',
 '640|21 – 30|±5|0.39|0.16|0.51|0.27|0.69|0.48|1.02|1.07|1.47|2.23|2.18|4.87',
 '640|31 – 100|±5|0.47|0.23|0.59|0.36|0.80|0.67|1.20|1.47|1.65|2.79|2.43|6.08',
 '660|10 – 30|±5|0.39|0.15|0.49|0.24|0.67|0.44|1.00|1.00|1.51|2.27|2.25|5.07',
 '660|31 – 100|±5|0.51|0.26|0.65|0.42|0.88|0.78|1.31|1.72|1.51|2.27|2.25|5.07',
 '785|10|±10|0.35|0.10|0.45|0.17|0.61|0.31|0.90|0.68|1.65|2.28|2.43|4.96',
 '785|11 – 100|±10|0.65|0.35|0.82|0.57|1.12|1.05|1.65|2.28|2.00|3.36|2.98|7.45')
if (($rows -join "`n") -eq ($ref -join "`n")) { "OK    focus factor table 9 x 15 cells identical" } else { "MISS  focus factor table differs"; $fail++ }

# Per-wavelength rows of the LC spec table (450|520|640|660|785)
$wm = [regex]::Matches($raw0,'(?s)<table class="wm">.*?</table>')[0].Value
foreach ($r in @('Wavelength tolerance \(typ\.\) \[nm\]</td><td>±10</td><td>±10</td><td>±5</td><td>±5</td><td>±10</td>',
                 '<td>10 – 80</td><td>10 – 80</td><td>10 – 100</td><td>10 – 100</td><td>10 – 100</td>',
                 '<td>0 to \+50</td><td>0 to \+50</td><td>0 to \+50</td><td>0 to \+60</td><td>0 to \+60</td>',
                 'colspan="2">10 – 30</td><td class="span" colspan="3">4.5 – 30</td>')) {
  if ($wm -match $r) { "OK    LC column order: $r" } else { "MISS  LC column order: $r"; $fail++ } }

# Original images embedded unaltered
foreach ($a in 'photo-left','photo-right','dof-short','dof-long','pulse-viz','pulse-curve','mod-diagram','pc2','drw6-iso','drw6-2d','drw7-iso','drw7-2d','drw8-iso','drw8-2d','drw9-iso','drw9-2d','drw10-iso','drw10-2d') {
  if ($raw0.Contains("assets/$a.png") -and (Test-Path (Join-Path $here "assets\$a.png"))) { "OK    image $a" } else { "MISS  image $a"; $fail++ } }

# Typos corrected after approval (12.11.2026) must no longer appear
foreach ($c in 'Fokussabstand','defintion','stabillity','(1–90°)','FP-MVpulse-ST-','0.94 ms','pulse length < 3 ms','continous','tbc','<b>1 – 80</b>','<b>1 – 100</b>','<li><b>1</b></li>','-DL-1-2x') { if ($txt.Contains($c) -or $raw0.Contains($c)) { "OLD!  '$c' still found"; $fail++ } else { "OK    corrected: '$c' no longer present" } }

"`nTOTAL PROBLEMS: $fail"
