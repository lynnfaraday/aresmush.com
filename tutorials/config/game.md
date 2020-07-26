---
title: Configuring the Game Directory Information
layout: page
tags:
- config
---

[AresCentral](https://arescentral.aresmush.com) has an automatic game directory that lists all active Ares games.  You can control how your game shows up there.

To configure the game preferences:

1. Select Admin -> Setup.
2. Select 'Game Info' under Basic Information.

{% include pretty_image.html file='web-portal/game-info.png' %}

## Game Information

These are the fields you can configure about your game.

* Name - Your game's name.
* Description - A short blurb about your game.
* Website - URL for your game (optional; if not specified it will just use your web portal URL).
* Category - Pick which category best describes your MUSH for the AresCentral games directory: Social, Historical, Sci-Fi, Fantasy, Modern, Supernatural, Comic, or Other.
* Public Game - Check the box if you want your game shown on AresCentral's game directory.  See "Public vs Private Games" below.
* Status - Pick a status that best describes your game: Sandbox, In Development, Alpha, Beta, Open or Closed.

## Public vs Private Games

Public games are advertised on the AresCentral game directory, and any characters registered to player handles are publicly visible.

Private games do not appear on the AresCentral game directory, but they can still leverage other AresCentral features if the game is registered with AresCentral.  Only players with a character on the game will see details for a private game on AresCentral.  Admins can register a private game with AresCentral using the `game/register` command. 

{% tip %}
You will not be able to link player handles on your game until you _either_ check the "Public Game" box _or_ run the `game/register` command to register your game manually.
{% endtip %}