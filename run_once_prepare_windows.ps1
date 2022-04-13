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
winget install alacritty gitui

# Install other packages with scoop because not available in winget
Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')

scoop install neovim

# Install fonts
scoop bucket add nerd-fonts
scoop install FiraCode-NF FiraCode-NF-Mono FiraMono-NF FiraCode-Script FiraCode Delugia-Nerd-Font-Complete Delugia-Mono-Nerd-Font-Complete Cascadia-Code CascadiaCode-NF CascadiaCode-NF-Mono