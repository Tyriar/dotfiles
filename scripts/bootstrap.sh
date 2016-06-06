if [ -f /etc/debian_version ]; then
  DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

  sudo apt-get update
  sudo apt-get install -y curl git vim

  # Install Chrome
  sudo apt-get install -y libappindicator1
  sudo apt-get install -f
  pushd $(mktemp -d)
  wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
  sudo dpkg -i google-chrome-stable_current_amd64.deb
  popd

  # Install Visual Studio Code Stable
  pushd $(mktemp -d)
  wget https://vscode-update.azurewebsites.net/api/deb/stable/amd64/deb/vscode-amd64.deb
  sudo dpkg -i vscode-amd64.deb
  popd

  # Install Visual Studio Code Insiders
  pushd $(mktemp -d)
  wget https://vscode-update.azurewebsites.net/api/deb/insider/amd64/deb/vscode-amd64.deb
  sudo dpkg -i vscode-amd64.deb
  popd

  # Install Atom
  pushd $(mktemp -d)
  wget -O atom-amd64.deb https://atom.io/download/deb
  sudo dpkg -i atom-amd64.deb
  popd

  ./configure_ubuntu.sh

  # Install node stable
  $DIR/install_deps.sh

  # Install modules
  npm install
  node $DIR/../cli.js install
else
  echo "Only Debian is supported"
fi
