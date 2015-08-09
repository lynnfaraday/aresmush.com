---
title: Ares for Vets
description:
layout: page
---

Ares is designed to offer a familiar experience to both Penn and TinyMUX players, so experienced players will feel right at home. At the same time, it tries make the commands more approachable to new players, and offers a number of player-centric features to make life easier.

This tutorial will go over the major differences between Ares and Penn/Tiny.

If you have any questions or suggestions, feel free to [contact me](/feedback).

## Getting Help

Ares doesn't have a separate +help system - there's just `help`.   Help files are organized by category rather than by name, hopefully making it easier to find what you're looking for.  

There are separate help commands for admins (ahelp) and builders (bhelp). 

## Commands

Ares commands have no prefix.  The who command is simply `who`. The combat command is simply `combat`. If you do accidentally type a prefix (@, +, or /), it’ll be ignored, so `+who, @who and /who` all end up being just `who`.

An attempt has been made to name Ares commands consistently and intuitively to make it more approachable to new players.  For example, the player profile command is `profile` (not finger) and the build command is `build` (not dig).  

At the same time, **Shortcuts** exist so veterans can use the command names you're used to.  Finger is just a shortcut for profile, and dig is a shortcut for build.  

Find a missing shortcut?  Give [Feedback](/feedback)!

## Multi-Page Commands

Commands that show multiple pages of data will have a **"page 1 of 4"** style footer at the bottom telling you there are more pages available.  You can access those pages simply by putting the page number after the commands (without a space).

For example:   actors, actors2, actors3, etc.

## Channels

The Ares channel system attempts to support both Penn and Tiny command syntax as much as possible.  So you can use:

`chan/who <name>` or `<alias> who`  
`chan/join <name>` or `addcom <name>=<alias>` 

The default channel alias is the first 2 and 3 characters, so "Chat" would be cha <msg> and ch <msg>.  

You can change your alias for a given channel at any time using `channel/alias <name>=<new alias>`.

## Mail

Like channels, mail attempts to support both Penn and Tiny command syntax.

So you can use:

`mail <to>=<subject>/<message>` (Penn style) or  
`mail <to>=<subject>` then `- <message>` composition (MUX style).

## Handles

The [Handles](/handles) system lets you set up a player identity that can follow you across games and help you stay in touch with friends.  Handles have an "@" sign in front of them, like @Faraday.

## Game Directory

The Ares game directory contains a list of all Ares games (help games).  This is currently only available on [AresCentral](/arescentral), the main AresMUSH social hub.  Someday it will be accessible elsewhere too.

Cross-game features are in their infancy.  It is hoped that over time they will expand.

## Editing

Ares does not have an @decompile like Penn and Tiny, but there are other tools you can use instead.

For character backups there's the `backup` command, which will dump out your character sheet, background, description and multi-desc outfits.  You can log this to a file. There's a separate `mail/backup` command for your mail.

Want to make a change to your desc?  Use `desc/edit` to grab a copy of your current desc into your client's input buffer (the place where you type).  This only works on some clients and may require configuration - see `help edit` for details.  Many other commands also support a /edit mode.

Editing not working in your client?  Give [Feedback](/feedback)!

## Objects and Details

Ares does not have generic objects - like @created rings occupying peoples' inventories or signs left in rooms.  Instead, you can add details to yourself or rooms you own, which store supplemental description information.  Details are fully integrated into the description system, they work as part of the look command, for example: `look me/ring`.

Other things you might use objects for, like weapons, are simply handled with code.

## Status

Your IC/OOC status is controlled solely by what room you're in.  To get between the IC and OOC areas, you use the `onstage` and `offstage` commands.

AFK status is just a flag; you can set it no matter where you are and it doesn't take you to a special room or anything.  You can also set a custom AFK message, which shows up in room descs and also in pages.  `afk Getting dinner - be back around 8pm EST`.  