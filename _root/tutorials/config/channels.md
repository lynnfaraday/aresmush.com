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

## start_marker and end_marker

You can configure the characters that appears at the beginning and end of the channel name.  This lets you alter the appearance to do things like:

    <Chat> Faraday says, "This is MUSH style."
    [Chat] Faraday says, "This is MUX style."

Start and end markers can include ansi color and other formatting codes.

> <i class="fa fa-exclamation-triangle"></i> **Note:**  Since < and > are reserved HTML characters, be sure to put them in quotes in the configuration.

## default_channels

You can configure which channels new characters join by default when they are first created.  Guests will also be added to those same channels when they connect.

This should be a list.  For example:

    - Questions
    - Chat

> <i class="fa fa-exclamation-triangle"></i> **Note:**  Make sure these channels don't have permissions that would restrict their use by unapproved/guest characters.

## approved_channels

You can also configure which channels characters join when they are approved.  Like `default_channels`, this should be a list.  For example:

    - RP Requests