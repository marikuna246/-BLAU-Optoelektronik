# Renders the EN and DE versions to print-ready A4 PDFs (headless Chrome); -Shots also writes page previews to shots\.
param([switch]$Shots)
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$prof = Join-Path $env:TEMP 'blau-datasheet-chrome'
foreach ($name in 'FP-MVpulse-25_Datasheet_EN','FP-MVpulse-25_Datenblatt_DE') {
  $uri = ([Uri](Join-Path $here "$name.html")).AbsoluteUri
  & $chrome --headless=new --disable-gpu --no-first-run --user-data-dir="$prof" --no-pdf-header-footer --virtual-time-budget=20000 --print-to-pdf="$(Join-Path $here "$name.pdf")" $uri 2>$null | Out-Null
  if ($Shots) {
    $sd = Join-Path $here 'shots'; New-Item -ItemType Directory -Force $sd | Out-Null
    foreach ($p in 1..14) { & $chrome --headless=new --disable-gpu --no-first-run --user-data-dir="$prof-shots" --hide-scrollbars --force-device-scale-factor=1.5 --window-size=794,1123 --virtual-time-budget=8000 --screenshot="$(Join-Path $sd "$name-p$p.png")" "$uri`?p=$p" 2>$null | Out-Null }
  }
}
Start-Sleep -Milliseconds 500
Get-ChildItem (Join-Path $here '*.pdf') | Select-Object Name, Length, LastWriteTime
