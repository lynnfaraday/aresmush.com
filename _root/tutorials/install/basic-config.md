---
title: Configure the Game
description:
layout: install-ares
prevstep: install-game
nextstep: next-steps
tags: 
- install
- config
---

Next we'll configure some basic information about your game.  These settings determine how you connect to the game.  When your game opens, the MU* description, website, etc. will appear in the AresMUSH games directory.

> Note: You should use the 'ares' user for everything from now on, reserving the root user for rare server admin operations requiring root access.

1. Log into your [Server Shell](/tutorials/install/server-shell) with the **'ares' user**.

2. Copy/paste the following commands into the shell to run them.

        curl https://raw.githubusercontent.com/aresmush/aresmush/master/bin/install > install
    
        chmod +x install
    
        ./install

        Note:  If you already have a GitHub clone, you can pass the HTTPS clone urls to the install script:
               ./install <game code clone URL> <web portal clone URL>
               If you don't know what this means, don't worry about it!  It doesn't apply to you.

        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 


3.  Enter your ares password when prompted.

4.  Enter the information about your game, as explained below.

This will take several minutes.  There will be a lot of spam, but eventually it will say it's done.

## Game Settings

These are the basic settings you'll need to enter:

* **Database URL** - Where the database server lives.  If you're using the standard setup scripts, it's `127.0.0.1:6379`
* **Server Hostname** - The the game's [host name](/tutorials/install/getting-a-hostname) or IP Address.  Use the actual IP or host name, not just "localhost".
* **Server Telnet Port** - See ports, below.
* **Server Websocket Port** - See ports, below.
* **Server Website Port** - See ports, below.
* **MUSH Name** - Name your game.
* **MUSH Description** - A short blurb about your game (optional).
* **Website** - URL for your game (optional).
* **Category** - Pick which category best describes your MUSH for the Ares games directory.

### Ports

Whereas the old MUSH servers you might be useful have only one port (mush.somewhere.com port 1234) Ares actually uses several.  On a VPS you can use any port number you want, as long as it isn't being used by something else.

The **Telnet Port** is the general one that regular MU clients connect to.  (default 4201)

The **Websocket Port** and **Engine API Port** are behind-the-scenes ports that the Ares web portal uses to communicate with the game. (default 420 and 4203)

The **Web Portal Port** is where your web portal is running. (default 80)  '80' works if the web portal is the only website running on the server.  Otherwise you'll need to pick a custom port and access the web portal through a URL like http://mush.somewhere.com:8081.