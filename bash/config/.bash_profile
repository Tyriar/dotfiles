# Source .profile if it exists
if [ -r ~/.profile ]; then
  . ~/.profile;
fi

# Source .bashrc if it exists
if [ -r ~/.bashrc ]; then
  . ~/.bashrc
fi

# Source .bash_profile_local if it exists for .bash_profile commands specific
# to this machine.
if [ -r ~/.bash_profile_local ]; then
  . ~/.bash_profile_local
fi
