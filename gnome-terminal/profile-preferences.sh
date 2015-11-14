# < Gnome 3.8
#gconftool-2 --set "/apps/gnome-terminal/profiles/Default/bold_color_same_as_fg" \
#    --type bool "true"
#gconftool-2 --set "/apps/gnome-terminal/profiles/Default/use_theme_colors" \
#    --type bool "false"
#gconftool-2 --set "/apps/gnome-terminal/profiles/Default/background_darkness" \
#    --type float "1"
#gconftool-2 --set "/apps/gnome-terminal/profiles/Default/background_type" \
#    --type string "transparent"
#gconftool-2 --set "/apps/gnome-terminal/profiles/Default/palette" \
#    --type string "#096209620962:#E6E61A1A4141:#1717E3E38584:#FFFFDEDE6A6A:#4F4F8584FFFF:#A0A07474C4C4:#4F4FA5A5C7C7:#D3D3D7D7CFCF:#404040404040:#CFCF18173A39:#0D0DC7C77272:#F4F4CDCD4545:#26265D5DD9D9:#88884E4EBABA:#2F2F62627777:#EEEEEEEEECEC"
#gconftool-2 --set "/apps/gnome-terminal/profiles/Default/background_color" \
#    --type string "#151517161818"
#gconftool-2 --set "/apps/gnome-terminal/profiles/Default/visible_name" \
#    --type string "Default"
#gconftool-2 --set "/apps/gnome-terminal/profiles/Default/bold_color" \
#    --type string "#000000000000"
#gconftool-2 --set "/apps/gnome-terminal/profiles/Default/foreground_color" \
#    --type string "#FEFEFEFEFEFE"
#gconftool-2 --set "/apps/gnome-terminal/profiles/Default/font" \
#    --type string "Hack 11"

# >= Gnome 3.8
# Get the profile ID from the terminal:
# Edit > Preferences > Profiles > (select profile) > Edit 
profile_id=b1dcc9dd-5262-4d8d-a863-c897e6d979b9
dconf write /org/gnome/terminal/legacy/profiles:/:$profile_id/bold-color-same-as-fg "true"
dconf write /org/gnome/terminal/legacy/profiles:/:$profile_id/use-theme-colors "false"
dconf write /org/gnome/terminal/legacy/profiles:/:$profile_id/background-transparency-percent "0"
dconf write /org/gnome/terminal/legacy/profiles:/:$profile_id/use-transparent-background "true"
dconf write /org/gnome/terminal/legacy/profiles:/:$profile_id/palette "['rgb(9,9,9)', 'rgb(230,127,146)', 'rgb(125,227,180)', 'rgb(255,231,145)', 'rgb(140,175,255)', 'rgb(173,145,196)', 'rgb(109,174,199)', 'rgb(198,202,194)', 'rgb(155,158,152)', 'rgb(230,81,109)', 'rgb(79,227,159)', 'rgb(255,219,94)', 'rgb(89,140,255)', 'rgb(155,106,196)', 'rgb(70,162,199)', 'rgb(238,238,236)']"
dconf write /org/gnome/terminal/legacy/profiles:/:$profile_id/background-color "'#151517161818'"
dconf write /org/gnome/terminal/legacy/profiles:/:$profile_id/visible-name "'Default'"
dconf write /org/gnome/terminal/legacy/profiles:/:$profile_id/bold-color "'#000000000000'"
dconf write /org/gnome/terminal/legacy/profiles:/:$profile_id/foreground-color "'#FEFEFEFEFEFE'"
dconf write /org/gnome/terminal/legacy/profiles:/:$profile_id/background-color "'#151517161818'"
dconf write /org/gnome/terminal/legacy/profiles:/:$profile_id/use-theme-transparency "false"
dconf write /org/gnome/terminal/legacy/profiles:/:$profile_id/font "'Hack 11'"
