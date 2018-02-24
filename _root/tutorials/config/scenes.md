---
toc: ~config~ Configuring the Plugins
title: Configuring the scenes system.
---
# Configuring the Scenes System

To configure the Scenes plugin:

1. Select Admin -> Setup.
2. Edit `scenes.yml`

## scene_types

You can configure the available scene types.  By default they are "event", "social" and "vignette".  This helps categorize logs on the web portal.

## ooc_color

You can configure the color that is used in OOC asides. You can use multiple color codes.  For example: %xh%xc

## notify_of_web_watching

By default, players watching a scene from the web portal only show up in the room description; there's no active notification when people start and stop watching.   You can turn on that notification by setting `notify_of_web_watching` to true.  Be warned, though, it can be spammy.

## room_cleanup_cron

The game will periodically clear scene sets and scenes from empty rooms.  

There is a cron job to control when this happens.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/config/configuring-cron) for help if you want to change this.

> Note: Scenes in temp rooms will remain open as long as there are characters still in the room - even if they're logged off.  Scenes in grid rooms will stop after everyone logs off.

## delete_unshared_scenes

There's also another cron job to periodically delete scenes that have been completed but not shared.  It also warns people about unshared scenes that are going to be deleted soon.   You can turn this feature on and off by setting `delete_unshared_scenes` to true or false.

If it's set to true, there are a few other things you can configure:

### unshared_scene_cleanup_cron

See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/config/configuring-cron) for help if you want to change this.

### unsared_scene_deletion_days and unshared_scene_warning_days

You can configure how long to wait before deleting unshared scenes.  For example:

    unsared_scene_deletion_days: 20
    unshared_scene_warning_days: 13

Whenever the unshared scene cron job runs, it will warn participants in unshared scenes that were completed more than 13 days ago.  It will delete unshared scenes that were 