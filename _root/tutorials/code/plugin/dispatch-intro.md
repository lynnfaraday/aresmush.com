---
title: Dispatching
description:
layout: plugin-tutorial
prevstep: 
nextstep: 
tags: 
- code
- plugins
- dispatcher
---

We've talked a lot about how commands get handled, but how do you get from the player typing "tinker" in their MU client to the `TinkerCmd` class' `handle` method?  The answer is the **Dispatcher**.

The Dispatcher handles three types of dispatches:  

* **Commands** - in response to player input from a MU Client.
* **Events** - in response to something happening in the game, like a player being created.
* **Web Requests** - in response to a player doing something on the Web Portal.

Whenever it gets one of these dispatches, it goes through all the plugins to see if anybody wants to handle it.  Commands and Web Requests may only be handled by a single plugin.  Events may be handled by any plugin.

A plugin specifies what dispatches it handles through pre-defined methods that the Dispatcher knows to call:  `get_cmd_handler`, `get_event_handler` and `get_web_request_handler`.   Each of these methods may either return a handler class (like `TinkerCmd`) or nil if the plugin doesn't care about the dispatch.