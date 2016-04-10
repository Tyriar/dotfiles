if [ -f /etc/debian_version ]; then
  if [ $1 = "lts" ]; then
    echo "Installing Node v4"
    curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
  else
    echo "Installing Node v5"
    curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
  fi
  sudo apt-get install -y nodejs
else
  echo "Only Debian is supported"
fi
