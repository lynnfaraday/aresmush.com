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
* Theme styles or configuration settings (e.g. a medieval FS3 setup).
* Basically anything else you think might be useful to the Ares community.

{% include toc.html %}

## Submitting Extras

There are two ways to make a submission.

1. Send the files [directly](/feedback.html).
2. Fork the [Ares Extras repository](https://github.com/AresMUSH/ares-extras) and submit a GitHub Pull Request.

Some guidelines for the code itself:

* Include a README.md file with an overview of the extra and what configuration options are available.
* Make your code clean and readable.  Basically, if nobody can make heads or tails of your code, it won't make the cut.

> All extras must be submitted under the AresMUSH [code license](/license.html).

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
* The installer ignores any other folders, so you can use them for examples, documentation, or whatever you want.

For example:

{% include pretty_image.html file='code/extras-dir.png' %}

{% note %} 
All folders are optional, so just omit any that don't apply to your plugin.
{% endnote %}

## Submitting Patches

Coders may also submit patches to the main Ares codebase for bugfixes and/or new features.  However, be advised that Faraday is pretty picky about what code goes into the main repository.  Most new features are probably better off as extras.