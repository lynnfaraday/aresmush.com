---
title: Next Steps
description:
layout: tutorial
installTutorial: true
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

> If you can't connect, see the [troubleshooting tutorials](/tutorials/code) for help.  If you're stuck, you can [Ask for Help](/feedback.html) in a variety of ways.

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

{% include tip.html content="You can also grant the 'coder' role to let someone access the tinker command to change the code.  Just be careful, because there's no limit to what someone can do once you give them access to the code (and thus the database).  See the [roles tutorial](/tutorials/manage/roles.html) for more information." %}

## Game Directory Information

The game information you entered will not show up in the [AresCentral Game Directory](http://arescentral.aresmush.com/games) until you mark your game as open.  See [Configuring the Game Directory](/tutorials/config/game_dir.html) to do that.

## Tutorials

Ares works out of the box, but there are a lot of things you can configure to make the game your own.  You can even alter the code to add custom functionality.  A rich suite of tutorials are available to help you on your way, including:

* [Playing Ares](/tutorials/play) - What's different between Ares and other game servers, including the web portal and player handles.
* [Configuring Ares](/tutorials/config) - Learn all about how you can configure Ares' appearance and behavior.
* [Managing Ares](/tutorials/manage) - All about running an Ares game, including building, setting up staff roles, and performing basic server maintenance.
* [Coding for Ares](/tutorials/code) - Learn Ares code from the ground up.