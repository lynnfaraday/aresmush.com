---
title: Start the Game
description: 
layout: page
tags:
- manage
- restart
---

If the game is ever stopped, you'll need to restart it. 

1. Log into your [Server Shell](/tutorials/install/server-shell.html).
2. Type `cd aresmush`.
3. Type `bin/startares`.

If the game is already running and you want to *restart* it, see [Shutting Down the Game](/tutorials/manage/shutdown.html) for information on how to stop the game first.

{% tip %} 
Always wait about 10 seconds or so between shutting the game down and restarting it.  This ensures that everything has a chance to shut down fully and cleanly.
{% endtip %}

To ensure the game automatically restarts when the server is rebooted, see [Auto-Restart After Server Reboot](/tutorials/manage/restart-after-reboot.html).

## Debug Mode

Both the game and portal can be started in [Debug Mode](/tutorials/code/debug-mode.html).  This is good for temporary debugging, but the game only stays running as long as you're logged in.  It's not a permanent solution.
