---
title: Essential Config - Game Directory
description: 
layout: tutorial
nextstep: plugins
tutorialIndex: tutorials/config/config-basics
essentialConfigTutorial: true
tutorialName: Essential Config
tags:
- config
---

First you'll want to set up some basic information about your game.  This information is used in the [AresCentral games directory](https://arescentral.aresmush.com).

1. Go to Admin -> Setup in the web portal.
2. Select "Game Directory Information".

You'll see the following screen:

{% include pretty_image.html file='web-portal/game-info.png' %}

Just enter the necessary information about your game - its name, description, category, etc.

"Public Game" controls whether you want your game shown on AresCentral's game directory.  Some game admin prefer to remain incognito until their game is ready to open, but others like the early publicity.  It's up to you.

{% tip %}
You will not be able to link player handles on your game until you _either_ check the "Public Game" box _or_ run the `game/register` command to register your game manually.  You can register the game even while it's set private. Only players with a character on the game will see details for a private game on AresCentral.
{% endtip %}