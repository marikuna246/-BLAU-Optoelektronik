# Renders the redesigned datasheet HTML to a print-ready A4 PDF using headless Chrome.
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$html = Join-Path $here 'FP-MVnano-25_Datasheet_Redesign.html'
$pdf  = Join-Path $here 'FP-MVnano-25_Datasheet_Redesign.pdf'
$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$uri = ([Uri]$html).AbsoluteUri
$prof = Join-Path $env:TEMP 'blau-datasheet-chrome'
& $chrome --headless=new --disable-gpu --no-first-run --user-data-dir="$prof" --no-pdf-header-footer --virtual-time-budget=15000 --print-to-pdf="$pdf" $uri | Out-Null
Start-Sleep -Milliseconds 500
Get-Item $pdf | Select-Object Name, Length, LastWriteTime
