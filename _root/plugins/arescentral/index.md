---
title: AresCentral Plugin
description:
layout: page
tags: 
- plugin
---

The AresCentral plugin simply allows your game to communicate with [AresCentral](http://arescentral.aresmush.com) so your players can manage their handles and preferences.


# Features

The game will automatically register itself with AresCentral the first time it starts up, using the game info you specified during installation.  You can update this info at any time using the Web Portal's "Game Setup" screen.

Each game is assigned a unique API Key, which is like a password used to secure communications between the game and AresCentral.

# Configuration

You should never need to modify the AresCentral configuration.  But just in case, here are the options.

## Cron

Cron job for when the game will contact AresCentral to report itself as being 'up' and sync up any game info changes.  By default it does this daily during off-hours.  See [Configuring Cron Jobs](/tutorials/configuring-cron) for more information.

## AresCentral URL

This is the URL for contacting AresCentral.