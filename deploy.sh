#!/usr/bin/env sh

# abort on errors
set -e

# build
vuepress build docs

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m "deploy"

git push -f git@github.com:thunderBiscuit/tiny-node-docs.git master:gh-pages

cd -
