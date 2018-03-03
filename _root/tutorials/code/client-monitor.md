---
title: Client Monitor
description:
layout: page
tags: 
- code
- engine
- clients
---

The Client Monitor keeps track of everyone who's logged in, so it's your go-to source when you need to know who's logged in or to get a client for a character.

For example, the 'who' list would rely on:

    Global.client_monitor.logged_in

> **Note:** The `logged_in` method only includes characters connected directly to the game engine through the telnet port.  If you want to notify people, including clients from the Web Portal, you should use the [Notifier](/tutorials/code/notifier) instead.

There are handy shortcuts for emitting to someone when all you have is a character object.  Remember - we don't emit to characters, we emit to *clients*.  We need the client monitor to help us find which client belongs to a given character:

    Global.client_monitor.find_client(char)
    Global.client_monitor.emit_if_logged_in(char, "Something!")