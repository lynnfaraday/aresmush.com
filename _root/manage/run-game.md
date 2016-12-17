---
title: Start the Game
description:
layout: page
tags: 
- manage
- restart
---

Now you're ready to start the game for real. 

Log into your [Server Shell](/install-ares/server-shell) and run the following commands:

    cd aresmush
    bin/startares

If you're trying to fix a startup problem, you can start in development mode using this command:

    bin/devstart

In development mode, you will see log messages appear 'live' on the console as they happen.  However, the game will stop running if you hit CONTROL-C, close down your connection, or hit the inactivity timeout.