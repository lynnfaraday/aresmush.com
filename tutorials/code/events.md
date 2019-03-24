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

Where command handling is triggered by a player typing something, Events are triggered by the game itself in response to something happening.  There are events for characters connecting and disconnecting, characters being created, the game starting, and more.

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Event Dispatching

When a code module triggers an event, several things happen:

1. The Event object is added to the [Dispatcher's](/tutorials/code/dispatcher.html) dispatch queue.  
2. When it gets to that item in the queue, the Dispatcher will ask each plugin if it's interested in that event.  
3. If a plugin returns an event handler object, the Dispatcher will call `on_event` in the handler.  It then continues on to the next plugin and does the same.
4. If no plugins handle the event, the Dispatcher will ignore it.

{% tip %} 
Multiple plugins may handle a single event.
{% endtip %}

## Handling Events

There are two things required to handle events:

### Get Event Handler

All plugins have a `get_event_handler` method.  Just like `get_cmd_handler` returns a command handler class when a plugin wants a command, `get_event_handler` returns an event handler class when a plugin wants an event.

In this method, events are identified by a string corresponding to the event name ("CharConnectedEvent", "CharCreatedEvent", etc.)  Again, this is similar to the way that commands are identified by their command root ("forum", "connect", etc.)

The `get_event_handler` method can either return an event handler class or nil, depending on whether it wants the event.  For example:

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

### Event Handler Class

The second piece is to implement a class to actually handle the plugin (`CharCreatedEventHandler` in the example above.)  Event handling is much simpler than command handling.  There's no arg parsing, no error checks--you only need to implement a single method, named `on_event`.

The `on_event` method is passed an event object.  The contents of this object will vary depending on the event.  You'll need to look at the event class definition to find out what data is available.  See "Standard Events" below for more information.

    module AresMUSH
      module Channels
        class CharCreatedEventHandler
          def on_event(event)
             event.client.emit "Hello!"
          end
        end
      end
    end

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

You can find details about the data in these events by looking in the code file `/aresmush/engine/aresmush/commands/global_events`.  For example, character connected has the ID of the character and the client.

    class CharConnectedEvent
      attr_accessor :client, :char_id
    end

{% tip %} 
Event objects always pass database **ids**, not actual database objects to avoid race conditions.  You can look up the character in the handler using  `Character[event.char_id]` .
{% endtip %}

## Plugin Events

Other events may be defined by individual plugins. You'll typically find those in the `public` directory of a plugin.  For example: `aresmush/plugins/scenes/public/pose_event.rb`.
