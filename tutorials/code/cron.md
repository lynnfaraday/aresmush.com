---
title: Cron Jobs
description: 
layout: page
tags:
- cron
- config
---

Cron Jobs are game events that run on a set schedule, such as daily healing or weekly cookie awards. 

{% include toc.html %}

## Cron Event

The Engine's cron system sends out a `CronEvent` once a minute.  To implement a cron job, the plugin needs to handle this event as explained in [Event Handling](/tutorials/code/events.html).  

Unless you want your cron job to run *every minute*, you'll need some code in the cron handler to make it run when desired.  Typically this is done with the `is_cron_match?` utility .  For example:

        config = Global.read_config("your_plugin", "your_cron_config")
        return if !Cron.is_cron_match?(config, event.time)

If the cron event time matches your cron configuration settings, the cron job will run.  Otherwise it will return without doing anything.

{% tip %} 
All of the built-in cron jobs allow you to configure when they run.  See the relevant configuration file for details of what the cron jobs do and suggestions of how to set them.
{% endtip %}

 
## Cron Config

The `is_cron_match?` utility lets you specify when a cron job is supposed to run.  There are four components of the cron configuration:

* date - What day(s) of the month it runs. 
* day\_of\_week - What day(s) of the week it runs.  
* hour - What hour(s) it runs.  Uses 24-hour time.
* minute - What minute(s) of the hour it runs.

{% tip %} 
Avoid specifying both date *and* day of week, or you'll end up with a job that only runs on Tuesdays that happen to fall on the 1st of the month.
{% endtip %}

{% tip %} 
If you specify hour, also specify minute.  Otherwise it will run *every minute* for that entire hour.
{% endtip %}

Each item is a list, so you can have a job that runs on Tuesdays and Thursdays, or every half-hour, or on the 1st and 15th of the month, etc.

If you don't care about a component, just leave it out.  Some common examples are shown below.

## Monthly Task

Runs on the 1st of every month at midnight (doesn't care what day of the week it is):

    date: 
    - 1
    hour: 
    - 00
    minute: 
    - 00

## Weekly Task

Runs every Saturday at 9pm (2100 hours) (doesn't care what the date is):

    day_of_week: 
    - Sat
    hour: 
    - 21
    minute: 
    - 00

## Bi-Weekly Task

Runs every Saturday and Tuesday at 9pm (2100 hours) (doesn't care what the date is):

    day_of_week: 
    - Sat
    - Tue
    hour: 
    - 21
    minute: 
    - 00

## Daily Task

Runs every day at 3am (0300 hours) (doesn't care what the date or day of week is):

    hour: 
    - 03
    minute: 
    - 00

## Hourly Task

Runs at the top of every hour (doesn't care what the date, day of week, or hour is):

    minute: 
    - 00

## Every Fifteen Minutes Task

Runs every fifteen minutes (doesn't care what the date/day/hour is):

    minute: 
    - 00
    - 15
    - 30
    - 45

## Disabling a Task

If you want the task to never run, you can make it an empty hash:

    {}

