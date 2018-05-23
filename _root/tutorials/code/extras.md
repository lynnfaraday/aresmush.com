---
title: Extras and Contributions
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

Once the plugin is installed, you'll need to do `load all to load the game code and `website/deploy` to update the website.

> <i class="fa fa-exclamation-triangle"></i> **Note:** The `addplugin` script just copies the plugin's files into place.  There may be other code or configuration changes required.  See the plugin's README file in the ares-extras repository to see if any extra steps are needed.

## Submitting Extras

See [Submitting Extras](/tutorials/code/extra-contribs) if you want to contribute your own extras or community plugins.