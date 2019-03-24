---
title: Handling Web Requests
description:
layout: page
tags: 
- code
- webportal
- dispatcher
- plugins
---

When the Web Portal sends a JSON-based request to the game engine API port, several things happen:

1. The JSON text is converted into a `Web Request` object.
2. The request object is added to the [Dispatcher's](/tutorials/code/dispatcher.html) dispatch queue.  
3. When it gets to that item in the queue, the Dispatcher will ask each plugin if it's interested in that request.  
4. If a plugin returns a request handler object, the Dispatcher will call `handle` in the handler and then stop asking other plugins if they want the command.  
5. If no plugins handle the command, the Dispatcher will log an error.

{% tip %} 
Only one plugin may handle a web request.
{% endtip %}

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Handling Web Requests

If a plugin wants to handle a web request, it must implement the `get_web_request_handler` method in its plugin module.  This method is given a request object and  and can return either nil (if the plugin doesn't want the request) or a request handler class (if it does).

    def self.get_web_request_handler(request)
       case request.cmd
       when "events"
         return EventsRequestHandler
         ...
       end
       return nil
     end

## Web Request Class

The `WebRequest` class embodies a request from the Web Portal.  It provides a number of useful methods, including a way to look up the enactor from the authorization information and to get the requested command and arguments out of the request.

    request.cmd
    request.enactor
    request.args[:arg_name]

## Request Handler Classes

The plugin dispatchd returns a Request Handler.  Like a Command Handler, it implements a `handle` method to gather the desired data and return it to the Web Portal.

{% note %} 
Returned data should be in hash format.  It will be convered to JSON by the API server.
{% endnote %}

For example:

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

## Verifying Login

Like anything on the web, people spoofing the Web Portal with manual commands is a concern.  If a request is going to act on the database, always make sure that it's coming from a properly-logged-in character by calling `check_login`:

        error = WebHelpers.check_login(request)
        return error if error

If a request behaves differently for logged-in characters versus non, you can pass `true` to `check_login` to allow anonymous connections.  Someone who isn't logged in at all will be okay, but a spoofer pretending to be someone else will not.

For example:  The forum allows anonymous access to certain categories but not others.  So the call to `check_login` is followed immediately by a call to verify that the enactor has permissions for the requested category.  An anonymous connection could read the Announcements board but not the Admin one.

        error = WebHelpers.check_login(request, true)
        return error if error
        
        if (!Forum.can_read_category?(request.enactor, category))
          return { error: t('forum.cannot_access_category') }
        end