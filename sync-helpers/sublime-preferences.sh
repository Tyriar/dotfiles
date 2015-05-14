DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

echo -e "\033[0;33m~~~Syncing Sublime Text 3 preferences~~~\033[0m"

SUBLIME_PATH=~/.config/sublime-text-3/Packages/User
cp $DIR/../sublime/User/* $SUBLIME_PATH
