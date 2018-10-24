---
title: Finding Code
description:
layout: tutorial
editCodeTutorial: true
tutorialName: Editing Code
tutorialIndex: tutorials/code/edit-code
nextstep: direct-edit
tags: 
- code
---

Before you can actually edit the code, you need to figure out **which** code you want to edit.  To do that, it's helpful to understand a little about how the Ares code is organized.

## AresMUSH Directory

The main AresMUSH game code is organized in a single directory, typically named `aresmush`.  Within that directory are several folders.  Here are the ones you'll most commonly be working with:

* bin - Scripts that you can execute.  For example, `bin/startares` starts the game.
* game - Files specific to your game, like configuration and styles.  Website file uploads live here too.
* plugins - Contains folders for each plugin.

There are some other folders, like engine (for the engine code) and install (for installation utilities), but you shouldn't need to mess with these.  If you find yourself needing to change the engine code, consider [asking first](/feebdack) because there may be a different way to approach your problem.

### Plugin Organization

The plugin folders all follow a standard structure.  The folders should be pretty self-explanatory (commands is where the command files live, help is where the help files live, etc.) with a few exceptions:

* The plugin module definition will always been in the root folder.  For example:  `aresmush/plugins/tinker/tinker.rb`
* Helpers contain shared utilities used across several commands/events within the same plugin.  For example: a lot of description-related commands share a single error check:  `Describe.can_describe?(enactor, model)`.  You'll usually find these in a file in the root directory.  For example:  `aresmush/plugins/describe/helpers.rb`.  
* Public interfaces will be found in the `public` folder.  This includes methods that other plugins rely on, as well as database models.

For more details on plugin directories, see [Plugins](/tutorials/code/plugins) when you're ready.

## Ares-Webportal Directory

The web portal code is organized in a separate directory, typically named `ares-webportal`.  The web portal is not as plug-and-play as the main game server, just due to the nature of web development.  You probably want to hold off on trying to edit web portal code until you're a pretty experienced Ares coder.

## Searching Code

You can easily find a specific variable/function/etc. if your code editor supports a folder search.  Many of the editors listed in [Development Tools](/tutorials/code/dev-tools) will do that.  If you don't have a folder search, you can also search a repository's code in GitHub.