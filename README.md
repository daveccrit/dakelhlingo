# Dakelhlingo Project

## Basic setup of a new computer

- Create **dev** folder on **C: drive**
- Install git from https://git-scm.com/downloads
  - Configure Username in git: `git config --global user.name "`**Your Name Here**`"`
  - Configure Email in git: `git config --global user.email` **youremail@example.com**
  - Configure LF and CR options in git: `git config --global core.autocrlf input`
- Install node.js from https://nodejs.org/en/
  - dont change anything in the setup of node js
- Install 64bit git-town for Windows from http://www.git-town.com/install.html
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
- In Command Prompt:
  - `cd \`
  - `cd dev`
  - open browser and goto https://github.com/daveccrit/dakelhlingo
  - click **clone or download** button and copy link
  - `git clone "`**link that was copied**`"`
  - `cd dakelhlingo`
  - `npm update`
  - `npm start`
- Install VSC (**V**isual **S**tudio **C**ode) from https://code.visualstudio.com/

## Git Commands

- `git status`
  - show changes
- `git checkout`
  - erase all file changes
- `git town sync`
  - sync's with repo, pulls changes from repo and pushes committed change up
- `git commit -m "`**commit message here**`" .`
  - commits changes
- `git town hack` **branch_name**
  - create branch from master
- `git checkout` **branch_name**
  - change your local working branch
- `git branch`
  - list local branch
- `git branch --all`
  - list all branches
- `git add` **filename**
  - stages specific modified file
- `git add .`
  - stages all files
- `git town kill` **branch_name**
  - delete branch locally and on repo
- `git clone` **repo url location**
  - clones repo to your local machine
- `npm install`
  - install project dependencies

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
