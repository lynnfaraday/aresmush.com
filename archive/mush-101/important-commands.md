---
title: MUSH 101 - Important Commands
description:
layout: tutorial
tutorialName: MUSH 101
tutorialIndex: mush-101
prevstep: telling-your-story
nextstep: mu-glossary
tags: 
- commands
---

So far we've dealt with the major commands needed to create your character and pose, but MUSHes have a host of other commands you should be aware of.  The following commands are available on virtually every MUSH out there.

> Many MUSH commands have a "+" or "@" in front of them for historical reasons - like +help or @describe.  On games using the AresMUSH engine, these prefixes are optional.  I list the most common versions here; check your local game help for more information.

## Help

One of the most important commands is the in-game help command, because it will tell you how to use the other commands. 

       +help - Shows a list of help topics.  +help2, +help3 will view addditional pages.
       +help <topic> - Views a help topic.

{{#pretty-image}}/assets/media/postpics/commands.png{{/pretty-image}}

> As you can see, there are lots of other MUSH commands that aren't covered by this tutorial.  The help system will tell you all about them.

## Connecting

We covered the connecting and creating character commands in prior tutorials, but here they are for easy reference:

    connect guest guest - Connects with a shared guest character.
    create <name> <password> - Creates a new character.
    connect <name> <password> - Connects to your character.

## Posing

There are a variety of ways to pose.  Here are the commands and what the text looks like (if your name is Faraday):

    :waves. - Faraday waves.
    "Hi there. - Faraday says, "Hi there."
    ;'s eyebrows go up.  - Faraday's eyebrows go up.
    emit "I love emits," says Faraday with a smile.  -  "I love emits," says Faraday with a smile.

## OOC

The 'ooc' command is used to make an out-of-character comment to the other players in your room.  It's good for saying hello and goodbye when you enter or leave a room, and for making clarifications or corrections to poses.  

    ooc <message> - Make an OOC remark to players in your room.

## Finger/Profile/Info

There will be some sort of command for finding out about another character.  It will usually be named `+profile, +finger or +info`.  

    +finger <name> - Views a character profile.
    may also be +info <name> or +profile <name>


## Who and Where

The who and where commands help you find out who's online, and whether there are scenes going on that you can join.

    +who - Lists online characters
    +where - Lists online characters and their locations.

## BBS

The BBS is an in-game public bulletin board system for important announcements.   Boards and posts are numbered for easy access.  

    +bbread - Shows available bulletin boards.
    +bbread <#> - Shows the messages on a particular board.
    +bbread <#>/<#> - Reads a message.


## Mail

`+mail` is like an in-game email system, used for sending messages privately to various characters.  

    +mail - Views your mail.
    +mail <#> - Reads a message.

Commands to send mail vary from game to game, but this one is pretty standard:

     +mail <name>=<subject>/<message> - Sends a message.

## Skills

Many games have some sort of skills/ability system.  You can use this system to resolve conflicts.  For example, if two characters get into a barfight, you could have them both roll their 'Brawling' skill to see who wins.   

Commands to use the skill system vary by game, but these two are fairly common:

    +sheet - Shows your character sheet.
    +roll <ability> - Makes a skill roll.

## Next Steps

Congratulations!  You've now got everything you need to get out there and start playing.   You may also want to check out the [MUSH Glossary](/mush-101/mu-glossary) when you encounter unfamiliar terms.   Have fun!
