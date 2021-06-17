# Make tab act like bash
Set-PSReadlineKeyHandler -Key Tab -Function Complete

# Disable tab completion bell
Set-PSReadlineOption -BellStyle None

# Aliases
Set-Alias c code-insiders.cmd

# Import-Module posh-git

# Add bin to $Path
# $vParentPath = Split-Path $PSScriptRoot -Parent
# $vBinPath = Join-Path -Path $vParentPath -ChildPath "data\bin"
$env:Path = "$env:Path;E:\GitHub\Tyriar\dotfiles\data\bin"

# Remove ad spam from npm install...
$env:OPEN_SOURCE_CONTRIBUTOR = "true"

Invoke-Expression (&starship init powershell)
