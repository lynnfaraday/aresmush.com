---
title: Create a Plugin Folder
description:
layout: create-plugin
prevstep: 
nextstep: plugin-module
tags: 
- code
- plugins
---

Plugins use a convention-based structure.  That means the game engine is going to look for things in certain places and with certain naming conventions.  If you don't have things in the right place, it won't work - even if your code is otherwise correct.

> <i class="fa fa-info-circle"></i> **Tip:** The conventions take a little getting used to at first, but you'll find they save you time in the long run because you won't be constantly writing code to tell the game where to find new files.  It will just find them automatically as long as you put them in the right place.

Your plugin must live in a folder under `aresmush/plugins/<your plugin name>`.  

> **Important Convention:** The folder name must be one word, all lowercase.

## Try It

Create a folder for our traits plugin:  `aresmush/plugins/traits`