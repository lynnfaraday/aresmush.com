---
title: Edit Database Fields
description:
layout: page
tags: 
- manage
---

On Penn and Tiny, you can change settings just by manually editing attributes:

    &WHATEVER *Player=Something

That doesn't work on Ares because objects and attributes work differently.

# Admin Commands

The "Ares Way" is to use admin commands for these sorts of things.  Need to edit someone's skills?  Use the `ability` command.  Need to edit someone's actor?  Use the admin `actor` commands.

> See `ahelp` for a complete list of admin commands.

# Tinkering

But because Ares is still in its infancy, sometimes you won't find an admin command to do what you need.  (Feel free to provide [feedback](/feedback) when this happens.)

The easiest way to change something when no admin command exists is to use the `tinker` command.  See the [Tinkering](/manage/tinker) tutorial.

# Manual Database Access

But sometimes even tinkering won't cut it, and you'll just have to roll up your sleeves and dive into the database itself.  Log into your [Server Shell](/install-ares/server-shell) and run the following commands to open up a database command prompt:

    redis-cli
    auth YOUR_DATABASE_PASSWORD

From here you can use any [redis commands](http://redis.io/commands).

For example, to see a list of all character objects:

    keys *Character* 

This will give you a list of items like `AresMUSH::Character:2`.

These objects are hashes, so you use the redis HGET/HST commands to access them.  For instance, to view someone's pose autospace field setting:

    hget AresMUSH::Character:2 pose_autospace

You can look in the code to find the field names (like pose_autospace), or you can just ask for all of them at once.

    hgetall AresMUSH::Character:2

Also keep in mind that many settings are stored in a child object and referenced by ID.  For instance, to find out the name of the room someone's in:

    hget AresMUSH::Character:2 room_id  --> gives '1'
    hget AresMUSH::Room:1 name --> gives 'Welcome Room'

You CAN change things, but be careful.  Formatting matters, and sometimes fields are connected to each other.  For example, setting a character's room ID to a room that doesn't exist would cause an error when the character logged in.

    hset AresMUSH::Character:9 pose_quote_color "%xr"

