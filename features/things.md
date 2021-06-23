---
title: Thing Objects
description: 
layout: page
tags:
- code
- features
---

One question I get asked a lot is "does Ares have objects". 

The short answer is "yes" - Ares has lots of objects. More types even than traditional MU servers. There are **Player** objects and **Room** objects and **MailMessage** objects and **Combatant** objects, and **ActionSkill** objects, and **ForumCategory** objects, and dozens of others. Anything that stores data uses objects.

But usually when people ask that question, what they're really asking is whether Ares has "Thing" objects. You know, those generic objects from old school MUs that are neither rooms, nor players, nor exits, they're just... things. (We'll call them **Things** from here on out.)

The short answer to that is "no" - Ares does not have Things. And honestly, most games that ask about it are looking to do some kind of grid-centric immersive code that is usually [not a good fit]({{site.baseurl}}/features/server-roundup.html#immersive-code) for Ares. Web players interact with **scenes** and **systems**, not rooms and objects. It's a different paradigm, and it requires thinking about your code differently.

But let's dig a little deeper by looking at what Things are traditionally used for and what Ares does instead.

## Cosmetics

**Traditional:** Things are commonly used for cosmetics--signs in rooms, rings in someone's inventory. Their purpose is to get someone's attention and let them access a more detailed description.

**Ares:** The built-in 'detail' system means you don't need Things for this. Details can be set on characters or rooms to supplement the desc with something else people can look at. If you want a special desc for your ring or the family photo on your wall, add a detail.

## Code Storage / Local Commands

**Traditional:** Things can hold softcode. Players might have their own custom notepad, or a card game object to pass the time. Staff might create a local coded object, like a bartender that spews out gossip, or an interactive menu for a restaurant.

**Ares:** Ares doesn't have softcode, and players cannot code things. All code lives on the server and all commands are effectively globals. 

For players, there are various player utilities built-in, like multi-descers and notes.

For local code, some of it just isn't a good fit for Ares' scene-centric RP model, but others could be done with globals. A gossip system could have a gossip command in-game and a gossip web page on the portal to dole out juicy details, and features to submit and review gossip. It's usually a lot easier to just use a forum for IC rumors, but it's certainly possible to make your own gossip system. It's just not something you would tie to a "Bob the Bartender" Thing. 

## Inventory Management

**Traditional:** Things form the basis of an inventory system. You can 'give' them or 'drop' them and use 'i' to see what's in your inventory.

**Ares:** Ares has no such system built in. 

Most games fall into one of two categories:

* You're doing freeform RP and you don't care what a player is carrying.
* You're trying to model a TTRPG or something like Firan. Not only do you need to track the items a character has, you want that gear to actually **do** something in the game. It probably ties into other systems like economy/crafting/magic/combat/etc.

The first group doesn't need inventory management.

The second group needs a heck of a lot more than just Thing objects and a 'drop' command, so that generic system isn't very useful to them. They'll need to code what they need for their specific gameplay. Elaborate systems can be built, but be sure to give consideration to how web portal players will interact with those systems.

## Puppets and Vehicles

**Traditional:** Players could control objects as puppets or get inside them to travel around.

**Ares:** There's nothing like this built in. Even on traditional MUs these kinds of systems fell out of favor years ago so I don't think they'll be missed by most.

Large vehicles like spaceships can be modeled with rooms and a 'travel' command that re-links the in/out exits based on where they go. Or just leave them unlinked from the main grid entirely and use the scene system to create scenes there in temp rooms.