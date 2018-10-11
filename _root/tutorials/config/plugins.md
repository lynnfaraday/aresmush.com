---
title: Enabling and Disabling Plugins
layout: page
tags:
- config
---

The Ares plugin system allows you to easily plug IN new code modules.  Taking them OUT is trickier because many plugins rely on each other.

A few plugins, however, are designed to be optional.  These can be enabled and disabled in the admin Web Portal.

{{#pretty-image}}/assets/media/code/plugins.png{{/pretty-image}}

> <i class="fa fa-exclamation-triangle"></i> **Note:** Even if a plugin is not listed as optional, it's still possible to remove or replace it.  It'll just require some [code surgery](/tutorials/code/plugins) rather than a mouse click.  Do not attempt to remove a plugin simply by deleting its code folder.  That will most likely cause unexpected code errors.

To enable or disable optional plugins:

1. Select Admin -> Setup. 
2. Select Enable or Disable Plugins.
2. Check or uncheck plugins to enable/disable them.

## What Does Disabling a Plugin Do?

Disabling a plugin will: 

* Make all of its commands give a 'huh?' message when someone tries to use them.
* Hide its help files.
* Hide its web pages from menus.
* Disable its event handling (so events like cron triggers and characters connecting will not do anything).

## What **Doesn't** Disabling a Plugin Do?

Disabling a plugin does **NOT**:

* Remove its code.  Everything is still loaded.
* Remove fields from the database.  All the data is still stored.
* Remove its web pages.  You can still access them if you manually type in the address.

In other words, the plugin is still there - it's just hidden from casual inspection.

## Why is it Better to Disable?

You might wonder why you'd want to disable a plugin instead of just excising its code completely.  Why keep around code you're not using?

The main reason is that *other* Ares code is designed to look for these plugins.  For example, the profile code might say "If the ranks system is enabled, show their rank."  If you remove the ranks plugin completely, that code will break.

Also, removing existing code will cause you some version control headaches if you later want to upgrade to a new Ares version.