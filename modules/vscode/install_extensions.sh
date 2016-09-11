# Install extensions for variants supporting --install-extension
EXTENSIONS=(
  "cssho.vscode-svgviewer" \
  "dbaeumer.vscode-eslint" \
  "EditorConfig.EditorConfig" \
  "RoscoP.ActiveFileInStatusBar" \
  "ryu1kn.annotator" \
  "ryzngard.vscode-header-source" \
  "Tyriar.sort-lines" \
  "Tyriar.lorem-ipsum" \
  "Tyriar.theme-glacier"
)

for VARIANT in "code" \
               "code-insiders"
do
  if hash $VARIANT 2>/dev/null; then
    echo "Installing extensions for $VARIANT"
    for EXTENSION in ${EXTENSIONS[@]}
    do
      $VARIANT --install-extension $EXTENSION
    done
  fi
done
