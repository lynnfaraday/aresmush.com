---
title: Create a Config File
description:
layout: tutorial
createPluginTutorial: true
tutorialName: Creating a Plugin
tutorialIndex: tutorials/code/create-plugin
prevstep: plugin-module
nextstep: help-file
tags: 
- code
- plugins
- config
---

In the previous step, we set up the plugin to read its shortcuts from the game configuration: `Global.read_config("cortex", "shortcuts")`.

Now we need to set up that configuration.  All configuration files live in the `aresmush/game/config` folder.  The name doesn't matter, but traditionally they're named the same as the plugin.

Configuration files use the [YAML](/tutorials/code/yaml.html) format, with a series of key/value pairs.  Each plugin has its own top-level configuration section.

The create plugin script created a file named `cortex.yml` in `aresmush/game/config`, with an empty cortex section:

    cortex: {}

The first thing we'll want to add to that configuration is the list of abilities, which will vary from game to game.  Cortex has several different kinds of abilities.  

* Attributes have a name and description.  
* Skills have a name, a description, and suggestions of specialties.  
* Assets and Complications have a name, a description, and a list of available die steps.  

We'll also have some other configuration, like the number of points people start with and the shortcuts list (which we'll just leave empty for now until we have some commands).  

Put this all together and we get the following configuration:

    cortex:
        starting_attribute_points: 48
        starting_skill_points: 68
        starting_trait_points: 4
        shortcuts: {}
        attributes:
        -
          name: Agility
          description: Quickness and coordination.
        - 
          name: Strength
          description: Physical brawn.
        skills:
        - 
          name: Athletics
          description: General athletic activity and sports.
          specialties: Running, Jumping, Climbing, Weight Lifting
        - 
          name: Guns
          description: Shooting firearms.
          specialties: Rifle, Energy Weapon, Pistol, Shotgun
        assets:
        - 
          name: Ambidextrous
          description: Using both hands with equal proficiency.
          steps:
          - d2
        - 
          name: Blue Blood
          description: Descended from nobility.
          steps:
          - d2
          - d4
          - d6
        complications:
        - 
          name: Allergy
          description: Allergic to something common.
          steps:
          - d2
          - d8
        -
          name: Forked Tongue
          description: Compulsive liar.
          steps:
          - d6

Obviously that's only a tiny sampling of the abilities.  In the real implementation, the configuration is broken up across several files, cortex_attributes.yml, cortex_skills.yml, etc. just to keep the data more organized.  You can have multiple config files for a single plugin, as long as their configuration is under `cortex:`.  For example:


In cortex.yml:

    cortex:
        starting_attribute_points: 48
        ...
        shortcuts: {}
    

In cortex_attributes.yml:

    cortex:
        attributes:
            - ...
    

And so on.

{% tip %} 
Notice that the list of specialties is just a string, but the list of steps for assets/complications is an actual list.  That's because specialties are free-form.  The listed values are just suggestions and you can create your own.  Steps on the other hand are fixed.  You can only get a trait at one of the available steps.
{% endtip %}