---
title: Building the Grid
description: 
layout: page
tags:
- manage
- building
- locations
- rooms
---

Scenes have to take place *somewhere*.   The Ares scene system lets you start scenes in temporary rooms, which can stand in for any location you can imagine.  You can even start a scene purely on the Web Portal, with no room at all.  But the majority of MUSH players still prefer to have a **grid** - a tangible set of **rooms** linked by **exits** for them to explore and play in.  This article describes some of the building concepts unique to Ares.  For more detailed information on specific commands, see `help building` in-game.

{% tip %} 
Despite the historical name, a Room doesn't have to represent a single room.  It's more like a virtual 'chatroom' - a place where people gather for roleplay.
{% endtip %}

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Room Type

There are three types of rooms in Ares:

* IC - The areas that are on-camera where the action (i.e. the roleplay) takes place.
* OOC - The backstage areas where people hang out when they're not playing, or official business takes place.
* Roleplay Room (RPR) - A hybrid of the two; it's not technically part of the onstage grid, but roleplay takes place here.  RP Rooms could be supplanted by the scene system, but some people still find them easier to use for private RP.

The status system is based off the room type.  If you're in an offstage room, you're considered OOC.  If you're in an onstage or RP room, you're considered IC.

## Areas

Areas are just an easy way to organize rooms as a navigational aid and a way help identify where you are.  Typically they correspond to distinct geographic areas - districts in a city, decks on a ship, planets, etc.  Areas also help distinguish between rooms with the same name (i.e. a Mess Hall on one ship and a Mess Hall on another ship).

You can use areas in custom code - e.g. making it so certain commands are only available (or work differently) depending on the area the character is in.  For example, the weather plugin bases weather patterns on the room areas.

Areas can have a description (in which you might want to put some ASCII map art or a link to a map image).

You can set up areas in a parent/child hierarchy.  For example:

* Chicago
  * The Loop
  * Northbrook
* New York
  * Brooklyn
  * The Bronx
* Offstage

{% tip %} 
Although there will probably be multiple IC areas on your grid, you'll usually have only one OOC area.  In the default database, it's just called "Offstage".
{% endtip %}

## Special Rooms

Ares has several special rooms, which are part of the default database.  They each serve an important purpose in the code, so you can't destroy them.  You can change their names and descriptions, though.

* Welcome Room - Where characters first arrive on the game.  Typically you'll update this room description with a description of the game and some basic instructions.
* Offstage Room - Where characters go when they use the `offstage` command to take a break from roleplay.  AKA the "OOC Room" or "OOC Lounge".
* IC Start Room - Where characters go the very first time they use the `onstage` command to go IC.
* Quiet Room - Where characters can idle without being bothered by spam.

The IC Start Room has a few special considerations.
 
### Naming the IC Start Room

You should rename the room as appropriate to your theme (e.g. Starport, Hangar Bay, Downtown - wherever new characters start.)

### Multiple Starting Locations

Ares does not directly support multiple starting locations (e.g. starting people in different planets/cities/areas depending on their faction).  If that's really important to you, you have two choices:

* Make the IC Start Room more of an OOC hub, with exits to all the real start locations.
* Alter the code that sets the character's starting location.

## Locks

Ares has a simpler exit lock system than PennMUSH/TinyMUX.  You cannot lock exits to any arbitrary code function.  Exits may only be locked to [roles](/tutorials/manage/roles.html). 

For example: If you wanted to lock the Rebel HQ to only players in the rebel faction, you could create a "Rebel" role and assign it to everyone with rebel access.  Then lock the HQ entrance to only people with the "Rebel" or "Admin" roles.

> Curious why the lock system is different from Penn/Tiny?  Check out the [chopping block](/tutorials/code/chopping-block.html) article.

## Disconnected Rooms

Games that wish to maximize use of the scene system can create rooms that are disconnected from the grid but still available for scenes.

1. Create a room - it doesn't have to be connected to anywhere else.
2. Give the room a description and an area.

Even though the room isn't linked to anywhere on the grid, someone can still use scene/start to begin a scene there.  A temproom will be created, with the disconnected room's description copied over.