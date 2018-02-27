---
toc: ~config~ Configuring the Plugins
title: Configuring the idle system.
---
# Configuring the Idle System

To configure the Idle plugin:

1. Select Admin -> Setup.
2. Edit `idle.yml`

## use_roster

You can turn the roster system on or off by setting `use_roster` to true or false.

## days_before_idle

You can configure how long someone has to be idle (e.g. not logged in) before they appear on the idle sweep.

## idle_exempt_roles

Since special characters may not log in often, you can exempt certain roles from the idle sweep.  There are two ways to do this.  The first way is to list a number of roles.  For example, this would make everyone with the builder, admin or guest role exempt from the idle sweep:

    - admin
    - builder
    - guest

If you want more fine-tuned control - e.g. only exempting certain admins and not all of them, you could create a special `idle_exempt` role and assign it only to specific people who are exempt from the idle policy.

## idle_category

When characters are idled out, an annnouncement is posted to the forum.  You can configure which category they go to.  Making it a forum that doesn't exist will effectively disable the welcome post.

## Idle Sweep Reminder

Since idle sweeps must be done manually, the idle system will periodically create a staff job to remind you to do it.  There are several settings related to this reminder:

`monthly_reminder_cron` - This cron job controls when the reminder happens.  By default it's monthly.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/config/cron) for help if you want to change this.

`monthly_reminder_title` - The reminder's job title.

`monthly_reminder` - Text for the reminder job.

`reminder_category` - The job category that the reminder will be put into.

## Roster Announcement

When characters are taken off the roster, an arrival announcement is also posted to the forum.  

### arrivals_category

You can configure which category this goes to by setting `arrivals_category`.  As with the Idle announcement, you can make it a non-existent forum to disable the post.

### roster_welcome_msg

You can configure the contents of a mail message sent to a new player when they are taken off the roster.  You might use this to tell them the wiki password or any special instructions for getting started.

## default_contact

If a character on the roster doesn't have a specific contact person (for questions about the character), this will used.  It defaults to "Admin" but you could make it a specific person or something like "App Staff".