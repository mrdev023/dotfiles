if (-Not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] 'Administrator')) {
  # Install required packages with winget
  winget install alacritty gitui

  # Install other packages with scoop because not available in winget
  try{
    Get-Command -Name scoop -ErrorAction Stop
  }
  catch{
    Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
  }

  scoop install neovim

  # Install fonts
  scoop bucket add nerd-fonts
  scoop install FiraCode-NF FiraCode-NF-Mono FiraMono-NF FiraCode-Script FiraCode Delugia-Nerd-Font-Complete Delugia-Mono-Nerd-Font-Complete Cascadia-Code CascadiaCode-NF CascadiaCode-NF-Mono

  $CommandLine = "-File `"" + $MyInvocation.MyCommand.Path + "`" " + $MyInvocation.UnboundArguments
  Start-Process -FilePath PowerShell.exe -Verb Runas -ArgumentList $CommandLine
  Start-Sleep -Seconds 1
} else {
  try {
    $appDatasToSymlink = 'gitui'
    Foreach ($item in $appDatasToSymlink) {
      $config_folder = "$env:USERPROFILE\.config\$item"
      $symlink_folder = "$env:APPDATA\$item"
      New-Item -Force -Path $symlink_folder -ItemType SymbolicLink -Value $config_folder
    }
    $localAppDatasToSymlink = 'nvim'
    Foreach ($item in $localAppDatasToSymlink) {
      $config_folder = "$env:USERPROFILE\.config\$item"
      $symlink_folder = "$env:LOCALAPPDATA\$item"
      New-Item -Force -Path $symlink_folder -ItemType SymbolicLink -Value $config_folder
    }
    Exit
  } catch {
    Start-Sleep -Seconds 10
  }
}