---
toc: ~config~ Configuring the Plugins
title: Configuring the places system.
---
# Configuring the Places System

To configure the Places plugin:

1. Go to the Web Portal's Admin screen.  
2. Select Advanced Config.
3. Edit `places.yml`

## same_place_color

You can configure the color that highlights the place name when something happens in your place. You can use multiple color codes.  For example: \%xh\%xc

## places_cleanup_cron

The game will periodically clear out empty places from rooms.  There is a cron job to control when this happens.  By default it does this every hour.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/code/configuring-cron) for help if you want to change this.