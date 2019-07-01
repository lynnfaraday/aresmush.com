---
title: Getting Started as an Admin
description: 
layout: page
tags:
- admin
---

So you've got a brand new Ares install.  Where do you even begin?

Ares is fully-functional right out of the box.  People can hop on and begin playing immediately.  But you'll probably want to customize some stuff before you're ready to open.  This article helps you get started.

{% include toc.html %}

## Your Own Admin

The Headwiz character is special, and should be reserved for special occasions.  Your first step should be creating your own personal admin character to use for everyday game activities.

1. Create a character from the login screen.
2. Log in and accept the terms of service.
3. Log in with [Headwiz](/tutorials/install/next-steps.html#default-characters) in another window.
4. Use `role/add <your character>=admin` to grant your character admin privileges.
5. Use `role/add <your character>=coder` to grant your character coder privileges.
  
{% tip %} 
Be careful giving the *coder* role to others. It is the most powerful role in the game, because there's no limit to what someone can do once you give them access to the code (and thus the database).  See the [roles tutorial](/tutorials/manage/roles.html) for more information.
{% endtip %}

## Learning About Ares

If you're new to Ares, it's probably good to understand how it differs from more traditional MU servers.  Check out the following key articles under the [Playing Ares](/tutorials/play) section:

* [Ares for Vets](/tutorials/play/ares-for-vets.html) - Overview of Ares for veteran MU\* players.
* [Using the Web Portal](/web-portal) - Understanding Ares' web interface.

## Configuring Ares

Your next step will probably be doing some basic game configuration. See [Configuring Ares](/tutorials/config) for instructions on editing your game configuration. Here are a couple key settings to get you started:

1. Set up the [web portal colors](/tutorials/config/website.html#changing-the-colors).
2. Upload some [images](/tutorials/config/website.html#images) for the web portal home page.
3. Set up your [demographics and groups](/tutorials/config/demographics.html) for character creation.
4. Choose your [IC Time](/tutorials/config/ictime.html) settings, if you want IC time to be different from OOC time.
5. If you're using the FS3 skills system, tweak the [abilities and chargen limits](/tutorials/config/#basic-fs3-config).
6. If you're *not* using FS3, [disable it](/tutorials/config/plugins.html) and get a different [skills plugin](/tutorials/code/extras.html) instead.
7. When you're ready to go live, be sure to edit your [game directory info](/tutorials/config/game.html) and mark your game 'public' so others can find it.

As you continue to build your game, you'll probably find other [config settings](/tutorials/config) you want to tweak.

## Building the Grid

A full grid is not strictly required for Ares games, since scenes can take place in temp rooms via the scene system. Most games will want to build one, though, and for that you can see the [Building the Grid](/tutorials/manage/building.html) tutorial.

## Setting Up Staff Roles

Ares is set up with only three staff roles by default: builder, coder and admin. If you want other staff with limited permissions (e.g. app or plot staff), see [Using Roles and Permissions](/tutorials/manage/roles.html) to set that up.

## Getting Help

The aresmush.com tutorials are a good starting point, especially the system overviews in [Managing Ares](/tutorials/manage). For actual game command syntax, you'll want to see the in-game help files. (For example, `help manage apps` for application-related commands).  If you're ever stuck, don't hesitate to [ask for help](/feedback.html).

## Custom Code

For games that want to have custom code, there's a whole set of [coding tutorials](/tutorials/code) to help you learn Ares code from the ground up; no prior MUSHcode experience required.
