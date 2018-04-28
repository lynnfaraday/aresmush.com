---
tags:
- config
title: Configuring the login system.
aliases:
- siteban
- ban
- suspect
---
# Configuring the Login System

## Connect Screen

To configure the Connect Screen:

1. Go to the Web Portal's Admin screen.  
2. Select 'Connect Screen'.

The connect screen can contain all the usual MUSH formatting codes (including color!), but you don't need to put in %r for linebreaks or %b for spaces.  The game will respect what's in the file as it appears.

## Terms of Service

By default, the game will present a Terms of Service file to new users.  You can disable this by setting `use_terms_of_service`, as explained below.

> <i class="fa fa-info-circle"></i> **Tip:** If your TOS is long, it's recommended that you just link to a wiki/web page rather than spamming new players with a giant wall of text.

To configure the Terms of Service:

1. Go to the Web Portal's Admin screen.  
2. Select 'Terms of Service'.

The TOS can contain all the usual MUSH formatting codes, but you don't need to put in %r for linebreaks.  The game will respect what's in the file.

> <i class="fa fa-info-circle"></i> **Tip:** If you ever make important changes to the terms of service, you probably want to force existing characters to read them again.  To do this, use the `tos/reset` command in-game.  Everyone will be forced to acknowledge the new terms of service the next time they log in.

## Other Configuration

To configure the rest of the Login plugin:

1. Select Admin -> Setup.
2. Edit `login.yml`


### use_terms_of_service

You can disable the terms of service completely by setting `use_terms_of_service` to false.

### guest_role

The system looks for characters with the role set in `guest_role` when finding a guest character.  If for some reason you change that role, you need to update this configuration option.

### activity_cron

This cron job controls when the login activity tracker is updated.  By default it's hourly.  You shouldn't change this.

### blacklist_cron

This cron job controls how often the site blacklist is updated.  By default it's bi-monthly.  You shouldn't need to change this.