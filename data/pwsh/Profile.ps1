# Make tab act like bash
Set-PSReadlineKeyHandler -Key Tab -Function Complete

# Disable tab completion bell
Set-PSReadlineOption -BellStyle None

# Aliases
Set-Alias c code-insiders.cmd

# Add bin to $Path
$vResolvedPath = (Get-ChildItem -Path "$([Environment]::GetFolderPath("MyDocuments"))\PowerShell\Profile.ps1").Target
$vParentPath = Split-Path (Get-ChildItem $vResolvedPath).DirectoryName -Parent
$vBinPath = Join-Path -Path $vParentPath -ChildPath "bin"
$env:Path = "$env:Path;$vBinPath"

# Remove ad spam from npm install...
$env:OPEN_SOURCE_CONTRIBUTOR = "true"

# Prompt posh-git
# Import-Module posh-git

# Prompt starship
Invoke-Expression (&starship init powershell)

# fnm - node version manager
if (Get-Command "fnm.exe" -ErrorAction SilentlyContinue) { 
    fnm env --use-on-cd | Out-String | Invoke-Expression
}

# Alias to print whole environment
function env { Get-ChildItem Env: | Sort Name }
