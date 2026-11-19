# Screenshots each datasheet page (?p=N) with headless Chrome -> extract/shot-pN.png
param([int[]]$Pages = (1..14))
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$uri = ([Uri](Join-Path $here 'FP-MVpulse-25_Datasheet.html')).AbsoluteUri
$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$prof = Join-Path $env:TEMP 'blau-datasheet-chrome-shots'
foreach ($p in $Pages) {
  $out = Join-Path $here "extract\shot-p$p.png"
  & $chrome --headless=new --disable-gpu --no-first-run --user-data-dir="$prof" --hide-scrollbars --force-device-scale-factor=1.5 --window-size=794,1123 --virtual-time-budget=8000 --screenshot="$out" "$uri`?p=$p" 2>$null | Out-Null
}
Get-ChildItem (Join-Path $here 'extract\shot-p*.png') | Select-Object Name, Length
