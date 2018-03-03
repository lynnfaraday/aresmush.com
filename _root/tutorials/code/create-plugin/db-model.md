---
title: Create a Database Model
description:
layout: create-plugin
prevstep: help-file
nextstep: cmd-handler
tags: 
- code
- plugins
- database
---

We're going to need to save our traits to the database.  Since traits are a facet of a character, it makes the most sense to add them to the `Character` class.

Database fields can take many forms - strings, numbers, lists, hashes, etc.  In this case, since traits are name:value pairs, it makes the most sense to store them in a hash.  Fields are strings unless otherwise specified.

You define a database field using the `attribute` method in a database model class.  For example:

    class Character < Ohm::Model
      attribute :name
    end

> **Tip:** Ruby classes can be spread across multiple files.  This lets you define bits and pieces of the `Character` class across multiple plugins.

Database models can be placed in any folder within the plugin directory, but traditionally they live in the `public` directory because they can be referenced by other plugins.

## Try It

Create a file named `traits_char.rb` and put it in `aresmush/plugins/traits/public`.  Give it the following contents:

    module AresMUSH
      class Character
        attribute :traits, :type => DataType::Hash, :default => {}
      end
    end

This defines an attribute named `traits` with a hash data type.  On new characters created **after** you define the field, it will be given a default value of an empty hash.  On any existing characters, it will be nil.

> **Tip:** It's important to default hashes and arrays to empty values or you can get unexpected errors.  That's not necessary for strings and other data types, because the nil default is appropriate.