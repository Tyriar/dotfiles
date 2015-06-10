export LANG=en_US.UTF-8

# Source ~/.shellrc.d/*
if [ -d ~/.shellrc.d ]; then
  for f in ~/.shellrc.d/* ; do source $f; done
fi

# Setup command line format
PS1='${debian_chroot:+($debian_chroot)}\[\e[01;32m\]\u@\h\[\e[00m\]:\[\e[01;34m\]\w\[\e[00m\]\$ '
if [ -n "$SSH_CLIENT" ] || [ -n "$SSH_TTY" ]; then
  # Add (SSH) to command line format
  PS1='${debian_chroot:+($debian_chroot)}\[\e[01;32m\]\u@\h\[\e[00m\]:\[\e[01;34m\]\w\[\e[01;31m\]\D{(ssh)}\[\e[00m\]\$ '
  if [ -f ~/.bashrc ]; then
    # Source .bashrc when logging in via SSH
    . ~/.bashrc
  fi
fi