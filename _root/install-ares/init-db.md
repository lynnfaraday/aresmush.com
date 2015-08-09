---
title: Initialize the Database
description:
layout: install-ares
prevstep: basic-config
nextstep: test-game
tags: 
- install
- database
---

Now we will initialize the default database.

> **SUPER IMPORTANT! This will wipe out anything that's already in the database, so only use it when installing fresh.**

From your MUSH server shell, type:

    cd aresmush (if you aren't there already)
    bin/init

You should see a whole bunch of spam as the game initializes, then messages telling you it's setting up various database objects, then a shutdown message. For example:

    Clearing out AresMUSH::Character
    ...
    Creating start rooms.
    ...
    Install complete.
    2014-12-09 16:49:15 INFO - Shutting down.

You can come back and do this again later if for some strange reason you want to obliterate your game.