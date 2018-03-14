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

The easiest way to configure your game is through the game's [Web Portal](/tutorials/web-portal).  Log in as an admin user and visit  `Admin -> Setup`.

You'll see a list of configuration files with settings you can change.

{{#pretty-image}}/assets/media/web_portal/game-setup.png{{/pretty-image}}

Clicking on any config file will present you with a screen where you can edit the settings. 

{{#pretty-image}}/assets/media/web_portal/config.png{{/pretty-image}}

Ares configuration files use YAML, so you should check out the [Understanding YAML](/tutorials/code/yaml) tutorial before diving into the advanced configuration.

> <i class="fa fa-info-circle"></i> **Tip:** Coders can also edit the config files in the server shell, but you'll need to ue the `load config` command afterwards to reload the configuration.  The Web Portal automatically reloads the config, so that step is not necessary when using the web editor.

## Essential Config

These are settings that pretty much every game will want to configure.

* [Configuring the Game Directory Info](/tutorials/config/game_dir)
* [Configuring the Web Portal](/tutorials/config/website)
* [Configuring the Game Skin (Lines)](/tutorials/config/skin)
* [Configuring Demographics](/tutorials/config/demographics)
* [Configuring the IC Time System](/tutorials/config/ictime)
* [Enabling and Disabling Plugins](/tutorials/config/plugins)
* [Setting Up Backups](/tutorials/manage/backups)

## FS3 Config

If you intend to use the FS3 skills/combat systems, you'll want to review these settings.

### Basic FS3 Config

These are the basic configuration options that most games will need to tweak for their theme/setting.

* [Configuring FS3 - Skill List](/tutorials/config/fs3skills_skills)
* [Configuring FS3 - Chargen](/tutorials/config/fs3skills_chargen)
* [Configuring FS3 Combat Miscellaneous](/tutorials/config/fs3combat_misc)
* [Configuring FS3 Combat Skills](/tutorials/config/fs3combat_skills)

### FS3 Gear Config

The default gear lists are designed for a Battlestar setting.  If you're using another setting, you'll probably need to tweak the gear lists.  If you have custom vehicles or unusual combatant types (like six-legged aliens), you'll need to adjust the hit location tables.

* [Configuring FS3 Combat Armor](/tutorials/config/fs3combat_armor)
* [Configuring FS3 Combat Vehicles and Mounts](/tutorials/config/fs3combat_vehicles)
* [Configuring FS3 Combat Weapons](/tutorials/config/fs3combat_weapons)
* [Configuring FS3 Combat Hit Locations](/tutorials/config/fs3combat_hitloc)

### Advanced FS3 Config

These are advanced customization settings that most games won't need to alter.

* [Configuring FS3 - Experience (XP)](/tutorials/config/fs3skills_xp)
* [Configuring FS3 - Luck and Miscellaneous](/tutorials/config/fs3skills_misc)
* [Configuring FS3 Combat Damage](/tutorials/config/fs3combat_damage)
* [Configuring FS3 Combat NPCs](/tutorials/config/fs3combat_npcs)


## Other Config

A variety of other settings exist, but the defaults will work well for most games.

* [Configuring Banned and Suspect Sites](/tutorials/config/ban)
* [Configuring the Channel System](/tutorials/config/channels)
* [Configuring the Cookie System](/tutorials/config/cookies)
* [Configuring Chargen](/tutorials/config/chargen)
* [Configuring Date and Time Formats](/tutorials/config/date)
* [Configuring the Events System](/tutorials/config/events)
* [Configuring the Idle System](/tutorials/config/idle)
* [Configuring the Jobs System](/tutorials/config/jobs)
* [Configuring the Login System](/tutorials/config/login)
* [Configuring the OOC Time System](/tutorials/config/ooctime)
* [Configuring the Page System](/tutorials/config/page)
* [Configuring the Places System](/tutorials/config/places)
* [Configuring the Ranks System](/tutorials/config/ranks)
* [Configuring Restricted Names](/tutorials/config/names)
* [Configuring the Roles System](/tutorials/config/roles)
* [Configuring the Rooms System](/tutorials/config/rooms)
* [Configuring the Scene System](/tutorials/config/scenes)
* [Configuring Secret Codes](/tutorials/config/secrets)
* [Configuring the Status System](/tutorials/config/status)
* [Configuring the Weather System](/tutorials/config/weather)

### Uncommon Config

These configuration options will probably not need to be changed unless your server or database changes.

* [Configuring the Database](/tutorials/config/db)
* [Configuring the Server Info](/tutorials/config/server)
* [Configuring AresCentral](/tutorials/config/arescentral)

## General Config Topics

* [Configuring Cron Jobs](/tutorials/config/cron) - Setting up tasks to run periodically.
* [Understanding YAML](/tutorials/code/yaml) - All about YAML configuration files.
* [Troubleshooting YAML](/tutorials/code/troubleshooting-yaml) - Dealing with YAML configuration problems.
