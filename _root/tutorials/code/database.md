---
title: Database Queries and Updates
description:
layout: page
tags: 
- code
- database
---

## Database Queries and Updates

The [Ohm](http://ohm.keyvalue.org/) database library provides a variety of ways to query for database models, but here are a few of the easiest:

* `Character[id]` - Finds an object directly by ID.
* `Character.find_one_by_name(name)` - Finds the first character with that name/alias.
* `Character.find_any_by_name(name)` - Finds *all* characters with that name/alias.
* `Character.all` - Finds *all* characters.

If your database isn't gigantic, you can also use the Ruby `select` statement to filter objects based on any set of criteria.  If your database is huge, you're better off using [Ohm's](http://ohm.keyvalue.org/) queries.  They're a little more complex, but faster.  Here's an example that will find all characters with the 'admin' role:


    def handle
      chars = Character.all.select { |c| c.has_any_role?("admin") }
      names = chars.map { |c| c.name }
      client.emit "You found #{names.join(", ")}"
    end

> **Tip:** It is common to use `select` and `map` together like this.  Select will find a bunch of database objects, and map will get just the field you need from them (in this case the name).


Once you have a database object, you can use its properties as simple methods:

    char = Character.find_one_by_name("Bob")
    client.emit "Hello #{char.name}!"

You can update the properties on a database object using the `update` method.  For example:

    char = Character.find_one_by_name("Bob")
    char.update(name: "Harry")

Many database properties have specialized update methods because their data storage is not so straightforward.  Look around for helper methods in the plugin module:

    char = Character.find_one_by_name("Bob")
    Demographics.set_group(char, "Faction", "Navy")

> **Important:** Do not attempt to change database properties just by updating the object (e.g. `char.name = "Harry"`)  This changes the property on the **object** but does not actually update the database.   You can legitimately use this method to change multiple properties as a batch, but you have to do `char.save` at the end to commit the changes to the database.

## Finder Helpers

There are a few convenient utilities to help with common searches.  All of these will search by name or (for players) by alias, and include the `me` or `here` keywords, so they require you to pass in the character doing the search.

* `ClassTargetFinder` - Searches for a single object of the specified type.
* `AnyTargetFinder` - Searches for a single object among rooms, characters or exits.  Helpful for commands like describe/destroy that can work on multiple object types.
* `OnlineCharFinder` - Searches for a single matching online character.
* `VisibleTargetFinder` - Searches for a matching object in the same room - either a character, room or exit.  

All of the finder helpers do the error handling necessary to translate multiple matches into a message like "I don't know which one you mean" and no matches into "I don't see that here".  They return a `FindResult` object containing a 'found' indication and **either** the target object **or** an error message.

    result = ClassTargetFinder.find(name, Character, searcher)
    if (result.found)
        # Object was found - do something with result.target
    else
       # Object was not found - do something with result.error
    end


## Target Finder Block helpers
Several of the more commonly-used target finders have another level of helper utility you can use. Here's how it works:

ClassTargetFinder.with_a_character(name, client) do |model|
    # Do something with model if it's found
end
"with_a_character" will do the stuff in the middle if the character was found, using the variable 'model' for the character it found. If the character was not found, it will emit the appropriate error message to the client.

There's a similar helpers for "with_something_visible" and "with_online_chars". Search the code for those methods to see more examples.

## Game.master
The Game model is special because there's only one game. You don't really need to search for it. You can access the one and only game model using:

Game.master

## Callback Methods
