---
title: Configuring the Events System
layout: page
tags:
- config
---

To change the Events plugin configuration:

1. Select Admin -> Setup.
2. Edit `events.yml`

## event_alert_cron

The game will periodically alert players when events are about to start.  There is a cron job to control when this happens.  By default it does this every quarter hour.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/code/cron.html) for help if you want to change this.