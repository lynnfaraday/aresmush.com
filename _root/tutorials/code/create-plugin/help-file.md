---
title: Create Help Files
description:
layout: tutorial
tutorialName: Creaing a Plugin
tutorialIndex: tutorials/code/create-plugin
nextstep: db-model
prevstep: config-file
tags: 
- code
- plugins
- help
---

Our commands will need help files.  This is the same as in the [Adding a Command](/tutorials/code/add-cmd), only this time we're going to have multiple files and our own table of contents section for Cortex.  Notice we're also using one of the optional fields: `order`.  This controls the order that help topics are displayed within the table of contents section.


In `aresmush/plugins/cortex/help/en/cortex.md`:

    ---
    toc: Cortex
    summary: The Cortex RPG system.
    order: 1
    ---
    # Cortex System
    
    This game uses a simplified implementation of the 
    [Cortex System](http://www.drivethrurpg.com/product/58488/Cortex-Classic-System-Role-Playing-Game) used in 
    the Firefly and Leverage RPGs.

In `aresmush/plugins/cortex/help/en/cortex_abilities.md`:

    ---
    toc: Cortex
    summary: Setting your abilities.
    ---
    # Cortex Abilities
    
    The Cortex system has several different kinds of abilities, and there are different commands for each.
    Ratings use dice values, so 'd2', 'd4', etc.
    
    `sheet` - View your character sheet.
    `attribute <name>=<die_step>` - Sets an attribute.
    ...


There's also a cortex_rolls.md help file containing help text for rolling abilities.