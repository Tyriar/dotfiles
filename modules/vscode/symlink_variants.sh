# Symlink config files for all variants of Code to the stable versions
if [ -z "$1" ]; then
  echo "The first argument must be the config directory"
  exit 1
fi

CODE_STABLE_CONFIG="$1/Code/User"
CODE_INSIDER_CONFIG="$1/Code - Insiders/User"
CODE_ALPHA_CONFIG="$1/Code - Alpha/User"
CODE_DEV_CONFIG="$1/Code-Development/User"
CODE_OSS_CONFIG="$1/Code - OSS/User"

for CONFIG_DIR in "$CODE_INSIDER_CONFIG" \
                  "$CODE_ALPHA_CONFIG" \
                  "$CODE_DEV_CONFIG" \
                  "$CODE_OSS_CONFIG"
do
    mkdir -p "$CONFIG_DIR"
    for JSON_FILE in "settings.json" "keybindings.json"
    do
        rm -rf "$CONFIG_DIR/$JSON_FILE"
        ln -s "$CODE_STABLE_CONFIG/$JSON_FILE" "$CONFIG_DIR/$JSON_FILE"
    done
done
