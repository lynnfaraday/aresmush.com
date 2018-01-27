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

Log into your [Server Shell](/tutorials/install/server-shell) with the **'ares' user**.

> Note: You should use the 'ares' user for almost everything from now on.  Only a few special server operations require the root user's special privileges.

Copy/paste the following commands into the shell to run them.

    curl https://raw.githubusercontent.com/aresmush/aresmush/master/bin/install > install
    
    chmod +x install
    
    ./install https://github.com/aresmush/aresmush.git

This will prompt you for a few pieces of information about your game:

* **Database URL** - Where the database server lives.  If you followed the Digital Ocean setup, it's `127.0.0.1:6379`
* **Database Password** - Create a password for accessing your database.
* **Server Hostname** - The the game's [host name](/tutorials/install/getting-a-hostname) or IP Address.
* **Server Telnet Port** - See ports, below.
* **Server Websocket Port** - See ports, below.
* **Server Website Port** - See ports, below.
* **MUSH Name** - Name your game.
* **MUSH Description** - A short blurb about your game (optional).
* **Website** - URL for your game (optional).
* **Category** - Pick which category best describes your MUSH for the Ares games directory.

> You can change this information later using the game's Web Portal, or by editing the text files in the `aresmush/game/config` directory.

## Ports

Whereas the old MUSH servers you might be useful have only one port (mush.somewhere.com port 1234) Ares actually uses several.

The **Telnet Port** is the general one that regular MU clients connect to.  

The **Websocket Port** and **Engine API Port** are behind-the-scenes ports that the Ares web portal uses to communicate with the game.

The **Web Portal Port** is where your web portal is running.  For instance, if it's 8081 then the website will be running on http://mush.somewhere.com:8081.  Use port 80 the web portal is the only port running on the game.


### Picking Ports

Some MUSH hosts will assign you a port number.  If you're using Digital Ocean or another VPN you can pretty much pick any port you want as long as it's not being used by something else.  

4201 has traditionally been the default MUSH port number.  A common choice is to use 4201 for the telnet port and 4202 for the websocket port.

For the web server port, you can use port 80 if there are no other websites running on the server.  Otherwise you'll need to pick a different HTTP port.  8181 is a common choice.