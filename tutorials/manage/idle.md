---
title: Sweeping Idle Characters
description: 
layout: page
---

The idle system lets you sweep the database for players who haven't logged in for awhile, so you can decide what to do with them. 

{% include toc.html %}

## Idle Sweep

The idle sweep is not performed automatically. By default, the game will remind you to do it monthly, but you can [configure this](/tutorials/config/idle.html). 

When you do an idle sweep, the general workflow is:

1. Start the idle sweep with `idle/start`.
2. Remove anyone who shouldn't be affected (either because of known vacations or other immunity) with `idle/remove`.
3. Set an action to take on everyone else (or accept the default action) with `idle/action`.
4. Execute the idle sweep with `idle/execute`.

## Idle Actions

There are several idle actions you can take with someone who comes up on the idle sweep:

* Warn - Notify them they're in danger of idling out.  This is the default for approved characters.
* Destroy - Get rid of them.  This is the default for unapproved characters.
* Gone - Mark that they've left the IC area.
* NPC - Mark that they're a NPC. 
* Dead - Mark that they're dead.
* Roster - Put them on the roster.

{% tip %}
We recommend that you **not** destroy idled-out players once they've been approved.  They're part of the IC world.  They might come back, and allowing their name to be re-used can cause confusion.  Plus, removing them will make all messages from them appear from "Author Deleted" and will remove them from scenes.  It's generally cleanest to keep them around.
{% endtip %}

Warning someone sends them a mail and posts to the forum alerting them that they're in danger of idling out.  The next time they come up on the idle sweep, it will alert you that they've already been warned once. You can choose to warn them again (and keep doing so indefinitely) or switch to another action.

The system also posts a list of everyone who's idled out to the forum so people know how to react ICly.

The other idle actions will mark the character as being dead/gone/NPCed/rostered and also reset their password so they cannot just log back in and act like nothing happened.  To reclaim their character they will have to go through the game admin.

## Protected Roles

You can't mark certain individuals as permanently safe from the idle sweep, but you can protect people with certain roles by specifying those roles in the [idle config settings](/tutorials/config/idle.html).

## Roster

Ares comes with a character roster pre-installed, though you can [turn this off](/tutorials/config/idle.html) if you don't wish to use roster characters.  When the roster is enabled, adding someone to it is one of the possible idle actions, so they can be played again.