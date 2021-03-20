---
title: Configuring the Demographics Plugin
layout: page
tags:
- config
---

To configure the Demographics plugin:

1. Select Admin -> Setup.
2. Edit `demographics.yml`

{% include toc.html %}

## Demographics vs Groups

Both groups and demographic fields allow you to record information about a character - be it their eye color or hometown. Philosophically-speaking, groups are for things that associate characters with one another (e.g. everyone from France, all Marines, all Craftspeople, etc.)

Groups have a few extra features that regular demographics fields don’t:

* Automatically tie into the census. (How many Craftspeople are there?)
* Can be restricted to a set list of values, with associated commands for showing the list. (Here are the available nations.)
* Can be used to set starting skills by group. (All Pilots must start with Piloting:3.)
* Can be used to organize people on the web character gallery.

The latter two are really only useful with a fixed list, but the census should work sensibly even when you have a freeform group.

## min_age and max_age

You can enforce minimum and maximum age limits in chargen with the `min_age` and `max_age` values.

If you don't want a limit, just set them to 0 and 99 respectively.

## demographics

You are able to specify all of the demographics you're going to use.  Some tips:

* Use all-lowercase names!  These are going to be converted into code variables, and lowercase is important.
* You may use multi-word names (e.g. 'full name'), but their shortcut command will become one word  (`fullname John Smith`).
* Don't use demographic names that conflict with other commands (like 'job').
* Demographics will be displayed in character profiles in the order you enter them.
 
### required_properties

Any demographics you list in `required_properties` are mandatory in chargen.  

{% tip %} 
The names here must exactly match the names in the demographics list, including capitalization and spacing.
{% endtip %}

### editable_properties

Any demographics you list in `editable_properties` may be changed after chargen.  You want to allow mutable things like hair color to change, but probably not birthdate or eye color.

{% tip %} 
The names here must exactly match the names in the demographics list, including capitalization and spacing.
{% endtip %}

### private_properties

Any demographics you list in `private_properties` are secret.  They will only show up when viewed by staff or by the character themselves.

{% tip %} 
The names here must exactly match the names in the demographics list, including capitalization and spacing.
{% endtip %}


## nickname_field and nickname_format

If you set `nickname_field` to the name of a demographic field (for example - callsign), that field will be shown alongisde the character's name in places like the who list and room description.  The field will also be included in 'whois' searches.

If you're using the nickname field, you can control how the name and nickname are shown together using the `nickname_format` config option.  It's a standard Ruby format string with two parameters: name and nickname.  Here are some examples:

    "%{name} (%{nickname})"   Steve (Captain America)
    "%{name}:%{nickname}"     Steve:Captain America

## help_text

Since demographics are so flexible, the help file refers players to the `demographics` command to list the available demographic commands.  If you want more detailed instructions, you can configure it as shown below.  Any demographics not listed will show the standard help (e.g. `hair <value>`).

    physique: '%xcphysique <build/body type>%xn - athletic, wiry, slim, pudgy, etc.'
    gender: '%xcgender <male/female/other>%xn'


{% tip %} 
The names here must exactly match the names in the demographics list, including capitalization and spacing.
{% endtip %}

## groups

The groups list is where you set up your game's groups.  Each group has a description and a list of possible values.  Each value has a name and a description.

If you omit the values, the group will be freeform, allowing the player to specify any value they want.  This is commonly used for Position if you don't have a fixed list of available positions but still want Position to show up in census and whatnot like the other groups.

    Faction:
        desc: "Military faction."
        wiki: some-page
        values:
            Navy: "Join the fleet, see the worlds."
            Marines: "Semper fi."

The wiki page is optional, and the group directory will automatically link to that wiki page.

{% tip %} 
The group names must use the capitalization you want in-game.  For example, "Navy" or "CIA".
{% endtip %}

{% tip %} 
Don't use group names that conflict with other commands (like 'job').
{% endtip %}


{% note %} 
There are a couple of other config options that reference groups, including [FS3 Chargen Starting Skills](/tutorials/config/fs3skills_chargen.html#starting_skills), [Chargen Welcome Messages](/tutorials/config/chargen.html#messages), [Ranks](/tutorials/config/ranks.html#rank_group), and the [Web Portal Character Gallery](/tutorials/config/website.html#character_gallery_group-and-character_gallery_subgroup).  Be sure to make those options reference valid groups, or you will get errors.
{% endnote %}

## Group Shortcuts

Ares will automatically create shortcuts for your group names - a singular one to set the group (e.g. `faction <value>` for `group/set <value>`) and a plural one to list the values (e.g. `factions` for `group faction`).  If you have irregularly-spelled groups, you can add a custom value to the `shortcuts` setting in the demographics config:

        "colonies": "group colony"

Similarly, Ares will create shortcuts for your demographics (e.g. `hair <value>` for `demographics/set hair=<value>`).

In the unlikely event that you don't want these auto-shortcuts, you can disable them by setting `disable_auto_shortcuts` to true.  Then you'll be responsible for setting your own shortcuts.  

## census_fields

You can configure which fields appear on the full census screen.  For each field, you can specify the column title, width, and where to get the data.  For example, this config makes two columns (25 wide and 15 wide) showing name and position.

    - field: name
      width: 25
      title: Name
    - field: group
      value: position
      width: 15
      title: Position

A complete description of all available fields - and how to create custom fields - can be found in the "who_fields" option in the [Who/Where Configuration](/tutorials/config/who.html).

## genders

The list of genders is configurable.  For each gender, you need to specify the various pronouns and a noun, which may be used in coded commands.

    Male:
      possessive_pronoun: his
      subjective_pronoun: he
      objective_pronoun: him
      noun: man 