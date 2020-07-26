---
title: Submitting Contributions
description: 
layout: page
tags:
- code
- plugins
- extras
---

The [Ares Extras repository](https://github.com/AresMUSH/ares-extras) in GitHub contains various things that are not part of the main Ares release.  This article tells you how to contribute your own extras.

Extras may include:

* Complete stand-alone Plugins.
* Snippets of code and/or other files to show somebody how to implement something.
* Theme styles for the web portal.
* Configuration settings (e.g. a medieval FS3 setup).
* Basically anything else you think might be useful to the Ares community.

{% include toc.html %}

## Submitting Extras

There are two ways to make a submission.

1. Send the files [directly](/feedback.html).
2. Fork the [Ares Extras repository](https://github.com/AresMUSH/ares-extras) and submit a GitHub Pull Request.

Some important notes:

* Include a README.md file with an overview of the extra and what configuration options are available. Be sure to give yourself credit in the README.
* All extras must be submitted under the same [code license](/license.html) as Ares itself.
* Make your code clean and readable.  Basically, if nobody can make heads or tails of your code, it won't make the cut.

If you have any questions, just [ask for help](/feedback.html).

### Submitting Plugins

Many extras will be entire plugins.  In order to be compatible with the automated plugin install, the plugin must follow a particular folder structure.

{% note %} 
The automated install just copies the plugin's files into place.  If your plugin requires changes to _other plugins_ (for example, adding steps to the Chargen config or Chargen web portal screen), you should include instructions for adding that in your README.
{% endnote %}

The folder structure for a plugin includes:

* A `plugin` folder containing files organized into sub-folders matching the [Plugin Folder Conventions](/tutorials/code/plugins.html) (help, locales, etc.)
* A `webportal` folder containing files organized into sub-folders matching the web portal's `app` folder (templates, components, etc.)
* A `game` folder containing files organized into sub-folders matching the aresmush `game` folder (config, text, etc.)
* A `README.md` file explaining what the plugin does and how to use it.  You can find a template [here](https://github.com/AresMUSH/ares-extras/blob/master/plugins/plugin_readme_template.md).
* The installer ignores any other folders, so you can use them for examples, documentation, or whatever you want.

For example:

{% include pretty_image.html file='code/extras-dir.png' %}

{% note %} 
All folders are optional, so just omit any that don't apply to your plugin.
{% endnote %}

## Submitting Themes

You can submit a web portal theme.  The folder structure for a theme includes:

* A `styles` folder with `custom_style.scss` and `colors.scss`.
* An optional `images` folder with the [theme images](/tutorials/config/website.html) needed by the portal. You can supply all, any, or none of the images.
* A README file describing your theme.  You can include some screenshots of whatever screens you like, or I'll take some myself.

Here's an example: [Ares Dark Theme](https://github.com/AresMUSH/ares-extras/tree/master/themes/ares-dark).

## Submitting Patches

Coders may also submit patches to the main Ares codebase for bugfixes and/or new features.  However, be advised that Faraday is pretty picky about what code goes into the main repository.  Most new features are probably better off as extras.