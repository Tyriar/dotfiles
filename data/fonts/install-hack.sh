#!/bin/bash

HACK_RELEASES='https://github.com/source-foundry/Hack/releases/download/'
HACK_VERSION='v2.020/Hack-v2_020-ttf.zip'
HACK_URL=${HACK_RELEASES}${HACK_VERSION}
TEMP=`mktemp`
curl -L -o "${TEMP}" "${HACK_URL}"
# OSX
if [ -d ~/Library/Fonts ]; then
  unzip -o "${TEMP}" -d ~/Library/Fonts/
else
  # Linux
  if [ -d /usr/share/fonts ]; then
    mkdir -p ~/.fonts/typetype/hack
    unzip -o "${TEMP}" -d ~/.fonts/typetype/hack
  fi
fi
rm "${TEMP}"

# Reload font cache
fc-cache -fv
