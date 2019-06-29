---
title: Web Portal Services
description: 
layout: page
tags:
- code
- webportal
---

**Services** provide centralized functionality - such as the ability to show notices on the screen or talk to the game server - to the entire Web Portal.

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Game API

The Game Api service lets the Web Portal talk to the game engine.  See [Web Portal Game Api](/tutorials/code/web-game-api.html).

## Flash Messages

Flash Messages appear at the top of the screen and provide transient notifications.  They're the Web Portal equivalent of the `emit_success` and `emit_failure` messages that accompany each command in the game engine code.

To create a flash message, call one of the message methods with the appropriate alert level (info, success, warning, danger):

    this.get('flashMessages').danger('Something went wrong.');

## Game Socket

The Game Socket service manages the connection to the engine API websocket port.  This service receives notifications from the game engine, like when there's new scene activity or a new event.

## Authenticator

The Authenticator manages the character's login information.  You can determine if a character is logged in - and their name, roles, etc. - using the authenticator.

    isApproved: function() {
        return this.get('session.data.authenticated.is_approved');
    }.property('model'),

