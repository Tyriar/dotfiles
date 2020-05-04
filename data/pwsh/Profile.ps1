# Make tab act like bash
Set-PSReadlineKeyHandler -Key Tab -Function Complete

# Disable tab completion bell
Set-PSReadlineOption -BellStyle None

# Aliases
Set-Alias c code-insiders.cmd

Import-Module posh-git
