if [ -f /etc/debian_version ]; then
  curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
  sudo apt-get install -y nodejs
else
  echo "Only Debian is supported"
fi
