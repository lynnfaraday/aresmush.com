---
title: Configuring Cron Jobs
description:
layout: page
tags: 
- cron
- config
---

Cron Jobs are game events that run on a set schedule, such as daily healing or weekly cookie awards.

All of the built-in cron jobs allow you to configure when they run.  For example, in `config_cookies.yml` is the following configuration option:

    cron:
        # date:
        day_of_week:
        - Fri
        hour: 
        - 22
        minute: 
        - 00

This will tally and award cookies every Friday at 10pm (2200) server time.  The date is ignored because it is commented out by the `#` in front of it.

There are four components of the cron configuration:

* date - What day of the month it runs. 
* day\_of\_week - What day of the week it runs.  Avoid specifying both date and day of week, or you'll end up with a job that only runs on Tuesdays that happen to fall on the 1st of the month.
* hour - What hour it runs.  **Always specify the minute too**, or it will run every minute for an hour.
* minute - What minute it runs.

Each item is a list, so you can have a job that runs on Tuesdays and Thursdays, or every half-hour, or on the 1st and 15th of the month, etc.

If you don't care about a component, you can delete it or comment it out.  

Some common examples are shown below.

## Monthly Task

Runs on the 1st of every month at midnight (doesn't care what day of the week it is):

    cron:
       date: 
       - 1
       hour: 
       - 00
       minute: 
       - 00

## Weekly Task

Runs every Saturday at 9pm (2100 hours) (doesn't care what the date is):

    cron:
       day_of_week: 
       - Sat
       hour: 
       - 21
       minute: 
       - 00

## Bi-Weekly Task

Runs every Saturday and Tuesday at 9pm (2100 hours) (doesn't care what the date is):

    cron:
       day_of_week: 
       - Sat
       - Tue
       hour: 
       - 21
       minute: 
       - 00

## Daily Task

Runs every day at 3am (0300 hours) (doesn't care what the date or day of week is):

    cron:
       hour: 
       - 03
       minute: 
       - 00

## Hourly Task

Runs at the top of every hour (doesn't care what the date, day of week, or hour is):

    cron:
       minute: 
       - 00

## Every Fifteen Minutes Task

Runs every fifteen minutes (doesn't care what the date/day/hour is):

    cron:
       minute: 
       - 00
       - 15
       - 30
       - 45
