---
title: Configuring the Scenes System
layout: page
tags:
- config
---

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

To configure the Scenes plugin:

1. Select Admin -> Setup.
2. Edit `scenes.yml`

## scene_types

You can configure the available scene types.  By default they are "event", "social" and "vignette".  This helps categorize logs on the Web Portal.

## ooc_color

You can configure the color that is used in OOC asides. You can use multiple color codes.  For example: %xh%xc

## ooc_lounge_channel

You can force people in the OOC lounge/offstage room to talk on a channel instead of in the room.  Just set `ooc_lounge_channel` to the channel you suggest they talk on instead.  This ensures that chatter can be accessible to all players - including ones on the web portal - and also subject to reporting with the Ares harassment tools.

## room_cleanup_cron

The game will periodically clear scene sets and scenes from empty rooms.  

There is a cron job to control when this happens.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/code/cron.html) for help if you want to change this.

{% note %} 
Scenes in temp rooms will remain open as long as there are characters still in the room - even if they're logged off.  Scenes in grid rooms will stop after everyone logs off.
{% endnote %}

## include_pose_separator

When you complete a scene and share the log, the default behavior is to compress all the poses together into a single narrative, like you'd find in a book.   You can alternately include a separator line between poses to make it more clear which pargarphs went together in a single pose.  This separator can be styled with custom CSS using the 'pose-divider' class.

## idle_scene_timeout_days

Scenes in grid rooms are automatically closed when there's nobody left in the room.  Scenes in temp rooms (including scenes played solely on the web portal) are closed after this many days without activity.

## delete_unshared_scenes

There's also another cron job to periodically delete scenes that have been completed but not shared.  It also warns people about unshared scenes that are going to be deleted soon.   You can turn this feature on and off by setting `delete_unshared_scenes` to true or false.

If it's set to true, there are a few other things you can configure:

### unshared_scene_cleanup_cron

See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/code/cron.html) for help if you want to change this.

### unshared_scene_deletion_days and unshared_scene_warning_days

You can configure how long to wait before deleting unshared scenes.  For example:

    unshared_scene_deletion_days: 20
    unshared_scene_warning_days: 13

Whenever the unshared scene cron job runs, it will warn participants in unshared scenes that were completed more than 13 days ago.  It will delete unshared scenes that were completed more than 20 days ago - effectively giving a 7-day grace period after the warning.

### trending_scenes_cron and trending_scenes_category

The game will post trending scenes (i.e. recent scenes with the most 'likes' on the web portal) to a forum.  By default this happens once a week, and you can control the timing with `trending_scenes_cron`.  You can also control which forum it posts to with `trending_scenes_category`.  Leave the category blank to disable the post.