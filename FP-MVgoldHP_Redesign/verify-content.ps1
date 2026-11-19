# Content check: every numeric value of the source documents must appear in the redesigned EN datasheet,
# and the DE version must contain exactly the same numeric tokens as the EN version.
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$u = New-Object Text.UTF8Encoding($false)
function PlainHtml($path){
  $t = [IO.File]::ReadAllText($path, $u)
  $t = [regex]::Replace($t, '(Diagramm|Bild|Zeichnungs)beschriftung( Abb\. 1 und 2)?:[^<]*', ' ')   # DE-only legends for English labels inside original images
  $t = [regex]::Replace($t, '(?s)<svg width="0".*?</svg>', ' ')          # icon sprite
  $t = [regex]::Replace($t, '(?s)<(script|style|title)[^>]*>.*?</\1>', ' ')
  $t = [regex]::Replace($t, '(?s)<!--.*?-->', ' ')
  $t = [regex]::Replace($t, '<sub>', ' ')
  $t = [regex]::Replace($t, '<[^>]+>', ' ')
  $t = $t.Replace('&nbsp;',' ').Replace('&lt;','<').Replace('&gt;','>').Replace('&amp;','&')
  return ([regex]::Replace($t, '\s+', ' '))
}
function SrcText($file, [int]$maxY){
  $lines = [IO.File]::ReadAllLines((Join-Path $here "extract\$file"), $u) | Where-Object { $_ -match '^\[y(\d+)\]' -and [int]$Matches[1] -lt $maxY }
  $t = ($lines | ForEach-Object { [regex]::Replace(($_ -replace '^\[y\d+\]\s*',''), '\(x\d+\)', ' ') }) -join ' '
  return ([regex]::Replace($t, '\s+', ' '))
}
$numRx = '\d+(?:[.,]\d+)*'
function Tokens($s){ [regex]::Matches($s, $numRx) | ForEach-Object { $_.Value } }
$report = @(); $fail = 0
function Check($label, $src, $dst){
  $miss = @(); foreach($tok in (Tokens $src | Sort-Object -Unique)){ if(-not [regex]::IsMatch($dst, "(?<![\d.,])$([regex]::Escape($tok))(?![\d])")){ $miss += $tok } }
  $script:report += "{0,-48} {1,4} distinct values, missing: {2}" -f $label, (Tokens $src | Sort-Object -Unique).Count, ($(if($miss){$miss -join ', '}else{'none'}))
  $img = @('0.02','0.05','120','1200','140','1400','1500','160','1600','180','1800','19.0','200','2000','2500','3000','35','3500','4.5','4.8','400','4000','4500','600','70','800','9.0','90')
  $inImg = @($miss | Where-Object { $img -contains $_ }); $miss = @($miss | Where-Object { $img -notcontains $_ })
  if($inImg){ $script:report[-1] = ("{0,-48} {1,4} distinct values, missing as text: {2} | contained in original chart/drawing images: {3}" -f $label, (Tokens $src | Sort-Object -Unique).Count, ($(if($miss){$miss -join ', '}else{'none'})), ($inImg -join ', ')) }
  if($miss){ $script:fail++ }
}
# --- MVpulseHP: LC datasheet (contact lines y>=750 excluded) + white paper (y<750, side text excluded by x>=59 not needed: tokens only)
$pulseEN = PlainHtml (Join-Path $here 'MVpulseHP_Datasheet_EN.html')
$lc = SrcText 'lc.txt' 750
$wp = SrcText 'wp.txt' 750
# drop the page-margin reference strings of the source PDFs (document codes) — they are reproduced on the last page as text
Check 'MVpulseHP EN  <- LASER COMPONENTS datasheet' $lc $pulseEN
Check 'MVpulseHP EN  <- White Paper' $wp $pulseEN
# --- FP-MVgoldHP: BLAU datasheet incl. company block
$goldEN = PlainHtml (Join-Path $here 'FP-MVgoldHP_Datasheet_EN.html')
$ds = SrcText 'ds.txt' 830
$ds = $ds -replace 'page \d of \d',' '
Check 'FP-MVgoldHP EN <- BLAU datasheet' $ds $goldEN
# --- EN vs DE: identical numeric token multiset (after removing the page counters)
foreach($pair in @(@('MVpulseHP_Datasheet_EN','MVpulseHP_Datenblatt_DE'),@('FP-MVgoldHP_Datasheet_EN','FP-MVgoldHP_Datenblatt_DE'))){
  $a = (PlainHtml (Join-Path $here "$($pair[0]).html")) -replace 'page \d+ of \d+',' '
  $b = (PlainHtml (Join-Path $here "$($pair[1]).html")) -replace 'Seite \d+ von \d+',' '
  $ta = @(Tokens $a | ForEach-Object { $_ -replace ',', '.' }) | Sort-Object; $tb = @(Tokens $b | ForEach-Object { $_ -replace ',', '.' }) | Sort-Object
  $diff = Compare-Object $ta $tb
  $script:report += "{0,-48} EN {1} / DE {2} numeric tokens, differences: {3}" -f "$($pair[1]) vs EN", $ta.Count, $tb.Count, ($(if($diff){($diff | ForEach-Object { "$($_.InputObject)$($_.SideIndicator)" }) -join ', '}else{'none'}))
  if($diff){ $script:fail++ }
}
# --- critical verbatim strings (EN)
$must = @{
 'MVpulseHP_Datasheet_EN' = @('FP-MVpulseHP-ST-660-500MI-60-F-STD','IEC 60825-1:2014, EN 60825-1:2014+A11:2021','RS-232 (0 – 5 V) (optional RS-485)','≤ 4 kHz','20 µs – 20 ms','0 – 10 %','500 – 1000','300 – 500','Baudrate = 115200 1/s','#000setserial255','getIdcurrent','#000getldcurrent','34.0°C','30 G, 6 ms','75 G, 4 ms','Clamping','FLEXPOINT');
 'FP-MVgoldHP_Datasheet_EN' = @('445nm ±10nm at 25°C','525nm ±7nm at 25°C','638nm ±7nm at 25°C','660nm ±7nm at 25°C','808nm ±10nm at 25°C','500mW - 2W','300mW - 1W','20-24V','≤ 4A@20V','0 Hz - 1 MHz','Pulse length > 500 ns','Delay + rise time < 200ns','≤ 10μrad/K','Ø48x146mm ±1mm','Pin4-Pin8: Reserved','3B/4 (IEC 60825-1:2014, EN 60825-1:2014+A11:2021)','setserial[1-255]','< 450g','03.07.2025','HRB 580681','DE 169489277','DE 40 6905 0001 0001 0270 28','SOLADES1KNZ')
}
foreach($k in $must.Keys){ $t = PlainHtml (Join-Path $here "$k.html"); $m = $must[$k] | Where-Object { -not $t.Contains($_) }
  $script:report += "{0,-48} {1} verbatim strings, missing: {2}" -f "$k (verbatim)", $must[$k].Count, ($(if($m){$m -join ' | '}else{'none'})); if($m){ $script:fail++ } }
$report
"RESULT: $(if($fail){"$fail check(s) with findings"}else{'all checks passed'})"
