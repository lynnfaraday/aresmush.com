---
title: Essential Config - Groups
description: 
layout: tutorial
nextstep: time
prevstep: demographics
tutorialIndex: tutorials/config/config-basics
essentialConfigTutorial: true
tutorialName: Essential Config
tags:
- config
---

Groups are used to organize characters into groupings like faction or position.

{% tip %}
Groups are best used for fields that have a fixed list of values.  If you're looking for a free-form text field, it might be better to use a basic demographic instead.
{% endtip %}

{% include toc.html %}

## Edit Groups

To edit group settings:

1. Go to Admin -> Setup in the web portal.
2. Edit `demographics.yml`.

The default demographics are set up for a Battlestar game just so you have an example to follow.  There are four groups, but we're only going to look at one here for an example:

```
    Faction:
      desc: Military faction.
      wiki: ''
      values:
        Navy: Join the fleet, see the worlds.
        Marines: Semper fi.
```

This is a [YAML Hash](/tutorials/config/config-basics/config-files.html#hash-values), with key:value pairs.

The outer hash is just:  `Faction:FactionData`.  

FactionData is itself a hash, with key:value pairs of description, wiki page link (optional), and values.

Values is _also_ a hash, with key:value pairs of the faction names and descriptions.

{% tip %}
Be careful with the indentation, or your configuration won't work as expected.  The hash keys must line up with each other at each level.  In other words, desc/wiki/values must line up, and then Navy/Marines must line up with each other at the next indent level.
{% endtip %}

## But I Don't Have Groups!

You have to define at least one group for your game, but don't despair.  Most games will have _some_ type of character groupings if you look hard enough.  Here are some ideas:

* Faction
* Position/Occupation (don't call it "job" as that conflicts with the request/job commands)
* Place of Origin (e.g., homeworld, nation, kingdom, etc.)
* Character Class/Concept (e.g., fighter, explorer, etc.)
* Social Structure (e.g., townie vs outsider, noble vs commoner)
* Employment Status (e.g. business owners, contractors, employee, unemployed)
* Alien Races
* etc.

## Updating the Character Gallery

The web portal character gallery uses groups to organize characters.  By default, it organizes them into tabs by Faction, and then into sub-groups by Position.  If you're using custom groups, you'll want to change this.

1. Go to Admin -> Setup in the web portal.
2. Edit `website.yml`.
3. Set `character_gallery_group` to the group (e.g. Faction, Nationality) you want for your primary tabs on the character gallery.
4. Set `character_gallery_subgroup` to a different group if you want the characters sub-sorted within the tabs.  You can leave it blank if you don't want to sub-sort.

## Updating the Welcome Messages

The chargen and roster welcome messages uses group to give an overview of the character.  If you're using custom groups, you'll need to change this or you'll get an error.

1. Go to Admin -> Setup in the web portal.
2. Edit `chargen.yml`.
3. Edit `welcome_message` to ensure it doesn't reference groups that don't exist.
4. Do the same for `roster_arrival_message` in `idle.yml`.

For example, the default is:  `Please welcome %{name}, our latest %{position} to be approved!`

If you don't have positions and want to highlight faction instead, you might want to say:  `Please welcome %{name} to the %{faction} faction!`

You can use any of your groups in the welcome message using `%{groupname}`.

## Updating the Ranks

Ranks are based on faction by default--meaning that each faction gets its own rank chart.  If you don't have factions but still want to use ranks, you'll need to update your ranks config.  See [Configuring the Ranks System](/tutorials/config/ranks.html) for details.

If you aren't using ranks, you can turn them off completely in the [Optional Plugins List](/tutorials/config/basic-config/plugins.html).

## Updating the Character Lists

The who list, roster, and census all reference groups in their column fields.

{% include pretty_image.html file='config/census-fields.png' %}

These are edited, respectively, in:

| List | Config File | Setting |
| --- | --- | --- |
| Who List | who.yml | `who_fields` |
| Census | demographics.yml | `census_fields` |
| Roster | idle.yml | `roster_fields` |

In all cases, you can change which groups are used simply by adding/editing/removing the group-related fields.  For example, this field shows the character's Faction with a title of "Faction", and it will be 20 characters wide in a MU client.

```
  - field: group
    width: 20
    title: Faction
    value: Faction
```


