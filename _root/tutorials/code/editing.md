---
title: Editing the Code
description:
layout: page
tags: 
- code
---

Although you can use the [tinker](/tutorials/code/tinker) command for quick code tasks, the bulk of Ares code lives on the server, like the news and connect files in Penn/Tiny.  To change the code, you'll need to edit these code files.  There are many ways you can do this.  This article will cover a few.

## FTP Upload

A common way to edit the code is to get a copy on your local PC, modify it, and then upload it back to the game using FTP (File Transfer Protocol) software.  You can upload a batch of changes all at once, so players aren't stuck with code in an intermediate state.  

1. Download and install a FTP client.
2. Connect to your game using SFTP.
3. Download files from the game server to your PC.
4. Change the files on your PC.
5. Upload the changed versions back to the game server.  

> <i class="fa fa-exclamation-triangle"></i> **Note:** Generally you'll only want to be uploading and downloading the `/home/ares/aresmush/plugins` folder and the `/home/ares/ares-webportal/app` folder, since that's the code you'll be modifying.   You can download the entire aresmush/ares-webportal folders, but you have to keep track of which files you modified.  If you blindly upload everything, you could end up overwriting configuration changes or file uploads that you made through the web portal. 

### FileZilla

If you don't already have a preferred FTP client, FileZilla is a good free choice.  Just be sure to skip the optional search/adware junk it wants to install.  Here is a screenshot of a sample server configuration.  Note that there is no port listed.  You're not connecting to the *game* here your'e connecting to the *server running the game*.

{{#pretty-image}}/assets/media/code/ftp.png{{/pretty-image}}

Once you have your site configured, click Connect.  Click 'always trust this host' window if it pops up.  Now you should be able to move files back and forth.

> <i class="fa fa-exclamation-triangle"></i> **Note:** Always use your 'ares' username to connect to the server.  The password was given to you during the initial installation.

### Code Editors

Code files are just plain text, so you can use Notepad or TextEdit to edit them.  You can also install a nice code editor to make your life easier.  There are some suggestions listed [here](/tutorials/code/local-setup#editors).

## Live Edit

Another option is to connect to the server and edit the code there.

1. [Connect to the server shell](/tutorials/install/server-shell/).
2. Run a code editor command (e.g. `vi aresmush/plugins/cookies/commands/cookie_cmd.rb`).
3. Edit and save the file.
4. Reload the plugin in-game (more on this in a moment).

The down side of live editing is that template and text file changes take effect as soon as they're saved. If you mess something up, the players in the game are immediately affected, and it's possible for them to catch your changes in an intermediate state.

These are the same pitfalls you'd find when editing old MUSH softcode live in the game, so those down-sides might be acceptable to some.  It's just not really the greatest option.

### Code Editors

The server shell editors like Vi are pretty bare-bones, and VI can take some getting used to.  Here's a [vi tutorial](https://www.howtogeek.com/102468/a-beginners-guide-to-editing-text-files-with-vi/). [Pico](https://en.wikipedia.org/wiki/Pico_(text_editor)) is another simple server-side editor that's usually installed by default on linux systems.

## GitHub

You can use GitHub version control to transport changes from your local PC to the server.  

{{#pretty-image}}{{urls.media}}/code/git-pull.png{{/pretty-image}}

See [Using Git](https://aresmush.com/tutorials/code/git/) for more information.

## Local Test Game

The most elaborate option - which is also the way pro programmers make their changes - is to set up a test game on your local PC.  You make your changes to the test game's code on your local PC and try them out.  You only upload to the game after you're sure that the new code works.

[Setting up Ares locally](/tutorials/code/local-setup) takes some work, but you can reap great benefits in convenience and overall code stability down the line.