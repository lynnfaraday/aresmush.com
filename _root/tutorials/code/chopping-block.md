---
title: Chopping Block
description:
layout: page
tags: 
- code
- features
---

While Ares attempts to recreate the PennMUSH/TinyMUX experience on the whole, a few features were deliberately left out for philosophical reasons.  If you find just can't live without them, please provide [Feedback](/feedback).  If enough people are desperate for the feature, it may be considered for a future version.

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Exit Aliases

Some MUSHes go wild with exit aliases.  An exit named "Front Door" would be accessible via "F", "FR", "DOOR", "FRONT", and who knows what else.

Ares only allows you to have a single exit name and a single exit alias.  The name is shown in room descs next to the destination room name.  For example: 

    [R] Restaurant
    [O] Town Square

Yes, there will be some folks who will try to type "town" to go to the town square, but experience on my own PennMUSH games shows that they pretty quickly learn to just use the short names.  Omitting long exit names and aliases simplifies the building commands and the code.

## Player Name Spaces

Like most modern account systems, AresMUSH limits character names (which is basically the account name) to a single word without spaces.  This was a conscious design choice because the interfaces required to support names with spaces were unduly burdensome on both players (needing to put quotes or commas around lists of character names) and coders (needing to parse more complex lists).

For games that want to use names with spaces, you can use the optional ['nickname' feature](/tutorials/config/demographics).  This lets you designate a demographic field as the nickname, and it will be shown next to the character's name in the 'who' list, room description, etc.  This feature basically allows the account name to be "Rogers" while people in the room will see "Rogers ('Captain America')". 

## Exit Locks

Penn/Tiny exit locks could be infinitely complex.  You could lock an exit so it was only available to people whose name started with "B", or whose position was "Doctor", or even have a lock that was only opened on Tuesdays.

This functionality seems inordinately complex and pretty useless, so it has been ditched from Ares.  Standard exit locks operate based solely on [roles](/tutorials/manage/roles).  There's also a temporary lock feature for privacy that applies to interior locks.   If you built an apartment system, you could add code so only people on the lock list could get in.  

In short: Ares lets you create lock code for specific purposes, rather than attempting to design a super-flexible lock scripting language.

## Multiple Connections

"How do I boot my extra connection?" is a common refrain on MUSHes.  Zombie connections, reconnects - it's a pain in the butt.  Ares doesn't do any of that.  When you reconnect, it kills your old connection.  This is generally helpful because it keeps dead connections from lingering around.

As a consequence, though, you can't leave yourself logged in from multiple places at the same time.  I understand some people use this feature so they won't miss anything while they're switching computers, but they are decidedly in the minority.  Allowing simultaneous connections adds a lot of complexity to the codebase (and to a lesser extent the player commands).

## Dolist

I can imagine the admins now:  "OMG HOW WILL I LIVE WITHOUT DOLIST?"   Dolist is a necessary evil on Penn and Tiny because of the way they're structured, but Ares is different.  Think about when you commonly use a dolist.  Need to teleport a bunch of people?  

    @dolist a b c=@tel ##=wherever

But why should that be necessary?  Wouldn't it be much easier if the teleport command just let you do that directly?

    tel a b c=wherever

Ares commands are designed to work on lists where it makes sense, eliminating the need for dolists.  If you find a command that you think should work on lists but doesn't - please provide [feebdack](/feedback).

## Darkness

You can't go dark on Ares.  Why not?  Because I find the idea of lurking admins to be creepy, and very big-brother-ish.

If you don't want to be bothered, there's a 'duty' command to mark yourself as off-duty.  You can also use the 'do not distrub' feature on pages.

## Force

In Ares, admins cannot force players to execute commands, again because I think it's creepy and potentially misused.  Admin-only commands should exist to do the things you need to do.  As with dolist, if you find something missing, just provide [feebdack](/feedback).

## Thing Objects

Ares has no "Thing" object type.  That means no rings, no notepads, no blaster pistols, no Viper fighter craft to climb into, etc.   Why?  All of those things are done in different ways.

Things that were cosmetic have been supplanted by a more robust 'detail' system that works on players as well as rooms.  If you want a special desc for your ring or the family photo on your wall, add a detail.

Things that stored code don't exist because Ares doesn't associate code with objects at all.  Code lives on the server.  There is no player-side code scripting.  Notepad and multi-descer code is built into the game as globals.

Things that were used as vehicles to drive around in don't exist because frankly I find them kind of useless.  If you really needed to model a vehicle or elevator or whatnot, you could utilize a room for the interior and create some vehicle control code that re-linked the exits in/out of the vehicle and generated some emits based on where the vehicle moved.

Things that were used for inventory tracking (weapons, armor, etc.) don't exist in the standard codebase because FS3 Combat uses a freeform inventory.  It's the combat organizer's job to police characters who arm themselves with nonsensical weapons.  If you wanted to code a different system that kept track of what gear a player had, you'd create specific database fields to track the gear, not generic @created objects.  Virtual inventory is the way even modern econoy systems on Penn/Tiny have leaned.

If you have trouble philosophically adapating an old-style MUSH system to Ares' Thing-less world, just [ask for help](/feedback).