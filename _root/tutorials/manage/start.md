---
title: Start the Game
description:
layout: page
tags: 
- manage
- restart
---

If the game is ever stopped, you'll need to restart it. 

1. Log into your [Server Shell](/tutorials/install/server-shell).
2. Type `cd aresmush`.
3. Type `bin/startares`.

If the game is already running and you want to *restart* it, see [Shutting Down the Game](/tutorials/shutdown) for information on how to stop the game first.

To ensure the game automatically restarts when the server is rebooted, see [Auto-Restart After Server Reboot](/tutorials/manage/restart-after-reboot).

> Tip:  You can also run `bin/devstart` if you want to start it in debug mode, so you can see log messages 'live' on the console.  In debug mode, the game will stop running if you hit CONTROL-C or close down your connection, so it's only good for short debug sessions.   You must start the Web Portal separately in debug mode using `bin/devportal`.
