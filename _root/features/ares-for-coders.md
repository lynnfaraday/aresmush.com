---
title: Ares for Coders
description:
layout: page
tags: 
- features
---

AresMUSH leaves behind the softcode legacy of Penn and Tiny and provides a radically new coding experience. 

## Ruby

All Ares code uses a mainstream high-level language: Ruby.  Ruby is a lot easier to learn and decipher than traditional MUSH softcode. There are a lot more Ruby programmers than softcode programmers, as well as books and references on the subject.  You can get an interactive 15-minute intro to Ruby at [tryruby.org](http://tryruby.org/levels/1/challenges/0).

## Plugins

Every major system is implemented as a [Plugin](/plugins).  Here are just a few of the plugins that come with every Ares install:

* Posing and Pages
* Rooms and Movement
* Who / Where
* Bulletin Boards
* Channels
* FS3 Skills, Chargen and Combat
* and more

The real power of plugins is that you can add, modify or replace any plugin. For example: A war MUSH might swap out the movement plugin for one that restricts movement based on action points during combat. A fantasy MUSH might swap out the description system with one that limits character descriptions based on what clothing items they had purchased. These changes replace the standard plugins, so you don’t end up with a hardcoded “who” and a softcoded “+who” on top of it.

## Development Environment

Using standard off-the-shelf tools, you can set up a local development environment to test changes without impacting your game.  A robust suite of unit tests helps you to deploy your changes with confidence.
