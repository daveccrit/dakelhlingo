# Dakelhlingo
A web application for learning indigenous languages of Canada.
 
  # Basic setup of a new computer
 - create **dev** folder on **c drive**
 - install git from https://git-scm.com/downloads
 - install node.js from https://nodejs.org/en/
   - dont change anything in the setup of node js
 - go to chrome and search git
 - install git town from http://www.git-town.com/install.html
   - create new folder in **c:\dev** called **tools**
   - download git-town amd64 for windows and copy/save to **c:\dev\tools**
   - rename git-town file to be git-town.exe
   - go to **system enviroment variables**
   - go to **path variable**
   - then hit **edit**
   - hit **new**
   - hit **browse**
   - go to **c drive** 
   - go to **dev**
   - go to **tools**
 - go to command prompt do 
   - **cd /**
   - cd **dev**
   - git clone "link that was copied"
   - npm update
   - npm start
 - install VSC (**V**isual **S**tudio **C**ode) from https://code.visualstudio.com/


  # git commands
 - git status
   - show changes
 - git checkout
   - erase all file changes
 - git town sync
   - sync's with repo, pulls changes from repo and pushes committed change up
 - git commit -m  "**commit message here**" .
   - commits changes
 - git town hack **branch_name**
   - create branch from master
 - git checkout **branch_name**
   - change your local working branch
 - git branch
   - list local branch
 - git branch --all
   - list all branches
 - git add **filename**
   - stages specific modified file 
 - git add .
   - stages all files
 - git town kill  **branch_name**
   - delete branch locally and on repo
 - git clone **repo url location**
   - clones repo to your local machine
 - npm install
   - install project dependencies
 - npm start
   - compiles to dist folder and runs server
