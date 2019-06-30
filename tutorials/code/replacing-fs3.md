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
The article provides tips if you want to replace FS3 with a custom system.

{% tip %} 
FS3 is not the only skills system that Ares natively supports.  Other systems are available as [Extras](/tutorials/code/extras.html) and can be installed very easily.  This article doesn't apply to those systems.  It's about designing your own.
{% endtip %}

{% include toc.html %}

## Before You Begin

The truth is that skills systems are complex and tedious to implement.  There's a reason why people use FS3 even when it's not the best fit for a game.  Be prepared for some hard work.

It is recommended that you've done the all of the [basic Ares coding tutorials](/tutorials/code) and have dabbled a bit in some simpler projects before you try to tackle a skills system.  You wouldn't try to implement a skills system in MUSHCode on your first day, and you shouldn't do it with Ares either.  Don't try to run before you can walk.

## Disabling FS3

Both the FS3 Skills and FS3 Combat plugins are optional plugins that can easily be disabled as explained in [Enabling and Disabling Plugins](/tutorials/config/plugins.html).  The code will still be there, but it just won't be accessible in any meaningful way.

{% tip %} 
It's advised that you leave the actual FS3 code in your game and just disable them.  There are various dependencies scattered throughout the code, and excising all of them requires some code surgery that's frankly more trouble than it's worth.  Just disable the plugins and you won't have to worry about it.
{% endtip %}

## Customizing Chargen

The Chargen plugin is designed to be generic.  You'll just need to customize the steps of chargen to remove references to the FS3 help files and add ones for your new commands.  See [Customizing the Chargen Plugin](/tutorials/config/chargen.html) for details.

## Cortex Walkthrough

The real work, of course, is in creating a plugin for your new skill system to replace FS3.  The [Creating a Plugin Tutorial](/tutorials/code/create-plugin) is a good starting point.  It walks you through the creation of the Cortex plugin.  Since many skill systems share similar features, the Cortex and FS3 examples will hopefully get you started making your own.

Feel free to [ask for help](/feedback.html).  I want Ares to enable many kinds of games, not just FS3 ones.

## FS3 Code Overview

If you're going to make your own system, it can be helpful to use the FS3 code as a guide.  Many skill systems share the same basic building blocks, after all.   The [FS3 Code Roadmap](/tutorials/code/fs3-roadmap.html) tutorial may help you there.