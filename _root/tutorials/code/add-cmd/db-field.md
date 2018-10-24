---
title: Create a Database Field
description:
layout: tutorial
prevstep: help-file
nextstep: cmd-handler
tutorialIndex: tutorials/code/add-cmd
addCmdTutorial: true
tutorialName: Adding a Command
tags: 
- code
- plugins
- database
---

We're going to need to save our goals to the database.  Since goals are a facet of a character, it makes the most sense to add them to the `Character` class.

## Create the Database Model

Create a file named `goals_char.rb` in `aresmush/plugins/custom`.  Give it the following contents:

    module AresMUSH
      class Character
        attribute :goals
      end
    end

In the game, type `load custom` to reload the custom plugin.

Type `ruby enactor.update(goals: "Test goals")` to set some goals on yourself.

Type `ruby enactor.goals` to view them.

## About Database Models

Character is one of the core database models in Ares (along with Room, Exit and Game).  Database models contain multiple data fields, called *attributes*.  A character will have a name, an alias, a description, etc.

Ruby lets you *extend* classes in multiple files.  Even though the Character class is defined in the engine, you can add new fields to it from different plugins.

Database fields can take many forms - strings, numbers, lists, hashes, etc.  Fields are strings unless otherwise specified, so in the example above we've defined a string field named "goals".

> <i class="fa fa-info-circle"></i> **Tip:**  Since database fields can be defined across multiple files, most plugins prefix their db fields with the plugin name (e.g. fs3_skills) to avoid name collisions.  
