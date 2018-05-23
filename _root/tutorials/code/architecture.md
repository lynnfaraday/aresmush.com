---
title: Ares Architecture
description:
layout: page
tags: 
- code
- engine
- plugins
- portal
---

This article provides an overview of the main components that make up an Ares game.  It introduces some terminology that you'll encounter throughout these tutorials.

The following image shows all the different Ares components and how they fit together at a high level.  Each component is described in more detail below.  It's not expected that you'll absorb it all at once, but you can refer back to this as you learn more about the system.

{{#pretty-image}}/assets/media/architecture.png{{/pretty-image}}

## Clients

At the left are the **Clients**, which are how you connect to the game.  Generally you'll use a MU client application (like Atlantis or Potato) connected to the telnet port.  Ares also allows you to access the [Web Portal](/web_portal) through a web browser.

## Engine

The **Engine** is the heart of Ares.  It is the central server that everything else relies on.  It provides all the basic scaffolding needed to make the game work.  The Engine manages configuration, loads plugins, manages connections, and dispatches commands and events.  Individual Ares games should not need to change the engine code.

## Plugins

Ares supports a robust **Plugin** system, with its features separated into plugin modules.  Plugins provide all of the player commands - even core functionality like movement, help, descriptions, pages and channels.  They handle game events, responding to things like "character connected" or "game started".

Plugins are highly-configurable, allowing game owners to easily change their functionality just by editing the [game configuration](/tutorials/config).  If even more customization is desired, individual games can change the plugin code.  A fantasy MUSH might replace the outfits system with one that ties in with a crafting system. A war MUSH might replace the movement system with one that controls movement based on action points. The possibilities are endless.

## Database and Database Models

Ares uses [Redis](https://redis.io), a fast and lightweight database system.  You don't need to deal with Redis directly.  Both the Engine and the Plugins communicate with the database through **Database Models**.  DB Models utilize the [Ohm](http://ohm.keyvalue.org/) database library to translate Ruby code into database queries/updates.

The engine provides some common models, like characters and rooms.  Plugins may add their own models for everything from mail messages to combat instances.  They can also add custom fields to the common models, to store character attributes like profile fields or skills.

## Web Portal

The Web Portal is the game's website, allowing players to manage scenes, character profiles, wiki pages [and more](/web-portal).  The Web Portal consists of an [EmberJS](https://www.emberjs.com/) web application running on top of a standard web server like nginx (the Ares standard) or Apache.   Players connect to the portal through their web browser.

## Ports

The engine maintains several ports.

* The **Telnet Port** accepts connections from traditional MU clients and responds to client input.  The game can also send text to the client in response to events at any time.
* The **API Port** accepts API requests from the Web Portal.   It is a JSON-based API with a simple request-response model.  The Engine can't send unsolicited responses to the Web Portal from the API port.
* The **WebSocket Port** lets the Web Portal establish a two-way WebSocket connection between the game and the web browser.  This allows for asynchronous notifications like new activity in a scene or a new mail message arriving.  It is also the basis for the 'Play' screen web client.
* The **Web Portal Port** (aka HTTP Connection) is simply the port where the web server (nginx/Apache/etc.) is hosting the website.  Typically this will be the standard HTTP port 80, but you can configure the web server however you want.

> <i class="fa fa-info-circle"></i> **Tip:** WebSockets are sometimes blocked by firewalls or security software, which is why this method is not used for all Web Portal queries.  It's helpful, but don't rely on it too much.