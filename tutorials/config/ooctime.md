---
title: Configuring the Time System
layout: page
tags:
- config
---

To configure the OOC Time plugin:

1. Select Admin -> Setup.
2. Edit `ooctime.yml`

{% include toc.html %}

## default_timezone

This is the timezone that the server uses.  New players are assigned a timezone by default when they are first created.  They can change this themselves, either directly in-game or through their handle profile.

{% note %}
This setting just *reflects* the server's timezone; it doesn't change it.  If you want to change your server's timezone, you need to run an operating system command in the server shell.  See [Setting the Server Timezone](/tutorials/manage/server-timezone.html) for details.
{% endnote %}

The default timezone is EST.  If you want to change this, you can configure a different one.  You should be able to select any timezone from the [tz database](http://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

Some common ones:

| Timezone | `default_timezone` setting |
| ---- | ---- |
| Eastern Time | America/New_York  |
| Central Time | America/Chicago |
| Mountain Time | America/Denver |
| Pacific Time | America/Los_Angeles |