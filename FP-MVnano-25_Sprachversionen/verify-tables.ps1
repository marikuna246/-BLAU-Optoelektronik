# Verifies that the generated focus-factor table matches the v2 source table and that the
# modulation-combination table matches the LASER COMPONENTS datasheet (p.5) text, in both language versions.
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$prof = Join-Path $env:TEMP 'blau-datasheet-chrome'
function Cells($html, $tbodyId) {
  $m = [regex]::Match($html, '(?s)<tbody id="' + $tbodyId + '">(.*?)</tbody>')
  $rows = [regex]::Matches($m.Groups[1].Value, '(?s)<tr>(.*?)</tr>')
  foreach ($r in $rows) {
    $c = [regex]::Matches($r.Groups[1].Value, '(?s)<td[^>]*>(.*?)</td>') | ForEach-Object {
      $t = $_.Groups[1].Value
      $mark = if ($t -match 'sq std') { 'S ' } elseif ($t -match 'sq mod') { 'M ' } else { '' }
      $mark + ([regex]::Replace($t, '<[^>]+>', '')).Trim()
    }
    ($c -join ' | ')
  }
}

# reference 1: focus rows from v2 source HTML
$v2 = [IO.File]::ReadAllText((Join-Path $here '..\FP-MVnano-25_Redesign_v2\FP-MVnano-25_Datasheet.html'), [Text.Encoding]::UTF8)
$v2 = $v2 -replace '(?s)(<table class="ft">.*?)<tbody>', '$1<tbody id="focus-rows">'
$refFocus = @(Cells $v2 'focus-rows')

# reference 2: modulation table, transcribed from LC datasheet p.5 text layer (S = standard, M = with modification)
$refMod = @(
 '405 | 1 – 25 | 10 – 30 | S a | S b, e | M a, d | – | M a, a, d | M b, e, a, d | S a | S b, e',
 '405 | 1 – 25 | 4.5 – 6 | S a, e | S b, e | – | – | – | – | – | –',
 '405 | 25 – 100 | 10 – 30 | S a, e | S b, e | M c | M b, d | M a, e, c | M b, e, c | M a, e, b, d | M b, e, b, d',
 '405 | 25 – 100 | 4.5 – 6 | S a, e | S b, e | M c | – | M a, e, c | M b, e, c | – | –',
 '450 | 1 – 75 | 10 – 30 | S a, e | S b, e | M c | M b, c, d | M a, e, c | M b, e, c | M a, e, b, c, d | M b, e, b, c, d',
 '450 | 1 – 75 | 4.5 – 6 | S a, e | S a, e | S b, e | M b, c | S a, e, b, e | S a, e, b, e | M a, e, b, c | M a, e, b, c',
 '520 | 1 – 8 | 10 – 30 | S a, e | S b, e | S a | M b, c | S a, e, a | S b, e, a | M a, e, b, c | M b, e, b, c',
 '520 | 1 – 8 | 4.5 – 6 | S a, e | S b, e | S a | M c | S a, e, a | S b, e, a | M a, e, c | M b, e, c',
 '520 | 9 – 45 | 10 – 30 | S a, e | S b, e | S a | M b, c | S a, e, a | S b, e, a | M a, e, b, c | M b, e, b, c',
 '520 | 9 – 45 | 4.5 – 6 | S a, e | S b, e | S a | M c | S a, e, a | S b, e, a | M a, e, c | M b, e, c',
 '520 | 45 – 80 | 10 – 30 | S a, e | S b, e | M c | – | M a, e, c | M b, e, c | – | –',
 '520 | 45 – 80 | 4.5 – 6 | S a, e | S b, e | M c | – | M a, e, c | M b, e, c | – | –',
 '640 | 1 – 20 | 4.5 – 30 | S a | S e | S a | M c, d | S a, a | S e, a | M a, c, d | M e, c, d',
 '640 | 20 – 100 | 4.5 – 30 | S a, e | S b, e | M c | M b, c, d | M a, e, c | M b, e, c | M a, e, b, c, d | M b, e, b, c, d',
 '660 | 1 – 30 | 4.5 – 30 | S a | S e | S a | M c, d | S a, a | S e, a | M a, c, d | M e, c, d',
 '660 | 30 – 100 | 4.5 – 30 | S a, e | S b, e | M c | M b, c, d | M a, e, c | M b, e, c | M a, e, b, c, d | M b, e, b, c, d',
 '685 | 1 – 40 | 4.5 – 30 | S a | S e | S a | M c, d | S a, a | S e, a | M a, c, d | M e, c, d',
 '785 | 1 – 9 | 4.5 – 30 | S a | S e | S a | M c, d | S a, a | S e, a | M a, c, d | M e, c, d',
 '785 | 10 – 100 | 4.5 – 30 | S a, e | S b, e | M c | M b, c, d | M a, e, c | M b, e, c | M a, e, b, c, d | M b, e, b, c, d',
 '830 | 1 – 180 | 4.5 – 30 | S a, e | S b, e | M c | M b, c, d | M a, e, c | M b, e, c | M a, e, b, c, d | M b, e, b, c, d',
 '845 | 1 – 40 | 4.5 – 30 | S a | S e | S a | M c, d | S a, a | S e, a | M a, c, d | M e, c, d'
)

$fail = 0
foreach ($name in 'FP-MVnano-25_Datasheet_EN', 'FP-MVnano-25_Datenblatt_DE') {
  $uri = ([Uri](Join-Path $here "$name.html")).AbsoluteUri
  $tmp = Join-Path $env:TEMP "blau-dom-$name.html"
  Start-Process $chrome -ArgumentList @('--headless=new', '--disable-gpu', '--no-first-run', "--user-data-dir=$prof-dom", '--virtual-time-budget=8000', '--dump-dom', $uri) `
    -RedirectStandardOutput $tmp -RedirectStandardError "$tmp.err" -Wait -NoNewWindow
  $dom = [IO.File]::ReadAllText($tmp, [Text.Encoding]::UTF8)
  $f = @(Cells $dom 'focus-rows'); $m = @(Cells $dom 'mod-rows')
  $df = Compare-Object $refFocus $f -SyncWindow 0; $dm = Compare-Object $refMod $m -SyncWindow 0
  $refCell = ([regex]::Matches($dom, 'class="lt ref"|class="dof ref"')).Count
  "{0}: focus rows {1}/{2} ({3} diffs), modulation rows {4}/{5} ({6} diffs), red reference cells {7}" -f $name, $f.Count, $refFocus.Count, @($df).Count, $m.Count, $refMod.Count, @($dm).Count, $refCell
  if (@($df).Count -or @($dm).Count -or $refCell -ne 2) { $fail++; $df; $dm }

  # layout: free space (px) between content and footer on each page; negative = overflow
  Start-Process $chrome -ArgumentList @('--headless=new', '--disable-gpu', '--no-first-run', "--user-data-dir=$prof-dom", '--virtual-time-budget=10000', '--dump-dom', "$uri#measure") `
    -RedirectStandardOutput $tmp -RedirectStandardError "$tmp.err" -Wait -NoNewWindow
  $free = [regex]::Match([IO.File]::ReadAllText($tmp, [Text.Encoding]::UTF8), 'data-free-space="([^"]*)"').Groups[1].Value
  "  free space per page [px]: $free"
  if (-not $free -or $free -match ':-') { $fail++; "  LAYOUT PROBLEM" }
}
if ($fail) { "FAILED" } else { "ALL TABLES MATCH" }
