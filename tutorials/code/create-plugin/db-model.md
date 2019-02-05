---
title: Create a Database Field
description:
layout: tutorial
createPluginTutorial: true
tutorialName: Creating a Plugin
tutorialIndex: tutorials/code/create-plugin
prevstep: help-file
nextstep: abilities-cmd
tags: 
- code
- plugins
- database
---

We'll need to save character abilities to the database, which entails some new database fields.   

## Storing a Hash

The simplest approach would just be to create a single hash on the Character model and store all the ability data there, like so:

    class Character
      attribute :cortex_abilities, :type => DataType::Hash, :default => {}
    end

To update someone's strength, you'd have to do something like this:

    old_abilities = char.cortex_abilities
    old_abilities['attributes']['strength'] = 'd6'
    char.update(cortex_abilities: old_abilities)

This works, but it's a little clunky.  You have to load and save _all_ abilities as a batch, even if you're just changing one.  And it's prone to typos.  If you do 'atributes' instead of 'attributes', you won't get an error message but the code will just not update the data properly.

## Storing Models

A better way is to use specialized database models.  The Cortex plugin define several model classes for this purpose. Let's look at one of them - CortexSkill - in detail.  

### Model Definition

First we have the class definition.  Inheriting from `Ohm::Model` is what makes it a database model -- a class capable of storing data to the database -- and including `ObjectModel` provides access to a number of useful standard Ares database utilities.

    class CortexSkill < Ohm::Model
      include ObjectModel
    end

> <i class="fa fa-info-circle"></i> **Tip:** Ohm is the database library that helps us talk to the database, and `< Ohm::Model` is a special bit of Ruby code that lets us do things like `attribute :name` to define a database field.  We didn't see Ohm::Model in the previous examples because we were adding to an existing model class (Character) defined by the engine.  Here, though, we're creating a brand new one.  You can learn more about the Ohm library in the [advanced database tutorial](/tutorials/code/database.html) when you're ready.  

### Model Attributes

Next we have the model attributes - a name, step, specialties and the character the ability belongs to.  The `index :name` statement creates an index on the name field, which just helps the database look things up faster.

      attribute :name
      attribute :die_step
      reference :character, "AresMUSH::Character"
      index :name

It's expected that `die_step` will be a step like 'd2', 'd4', etc. rather than a numeric value.

### Character Reference

The `CortexSkill` class stores which character each ability belongs to, but we also want to be able to easily find all of a character's skills.  To do this, we add a reverse reference in the Character model.  Since a character can have multiple skills, this reference uses the `collection` type.

    class Character
        collection :cortex_skills, "AresMUSH::CortexSkill"
    end

This allows us to reference things both ways:

    char = Character.find_one_by_name("Bob")
    
    # This gets us all of a character's skills
    char.skills
    skill = char.skills[0]
    
    # This gets us back to the character (Bob)
    skill.character  

### Saving Skills

To create a skill, we just need to create a new model object.

    char = Character.find_one_by_name("Bob")
    skill = CortexSkill.create(name: "Guns", die_step: 1, character: char)

> <i class="fa fa-info-circle"></i> **Tip:** This skill will automatically be added to Bob's skills collection; we don't need to do anything to make that happen.

To update a skill, first we have to find it.  There's a utility in `aresmush/plugins/cortex/helpers.rb` that can help us with that:

    char = Character.find_one_by_name("Bob")
    skill = Cortex.find_skill(char, "Guns")

Once we have the skill model, we can update it or delete it:

    skill.update(die_step: 'd4')
    skill.delete
