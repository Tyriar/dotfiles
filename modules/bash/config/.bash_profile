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

# Source .bash_profile_local, .bash_profile commands specific to this machine.
if [ -r ~/.bash_profile_local ]; then
  . ~/.bash_profile_local
fi
