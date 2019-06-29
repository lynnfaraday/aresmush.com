---
title: Configuring Ares
description: 
layout: page
tags:
- config
---

AresMUSH is ready to go out of the box with a default configuration based on a Battlestar Galactica setting.  Most games will want to customize Ares to their own theme and preferences.  These tutorials will show you how.

{% include tutorial_warning.html %}

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Configuration Files

The easiest way to configure your game is through the game's [Web Portal](/web-portal).  Log in as an admin user and visit  `Admin -> Setup`.

You'll see a list of configuration files with settings you can change.

{% include pretty_image.html file='web-portal/game-setup.png' %}

Clicking on any config file will present you with a screen where you can edit the settings. 

{% include pretty_image.html file='web-portal/config.png' %}

Ares configuration files use YAML, so you should check out the [Understanding YAML](/tutorials/code/yaml.html) tutorial before diving into the advanced configuration.

{% tip %} 
Coders can also edit the config files in the server shell, but you'll need to ue the  `load config`  command afterwards to reload the configuration.  The Web Portal automatically reloads the config, so that step is not necessary when using the web editor.
{% endtip %}

## Essential Config

These are settings that pretty much every game will want to configure.

* [Configuring the Game Directory Info](/tutorials/config/game.html)
* [Configuring the Web Portal](/tutorials/config/website.html)
* [Configuring the Game Skin (Lines)](/tutorials/config/skin.html)
* [Configuring Demographics](/tutorials/config/demographics.html)
* [Configuring the IC Time System](/tutorials/config/ictime.html)
* [Enabling and Disabling Plugins](/tutorials/config/plugins.html)
* [Setting Up Backups](/tutorials/manage/backups.html)

## FS3 Config

If you intend to use the FS3 skills/combat systems, you'll want to review these settings.

### Basic FS3 Config

These are the basic configuration options that most games will need to tweak for their theme/setting.

* [Configuring FS3 - Skill List](/tutorials/config/fs3skills_skills.html)
* [Configuring FS3 - Chargen](/tutorials/config/fs3skills_chargen.html)
* [Configuring FS3 Combat Miscellaneous](/tutorials/config/fs3combat_misc.html)
* [Configuring FS3 Combat Skills](/tutorials/config/fs3combat_skills.html)

### FS3 Gear Config

The default gear lists are designed for a Battlestar setting.  If you're using another setting, you'll probably need to tweak the gear lists.  If you have custom vehicles or unusual combatant types (like six-legged aliens.html), you'll need to adjust the hit location tables.

* [Configuring FS3 Combat Armor](/tutorials/config/fs3combat_armor.html)
* [Configuring FS3 Combat Vehicles and Mounts](/tutorials/config/fs3combat_vehicles.html)
* [Configuring FS3 Combat Weapons](/tutorials/config/fs3combat_weapons.html)
* [Configuring FS3 Combat Hit Locations](/tutorials/config/fs3combat_hitloc.html)

### Advanced FS3 Config

These are advanced customization settings that most games won't need to alter.

* [Configuring FS3 - Experience (XP)](/tutorials/config/fs3skills_xp.html)
* [Configuring FS3 - Luck and Miscellaneous](/tutorials/config/fs3skills_misc.html)
* [Configuring FS3 Combat Damage](/tutorials/config/fs3combat_damage.html)
* [Configuring FS3 Combat NPCs](/tutorials/config/fs3combat_npcs.html)

## Other Config

A variety of other settings exist, but the defaults will work well for most games.

* [Configuring Banned and Suspect Sites](/tutorials/config/sites.html)
* [Configuring the Achievements System](/tutorials/config/achievements.html)
* [Configuring the Channel System](/tutorials/config/channels.html)
* [Configuring Chargen](/tutorials/config/chargen.html)
* [Configuring Date and Time Formats](/tutorials/config/datetime.html)
* [Configuring the Description System](/tutorials/config/describe.html)
* [Configuring the Events System](/tutorials/config/events.html)
* [Configuring the Forum System](/tutorials/config/forum.html)
* [Configuring the Idle System](/tutorials/config/idle.html)
* [Configuring the Jobs System](/tutorials/config/jobs.html)
* [Configuring the Login System](/tutorials/config/login.html)
* [Configuring the Mail System](/tutorials/config/mail.html)
* [Configuring the OOC Time System](/tutorials/config/ooctime.html)
* [Configuring the Page System](/tutorials/config/page.html)
* [Configuring the Places System](/tutorials/config/places.html)
* [Configuring the Ranks System](/tutorials/config/ranks.html)
* [Configuring Restricted Names](/tutorials/config/names.html)
* [Configuring the Roles System](/tutorials/config/roles.html)
* [Configuring the Rooms System](/tutorials/config/rooms.html)
* [Configuring the Scene System](/tutorials/config/scenes.html)
* [Configuring Secret Codes](/tutorials/config/secrets.html)
* [Configuring the Status System](/tutorials/config/status.html)
* [Configuring the Weather System](/tutorials/config/weather.html)
* [Configuring the Who/Where System](/tutorials/config/who.html)
* [Configuring the Wiki](/tutorials/config/wiki.html)

### Uncommon Config

These configuration options will probably not need to be changed unless your server or database changes.

* [Configuring the Database](/tutorials/config/database.html)
* [Configuring the Server Info](/tutorials/config/server.html)
* [Configuring AresCentral](/tutorials/config/arescentral.html)
* [Using the API Proxy](/tutorials/config/api-proxy.html).html)

## General Config Topics

* [Configuring Cron Jobs](/tutorials/code/cron.html) - Setting up tasks to run periodically.
* [Understanding YAML](/tutorials/code/yaml.html) - All about YAML configuration files.
* [Troubleshooting YAML](/tutorials/code/troubleshooting-yaml.html) - Dealing with YAML configuration problems.
* [Recovering from Config Errors](/tutorials/config/config-errors.html) - Rolling back defaults if your config gets messed up.
