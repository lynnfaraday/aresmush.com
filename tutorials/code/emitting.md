---
title: Emitting
description:
layout: page
tags: 
- code
- emit
---

Emitting messages is the most basic way that your code will communicate with the players.  Pretty much every single command will emit something to someone.

{% tip %} 
All emits accept [Formatting Codes](/tutorials/code/formatting.html).
{% endtip %}

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Basic Emits

The **client** object allows you to emit a message to a player.  Most commonly, you'll use the `client` helper in the command handler to emit to the client executing the command.

* `client.emit "A message"` - A basic emit.
* `client.emit_ooc "A message"` - OOC messages show up in light blue.
* `client.emit_success "A message"` - Success notices show up in green.
* `client.emit_failure "A message"` - Failure/error alerts show up in red.

{% tip %} 
A 'client' in this context means a traditional MUSH client, including telnet-based client apps or the web portal's Play screen.   Regular emits are not sent to people just browsing around the web portal.  If you want to notify them of something (like to tell them that they've received a new mail message), see Notifying Web Clients below.
{% endtip %}

## Emitting to a Different Character's Client

Sometimes you'll need to emit to a different client - for example, the *target* of a command.

{% tip %} 
You can only emit to clients, not characters.  A character is just a database object; it can't receive messages.
{% endtip %}

There are a few utility methods that let emit to a client associated with a character, as long as that character is logged in:

    Login.emit_if_logged_in char, "A message."
    Login.emit_ooc_if_logged_in char, "A message."

For more advanced processing, you can use the `Login.find_client` method to look up the client for a character and then emit to it directly.

## Emitting to a Room

Many commands emit messages to everyone in a room.  The Room class has a helper method that will emit to any connected client whose character is in that room:

    room.emit "A message"
    room.emit_ooc "A message"
    room.emit_failure "A message"
    room.emit_success "A message"

Commonly you'll use the `enactor_room` helper in the command handler to emit to the enactor's room:

    enactor_room.emit "A message."

## Emitting to Everyone

You can emit to all connected characters through the Client Monitor, which keeps track of who's connected.

    Global.client_monitor.emit_all "A message."
    Global.client_monitor.emit_all_ooc "A message."

## Notifying Web Clients

By default, characters logged into the web portal are **not** notified of emits.  Most of them are simply irrelevant when you're just browsing the website.  

If you want to send a notification to someone - no matter whether they're on the web portal or a MU client - you can use the Notifier.  The Notifier accepts an *event type*, which may trigger special handling on the web portal, and a *block* that tells it which clients it should emit to.

To emit to everyone, the block can simply return 'true': 

    Global.notifier.notify_ooc(:event_created, message) do |char|
      true
    end

The notification for a new forum post might only go to people who can actually see the post:

    Global.notifier.notify_ooc(:forum_edited, notification) do |char|
       Forum.can_read_category?(char, category)
    end

## Raw Emits

A 'raw' emit does not interpret formatting codes.  Pretty much the only time you'd use this is in the editing commands (like `desc/edit`) where you want to send the original, unformatted text to the client to be loaded into their input buffer.

* `client.emit_raw "A message."`