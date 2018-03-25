---
title: Database Migrations
description:
layout: page
tags: 
- code
- database
---

Many Ares version upgrades will come with an associated **Database Migration**.   This is just a fancy way of talking about some code that will make changes to your database to bring it in line with the new version.

## Types of Migrations

There are three main types of migrations:

### Setting Default Values

Say the new Ares code has added a new field for `relationships`.  If we do nothing, that field will be `nil` for all existing characters.  If we want to set to an empty hash, we could create a database migration to do:

    Character.all.each { |c| c.update(relationships: {} )}

> **Tip::** Setting up a default value is most common with arrays and hashes, because usually it's more convenient for them to default to 'empty' instead of 'nil'.

### Removing Fields

As explained in [Removing a Database Field](/tutorials/code/remove-field), you first need to `nil` out a database field before you can remove it from a database model.  Upgrades frequently will remove a field from the main code, but then create a data migration that puts it back temporarily - just long enough to set it to `nil`.  For example:

    class Character
      attribute :favorite_color
    end
    Character.all.each { |c| c.update(favorite_color: nil)}

### Moving Fields

Moving fields requires a little trickery in the same way that removing a field does.  You need to put the old field back temporarily so you can use it to set the new one.   Let's say we wanted to name the `rank` field to `military_rank`.   Assuming that the main Ares code had the new field (`military_rank`), we could do a migration like this:

    class Character
      attribute :rank
    end
    Character.all.each do |c|
      # Copy over the old rank
      c.update(military_rank: c.rank)
      # Wipe out the old field so Ohm doesn't complain
      c.update(rank: nil)
    end


## Running Migrations

Migrations have names, which include a number to show what order they should be run in.  For example:  `030-remove-html-cache`.   To run a migration, go to the server shell and change to the aresmush folder.  Then run the command:

    bin/upgrade <migration name>

> <i class="fa fa-info-circle"></i> **Tip:** Don't include the ".rb" file extension when specifying the migration name.

> <i class="fa fa-info-circle"></i> **Tip:** It's best to run the migration when the game is shut down, so nobody tries to update their character in the midst of a migration running.