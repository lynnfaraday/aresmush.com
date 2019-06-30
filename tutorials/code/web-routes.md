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

They'll either use `requestOne` for a single item or a complex hash, or `requestMany` for a list of items.

Sometimes a route will need data from more than one place.  For this we can use the Router's RSVP function to stitch multiple requests together:

    model: function() {
      let api = this.get('gameApi');
      return RSVP.hash({
           jobs:  api.requestOne('jobs', { page: 1 }),
           options: api.requestOne('jobOptions')
         })
         .then((model) => {
           return Ember.Object.create(model);
         });
    }  

In a nutshell, this will issue two separate requests to the game (jobs and jobOptions), wait for both to respond, and then create a single model object.

## Route Parameters

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
  
## Adding a New Page/Route

To add a new page, you'll need to add a route for it and several other bits and pieces:

1. Router - The [router](#router) needs a definition for the route. (`ares-webportal/app/router.js`).
2. Route - The route needs a route handler. The main thing this needs to define is the [model function](#route-models).  (for example: `ares-webportal/app/routes/events.js`)
3. Template - The [template](/tutorials/code/web-templates.html) defines the page appearance for the route. (for example: `ares-webportal/app/templates/events.hbs`)
4. Controller (optional) - [controller](/tutorials/code/web-controllers.html) handles any button clicks or other actions, and can build some composite display properties from the model data. (for example: `ares-webportal/app/controllers/events.js` shows a composite property, and `ares-webportal/app/controllers/event.js` shows some button-click actions)