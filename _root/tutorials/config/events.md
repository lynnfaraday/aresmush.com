---
title: Configuring the events system.
tags:
- config
---
# Configuring the Events System

To change the other Events plugin configuration:

1. Select Admin -> Setup.
2. Edit `events.yml`

### calendar_timezone

Event dates and times are stored in the server's timezone, so it's helpful to tell the players what that is.

### event_alert_cron

The game will periodically alert players when events are about to start.  There is a cron job to control when this happens.  By default it does this every quarter hour.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/config/cron) for help if you want to change this.