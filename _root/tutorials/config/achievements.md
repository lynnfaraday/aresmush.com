---
title: Configuring the Achievements System
tags:
- config
layout: page
---

Achievements is an optional plugin that lets you set up in-game achievements for characters to earn.   To configure the Achievements plugin:

1. Select Admin -> Setup.
2. Edit `achievements.yml`

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## announce_channel

By default, announcements are only shown to the person who received them.  You can optionally have them announced on a channel.  Just set `announce_channel` to the name of the channel you wish to use.  Leave the setting blank to disable the announcement.

## types

You can configure what achievement types exist and what their icon is.  Standard types include things like community, story, and portal.  Icons come from the [Font Awesome](https://fontawesome.com/?from=io) icon library, so you'll see codes like `fa-globe` and `fa-users`.

> <i class="fa fa-info-circle"></i> **Tip:** Don't erase the existing types, because they're used by various plugins.  You can change their icons, though, and add new types.

## custom_achievements

The standard plugins come with a number of achievements.  You can also define your own using the `custom_achievements` setting.  For each achievement, you define:

* Internal name (e.g. something_special)
* Displayed Message (e.g.  Did something special.)
* Achievement Type (e.g. story, portal, etc.)

For example:

    custom_achievements:
      something_special:
        message: "Did something special."
        type: "story"

You can award custom achievements with the `achievement/add` command.

If you want some piece of code to award a custom achievement automatically, just call: `Achievements.award_achievement(char, achievement_name)`.  For example:

    Achievements.award_achievement(enactor, "something_special")

> <i class="fa fa-info-circle"></i> **Tip:** You don't have to check to see if the person already has the award; the Achievements plugin does that automatically.

Each achievement can only be received one time, though you can define different 'levels' of the achievement with different names.  For example, joining combats has several levels: `fs3_joined_combat_1`, `fs3_joined_combat_10`, etc.
