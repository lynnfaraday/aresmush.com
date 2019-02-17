---
title: Configuring the Channel System
layout: page
tags:
- config
---

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

To configure the Channels plugin:

1. Select Admin -> Setup.
2. Edit `channels.yml`

## Creating Channels

In-game commands let you create, delete, and rename channels.  You can also set channel permissions, colors, and and other settings.  See `help manage channels`.

## start_marker and end_marker

You can configure the characters that appears at the beginning and end of the channel name.  This lets you alter the appearance to do things like:

    <Chat> Faraday says, "This is MUSH style."
    [Chat] Faraday says, "This is MUX style."

Start and end markers can include ansi color and other formatting codes.

{% include note.html content=" Since < and > are reserved HTML characters, be sure to put them in quotes in the configuration." %}

## default_channels

You can configure which channels new characters join by default when they are first created.  Guests will also be added to those same channels when they connect.

This should be a list.  For example:

    - Questions
    - Chat

{% include note.html content=" Make sure these channels don't have permissions that would restrict their use by unapproved/guest characters." %}

## approved_channels

You can also configure which channels characters join when they are approved.  Like `default_channels`, this should be a list.  For example:

    - RP Requests

## ooc_lounge_channel

Linking a channel to the OOC lounge/Offstage room ensures that all chit-chat in that room is echoed to the selected channel.  This ensures that chatter can be accessible to all players - including ones on the web portal - and also subject to reporting with the Ares harassment tools. Just set `ooc_lounge_channel` to the channel name.  Leave it blank to allow people to chat in the OOC room as normal.

## recall_timeout_days and clear_history_cron

Messages in channel recall will be automatically deleted after the specified timeout, in days.  This helps keep the recall reasonably current for someone looking at the channel history - particularly on the web portal.

The clearing happens on the timetable specified by the cron config.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/code/cron.html) for help if you want to change this.

## recall_buffer_size

Sets the number of messages available in the channel recall (and thus the web portal chat) for all channels.