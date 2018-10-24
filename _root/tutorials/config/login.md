---
title: Configuring the Login System
layout: page
tags:
- config
---

There are several things you can configure about character logins.

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

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

### Disabling Creating New Characters

The default behavior allows players to create their characters right from the login screen.  You might want to disable this if you have a roster-only game or require email registration or an invitation.

> <i class="fa fa-exclamation-triangle"></i> **Note:** Allowing creation from the web portal is a different setting, found in the [Website config](/tutorials/config/website).

To disable character creation from the login screen:

* Set `allow_creation` to false.
* Optionally set a message about your game's registration policy in `creation_not_allowed_message`.  If no message is set, players will just see a generic message.

### Disabling Logins

During development, maintenance, or other special times, you might want to disable player logins.  You can do this by controlling which roles have the 'login' permission.  By default, this permission is assigned to the 'everyone' role, meaning all characters can log in. 

* Use the [Roles System](/tutorials/manage/roles) to remove the 'login' permission from the 'everyone' role.  Add it to any non-admin roles that you want to give login access to (e.g. builder).  Admins can log in even without the explicit permission.
* Optionally set a message about why people can't log in using `login_not_allowed_message`.

### use_terms_of_service

You can disable the terms of service completely by setting `use_terms_of_service` to false.

### guest_role

The system looks for characters with the role set in `guest_role` when finding a guest character.  If for some reason you change that role, you need to update this configuration option.

### activity_cron

This cron job controls when the login activity tracker is updated.  By default it's hourly.  You shouldn't change this.

### blacklist_cron

This cron job controls how often the site blacklist is updated.  By default it's bi-monthly.  You shouldn't need to change this.