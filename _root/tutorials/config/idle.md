---
toc: ~config~ Configuring the Plugins
title: Configuring the idle system.
---
# Configuring the Idle System

To configure the Idle plugin:

1. Go to the Web Portal's Admin screen.  
2. Select Advanced Config.
3. Edit `config_idle.yml`

## Use Roster

You can turn the roster system on or off by setting `use_roster` to true or false.

## Days Before Idle

You can configure how long someone has to be idle (e.g. not logged in) before they appear on the idle sweep.

## Exempt Roles

Since special characters may not log in often, you can exempt certain roles from the idle sweep.  There are two ways to do this.  The first way is to list a number of roles.  For example, this would make everyone with the builder, admin or guest role exempt from the idle sweep:

    idle_exempt:
        - admin
        - builder
        - guest

If you want more fine-tuned control - e.g. only exempting certain admins and not all of them, you could create a special `idle_exempt` role and assign it only to those people who are exempt from the idle policy.

## Idle Sweep Monthly Reminder

Since idle sweeps must be done manually, the idle system will periodically create a staff job to remind you to do it.

You can change the reminder message that is included in this job, in case you want to remind yourself to do more than just the idle sweep.  You can also configure its title and the job category.

There is a cron job to control when this reminder is sent out.  By default, it's monthly.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/code/configuring-cron) for help if you want to change this.

## Idle BBS Announcement

When characters are idled out, an annnouncement is posted to the BBS system.  You can configure which board they go to.  If you don't want this annoucement posted, just comment out or remove the board configuration.

## Roster BBS Announcement

When characters are taken off the roster, an arrival announcement is also posted to the BBS board.  You can configure which board this goes to.  As with the Idle BBS Announcement, comment out or remove this line to disable the announcement.

## Roster Welcome Message

You can configure the contents of a mail message sent to a new player when they are taken off the roster.  You might use this to tell them the wiki password or any special instructions for getting started.

## Default Roster Contact

If a character on the roster doesn't have a specific contact person (for questions about the character), this will used.  It defaults to "Admin" but you could make it a specific person or something like "App Staff".