---
title: Essential Config - Welcome Text
description: 
layout: tutorial
nextstep: theme
prevstep: plugins
tutorialIndex: tutorials/config/config-basics
essentialConfigTutorial: true
tutorialName: Essential Config
tags:
- config
---

Next we'll customize the text that gets shown to players when they connect to the game.

{% include toc.html %}

## Connect Screen

The connect screen is the first thing a player sees when they connect via a traditional MUSH client.

1. Go to Admin -> Setup in the web portal.
2. Select "Connect Screen".

{% include pretty_image.html file='web-portal/connect.png' %}

Enter some ASCII art.  [asciiflow.com](http://asciiflow.com/) is a handy online ASCII sketchpad.  You can use any [formatting codes](/tutorials/code/formatting.html), including color, in your connect screen text.  It is not necessary to escape out characters like backslashes and percent signs.

{% tip %}
Traditionally, MU connect screens should be no more than 24 lines in height.
{% endtip %}

## Home Page Text

Instead of the connect screen, web portal players are greeted by the home page text. Here you can place your custom welcome message.

1. Select Admin -> Setup.
2. Select "Home Page Text".

The home page text can contain [Markdown formatting](https://daringfireball.net/projects/markdown/syntax) and ansi formatting codes.

The blurb beneath explaining what Ares is cannot be changed without diving into the code.  It's an important introduction to Ares and MUSHing for new players.

## Terms of Service

The terms of service are displayed to new characters when they first connect to the game or register on the web portal.  You can use this to outline important game policies, like a code of conduct, age restrictions, etc.

1. Go to Admin -> Setup in the web portal.
2. Select "Terms of Service".

{% tip %}
If your ToS is long, you can always refer them to a wiki page instead of presenting a wall o' text.
{% endtip %}

If you don't want to show terms of service, just leave the text empty and it will disable the feature.
