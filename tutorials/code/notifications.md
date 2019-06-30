---
title: Notifications
description: 
layout: page
tags:
- code
- engine
---

There are lots of different ways to tell players about stuff happening on the game.

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Emits

Emits go only to characters logged into the game through a MUSH client, and are commonly used as command output. See [Emitting](/tutorials/code/emitting.html) for all the different ways you can emit messages.

## Global Notifier

The global notifier sends a simple notification to characters on the game (by way of an emit) _and_ characters logged into the web portal.  The basic version looks like this:

        Global.notifier.notify_ooc(:shutdown, message) do |char|
          true
        end

You can put conditions into the block to limit the notification to only certain characters.  Here the notification is limited to those characters who can read a forum category:

      Global.notifier.notify_ooc(type, message) do |char|
        Forum.can_read_category?(char, category)
      end

{% include pretty_image.html file='notifications.png' %}

## Web Client Notifications

You can also notify characters logged into the web portal _without_ emitting to the game.  This is normally used to update something on the web portal, like adding a pose to a scene or a chat message to a channel.

As with the global notifier, we can limit the notification to only certain characters.  Here we're only sending it to characters on a channel:

      web_message = "#{channel.name.downcase}|#{channel.name}|#{Website.format_markdown_for_html(formatted_msg)}"
      Global.client_monitor.notify_web_clients(:new_chat, web_message) do |char|
        char && Channels.is_on_channel?(char, channel)
      end

Notice that we're sending a bunch of data here (separated by | delimiters). Many web client notifications contain data and not just a simple message for display.  The type (`:new_chat`) tells the web portal how to interpret the data.

## Login Notices

Lastly we have the personal notifications, which trigger an update of the 'bell' icon on the web portal, and show up in the 'notifications' page. These are sent to a specific character and are saved to the database so they don't miss anything.

    Login.notify(recipient, :mail, message, delivery.id)

The type (`:mail`) and the data (`delivery.id`) help the portal direct the player to the proper page to read the item.

