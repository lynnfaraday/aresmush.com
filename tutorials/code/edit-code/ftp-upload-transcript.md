---
title: FTP Upload (Transcript)
description:
layout: tutorial
editCodeTutorial: true
tutorialName: Editing Code
tutorialIndex: tutorials/code/edit-code
nextstep: ftp-upload
tags: 
- code
---

This is the transcript for the [FTP Upload](/tutorials/code/edit-code/ftp-upload.html)  segment of the Editing Ares Code tutorial.

## Introduction

Hi.  This is Faraday from AresMUSH and in this Part II of the editing AresMUSH code tutorial.  In this segment, I’m going to show you how to use FTP to make changes locally on your hard drive and then upload those changes to the game to test them.

## Getting the Code

The first thing we're going to need to do is to get a copy of the code on our PC.  To do that we can go to Aresmush.com and select the Source Code option.  This will give us links to both the game engine and web portal code.  This takes us to GitHub, which is the source control system used for AresMUSH.

We can use the Clone or Download button to download a ZIP file containing all the source code for the game, and again for the web portal.

## Code Editors

Once you have the files on your hard drive, you can use the code editor of your choice to change them.  There are lots of code editors available, and you just need to find the one you like the best.  There are links to some popular ones on the Editing Code tutorial on aresmush.com.  

You'll want to use a dedicated code editor rather than a generic text editor because it's going to have a variety of helpful features.  Code editors will have syntax highlighting, which changes the colors on the screen to match the type of code you're looking at.  Most code editors also allow you to have multiple files open at once, and switch between them using tabs at the top, like tabs on a web browser.  Code editors also have a directory browsing feature built in, so you can easily switch between directories in your game code.  And finally, most code editors will have a global search feature, so you can search the entire codebase for references to a particular class or function.  That's very helpful for finding code in a big project.

## Setting Up FTP

Once we've changed the files on our hard drive, we're going to need to upload them to the game server so we can test them.  To do that, we're going to use a FTP - or file transfer - application.  There are lots of FTP applications available.  The one I'm going to show you is FileZilla, which is free and available for both Mac and Windows.

To set up our FTP app, we need to tell it our server information.  We're going to go to the Site Manager and create a new site.  It's important to select SFTP - secure FTP - because most servers won't accept regular FTP by default any more.  Enter the server name and select 'Ask for Password' for the login type.  Don't enter your game's port for the port number.  That's the port for the FTP server, not your game server.  Just leave it blank and it will use the default.

## Uploading Files

Once you've connected and given it your username and password for the server shell, you'll see the local code (from your PC) on the left and the remote code (from the game server) on the right.  You'll probably need to browse around on the local side to find where you downloaded the Ares code.  And on the remote side, you'll want to go into the aresmush folder.

From here, we can move files back and forth by dragging and dropping them.  It's a pain to keep track of which files you modified.  One thing you can do is upload the entire plugins directory, and when prompted choose "Overwrite if source newer."  That will only bother uploading it if the version on your hard drive is newer than the version on the server.  We can apply that to every file in our current upload.  We can upload the entire plugins directory or just a particular plugin if we're only working on one.

## Loading Code

As we mentioned in the previous tutorial, when we changed files manually on the server shell, we have to tell the game that they changed.  Otherwise it will just go on using the old code.  The way we do that is the 'load' command.   If we know we only changed a particular plugin, we can load just that plugin - like 'load tinker'.  If we're not sure what we changed, we can use 'load all' and reload everything.  It's a little less efficient, but not really a big deal.

Now that our code has been reloaded, we can execute any new commands and test them.

## Conclusion

So that’s how we can edit files locally on our PC and then upload them to the game server.  It’s an improvement over editing the code directly on the server, because we get to use a proper code editor, with a lot of great features.  But it’s still not ideal.  FTP is a little slow and clunky, and it can be hard to keep track of what changed.

Some people will prefer the simplicity of FTP, and that's perfectly fine.  But there’s an even better way of managing your code.  In the next tutorial, we’ll look at how to use GitHub source control to synchronize the code between your local PC and your game. 

For now, though, that concludes this tutorial.  Thanks for listening.

Editor's Note: The video mentions the "next tutorial" being about GitHub, but that's not true any more.  You can learn about [using GitHub](/tutorials/code/git.html) after you've learned a bit more about Ares Code.