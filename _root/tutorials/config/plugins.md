---
toc: ~config~ Configuring the Game
title: Enabling and Disabling Plugins
---

# Enabling and Disabling Plugins

The Ares plugin system allows you to easily plug IN new code modules.  Taking them OUT, however, is trickier because many plugins rely on each other.

A few plugins, however, are designed to be optional.  These can be enabled and disabled in the admin web portal.

> Note: Even if a plugin is not listed as optional, it's still possible to remove or replace it.  It'll just require some [code surgery](/tutorials/code/plugins) rather than a mouse click.  Do not attempt to remove a plugin simply by deleting its code folder.  This generally does not work.

To enable or disable optional plugins:

1. Go to the Web Portal's Admin screen.  
2. Select 'Enable Plugins'.
3. Check or uncheck plugins to enable/disable them.

## What Does Disabling a Plugin Do?

Disabling a plugin will: 

* Make all of its commands give a 'huh?' message when someone tries to use them.
* Hide its help files.
* Disable its event handling (so events like cron triggers and characters connecting will not do anything).

## What **Doesn't** Disabling a Plugin Do?

Disabling a plugin does **NOT**:

* Remove its code.  Everything is still loaded.
* Remove fields from the database.  All the data is still stored.
* Remove its web pages.  You can still access them if you manually type in the address.

In other words, the plugin is still there - it's just hidden from casual inspection.