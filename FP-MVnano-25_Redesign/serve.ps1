# Local editor server for the datasheet (localhost only).
#   GET  /...            serves files from this folder
#   POST /api/save[?pdf=1]  writes the edited HTML (previous version -> backups\), runs verify-content.ps1,
#                           optionally re-renders the PDF via render-pdf.ps1
param([int]$Port = 8765)
if ($env:PORT) { $Port = [int]$env:PORT }   # preview launcher may assign a port
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$htmlName = 'FP-MVnano-25_Datasheet_Redesign.html'
$utf8 = New-Object Text.UTF8Encoding($false)

$types = @{ '.html'='text/html; charset=utf-8'; '.js'='application/javascript; charset=utf-8'; '.css'='text/css; charset=utf-8';
            '.png'='image/png'; '.jpg'='image/jpeg'; '.svg'='image/svg+xml'; '.pdf'='application/pdf'; '.json'='application/json'; '.md'='text/plain; charset=utf-8' }

function Send($ctx, [int]$code, [string]$type, [byte[]]$bytes) {
  $r = $ctx.Response
  $r.StatusCode = $code; $r.ContentType = $type
  $r.Headers['Cache-Control'] = 'no-store'
  $r.ContentLength64 = $bytes.Length
  $r.OutputStream.Write($bytes, 0, $bytes.Length)
}
function SendJson($ctx, $obj, [int]$code = 200) { Send $ctx $code 'application/json; charset=utf-8' $utf8.GetBytes(($obj | ConvertTo-Json -Depth 4 -Compress)) }

$listener = New-Object Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "Datasheet editor running: http://localhost:$Port/"

while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  try {
    $req = $ctx.Request
    $path = [Uri]::UnescapeDataString($req.Url.AbsolutePath)

    if ($req.HttpMethod -eq 'POST' -and $path -eq '/api/save') {
      $reader = New-Object IO.StreamReader($req.InputStream, [Text.Encoding]::UTF8)
      $body = $reader.ReadToEnd(); $reader.Close()
      if ($body -notmatch '^<!doctype html' -or $body -notmatch '</html>\s*$' -or $body.Length -lt 5000) {
        SendJson $ctx @{ ok = $false; error = 'Ungültiger Inhalt – nicht gespeichert.' } 400; continue
      }
      $target = Join-Path $root $htmlName
      $bk = Join-Path $root 'backups'
      if (-not (Test-Path $bk)) { New-Item -ItemType Directory $bk | Out-Null }
      Copy-Item $target (Join-Path $bk ("FP-MVnano-25_Datasheet_Redesign_{0}.html" -f (Get-Date -Format 'yyyyMMdd-HHmmss')))
      [IO.File]::WriteAllText($target, $body, $utf8)

      $out = & (Join-Path $root 'verify-content.ps1')
      $details = @($out | Where-Object { $_ -match '^(MISS|OLD!)' } | ForEach-Object { ($_ -replace '^(MISS|OLD!)\s+', '') })
      $checked = 0; if (($out | Select-Object -Last 1) -match '(\d+) strings checked') { $checked = [int]$Matches[1] }

      $pdfOk = $null
      if ($req.Url.Query -match 'pdf=1') {
        $pdfPath = Join-Path $root 'FP-MVnano-25_Datasheet_Redesign.pdf'
        $before = if (Test-Path $pdfPath) { (Get-Item $pdfPath).LastWriteTimeUtc } else { [datetime]::MinValue }
        $p = Start-Process powershell -ArgumentList @('-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', ('"{0}"' -f (Join-Path $root 'render-pdf.ps1'))) -WindowStyle Hidden -PassThru -Wait
        $pdfOk = (Test-Path $pdfPath) -and ((Get-Item $pdfPath).LastWriteTimeUtc -gt $before)
      }
      SendJson $ctx @{ ok = $true; checked = $checked; problems = $details.Count; details = $details; pdf = $pdfOk }
      Write-Host ("saved {0}  problems={1}  pdf={2}" -f (Get-Date -Format 'HH:mm:ss'), $details.Count, $pdfOk)
      continue
    }

    if ($req.HttpMethod -ne 'GET') { Send $ctx 405 'text/plain' $utf8.GetBytes('Method not allowed'); continue }
    if ($path -eq '/' -or $path -eq '') { $ctx.Response.Redirect("/$htmlName"); continue }

    $full = [IO.Path]::GetFullPath((Join-Path $root $path.TrimStart('/')))
    if (-not $full.StartsWith($root, [StringComparison]::OrdinalIgnoreCase) -or $full -match '\\backups\\' -or -not (Test-Path $full -PathType Leaf)) {
      Send $ctx 404 'text/plain' $utf8.GetBytes('Not found'); continue
    }
    $ext = [IO.Path]::GetExtension($full).ToLower()
    $type = $types[$ext]; if (-not $type) { $type = 'application/octet-stream' }
    Send $ctx 200 $type ([IO.File]::ReadAllBytes($full))
  } catch {
    try { SendJson $ctx @{ ok = $false; error = $_.Exception.Message } 500 } catch {}
    Write-Host "error: $($_.Exception.Message)"
  } finally {
    try { $ctx.Response.Close() } catch {}
  }
}
