---
title: Configuring the Time System
layout: page
tags:
- config
---

To configure the OOC Time plugin:

1. Select Admin -> Setup.
2. Edit `ooctime.yml`

## default_timezone

New players are assigned a timezone by default when they are first created.  They can change this themselves, either directly in-game or through their handle profile.

The default timezone is EST.  If you want to change this, you can configure a different one.  You should be able to select any timezone from the [tz database](http://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

Some common ones:

* Eastern Time --> America/New_York 
* Central Time --> America/Chicago
* Mountain Time --> America/Denver
* Pacific Time --> America/Los_Angeles