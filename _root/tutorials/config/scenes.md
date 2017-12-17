---
toc: ~config~ Configuring the Plugins
title: Configuring the scenes system.
---
# Configuring the Scenes System

To configure the Scenes plugin:

1. Go to the Web Portal's Admin screen.  
2. Select Advanced Config.
3. Edit `config_scenes.yml`

## Scene Types

You can configure the available scene types.  By default they are "event" and "social".  This helps categorize logs on the wiki and the web portal.

## Wiki Auto-Share

For sites using the automatic [wikidot integration](/tutorials/config/wikidot), you can configure whether sharing a scene automatically also posts a log to the wiki.

## Scene Set Cleanup Cron Jobs

The game will periodically clear scene sets from empty rooms.  This does not affect scenes themselves (which may span multiple days and need to remain even when empty), just the room scene sets (which are usually for short-lived events).  

There is a cron job to control when this happens.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/code/configuring-cron) for help if you want to change this or turn it off.


## Unshared Scene Deletion

There's also another cron job to periodically delete scenes that have been completed but not shared.  It also warns people about unshared scenes that are going to be deleted soon.

You can also configure how long to wait before deleting unshared scenes.


