---
title: Test the Game
description:
layout: tutorial
installTutorial: true
tutorialName: Installing AresMUSH
tutorialIndex: tutorials/install
prevstep: init-db
nextstep: run-game
tags: 
- install
---

Now the fun part.  Let's try out the game in "developer mode".

> In developer mode, the game will only stay running until you hit CONTROL-C, close down your connection, or hit the inactivity timeout. This is a quick test, and not the usual way you run Ares. Hit CONTROL-C to stop it when you're done.

From your MUSH server shell, type:

    cd aresmush (if you aren't there already)
    bin/devstart

You will see a whole bunch of messages print out, but after about 30 seconds or so they'll stop and your game should be up and running.

Try connecting to it via your favorite MUSH client. Use the same hostname and port number you used in the server info configuration (e.g. mygame.somehost.com 4201).

## Troubleshooting

If your game doesn't start or spits out error messages, review the database.yml and server.yml files in game/config to ensure they're correct. If none of that helps, see [Getting Help](/feedback).