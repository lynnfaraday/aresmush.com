---
title: Connecting to the Server Shell
description:
layout: tutorial
installTutorial: true
tutorialName: Installing AresMUSH
tutorialIndex: tutorials/install
prevstep: getting-a-hostname
nextstep: setup-server
tags: 
- install
- hosting
- manage
---

To manage certain parts of your game, you will need to connect to the **Server Shell**, which is like a command prompt for your game server.  This is different than connecting with your MUSH client, because your'e connecting to the *server*, not the game.

## The Ares User

The very first time you log in (using any of the methods described below), you'll use the username "root" and the password that was emailed to you.  

As part of the game installation, it will create an "ares" user and password.  Use the "ares" user for day-to-day operations and save the "root" user for things that require special permissions.

> <i class="fa fa-exclamation-triangle"></i> **Note:** All of the command line tools you use once the game is set up, like starting the game and doing upgrades, are designed to be run as the **ares** user.  You'll need to either log in as that user or `su - ares` to switch to them with a privileged account, otherwise things won't work right.

## Connecting through Digital Ocean

If you used the [Digital Ocean](/tutorials/install/digital-ocean) setup instructions, you can connect directly to your droplet using the Digital Ocean control panel.  

1. Log into your Digital Ocean account and select "Droplets" from the top menu.
2. Select your droplet.
3. Select "Access".
4. Click "Launch Console".
{{#pretty-image}}{{urls.media}}/install-ares/droplet-connect.png{{/pretty-image}}
4. Log in.

## Connecting through a Client

You can also connect to your server using a telnet client like [PuTTY](http://www.putty.org/) for Windows or the [PuTTY for Mac](https://www.ssh.com/ssh/putty/mac/) client for Mac.   Use SSH with the username 'root'.

## Changing Directories

Once in the server shell, you'll need to change to the folder where the Ares code lives.  You do this through the change directory command - `cd`.

    cd - Goes to your home folder.
    cd aresmush - From your home folder, changes to the game folder.
    cd ares-webportal - From your home folder, changes to the web folder.
