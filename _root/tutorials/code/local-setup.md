---
title: Setting Up Ares Locally
description:
layout: page
tags: 
- code
- git
---

Often times people like to code on their local PC or Mac.  You can test our your code changes before putting them live on the game.  Using [GitHub](/tutorials/code/git) or FTP, you can upload your changes to the MUSH server and then reload them.

The exact steps to set things up locally will vary based on your operating system and tools, so it's not possible to provide specific instructions.  This article just goes over the basics of what you'll need to do.

## Prerequisites

You'll need to have the following tools installed:

* [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
* [Redis database server](https://redis.io/download)
* [NPM package manager](https://docs.npmjs.com/getting-started/installing-node)
* [Yarn dependency manager](https://yarnpkg.com/lang/en/docs/install/)
* [GitHub](https://desktop.github.com/)  (Recommended to easily upload your code to the MU server using version control.)

## Get the Code

You can clone the code using [your own GitHub fork](/tutorials/code/git) or use the "Clone or Download" option from the [AresMUSH](https://github.com/AresMUSH/aresmush) and [Ares Web Portal](https://github.com/AresMUSH/ares-webportal) GitHub repositories.

## Setting up the Game

You can run the `bin/configure` script in the aresmush directory to set up the game's basic settings.  Use 'localhost' for the host name.

> <i class="fa fa-exclamation-triangle"></i> **Note:** This is a unix-style shell script, and will work best on Linux or Mac operating systems.  On Windows, you can copy/paste the commands from the file into a batch file, or just run them manually.

## Running the Game

When you're debugging locally, it's easier to run the game in debug mode.  

To start the game server in debug mode, run `bin/devstart` from the aresmush directory.

To start the Web Portal in debug mode, run `bin/devportal` from the ares-webportal directory.


As with the setup script in the previous section, these are unix-style shell scripts and may need some adjustment when running on Windows.

## Code Editors

If you're editing code on your local PC, do yourself a favor and get a decent code editor.  Here are some options - some free, some paid:

* [Textmate](https://macromates.com/)
* [Atom](https://atom.io/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Sublime](http://www.sublimetext.com/)
* [Notepad++](https://notepad-plus-plus.org/)

## Getting the Code Back to the Game

When you're finished with the code, you'll want to get it back onto the game.  The best way to do this is to use [GitHub version control](/tutorials/code/git) to sync the changes between game and local test server.  If you don't want to mess around with GitHub, you can always just FTP the changed files back to the game server.