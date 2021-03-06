---
title: Configuring the Places System
layout: page
tags:
- config
---

To configure the Places plugin:

1. Select Admin -> Setup.
2. Edit `places.yml`

{% include toc.html %}

## same_place_color

You can configure the color that highlights the place name when something happens in your place. You can use multiple color codes.  For example: %xh%xc

## start_marker and end_marker

These are the markers used in place names.

## places_cleanup_cron

The game will periodically clear out empty places from rooms.  There is a cron job to control when this happens.  By default it does this every hour.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/code/cron.html) for help if you want to change this.