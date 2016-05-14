for EXTENSION in "EditorConfig.EditorConfig" \
                 "Tyriar.sort-lines" \
                 "Tyriar.lorem-ipsum" \
                 "cssho.vscode-svgviewer" \
                 "dbaeumer.vscode-eslint" \
                 "ms-vscode.csharp" \
                 "ryzngard.vscode-header-source" \
                 "waderyan.gitblame"
do
    code-alpha --install-extension $EXTENSION
done
