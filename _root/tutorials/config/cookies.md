---
toc: ~config~ Configuring the Plugins
title: Configuring the cookie system.
---
# Configuring the Cookie System

To configure the Cookies plugin:

1. Go to the Web Portal's Admin screen.  
2. Select Advanced Config.
3. Edit `cookies.yml`

## cookie_award_cron

The game will periodically tally and award cookies.  There is a cron job to control when this happens.  By default it does this every Friday night.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/code/configuring-cron) for help if you want to change this.

## cookie_board

The system will post the top cookie earners to the BBS system.  You can configure which BBS board this posts to.  If you don't want the cookie awards posted, just remove or comment out the board configuration.

## cookies_per_luck

You can configure how many cookies it takes to get a luck point.

Although luck is displayed in whole numbers, luck is tallied with fractions.  You can earn a little each week.