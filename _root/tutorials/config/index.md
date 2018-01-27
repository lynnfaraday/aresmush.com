---
title: Configuring Ares
description:
layout: page
tags: 
- config
---

AresMUSH is ready to go out of the box with a default configuration based on a Battlestar Galactica setting.  Most games will want to customize Ares to their own theme and preferences.  These tutorials will show you how.

{{>tutorial_warning}}

## Configuration Files

All configuration is done through the game's [Web Portal](/tutorials/web-portal).  Log in as an admin user and visit the Admin screen.  Basic game settings have dedicated screens.  These are the things that virtually every game will need to adjust.

{{#pretty-image}}/assets/media/web_portal/game-setup.png{{/pretty-image}}

{{#pretty-image}}/assets/media/web_portal/fs3skills-config.png{{/pretty-image}}

For more advanced configuration, you will need to edit the game's configuration files.  You can do this through the Web Portal by selecting `Advanced Configuration`.  Configuration files are stored on disk in the `game/config` directory, so you can also edit them manually via the server shell.  Ares configuration files use YAML, so you should check out the [Understanding YAML](/tutorials/code/yaml) tutorial before diving into the advanced configuration.

{{#pretty-image}}/assets/media/web_portal/advanced-config.png{{/pretty-image}}

### Basic Game Config

* [Enabling and Disabling Plugins](/tutorials/config/plugins)
* [Configuring the Game Directory Info](/tutorials/config/game_dir)
* [Configuring Date and Time Formats](/tutorials/config/date)
* [Configuring Restricted Names](/tutorials/config/names)
* [Configuring Secret Codes](/tutorials/config/secrets)
* [Configuring the Game Skin (Lines)](/tutorials/config/skin)
* [Configuring Banned and Suspect Sites](/tutorials/config/ban)
* [Configuring the Web Portal](/tutorials/config/website)

### Plugin Config

* [Configuring the Channel System](/tutorials/config/channels)
* [Configuring Chargen](/tutorials/config/chargen)
* [Configuring the Cookie System](/tutorials/config/cookies)
* [Configuring Demographics](/tutorials/config/demographics)
* [Configuring the Events System](/tutorials/config/events)
* [Configuring the IC Time System](/tutorials/config/ooctime)
* [Configuring the Idle System](/tutorials/config/idle)
* [Configuring the Jobs System](/tutorials/config/jobs)
* [Configuring the Login System](/tutorials/config/login)
* [Configuring the OOC Time System](/tutorials/config/ooctime)
* [Configuring the Page System](/tutorials/config/page)
* [Configuring the Places System](/tutorials/config/places)
* [Configuring the Pose System](/tutorials/config/pose)
* [Configuring the Ranks System](/tutorials/config/ranks)
* [Configuring the Roles System](/tutorials/config/roles)
* [Configuring the Rooms System](/tutorials/config/rooms)
* [Configuring the Scene System](/tutorials/config/scenes)
* [Configuring the Status System](/tutorials/config/status)
* [Configuring the Weather System](/tutorials/config/weather)

### FS3 Skills Config

* [Configuring FS3 - Skill List](/tutorials/config/fs3skills_skills)
* [Configuring FS3 - Chargen](/tutorials/config/fs3skills_chargen)
* [Configuring FS3 - Experience (XP)](/tutorials/config/fs3skills_xp)
* [Configuring FS3 - Luck and Miscellaneous](/tutorials/config/fs3skills_misc)

### FS3 Combat Config

* [Configuring FS3 Combat Miscellaneous](/tutorials/config/fs3combat_misc)
* [Configuring FS3 Combat Skills](/tutorials/config/fs3combat_skills)
* [Configuring FS3 Combat Armor](/tutorials/config/fs3combat_armor)
* [Configuring FS3 Combat Damage](/tutorials/config/fs3combat_damage)
* [Configuring FS3 Combat Hit Locations](/tutorials/config/fs3combat_hitloc)
* [Configuring FS3 Combat NPCs](/tutorials/config/fs3combat_npcs)
* [Configuring FS3 Combat Vehicles](/tutorials/config/fs3combat_vehicles)
* [Configuring FS3 Combat Weapons](/tutorials/config/fs3combat_weapons)

### Backups

* [Setting Up Backups](/tutorials/manage/backups)

### Server Change Config

These configuration options will probably not need to be changed unless your server or database changes.

* [Configuring the Database](/tutorials/config/db)
* [Configuring the Server Info](/tutorials/config/server)
* [Configuring AresCentral](/tutorials/config/arescentral)
