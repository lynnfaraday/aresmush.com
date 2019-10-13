---
title: Extras
description: 
layout: page
tags:
- code
- plugins
- extras
---

"Extras" are various things that are not part of the main Ares release.  There are tinker snippets, community-authored plugins, and other tidbits.

{% include toc.html %}

## Finding Extras

You can find extras in the [Ares Extras repository](https://github.com/AresMUSH/ares-extras) in GitHub.  The main README will direct you to what plugins are available.

Each plugin will contain its own README file with instructions on how you use it.

## Installing Plugins

You can install a plugin directly from the game using `plugin/install <name>`.

{% note %} 
1. Make sure the plugin is compatible with your version of AresMUSH.  Most require the latest version.
2. Many plugins require some additional manual install steps.  Be sure to check the README file in each plugin's folder for detailed information on installation and configuration.
{% endnote %}

## Installing Themes

You can easily install new themes for your web portal by using `theme/install <theme name>`.  To restore to the default theme, use `theme/install default`.

## Updating Plugins

As long as you haven't modified the plugin's source code, you can upgrade it just by using the `plugin/install <name>` script again.  This will replace the code files with the newest ones.  Your configuration will not be affected.  The release notes will tell you if you need to make any additional config or code changes by hand after the upgrade.

> <i class="fa fa-exclamation-triangle"></i> **Warning:** Do not attempt to run the upgrade script if you've got custom code modifications.  You'll have to do the upgrade by hand.  GitHub's version compare tools can help you figure out what changed.  Feel free to ask for help.

## Uninstalling Plugins

Unfortunately due to the way the database code works, uninstalling a plugin is not as straightforward as installing one.  You have to: 

1. [Remove the database fields](/tutorials/code/remove-field.htm) and any associated database objects.
2. Unload the plugin using the in-game command `unload <plugin name>`.
3. Remove the code files.  You may remove the config files too, but you don't have to.

If you're not sure how to do this and need help, [just ask](/feedback.html).

## Contributions

See [Submitting Contributions](/tutorials/code/extra-contribs.html) if you want to contribute your own extras or community plugins.