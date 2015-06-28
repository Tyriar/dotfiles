alias serve='python3 -m http.server'

# git status for all sub-directories in ~/workspaces
alias wst='cd ~/workspaces; echo -e "\e[33m~~~git status on workspaces~~~\e[0m"; for dir in $(ls); do echo -e "\e[32m./"$dir"\e[0m"; cd $dir; git status -s; cd ..; done'
