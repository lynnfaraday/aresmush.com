---
title: Setting Up Ares Locally
description:
layout: page
tags: 
- code
- git
---

Often people like to code on their local PC or Mac.  You can test our your code changes before putting them live on the game.  Using [GitHub](/tutorials/code/git) or FTP, you can upload your changes to the MUSH server and then reload them.

The exact steps to set things up locally will vary based on your operating system and tools, so it's not possible to provide specific instructions.  This article just goes over the basics of what you'll need to do.

## Prerequisites

You'll need to have the following tools installed. There are scripts available below to help you install these prerequisites on Mac OSX or Windows.

* Ruby 2.3 or higher.  We recommend installing Ruby 2.4 via [Ruby Version Manager](https://rvm.io/) or RBEnv.  (You need regular Ruby; Ares is not compatible with jRuby.)
* [Redis database server](https://redis.io/download)
* [NPM package manager](https://docs.npmjs.com/getting-started/installing-node)
* [Yarn dependency manager](https://yarnpkg.com/lang/en/docs/install/)
* [GitHub](https://desktop.github.com/)
* [Bundler](http://bundler.io/)
* [Ember CLI](https://ember-cli.com/)

### Installing on Mac

<button data-toggle="collapse" data-target="#macsetup" class="btn btn-info">Show Mac Setup</button>
<div id="macsetup" class="collapse">
 
{{>local_mac_setup}}
</div>

### Installing on Windows

<button data-toggle="collapse" data-target="#windowssetup" class="btn btn-info">Show Windows Setup</button>
<div id="windowssetup" class="collapse">

{{>local_windows_setup}}
</div>

## Get the Code

You'll need code from both the [AresMUSH](https://github.com/AresMUSH/aresmush) and [Ares Web Portal](https://github.com/AresMUSH/ares-webportal) GitHub repositories.  There are several ways to get the code. 

* Make [your own GitHub fork](/tutorials/code/git) (recommended if you plan on making extensive code changes and want to use version control to manage them).
* Clone a copy of the code from GitHub. Assuming you've installed GitHub desktop, click the 'Clone or Download' button on the repo screen and select 'Open in Desktop'.  If you have trouble with that, the [GitHub documentation](https://services.github.com/on-demand/github-desktop/clone-repository-github-desktop) may help.
* Download a ZIP file of the code.  Click the 'Clone or Download' button on the repo screen and select 'Download ZIP'.

> <i class="fa fa-exclamation-triangle"></i> **Note:**   The game engine will work fine by itself, but the web portal is a pretty integral part of the game.  You should really install both.

> <i class="fa fa-exclamation-triangle"></i> **Note:**   In development mode, the web portal and game code must be in parallel directories.  For example:  `/home/youruser/code/aresmush` and `/home/youruser/code/ares-webportal`.

## Setting up the Game

Run the `bin/configure` script in the aresmush folder to set up the game's basic settings.  Use 'localhost' for the host name.

> <i class="fa fa-exclamation-triangle"></i> **Note:** This and other scripts in the `bin` directory are  unix-style shell scripts, and will only work on Linux/MacOSX operating systems.  On Windows, you can copy/paste the commands from the file one by one into a command prompt to run them manually.

## Setting up the Database

Running `bin/wipedb` will initialize the databse to its default settings.

## Running the Game

When you're debugging locally, you'll usually want to run the game in debug mode.  

To start the game server in debug mode, run `bin/devstart` from the aresmush folder.

To start the Web Portal in debug mode, run `bin/devportal` from the ares-webportal folder.

## Customizing Your Game

See [Next Steps](/tutorials/install/next-steps) for information on how to customize and log into your new game.

## Miscellaneous

<a name="editors"></a>

### Code Editors

If you're editing code on your local PC, do yourself a favor and get a decent code editor.  Here are some options - some free, some paid:

* [Textmate](https://macromates.com/)
* [Atom](https://atom.io/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Sublime](http://www.sublimetext.com/)
* [Notepad++](https://notepad-plus-plus.org/)

### Deploying the Code

Unless you're just playing around to learn Ares, you've probably got a "real" version of the game running on a server somewhere.  Whatever changes you make locally, you'll eventually want to upload to the game.

The best way to do this is to use [GitHub version control](/tutorials/code/git) to sync the changes between game and local test server.  If you don't want to mess around with GitHub, you can always just FTP the changed files back to the game server.  See [Editing the Code](/tutorials/code/editing) for help with FTP.