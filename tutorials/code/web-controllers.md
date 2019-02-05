---
title: Web Portal Controllers
description:
layout: page
tags: 
- code
- webportal
---

The final piece of a screen is the **Controller**, which provides display properties and handles screen actions (like button clicks).

## Controller Actions

The buttons, selectors or other action triggers on a screen are linked to **action** in the controller.   For example, consider the delete action on the Event controller:

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

Some controllers also have display properties or helpers.  For example, some controllers have an `isApproved` helper to only show buttons or actions if a character is logged in and approved.

    session: service(),
    isApproved: function() {
        return this.get('session.data.authenticated.is_approved');
    }.property('model'),

