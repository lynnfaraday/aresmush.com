---
title: Plugins
description:
layout: page
tags: 
- features
- code
- plugin
---

Unlike in Penn and Tiny, standard functionality is not a part of the engine.  Every system is implemented as a **Plugin**.  You can add, modify or replace any plugin. 

For example: A war MUSH might swap out the movement plugin for one that restricts movement based on action points during combat. A fantasy MUSH might swap out the description system with one that limits character descriptions based on what clothing items they had purchased. These changes replace the standard plugins, so you don’t end up with a hardcoded “who” and a softcoded “+who” on top of it.

Here are links to the documentation for every plugin available in the current version of Ares.

* [Actors](https://github.com/lynnfaraday/aresmush/blob/master/game/plugins/actors/) - Set and view "played by" actors for characters and NPCs.
* [BBS](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/bbs) - Inspired by the widely-loved Myrrdin's Bulletin Board System, the Ares BBS provides MU-wide discussion forums.
* [Channels](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/channels) - The Channels plugin provides a game-wide chat system. The Ares channels system does its best to support both PennMUSH and TinyMUX command syntax.
* [Cookies](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/cookies) - Cookies are just a silly little system to give players a way to thank each other for RP.  Cookies are a way of earning Luck Points, which can help your character out of sticky situations.
* [Demographics](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/demographics) - The Demographics plugin works in conjunction with the Chargen plugin to provide a way to set basic character stats.
* [Describe](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/describe) - Characters, rooms and exits all have descriptions.  The Describe plugin lets you set them.  Because it's a plugin and not part of the engine, games can easily tweak or replace the description code.  
* [Friends](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/friends) - The Friends plugin lets you add people as friends.  You can be notified when they log in.  Your friends list ties in with the Handles system's privacy features.
* [FS3](/) is a skills and combat system designed with MUSHes in mind.
* [Groups](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/groups) - Instead of having separate systems for "faction", "position", "department", etc., AresMUSH treats these all as Groups.  
* [Handles](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/handles) - Handles bring a little taste of social media to MUSHing. A handle is your OOC identity, used across all Ares games.  Through your handle, people can identify you as a player, not just as a character.
* [Help](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/help) - The Help system provides in-game help files.  
* [IC Time](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/ictime) - The IC Time plugin lets you configure your game's IC time.
* [Idle](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/idle) - The Idle plugin helps you to deal with characters who have disappeared from the game.
* [Jobs](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/jobs) - Inspired by Anomaly Jobs, the Ares jobs system lets you track admin tasks and player requests.
* [Login](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/login) - The Login plugin contains the code to allow players to login and log out and do other registration tasks.
* [Mail](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/mail) - Ares features a robust in-game mail system.
* [Manage](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/manage) - The Manage plugin contains a variety of admin-only management commands.
* [Maps](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/maps) - The Maps plugin lets you display maps for your grid locations.
* [Notices](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/notices) - The Notices plugin alerts players to new things - mail, bulletin board posts, requests and jobs, etc. upon login.
* [OOC Time](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/ooctime) - The OOC Time plugin allows players to select their RL timezone. OOC MUSH times will then be displayed according to their local time.
* [Page](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/page) - Pages allow you to communicate privately with other players.
* [Pose](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/pose) -Posing is the term for communication that happens between characters who occupy the same MUSH room. This is the 'meat' of the game, the descriptions of character speech and actions that make up the story.
* [Ranks](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/ranks) -Ranks are used in military or paramiltary organizations. A military character can select their rank in Chargen.
* [Roles](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/roles) -Instead of flags and powers, Ares supports a generic Roles system.
* [Rooms](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/rooms) -The Rooms plugin contains all the code needed to build rooms and exits, and to move between them.
* [Roster](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/roster) - Ares supports a roster system for pre-made characters.
* [Status](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/status) - Your character status is a general reflection of what you're doing on the game.
* [Tutorials](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/tutorials) - The Tutorials plugin supplements the Help files by providing step-by-step tutorials for more complex systems.
* [Utils](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/utils) - The Utils plugin is a dumping ground for a bunch of minor miscellaneous commands.
* [Weather](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/weather) - The Weather plugin provides a randomized weather forecast based on the season and time of day.
* [Who](https://github.com/lynnfaraday/aresmush/tree/master/game/plugins/who) - The Who plugin shows you which other players are connected to the game, and where they are.