---
title: Extras
description:
layout: page
tags: 
- code
- plugins
- extras
---

The [Ares Extras repository](https://github.com/AresMUSH/ares-extras) in GitHub contains various things that are not part of the main Ares release.  There are tinker snippets (like a sample import from Wikidot), community-authored plugins, and other tidbits.

## Using Extras

Each extra should contain a README file with instructions on how you use it.  The details will vary depending on what it does.

## Installing Plugins

If an extra is a complete plugin, there's a script that will automatically install it for you.  From your server shell, change to the aresmush folder and run:

    bin/addplugin <plugin name>

Once the plugin is installed, you'll need to do `load all` to load the game code and `website/deploy` to update the website.

> <i class="fa fa-exclamation-triangle"></i> **Note:** The `addplugin` script just copies the plugin's files into place.  There may be other code or configuration changes required.  See the plugin's README file in the ares-extras repository to see if any extra steps are needed.

## Updating Plugins

As long as you haven't modified the plugin's source code, you can upgrade it just by using the `bin/addplugin` script again, as described above.

> <i class="fa fa-exclamation-triangle"></i> **Note:** If a plugin has been installed previously, adding it again will **not** overwrite your configuration files.  You should check the plugin configuration notes to see if any new options are available and add them manually to your configuration.

If you have modified the plugin source, you'll have to handle the upgrade mamnually.  GitHub's compare versions tool may help.

## Contributions

See [Submitting Contributions](/tutorials/code/extra-contribs) if you want to contribute your own extras or community plugins.