---
title: Configuring the achievements system.
tags:
- config
---
# Achievements - Configuration

Achievements is an optional plugin that lets you set up in-game achievements for characters to earn.   To configure the Achievements plugin:

1. Select Admin -> Setup.
2. Edit `achievements.yml`

## types

You can configure what achievement types exist and what their icon is.  Icons come from the [Font Awesome](https://fontawesome.com/?from=io) icon library, so you'll see codes like `fa-globe` and `fa-users`.

> <i class="fa fa-info-circle"></i> **Tip:** Don't erase the existing types, because they're used by various plugins.  You can change their icons, though.

## Adding Custom Achievements

Plugins control what achievements are available.  If you want some piece of code to award an achievement, just call: `Achievements.award_achievement(char, achievement_name, type, message)`.  For example:

    Achievements.award_achievement(enactor, "fs3_luck_spent", 'fs3', "Spent a luck point.")

> <i class="fa fa-info-circle"></i> **Tip:** You don't have to check to see if the person already has the award; the Achievements plugin does that automatically.  It checks if they already have an achievement with that same name.  If so - it won't award the achievement again.

Each achievement can only be received one time, though you can define different 'levels' of the achievement with different names.  For example, joining combats has several levels: fs3_joined_combat_1, fs3_joined_combat_10, etc.
