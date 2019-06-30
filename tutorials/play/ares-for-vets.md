---
title: Ares for Vets
description: 
layout: page
---

Ares is designed to offer a familiar experience to both Penn and TinyMUX players, so veteran players will feel right at home. At the same time, it tries make the commands more approachable to new players, and offers a number of player-centric features to make life easier.

This tutorial will go over the major differences between Ares and Penn/Tiny.

If you have any questions or suggestions, feel free to [contact me](/feedback.html).

{% include toc.html %}

## Getting Help

Ares doesn't have a separate +help system - there's just `help`.   Help files are organized by category rather than by name, hopefully making it easier to find what you're looking for.   Admin and builder help are built into the same system, so no more looking for help in multiple places.

Ares help files are optimized for viewing on the game's Web Portal.  They are written more as guides than command references.

The quickref command (aliased `qr`) allows you to quickly look up the syntax for specific commands.

For example:

`help combat` will give you a wall of text explaining combat (which is why it's best read on the web portal):

```
  FS3 Combat
  ----------
  The FS3 Combat system is designed to bring some order to the chaos of large combat scenes, managing ability rolls and tracking damage in an automated fashion. 
```

`qr combat` will give you a quick reference for syntax:

```
  Command Quick Reference

  combat/stance <stance> - Sets stance for your actions.  You can use combat/stances to see a list of possible stances.
  combat/attack <target>[/<specials, see below>]
  combat/aim <target> - Takes careful aim.
  combat/reload – Reloads a weapon.
```

## Commands

Ares commands have no prefix.  The who command is simply `who`. The combat command is simply `combat`. If you do accidentally type a prefix (@, +, or /), it’ll be ignored, so `+who, @who and /who` all end up being just `who`.

An attempt has been made to name Ares commands consistently and intuitively to make it more approachable to new players.  For example, the player profile command is `profile` (not finger) and the build command is `build` (not dig).  

> **Oh no, not another set of commands!**
>
> Don’t worry. Thanks to the shortcuts system, you’ll find that the command names you know and love should work just fine. `finger` is just a shortcut for `profile` and `dig` is a shortcut for `build`.  In fact, Ares does its best to support **both** Penn and MUX syntax for common commands. So whether you like `@chan/join` or `addcom`, hopefully you’ll be content.  

Find a missing shortcut?  Give [Feedback](/feedback.html)!

## Multi-Page Commands

Commands that show multiple pages of data will have a **"page 1 of x"** style footer at the bottom telling you there are more pages available.  You can access those pages simply by putting the page number after the commands (without a space).

    ==============================================================================
    Actors
    
    Amber                     Mila Kunis
    ...
    Georgia                   Rachel Mcadams
    --------------------------------(page 1 of 3)---------------------------------
    ==============================================================================

For example:   actors, actors2, actors3 will access the various pages of the actors command.  This works with commands that have switches too, so you can do requests2/all.

## Channels

The Ares channel system attempts to support both Penn and Tiny command syntax as much as possible.  So you can use either set of commands:

    chan/who <name> or <alias> who
    chan/join <name> or addcom <name>=<alias>

The default channel alias is the first 2 and 3 characters, so "Chat" would be cha <msg> and ch <msg>.  

You can change your alias for a given channel at any time using `channel/alias <name>=<new alias>`.  The `channels` command by itself will give you a rundown on what channels you are on and what aliases talk on them.

## Mail

Like channels, mail attempts to support both Penn and Tiny command syntax.

So you can use:

`mail <to>=<subject>/<message>` (Penn style) or  
`mail <to>=<subject>` then `- <message>` composition (MUX style).

## Special Characters

Ares supports international languages with UTF-8, a Unicode character set that includes all sorts of accented and special characters.  You may need to [configure your client](/clients.html) to make this work properly, otherwise you'll see substitute boxes or other gibberish when other people try to use those special characters.

## Handles

The [Handles](/handles) system lets you set up a player identity that can follow you across games and help you stay in touch with friends.  Handles have an "@" sign in front of them, like @Faraday.  Mostly you'll see handles on channels:

    <Public> Cate (@Faraday) says, "Hi!"

## Editing/Decompile/Examine

Ares does not have an @decompile like Penn and Tiny, but there are other tools you can use instead.  

* Many commands take a /edit switch, which will grab the contents into your client's input buffer in the same way that @dec/tf or /grab would on Penn/Tiny.   For example, want to make a change to your desc?  Use `desc/edit`.  You may need to [configure your client](/clients.html) to make this work properly.
* There's a `backup` command that works similarly to decompile to let you log a backup of your character.
* There's an in-game `notes` command that lets you save notes for yourself.


## Objects and Details

Ares does not have generic objects - like @created rings occupying peoples' inventories or signs left in rooms.  Instead, you can add details to yourself or rooms you own, which store supplemental description information.  Details are fully integrated into the description system, they work as part of the look command, for example: `look me/ring`.

Other things you might use objects for, like weapons, are simply handled with code.

## Status

Your IC/OOC status is controlled solely by what room you're in.  To get between the IC and OOC areas, you use the `onstage` and `offstage` commands.

AFK status is just a flag; you can set it no matter where you are and it doesn't take you to a special room or anything.  You can also set a custom AFK message, which shows up in room descs and also in pages.  `afk Getting dinner - be back around 8pm EST`.  

There's an automatically notice sent in pages if someone pages you while you're many hours idle.