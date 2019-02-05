---
title: Notifications
description:
layout: page
tags: 
- code
- engine
---

The Notifier helps you to notify characters whether they are logged into the game engine (through the telnet port) or to the Web Portal. 

Most places don't use the Notifier.  If the player typed a command or generated a web request, the game knows to send the response to either the game engine or Web Portal, as appropriate.

The Notifier is for broader notifications that go to **both** the game engine and the Web Portal.  For example - an event being scheduled or a mail message arriving.

{% include pretty_image.html file='notifications.png' %}

## Character Selection

Even those broad messages don't necessarily go to _everyone_, so the notifier has a way to let you choose who can see them.  You pass a helper block to the notify method.  If the helper returns true for a client, it gets the message. 

For example, this one always returns true so it will notify _everybody_ of the event being scheduled:

      Global.notifier.notify_ooc(:event_created, message) do |char|
        true
      end

Whereas this version will only notify people who are on the mail message's "to" list:

      Global.notifier.notify_ooc(:new_mail, message) do |char|
        char && recipients.include?(char) && char != author
      end

> <i class="fa fa-info-circle"></i> **Tip:** If you're selecting particular characters, it's best to always check `char && ` before your actual selection.  Remember that there can be clients without a character if they're sitting on the login screen or not logged into the Web Portal.   You don't want to get nil exceptions.

## Event Types

Each notification has an event type - `:event_created` or `:new_mail` in the examples above.  These control special effects on the Web Portal.  For example, new scene activity activates a flag on the status panel, and new mail updates the mail counter in the top right.
