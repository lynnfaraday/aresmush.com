---
title: Undestanding YAML
description:
layout: page
tags: 
- config
- yaml
---

[YAML](http://www.yaml.org/start.html) is the data format used for Ares' configuration files.  It is similar to other formats like JSON and XML, but is designed to be more human-readable.

> <i class="fa fa-info-circle"></i> **Tip:** Indentation is super-important in YAML files.  Always make sure things are lined up with each other.

Here is a snippet from the "Cookies" module configuration file:

    cookies:
        cookie_forum: "Cookie Awards"
        cookies_per_luck: 10

This defines a configuration section (`cookies`) and two settings (`cookie_forum` and `cookies_per_luck`).  The setting names are called **keys**.   

## Key Naming

Underscores and spaces are the only permitted special characters in key names.  For example: "cookie_forum" and "Viper Pilot" are valid key names.  Ares uses separate words for things that are displayed to players, and underscores for everything else.

When values are displayed to or used by the players (like skills, gear or faction names), keys shoud be in "titlecase" - first letter of each word capitalized, remaining letters lowercase. 

> Good:  Viper Pilot
> Bad:  Viper pilot
>
> Good: Eco
> Bad: ECO

> <i class="fa fa-exclamation-triangle"></i> **Note:** Yes, we know that being forced to use "titlecase" is an annoying limitation sometimes, like when you want to have a skill named SCUBA or a weapon named LMG.  It's a tradeoff to reduce coding complexity and configuration errors (which both help with overall game stability).

## Editing YAML Config

You can edit the game's configuration through the Web Portal.  Go to Admin -> Setup and choose the configuration file you want to edit.  You'll be presented with a simple editor screen.   You don't have to worry about the config keys in the web editor, only their values.

{{#pretty-image}}/assets/media/web_portal/config.png{{/pretty-image}}

Coders may also prefer to edit the config files on disk in the server shell.  All game configuration files reside in the `aresmush/game/config` folder on the server.  When editing on disk, you must do `load config` or `load <plugin name>` after changing the configuration so the game recognizes the changes.  This is not necessary when changing configuration in the Web Portal; it does so automatically.

## Data Types

YAML supports a variety of data types.

### Strings

Strings are specifed as `key:value`.  Quotes around the value are optional as long as there are no special characters inside the string.

    cookie_forum: Cookie Awards     # No special characters; no quotes needed.
    cookie_forum: "Foo:Bar"         # Quotes are needed because of the ':'.


### Numbers

Numbers are also specified as `key:value`.   Don't put quotes around values you want to be numbers, or they will be treated as strings instead.

    cookies_per_luck: 10

### Lists (Arrays)

Many configuration settings are lists.  For example, the list of channels that a new character should be added to automatically.  Lists use the array type in Ruby, and there are two ways to specify that in YAML.  You can put each item on its own line with a dash in front:

    default_channels:
        - Questions
        - Chat

Or you can use Ruby's array syntax:

    default_channels: [ 'Questions', 'Chat' ]

The array syntax is necessary if you want it to be an empty list.

    default_channels: []

### Complex Structures (Hashes)

For more complex configuration data, you can use a Ruby hash.  Each level of indentation makes a new key in the hash.  Each level of the hash can include strings, numbers, lists, and even other hashes.  Just be sure to keep all the levels lined up with each other.

Here is an example of the combat stance configuration, defining two stances with different attack and defense mods:

    stances:
        Aggressive:
            attack_mod: 2
            defense_mod: -2
        Reckless:
            attack_mod: 4
            defense_mod: -4

## Troubleshooting YAML

You can get unusual errors if you have indentation problems or other issues with your YAML files.  For help figuring out YAML errors, see [Troubleshooting YAML](/tutorials/code/troubleshooting-yaml).