# Symlink config files for all variants of Code to the stable versions
CODE_STABLE_CONFIG="$HOME/.config/Code/User"
CODE_INSIDER_CONFIG="$HOME/.config/Code - Insiders/User"
CODE_ALPHA_CONFIG="$HOME/.config/Code - Alpha/User"
CODE_DEV_CONFIG="$HOME/.config/Code-Development/User"
CODE_OSS_CONFIG="$HOME/.config/Code - OSS/User"

for CONFIG_DIR in "$CODE_INSIDER_CONFIG" \
                  "$CODE_ALPHA_CONFIG" \
                  "$CODE_DEV_CONFIG" \
                  "$CODE_OSS_CONFIG"
do
    for JSON_FILE in "settings.json" "keybindings.json"
    do
        rm -rf "$CONFIG_DIR/$JSON_FILE"
        ln -s "$CODE_STABLE_CONFIG/$JSON_FILE" "$CONFIG_DIR/$JSON_FILE"
    done
done
