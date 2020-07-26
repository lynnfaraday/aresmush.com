---
title: Setting Up Your Client
description: 
layout: page
tags:
- client
---

To connect to AresMUSH (or any other MUSH), you'll need a MUSH client.  There are dedicated apps you can install on your PC/Mac or mobile device, or you can use the game's built-in web client to play through the web browser.

{% include toc.html %}

## Client Features

Basic features will work no matter which client you use, but there are some features that are supported on some clients but not others.

| Client | Platforms | Unicode | Emoji | FANSI | Editing |
|----|----|
| [BeipMU](/clients.html#beipmu) | Windows | <i class="fa fa-check-square"></i> | <i class="fa fa-check-square"></i> | <i class="fa fa-check-square"></i> | <i class="fa fa-cog"></i> |
| [Atlantis](/clients.html#atlantis) | Mac | <i class="fa fa-check-square"></i> | <i class="fa fa-check-square"></i> | <i class="fa fa-check-square"></i> | <i class="fa fa-check-square"></i> |
| [DuckClient](/clients.html#duckclient) | Chrome  | <i class="fa fa-check-square"></i> | <i class="fa fa-check-square"></i> | <i class="fa fa-check-square"></i> | <i class="far fa-times-circle"></i> |
| [MUSHClient](/clients.html#mushclient) | Windows | <i class="fa fa-cog"></i> | <i class="far fa-times-circle"></i> | <i class="fa fa-check-square"></i> | <i class="fa fa-cog"></i> |
| [Potato](/clients.html#potato) | Windows/Linux | <i class="fa fa-check-square"></i> | <i class="far fa-times-circle"></i> | <i class="fa fa-check-square"></i> | <i class="fa fa-check-square"></i> |
| [SimpleMU](/clients.html#simplemu) | Windows | <i class="far fa-times-circle"></i> | <i class="far fa-times-circle"></i> | <i class="far fa-times-circle"></i> | <i class="fa fa-check-square"></i> |


<i class="fa fa-check-square"></i> - Supported out of the box. | 
<i class="fa fa-cog"></i> - Requires configuration. | 
<i class="far fa-times-circle"></i> - Unsupported.

If your client isn't listed here and you can't figure out how to make Ares work, you can [ask for help](/feedback.html).

### Unicode Characters

Ares uses UTF-8 Unicode, which lets you use accents, alternate character sets (Russian, Chinese) and symbols.  If your client isn't set up to support UTF-8, you may see white squares or gibberish when someone tries to use non-ASCII characters.

For the optimal Ares experience, you'll need to set up your client to use the **UTF-8** Unicode character set. Client-specific instructions can be found in [Setting Up Your Client](#setting-up-your-client). UTF-8 is backwards-compatible with ASCII, so you can safely make it your client's global default.  

If you have a client that doesn't support UTF-8 at all, enable ascii-only mode for your character.  Type `ascii on` in-game. You can also set a preference for ASCII only in your AresCentral [handle preferences](/handles), and have it automatically applied to all your linked characters.

### Emoji

Ares also supports emoji. If your client supports emoji, enabling UTF-8 as described above should be sufficient.  Sometimes a client will support some UTF-8 characters but not emoji.  In that event, you can disable emoji using `emoji off` in-game.

### Colors

Ares uses the 256-color FANSI color set.  If your client doesn't support FANSI, colors may not be displayed right.  In that case, use `colors ansi` to make it use regular 16-color ANSI.

If you prefer a grayscale experience, you can turn off colors using `colors none`.

### Editing (Grab/Decompile)

Some Ares commands have a '/edit' switch to pull text from the game into your client's input buffer.  For example, typing `desc/edit me` will put your description into your input buffer so you can edit it and send it right back.  This is Ares' version of the /grab or @dec/tf syntax from old servers.

The game uses a special prefix on text to tell the client to put it into the input buffer. The standard prefix is "FugueEdit >", which will work on many clients.  If you need to set a different prefix (sometimes called a 'grab password'), use the `edit/prefix` command in-game.

## Setting Up Your Client

<a name="beipmu"/>

### Setting up BeipMU

[Download BeipMU](https://beipdev.github.io/BeipMU/) for Windows.

BeipMU should automatically use UTF-8, but you can also set it manually through:

Connection -> Connect -> highlight the world -> Text Encoding -> UTF-8

To enable the editing feature, you'll need to go to Options->Triggers and import the following file as an edit trigger: [Beip Edit Trigger](/beip_edit.txt).


<a name="atlantis" />

### Setting up Atlantis

[Download Atlantis](http://www.riverdark.net/atlantis/) for Mac.

Atlantis should automatically use UTF-8.  If it's not working, try this:

1. Open the Atlantis 'Preferences' menu (Atlantis -> Preferences)
2. Select 'World Defaults'
3. Select the 'Formatting' tab.
4. Find the 'Character Set / Encoding' dropdown.
5. Select 'Unicode (UTF-8)'.

> You can also adjust this setting on a per-world basis in your Address Book.  Select the desired world and look under the 'Formatting' tab.  You may need to do this for any existing worlds.

Editing should work by default, but in case you need to modify the settings:

1. Open the Atlantis 'Preferences' menu (Atlantis -> Preferences)
2. On the 'General' tab, check 'Support FugueEdit input grabbing'.
3. You do not need to set the edit prefix; the default one should work.  If it doesn't, you can use edit/prefix to set the prefix to "FugueEdit >".


<a name="potato" />

### Setting up Potato

[Download Potato](http://www.potatomushclient.com/) for Windows and Linux.  It's broken on Mac at the time of this writing and doesn't seem likely to be fixed.

To set up Potato for UTF-8:

1. Select the 'Options' menu.
2. Select 'Configure Program Settings'.
3. Select 'Connection'.
4. Find the 'Starting Encoding' dropdown.
5. Select 'UTF-8'.

{% note %} 
This setting will take effect for any new worlds.  For existing worlds, you'll have to adjust the same setting under Address Book -> Edit World -> Connection -> Starting Encoding.
{% endnote %}

You shouldn't need to set up anything to make editing work in Potato.  But if it's not working, you can set up a grabber under Options -> Configure World.

{% include pretty_image.html file='potato.jpg' %}


<a name="mushclient" />

### Setting up MushClient

[Download MUSHClient](http://www.gammon.com.au/mushclient/mushclient.htm) for Windows.

To set up UTF-8 in MushClient:

1. While in the world, hit ALT+Enter or open the world properties menu (File -> World Properties). 
2. Select 'Appearance'.
3. Select 'Output'.
4. On the right, make sure the "UTF-8 (Unicode)" checkbox is checked.
5. Click 'OK' to save the settings.

To set up editing in MushClient:


1. While in the world, hit ALT+Enter or open the world properties menu (File -> World Properties). 
2. Select 'Appearance'.
3. Select 'Triggers'.
4. Add a new trigger.
5. In the top 'Trigger' box, enter:  `FugueEdit > *`.
6. In the 'Send' box, enter: `%1`.
7. Under 'Send To', select 'Command'.
8. On the right, check the 'Omit from Output' checkbox.

<a name="simplemu" />

### Setting up SimpleMU

SimpleMU is no longer supported, but many people still use it.

Because it's so old, SimpleMU doesn't support UTF-8, FANSI, or emoji.  You should turn on ASCII-only mode using `ascii on` and set your colors to `colors ansi`.

<a name="duckclient" />

### Setting up DuckClient

Prior versions of DuckClient did not like Ares' keepalive feature.  This was reportedly fixed, but if you see weird line behavior, you may need to disable the keepalive feature.  Type `keepalive off` in-game.

DuckClient does not support editing.
