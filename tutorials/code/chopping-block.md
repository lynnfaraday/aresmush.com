---
title: Chopping Block
description: 
layout: page
tags:
- code
- features
---

While Ares attempts to recreate the PennMUSH/TinyMUX experience on the whole, a few features were deliberately left out for philosophical reasons.  If you find just can't live without them, please provide [Feedback](/feedback.html).  If enough people are desperate for the feature, it may be considered for a future version.

{% include toc.html %}

## Exit Aliases

Some MUSHes go wild with exit aliases.  An exit named "Front Door" would be accessible via "F", "FR", "DOOR", "FRONT", and who knows what else.

Ares only allows you to have a single exit name and a single exit alias.  The name is shown in room descs next to the destination room name.  For example: 

    [R] Restaurant
    [O] Town Square

Yes, there will be some folks who will try to type "town" to go to the town square, but experience on my own PennMUSH games shows that they pretty quickly learn to just use the short names.  Omitting long exit names and aliases simplifies the building commands and the code.

## Player Name Spaces

Like most modern account systems, AresMUSH limits character names (which is basically the account name) to a single word without spaces.  This was a conscious design choice because the interfaces required to support names with spaces were unduly burdensome on both players (needing to put quotes or commas around lists of character names) and coders (needing to parse more complex lists).

For games that want to use names with spaces, you can use the optional ['nickname' feature](/tutorials/config/demographics.html).  This lets you designate a demographic field as the nickname, and it will be shown next to the character's name in the 'who' list, room description, etc.  This feature basically allows the account name to be "Rogers" while people in the room will see "Rogers ('Captain America')". 

## Exit Locks

Penn/Tiny exit locks could be infinitely complex.  You could lock an exit so it was only available to people whose name started with "B", or whose position was "Doctor", or even have a lock that was only opened on Tuesdays.

This functionality seems inordinately complex and pretty useless, so it has been ditched from Ares.  Standard exit locks operate based solely on [roles](/tutorials/manage/roles.html).  There's also a temporary lock feature for privacy that applies to interior locks.   If you built an apartment system, you could add code so only people on the lock list could get in.  

In short: Ares lets you create lock code for specific purposes, rather than attempting to design a super-flexible lock scripting language.

## Multiple Connections

"How do I boot my extra connection?" is a common refrain on MUSHes.  Zombie connections, reconnects - it's a pain in the butt.  Ares doesn't do any of that.  When you reconnect, it kills your old connection.  This is generally helpful because it keeps dead connections from lingering around, but it means you can't leave yourself logged in from multiple places at the same time.  

However, Ares has other features that make the need for multiple connections pretty moot.  Scene logs are stored server side.  You can start a scene at home, check in on it on your ride to work using the web portal, and pick it up on your lunch break - all without missing out on a single pose.  Channels have a built-in recall buffer.  Private messages (pages) can be sent while offline and reviewed later.  So the lack of multiple connections shouldn't really be an obstacle.

## Dolist

I can imagine the admins now:  "OMG HOW WILL I LIVE WITHOUT DOLIST?"   Dolist is a necessary evil on Penn and Tiny because of the way they're structured, but Ares is different.  Think about when you commonly use a dolist.  Need to teleport a bunch of people?  

    @dolist a b c=@tel ##=wherever

But why should that be necessary?  Wouldn't it be much easier if the teleport command just let you do that directly?

    tel a b c=wherever

Ares commands are designed to work on lists where it makes sense, eliminating the need for dolists.  If you find a command that you think should work on lists but doesn't - please provide [feebdack](/feedback.html).

## Darkness

You can't go dark on Ares.  Why not?  Because I find the idea of lurking admins to be creepy, and very big-brother-ish.

If you don't want to be bothered, there's a 'duty' command to mark yourself as off-duty.  You can also use the 'do not distrub' feature on pages/PMs.

## Force

In Ares, admins cannot force players to execute commands, again because I think it's creepy and potentially misused.  Admin-only commands should exist to do the things you need to do.  As with dolist, if you find something missing, just provide [feebdack](/feedback.html).

## Thing Objects

Ares has no "Thing" object type.  That means no rings, no notepads, no blaster pistols, no Viper fighter craft to climb into, etc.   Why?  All of those things are done in different ways.

* Cosmetic Items have been supplanted by a more robust 'detail' system that works on characters as well as rooms.  If you want a special desc for your ring or the family photo on your wall, add a detail.
* Code Storage Items don't exist because code in Ares is not associated with a database object.  Code lives on the server and there is no player-side code scripting.  Many player utilities like notes and multi-descers are build into the core code.
* Vehicles can be done as rooms with custom code to move the in/out exits around.
* Inventory Tracking can be done with custom code for a virtual inventory system. Specialized data fields/models would keep track of what gear a player had, rather than just generic @-created objects.

If you have trouble philosophically adapting an old-style MUSH system to Ares' Thing-less world, just [ask for help](/feedback.html).