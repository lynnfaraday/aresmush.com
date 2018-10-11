---
title: Using GitHub
description:
layout: tutorial
editCodeTutorial: true
tutorialName: Editing Code
tutorialIndex: tutorials/code/edit-code
prevstep: ftp-upload
nextstep: test-game
tags: 
- code
---

Using FTP to upload your code is simple, but has some serious limitations.  GitHub source control is the best way to transfer code between your PC and the game server.  In this tutorial, we'll discuss how to use GitHub and take your code workflow to the next level.

The transcript is available [here](/tutorials/code/edit-code/github-transcript).

You can find the GitHub Desktop installer mentioned in the tutorial [here](https://desktop.github.com/).

<iframe width="560" height="315" src="https://www.youtube.com/embed/jc0GLdMZya8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Using Your Fork

If you decide to start using GitHub and create your fork *after* the game is installed, you'll need to run a command in the server shell to point the game at your own personal fork instead of the main Ares code.  

1. Connect to the server shell.
2. Go to the aresmush directory.
3. Type `git remote set-url origin <Your Clone URL>`.
4. Repeat for the web portal directory.

For more help, see [Using Git](/tutorials/code/git).