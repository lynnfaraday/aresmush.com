---
title: Shutting Down the Game
description:
layout: page
tags: 
- manage
- restart
- shutdown
---

If you ever need to stop your game, the best way is to use the `shutdown` command in-game.

If that doesn't work, you can:

1. Log into the Web Portal with an admin character.
2. Go to Admin -> Manage.
3. Click "Shutdown".

## Restarting the Game

Once the game is shut down, see [Starting the Game](/tutorials/manage/start.html) to restart it.

> <i class="fa fa-info-circle"></i> **Tip:** Always wait about 10 seconds or so between shutting the game down and restarting it.  This ensures that everything has a chance to shut down fully and cleanly.

## Hard Kill

As a last resort, if none of the above steps work, you can kill the server process.  

1. Log into your [Server Shell](/tutorials/install/server-shell.html).
2. Change into the aresmush folder using `cd aresmush`.
3. Run the kill script: `bin/killares`.

If for some reason the process ID isn't there or the kill command doesn't work, you'll need to figure out the game process.  On most servers, you can execute the command `ps -aux | grep startares` and see something like this:

    lynn     **25742**  0.0  6.5 233656 69084 ?        Sl   06:29   0:04 ruby /home/lynn/.rvm/gems/ruby-2.1.5/bin/rake startares

The bold number in the second column is the process ID (25742). You can then do `kill -9 <process ID>`.