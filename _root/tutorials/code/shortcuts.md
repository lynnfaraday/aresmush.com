---
title: Shortcuts
description:
layout: page
tags: 
- code
- shortcuts
---

AresMUSH provides shortcuts for commands. Shortcuts let you use shorter versions (ex for examine) as well as aliases for commands that might have alternate names (finger --> profile, or outfit/remove --> outfit/delete).

> **Note:** Players can create their own personal shortcuts in-game with the `shortcuts` command.

Usually you won't need to mess with the shortcuts, but if you are annoyed by something not being named the way you expect, you can add one.   

## Creating Shortcuts

Each plugin has its own shortcuts.  Here's an example of what shortcut config for the chargen plugin looks like:

        "chargen" : "cg"
        "cg/back": "cg/prev"

The main command is "cg" and it normally supports "cg/next" and "cg/prev" commands.  Our shortcuts will turn "chargen" --> "cg" and "cg/back" --> "cg/prev".

> **Tip:** To avoid merge conflicts, you can add your own custom shortcuts to the `custom.yml` configuration file.  

## Shortcut Order

Commands may only match a **single** shortcut, and shortcuts are matched in order.  

Take the following example from the jobs shortcuts:

        "jobs": "job"
        "job/mine" : "job/filter mine"

The jobs --> job entry applies to all jobs commands, so jobs/status --> job/status.

There's an additional shortcut that turns job/mine -> job/filter mine.

But since only one shortcut can apply, jobs/mine --> job/mine.  It doesn't trigger the second shortcut.

To turn jobs/mine -> job/filter mine, we would need to add a specific shortcut for that at the top of the list;

        # This must come first before the jobs -> job conversion
        "jobs/mine" : "job/filter mine"
        "jobs": "job"
        "job/mine" : "job/filter mine"
