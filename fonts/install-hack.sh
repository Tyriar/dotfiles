#!/bin/bash

HACK_RELEASES='https://github.com/chrissimpkins/Hack/releases/download/'
HACK_VERSION='v2.018/Hack-v2_018-ttf.zip'
HACK_URL=${HACK_RELEASES}${HACK_VERSION}
TEMP=`mktemp`
curl -L -o "${TEMP}" "${HACK_URL}"
if [ -d ~/Library/Fonts ]; then
  unzip -o "${TEMP}" -d ~/Library/Fonts/
fi
if [ -d ~/.local/share/fonts ]; then
  unzip -o "${TEMP}" -d ~/.local/share/fonts/
fi
rm "${TEMP}"
