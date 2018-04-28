---
title: FS3 Code Roadmap
description:
layout: page
tags: 
- code
- fs3
- chargen
---

Whether you're modifying FS3 for your own house rules or using it as a pattern for your own skill system, it may help you to understand the key code blocks that make up the FS3 codebase.

## FS3 Plugins

FS3 is implemented as two plugins:  FS3Skills (including luck and XP) and FS3Combat.  The combat plugin is separate so it can be easily disabled in games that don't want automated combat.

## FS3 Skills

This section describes some important components of the FS3 Skills plugin.

### Database Models

The FS3 code uses custom database models to store its data.  It _could_ store everything as simple hashes on the Character object, but the FS3 ability types have a number of properties:  name, rating, XP spent, etc.  Having database models makes it easier to access those various fields individualy.  All of the FS3 data models use [references](/tutorials/code/database) to connect them to the character:

    class FS3Attribute < Ohm::Model
      reference :character, "AresMUSH::Character"
      attribute :name
      attribute :rating, :type => DataType::Integer, :default => 0
    end
    class FS3ActionSkill < Ohm::Model
      reference :character, "AresMUSH::Character"
      attribute :name
      attribute :rating, :type => DataType::Integer, :default => 0
    end
    class Character < Ohm::Model
      collection :fs3_attributes, "AresMUSH::FS3Attribute"
      collection :fs3_action_skills, "AresMUSH::FS3ActionSkill"
    end

### Configuration

FS3 is designed to be configured for individual games without needing to modify the code, so a _lot_ of stuff is controlled by the configuration files.  The ability lists, chargen limits, starting skills, XP costs, and more are all set in the configuration files.  These are described in detail in [Configuring FS3 Skills](/tutorials/config/fs3skills).

### Helpers

FS3 has a slew of shared helper methods, in separate files organized by topic:  rolls, chargen, xp, etc.   The helpers actually contain the meat of the system.  Most of the commands are actually prety bare-bones, doing little more than parsing args and calling helpers.

> <i class="fa fa-info-circle"></i> **Tip:** Having so many helper methods may be overwhelming at first, but dig into it a bit and hopefully you'll find that having short, focused helpers makes the code easier to understand. 

### Ability Types

A lot of FS3 behaves differently for the different ability types.  For example, the code to set an ability generates a different database model for each type:

    In `plugins/fs3skills/helpers/chargen.rb`:
    def self.set_ability(client, char, ability_name, rating)
      ...
      case ability_type
      when :action
        ability = FS3ActionSkill.create(character: char, name: ability_name, rating: rating)
      when :background
        ability = FS3BackgroundSkill.create(character: char, name: ability_name, rating: rating)

This is an important consideration if you were thinking about expanding FS3 for things like powers or another class of skill.  It's really not designed for that, and it's going to be a real pain to do.

### Roll Parameters

An important utility class in the skills plugin is `RollParams`.  This method encapsulates the parameters that go into a roll: ability name, linked attribute and modifier. 

Typically this will be built from the `parse_roll_params` method, which cracks apart strings like `roll Firearms` and `roll Firearms+Brawn-2`.

## FS3 Combat

This section describes some key components of the FS3 Combat plugin.

### Database Models

Like the skills plugin, combat has its own set of database models.  The two at the core are `Combat` - representing a combat instance - and `Combatant` - representing someone involved in a combat.   

The `Combatant` class can reference either a character object (for a PC or 'named' NPC) or a virtual NPC object that will be recycled when the combat is over.  It stores all the combat-specific information like ammunition, gear, action and stance.  Information that persists when a combat is over, like damage, has its own separate model.

### Configuration

The combat system is fully configurable, so it has a bunch of configuration files for everything from gear to hit locations.  These are described in detail in [Configuring FS3 Combat](/tutorials/config/fs3combat).

### Helpers

Again, like the skills system, much of combat is encapsulated in short, focused helper methods: `roll_defense`, `attack_target`, `determine_cover`, `determine_damage`, `weapon_defense_skill`, etc.  The commands are mostly lightweight wrappers for the helpers.

### Actions

All combat actions have a corresponding class that inherits from the `CombatAction` class.   The base `CombatAction` class provides some helpful utilities for parsing targets and some utility attributes like `combatant` and `name`.

Each action must implement several methods:

* `prepare` - Parses the action arguments, does error checking, and stores information in action-specific attributes.  May return an error message if there's a problem.  This will be emitted to the player.
* `print_action` - Prints the intended action in future tense, like:  "Faraday will attack Bob this turn."
* `print_action_short` - Prints the intended action in a short format suitable for the combat HUD.
* `resolve` - Resolves the attack when a new turn is triggered.  Does damage, updates ammo, imposes penalties, or whatever other effects the action has.  Returns an array of messages with the results of the action.  These will be emitted to the combat.

> <i class="fa fa-info-circle"></i> **Tip:** In addition to being called when the action is first set, `prepare` is called whenever the combat HUD is viewed and when the action is performed.  If at any time the character's action is no longer valid, the system will reset it.

#### Adding a New Action

If you create a brand new combat action, you'll need to register it with the `find_action_klass` method in `plugins/fs3combat/helpers/actions_helper.rb`.  This is essentially a mini dispatcher for combat action commands.

## Web Portal

One of the really nice selling points of Ares is the web portal, so you'll want to consider having a web-based chargen for your system.  FS3 has several web components.

### Character Creation Abilities Tab

Much of the web chargen is generic - demographics, background, groups, etc.  The FS3 bits are centered in the Abilities tab.  The `FS3Skills::ChargenCharRequestHandler` provides information driving this screen, representing the character's current abilities and specialties in hash form.   `FS3Skills::ChargenInfoRequestHandler` specifies the general information about what abilities are available and what skill limits are in effect.

On the Ember side, the `chargen.js` controller has a lot of logic to perform some client-side error checking.  This is not strictly necessary; everything will be fully error-checked by the server on the review screen.  But having the most commonly-encountered errors client-side makes a much more pleasant experience for the players.

Several Ember **Components** encapsulate the display and controls for modifying a single ability.  For example, the fs3-actionbox component includes everything needed for one of the action skill rows:

{{#pretty-image}}/assets/media/code/ability-box.png{{/pretty-image}}

### Profile Tab

The `fs3-sheet` and `fs3-damage` components are used on the character profile system tab to show simple lists of the character's skills and any damage taken.