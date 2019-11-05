---
title: Configuring the Status System
layout: page
tags:
- config
---

To configure the Status plugin:

1. Select Admin -> Setup.
2. Edit `status.yml`

{% include toc.html %}

## minutes_before_idle and minutes_before_idle_disconnect

You can configure how long someone must be idle before they are automatically considered AFK and how long someone must be idle before they are automatically disconnected from the game. 

You can disable either or both of these timers by commenting out or removing the line from the configuration file.

## colors

You can configure which colors are used to display different status values in the who list and other systems.  For example, the following configuration uses red for IC and highlighted blue for OOC.

    IC: "%xr"
    OOC: "%xh%xb"

## afk_cron

The game will periodically check for idle players and mark them AFK automatically.  There is a cron job to control when this happens.  By default it does this every hour.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/code/cron.html) for help if you want to change this or turn it off.

## Custom IC Start Locations

The first time a character goes onstage, they will start in the designated "IC Start Location".  By default this is the room named "Onstage", though most games will rename that to something appropriate to their theme--Downtown, Docking Bay, Town Square, etc.

At any time, you can change the IC starting location to a different room using the `icstart` command.  However, some games may want to have characters start at different locations based on faction/homeworld/etc.

You can create custom code to vary the IC starting location.  Edit `aresmush/plugins/status/custom_status.rb` and make the `custom_ic_start_location` method choose a room based on the character.  For example, this would make everyone from the "Martian" faction start off in the Mars Promenade and everyone else start in the Geneva Starport:

    def self.custom_ic_start_location(char)
      faction = char.group("Faction")
      if (faction == "Martian")
        return Room.named("Mars Promenade")
      else
        return Room.named("Geneva Starport")
      end
    end

{% note %} 
`Room.named` only works if the room name you're searching for is unique.  If it isn't, you'll need to do a more sophisticated search.  Make sure the room actually exists and that you don't delete it.
{% endnote %}
