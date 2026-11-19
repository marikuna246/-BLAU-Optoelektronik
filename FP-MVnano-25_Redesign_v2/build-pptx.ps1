# Builds the editable PowerPoint version (A4 portrait, 11 slides) of the FP-MVnano-25 datasheet via PowerPoint (COM).
$ErrorActionPreference = 'Stop'
trap { "ERR line $($_.InvocationInfo.ScriptLineNumber): $($_.Exception.Message) :: $($_.InvocationInfo.Line.Trim()) || $($_.ScriptStackTrace)"; try{ $pres.Close() }catch{}; try{ $app.Quit() }catch{}; break }
Add-Type -AssemblyName System.Drawing
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$A    = Join-Path $here 'assets'
$out  = Join-Path $here 'FP-MVnano-25_Datasheet_BLAU.pptx'
$pdf  = Join-Path $here 'FP-MVnano-25_Datasheet_BLAU_PowerPoint-Export.pdf'
$dump = Join-Path $here 'pptx-text-dump.txt'

function RGBc($r,$g,$b){ [int]($r + 256*$g + 65536*$b) }
$NAVY=RGBc 0 51 104; $RED=RGBc 229 24 55; $INK=RGBc 16 27 43; $INK2=RGBc 58 71 87; $MUTED=RGBc 115 128 147
$RULE=RGBc 220 226 234; $PANEL=RGBc 244 246 249; $WHITE=RGBc 255 255 255; $ZEBRA=RGBc 250 251 252
$FONT='Arial'; $vTRUE=-1; $vFALSE=0
function mm($v){ [single]($v*2.83465) }
$LB=[string][char]11

$app=New-Object -ComObject PowerPoint.Application
$pres=$app.Presentations.Add($vFALSE)
$pres.PageSetup.SlideWidth=mm 210; $pres.PageSetup.SlideHeight=mm 297
$NPAGES=11

# ---------------- helpers ----------------
function Box($s,$x,$y,$w,$h,$fill,$line=$null){ $r=$s.Shapes.AddShape(1,(mm $x),(mm $y),(mm $w),(mm $h)); $r.Fill.ForeColor.RGB=$fill; $r.Fill.Solid()
  if($line -ne $null){ $r.Line.ForeColor.RGB=$line; $r.Line.Weight=[single](0.75) } else { $r.Line.Visible=$vFALSE }; $r.Shadow.Visible=$vFALSE; return $r }
function Rule($s,$x,$y,$w,$color=$RULE,$wt=0.6){ $l=$s.Shapes.AddLine((mm $x),(mm $y),(mm ($x+$w)),(mm $y)); $l.Line.ForeColor.RGB=$color; $l.Line.Weight=[single]($wt); return $l }
function Txt($s,$x,$y,$w,$text,$size=9,$bold=$vFALSE,$color=$INK2,$align=1,$auto=$true,$h=10){
  $b=$s.Shapes.AddTextbox(1,(mm $x),(mm $y),(mm $w),(mm $h)); $tf=$b.TextFrame
  $tf.MarginLeft=0; $tf.MarginRight=0; $tf.MarginTop=0; $tf.MarginBottom=0; $tf.WordWrap=$vTRUE
  $tr=$tf.TextRange; $tr.Text=$text; $tr.Font.Name=$FONT; $tr.Font.Size=[single]($size); $tr.Font.Bold=$bold; $tr.Font.Color.RGB=$color
  $tr.ParagraphFormat.Alignment=$align; $tr.ParagraphFormat.SpaceAfter=[single](0); $tr.ParagraphFormat.SpaceWithin=[single](1.1)
  if($auto){ $tf.AutoSize=1 } else { $tf.AutoSize=0; $b.Height=mm $h }
  return $b }
function Bottom($shape){ [double]($shape.Top + $shape.Height)/2.83465 }
function FmtChars($tr,$start,$len,$bold=$null,$color=$null,$size=$null){ $c=$tr.Characters($start,$len); if($bold -ne $null){$c.Font.Bold=$bold}; if($color -ne $null){$c.Font.Color.RGB=$color}; if($size -ne $null){$c.Font.Size=[single]($size)} }
function ImgSize($file){ $b=[Drawing.Image]::FromFile((Join-Path $A $file)); $r=@($b.Width,$b.Height); $b.Dispose(); return $r }
function Img($s,$file,$x,$y,$w){ $sz=ImgSize $file; $h=$w*$sz[1]/$sz[0]; $p=$s.Shapes.AddPicture((Join-Path $A $file),$vFALSE,$vTRUE,(mm $x),(mm $y),(mm $w),(mm $h)); return $p }
function ImgSq($s,$file,$x,$y,$w,$h){ $s.Shapes.AddPicture((Join-Path $A $file),$vFALSE,$vTRUE,(mm $x),(mm $y),(mm $w),(mm $h)) }

function Tbl($s,$rows,$cols,$x,$y,$widths,$size=9){
  $tw=0; foreach($v in $widths){ $tw+=$v }
  $sh=$s.Shapes.AddTable($rows,$cols,(mm $x),(mm $y),(mm $tw),(mm (5*$rows)))
  $t=$sh.Table; $t.ApplyStyle('{2D5ABB26-0587-4C30-8999-92F81FD0307C}',$true)
  $t.FirstRow=$vFALSE; $t.HorizBanding=$vFALSE
  for($c=1;$c -le $cols;$c++){ $t.Columns.Item($c).Width=mm $widths[$c-1] }
  for($r=1;$r -le $rows;$r++){ for($c=1;$c -le $cols;$c++){ $cs=$t.Cell($r,$c).Shape; $tf=$cs.TextFrame
      $tf.MarginLeft=mm 1; $tf.MarginRight=mm 1.5; $tf.MarginTop=mm 1.4; $tf.MarginBottom=mm 1.4
      $tr=$tf.TextRange; $tr.Font.Name=$FONT; $tr.Font.Size=[single]($size); $tr.Font.Color.RGB=$INK2; $tr.ParagraphFormat.SpaceWithin=[single](1.05)
      $cs.Fill.Visible=$vFALSE } ; $t.Rows.Item($r).Height=mm 3 }
  return $sh }
function CT($t,$r,$c,$text,$size=$null,$bold=$vFALSE,$color=$INK2,$align=1){ $tr=$t.Cell($r,$c).Shape.TextFrame.TextRange; $tr.Text=$text
  if($size){$tr.Font.Size=[single]($size)}; $tr.Font.Bold=$bold; $tr.Font.Color.RGB=$color; $tr.ParagraphFormat.Alignment=$align; return $tr }
function CellFill($t,$r,$c,$color){ $f=$t.Cell($r,$c).Shape.Fill; $f.Visible=$vTRUE; $f.Solid(); $f.ForeColor.RGB=$color }
function CellBorder($t,$r,$c,$side,$color,$wt=0.6){ $b=$t.Cell($r,$c).Borders.Item($side); $b.Visible=$vTRUE; $b.ForeColor.RGB=$color; $b.Weight=[single]($wt); $b.DashStyle=1 }
function RowBorder($t,$r,$side,$color,$wt=0.6){ for($c=1;$c -le $t.Columns.Count;$c++){ CellBorder $t $r $c $side $color $wt } }

function Chrome($s,$no){  # header + footer on content slides
  Txt $s 17 13 120 'DATASHEET/ DATENBLATT' 6.5 $vFALSE $MUTED | Out-Null
  Txt $s 17 17.5 120 'FP-MVnano-25' 14 $vTRUE $NAVY | Out-Null
  Img $s 'blau-logo.png' 159 11 34 | Out-Null
  Rule $s 17 29 176 $RULE 0.6 | Out-Null; Rule $s 17 29 18 $RED 2.2 | Out-Null
  Footer $s $no }
function Footer($s,$no){
  Rule $s 17 280 176 $RULE 0.6 | Out-Null
  $f=Txt $s 17 282.5 60 ('Date  24.03.2026      Rev  0') 7 $vFALSE $MUTED; FmtChars $f.TextFrame.TextRange 1 4 $vTRUE $INK2; FmtChars $f.TextFrame.TextRange 23 3 $vTRUE $INK2
  Txt $s 70 282.5 70 'www.blauoptoelektronik.de' 7 $vTRUE $NAVY 2 | Out-Null
  Txt $s 143 282.5 50 "page $no of $NPAGES" 7 $vTRUE $NAVY 3 | Out-Null }
function SecHead($s,$y,$no,$en,$de){
  $text = $(if($no){"$no   "}else{''}) + $en + $(if($de){"   /  $de"}else{''})
  $b=Txt $s 17 $y 176 $text 17 $vTRUE $NAVY; $tr=$b.TextFrame.TextRange
  if($no){ FmtChars $tr 1 2 $vTRUE $RED 10 }
  if($de){ $i=$text.IndexOf("   /  $de")+1; FmtChars $tr $i ($text.Length-$i+1) $vFALSE $MUTED 12.5 }
  return $b }
function SubHead($s,$x,$y,$w,$en,$de){ $text=$en+$(if($de){" / $de"}else{''}); $b=Txt $s $x $y $w $text 10.5 $vTRUE $NAVY
  if($de){ FmtChars $b.TextFrame.TextRange ($en.Length+1) ($text.Length-$en.Length) $vFALSE $MUTED }; return $b }

function SpecTable($s,$y,$rows){
  $t=(Tbl $s $rows.Count 2 17 $y @(55,121) 9)
  $tt=$t.Table
  for($i=0;$i -lt $rows.Count;$i++){ $r=$rows[$i]; $ri=$i+1
    $lab = if($r[1]){ $r[0]+"`r"+$r[1] } else { $r[0] }
    $tr=CT $tt $ri 1 $lab 9 $vTRUE $INK
    if($r[1]){ $p=$tr.Paragraphs(2); $p.Font.Bold=$vFALSE; $p.Font.Color.RGB=$MUTED; $p.Font.Size=[single](8) }
    $v=CT $tt $ri 2 ($r[2]+$r[3]) 9 $vFALSE $INK2
    if($r[2]){ FmtChars $v 1 $r[2].Length $vTRUE $INK }
    RowBorder $tt $ri 3 $RULE 0.6
    if($i % 2 -eq 1){ CellFill $tt $ri 1 $ZEBRA; CellFill $tt $ri 2 $ZEBRA } }
  RowBorder $tt 1 1 $NAVY 1.5
  return $t }

# =====================================================================
# SLIDE 1 — COVER
# =====================================================================
$s=$pres.Slides.Add(1,12)
$b=Txt $s 17 21 120 'Datasheet/ Datenblatt' 13 $vFALSE $NAVY; FmtChars $b.TextFrame.TextRange 11 11 $vFALSE $MUTED
Img $s 'blau-logo.png' 148 12 45 | Out-Null
Txt $s 17 36 176 'FP-MVnano-25' 38 $vTRUE $NAVY | Out-Null
Txt $s 17 54 176 'laser line with uniform power distribution' 12.5 $vFALSE $MUTED | Out-Null
Box $s 0 64 210 66 $PANEL | Out-Null
ImgSq $s 'product-a.png' 8 63 66 66 | Out-Null
ImgSq $s 'product-2h.png' 70 61 72 72 | Out-Null
ImgSq $s 'product-b.png' 138 63 66 66 | Out-Null
$l=Box $s 0 129.6 147 0.9 $NAVY; $l=Box $s 147 129.6 63 0.9 $RED
$y=137
$b=Txt $s 17 $y 176 'A COMPACT AND FLEXIBLE LASER MODULE SUITABLE AS STAND-ALONE SOLUTION OR FOR INTEGRATION' 10 $vFALSE $NAVY; $y=(Bottom $b)+3
$intro = 'MVnano line lasers have a diameter of 11.5 mm and are 54 mm long. They are therefore suitable as a stand-alone solution with a camera for 3D triangulation or for integration in intelligent 3D vision sensors. They provide great flexibility with various wavelength (405 – 850 nm), output powers up to 100 mW, fixed as well as adjustable focus and different versions of modulation e.g. 24 V.' + "`r" +
 'The MVnano with new focus mechanics (Edition 2025) offers improved dust- and moisture proofness, an even shorter design and an improved beam drift while focusing the laser. The established, easy focusing method will remain untouched.' + "`r" +
 'A variety of options of optics provide the right combination of line thickness and depth of focus for various applications. Different housing versions are available e.g. 2H (separate housing for optics and electronics).'
$b=Txt $s 17 $y 176 $intro 9 $vFALSE $INK2; $b.TextFrame.TextRange.ParagraphFormat.SpaceAfter=[single](5); $b.TextFrame.TextRange.ParagraphFormat.SpaceWithin=[single](1.2); $y=(Bottom $b)+6
$feat=@('Superior line quality for a variety of wavelengths','Fixed and adjustable focus available','Improved focus mechanics for the adjustable focus','Many optics options for the right match of line thickness and depth of focus','Modular housing options available (Standard, 2H = 2 Housing, OH = Optical Head)','24 V Modulation available')
$apps=@('3D machine vision','Integration in 3D sensors','3D Triangulation','Industrial inspection','Structured lighting')
Txt $s 17 $y 100 'FEATURES' 10 $vFALSE $NAVY | Out-Null; Txt $s 124 $y 69 'APPLICATIONS' 10 $vFALSE $NAVY | Out-Null
foreach($pair in @(@(17,96,$feat),@(124,69,$apps))){
  $b=Txt $s $pair[0] ($y+7) $pair[1] (($pair[2] | % { "/   $_" }) -join "`r") 8.8 $vFALSE $INK
  $tr=$b.TextFrame.TextRange; $tr.ParagraphFormat.SpaceAfter=[single](3.5)
  for($k=1;$k -le $tr.Paragraphs().Count;$k++){ $p=$tr.Paragraphs($k); $p.Characters(1,1).Font.Color.RGB=$RED; $p.Characters(1,1).Font.Bold=$vTRUE } }
Footer $s 1

# =====================================================================
# SLIDE 2 — PRODUCT OVERVIEW (DE) + KEY DATA
# =====================================================================
$s=$pres.Slides.Add(2,12); Chrome $s 2
SecHead $s 38 '' 'Product overview' 'Produktbeschreibung' | Out-Null
$b=Txt $s 17 51 176 'Im 11,5 x 54 mm Gehäuse ist der MVnano ein Stand-Alone-Produkt oder ein Lasermodul zur Integration in verschiedenste Anwendungen bei optimierten Kosten.' 10.5 $vFALSE $INK; $y=(Bottom $b)+6
$c1='FLEXPOINT® MVnano Linienlaser' + ("`r" + 'Der FLEXPOINT® MVnano-Linienlaser ist der Standardlaser für die industrielle Bildverarbeitung. Mit einer Länge von 54 mm und einem Durchmesser von 11,5 mm eignet er sich ideal als Stand-Alone-Produkt oder für die platzsparende Integration in Sensoren oder 3D-Scanner.') + ("`r" + 'Bei der Edition 2025 wurde die Fokussiermechanik grundlegend überarbeitet. Dadurch sind die Module zuverlässig gegen Staub, Spritzwasser und das Eindringen von Feuchtigkeit geschützt. Gleichzeitig wurde die Strahlabweichung bei der Fokussierung auf ein Minimum reduziert.')
$c2='Homogene Leistungsverteilung und perfekte Linienqualität' + ("`r" + 'Die Linienlaser der FLEXPOINT® MVnano-Serie bieten dank der hochpräzisen Powell-Linse aus eigener Produktion eine hervorragende homogene Linienqualität über eine Vielzahl von Wellenlängen hinweg.') + ("`r" + 'Mehrere Optiken stehen zur Auswahl und ermöglichen für jede Anwendung das optimale Verhältnis zwischen Liniendicke und Tiefenschärfe.')
$maxb=0
foreach($pair in @(@(17,$c1),@(107,$c2))){ $b=Txt $s $pair[0] $y 86 $pair[1] 8.6 $vFALSE $INK2; $tr=$b.TextFrame.TextRange; $tr.ParagraphFormat.SpaceAfter=[single](4); $tr.ParagraphFormat.SpaceWithin=[single](1.2)
  $p=$tr.Paragraphs(1); $p.Font.Bold=$vTRUE; $p.Font.Color.RGB=$NAVY; $p.Font.Size=[single](9.5); $bb=Bottom $b; if($bb -gt $maxb){$maxb=$bb} }
$y=$maxb+10
Box $s 17 $y 176 0.6 $NAVY | Out-Null; $y+=5
$facts=@(@('1mW-100mW','Output power','Ausgangsleistung'),@('4,5-30V','Operating voltage','Versorgungsspannung'),@('< 200mA','Current consumption','Stromverbrauch'),@('<0.25nm/K','Wavelength stability:',''),@('IP67 Rating','Housing material','Gehäusematerial'))
for($k=0;$k -lt 5;$k++){ $x=17+$k*35.2; $f=$facts[$k]
  if($k -gt 0){ $l=$s.Shapes.AddLine((mm ($x-2)),(mm $y),(mm ($x-2)),(mm ($y+22))); $l.Line.ForeColor.RGB=$RULE; $l.Line.Weight=[single](0.6) }
  Txt $s $x $y 33 $f[0] 14 $vTRUE $NAVY | Out-Null
  $lab=$f[1]+$(if($f[2]){"`r"+$f[2]}else{''}); $b=Txt $s $x ($y+9) 33 $lab 7.3 $vTRUE $INK2; if($f[2]){ $p=$b.TextFrame.TextRange.Paragraphs(2); $p.Font.Bold=$vFALSE; $p.Font.Color.RGB=$MUTED } }
$y+=28; Rule $s 17 $y 176 | Out-Null; $y+=5
$b=Txt $s 17 $y 32 ("Spectral range`rWellenlänge") 7.3 $vTRUE $INK2; $b.TextFrame.TextRange.Paragraphs(2).Font.Bold=$vFALSE; $b.TextFrame.TextRange.Paragraphs(2).Font.Color.RGB=$MUTED
$wl=@(@('405nm',(RGBc 123 47 217)),@('450nm',(RGBc 43 92 255)),@('520nm',(RGBc 24 168 75)),@('640nm',(RGBc 255 74 28)),@('660nm',(RGBc 232 19 30)),@('685nm',(RGBc 179 15 34)),@('785nm',(RGBc 122 95 100)),@('830nm',(RGBc 92 75 79)),@('845nm',(RGBc 61 51 54)))
$cx=52; $cy=$y
foreach($w in $wl){ $chip=$s.Shapes.AddShape(5,(mm $cx),(mm $cy),(mm 18),(mm 6)); $chip.Fill.ForeColor.RGB=$WHITE; $chip.Line.ForeColor.RGB=$RULE; $chip.Line.Weight=[single](0.6); $chip.Adjustments.Item(1)=[single](0.5); $chip.Shadow.Visible=$vFALSE
  $tf=$chip.TextFrame; $tf.MarginLeft=mm 5; $tf.MarginRight=0; $tf.MarginTop=0; $tf.MarginBottom=0; $tf.WordWrap=$vFALSE; $tr=$tf.TextRange; $tr.Text=$w[0]; $tr.Font.Name=$FONT; $tr.Font.Size=[single](7.8); $tr.Font.Color.RGB=$INK; $tr.ParagraphFormat.Alignment=1
  $dot=$s.Shapes.AddShape(9,(mm ($cx+1.6)),(mm ($cy+1.6)),(mm 2.8),(mm 2.8)); $dot.Fill.ForeColor.RGB=$w[1]; $dot.Line.Visible=$vFALSE; $dot.Shadow.Visible=$vFALSE
  $cx+=20; if($cx -gt 175){ $cx=52; $cy+=8 } }
Txt $s ($cx+1) ($cy+1) 60 '(other wavelengths on request)' 7.8 $vFALSE $MUTED | Out-Null
$y=$cy+16
foreach($pair in @(@(17,'Order number/ Artikelnummer','FP-MVnano-25'),@(107,'Module/ Bezeichnung','FP-MVnano-25 Produktdatenblatt'))){
  Box $s $pair[0] $y 86 16 $PANEL | Out-Null; Box $s $pair[0] $y 1 16 $NAVY | Out-Null
  $b=Txt $s ($pair[0]+5) ($y+3) 78 $pair[1] 7.3 $vFALSE $MUTED; $i=$pair[1].IndexOf('/'); FmtChars $b.TextFrame.TextRange 1 $i $vTRUE $INK2
  Txt $s ($pair[0]+5) ($y+8) 78 $pair[2] 11.5 $vTRUE $NAVY | Out-Null }

# =====================================================================
# SLIDE 3 — 01 BASIC PROPERTIES
# =====================================================================
$s=$pres.Slides.Add(3,12); Chrome $s 3
SecHead $s 36 '01' 'Basic properties' 'Allgemeine Eigenschaften' | Out-Null
$t=SpecTable $s 47 @(
 @('Spectral range','Wellenlänge','',"405nm (1-100mW), 450nm (1-75mW), 520nm (1-80mW), 640nm (1-100mW), 660nm (1-100mW), 685nm (1-40mW), 785nm (1-100mW), 830nm (1-80mW), 845nm (1-40mW)$LB(other wavelengths on request)"),
 @('Wavelength tolerance (typ.) [nm]','','','405: ± 5, 450: ± 10, 520: ± 10, 640: ± 5, 660: ± 5, 685: ± 10, 785: ± 10, 830: ± 10, 845: ± 10'),
 @('Output power','Ausgangsleistung','1mW-100mW',' (depending on wavelength)'),
 @('Operating voltage','Versorgungsspannung','4,5-30V'," (10-30V for 405/450/520nm);$LB(405/450/520nm available with 5V electronics on request) | no electronics for optical heads"),
 @('Current consumption','Stromverbrauch','< 200mA',' (supply current)'),
 @('Operating temperature','Betriebstemperatur','-10° to +50°C',' (case temperature, depending on wavelength and heat sink)'),
 @('Storage temperature','Lagertemperatur','-20°C to +60°C',' (depends on wavelength)'),
 @('Modulation','Modulation','digital',(" (high/low active 0-5V, < 20kHz; on request: 0-24V, higher freq.),$LB" + 'analog (high/low active by control wire 0-5V, see technical note)')),
 @('Power stability','Leistungsstabilität','≤5%',' at 25°C (after warm up, only for modules with driver electronics)'),
 @('Wavelength stability:','','<0.25nm/K','')
)
$tv=$t.Table.Cell(8,2).Shape.TextFrame.TextRange; $i=$tv.Text.IndexOf('analog')+1; FmtChars $tv $i 6 $vTRUE $INK
$y=(Bottom $t)+6
$ph=[Math]::Min(75,(276-$y)); Box $s 17 $y 176 $ph $PANEL | Out-Null
SubHead $s 22 ($y+4) 120 'Spectral range' 'Wellenlänge' | Out-Null
Txt $s 130 ($y+5) 58 'Output power [mW]' 6.5 $vFALSE $MUTED 3 | Out-Null
$ih=[Math]::Min(56,$ph-19); $iw=$ih*1930/630; if($iw -gt 168){ $iw=168 }
Img $s 'g-spectral.png' (105-$iw/2) ($y+11) $iw | Out-Null
Txt $s 22 ($y+$ph-5.5) 166 'Visualisation of “Spectral range / Wellenlänge” · (other wavelengths on request)' 6.8 $vFALSE $MUTED | Out-Null

# =====================================================================
# SLIDE 4 — 02 BEAM PROPERTIES
# =====================================================================
$s=$pres.Slides.Add(4,12); Chrome $s 4
SecHead $s 36 '02' 'Beam properties' 'Optische Eigenschaften' | Out-Null
$t=SpecTable $s 47 @(
 @('Beam profile','Strahlcharakteristik','laser line with uniform power distribution',"$LB(thin lines, TS versions and FOV correction available)"),
 @('Focus distance','Fokusabstand','',("adjustable by pin tool (see instruction manual for details) |$LB" + 'factory focused for FIX versions')),
 @('Boresight deviation','Strahlrichtungsfehler','≤10 mrad',' (≤3 or 5mrad as option)'),
 @('Pointing stability','Punktstabilität',"≤10$([char]0x03BC)rad/K",' (improved pointing stability available on request)'),
 @('Fan angle','Öffnungswinkel','1°, 5°, 10°, 15°, 20°, 30°, 45°, 60°, 75°, 90°',''),
 @('Line thickness','Liniendicke','STD, DL, DLE, DLSE, TS1, TS2',''),
 @('Line intensity variation','Homogenität','±20%',' (opt. ± 10%) related to average power (within 80% of the line)'),
 @('Line straightness','Geradheit','±0,1%',' ( ±0,05 as option)')
)
$y=(Bottom $t)+6
Box $s 17 $y 176 50 $PANEL | Out-Null
SubHead $s 22 ($y+4) 166 'Fan angle' 'Öffnungswinkel' | Out-Null
Img $s 'g-fans.png' 22 ($y+11) 166 | Out-Null
$y+=55
Box $s 17 $y 86 62 $PANEL | Out-Null; Box $s 107 $y 86 62 $PANEL | Out-Null
SubHead $s 22 ($y+4) 78 'Line intensity variation' 'Homogenität' | Out-Null
Img $s 'g-homogeneity.png' 22 ($y+13) 76 | Out-Null
SubHead $s 112 ($y+4) 78 'Line thickness' 'Liniendicke' | Out-Null
$ox=112; $oy=$y+13
foreach($o in 'STD','DL','DLE','DLSE','TS1','TS2'){ $bw=[Math]::Max(11,3+2.3*$o.Length); if($ox+$bw -gt 189){ $ox=112; $oy+=10 }
  $r=$s.Shapes.AddShape(5,(mm $ox),(mm $oy),(mm $bw),(mm 7.5)); $r.Fill.ForeColor.RGB=$WHITE; $r.Line.ForeColor.RGB=$RULE; $r.Line.Weight=[single](0.6); $r.Shadow.Visible=$vFALSE; $r.Adjustments.Item(1)=[single](0.15)
  $tf=$r.TextFrame; $tf.MarginLeft=0; $tf.MarginRight=0; $tr=$tf.TextRange; $tr.Text=$o; $tr.Font.Name=$FONT; $tr.Font.Size=[single](9); $tr.Font.Bold=$vTRUE; $tr.Font.Color.RGB=$NAVY; $tr.ParagraphFormat.Alignment=2
  $ox+=$bw+2 }
SubHead $s 112 ($oy+14) 78 'Line straightness' 'Geradheit' | Out-Null
$b=Txt $s 112 ($oy+21) 78 '±0,1% ( ±0,05 as option)' 9 $vFALSE $INK2; FmtChars $b.TextFrame.TextRange 1 5 $vTRUE $NAVY 13

# =====================================================================
# SLIDE 5 — 03 FOCUS OPTIONS
# =====================================================================
$s=$pres.Slides.Add(5,12); Chrome $s 5
SecHead $s 36 '03' 'Focus Options' 'Fokusoptionen' | Out-Null
Box $s 17 47 176 62 $PANEL | Out-Null
SubHead $s 22 50.5 166 'Line Thickness and Depth of Focus (DOF) for Standard (STD) Focus Option at 660 nm' '' | Out-Null
Box $s 22 57 81.5 49 $WHITE | Out-Null; Box $s 106.5 57 81.5 49 $WHITE | Out-Null
Img $s 'dof-short.png' 23.5 58 78.5 | Out-Null; Img $s 'dof-long.png' 108 58 78.5 | Out-Null
$b=Txt $s 17 113 176 ('MVnano is available with different focus options to achieve the right combination of line thickness and depth of focus depending on the application.' + ("`r" + 'The values shown in the table below are the factors which should be used in combination with the graph above.')) 8.8 $vFALSE $INK2
$b.TextFrame.TextRange.ParagraphFormat.SpaceAfter=[single](3); $y=(Bottom $b)+3
$rows=@(
'405|1 – 30|±5|0.27|0.12|0.35|0.20|0.49|0.39|0.71|0.81|1.04|1.76|1.53|3.80','405|30 – 100|±6|0.27|0.12|0.35|0.20|0.49|0.39|0.71|0.81|1.04|1.76|1.53|3.80',
'450|1 – 75|±10|0.25|0.10|0.33|0.16|0.45|0.30|0.69|0.69|1.49|3.25|2.20|7.06','520|1 – 10|±10|0.29|0.11|0.39|0.19|0.53|0.36|0.78|0.78|1.71|3.69|2.55|8.23',
'520|11 – 40|±10|0.29|0.11|0.39|0.19|0.53|0.36|0.78|0.78|1.71|3.69|2.55|8.23','640|1 – 20|±5|0.39|0.16|0.51|0.27|0.69|0.48|1.02|1.07|1.65|2.79|2.43|6.08',
'640|21 – 30|±5|0.39|0.16|0.51|0.27|0.69|0.48|1.02|1.07|1.47|2.23|2.18|4.87','640|31 – 100|±5|0.47|0.23|0.59|0.36|0.80|0.67|1.20|1.47|1.65|2.79|2.43|6.08',
'660|1 – 30|±5|0.39|0.15|0.49|0.24|0.67|0.44|1.00|1.00|1.51|2.27|2.25|5.07','660|31 – 100|±5|0.51|0.26|0.65|0.42|0.88|0.78|1.31|1.72|1.51|2.27|2.25|5.07',
'685|1 – 40|±10|0.45|0.20|0.57|0.31|0.76|0.56|1.14|1.24|1.43|1.97|2.12|4.31','785|1 – 10|±10|0.35|0.10|0.45|0.17|0.61|0.31|0.90|0.68|1.65|2.28|2.43|4.96',
'785|11 – 100|±10|0.65|0.35|0.82|0.57|1.12|1.05|1.65|2.28|2.00|3.36|2.98|7.45','830|1 – 40|±10|0.69|0.37|0.88|0.62|1.22|1.17|1.78|2.53|2.29|4.18|3.39|9.13',
'845|1 – 40|±10|0.35|0.10|0.45|0.16|0.61|0.29|0.90|0.63|1.63|2.05|2.41|4.51')
$wd=@(11,16,10)+@(11.583)*12
$t=Tbl $s ($rows.Count+3) 15 17 $y $wd 7; $tt=$t.Table
for($r=1;$r -le $tt.Rows.Count;$r++){ for($c=1;$c -le 15;$c++){ $tf=$tt.Cell($r,$c).Shape.TextFrame; $tf.MarginTop=mm 0.7; $tf.MarginBottom=mm 0.7; $tf.MarginLeft=mm 0.3; $tf.MarginRight=mm 0.3; $tf.TextRange.ParagraphFormat.Alignment=2 } }
CT $tt 1 4 'Focus options' 8 $vTRUE $NAVY 2 | Out-Null
CT $tt 2 4 ("(conversion factor related to reference laser marked in red$LB" + 'left side - optimized for thin line / right side - optimized for high DOF)') 6.5 $vFALSE $MUTED 2 | Out-Null
$tr=CT $tt 1 1 'Pout and λ' 7.5 $vTRUE $NAVY 2; FmtChars $tr 2 3 $null $null 5.5; $tr.Characters(2,3).Font.Subscript=$vTRUE
$h3=@("λ`r[nm]","P_out`r[mW]","Δλ`r[nm]"); for($k=0;$k -lt 3;$k++){ $tr=CT $tt 3 ($k+1) $h3[$k] 7 $vTRUE $NAVY 2; $tr.Paragraphs(2).Font.Bold=$vFALSE; $tr.Paragraphs(2).Font.Color.RGB=$MUTED }
$opt=@('DLSE','DLE','DL','STD','TS1','TS2')
for($k=0;$k -lt 12;$k++){ $top = if($k%2 -eq 0){ $opt[[int][Math]::Floor($k/2)] } else { ' ' }; $tr=CT $tt 3 ($k+4) ($top+"`r"+$(if($k%2 -eq 0){'LT'}else{'DOF'})) 7 $vTRUE $NAVY 2; $tr.Paragraphs(2).Font.Bold=$vFALSE; $tr.Paragraphs(2).Font.Color.RGB=$MUTED }
for($i=0;$i -lt $rows.Count;$i++){ $c=$rows[$i].Split('|'); $ri=$i+4
  for($k=0;$k -lt 15;$k++){ $tr=CT $tt $ri ($k+1) $c[$k] 7 $(if($k -lt 2){$vTRUE}else{$vFALSE}) $(if($k -lt 2){$INK}else{$INK2}) 2
    if($c[0] -eq '660' -and $c[1] -eq '1 – 30' -and ($k -eq 9 -or $k -eq 10)){ CellFill $tt $ri ($k+1) $RED; $tr.Font.Color.RGB=$WHITE; $tr.Font.Bold=$vTRUE } }
  RowBorder $tt $ri 3 $RULE 0.5
  if($i % 2 -eq 1){ for($k=1;$k -le 15;$k++){ if(-not ($c[0] -eq '660' -and $c[1] -eq '1 – 30' -and ($k -eq 10 -or $k -eq 11))){ CellFill $tt $ri $k $ZEBRA } } } }
RowBorder $tt 3 3 $NAVY 1.2; RowBorder $tt 2 3 $NAVY 1.2
for($r=3;$r -le $tt.Rows.Count;$r++){ CellBorder $tt $r 3 4 $RULE 0.8 }
$tt.Cell(1,4).Merge($tt.Cell(1,15)); $tt.Cell(2,4).Merge($tt.Cell(2,15)); $tt.Cell(1,1).Merge($tt.Cell(2,3))
$y=(Bottom $t)+3
$b=Txt $s 17 $y 176 ('Foot Note / Abbreviations' + ("`r" + 'DLSE = Thin Line Super Enhanced · DLE = Thin Line Enhanced · DL = Thin Line · STD = Standard, good compromise for Line Thickness and Depth of Focus · LT = Line Thickness · DOF = Depth of Focus · TS1 = Enhanced Depth of Focus · TS2 = Enhanced Depth of Focus, higher factor')) 7 $vFALSE $INK2
$b.TextFrame.TextRange.Paragraphs(1).Font.Bold=$vTRUE

# =====================================================================
# SLIDE 6 — FOCUS RANGE / OPTICS + 04 MODULATION
# =====================================================================
$s=$pres.Slides.Add(6,12); Chrome $s 6
Box $s 17 37 86 22 $PANEL | Out-Null; Box $s 107 37 86 22 $PANEL | Out-Null
Txt $s 23 41 76 'Focussing range [mm]' 6.8 $vFALSE $MUTED | Out-Null; Txt $s 23 46 76 '50 – 5000' 20 $vTRUE $NAVY | Out-Null
Txt $s 113 41 76 'Focus' 6.8 $vFALSE $MUTED | Out-Null; Txt $s 113 46 76 'Fixed focus (fixed at factory to defined working distance) or adjustable focus' 8.8 $vFALSE $INK | Out-Null
Box $s 17 63 176 46 $PANEL | Out-Null
SubHead $s 22 66.5 160 'Line thickness' 'Liniendicke' | Out-Null
$lt=@(@('DLSE','Thin Line Super Enhanced'),@('DLE','Thin Line Enhanced'),@('DL','Thin Line'),@('STD','Standard, good compromise for Line Thickness and Depth of Focus'),@('TS1','Enhanced Depth of Focus'),@('TS2','Enhanced Depth of Focus, higher factor'))
for($k=0;$k -lt 6;$k++){ $x=22+$k*27.8; Box $s $x 74 26 23 $WHITE | Out-Null; Box $s $x 74 26 1 $(if($k -eq 3){$RED}else{$NAVY}) | Out-Null
  $b=Txt $s ($x+2) 77 22 ($lt[$k][0]+"`r"+$lt[$k][1]) 6.8 $vFALSE $INK2; $p=$b.TextFrame.TextRange.Paragraphs(1); $p.Font.Size=[single](10); $p.Font.Bold=$vTRUE; $p.Font.Color.RGB=$NAVY }
$g=Box $s 22 99.5 166 0.7 $NAVY; $g.Fill.TwoColorGradient(2,1); $g.Fill.ForeColor.RGB=$NAVY; $g.Fill.BackColor.RGB=$RED
Txt $s 22 101.5 80 'left side - optimized for thin line' 6.8 $vFALSE $MUTED | Out-Null; Txt $s 108 101.5 80 'right side - optimized for high DOF' 6.8 $vFALSE $MUTED 3 | Out-Null
SecHead $s 116 '04' 'Modulation Options' 'Modulation' | Out-Null
Txt $s 17 127 176 'The standard module comes without modulation and power adjustment.' 8.8 $vFALSE $INK2 | Out-Null
Box $s 17 134 86 52 $WHITE $RULE | Out-Null; Box $s 107 134 86 52 $WHITE $RULE | Out-Null
Img $s 'mod-digital.png' 19.5 135.5 81 | Out-Null; Img $s 'mod-analog.png' 109.5 135.5 81 | Out-Null
$t=Tbl $s 6 5 17 192 @(52,31,31,31,31) 8.3; $tt=$t.Table
for($r=1;$r -le 6;$r++){ for($c=2;$c -le 5;$c++){ $tt.Cell($r,$c).Shape.TextFrame.TextRange.ParagraphFormat.Alignment=2 } }
$tr=CT $tt 1 2 ("Digital Modulation`r" + '< 20 kHz active high and active low available 0 / 5 V' + ("`r" + '24 V Version available (0 / 24 V)')) 6.8 $vFALSE $MUTED 2; $tr.Paragraphs(1).Font.Bold=$vTRUE; $tr.Paragraphs(1).Font.Color.RGB=$NAVY; $tr.Paragraphs(1).Font.Size=[single](8.3)
$tr=CT $tt 1 4 ("Analog Modulation`r" + 'high/low by control wire 0 – 5 V') 6.8 $vFALSE $MUTED 2; $tr.Paragraphs(1).Font.Bold=$vTRUE; $tr.Paragraphs(1).Font.Color.RGB=$NAVY; $tr.Paragraphs(1).Font.Size=[single](8.3)
$hd=@('M active low','MI active high','D active low','DI active high'); for($k=0;$k -lt 4;$k++){ CT $tt 2 ($k+2) $hd[$k] 7.8 $vFALSE $MUTED 2 | Out-Null }
$md=@(@('Delay + Rise time (max.) [μs]','10','10','',''),@('On [V]','0 – 0.5','4.5 – 5','0','5'),@('Off [V]','4.5 – 5','0 – 0.5','5','0'),@('Linear range [V]','','','> 3','> 3'))
for($i=0;$i -lt 4;$i++){ for($k=0;$k -lt 5;$k++){ CT $tt ($i+3) ($k+1) $md[$i][$k] 8.3 $(if($k -eq 0){$vTRUE}else{$vFALSE}) $(if($k -eq 0){$INK}else{$INK2}) $(if($k -eq 0){1}else{2}) | Out-Null }; RowBorder $tt ($i+3) 3 $RULE 0.6 }
RowBorder $tt 1 3 $NAVY 1.2; RowBorder $tt 2 3 $NAVY 1.2
$tt.Cell(1,4).Merge($tt.Cell(1,5)); $tt.Cell(1,2).Merge($tt.Cell(1,3))

# =====================================================================
# SLIDE 7 — MODULATION COMBINATIONS
# =====================================================================
$s=$pres.Slides.Add(7,12); Chrome $s 7
SecHead $s 36 '04' 'Modulation Options' 'Kombinationen' | Out-Null
$b=Txt $s 17 47 176 'Available combinations of options M and D are listed in the table below. For the combined modulations (last four columns), the properties of the modulation components apply according to the columns of M, MI, D and DI. The standard module comes without modulation and power adjustment.' 8.8 $vFALSE $INK2
Img $s 'mod-combinations.png' 17 ((Bottom $b)+5) 176 | Out-Null

# =====================================================================
# SLIDE 8 — 05 MECHANICAL PROPERTIES
# =====================================================================
$s=$pres.Slides.Add(8,12); Chrome $s 8
SecHead $s 36 '05' 'Mechanical properties' 'Mechanische Eigenschaften' | Out-Null
$t=SpecTable $s 47 @(
 @('Housing material','Gehäusematerial','','Aluminum (blue anodised; potential free), IP67 Rating'),
 @('Housing size','Abmessungen','Ø=11,5 × Length',' (see product map for length --> depending on chosen features)'),
 @('Pin definition','Anschlussbelegung','Brown: +VDC, Blue: GND, Black: modulation',("$LB" + '3 core cable, 2 m length, wires tin-coated at ends | no wires for optical heads | 150mm cable between housing for 2H versions')),
 @('Laser class','Laserklasse','IEC 60825-1:2014, EN 60825-1:2014+A11:2021','')
)
$tv=$t.Table.Cell(1,2).Shape.TextFrame.TextRange; FmtChars $tv ($tv.Text.IndexOf('IP67')+1) 11 $vTRUE $INK
$y=(Bottom $t)+6
Box $s 17 $y 176 50 $PANEL | Out-Null
SubHead $s 22 ($y+4) 120 'Pin definition' 'Anschlussbelegung' | Out-Null
Txt $s 130 ($y+5) 58 'Schematic · not to scale' 6.5 $vFALSE $MUTED 3 | Out-Null
Img $s 'g-pin.png' 22 ($y+11) 166 | Out-Null
$y+=57
SubHead $s 17 $y 176 'Additional information' 'Weitere Angaben' | Out-Null
$t=SpecTable $s ($y+7) @(
 @('Shock tolerance','','30 G, 6 ms',("$LB" + '75 G, 4 ms')),
 @('Housing','','',("Standard, 2H (separate housing for optics and electronics) or OH (without electronics)$LB" + 'Fixed focus (fixed at factory to defined working distance) or adjustable focus')),
 @('Accessories available','(optional, order separately)','','Mount; Mobile power pack for modules ≥ 640 nm; Power supply for 5 V (≥ 640 nm); Power supply for 12 V')
)
$tv=$t.Table.Cell(1,2).Shape.TextFrame.TextRange; FmtChars $tv 1 $tv.Text.Length $vTRUE $INK
$fn=@('Output power: The output power is defined behind optics which means at the beam exit of the laser module',
 '5 V Option available (»StepUp« electronics 4.5 – 6 V) for 405 nm, 450 nm and 520 nm, no standard product but available on request',
 'Below 0 °C condensate formation must be avoided (due to optical and electronic components)',
 'Fan angle: Defined by the ends of the laser line using FWHM based on the average power (within 80 % of line)',
 'Line intensity variation and line straightness are measured at 80 % of the fan angle')
$b=Txt $s 17 ((Bottom $t)+4) 176 ($fn -join "`r") 7.2 $vFALSE $INK2; $b.TextFrame.TextRange.ParagraphFormat.SpaceAfter=[single](1.5)

# =====================================================================
# SLIDES 9–10 — 06 TECHNICAL DRAWINGS
# =====================================================================
function Drawing($s,$y,$photo,$name,$desc,$len,$img){
  $card=Box $s 17 $y 176 10 $WHITE $RULE
  Box $s 22 ($y+4) 17 17 $PANEL | Out-Null; ImgSq $s $photo 22 ($y+4) 17 17 | Out-Null
  Txt $s 44 ($y+7) 100 $name 13 $vTRUE $NAVY | Out-Null; Txt $s 44 ($y+13.5) 110 $desc 8.3 $vFALSE $INK2 | Out-Null
  Txt $s 140 ($y+6) 48 'Units: mm' 6.5 $vFALSE $MUTED 3 | Out-Null; Txt $s 120 ($y+11) 68 $len 13 $vTRUE $RED 3 | Out-Null
  Rule $s 22 ($y+24) 166 | Out-Null
  $p=Img $s $img 22 ($y+27) 166
  $card.Height=[single]($p.Top + $p.Height + (mm 4) - $card.Top)
  return (Bottom $card) }
$s=$pres.Slides.Add(9,12); Chrome $s 9
SecHead $s 36 '06' 'Technical drawing' 'Technische Zeichnung' | Out-Null
$y=Drawing $s 47 'product-a.png' 'MVnano ST-F' 'MVnano 2025 standard housing, focusable (ST-F)' '54 ±1' 'drawing-st-f.png'
$y=Drawing $s ($y+5) 'product-2h.png' 'MVnano 2H-F' 'MVnano 2025 with 2 housings, focusable (2H-F)' '29 ±1 · 38 ±1' 'drawing-2h-f.png'
$s=$pres.Slides.Add(10,12); Chrome $s 10
$y=Drawing $s 38 'product-b.png' 'MVnano ST-FIX' 'MVnano 2025 standard housing, fixed focus (ST-FIX)' '60 ±1' 'drawing-st-fix.png'
$b=Txt $s 17 ($y+3) 176 ('1For optimal heat dissipation in a mount, we recommend to apply thermal paste on the surface overlap.' + ("`r" + 'Units: mm')) 7.5 $vFALSE $INK2; $b.TextFrame.TextRange.Characters(1,1).Font.Superscript=$vTRUE
$y=(Bottom $b)+8
SubHead $s 17 $y 176 'Gehäuse Optionen' '' | Out-Null; $y+=8
$ho=@(@('FP-MVnano-25-ST','Standard Gehäuseoption bei der Optik und Elektronik zusammen in einem einzigen Gehäuse untergebracht sind (Standard, ST).'),@('FP-MVnano-25-OH','Gehäuse mit Optik ohne Elektronik (Optical Head, OH)'),@('FP-MVnano-25-2H','Bei dieser Gehäuseoption sind Optik und Elektronik jeweils in einem separaten Gehäuse untergebracht (2 Housing, 2H).'))
for($k=0;$k -lt 3;$k++){ $x=17+$k*59.3; Box $s $x $y 57.4 30 $PANEL | Out-Null
  $b=Txt $s ($x+4) ($y+4) 49.4 ($ho[$k][0]+"`r"+$ho[$k][1]) 7.8 $vFALSE $INK2; $b.TextFrame.TextRange.ParagraphFormat.SpaceAfter=[single](3); $p=$b.TextFrame.TextRange.Paragraphs(1); $p.Font.Size=[single](9.5); $p.Font.Bold=$vTRUE; $p.Font.Color.RGB=$NAVY }

# =====================================================================
# SLIDE 11 — 07 ORDERING CODE + CONTACT
# =====================================================================
$s=$pres.Slides.Add(11,12); Chrome $s 11
SecHead $s 36 '07' 'Ordering code' 'Bestellschlüssel' | Out-Null
$cols=@(@(26,'',''),@(17,"Housing","ST`r2H`rOH"),@(20,"Wavelength`r[nm]","405`r450`r520`r640`r660`r685`r785`r830`r845"),@(18,"Output`rPower`r[mW]","1 – 100`r1 – 75`r1 – 80`r1 – 100`r1 – 100`r1 – 40`r1 – 100`r1 – 80`r1 – 40"),
 @(38,"Modulation /`rPower Adjustment","M | Digital Modulation, active low`rMI | Digital Modulation inverted, active high`rD | Dimmable, active low`rDI | Dimmable inverted, active high"),
 @(14,"Fan`rAngle`r[°]","1`r5`r10`r15`r20`r30`r45`r60`r75`r90"),@(28,"Focus`r[mm]","F | Focusable`rFYYY | Prefocused to YYY mm, but still focusable`rFIXYYY | Fixed focus to YYY mm"),@(15,'Optics',"STD`rDL`rDLE`rDLSE`rTS1`rTS2"))
$x=17; $gap=0
foreach($c in $cols){ $w=$c[0]-1
  if($c[1]){ $b=Txt $s $x 49 $w $c[1] 7.2 $vFALSE $INK2 2 $false 15; $b.TextFrame.VerticalAnchor=4 }
  $bx=$s.Shapes.AddShape(5,(mm $x),(mm 65),(mm $w),(mm 9)); $bx.Adjustments.Item(1)=[single](0.12); $bx.Shadow.Visible=$vFALSE
  $tf=$bx.TextFrame; $tf.MarginLeft=0; $tf.MarginRight=0; $tr=$tf.TextRange
  if($c[1]){ $bx.Fill.ForeColor.RGB=$WHITE; $bx.Line.ForeColor.RGB=$NAVY; $bx.Line.Weight=[single](1); $tr.Text='X'; $tr.Font.Color.RGB=$RED; $tr.Font.Size=[single](11) } else { $bx.Fill.ForeColor.RGB=$NAVY; $bx.Line.Visible=$vFALSE; $tr.Text='FP-MVnano-25'; $tr.Font.Color.RGB=$WHITE; $tr.Font.Size=[single](8.5) }
  $tr.Font.Name=$FONT; $tr.Font.Bold=$vTRUE; $tr.ParagraphFormat.Alignment=2
  if($c[2]){ $al = $(if($c[2].Contains('|')){1}else{2}); $b=Txt $s $x 77 $w $c[2] 7.6 $vTRUE $NAVY $al; $trr=$b.TextFrame.TextRange; $trr.ParagraphFormat.SpaceAfter=[single](2)
    if($al -eq 1){ for($k=1;$k -le $trr.Paragraphs().Count;$k++){ $p=$trr.Paragraphs($k); $ix=$p.Text.IndexOf('|'); if($ix -gt 0){ $q=$p.Characters($ix+1,$p.Text.Length-$ix); $q.Font.Bold=$vFALSE; $q.Font.Color.RGB=$INK2 } } } }
  $x+=$c[0] }
Box $s 17 128 176 13 $PANEL | Out-Null
$b=Txt $s 23 131.5 165 'Example: FP-MVnano-25-ST-785-50M-30-F-DL' 11.5 $vTRUE $NAVY; FmtChars $b.TextFrame.TextRange 1 8 $vFALSE $MUTED 8.5
Txt $s 17 148 176 'Not all combinations which can be created by the ordering code above are possible. For the output power please refer to the table on page 3 (possible combinations wavelength and output power) and for Modulation refer to the table on page 7. Please contact us for any additional combinations you may require.' 8.8 $vFALSE $INK2 | Out-Null
# contact block
Box $s 17 232 176 42 $NAVY | Out-Null
Box $s 24 243 40 20 $WHITE | Out-Null; Img $s 'blau-logo.png' 28 246.2 32 | Out-Null
$c2=@('Telefon +49 (0) 7551/93748-0','Telefax +49 (0) 7551/93748-29','E-MAIL info@blauoptoelektronik.de','WEB www.blauoptoelektronik.de')
$c3=@('GESCHÄFTSFÜHRER Dr.-Ing. Ingmar Blau, Dipl.-Ing. (FH) Eugen Romasew','HANDELSREGISTER: Freiburg HRB 580681','UST-IDNR. DE 169489277','BANKVERBINDUNG Sparkasse Bodensee','IBAN DE 40 6905 0001 0001 0270 28','BIC/SWIFT SOLADES1KNZ')
foreach($blk in @(@(70,50,$c2),@(122,68,$c3))){ $b=Txt $s $blk[0] 238 $blk[1] ($blk[2] -join "`r") 7.2 $vFALSE (RGBc 201 214 230); $tr=$b.TextFrame.TextRange; $tr.ParagraphFormat.SpaceWithin=[single](1.25)
  $b.Top=[single]((mm 253) - $b.Height/2)
  for($k=1;$k -le $tr.Paragraphs().Count;$k++){ $p=$tr.Paragraphs($k); $lbl=@('Telefon','Telefax','E-MAIL','WEB','GESCHÄFTSFÜHRER','HANDELSREGISTER:','UST-IDNR.','BANKVERBINDUNG','IBAN','BIC/SWIFT') | ? { $p.Text.StartsWith($_) } | Select -First 1; if($lbl){ $q=$p.Characters(1,$lbl.Length); $q.Font.Bold=$vTRUE; $q.Font.Color.RGB=$WHITE } } }

# ---------------- save, export, dump ----------------
if(Test-Path $out){ Remove-Item $out -Force }
$pres.SaveAs($out,24)
$pres.SaveAs($pdf,32)
$sb=New-Object Text.StringBuilder
foreach($sl in $pres.Slides){ foreach($sh in $sl.Shapes){
  if($sh.HasTable){ $tb=$sh.Table; for($r=1;$r -le $tb.Rows.Count;$r++){ $cells=@(); for($c=1;$c -le $tb.Columns.Count;$c++){ $cells+=$tb.Cell($r,$c).Shape.TextFrame.TextRange.Text }; [void]$sb.AppendLine(($cells -join "`t")) } }
  elseif($sh.HasTextFrame -and $sh.TextFrame.HasText){ [void]$sb.AppendLine($sh.TextFrame.TextRange.Text) } } }
[IO.File]::WriteAllText($dump,$sb.ToString(),(New-Object Text.UTF8Encoding $true))
$n=$pres.Slides.Count
$pres.Close(); $app.Quit(); [Runtime.InteropServices.Marshal]::ReleaseComObject($app) | Out-Null
"saved: $out  slides: $n"
