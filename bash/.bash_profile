# Source .profile if it exists
if [ -r ~/.profile ]; then
  . ~/.profile;
fi

# Source .bashrc if it exists
if [ -r ~/.bashrc ]; then
  . ~/.bashrc
fi
