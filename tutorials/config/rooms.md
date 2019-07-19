---
title: Configuring the Rooms System
layout: page
tags:
- config
---

To configure the Rooms plugin:

1. Select Admin -> Setup.
2. Edit `rooms.yml`

{% include toc.html %}

## room_lock_cron

The game will periodically unlock empty interior rooms that have been temporarily locked (like residences and RP rooms).  It does not affect rooms that have a permanent role lock.  You may want to turn this off if you view room locks as more of an IC thing (i.e. characters shouldn't enter because the room is ICly locked) as opposed to an OOC lock for scene privacy.

There is a cron job to control when this happens.  By default it does this every hour.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/code/cron.html) for help if you want to change this.
