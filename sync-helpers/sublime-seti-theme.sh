DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
GIT_DIR=$DIR/../build/Seti_ST3
SUBLIME_DIR=~/.config/sublime-text-3/Packages

echo -e "\033[0;33m~~~Syncing Sublime Text 3 Seti_UI theme~~~\033[0m"

mkdir -p $GIT_DIR
if [ ! -d "$GIT_DIR/.git" ]; then
  git clone https://github.com/ctf0/Seti_ST3.git $GIT_DIR
fi
cd $GIT_DIR
git checkout tags/v8.2
cp -fR $GIT_DIR $SUBLIME_DIR
