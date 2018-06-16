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

Let's try another format.  Change the tinker code as shown, save, and run the command again.

    def handle
      client.emit_ooc "Hello, #{enactor.name}!"
      client.emit_success "Success!"
      client.emit_failure "Failure!"    
      client.emit "Here's some %xggreen%xn text.%RAnd a separate line."
      client.emit_raw "Here's some RAW %xggreen%xn text.%RAnd a separate line."
    end

The latter two emits show how a regular emit and a raw emit handle [Formatting Codes](/tutorials/code/formatting).

> <i class="fa fa-info-circle"></i> **Tip:** It's highly recommended that you use the standard emit_ooc / emit_success / emit_failure methods in any custom code you write.  This provides a consistent look-and-feel for all game commands and enable log editors to easily filter out these messages.