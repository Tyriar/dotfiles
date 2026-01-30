step() {
  echo -e '\n\x1b[34;1m=='$1'==\x1b[0m\n';
}

clone() {
  mkdir -p ~/dev/$1
  cd ~/dev/$1
  if [ ! -d $2 ]; then
    git clone https://github.com/$1/$2
  fi
}

step "Updating apt and installing tools"
sudo apt update
sudo apt install -y vim git curl build-essential openssh-server python shellcheck cmake

step "Installing node.js"
mkdir -p ~/tools
cd ~/tools
NODE_VERSION=v22.21.1
NODE_NAME=node-$NODE_VERSION-linux-x64
if [ ! -d ~/tools/$NODE_NAME ]; then
  curl https://nodejs.org/dist/$NODE_VERSION/$NODE_NAME.tar.xz --output ~/tools/$NODE_NAME.tar.xz
  tar xf $NODE_NAME.tar.xz
  rm $NODE_NAME.tar.xz
fi

#step "Installing yarnpkg"
#curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
#echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
#sudo apt-get update && sudo apt-get install -y yarn

step "Setup .bashrc_local"
rm -rf ~/.bashrc_local
cat <<EOT > ~/.bashrc_local
export PATH=~/.npm-packages/bin:~/tools/$NODE_NAME/bin:/snap/bin:\$PATH
npm set prefix ~/.npm-packages
alias c=code-insiders
EOT
. ~/.bashrc_local

step "Setup dev directory"
clone Tyriar dotfiles
clone Tyriar xterm.js
clone microsoft vscode
cd ~/dev/Tyriar/xterm.js
git remote add ups https://github.com/xtermjs/xterm.js
git fetch ups

step "Install dotfiles"
cd ~/dev/Tyriar/dotfiles
git pull
npm ci
npm start install bash git vim

step "Installing rust"
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

unset -f step
