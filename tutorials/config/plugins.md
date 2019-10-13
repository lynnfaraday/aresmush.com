---
title: Enabling and Disabling Plugins
layout: page
tags:
- config
---

A few Ares plugins are designed to be optional so you can easily disable them if you don't need them for your game.

To enable or disable optional plugins:

1. Select Admin -> Setup. 
2. Select "Enable or Disable Plugins".
2. Check or uncheck plugins to enable/disable them.

{% note %} 
Even if a plugin is not listed as optional, it's still possible to remove or replace it.  It'll just require some [code surgery](/tutorials/code/plugins.html) rather than a mouse click.  Do not attempt to remove a plugin simply by deleting its code folder.  That will cause code errors.
{% endnote %}

{% include pretty_image.html file='web-portal/plugins.png' %}


{% include toc.html %}


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
* Remove its web pages.  You can still access them if you manually type in the address.  (But they won't do anything useful.)
* Remove it from the web portal menu.  You must [edit your menu configuration](/tutorials/config/website.html#changing-the-navbar) yourself.

In other words, the plugin is still there - it's just hidden and can't really do anything.

## Why is it Better to Disable?

You might wonder why you'd want to disable a plugin instead of just excising its code completely.  Why keep around code you're not using?

The main reason is that *other* Ares code is designed to look for these plugins.  For example, the profile code might say "If the ranks system is enabled, show their rank."  If you remove the ranks plugin completely, that code will break.

Also, removing existing code will cause you some version control headaches if you later want to upgrade to a new Ares version.

## Advanced Config

To configure advanced plugin settings:

1. Select Admin -> Setup.
2. Edit `plugins.yml`

### config_help_links

When you're editing a config file, there's a link at the top to the help for those configuration settings.  Usually this links to the default arescentral config tutorial.  For your own custom-made plugins, you might want to point the help somewhere else - perhaps a wiki page or a README file on your github repo.  Just set this up to be a hash with the name of the plugin and the help link.  For example:

    ffg: https://github.com/AresMUSH/ares-extras/tree/master/plugins/ffg
    fate: https://github.com/AresMUSH/ares-extras/tree/master/plugins/fate
    cortex: https://github.com/AresMUSH/ares-extras/tree/master/plugins/cortex
    prefs: https://github.com/AresMUSH/ares-extras/tree/master/plugins/prefs
    traits: https://github.com/AresMUSH/ares-extras/tree/master/plugins/traits