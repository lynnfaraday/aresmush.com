---
toc: ~config~ Configuring the Plugins
title: Configuring the events system.
---
# Configuring the Events System

To change the other Events plugin configuration:

1. Go to the Web Portal's Admin screen.  
2. Select Advanced Config.
3. Edit `config_events.yml`

### Calendar Timezone

You can change your calendar's timezone on the Teamup website by visiting the admin URL and selecting Settings -> Date and Time -> Timezone.  You need to also then tell Ares what that timezone is.  The default is EST.

### Events Refresh Cron Job

The game will periodically alert players when events are about to start.  There is a cron job to control when this happens.  By default it does this every hour.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/code/configuring-cron) for help if you want to change this.