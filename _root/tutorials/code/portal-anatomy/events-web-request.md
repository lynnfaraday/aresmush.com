---
title: Events Web Request
description:
layout: portal-anatomy
prevstep: events-controller
nextstep: ember-utilities
tags: 
- code
- webportal
- api
---

We talked about the Game Api service, which sends requests to the game.  But what actually handles those requests?

Similar to how plugins provide Command Handlers for typed commands, they also provide Web Request Handlers.

The plugin dispatcher will implement a `get_web_request_handler` to tell which requests it wants to handle.  For example:

    def self.get_web_request_handler(request)
       case request.cmd
       when "events"
         return EventsRequestHandler
         ...
       end
       return nil
     end

The dispatch method returns a Request Handler.  Like a Command Handler, it implements a `handle` method to gather the desired data and return it to the Web Portal.

> **Note:** Returned data should be in hash format.  It will be convered to JSON by the API server.

    class EventsRequestHandler
      def handle(request)
        
        events = Event.all.map { |e| {
          id: e.id,
          title: e.title,
          ...
        }}
        
        {
          events: events,
          calendar_url: "#{AresMUSH::Game.web_portal_url}/events/ical"
        }
      end
    end