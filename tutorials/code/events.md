---
title: Event Handling
description:
layout: page
tags: 
- code
- plugins
- events
- dispatcher
---

Where command handling is triggered by a player typing something, Events are triggered by the game itself in response to something happening.  

When a MU client sends text to the game's telnet port, several things happen:

1. The code triggering the event creates an Event object.
2. The Event object is added to the [Dispatcher's](/tutorials/code/dispatcher.html) dispatch queue.  
3. When it gets to that item in the queue, the Dispatcher will ask each plugin if it's interested in that event.  
4. If a plugin returns an event handler object, the Dispatcher will call `on_event` in the handler.  It then continues on to the next plugin and does the same.
5. If no plugins handle the event, the Dispatcher will ignore it.

> <i class="fa fa-info-circle"></i> **Tip:** Multiple plugins may handle a single event.

## Standard Events

Standard events in the stock Ares code include:

* `CharConnectedEvent` - A character has disconnected.
* `CharDisconnectedEvent` - A character has connected.
* `CharCreatedEvent` - A new character was created.
* `CronEvent` - Triggered periodically.  See [Cron Jobs](/tutorials/code/cron.html).
* `ConfigUpdatedEvent` - The game configuration has changed.
* `GameStartedEvent` - Triggered on startup.
* `RoleDeletedEvent` - A role has been deleted. 
* `RoleChangedEvent` - A character's roles has changed.

## Handling Events

If a plugin wants to handle an event, it must implement the `get_event_handler` method in its plugin module.  This method is given an event name (matching the event names shown above) and can return either nil (if the plugin doesn't want the event) or an event handler class (if it does).

    module AresMUSH
      module Channels
        def self.get_event_handler(event_name) 
          case event_name
          when "CharCreatedEvent"
            return CharCreatedEventHandler
          end
          nil
        end
      end
    end


The handler class must implement the `on_event` method.  

    module AresMUSH
      module Channels
        class CharCreatedEventHandler
          def on_event(event)
             ...
          end
        end
      end
    end

> <i class="fa fa-info-circle"></i> **Tip:** Event objects always pass database **ids**, not actual database objects.  Each event handler must look up the database object independently.  This is necessary because otherwise the first plugin to handle the event may make changes to the database, and the second plugin would be operating on a stale copy of the object.




