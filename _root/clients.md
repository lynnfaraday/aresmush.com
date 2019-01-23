---
title: Setting Up Your Client
description:
layout: page
tags: 
- client
---

To connect to AresMUSH (or any other MUSH), you'll need a MUSH client.  There are dedicated apps you can install on your PC/Mac or mobile device, or you can use the game's built-in web client to play through the web browser.

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Common Clients

There are many MUSH clients around.  Popular MUSH clients include:

* [Potato](http://www.potatomushclient.com/) (Windows/Linux - it's broken on Mac at the time of this writing)
* [Atlantis](http://www.riverdark.net/atlantis/) (Mac) 
* [MUSHClient](http://www.gammon.com.au/mushclient/mushclient.htm) (Windows)
* [Duck Client](http://duckclient.com/) (Any Chrome browser - including Chromebook)

## Setting Up Your Client

Basic features will work no matter which client you use, but there are two things that you will need to set up to get the most out of Ares' features:

* **Character Encoding** allows you to see characters with accents, alternate character sets (Russian, Chinese) and symbols.  Without this feature, if someone uses those characters you'll see a substitute character that looks like white squares or gibberish.  For the optimal Ares experience, you'll need to set up your client to use the **UTF-8** Unicode character set.  UTF-8 is backwards-compatible with ASCII, so you can safely make it your client's global default.  If you have a client that doesn't support UTF-8 at all, you can enable ascii-only mode.  Type `ascii on` in-game or edit your AresCentral [handle preferences](/handles).

* **Editing** allows you to use the /edit switch on various commands to pull text from the game into your client's input buffer.  For example, typing `desc/edit me` will put your description into your input buffer so you can edit it and send it right back.  This is Ares' version of the /grab or @dec/tf syntax from old servers.  See `help edit` in game for more information.


Here are instructions for setting up your favorite MUSH client to work with Ares.

* [Potato](/clients#potato)
* [Atlantis](/clients#atlantis)
* [MUSHClient](/clients#mushclient)
* [SimpleMU](/clients#simplemu)
* [DuckClient](/clients#duckclient)
* [Other](/clients#other)

<a name="potato" />

## Setting up Potato

[Download Potato](http://www.potatomushclient.com/) for Windows, Mac and Linux

### Character Encoding

If you have Atlantis set to do character encoding auto-detection, it should automatically work with Ares.  If that doesn't work, try this:

1. Select the 'Options' menu.
2. Select 'Configure Program Settings'.
3. Select 'Connection'.
4. Find the 'Starting Encoding' dropdown.
5. Select 'UTF-8'.

> <i class="fa fa-exclamation-triangle"></i> **Note:** This setting will take effect for any new worlds.  For existing worlds, you'll have to adjust the same setting under Address Book -> Edit World -> Connection -> Starting Encoding.

### Editing

You shouldn't need to set up anything to make editing work in Potato.  But if it's not working, you can set up a grabber under Options -> Configure World.

{{#pretty-image}}/assets/media/potato.jpg{{/pretty-image}}


<a name="atlantis" />

## Setting up Atlantis

[Download Atlantis](http://www.riverdark.net/atlantis/) for Mac.

### Character Encoding

If you have Atlantis set to do character encoding auto-detection, it should automatically work with Ares.  If that doesn't work, try this:

1. Open the Atlantis 'Preferences' menu (Atlantis -> Preferences)
2. Select 'World Defaults'
3. Select the 'Formatting' tab.
4. Find the 'Character Set / Encoding' dropdown.
5. Select 'Unicode (UTF-8)'.

> You can also adjust this setting on a per-world basis in your Address Book.  Select the desired world and look under the 'Formatting' tab.  You may need to do this for any existing worlds.

### Editing

1. Open the Atlantis 'Preferences' menu (Atlantis -> Preferences)
2. On the 'General' tab, check 'Support FugueEdit input grabbing'.
3. You do not need to set the edit prefix; the default one should work.  If it doesn't, you can use edit/prefix to set the prefix to "FugueEdit >".

<a name="mushclient" />

## Setting up MushClient

[Download MUSHClient](http://www.gammon.com.au/mushclient/mushclient.htm) for Windows.

### Character Encoding

1. While in the world, hit ALT+Enter or open the world properties menu (File -> World Properties). 
2. Select 'Appearance'.
3. Select 'Output'.
4. On the right, make sure the "UTF-8 (Unicode)" checkbox is checked.
5. Click 'OK' to save the settings.

### Editing

1. While in the world, hit ALT+Enter or open the world properties menu (File -> World Properties). 
2. Select 'Appearance'.
3. Select 'Triggers'.
4. Add a new trigger.
5. In the top 'Trigger' box, enter:  `FugueEdit > *`.
6. In the 'Send' box, enter: `%1`.
7. Under 'Send To', select 'Command'.
8. On the right, check the 'Omit from Output' checkbox.

<a name="simplemu" />

## Setting up SimpleMU

SimpleMU is no longer supported, but many people still use it.

### Character Encoding

SimpleMU does not support international characters.  You'll want to turn on ASCII-only mode.  You can do this with the `ascii on` command in-game, or via your AresCentral [handle preferences](/handles).

### Editing

You shouldn't need to set up anything to make editing work in SimpleMU.

<a name="duckclient" />

## Setting up DuckClient

Prior versions of DuckClient did not like Ares' keepalive feature.  This was reportedly fixed, but if you see weird line behavior, you may need to disable the keepalive feature.  Type `keepalive off` in-game.

<a name="other" />

## Setting up Other Clients

If your client isn't listed here, you'll want to look for settings like "grab prefix" (which you should set to "FugueEdit> ") and "font / character encoding" (which you should set to "UTF-8").

If you have trouble finding these settings in your client, you can [ask for help](/feedback).