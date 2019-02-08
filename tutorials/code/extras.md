---
title: Extras
description:
layout: page
tags: 
- code
- plugins
- extras
---

"Extras" are various things that are not part of the main Ares release.  There are tinker snippets (like a sample import from Wikidot), community-authored plugins, and other tidbits.

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Finding Extras

You can find extras in the [Ares Extras repository](https://github.com/AresMUSH/ares-extras) in GitHub.  The main README will direct you to what plugins are available.

Each plugin will contain its own README file with instructions on how you use it.  The details will vary depending on what it does.

## Installing Plugins

If an extra is a complete plugin, there's a script that will automatically install it for you.  

If the game is running, you can install the plugin using an in-game command:

    plugin/install <plugin name>

If the game is shut down, from your server shell, change to the aresmush folder and run:

    bin/addplugin <plugin name>

Once the plugin is installed, you'll need to do `load all` to load the game code and `website/deploy` to update the website.

{% include note.html content="The automated installation just copies the plugin's files into place.  There may be other code or configuration changes required.  See the plugin's README file in the ares-extras repository to see if any extra steps are needed." %}

## Updating Plugins

As long as you haven't modified the plugin's source code, you can upgrade it just by using the `bin/addplugin` script again, as described above.

> <i class="fa fa-exclamation-triangle"></i> **Warning:** Do not attempt to run the upgrade script if you've got custom code modifications (other than configuration files). The upgrade will overwrite your changes.  You'll have to do the upgrade by hand.  GitHub's version compare tools can help you figure out what changed.  Feel free to ask for help.

{% include tip.html content="If a plugin has been installed previously, adding it again will **not** overwrite your configuration files.  You should check the plugin configuration notes to see if any new options are available and add them manually to your configuration." %}

## Contributions

See [Submitting Contributions](/tutorials/code/extra-contribs.html) if you want to contribute your own extras or community plugins.