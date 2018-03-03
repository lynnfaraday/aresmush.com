---
title: Events Controller
description:
layout: portal-anatomy
prevstep: events-route
nextstep: events-web-request
tags: 
- code
- webportal
---

The final piece of a screen is the **Controller**, which provides display properties and handles screen actions (like button clicks).

The Events controller isn't very interesting, so let's look at a little of the Event controller (for the screen where you're viewing a single event).

## Controller Actions

The Event screen has a button on it to delete the event, which calls an **action** in the controller:

    actions: {
        delete: function() {
            let aj = this.get('gameApi');
            this.set('confirmDelete', false);
            aj.requestOne('deleteEvent', { event_id: this.get('model.id') })
            .then( (response) => {
                if (response.error) {
                    return;
                }
                this.transitionToRoute('events');
                this.get('flashMessages').success('Event deleted!');
            });
        }
    }

Like the route's model, the delete action needs to talk to the game using the Game API.  It sends the `deleteEvent` request, and then waits for the response (through the `.then` statement).  If the response is successful, it will put up a success message on the screen and take you back to the events screen.

## Controller Properties

Some controllers also have display properties or helpers.  As mentioned previously, the Events controller has an `isApproved` helper to check if a character is logged in and approved.

    session: service(),
    isApproved: function() {
        return this.get('session.data.authenticated.is_approved');
    }.property('model'),

