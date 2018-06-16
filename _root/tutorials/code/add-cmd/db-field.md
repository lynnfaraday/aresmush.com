---
title: Create a Database Field
description:
layout: tutorial
prevstep: help-file
nextstep: cmd-handler
tutorialIndex: tutorials/code/add-cmd
tutorialName: Adding a Command
tags: 
- code
- plugins
- database
---

We're going to need to save our goals to the database.  Since goals are a facet of a character, it makes the most sense to add them to the `Character` class.

You define a database field using the `attribute` method in a database model class.  For example:

    class Character < Ohm::Model
      attribute :name
    end

> <i class="fa fa-info-circle"></i> **Tip:** Ruby classes can be spread across multiple files.  This lets you define bits and pieces of the `Character` class across multiple plugins.

Database fields can take many forms - strings, numbers, lists, hashes, etc.  Fields are strings unless otherwise specified.

## Try It

Create a file named `goals_char.rb` and put it in `aresmush/plugins/custom`.  Give it the following contents:

    module AresMUSH
      class Character
        attribute :goals
      end
    end

This defines an attribute named `goals` with a string data type.