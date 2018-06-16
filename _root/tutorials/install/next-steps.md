---
title: Next Steps
description:
layout: tutorial
tutorialName: Installing AresMUSH
tutorialIndex: tutorials/install
prevstep: install-game
tags: 
- install
- customization
- headwiz
---

Congratulations! Your AresMUSH game should now be up and running.

Try connecting to the game with your favorite MUSH client. Use the same hostname and port number you used in the server info configuration (e.g. mygame.somehost.com 4201).   Open the Web Portal in your browser (e.g. http://mygame.somehost.com). 

> If you can't connect, see the [troubleshooting tutorials](/tutorials/code) for help.  If you're stuck, you can [Ask for Help](/feedback) in a variety of ways.

## Default Characters

Ares comes with a "headwiz" character, akin to the "God" character on Penn and Tiny. 

    Username: Headwiz
    Password: change_me!

There's also a "builder" character:

    Username: Builder
    Password: change_me!

You can rename them if you like.  Be sure to log them in and change their passwords.

## Your Own Admin

The Headwiz character is special, and should be reserved for special occasions.  You should create your own personal admin character to use for everyday game activities.

1. Create a character from the login screen.
2. Log in and accept the terms of service.
3. Log in with Headwiz in another window.
4. Use `role/add <your character>=admin` to grant your character admin privileges.

> <i class="fa fa-info-circle"></i> **Tip:** You can also grant the 'coder' role to let someone access the tinker command to change the code.  Just be careful, because there's no limit to what someone can do once you give them access to the code (and thus the database).  See the [roles tutorial](/tutorials/manage/roles) for more information.

## Customization

Ares works out of the box, but there are a lot of configuration settings you can customize to get things just the way you like.  See [Configuring AresMUSH](/tutorials/config).

## Game Directory

The game information you entered will not show up in the [AresCentral Game Directory](http://arescentral.aresmush.com/games) until you mark your game as open.  See [Configuring the Game Directory](/tutorials/config/game_dir) to do that.