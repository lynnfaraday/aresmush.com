---
title: Database Migrations
description: 
layout: page
tags:
- code
- database
---

Many Ares version upgrades will come with an associated **Database Migration**.  This is just a fancy way of talking about some code that will make changes to your database (or configuration files) to bring it in line with the new version.  

As part of a [code upgrade](/tutorials/manage/upgrades.html), the game will run any available database migrations.  This is an automated process, so you shouldn't need to worry about how it works under the hood.  This article can help you understand more about what's going on.
  
{% include toc.html %}

## Types of Migrations

There are three main types of migrations:

### Setting Default Values

Say the new Ares code has added a new field for `relationships`.  If we do nothing, that field will be `nil` for all existing characters.  If we want to set to an empty hash, we could create a database migration to do:

    Character.all.each { |c| c.update(relationships: {} )}

{% tip %}
Setting up a default value is most common with arrays and hashes, because usually it's more convenient for them to default to 'empty' instead of 'nil'.
{% endtip %}

### Moving Fields

Moving fields requires a little trickery.  You need to put the old field back temporarily so you can use it to set the new one.  Let's say we wanted to name the `rank` field to `military_rank`.  Assuming that the main Ares code had the new field (`military_rank`), we could do a migration like this:

    class Character
      attribute :rank
    end
    Character.all.each do |c|
      if (!c.military_rank)
        # Copy over the old rank
        c.update(military_rank: c.rank)
        # Wipe out the old field so Ohm doesn't complain
        c.update(rank: nil)
      end
    end

{% tip %}
Notice that we wrap this one in an 'if' so it doesn't do anything if the new field is already set.  Migrations _shouldn't_ be run more than once, but in case something goes wrong we don't want to accidentally wipe out everyone's ranks.
{% endtip %}

## Creating a Migration

If you're creating your own plugins, you may want to supply database migrations so others can install your code.  It's usually easier to just ask people to run them as `tinker` snippets than to tie into the official migraiton framework.