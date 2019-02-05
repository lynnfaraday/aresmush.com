---
title: Web Portal Routes
description:
layout: page
tags: 
- code
- webportal
---

Ember **Routes** are the piece that ties a URL together with a screen.  For instance if the web app has URLs like `/events` or `/event/<#>` then those are both routes with associated screens.

## Route Models

The most important thing the route does is to set up the **Model** - which is the data shown by the screen.   Most routes in Ares look like this:

    gameApi: service(),    
    model: function() {
        let aj = this.get('gameApi');
        return aj.requestOne('events');
    },

Many routes have a dynamic part of their URL, such as an object ID.  The model can access this through its `params` parameter.

    model: function(params) {
        let api = this.get('gameApi');
        return api.requestOne('event', {event_id: params['event_id']});
    },

The GameApi service lets you communicate with the game.  See [Web Portal Game Api](/tutorials/code/web-game-api.html) for more information.

## Router

All routes must be defined in the Ember `Router` class.  You must specify whether the router accepts parameters as part of its URL or not.  For example:

    this.route('events');
    this.route('event', { path: '/event/:event_id'} );

Here, the Event URL will be `/event/<event id>` and the Event route class will be able to access the desired event ID in its model method using `params['event_id']`.