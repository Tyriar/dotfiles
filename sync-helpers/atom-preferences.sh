DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

echo -e "\e[33m~~~Syncing Atom Editor preferences~~~\e[0m"

ATOM_PREF_PATH=~/.atom
cp $DIR/../atom/* $ATOM_PREF_PATH
