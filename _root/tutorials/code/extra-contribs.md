---
title: Contributing Extras
description:
layout: page
tags: 
- code
- plugins
- extras
---

The [Ares Extras repository](https://github.com/AresMUSH/ares-extras) in GitHub contains various things that are not part of the main Ares release.  This article tells you how to contribute your own extras.

## Submitting Extras

Coders are welcome to fork the "ares-extras" repository and submit GitHub Pull Requests for any contributions.  Some guidelines for the code itself:

* Include a README.md file with an overview of the extra and what configuration options are available.
* [Localize](/tutorials/code/localization) game commands and web responses (not necessary for web portal screens).
* Make your code clean and readable.  Basically, if noboydy can make heads or tails of your code, it won't make the cut.

If you have any questions, just [ask for help](/feedback).

### Submitting Plugins

Many extras will be entire plugins.  In order to be compatible with the automated `addplugin` script, the plugin must follow a particular folder structure.

> <i class="fa fa-exclamation-triangle"></i> **Note:** The `addplugin` script just copies the plugin's files into place.  If your plugin requires changes to _other plugins_ (for example, adding steps to the Chargen config or Chargen web portal screen), you should include instructions for using them in your README.

* A `plugin` folder containing files organized into folders matching the [Plugin Folder Conventions](/tutorials/code/plugins) (help, locales, etc.)
* A `webportal` folder containing files organized into the same folders as the web portal's `app` folder (templates, components, etc.)
* A `game` folder containing files organized into folders matching the aresmush `game` folder (config, text, etc.)
* The installer ignores any other folders, so you can use them for examples, documentation, or whatever you want.

For example:

{{#pretty-image}}/assets/media/code/extras-dir.png{{/pretty-image}}

> <i class="fa fa-exclamation-triangle"></i> **Note:** All folders are optional, so just omit any that don't apply to your plugin.
