# Install extensions for variants supporting --install-extension
for VARIANT in "code-alpha"
do
  if hash $VARIANT 2>/dev/null; then
    echo "Installing extensions for $VARIANT"
    for EXTENSION in "cssho.vscode-svgviewer" \
                    "dbaeumer.vscode-eslint" \
                    "EditorConfig.EditorConfig" \
                    "ms-vscode.csharp" \
                    "ryzngard.vscode-header-source" \
                    "spywhere.guides" \
                    "Tyriar.sort-lines" \
                    "Tyriar.lorem-ipsum" \
                    "waderyan.gitblame"
    do
      $VARIANT --install-extension $EXTENSION
    done
  fi
done
