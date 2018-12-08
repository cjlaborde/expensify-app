# Git Commands

git init - Create a new repo

git status - View the changes to your projects

git add - Add files to staging arare

git commit - Creates a new commit with files from staging area

git log - View recent commits

## Find SSH KEYS

ls -a ~/.ssh

https://help.github.com/articles/connecting-to-github-with-ssh/

## Check is ssh-agent running

 eval "$(ssh-agent -s)"

## Add Key

 ssh-add ~/.ssh/id_rsa

## Basic connection to github services 

ssh -T git@github.com

## Add git using ssh

git remote add origin git@github.com:cjlaborde/expensify-app.git

## check if it running

git remote -v

## push to git

-u create assosiation between our local and github repository you only need to use it once
then type remote name =origin  and branch = master
git push -u orgin master

git push --set-upstream origin master

## Git include modified files only and not new files

git commit -a -m "message here"
git commit -am "Setp devDependencies and fist folder"

## WebPack Production 

  "scripts": {
    "build": "webpack",
yarn run build 

