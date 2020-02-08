---
title: Ares Concepts
description: 
layout: page
tags:
- code
---

This article describes some core concepts in Ares code.   It assumes you've already read about the [Ares Architecture](/tutorials/code/architecture.html).

{% include toc.html %}

## Clients

When someone connects to the game with their MU client, Ares calls that connection a **Client**.  The Client class provides information about the connection, like the IP address and idle time.  It handles input from the MU client and turns it into a Command (explained below).  

{% note %} 
Clients represent connections from actual MUSH clients and the Ares Web Portal's "Play" screen (which acts like a MUSH client).  Other Web Portal connections are handled differently, as explained below.
{% endnote %}

The Client class also provides utilities to easily send messages (**emit**) to the MU client.  Throughout the Ares code, you'll see things like:

    client.emit_success message

The Client class provides five methods for sending output to the MU client:

* `emit` - A basic emit.
* `emit_ooc` - OOC messages show up in light blue.
* `emit_success` - Success notices show up in green.
* `emit_failure` - Failure/error alerts show up in red.
* `emit_raw` - A special emit that will not evaluate linebreaks or ansi codes.

{% tip %} 
It's highly recommended that you use the standard emit_ooc / emit_success / emit_failure methods in any custom code you write.  This provides a consistent look-and-feel for all game commands and enable log editors to easily filter out these messages.
{% endtip %}

## Characters

Once a player has logged in with their character name and password, their client now has a **Character** attached.  You can access that by calling `client.char` from a Client object.

{% tip %} 
Remember that it's possible for a Client to *not* have a Character object if the player is just sitting on the login screen.
{% endtip %}

You can use the character object to access all sorts of information about the character.  For example, you can emit a personal greeting:

    client.emit "Hello #{client.char.name}!"

## Basic Models

The Ares Engine provides several other basic database models.

* **Character** - A character, as explained above.
* **Room** - A MUSH location - like a chatroom for roleplay to take place.  All characters are in a room at all times.
* **Exit** - Links rooms together, allowing characters to get from one to another.
* **Role** - Defines a role available in the [roles and permissions](/tutorials/manage/roles.html) system.
* **Game** - Stores general information about the game as a whole, like who the master admin character is.
* **Handle** - Stores a link between a character and an AresCentral player handle, as part of the [handles](/handles) system.

## Commands

When a client sends some text to the game, it is converted into a **Command** object.  The Command object breaks the text into its familiar MUSH components:

    (prefix)root/switch args

For example:  `combat/join Faraday=123` would be broken up as:

|prefix|root|switch|args |
| ---- |
|+ |combat |join |Faraday=123 |

{% tip %} 
Ares ignores the prefix except for a few rare circumstances.  So +who, who, @who and /who all end up being handled as simply 'who'.
{% endtip %}

Commands are routed through a central **Dispatcher**, which will go through the plugins trying to find one that wants the command.  The dispatcher uses the [EventMachine](https://github.com/eventmachine/eventmachine) reactor library, which ensures that commands are handled one by one in an orderly queue.

## Events

In addition to commands, the game code can issue **Events** to notify plugins when noteworthy events have happened. Some common events include:

* CharConnected
* CharDisconnected
* CharCreated
* Cron (a periodic timer)

Events are also routed through the central Dispatcher.  Unlike a command, which can only be handled by a single plugin, Events may be handled by multiple plugins.  For example, when a character logs in you want to notify people in his room (Rooms plugin), notify the channels he's on (Channels plugin), notify him of new mail or forum posts (Login plugin), and so on.

## Web Requests

When a player does something on the Web Portal, it doesn't come through as a Command, but as a **Web Request**.  They're similar in structure to Commands and also go through the Dispatcher; they're just handled a little differently.