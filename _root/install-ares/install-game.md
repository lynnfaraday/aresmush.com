---
title: Install the Game
description:
layout: install-ares
prevstep: install-db
nextstep: get-the-code
tags: 
- install
- code
---

Ares needs a few things installed on the server.   For your convenience, a set of install scripts help to automate the necessary setup.

Log into your [Server Shell](/install-ares/server-shell) and copy/paste the following commands to run them:  
   
    curl https://raw.githubusercontent.com/lynnfaraday/aresmush/master/bin/install_ares1 > install_ares1  
    
    chmod +x install_ares1
    
    ./install_ares1

There will be a lot of spam but eventually it will say it's done.  If any weird errors happen, you can [ask for help](/feedback).

> The script will tell you the temporary password for your 'ares' user.  Keep this in a safe place; you will need it in the future.
