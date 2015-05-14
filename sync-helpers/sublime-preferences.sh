SUBLIME_PATH=~/.config/sublime-text-3/Packages/User
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
cp $DIR/../sublime/User/* $SUBLIME_PATH
