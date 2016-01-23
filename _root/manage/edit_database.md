---
title: Edit Database
description:
layout: page
tags: 
- manage
---

On Penn and Tiny, you can change settings just by manually editing attributes:

    &WHATEVER *Player=Something

That doesn't work on Ares because objects and attributes work differently.

The "Ares Way" is to use admin commands for these sorts of things.  Need to edit someone's skills?  Use the `ability` command.  Need to edit someone's actor?  Use the admin `actor` commands.

> See `ahelp` for a complete list of admin commands.

But because Ares is still in its infancy, sometimes you won't find an admin command to do what you need.  (Feel free to provide [feedback](/feedback) when this happens.)   In such cases, you'll need to manually edit the database.

> These instructions assume you're using the MongoLab, the recommended database host.  If you're self-hosting Mongo, you'll need to use the Mongo command line tools.  Those are not covered by this tutorial.  See the [Mongo documentation](http://docs.mongodb.org/manual/reference/mongo-shell/) for help.

# Screencast

This screencast will walk you through the process of editing the AresMUSH database, or you can read the step-by-step instructions below.

It assumes you've already logged into MongoLab and selected your AresMUSH database.

<iframe width="560" height="315" src="https://www.youtube.com/embed/eT3mYQLiKoc" frameborder="0" allowfullscreen></iframe>

# Editing an Object

1. Log into MongoLab.
2. Select your database.
3. Select the collection. For example, characters are in the `ares_mush_characters` collection; mail messages are in the `ares_mush_mail_deliveries` collection.
4. Select "New Search". 
{{#pretty-image}}{{urls.media}}/manage/dbedit1.png{{/pretty-image}} 
5. Enter search criteria.  Search help can be found along the right side of the screen.   A simple query to search by name would be: `{ "name": "Faraday" }`
{{#pretty-image}}{{urls.media}}/manage/dbedit2.png{{/pretty-image}} 
6. Select the "Edit Document" button on the item you found.
7. Make your changes in the "Edit Document" screen.  This is explained more in the next section.
{{#pretty-image}}{{urls.media}}/manage/dbedit3.png{{/pretty-image}} 
8. Click "Save" (at the bottom).
9. On the game, run the `reload` command.

> **Important!** If you don't run the `reload` command, the game won't know that you changed the database when it wasn't looking.  You have to tell it to reload for the changes to take effect.

# Object Data

MongoLab uses a format called JSON for its data.   You can read all about JSON at the [JSON tutorial](http://www.w3schools.com/json/), but here are some highlights to help you edit Ares data.

JSON is just a list of key/value pairs separated by commas.  For example:

    "fullname": "Lynn Faraday",
     "xp": 0,


You can add, edit or delete items in the list.

> **Delete with caution**.  Ares usually expects the key to exist, even if the value is 0 or an empty string.
>
> **Capitalization matters**.  Be sure to match the pattern that was there before.  Most things are stored either in title case with each word capitalized ("Some Neat Skill") or all lowercase with underscores between words ("friends_only").
 
## Strings

JSON can store strings.  For example:

    "fullname": "Lynn Faraday",

We could edit Faraday's full name just by changing that string.

> Make sure to keep the double quotes around strings; they're important.  If you have an item that contains quotes, you'll need to escape them, like "He said, \\"Woot!\\"."

## Numbers

JSON can store numbers.  For example:

     "xp": 0,

Numbers don't need quotes around them.

## Lists

JSON can contain lists of items, enclosed in brackets.  For example:

    "roles": [
        "everyone",
        "admin"
    ],

We could add a new item to the list, edit an item or remove one.

> Be sure to include commas between items.

## Hashes

JSON can also contain a hash of items, which are themselves a collection of keys and values.  (Hashes are explained more in the [Code Tutorial](/code).)   Hashes are enclosed in curly braces. For example:

    "groups": {
        "Position": "Rifleman",
        "Faction": "Navy"
    },

We could add a new key/value pair to the list, edit one or remove one.

> Be sure to include commas between items.
