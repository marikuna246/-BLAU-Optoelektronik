# Lokaler Vorschau-Server (nur localhost, nur lesend) für das Website-Redesign.
param([int]$Port = 8770)
if ($env:PORT) { $Port = [int]$env:PORT }
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$utf8 = New-Object Text.UTF8Encoding($false)
$types = @{ '.html'='text/html; charset=utf-8'; '.js'='application/javascript; charset=utf-8'; '.css'='text/css; charset=utf-8';
            '.png'='image/png'; '.jpg'='image/jpeg'; '.webp'='image/webp'; '.svg'='image/svg+xml'; '.ico'='image/x-icon'; '.pdf'='application/pdf'; '.mp4'='video/mp4'; '.txt'='text/plain; charset=utf-8' }
function Send($ctx, [int]$code, [string]$type, [byte[]]$bytes) {
  $r = $ctx.Response; $r.StatusCode = $code; $r.ContentType = $type; $r.Headers['Cache-Control'] = 'no-store'
  $r.ContentLength64 = $bytes.Length; $r.OutputStream.Write($bytes, 0, $bytes.Length)
}
$listener = New-Object Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "running: http://localhost:$Port/"
while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  try {
    $path = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath)
    if ($path -eq '/' -or $path -eq '') { $path = '/index.html' }
    $full = [IO.Path]::GetFullPath((Join-Path $root $path.TrimStart('/')))
    if (-not $full.StartsWith($root, [StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path $full -PathType Leaf)) { Send $ctx 404 'text/plain' $utf8.GetBytes('Not found'); continue }
    $type = $types[[IO.Path]::GetExtension($full).ToLower()]; if (-not $type) { $type = 'application/octet-stream' }
    Send $ctx 200 $type ([IO.File]::ReadAllBytes($full))
  } catch { try { Send $ctx 500 'text/plain' $utf8.GetBytes($_.Exception.Message) } catch {} }
  finally { try { $ctx.Response.Close() } catch {} }
}
