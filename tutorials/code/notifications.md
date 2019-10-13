---
title: Notifications
description: 
layout: page
tags:
- code
- engine
---

Although [basic emits](/tutorials/code/emitting.html) are great for command output, **notifications** are more broadly used to alert players to things happening in the game.

{% include toc.html %}


## Notification Types

There are several different ways to notify players.

| Notification Type | Description | Notifies In-Game? | Notifies Portal? | Notifies Offline Player? |
| ---- | ---- | ---- | ---- | ---- |
| Broadcast Notification   | Triggers an in-game emit _and_ a browser notification. | No | Yes | Yes |
| Personal Notification    | Notifies a specific player of new activity in a mail, forum, scene, etc. whether they're online or off. | Yes | Yes | Yes |
| Web Client Data Notification | Used for live updates of web portal screens. | No | Yes (Data Only) | No |
| Game Channel | General game activity. | Via channel | Via channel | Via channel recall |

{% tip %}
Some events will use multiple notification mechanisms.  For example, new scene activity will issue a personal notification to players who are offline _and_ use a web client data notification to update live scene screens.
{% endtip %}


## Broadcast Notifications

The global notifier sends a message to characters on the game (by way of an emit) _and_ characters logged into the web portal (by way of a browser notification).  These are transient alerts that will eventually scroll off-screen or time out.

{% include pretty_image.html file='notifications.png' %}

{% tip %}
These can be spammy, so they're generally reserved for important information (like the game shutting down) or things a player can opt out of (like forum post notifications).
{% endtip %} 

To notify all characters, you would do:

        Global.notifier.notify_ooc(:shutdown, message) do |char|
          true
        end

You can put conditions into the block to limit the notification to only certain characters.  Here the notification is limited to those characters who can read a forum category:

      Global.notifier.notify_ooc(type, message) do |char|
        Forum.can_read_category?(char, category)
      end


## Personal Notifications

Personal notifications are persistent alerts targeted to individual characters.  They're saved to the database, so folks won't miss anything.  You can view personal notifications by clicking the 'bell' icon on the web portal or using the `notices` command in-game.  Personal notifications are marked read when you view the mail/scene/forum/etc. that it's notifying you about.

    Login.notify(recipient, :mail, message, delivery.id)

The type (`:mail`) and the data (`delivery.id`) help the portal direct the player to the proper page to read the item.

## Web Client Data Notification

Web client notifications are used to update info on the web portal _without_ emitting to the game, like adding a pose to a scene or a chat message to a channel.

As with the global notifier, we can limit the notification to only certain characters.  Here we're only sending it to characters on a channel:

      web_message = "#{channel.name.downcase}|#{channel.name}|#{Website.format_markdown_for_html(formatted_msg)}"
      Global.client_monitor.notify_web_clients(:new_chat, web_message) do |char|
        char && Channels.is_on_channel?(char, channel)
      end

Notice that we're sending a bunch of data here (separated by | delimiters). Web client notifications contain data and not just a simple message for display.  The type (`:new_chat`) tells the web portal how to interpret the data.

## Game Channel

General game events are sent to the Game channel by default (though you can configure which channel). This includes miscellaneous updates like the who record being broken, and event starting, and so on.  Using a channel versus a global emit lets people mute these notifications when they're RPing and catch up on them later.

    Channels.announce_notification(message)
