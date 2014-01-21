# Effective development

By <a href='http://geekingfrog.com'>Grégoire Charvet</a>

---

# About

* French geek
* Full time javascript dev
* Coding for the web for ~1.5 year
* Passionate about js, tooling and ice skating

---

# Three things
## to keep in mind

from Larry Wall (creator of Perl)

* Laziness
* Impatience
* Hubris (~arrogance 骄傲)

[source](http://c2.com/cgi/wiki?LazinessImpatienceHubris)

---

# Outline

1. OS level tool & server
2. Node.js
3. In the browser

---

# Speed ?

Delay | User reaction
---|---|---
0 - 100ms | instant
100 - 300ms | Slight perceptible delay
**300 - 1000ms** | **Task focus, perceptible delay**
1s+ | Mental context switch
10s+ | I'll come back later...

--

( from a talk about web performance made by google.
[source](http://www.igvita.com/slides/2013/fluent-perfcourse.pdf))

---

# Automation

* Be lazy
* Avoid repetition

---

# OS tooling

---

# CLI

Embrace the command line

* Fast
* Highly customizable

---

# Windows

* [win-bash](http://win-bash.sourceforge.net/)
* [powershell](http://www.microsoft.com/en-us/download/details.aspx?id=34595)

---

# *nix like OS

* Customize your shell and your prompt
* Try different shell (zsh, fish shell)
* Navigate the history like a boss

---

# Some others tools

* **z** the file jumper
* Python pygmentize
* Share history between shell

---

# Server management

* Use keys
* ssh-agent for storing passphrases
* `man ssh config`

---

# Code editor
(basic minimum)

* Syntax highlighting
* Basic indentation support

---

# More editor

* Snippets
* Autocomplete
* Linting
* Compiling
* Version control
* Keyboard shortcut

---

# Version control

* Use it (or stop coding)
* Decentralized
* git ?

---

# Git ?

Some awesome commands (somewhat not that popular).

```bash
git stash
git add --patch
git rebase
git rebase -i
```

---

# OS customization

* See [dotfiles](http://dotfiles.github.io/) on github.
* Learn your tools and automate as much as possible.

---

# Node.js

---

# Version management

* Use `nvm` (`rvm` for ruby, `virtual-env` for python)

---

# nodemon

Live prototyping. To install with `npm install -g`

Reload app on file change

---

# node-inspector

Advanced debugging tool.

* Start your app with `--debug` or `--debug-brk`.
* Debug with an advanced debugger.

---

# In the Browser

---

# Yeoman

* Combination of bower, grunt and npm.
* `npm` node package management
* `grunt` de-facto build tool
* `bower` package management for js library

---

# Grunt goodness

* Livereload
* Watch file system
* Prepare and deploy webapp

---

# Browsers devtools

* [Chrome](https://developers.google.com/chrome-developer-tools/docs/console)
* [Firefox](https://developer.mozilla.org/en/docs/Tools)


<!--
yeoman = npm + bower + grunt (present each of them)
livereload

demo yeoman with a js app and sass (ember + foundation ?)

dev tools
* workspaces (edit files)


testing
* qunit / mocha / karma
* phantomjs (research about firefox engine inside)
* research about online tool for browser support
-->
