---
title: Event Handling
description:
layout: page
tags: 
- code
- plugins
- events
---

Where command handling is triggered by a player typing something, Events are triggered by the game itself in response to something happening.  Standard events include:

* CharConnectedEvent - A character has disconnected.
* CharDisconnectedEvent - A character has connected.
* CharCreatedEvent - A new character was created.
* CronEvent - Triggered periodically.  See [Cron Jobs](/tutorials/code/cron).
* ConfigUpdatedEvent - The game configuration has changed.
* GameStartedEvent - Triggered on startup.
* RoleDeletedEvent - A role has been deleted. 
* RoleChangedEvent - A character's roles has changed.

## Handling Events

Events may be handled by multiple plugins.  To handle an event, simply implement the `get_event_handler` method in your plugin module and return a handler class for the desired event.  For example:

    module AresMUSH
      module Channels
        def self.get_event_handler(event_name) 
          case event_name
          when "CharCreatedEvent"
            return CharCreatedEventHandler
          end
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

> **Tip:** Event objects always pass database **ids**, not actual database objects.  Each event handler must look up the database object independently.  This is necessary because otherwise the first plugin to handle the event may make changes to the database, and the second plugin would be operating on a stale copy of the object.




