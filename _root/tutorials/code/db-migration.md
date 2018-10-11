---
title: Database Migrations
description:
layout: page
tags: 
- code
- database
---

Many Ares version upgrades will come with an associated **Database Migration**.   This is just a fancy way of talking about some code that will make changes to your database (or configuration files) to bring it in line with the new version.   

As part of a [code upgrade](/tutorials/manage/upgrades), you'll use the `bin/migrate` script to run any available database migrations.  This is an automated process, so you shouldn't need to worry about how it works under the hood.  This article can help you understand more about what's going on.
  
<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Types of Migrations

There are three main types of migrations:

### Setting Default Values

Say the new Ares code has added a new field for `relationships`.  If we do nothing, that field will be `nil` for all existing characters.  If we want to set to an empty hash, we could create a database migration to do:

    Character.all.each { |c| c.update(relationships: {} )}

> **Tip::** Setting up a default value is most common with arrays and hashes, because usually it's more convenient for them to default to 'empty' instead of 'nil'.



### Moving Fields

Moving fields requires a little trickery.  You need to put the old field back temporarily so you can use it to set the new one.   Let's say we wanted to name the `rank` field to `military_rank`.   Assuming that the main Ares code had the new field (`military_rank`), we could do a migration like this:

    class Character
      attribute :rank
    end
    Character.all.each do |c|
      # Copy over the old rank
      c.update(military_rank: c.rank)
      # Wipe out the old field so Ohm doesn't complain
      c.update(rank: nil)
    end

## Creating a Migration

If you're creating your own plugins, you may want to supply database migrations so others can install your code.  It's usually easier to just ask people to run them as `tinker` snippets than to tie into the official migraiton framework, but if you need to make official migrations, follow the example of the ones in the `install/migrations` folder.