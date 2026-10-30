Add-Type -AssemblyName System.Speech
$dir = $PSScriptRoot
$lines = Get-Content -Raw -Encoding UTF8 "$dir\narration.json" | ConvertFrom-Json
$s = New-Object System.Speech.Synthesis.SpeechSynthesizer
$s.SelectVoice("Microsoft Zira Desktop")
$s.Rate = -1
$i = 1
foreach ($l in $lines) {
  $f = "{0}\narr_{1:D2}.wav" -f $dir, $i
  $s.SetOutputToWaveFile($f)
  $s.Speak($l)
  $i++
}
$s.SetOutputToNull()
$s.Dispose()
Write-Output "done $($i-1)"
