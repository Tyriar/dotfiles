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

# Set up node/npm
NPM_PACKAGES=$HOME/.npm-packages
mkdir -p $NPM_PACKAGES
npm config set prefix $NPM_PACKAGES
PATH=$NPM_PACKAGES/bin:$PATH
NODE_PATH="$NPM_PACKAGES/lib/node_modules:$NODE_PATH"

# Source .bash_profile_local, .bash_profile commands specific to this machine.
if [ -r ~/.bash_profile_local ]; then
  . ~/.bash_profile_local
fi
