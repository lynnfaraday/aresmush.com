---
title: Server Roundup
description:
layout: page
tags: 
- features
---

Choosing the right server for your MUSH is important, and Ares may not be the best choice for every game.  This article compares some key MUSH features across different servers to help you find the one that best fits your needs.

Obviously this is biased a bit from my perspective, but I have done my best to be fair and accurate in representing the other servers.  If you see any discrepancies, please [let me know](/feedback.html).

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Server Comparison

This article compares the following servers:

* [AresMUSH](http://www.aresmush.com)
* [Evennia](http://www.evennia.com)
* [PennMUSH](http://www.pennmush.org)
* [TinyMUX](http://www.tinymux.org/)
* [RhostMUSH](https://github.com/RhostMUSH/trunk)

## Basic Systems

This chart shows what basic game commands/systems each server offers.  

> <i class="fa fa-check-square"></i> - The server comes with that functionality out of the box.
> 
> <i class="fa fa-user"></i> - A community contribution is available.  Community contributions usually require coding knowledge to install/configure, and may have limited support.   This list only includes well-known code packages like SGP, Myrddin's BBS, Anomaly Jobs, Faraday/Volund code suites, and approved Evennia/Ares contribs.


|Feature |AresMUSH |Evennia |PennMUSH |TinyMUX |RhostMUSH |
|----|
|Creating / Connecting |<i class="fa fa-check-square"></i> |<i class="fa fa-check-square"></i> |<i class="fa fa-check-square"></i> |<i class="fa fa-check-square"></i> |<i class="fa fa-check-square"></i> |
|Building / Moving |<i class="fa fa-check-square"></i> |<i class="fa fa-check-square"></i> |<i class="fa fa-check-square"></i> |<i class="fa fa-check-square"></i> |<i class="fa fa-check-square"></i> |
|Posing |<i class="fa fa-check-square"></i> | <i class="fa fa-check-square"></i> |<i class="fa fa-check-square"></i> |<i class="fa fa-check-square"></i> |<i class="fa fa-check-square"></i> |
|Channels / Pages |<i class="fa fa-check-square"></i> | <i class="fa fa-check-square"></i> |<i class="fa fa-check-square"></i> |<i class="fa fa-check-square"></i> |<i class="fa fa-check-square"></i> |
|Mail |<i class="fa fa-check-square"></i> |<i class="fa fa-user"></i>|<i class="fa fa-check-square"></i> |<i class="fa fa-check-square"></i> |<i class="fa fa-check-square"></i> |
|BBS / Forums |<i class="fa fa-check-square"></i> |<i class="fa fa-user"></i>|<i class="fa fa-user"></i>|<i class="fa fa-user"></i>|<i class="fa fa-check-square"></i>|
|Advanced Who / Where |<i class="fa fa-check-square"></i> ||<i class="fa fa-user"></i>|<i class="fa fa-user"></i>|<i class="fa fa-user"></i>|
|Events Calendar|<i class="fa fa-check-square"></i> ||<i class="fa fa-user"></i>|<i class="fa fa-user"></i>||
|Admin Jobs |<i class="fa fa-check-square"></i> ||<i class="fa fa-user"></i>|<i class="fa fa-user"></i>|<i class="fa fa-user"></i>|
|Finger / Profile |<i class="fa fa-check-square"></i> ||<i class="fa fa-user"></i>|<i class="fa fa-user"></i>|<i class="fa fa-user"></i>|
|IC Time |<i class="fa fa-check-square"></i> |<i class="fa fa-check-square"></i>|<i class="fa fa-user"></i>|<i class="fa fa-user"></i>|<i class="fa fa-user"></i>|
|Places |<i class="fa fa-check-square"></i> ||<i class="fa fa-user"></i>|<i class="fa fa-user"></i>|<i class="fa fa-user"></i>|
|Weather|<i class="fa fa-check-square"></i> ||<i class="fa fa-user"></i>|<i class="fa fa-user"></i>||
|Scenes and Repose |<i class="fa fa-check-square"></i> ||<i class="fa fa-user"></i>|<i class="fa fa-user"></i>|<i class="fa fa-user"></i>|

It's worth considering that a built-in system is only useful if you like how it works.  If you plan on ripping it all out and writing it from scratch anyway, then it may be easier to start with a blank slate.


## Web Integration

The newer servers have integrated game websites that pull data directly from the game.  Some also support a web-based MU client so you can play from the web.

|Feature|AresMUSH |Evennia |PennMUSH |TinyMUX |RhostMUSH |
|----|
|Integrated Website|Full Web Portal |Minimal Website (Extensible) |--- |--- |API Only |
|Web Client|Yes|Yes|API Only|---|API Only|

Ares contains a full-fledged [web portal](https://aresmush.com/web-portal/) with an integrated wiki, web chargen, scenes and character profiles, and an admin console.

Evennia comes with an integrated website.  Out of the box it has an admin panel for editing the database and a few player utilities.  You can use the Django web framework to code up a more robust site like [Arx’s](http://play.arxmush.org/).

Rhost supports a web API, which you could use to build an integrated website.  

PennMUSH and Rhost have server-side support for [Grapenut's WebClient](https://github.com/grapenut/websockclient) or a custom-made websocket client, but you have to set up the website yourself.

## Language

The programming language used by the game is relevant if you want to modify or extend the existing code.

|AresMUSH |Evennia |PennMUSH |TinyMUX |RhostMUSH |
|----|
|Ruby / EmberJS |Python / Django |MUSHCode / C|MUSHCode / C++|MUSHCode / C|

Rhost commands can also call out to external scripts written in any language.

C/C++ for Penn/Tiny/Rhost is only used in the hardcode, which most people don't have to modify.

## Coding from a MU Client

|AresMUSH |Evennia |PennMUSH |TinyMUX |RhostMUSH |
|----|
|Limited |Limited |Full |Full |Full |

PennMUSH, TinyMUX and RhostMUSH let you code from your MU client, executing MUSHCode or storing commands on objects.  With a robust permissions and quota systems, you can even allow regular players to create their own code.

Ares and Evennia both offer commands to execute arbitrary python/ruby code, but these are limited to admin-level coders for security reasons.  The bulk of coding in these platforms is done in text files that live on the server.  Even though the code lives on the server, it can be reloaded while the game is running.

## Skill Systems

Several servers have community contributions for skill systems.  This list only includes well-known, reputable systems and not every bit of random code floating around the 'net.

|System |Servers |Notes |
|---- |
|[FS3, 3rd Edition](/fs3/fs3-3) |AresMUSH ||
|[FS3, 2nd Edition](http://lynnfaraday.github.io/MUSH/) |PennMUSH |No longer in active development. |
|Cortex |AresMUSH |An old, unsupported version exists for Penn/Tiny. |
|Fate |AresMUSH | |
|FFG Genesys / Star Wars |AresMUSH | |
|Dahan's Star Wars Sagas |PennMUSH, RhostMUSH |Probably also works on TinyMUX. |
|[Dahan's Star Wars / WEG D6 System](http://www.mushcode.com/File/Dahans-D6-Skills) |PennMUSH |Probably also works on TinyMUX and RhostMUSH.|
|[Thenomain's Chronicles of Darkness (WoD)](https://github.com/thenomain/GMCCG/) |TinyMUX |Probably also works on PennMUSH and RhostMUSH. |

