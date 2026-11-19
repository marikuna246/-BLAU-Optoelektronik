# Checks that the EN and DE versions contain exactly the same numbers as the master datasheet
# (..\FP-MVpulse-25_Redesign\FP-MVpulse-25_Datasheet.html), block by block.
# Only words are translated; every value, tolerance, unit number and order code must be identical.
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$enc = [Text.Encoding]::UTF8
$master = [IO.File]::ReadAllText((Join-Path $here '..\FP-MVpulse-25_Redesign\FP-MVpulse-25_Datasheet.html'), $enc)
$files = @{ 'EN' = 'FP-MVpulse-25_Datasheet_EN.html'; 'DE' = 'FP-MVpulse-25_Datenblatt_DE.html' }

function Plain($s) { $s = $s -replace '<br\s*/?>|</li>|</td>|</th>', ' '; $s = [regex]::Replace($s, '<[^>]+>', ''); ([Net.WebUtility]::HtmlDecode($s) -replace [char]0xA0, ' ') }
function Nums($s) { ([regex]::Matches((Plain $s), '[<>≤±Ø]?\s?\d+(?:[.,]\d+)?') | ForEach-Object { $_.Value -replace '\s', '' }) -join ' ' }
function Blocks($h, $pattern) { [regex]::Matches($h, $pattern) | ForEach-Object { $_.Value } }

$checks = [ordered]@{
  'Basic/Beam/Mechanical values (table.spec td.v)' = '(?s)<td class="v">.*?</td>'
  'Specification matrix (table.wm)'                = '(?s)<table class="wm">.*?</table>'
  'Pulse factor table (table.pf)'                  = '(?s)<table class="pf"[^>]*>.*?</table>'
  'Focus factor table (table.ft tbody)'            = '(?s)<table class="ft">.*?</table>'
  'Key facts (.fact .v)'                           = '<div class="v">[^<]*</div>'
  'Wavelength chips'                               = '(?s)<div class="chips">.*?</div>\s*</div>'
  'Housing options'                                = '<div class="hopt">[^<]*</div>'
  'Ordering code lists'                            = '(?s)<div class="oc">.*?<div class="oc-ex">.*?</div>'
  'Drawing titles'                                 = '<div class="n">[^<]*</div>'
  'Output power chart (SVG labels)'                = '(?s)<svg viewBox="0 0 660 150".*?</svg>'
  'Housing size chart (SVG labels)'                = '(?s)<svg viewBox="0 0 640 214".*?</svg>'
  'Contact block'                                  = '(?s)<div class="contact">.*?<div class="ftr">'
}
$fail = 0
foreach ($lang in $files.Keys) {
  $h = [IO.File]::ReadAllText((Join-Path $here $files[$lang]), $enc)
  foreach ($name in $checks.Keys) {
    $a = (Blocks $master $checks[$name] | ForEach-Object { Nums $_ }) -join ' / '
    $b = (Blocks $h $checks[$name] | ForEach-Object { Nums $_ }) -join ' / '
    if ($a -eq $b -and $a) { "OK    [$lang] $name" } else { "DIFF  [$lang] $name`n      master: $a`n      $lang    : $b"; $fail++ }
  }
  # PC1 redraw: same pulse geometry data and the corrected values
  foreach ($must in @('0.9 ms','2.9 ms','15 ms')) {
    $alt = $must -replace '\.', ','
    if ((Plain $h).Contains($must) -or (Plain $h).Contains($alt)) { "OK    [$lang] PC1 value $must" } else { "MISS  [$lang] PC1 value $must"; $fail++ } }
  # old / wrong values must not appear
  foreach ($bad in @('Fokussabstand','defintion','stabillity','(1–90°)','0.94','continous','tbc','-DL-1-2x','780 nm')) {
    if ((Plain $h).Contains($bad)) { "OLD!  [$lang] '$bad' found"; $fail++ } }
  # page count
  $n = ([regex]::Matches($h, '<section class="page">')).Count
  if ($n -eq 14) { "OK    [$lang] 14 pages" } else { "DIFF  [$lang] $n pages"; $fail++ }
}
"`nTOTAL PROBLEMS: $fail"
