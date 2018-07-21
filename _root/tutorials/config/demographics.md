---
title: Configuring demographics.
tags:
- config
---
# Configuring the Demographics Plugin

To configure the Demographics plugin:

1. Select Admin -> Setup.
2. Edit `demographics.yml`

## min_age and max_age

You can enforce minimum and maximum age limits in chargen with the `min_age` and `min_age` values.

If you don't want a limit, just set them to 0 and 99 respectively.

## demographics

You are able to specify all of the demographics you're going to use.  

> <i class="fa fa-info-circle"></i> **Tip:** Use all-lowercase names!  These are going to be converted into code variables, and lowercase is important.
 
### required_properties

Any demographics you list in `required_properties` are mandatory in chargen.  

> <i class="fa fa-info-circle"></i> **Tip:** The names here must exactly match the names in the demographics list.

### editable_properties

Any demographics you list in `editable_properties` may be changed after chargen.  You want to allow mutable things like hair color to change, but probably not birthdate or eye color.

> <i class="fa fa-info-circle"></i> **Tip:** The names here must exactly match the names in the demographics list.

## nickname_field and nickname_format

If you set `nickname_field` to the name of a demographic field (for example - callsign), that field will be shown alongisde the character's name in places like the who list and room description.  The field will also be included in 'whois' searches.

If you're using the nickname field, you can control how the name and nickname are shown together using the `nickname_format` config option.  It's a standard Ruby format string with two parameters: name and nickname.  Here are some examples:

    "%{name} (%{nickname})"   Steve (Captain America)
    "%{name}:%{nickname}"     Steve:Captain America

## help_text

Since demographics are so flexible, the help file refers players to the `demographics` command to list the available demographic commands.  If you want more detailed instructions, you can configure it as shown below.  Any demographics not listed will show the standard help (e.g. `hair <value>`).

    help_text:
        physique: '%xcphysique <build/body type>%xn - athletic, wiry, slim, pudgy, etc.'

## groups

The groups list is where you set up your game's groups.  Each group has a description and a list of possible values.  Each value has a name and a description.

If you omit the values, the group will be freeform, allowing the player to specify any value they want.  This is commonly used for Position if you don't have a fixed list of available positions but still want Position to show up in census and whatnot like the other groups.

    Faction:
        desc: "Military faction."
        values:
            Navy: "Join the fleet, see the worlds."
            Marines: "Semper fi."

## Shortcuts

Ares will automatically create shortcuts for your group names - a singular one to set the group (e.g. `faction <value>` for `group/set <value>`) and a plural one to list the values (e.g. `factions` for `group faction`).  If you have irregularly-spelled groups, you can add a custom value to the `shortcuts` setting in the demographics config:

        "colonies": "group colony"

Similarly, Ares will create shortcuts for your demographics (e.g. `hair <value>` for `demographics/set hair=<value>`).

In the unlikely event that you don't want these auto-shortcuts, you can disable them by setting `disable_auto_shortcuts` to true.  Then you'll be responsible for setting your own shortcuts.  