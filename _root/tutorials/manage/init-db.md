---
title: Wipe the Database
description:
layout: page
tags: 
- manage
- database
---

You can restore your game to the default database.

> **SUPER IMPORTANT! This will wipe out anything that's already in the database - rooms, characters, bbposts, mail, everything.  Be sure before you run it.**

Log into your [Server Shell](/install-ares/server-shell) and run the following commands:

    cd aresmush
    bin/wipedb

You should see a whole bunch of spam as the game initializes, then messages telling you it's setting up various database objects, then a shutdown message. For example:

    Clearing out AresMUSH::Character
    ...
    Creating start rooms.
    ...
    Install complete.
    2014-12-09 16:49:15 INFO - Shutting down.
