---
title: Shortcuts
description: 
layout: page
tags:
- code
- shortcuts
---

AresMUSH provides shortcuts for commands. Shortcuts let you use shorter versions (ex for examine) as well as aliases for commands that might have alternate names (finger --> profile, or outfit/remove --> outfit/delete).

{% note %} 
Players can create their own personal shortcuts in-game with the `shortcuts` command.
{% endnote %}

Usually you won't need to mess with the shortcuts, but if you are annoyed by something not being named the way you expect, you can add one.  

## Creating Shortcuts

Each plugin has its own shortcuts.  Here's an example of what shortcut config for the chargen plugin looks like:

        "chargen" : "cg"
        "cg/back": "cg/prev"

The main command is "cg" and it normally supports "cg/next" and "cg/prev" commands.  Our shortcuts will turn "chargen" --> "cg" and "cg/back" --> "cg/prev".

{% tip %} 
To avoid merge conflicts, you can add your own custom shortcuts to the  `custom.yml`  configuration file.  
{% endtip %}

## Chaining Shortcuts

It's possible to 'chain' a root shortcut and a switch shortcut.  For example:

    "chargen": "cg"
    "cg/back": "cg/prev"

If the player types chargen/back, it will be converted as follows:

    chargen/back -> cg/back -> cg/prev

You can't chain multiple shortcuts of the same type, so you can't convert cg/back -> cg/prev and then have another shortcut to convert cg/prev to something else.
