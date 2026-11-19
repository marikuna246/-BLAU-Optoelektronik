# Renders the datasheets to print-ready A4 PDFs (headless Chrome).
#   -Shots      also writes page previews to shots\
#   -Only name  renders just one document (file name without .html)
param([switch]$Shots, [string]$Only, [switch]$NoPdf)
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$prof = Join-Path $env:TEMP 'blau-datasheet-chrome'
$docs = 'MVpulseHP_Datasheet_EN','MVpulseHP_Datenblatt_DE','FP-MVgoldHP_Datasheet_EN','FP-MVgoldHP_Datenblatt_DE'
if ($Only) { $docs = @($Only) }
foreach ($name in $docs) {
  $html = Join-Path $here "$name.html"; if (-not (Test-Path $html)) { continue }
  $uri = ([Uri]$html).AbsoluteUri
  if (-not $NoPdf) {
    & $chrome --headless=new --disable-gpu --no-first-run --user-data-dir="$prof" --no-pdf-header-footer --virtual-time-budget=20000 --print-to-pdf="$(Join-Path $here "$name.pdf")" $uri 2>$null | Out-Null
  }
  if ($Shots) {
    $sd = Join-Path $here 'shots'; New-Item -ItemType Directory -Force $sd | Out-Null
    $n = ([regex]::Matches([IO.File]::ReadAllText($html), '<section class="page')).Count
    foreach ($p in 1..$n) { & $chrome --headless=new --disable-gpu --no-first-run --user-data-dir="$prof-shots" --hide-scrollbars --force-device-scale-factor=1.25 --window-size=794,1123 --virtual-time-budget=8000 --screenshot="$(Join-Path $sd "$name-p$p.png")" "$uri`?p=$p" 2>$null | Out-Null }
  }
}
Start-Sleep -Milliseconds 500
Get-ChildItem (Join-Path $here '*.pdf') | Select-Object Name, Length, LastWriteTime
