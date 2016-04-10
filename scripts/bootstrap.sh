if [ -f /etc/debian_version ]; then
  sudo apt-get update
  sudo apt-get install -y curl git vim
  
  # Install Chrome
  sudo apt-get install -y libappindicator1
  sudo apt-get install -f
  mkdir temp && cd temp
  wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.  deb
  sudo dpkg -i google-chrome-stable_current_amd64.deb
  cd .. && rm -rf temp
  
  # Install Visual Studio Code Stable
  mkdir temp && cd temp
  wget https://vscode-update.azurewebsites.net/api/deb/stable/amd64/deb/vscod  e-amd64.deb
  sudo dpkg -i vscode-amd64.deb
  cd .. && rm -rf temp
  
  # Install Visual Studio Code Insiders
  mkdir temp && cd temp
  wget https://vscode-update.azurewebsites.net/api/deb/insider/amd64/deb/vsco  de-amd64.deb
  sudo dpkg -i vscode-amd64.deb
  cd .. && rm -rf temp
  
  # Configure Unity Launcher
  gsettings set com.canonical.Unity.Launcher favorites "['application://ubiquity.desktop',   'application://google-chrome.desktop',   'application://gnome-terminal.desktop',   'application://nautilus.desktop',   'application://code-insiders.desktop']"
  
  # Install node stable
  ./install_deps.sh
  
  # Install modules
  npm install
  node cli.js install
else
  echo "Only Debian is supported"
fi
