---
title: Engine Globals
description:
layout: page
tags: 
- code
- engine
- config
- help
- dispatcher
- clients
- cron
- plugins
- locale
- logging
- system_char
---

The game engine provides a number of global objects that provide useful services.  These are all part of the `Global` class, so you can access them with code like `Global.service.method`.

## Dispatcher

The Dispatcher is responsible for routing game commands, events and web requests to the appropriate plugin.  It is, in a way, the heart of the game engine.

See [Command Dispatching](/tutorials/code/dispatcher) for more information.

## Client Monitor

The Client Monitor keeps track of everyone who's logged in, so it's your go-to source when you need to know who's online or get the client object for a particular character.

See [Client Monitor](/tutorials/code/client-monitor) for more information.

## Cron

The Cron system triggers periodic events, like weekly cookie tallies or daily healing.

See [Cron](/tutorials/code/cron) for more information.

## Plugin Manager

The Plugin Manager is responsible for loading and unloading all of the plugins.

See [Plugins](/tutorials/code/plugins) for more information.

## Config Reader

The Config Reader loads and provides access to the game's configuration settings.

See [Config](/tutorials/code/config-reader) for more information.

## Help Reader

The Help Reader loads and provides access to the game's help files.

See [Help](/tutorials/code/help) for more information.

## Locale Reader

The Locale Reader is responsible for loading and providing access to the game's translation files.

See [Localization](/tutorials/code/localization) for more information.

## Logger

The Logger lets you write informational and debug statements to the game's log files.

See [Logging](/tutorials/code/logs) for more information.

## Notifier

The Notifier lets you send messages to both clients connected to the telnet port and clients connected through the Web Portal. 

See [Notifications](/tutorials/code/notifications) for more information.

## System Character

Though not technically part of the `Globals` class, the "System" character is a special character reserved for automated tasks that have an author (forum posts, mail messages, jobs, etc.)  The System char makes it clear that the message is coming from the game engine and not from an individual admin.

For example, the following code will create a forum post from "System":

      Forum.post(category, subject, message, Game.master.system_character)


