param([string]$Src,[string]$Pairs,[string]$Out)
$u=New-Object Text.UTF8Encoding($false)
$t=[IO.File]::ReadAllText($Src,$u); $miss=@()
foreach($l in [IO.File]::ReadAllLines($Pairs,$u)){ if($l.Trim() -eq ''){continue}; $i=$l.IndexOf(' ==> '); $a=$l.Substring(0,$i); $b=$l.Substring($i+5); if(-not $t.Contains($a)){ $miss+=$a } else { $t=$t.Replace($a,$b) } }
$t=[regex]::Replace($t,'page (\d+) of (\d+)','Seite $1 von $2')
[IO.File]::WriteAllText($Out,$t,$u)
"missing: $($miss.Count)"; $miss