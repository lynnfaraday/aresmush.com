---
title: Essential Config - Config Files Introduction
description: 
layout: tutorial
nextstep: demographics
prevstep: theme
tutorialIndex: tutorials/config/config-basics
essentialConfigTutorial: true
tutorialName: Essential Config
tags:
- config
---

The remaining configuration options don't have dedicated screens like the ones we've seen so far.  Changing them requires that we edit the game's **configuration files**.

{% include toc.html %}

## Editing Config Files

To edit the configuration files:

1. Go to Admin -> Setup in the web portal.
2. Scroll down to the "Config Files" section.
3. You'll see a list of configuration files with settings you can change.

{% include pretty_image.html file='web-portal/game-setup.png' %}

{:start="4"}
4. Click any config file open it in an editor. 

{% include pretty_image.html file='web-portal/config.png' %}

Coders can also click on the "Advanced Editor" button to edit the raw config file.

## Understanding YAML

Ares config files use YAML, a simple formatting language.  Here's a little overview that should be enough to get you started.  You can refer back to this page as you go through the remaining steps of this tutorial and learn how to set various config options.

### String Values

Many config options are just strings, so you can edit them just by putting a value into the edit box.  For example:

{% include pretty_image.html file='config/string-param.png' %}

{% tip %} 
You may need quotes around your string values if they contain special characters, including ':'.
{% endtip %}

### Number Values

Number values are similar.

{% include pretty_image.html file='config/number-param.png' %}

{% tip %} 
Don't put quotes around values you want to be numbers, or they will be treated as strings instead.

Don't use a leading zero (unless it's a decimal), or Ruby will interpret it as an octal number.  0.25 is okay, but 0377 is octal-377, which is actually 255.
{% endtip %}

### List Values

Some config options are lists.  List the values, one per line, with a hyphen in front of each line.

{% include pretty_image.html file='config/list-param.png' %}

{% note %} 
If you don't want any values in the list, use the empty list marker `[]`. Do **not** just leave the text blank or your game will probably have errors.
{% endnote %}

### Hash Values

The most complex config options are multi-field data structures called hashes.

The simplest hashes are just name/value pairs, like this one listing demographic names and their corresponding command syntax:

{% include pretty_image.html file='config/hash-param-simple.png' %}

But many hashes have more complex, nested data, like this group config:

{% include pretty_image.html file='config/hash-param.png' %}

Here we have a name/value pair like `Faction:FactionData`, but note that FactionData is _itself_ a hash with name/value pairs like `desc:Description` and `value:FactionChoices`.

Hashes can be tricky to edit.  Make sure your indentation lines up and you have values for all required fields.

{% note %} 
If you ever want an empty hash, replace it with `{}`. Do **not** just leave it empty or your game will probably have errors.
{% endnote %}

### Advanced YAML

The tips above should be enough to get you started, but when you're ready you can see the [Understanding YAML](/tutorials/code/yaml.html) tutorial for more details and troubleshooting help.