---
title: Replacing FS3
description:
layout: page
tags: 
- code
- fs3
- chargen
---

Although many identify [FS3](/fs3) and AresMUSH as being a conjoined pair, they really aren't.  FS3 is a plugin, the same as any other, and you can create any skill system you want for Ares.   

Here are some tips if you want to replace FS3 with a different system:

## Disabling FS3

Both the FS3 Skills and FS3 Combat plugins are optional plugins that can easily be disabled as explained in [Enabling and Disabling Plugins](/tutorials/config/plugins).  The code will still be there, but it just won't be accessible in any meaningful way.

> <i class="fa fa-info-circle"></i> **Tip:** You *can* eradicate the FS3 code from your code tree if you really want to, but it's not necessary.  If you go that route, be sure to excise all references to the `FS3Skills` and `FS3Combat` plugins from both the aresmush and web portal code.

## Customizing Chargen

The Chargen plugin is designed to be generic.  There's nothing FS3-specific about it other than a step in chargen referencing the FS3 "abilities" and "sheet" help files.   You may need to customize the steps of chargen to accommodate your new commands.  See [Customizing the Chargen Plugin](/tutorials/config/chargen) for details.

## Creating Your Own System

The real work, of course, is in creating a plugin for your new skill system to replace FS3.  The [Creating a Plugin Tutorial](/tutorials/code/create-plugin) is a good starting point.  It walks you through the creating of a simple 'traits' plugin (similar to what one might find on a comic book game).

Feel free to [ask for help](/feedback).  I want Ares to enable many kinds of games, not just FS3 ones.