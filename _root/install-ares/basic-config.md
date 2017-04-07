---
title: Configure the Game
description:
layout: install-ares
prevstep: get-the-code
nextstep: next-steps
tags: 
- install
- config
---

Log into your [Server Shell](/install-ares/server-shell) with the **'ares' user**.

> Note: You should use the 'ares' user for almost everything from now on.  Only a few special server operations require the root user's special privileges.

Copy/paste the following commands into the shell to run them.  If you created a [custom fork](/install-ares/get-the-code) of the AresMUSH code in the previous step, use the clone URL for your fork.  Otherwise use `https://github.com/lynnfaraday/aresmush.git`.

    curl https://raw.githubusercontent.com/lynnfaraday/aresmush/master/bin/install > install
    
    chmod +x install
    
    ./install YOUR_CLONE_URL_GOES_HERE

This will prompt you for a few pieces of information about your game:

* **Database URL** - Where the database server lives.  If you followed the Digital Ocean setup, it's `127.0.0.1:6379`
* **Database Password** - Create a password for accessing your database.
* **Server Hostname** - The the game's [host name](/install-ares/getting-a-hostname) or IP Address.
* **Server Port** - Which port the game is running on.  Some MUSH hosts will assign you a port number.  If you're using Digital Ocean you can pretty much pick any port you want as long as it's not being used by something else.  4201 has traditionally been the default MUSH port number, so that's a safe bet.
* **MUSH Name** - Name your game.
* **MUSH Description** - A short blurb about your game (optional).
* **Website** - URL for your game (optional).
* **Category** - Pick which category best describes your MUSH for the Ares games directory.

> You can change this information later using the game's Web Portal, or by editing the text files in the `aresmush/game/config` directory.