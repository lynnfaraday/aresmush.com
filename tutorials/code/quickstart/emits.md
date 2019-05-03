---
title: Emits
description: 
layout: tutorial
quickstartTutorial: true
tutorialName: Code Quickstart
tutorialIndex: tutorials/code/quickstart
prevstep: command-handlers
nextstep: templates-intro
tags:
- code
- code-quickstart
---

Emits are the way the game communicates with the MUSH clients.  The Client class has a few different ways to emit messages.

* `emit` - A basic emit.
* `emit_ooc` - OOC messages show up in light blue.
* `emit_success` - Success notices show up in green.
* `emit_failure` - Failure/error alerts show up in red.
* `emit_raw` - A special emit that will not evaluate linebreaks or ansi codes.

You can also emit to everyone in a room if you have a room object.  In commands, we can use the `enactor_room` helper to get the enactor's room.

* `enactor_room.emit`
* `enactor_room.emit_ooc`
* `enactor_room.emit_success`
* `enactor_room.emit_failure`
* `enactor_room.emit_raw`

{% tip %} 
You can actually emit to any client or any room, not just your own.  We'll learn more about that later.
{% endtip %}

## Try It!

Let's see what those different formats look like.  Change the tinker code as shown, save, and run the command again.

    def handle
      client.emit_ooc "Hello, #{enactor.name}!"
      client.emit_success "Success!"
      client.emit_failure "Failure!"    
      enactor_room.emit "This gets sent to the entire room."
      client.emit "Here's some %xggreen%xn text.%RAnd a separate line."
    end

The last emit shows how you can use [Formatting Codes](/tutorials/code/formatting.html) in an emit, including ansi and linebreaks.

{% tip %} 
It's highly recommended that you use the standard emit_ooc / emit_success / emit_failure methods in any custom code you write.  This provides a consistent look-and-feel for all game commands and enable log editors to easily filter out these messages.
{% endtip %}

There are also some more advanced ways to emit to people and rooms, which you can learn about in the [Emitting](/tutorials/code/emitting.html) tutorial when you're ready.