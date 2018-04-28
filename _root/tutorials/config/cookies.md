---
title: Configuring the cookie system.
tags:
- config
---
# Configuring the Cookie System

To configure the Cookies plugin:

1. Select Admin -> Setup.
2. Edit `cookies.yml`

## cookie_award_cron

The game will periodically tally and award cookies.  There is a cron job to control when this happens.  By default it does this every Friday night.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/config/cron) for help if you want to change this.

## cookie_category

The system will post the top cookie earners to the forum.  You can configure which forum category this posts to.  Making it a forum that doesn't exist will effectively disable the welcome post.

## cookies_per_luck

You can configure how many cookies it takes to get a luck point.

Although luck is displayed in whole numbers, luck is tallied with fractions.  You can earn a little each week.