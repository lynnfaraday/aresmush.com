---
title: Game Api
description:
layout: page
tags: 
- code
- webportal
---

`GameApi` is the Web Portal service that talks to the game. 

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Game Requests

The Game API service supports two primary methods: 

* `requestOne` - Requests a single object or a complex composite object.
* `requestMany` - Requests a simple list of objects.

For example:

    gameApi: service(),    
    model: function() {
        let aj = this.get('gameApi');
        return aj.requestOne('events');
    },

{% include tip.html content="Many requests you might think are lists actually use  <code>requestOne</code>  because they get back a composite object.  The events request, for example, returns a model that contains events _and_ the calendar URL." %}

## Request Parameters

Both of the request methods take the request name (similar to a command name in the game code).  Some requests take additional parameters.  For example, the following request takes the event ID from the route parameters `/event/<event id>` and passes it on to the game:

    return aj.requestOne('event', {event_id: params['event_id']});

## Request RSVP

A few routes perform multiple game requests and bundle them together into a single model object.  Their model looks like this:

        return RSVP.hash({
             types:  aj.request('censusTypes'),
             census: aj.requestOne('censusFull'),
           })
           .then((model) => Ember.Object.create(model));

Here the code would wait until both requests completed, then make a single model with `model.types` and `model.census`.

## Request Handling

See [Web Request Handling](/tutorials/code/web-requests.html) for more information about how this request is handled in the game engine.