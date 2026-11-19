# Local helper server (localhost only) for the FP-MVpulse-25 redesign.
#   GET  /...                       serves files from this folder
#   POST /api/put?name=extract/x.png  saves the request body (base64 for .png, text otherwise) below extract/ or assets/
param([int]$Port = 8766)
if ($env:PORT) { $Port = [int]$env:PORT }
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$utf8 = New-Object Text.UTF8Encoding($false)
$types = @{ '.html'='text/html; charset=utf-8'; '.js'='application/javascript; charset=utf-8'; '.css'='text/css; charset=utf-8';
            '.png'='image/png'; '.jpg'='image/jpeg'; '.svg'='image/svg+xml'; '.pdf'='application/pdf'; '.json'='application/json'; '.txt'='text/plain; charset=utf-8' }
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
    $req = $ctx.Request
    $path = [Uri]::UnescapeDataString($req.Url.AbsolutePath)
    if ($req.HttpMethod -eq 'POST' -and $path -eq '/api/put') {
      $name = $req.QueryString['name']
      if ($name -notmatch '^(extract|assets)/[A-Za-z0-9._-]+$') { Send $ctx 400 'text/plain' $utf8.GetBytes('bad name'); continue }
      $reader = New-Object IO.StreamReader($req.InputStream, [Text.Encoding]::UTF8); $body = $reader.ReadToEnd(); $reader.Close()
      $target = Join-Path $root $name
      if ($name -match '\.png$') { [IO.File]::WriteAllBytes($target, [Convert]::FromBase64String($body)) } else { [IO.File]::WriteAllText($target, $body, $utf8) }
      Send $ctx 200 'text/plain' $utf8.GetBytes('ok'); continue
    }
    if ($path -eq '/' -or $path -eq '') { $path = '/FP-MVpulse-25_Datasheet.html' }
    $full = [IO.Path]::GetFullPath((Join-Path $root $path.TrimStart('/')))
    if (-not $full.StartsWith($root, [StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path $full -PathType Leaf)) { Send $ctx 404 'text/plain' $utf8.GetBytes('Not found'); continue }
    $type = $types[[IO.Path]::GetExtension($full).ToLower()]; if (-not $type) { $type = 'application/octet-stream' }
    Send $ctx 200 $type ([IO.File]::ReadAllBytes($full))
  } catch { try { Send $ctx 500 'text/plain' $utf8.GetBytes($_.Exception.Message) } catch {} }
  finally { try { $ctx.Response.Close() } catch {} }
}
