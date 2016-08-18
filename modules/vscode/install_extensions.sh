# Install extensions for variants supporting --install-extension
EXTENSIONS=(
  "cssho.vscode-svgviewer" \
  "dbaeumer.vscode-eslint" \
  "EditorConfig.EditorConfig" \
  "RoscoP.ActiveFileInStatusBar" \
  "ryzngard.vscode-header-source" \
  "Tyriar.sort-lines" \
  "Tyriar.lorem-ipsum" \
  "Tyriar.theme-glacier" \
  "waderyan.gitblame"
)

for VARIANT in "code" \
               "code-insiders"
do
  if hash $VARIANT 2>/dev/null; then
    VERSION="$($VARIANT --version)"
    MAJOR="$(echo $VERSION | sed -e 's/\..*$//')"
    MINOR="$(echo $VERSION | sed -e 's/\-[a-z]*$//' -e 's/^[0-9]*\.//' -e 's/\.[0-9]*$//')"
    if [ "$MAJOR" -gt "0" ] && [ "$MINOR" -gt "1" ]; then
      echo "Installing extensions for $VARIANT"
      for EXTENSION in ${EXTENSIONS[@]}
      do
        $VARIANT --install-extension $EXTENSION
      done
    else
      echo "$VARIANT (v$VERSION) does not support extension CLI args"
    fi
  fi
done
