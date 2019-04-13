#!/bin/bash

if [ -r ~/.profile ]; then
  . ~/.profile;
fi

if [ -r ~/.bashrc ]; then
  . ~/.bashrc
fi

if [ -d ~/.shellrc.d ]; then
  for f in ~/.shellrc.d/* ; do source $f; done
fi

# Reduce Razer DeathAdder sensitivity if present
if hash xinput 2>/dev/null; then
  if xinput list | grep -q "DeathAdder"; then
    SPEED=0.66
    xinput set-prop "pointer:Razer Razer DeathAdder" "Coordinate Transformation Matrix" $SPEED, 0, 0, 0, $SPEED, 0, 0, 0, 1
  fi
fi

# Source .bash_profile_local, .bash_profile commands specific to this machine.
if [ -r ~/.bash_profile_local ]; then
  . ~/.bash_profile_local
fi

if [ -d ~/.cargo ]; then
  export PATH="$HOME/.cargo/bin:$PATH"
fi
