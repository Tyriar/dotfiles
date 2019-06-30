#!/bin/bash
# ~/.bashrc: executed by bash(1) for non-login shells.
# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
# for examples

# If not running interactively, don't do anything
case $- in
  *i*) ;;
    *) return;;
esac

# don't put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth

# append to the history file, don't overwrite it
shopt -s histappend

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=1000
HISTFILESIZE=2000

# check the window size after each command and, if necessary,
# update the values of LINES and COLUMNS.
shopt -s checkwinsize

# If set, the pattern "**" used in a pathname expansion context will
# match all files and zero or more directories and subdirectories.
#shopt -s globstar

# make less more friendly for non-text input files, see lesspipe(1)
[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

# If this is an xterm set the title to user@host:dir
case "$TERM" in
xterm*|rxvt*)
  PS1="\[\e]0;${debian_chroot:+($debian_chroot)}\u@\h: \w\a\]$PS1"
  ;;
*)
  ;;
esac

if [ -f ~/.bash_aliases ]; then
  . ~/.bash_aliases
fi

# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi

# Source .bash_prompt if it exists
if [ -r ~/.bash_prompt ]; then
  . ~/.bash_prompt
fi

export CDPATH=~/dev/Tyriar

# Source .bashrc_local if it exists for .bashrc commands specific to this
# machine.
if [ -r ~/.bashrc_local ]; then
  . ~/.bashrc_local
fi

# Don't initialize nvm if it's already done
if [ "$NVM_DIR" != "$HOME/.nvm" ]; then
  if [ "$TERM_PROGRAM" = "" ]; then
    # Always initialize if $TERM_PROGRAM is not set, this will happens for example
    # when VS Code launches but not when run in the majority of terminals. Note
    # that this does not set NVM_DIR so nvm will still set up aliases as needed
    # in a terminal
    . "$HOME".nvm/nvm.sh
  else
    # Defer initialization of nvm until nvm, node or a node-dependent command is
    # run. Ensure this block is only run once if .bashrc gets sourced multiple times
    # by checking whether __init_nvm is a function.
    if [ -s "$HOME/.nvm/nvm.sh" ] && [ ! "$(type -t __init_nvm)" = function ]; then
      export NVM_DIR="$HOME/.nvm"
      [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"
      declare -a __node_commands=('nvm' 'node' 'npm' 'yarn' 'gulp' 'grunt' 'webpack')
      function __init_nvm() {
        for i in "${__node_commands[@]}"; do unalias $i; done
        . "$NVM_DIR"/nvm.sh
        unset __node_commands
        unset -f __init_nvm
      }
      for i in "${__node_commands[@]}"; do alias $i='__init_nvm && '$i; done
    fi
  fi
fi
