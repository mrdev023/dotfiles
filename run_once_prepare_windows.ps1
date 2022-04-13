# Self-elevate the script if required
if (-Not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] 'Administrator')) {
  $CommandLine = "-NoExit -File `"" + $MyInvocation.MyCommand.Path + "`" " + $MyInvocation.UnboundArguments
  Start-Process -FilePath PowerShell.exe -Verb Runas -ArgumentList $CommandLine
  Exit
}

$appDatasToSymlink = 'gitui'
Foreach ($item in $appDatasToSymlink) {
  $config_folder = "$env:USERPROFILE\.config\$item"
  $symlink_folder = "$env:APPDATA\$item"
  if (Test-Path $symlink_folder) {
    Remove-Item -Recurse $symlink_folder
  }
  New-Item -Path $symlink_folder -ItemType SymbolicLink -Value $config_folder
}

# Install required packages with winget
winget install alacritty
