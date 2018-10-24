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

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Submitting Extras

There are two ways to make a submission.

1. Send the files [directly](/feedback).
2. Fork the [Ares Extras repository](https://github.com/AresMUSH/ares-extras) and submit a GitHub Pull Request.

Some guidelines for the code itself:

* Include a README.md file with an overview of the extra and what configuration options are available.
* Make your code clean and readable.  Basically, if noboydy can make heads or tails of your code, it won't make the cut.

> All extras must be submitted under the AresMUSH [code license](/license).

If you have any questions, just [ask for help](/feedback).

### Submitting Plugins

Many extras will be entire plugins.  In order to be compatible with the automated plugin install, the plugin must follow a particular folder structure.

> <i class="fa fa-exclamation-triangle"></i> **Note:** The automated install just copies the plugin's files into place.  If your plugin requires changes to _other plugins_ (for example, adding steps to the Chargen config or Chargen web portal screen), you should include instructions for adding that in your README.

The folder structure for a plugin includes:

* A `plugin` folder containing files organized into sub-folders matching the [Plugin Folder Conventions](/tutorials/code/plugins) (help, locales, etc.)
* A `webportal` folder containing files organized into sub-folders matching the web portal's `app` folder (templates, components, etc.)
* A `game` folder containing files organized into sub-folders matching the aresmush `game` folder (config, text, etc.)
* The installer ignores any other folders, so you can use them for examples, documentation, or whatever you want.

For example:

{{#pretty-image}}/assets/media/code/extras-dir.png{{/pretty-image}}

> <i class="fa fa-exclamation-triangle"></i> **Note:** All folders are optional, so just omit any that don't apply to your plugin.

## Submitting Patches

Coders may also submit patches to the main Ares codebase for bugfixes and/or new features.  However, be advised that Faraday is pretty picky about what code goes into the main repository.  Most new features are probably better off as extras.