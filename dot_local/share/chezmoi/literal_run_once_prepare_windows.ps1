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
    $appToSymlink = @(
      @{
        Name = 'gitui';
        Path = "$env:APPDATA";
      },
      @{
        Name = 'nvim';
        Path = "$env:LOCALAPPDATA";
      }
    )
    Foreach ($item in $appToSymlink) {
      $symlink_folder = $item.Path + '\' + $item.Name
      $name = $item.Name
      $config_folder = "$env:USERPROFILE\.config\$name"
      New-Item -Force -Path $symlink_folder -ItemType SymbolicLink -Value $config_folder
    }
    Exit
  } catch {
    Start-Sleep -Seconds 10
  }
}