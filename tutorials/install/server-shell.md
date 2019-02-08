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

{% include note.html content="All of the command line tools you use once the game is set up, like starting the game and doing upgrades, are designed to be run as the **ares** user.  You'll need to either log in as that user or `su - ares` to switch to them with a privileged account.  Otherwise things won't work right." %}

## How to Connect

There are a variety of ways to connect to the server shell depending on your OS and what tools you want to use.

### Using Windows Powershell

On Windows 10 and up, you can connect using Windows Powershell:

1. Open a Powershell prompt.
2. Type `ssh user@yourgame.somewhere.com`.

### Using Mac Terminal

On MacOSX, you can connect using the Terminal app:

1. Open a Terminal window.  (It's usually under "Utilities" in the Applications menu.)
2. Type `ssh user@yourgame.somewhere.com`.

### Using a Desktop Client

There are many SSH clients available.  A popular one is PuTTY, available for  [Windows](http://www.putty.org/) [Mac](https://www.ssh.com/ssh/putty/mac/).  Once installed, you can add your game to PuTTY's address book.

### Connecting through Digital Ocean

If you used the [Digital Ocean](/tutorials/install/digital-ocean.html) setup instructions, you can connect directly to your droplet using the Digital Ocean control panel.  The console is rudimentary and annoying, but it's a safe fallback if nothing else works for you.

1. Log into your Digital Ocean account and select "Droplets" from the top menu.
2. Select your droplet.
3. Select "Access".
4. Click "Launch Console".
{% include pretty_image.html file='/install-ares/droplet-connect.png' %}
4. Log in.

## Directories

**After** your game is installed, you will find the Ares code in your home directory.  It won't be there until you finish this install guide, but once it is, you can use the linux change directory command - `cd` - to change to the folder where the Ares code lives.

    cd - Goes to your home folder.
    cd aresmush - From your home folder, changes to the game folder.
    cd ares-webportal - From your home folder, changes to the web folder.