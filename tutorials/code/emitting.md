---
title: Emitting
description: 
layout: page
tags:
- code
- emit
---

Emitting messages is the most basic way that your code will communicate with the players.  Pretty much every single command will emit something to someone.

{% note %} 
Players logged into the web portal are **not** notified of emits. They are generally used in response to commands you've typed from the client, and don't apply to web players.  To alert web players, see [notifications](/tutorials/code/notifications.html).
{% endnote %}


{% include toc.html %}

## Basic Emits

The **client** object allows you to emit a message to a player.  Most commonly, you'll use the `client` helper in the command handler to emit to the client executing the command.

* `client.emit "A message"` - A basic emit.
* `client.emit_ooc "A message"` - OOC messages show up in light blue.
* `client.emit_success "A message"` - Success notices show up in green.
* `client.emit_failure "A message"` - Failure/error alerts show up in red.

{% tip %} 
All emits accept [Formatting Codes](/tutorials/code/formatting.html).
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

## Raw Emits

A 'raw' emit does not interpret formatting codes.  Pretty much the only time you'd use this is in the editing commands (like `desc/edit`) where you want to send the original, unformatted text to the client to be loaded into their input buffer.

* `client.emit_raw "A message."`

## Scene Emits

All of the examples above just emit to characters connected via a MU client. Scenes are special, though, because you could have characters playing both via MU client and web portal. This is typically done through the scenes api:

    Scenes.emit_pose(enactor, message, is_emit, is_ooc)

Here you specify the person sending the message (enactor, which can be Game.master.system_character), the message itself, and a true/false flag indicating whether it's an emit or an OOC comment.  The system will then:

* Emit the message to the characters in the room via MU client.
* Add the pose to the scene log.
* Notify web portal characters of new activity.
* Update scene activity flags.
    
If you have a system that impacts RP (like magic or combat), you might want messages from that system to show up in RP logs as well.

    Scenes.add_to_scene(scene, pose, character, is_setpose, is_ooc)

{% note %}
By default, `add_to_scene` does *not* emit to anyone connected via MU client, because sometimes systems want to emit different messages to different people. For example, FS3 combat formats messages specific to combatants to highlight their names in-game.  So if you want an emit, you'll need to add that yourself.
{% endnote %}