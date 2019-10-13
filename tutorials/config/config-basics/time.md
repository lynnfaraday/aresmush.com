---
title: Essential Config - Time
description: 
layout: tutorial
nextstep: fs3
prevstep: groups
tutorialIndex: tutorials/config/config-basics
essentialConfigTutorial: true
tutorialName: Essential Config
tags:
- config
---

You'll need to set up both the IC and OOC time systems on your game.

## Server Time

Your server's timezone depends on what region it's in.  Since many OOC times are stored in server time, it can be convenient to make the server time match your own timezone. 

From the server shell, run the command `sudo dpkg-reconfigure tzdata` and follow the prompts.

## OOC Timezone

You then need to tell the players what timezone the server is in, since it's not always obvious.  

1. Go to Admin -> Setup in the web portal.
2. Edit `ooctime.yml`.
3. Set `default_timezone` to one of the values from the [tz database](http://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

Some common timezone values:

| Timezone | `default_timezone` setting |
| ---- | ---- |
| Eastern Time | America/New_York  |
| Central Time | America/Chicago |
| Mountain Time | America/Denver |
| Pacific Time | America/Los_Angeles |

## IC Time

The IC time system is designed for calendars that mirror RL time--12 months of the year, 7 days of the week, 24 hours in a day, etc. With configuration options, you can shift the day/year, adjust the time ratio, and even have custom day/month names.  

If you have a modern game where IC time matches RL time, you don't have to do anything.  If you need a different IC time, see [Configuring the IC Time System](/tutorials/config/ictime.html) for details about all the available options.