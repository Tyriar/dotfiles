if [ $# -lt 1 ]; then
  echo 1>&2 "$0: usage: update_dep.sh dep@ver"
  exit 2
fi

git clean -xfd
yarn add $1
cd remote
yarn add $1
cd web
yarn add $1
