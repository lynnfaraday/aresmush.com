---
title: Submitting Contributions
description: 
layout: page
tags:
- code
- plugins
- extras
---

Anyone can make plugins or themes for AresMUSH. As long as you're following the [License](https://aresmush.com/license) requirements, go to town and share what you like.

If you want to take advantage of Ares' automated theme/plugin installers, and have your contributions easily found by others, you can submit your contributions as an "Ares Extra". This guide will tell you how.

{% include toc.html %}

## Ares Extras Repo

The [Ares Extras](https://github.com/AresMUSH/ares-extras) repository in GitHub contains various things that are not part of the main Ares release, such as:

* Complete stand-alone Plugins.
* Theme styles for the web portal.
* Snippets of code and/or other files to show somebody how to implement something.
* Configuration settings (e.g. a medieval FS3 setup).
* Basically anything else you think might be useful to the Ares community.

All extras must fall under the same [license](/license) as the original Ares code.

## Sharing Plugins

If you want to share a plugin you've created, it must have its own repository in GitHub. For example: [Preferences Plugin](https://github.com/AresMUSH/ares-prefs-plugin). If you need help creating one, feel free to [ask for help](/feedback.html).

To have your plugin included in the Ares Extras directory, just [contact us](/feedback.html) with the GitHub url.

### Plugin Repo Structure

In order to be compatible with the automated plugin installer, a plugin must follow a particular folder structure:

* The repo must be named **ares-YOURPLUGINNAME-plugin**.
* A `plugin` folder containing files organized into sub-folders matching the [Plugin Folder Conventions](/tutorials/code/plugins.html) (help, locales, etc.)
* A `webportal` folder containing files organized into sub-folders matching the web portal's `app` folder (templates, components, etc.)
* A `game` folder containing files organized into sub-folders matching the aresmush `game` folder (config, text, etc.)
* A `README.md` file explaining what the plugin does and how to use it.  You can find a template [here](https://github.com/AresMUSH/ares-extras/blob/master/plugins/plugin_readme_template.md).
* The installer ignores any other folders, so you can use them for examples, documentation, or whatever you want.

For example:

{% include pretty_image.html file='code/extras-dir.png' max-width="300px" %}

All folders are optional, so just omit any that don't apply to your plugin.

{% note %} 
The automated install just copies _your_ plugin's files.  It cannot handle changes to _other plugins_ (for example, adding steps to the Chargen config or Chargen web portal screen). Your README should include instructions for doing those sorts of changes manually.
{% endnote %}

### Plugin Migrations

Sometimes your plugin will need a database field initialized, or a default config value set.  There is no way to do this automatically, you will need to include instructions for game runners to do that manually. The easiest way to do this is by including a code snippet that they can copy/paste into the [tinker](/tutorials/code/tinker) command handler. 

For example, if you wanted to initialize a database value at install time, you could tell them to do:

    Character.all.each { |c| c.update(your_db_field: 'default value') }

{% tip %}
This is particularly important for array/hash database fields. Your model class may set a default value (`[]` or `{}`), but that only applies to _new_ characters. For existing characters, these fields will be `nil` unless you take the time to initialize them.
{% endtip %}

You can also provide tinker snippets to run when the code gets upgraded.  The database migrator class has some utilities for reading/writing config files that are particularly useful here.  For instance, if you added a new config option and want to set a default value, you could tell them to run:

    DatabaseMigrator.read_config_file("yourplugin.yml", config)
    config['yourplugin']['someoption'] = 'some value'
    DatabaseMigrator.write_config_file("yourplugin.yml", config)

Make sure all hash values in the configuration use the arrow notation, not the symbol notation: 

    RIGHT: 'someoption' => 'some value'
    WRONG:  someoption: 'some value'

## Sharing Themes

If you want to share a web portal theme you've created, it must have its own repository in GitHub. For example: [Ares Dark Theme](https://github.com/AresMUSH/ares-dark-theme). If you need help creating one, feel free to [ask for help](/feedback.html).

To have your plugin included in the Ares Extras directory, just [contact us](/feedback.html) with the GitHub url.

### Theme Repo Structure

In order to be compatible with the automated theme installer, a theme must follow a particular folder structure:

* The repo must be named **ares-YOURTHEMENAME-theme**.
* A `styles` folder with `custom_style.scss` and `colors.scss`.
* An optional `images` folder with the [theme images](/tutorials/config/website.html) needed by the portal. You can supply all, any, or none of the images.
* A README file describing your theme.  It's nice to include some screenshots as well.

## Submitting Other Extras

If you have something that is neither a plugin nor a theme, [ask us](/feedback.html) how best to submit it.

## Submitting Patches

Coders may also submit patches to the main Ares codebase for bugfixes and/or new features using GitHub pull requests.

{% note %} 
Faraday is very picky about what code goes into the main repository. It's advisable to [ask first](/feedback.html) before embarking on major patches to the core code. Most new plugins are better off as extras.
{% endnote %}
