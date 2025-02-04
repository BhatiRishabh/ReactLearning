#!/bin/bash
for dir in */ ; do
    cd "$dir"
    git init
    git remote add origin https://github.com/BhatiRishabh/"${dir%/}".git
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git push -u origin main
    cd ..
done
