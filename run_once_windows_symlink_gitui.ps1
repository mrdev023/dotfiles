# Self-elevate the script if required
if (-Not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] 'Administrator')) {
  $CommandLine = "-NoExit -File `"" + $MyInvocation.MyCommand.Path + "`" " + $MyInvocation.UnboundArguments
  Start-Process -FilePath PowerShell.exe -Verb Runas -ArgumentList $CommandLine
  Exit
}

$config_folder = "$env:USERPROFILE\.config\\gitui"
$symlink_folder = "$env:APPDATA\gitui"
if (Test-Path $symlink_folder) {
  Remove-Item -Recurse $symlink_folder
}

New-Item -Path $symlink_folder -ItemType SymbolicLink -Value $config_folder
Start-Sleep -Seconds 5