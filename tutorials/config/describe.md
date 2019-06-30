---
title: Configuring the Description System
layout: page
tags:
- config
---

To change the Description plugin configuration:

1. Select Admin -> Setup.
2. Edit `describe.yml`

{% include toc.html %}

## glance_format

This allows you to format what the "glance" command displays for each character.  For example, if the format is:

    "%{height_title} height, %{age} year-old %{gender_noun} with %{hair} hair."

Then it will show:

    "Average height, 25 year-old man with brown hair."

Variables are inserted using the `%{variablename}` syntax.  Available variables include:

* All basic demographics fields you've defined in the [Demographics Configuration](/tutorials/config/demographics.html) in both all-lowercase (`%{hair}`, `%{skin}`, etc.) and titlecase (`%{hair_title}`, `%{height_title}`, etc.) You might use the titlecase ones at the beginning of the sentence (like height in the example above) or if the demographic is a proper noun, like nationality.
* Age, as a number.  (`%{age}`)
* Their gender noun: man, woman, person. (`%{gender_noun}`)

## exit_start_bracket and exit_end_bracket

These options control the appearance of exit names in room descriptions.  The default is square brackets, so exits appear like:

     [N] Town Square

## tag_colors

The system will display tags next to the names of new characters and admin.  You can configure which colors are used for these tags.  You'll probably want to make them match the colors used in the [Status System](/tutorials/config/status.html).

## always_show_idle_in_rooms

This config option will show idle time next to every player's name in a room, even if they're not very idle.  If this option is false, idle time will only be shown for players who are marked AFK or are significantly idle.