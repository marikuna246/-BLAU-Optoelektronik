# Renders FP-MVpulse-25_Datasheet.html to a print-ready A4 PDF using headless Chrome.
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$html = Join-Path $here 'FP-MVpulse-25_Datasheet.html'
$pdf  = Join-Path $here 'FP-MVpulse-25_Datasheet_BLAU.pdf'
$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$prof = Join-Path $env:TEMP 'blau-datasheet-chrome'
& $chrome --headless=new --disable-gpu --no-first-run --user-data-dir="$prof" --no-pdf-header-footer --virtual-time-budget=20000 --print-to-pdf="$pdf" ([Uri]$html).AbsoluteUri 2>$null | Out-Null
Start-Sleep -Milliseconds 500
Get-Item $pdf | Select-Object Name, Length, LastWriteTime
