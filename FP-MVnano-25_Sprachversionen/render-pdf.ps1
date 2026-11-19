# Renders the EN and DE datasheets to print-ready A4 PDFs using headless Chrome.
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$prof = Join-Path $env:TEMP 'blau-datasheet-chrome'
foreach ($name in 'FP-MVnano-25_Datasheet_EN', 'FP-MVnano-25_Datenblatt_DE') {
  $html = Join-Path $here "$name.html"
  $pdf  = Join-Path $here "$name.pdf"
  & $chrome --headless=new --disable-gpu --no-first-run --user-data-dir="$prof" --no-pdf-header-footer --virtual-time-budget=15000 --print-to-pdf="$pdf" ([Uri]$html).AbsoluteUri 2>$null | Out-Null
  Get-Item $pdf | Select-Object Name, Length, LastWriteTime
}
