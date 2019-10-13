---
title: Essential Config - FS3
description: 
layout: tutorial
nextstep: next-steps
prevstep: time
tutorialIndex: tutorials/config/config-basics
essentialConfigTutorial: true
tutorialName: Essential Config
tags:
- config
---

If you're using the FS3 skills/combat system for your game, you'll need to set it up.  Otherwise, you'll want to disable it as described in [Selecting Plugins](/tutorials/config/config-basics/plugins.html).  You can use FS3 skills without combat, but not vice-versa.

{% note %}
Before setting up FS3, it is strongly advised that you read the guide [Customizing FS3](/fs3/fs3-3/tweaking-fs3.html), which tells you how to tweak and balance FS3 effectively.
{% endnote %}

## Skills Lists

The first thing you'll want to configure is your skill lists.

1. Go to Admin -> Setup in the web portal.
2. Edit `fs3skills_attrs.yml`.
3. Set up your attributes.
4. Repeat for `fs3skills_action.yml`, `fs3skills_bg.yml` and `fs3skills_langs.yml`.

Attributes and Languages just have a name and description:

```
  - name: Reflexes
    desc: Reflexes, dexterity, and hand-eye coordination.
```

Action Skills additionally have a linked attribute and an optional list of specialties:

```
  - name: Alertness
    desc: Noticing things and being aware of your surroundings.
    linked_attr: Perception
  - name: Medicine
    desc: Tending to the ill and injured.
    linked_attr: Wits
    specialties:
    - Doctor
    - Surgeon
    - Nurse
    - Medic
    - Other
```

Background Skills are just a hash of key/value pairs showing skill categories and example skills:

```
    Sciences: astronomy, biology, chemistry, geology, mathematics, physics, etc.
    Humanities: history, literature, psychology, philosophy, poetry, etc.
```

## Advantages

Advantages represent abilities that are not skills per se and don't fall neatly into the other categories.  They are disabled by default.  

{% note %}
Advantages are more akin to the old Storyteller system Backgrounds than they are to things like CofD merits/flaws, Cortex assets/complications, or Shadowrun positive/negative qualities.  You can't have different costs/limits for different advantages.  They're all rated 1-3 and they all cost the same.

They basically work exactly like background skills, but they're in a separate category because they're... not skills.
{% endnote %}

If you want to use Advantages, you'll need to:

1. Go to Admin -> Setup in the web portal.
2. Edit `fs3skills_advantages.yml`.
3. Set `use_advantages` to true.
4. Set up your advantages.

Advantages just have a name and description.

```
  - name: Resources
    desc: Wealth and other tangible possessions.
```

## Starting Skills

You can customize what abilities characters start off with when they 'reset' themselves, based on their groups.

For example, this configuration will assign skills and specialties based on position and faction. Everyone gets alertness: 2. All pilots get piloting:3, all medics get medicine:3 with a medic specialty, and all marines get firearms:2.

    Everyone:
      skills:
        Alertness: 2
        English: 3
    Position:
      Pilot:
        skills:
          Piloting: 3
      Combat Medic:
        skills:
          Medicine: 3
        specialties:
        - Medic
    Faction:
      Marines:
        skills:
          Firearms: 2

A few notes about this:

* Despite the word 'skills' in the name, you can also include attributes and advantages in the skills list.
* Use the special "Everyone" group to give skills to everybody.
* These skills are **not free**.  Characters still have to pay points for them normally.  They're just starting values to make chargen easier.
* If you don't want any starting skills, replace the entire list with just `{}` (an empty hash).  However, you probably want to at least make sure everyone starts with a common language.

## Default Linked Attribute

Be sure that your `default_linked_attr` in `fs3skills_attrs.yml` is a valid attribute. This is the attribute rolled with background skills and languages when the player doesn't specify an attribute manually.

## Costs and Limits

There are several things you can tweak about what skills cost, how many you get for free, and how many you can have total. See [Configuring FS3 Chargen](/tutorials/config/fs3skills_chargen.html) for details.  Also consider checking out the article [Managing Min-Maxing in FS3](/fs3/fs3-3/min-maxing.html) for some common pitfalls.

## Combat

To be honest, setting up combat is a pain. It's a sophisticated system with a lot of options, and there are no real shortcuts. Before you embark, ask yourself whether you really *need* mass combat code, or could just wing it with basic ability rolls.

If you're stout of heart and want to proceed, you'll first want to get a decent understanding of the [mechanics](/fs3/fs3-3/combat-mechanics.html).  Then just slog through each of the configuration sections one by one:

* [Configuring FS3 Combat Miscellaneous](/tutorials/config/fs3combat_misc.html)
* [Configuring FS3 Combat Skills](/tutorials/config/fs3combat_skills.html)
* [Configuring FS3 Combat Armor](/tutorials/config/fs3combat_armor.html)
* [Configuring FS3 Combat Vehicles and Mounts](/tutorials/config/fs3combat_vehicles.html)
* [Configuring FS3 Combat Weapons](/tutorials/config/fs3combat_weapons.html)
* [Configuring FS3 Combat NPCs](/tutorials/config/fs3combat_npcs.html)
* [Configuring FS3 Combat Hit Locations](/tutorials/config/fs3combat_hitloc.html)
* [Configuring FS3 Combat Damage](/tutorials/config/fs3combat_damage.html)