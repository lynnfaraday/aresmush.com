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

If you want people from different factions/homeworlds/etc. to start in different places, you can use the [custom IC starting location hook](/tutorials/code/hooks/starting-location.html).