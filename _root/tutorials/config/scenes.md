---
toc: ~config~ Configuring the Plugins
title: Configuring the scenes system.
---
# Configuring the Scenes System

To configure the Scenes plugin:

1. Go to the Web Portal's Admin screen.  
2. Select Advanced Config.
3. Edit `scenes.yml`

## scene_types

You can configure the available scene types.  By default they are "event" and "social".  This helps categorize logs on the wiki and the web portal.

## ooc_color

You can configure the color that is used in OOC asides. You can use multiple color codes.  For example: \%xh\%xc

## room_cleanup_cron

The game will periodically clear scene sets and scenes from empty rooms.  

There is a cron job to control when this happens.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/code/configuring-cron) for help if you want to change this.

> Note: Scenes in temp rooms will remain open as long as there are characters still in the room - even if they're logged off.  Scenes in grid rooms will stop after everyone logs off.

## unshared_scene_cleanup_cron

There's also another cron job to periodically delete scenes that have been completed but not shared.  It also warns people about unshared scenes that are going to be deleted soon.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/code/configuring-cron) for help if you want to change this.

## unsared_scene_deletion_days and unshared_scene_warning_days

You can configure how long to wait before deleting unshared scenes.  For example:

    unsared_scene_deletion_days: 20
    unshared_scene_warning_days: 13

Whenever the unshared scene cron job runs, it will warn participants in unshared scenes that were completed more than 13 days age.  It will delete unshared scenes that were 