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

The [Headwiz character](/tutorials/install/next-steps.html#default-characters) is special, and should be reserved for rare occasions.  Your first step should be creating your own personal admin character to use for everyday game activities.

1. Create a character from the login screen.
2. Log in and accept the terms of service.
3. Log in with [Headwiz](/tutorials/install/next-steps.html#default-characters) in another window.
4. Use `role/add <your character>=admin` to grant your character admin privileges.
5. Use `role/add <your character>=coder` to grant your character coder privileges.
  
{% tip %} 
Be careful giving the *coder* role to others. It is the most powerful role in the game, because there's no limit to what someone can do once you give them access to the code (and thus the database).  If you are not coding yourself, you may even want to reserve it for headwiz, or for a special coder admin char that's separate from the one you use for day to day operations. See the [roles tutorial](/tutorials/manage/roles.html) for more information.
{% endtip %}

## Learning About Ares

If you're new to Ares, it's probably good to understand how it differs from more traditional MU servers.  Check out the following key articles under the [Playing Ares](/tutorials/play) section:

* [Ares for Vets](/tutorials/play/ares-for-vets.html) - Overview of Ares for veteran MU\* players.
* [Using the Web Portal](/web-portal) - Understanding Ares' web interface.

## Configuring Ares

The [Essential Config](/tutorials/config/config-basics) tutorial will guide you through basic game setup.

As you continue to build your game, you'll probably find other [config settings](/tutorials/config) you want to tweak.

## Building the Grid

Even though Ares has a full-fledged scene system using temporary rooms, most games will want to build a grid. Building commands are very similar to old-school MUSH servers. For help, see 'Help -> Game Help -> Building Tutorial' in the web portal, or `help building tutorial` from the in-game commands.

## Getting Help

There are two main places you'll find information:

* The [Managing Ares](/tutorials/manage) tutorials give general overviews of admin tasks.
* The in-game help system (available in the web portal's Help menu or the in-game `help` command) give detailed command help and syntax.
 
If you're ever stuck, don't hesitate to [ask for help](/feedback.html).

## Custom Code

For games that want to have custom code, there's a whole set of [coding tutorials](/tutorials/code) to help you learn Ares code from the ground up; no prior MUSHcode experience required.
