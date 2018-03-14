---
title: Removing a Database Field
description:
layout: page
tags: 
- code
- database
---

Ares uses the [Ohm](http://ohm.keyvalue.org/) database library to access fields in the Redis database.  Adding new fields to Ohm database models is very easy.  Removing them requires a little more work.

For example - let's say that you had an attribute named favorite_color on the Character class:

    class Character < Ohm::Model
      attribute :name
      attribute :favorite_color
    end

You even made a `favoritecolor` command to set it.  Some people used that command, so now there are some characters with a `favorite_color` field saved in the database.

Now you've decided you don't need favorite color after all.   You remove it from the class:

    class Character < Ohm::Model
      attribute :favorite_color
    end

Everything seems fine, until the next time someone logs in, then bam!

    undefined method `favorite_color=' for #<AresMUSH::Character:0x007fcca57994f0>

This is happening because you've got data for `favorite_color` in the databse, but nowhere to put it on the Character object!   Ohm assumes that's a coding mistake and throws an error.

## Removing Fields Safely

It's annoying when this happens, but fortunately it's pretty easy to fix with the [tinker](/tutorials/code/tinker) command.

First, we put the missing field back in the database model.  Since database models can be defined across multiple files, you can just put the definition at the top of the tinker code - in-between `module AresMUSH` and `module Tinker`.

    module AresMUSH
      class Character < Ohm::Model
        attribute :favorite_color
      end
      
      module Tinker
      ...

> <i class="fa fa-info-circle"></i> **Tip:** Even if the field was originally a hash or array or something else, make it a regular string for this exercise.

Next we need to execute a tinker command to wipe out everyone's favorite color.

    def handle
      Character.all.each { |c| c.update(favorite_color: nil) }
    end

Once that tinker is exceuted, we can now remove the attribute permanently from the Character model.

## Errors During Upgrades

If you get these errors after a code upgrade, it's likely that you just forgot to run a [Database Migration](/tutorials/code/db-migration).
