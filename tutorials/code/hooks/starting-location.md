---
title: Custom IC Starting Location
description: 
layout: page
tags:
- code
- custom hooks
---

> This [custom code hook](/tutorials/code/custom-hooks.html) is part of the Status plugin.

Approved characters normally start in the designated "IC Start Location"--Downtown, Docking Bay, Town Square, etc.  You can change this standard location at any time using the `icstart` command.

However, some games may want to have characters start at different locations based on faction/homeworld/etc.  To do this, you'll need to use the custom code hook to vary the IC starting location.  

Edit `aresmush/plugins/status/custom_status.rb` and make the `custom_ic_start_location` method choose a room based on the character.  For example, this would make everyone from the "Martian" faction start off in the Mars Promenade and everyone else start in the Geneva Starport:

    def self.custom_ic_start_location(char)
      faction = char.group("Faction")
      if (faction == "Martian")
        return Room.named("Mars Promenade")
      else
        return Room.named("Geneva Starport")
      end
    end

{% note %} 
`Room.named` only works if the room name you're searching for is unique.  If it isn't, you'll need to do a more sophisticated search.  If the custom room isn't found, the system will revert to the standard IC starting location.
{% endnote %}
