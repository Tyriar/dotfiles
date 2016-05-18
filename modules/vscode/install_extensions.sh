# Install extensions for variants supporting --install-extension
for VARIANT in "code-alpha"
do
  if hash $VARIANT 2>/dev/null; then
    echo "Installing extensions for $VARIANT"
    for EXTENSION in "EditorConfig.EditorConfig" \
                    "Tyriar.sort-lines" \
                    "Tyriar.lorem-ipsum" \
                    "cssho.vscode-svgviewer" \
                    "dbaeumer.vscode-eslint" \
                    "oderwat.indent-rainbow" \
                    "ms-vscode.csharp" \
                    "ryzngard.vscode-header-source" \
                    "waderyan.gitblame"
    do
      $VARIANT --install-extension $EXTENSION
    done
  fi
done
