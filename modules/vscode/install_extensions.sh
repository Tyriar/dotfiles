# Install extensions for variants supporting --install-extension
EXTENSIONS=(
  "cssho.vscode-svgviewer" \
  "EditorConfig.EditorConfig" \
  "felipecaputo.git-project-manager" \
  "ryu1kn.annotator" \
  "Tyriar.lorem-ipsum" \
  "Tyriar.terminal-tabs" \
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
