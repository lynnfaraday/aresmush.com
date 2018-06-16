---
title: Database Queries and Updates
description:
layout: tutorial
quickstartTutorial: true
tutorialName: Code Quickstart
tutorialIndex: tutorials/code/quickstart
prevstep: localization-intro
nextstep: next-steps
tags: 
- code
- code-quickstart
- database
---

Most commands will need to read data from or save data to the database.  Ares uses an off-the-shelf database tool called Redis, but you won't interact with the database directly.  There are no SQL queries to write or anything like that.  The [Ohm](http://ohm.keyvalue.org/) database library lets you interact with the database using Ruby code.

Diving deep into the database is beyond the Quickstart Tutorial.  This is just a quick overview.  There's a separate  [database tutorial](/tutorials/code/database) for you in the Advanced Coding section if you want to learn more.

## Models and Fields

Ohm lets you define ruby classes that interact with the database.  These are called **Models**, and you can identify them by the fact that they inherit from `Ohm::Model`.   Model classes define attributes that correspond to fields in the database.  For example, the `Character` class defines a name and alias: 

    class Character < Ohm::Model
      attribute :name
      attribute :alias
      ...
    end

We're already seen how we can utilize the name attribute in our code through examples like `client.emit "Hello #{enactor.name}!"`   In that case, `enactor` is a character model, and `name` is the database field.

You'll need to look in the code to find out what database fields are available.

## Queries

There are a variety of ways to query (request) information from the database, but the most common one will be to find something by name.   Let's see how that works.   Change the tinker command as shown:

    def handle
      char = Character.find_one_by_name(cmd.args)
      if (char)
        client.emit "You found #{char.name}"
      else
        client.emit "Nothing found."
      end
    end

Try the command with different names and see what happens.

## Updates

Once you have the database object, you can use the `update` method to change its fields.  Here's how we can change Guest-1's alias to "guest":

    def handle
      char = Character.find_one_by_name('Guest-1')
      char.update(alias: "guest")
      client.emit "Done!"
    end

> <i class="fa fa-exclamation-triangle"></i> **Important:** Just setting the class attribute (like `char.alias = 'guest'`) will change the local copy of the object, but it doesn't update the databse.  Always call `update` to save database changes.

