---
title: Dispatcher
description:
layout: page
tags: 
- code
- plugins
- dispatcher
- commands
---

The Dispatcher is the beating heart of Ares.  Using an [EventMachine](https://github.com/eventmachine/eventmachine) reactor library, it ensures that commands and events are queued up and handled in an orderly fashion.

## Dispatches

The Dispatcher handles three main types of dispatches:

* **Commands** - in response to player input from a MU Client.
* **Events** - in response to something happening in the game, like a player being created.
* **Web Requests** - in response to a player doing something on the Web Portal.

Whenever it gets one of these dispatches, it goes through all the plugins to see if anybody wants to handle it.  Commands and Web Requests may only be handled by a single plugin.  Events may be handled by any plugin.

A plugin specifies what dispatches it handles through pre-defined methods that the Dispatcher knows to call:  `get_cmd_handler`, `get_event_handler` and `get_web_request_handler`.   Each of these methods may either return a handler class (like `TinkerCmd`) or nil if the plugin doesn't care about the dispatch.

> **Important**:  Never ever call EventMachine methods directly - always go through the Dispatcher.  If you don't have appropriate error checking and something goes wrong, you can crash the entire game.

## Spawns

Although the main reactor is single-threaded (ensuring all commands are handled in order), it is possible to spawn a _background task_ to handle long-running tasks without blocking the main command queue.  This is particularly important for calls to external websites that may take some time.

For example:

        Global.dispatcher.spawn("Performing backup.", client) do
            ... perform backup code ...
        end

> **Important:** Exercise caution when using spawns.  Most Ares code is threadsafe because it's stand-alone helper methods and command classes created on demand, but you can cause weird effects if your spawned task starts changing database fields on a character while other commands are still running.

## Timers

A timer delays code until some time has elapsed.  The code will be processed in queue order - it's not spawned into a background task - it will just be delayed.  For example, the following code waits 2 seconds and then does an emit:

        Global.dispatcher.queue_timer(2, "Tell guest their name", client) do
          client.emit_success t('login.guest_name', :name => guest.name)
        end

> **Tip:** Ares timers do not have stopwatch precision.  The code will wait for *at least* the specified time, but it may take a little longer depending on how busy the system is.

## Queue

The Dispatcher provides there ways for code to add things to the queue:

* `queue_command` - Adds a command to be processed.  See [Command Handling](/tutorials/code/commands).
* `queue_event` - Adds an event to be processed.  See [Event Handling](/tutorials/code/events).
* `queue_action` - Adds some arbitrary code to be processed.  This isn't commonly used.
* `queue_timer` - Queues a timer, as explained above.
