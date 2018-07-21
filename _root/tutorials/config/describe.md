---
title: Configuring the description system.
tags:
- config
---
# Configuring the Description System

To change the Description plugin configuration:

1. Select Admin -> Setup.
2. Edit `describe.yml`

## tag_colors

The system will display tags next to the names of new characters and admin.  You can configure which colors are used for these tags.  You'll probably want to make them match the colors used in the [Status System](/tutorials/config/status).

## always_show_idle_in_rooms

This config option will show idle time next to every player's name in a room, even if they're not very idle.  If this option is false, idle time will only be shown for players who are marked AFK or are significantly idle.