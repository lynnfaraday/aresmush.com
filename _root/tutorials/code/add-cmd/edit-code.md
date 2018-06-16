---
title: Editing the Code
description:
layout: tutorial
nextstep: help-file
tutorialIndex: tutorials/code/add-cmd
tutorialName: Adding a Command
tags: 
- code
- plugins
- database
---

Unlike the tinkering examples in the previous tutorial, the code for actual commands is stored on the server.

There are several ways to edit the code on the server, and you can choose the one that works best for you.  Two common options are:

* [Install Ares locally](/tutorials/code/local-setup) so you have your own test game.  This takes some extra work, but it will pay off if you plan on doing a lot of coding.  You can edit and run everything on your PC.
* Use a [FTP Client](/tutorials/code/editing) to download files from the server, change them on your local PC, and then re-upoad them to the game.

There are some other ways to [edit the code](/tutorials/code/editing) also, but these two are generally the best way to start.

All the code you write needs to live inside of a plugin.  It would be overkill to create a whole plugin just for one or two commands, so in this case we can utilize the existing [Custom](/tutorials/code/custom) plugin.  The custom plugin is just a special place set aside for you to add your own custom commands, like this one.  The code for the custom plugin lives in the `aresmush/plugins/custom` directory.

## Try It

Find the custom plugin directory - either using FTP or installing the game locally.
