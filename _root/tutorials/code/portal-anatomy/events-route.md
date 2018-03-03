---
title: Events Route
description:
layout: portal-anatomy
prevstep: events-template
nextstep: events-controller
tags: 
- code
- webportal
---

Ember routes are the basis of a URL - for instance if the web app has URLs like `/events` or `/event/1` then those are both routes.

## Route Models

The most important thing the route does is to set up the **Model** - which is the data shown by the screen.   Most routes in Ares look like this:

    gameApi: service(),    
    model: function() {
        let aj = this.get('gameApi');
        return aj.requestOne('events');
    },

The GameApi service lets you communicate with the game.  You can learn more about this in the more advanced [Web Portal Game Api](/tutorials/code/web-game-api) article.

## Browser Title

The route also sets the browser title, which is shown in the browser titlebar and bookmarks.  For example:

    titleToken: 'Events'

Many routes use a piece of the model in their browser title:

    titleToken: function(model) {
        return model.title;
    }
