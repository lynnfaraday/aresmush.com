---
title: Create a Config File
description:
layout: create-plugin
prevstep: plugin-module
nextstep: help-file
tags: 
- code
- plugins
- config
---

In the previous step, we set up the plugin to read its shortcuts from the game configuration: `Global.read_config("traits", "shortcuts")`.

Now we need to set up that configuration.  All configuration files live in the `aresmush/game/config` folder.  The name doesn't matter, but traditionally they're named the same as the plugin.

Configuration files use the [YAML](/tutorials/code/yaml) format, with a series of key/value pairs.  Each plugin has its own top-level configuration section.

## Try It

Create a config file named `traits.yml` in `aresmush/game/config`.  Give it the following contents:

    traits:
        shortcuts:
            "trait/add": "trait/set"
            "trait/update": "trait/set"

Our command is going to be named `trait/set` but here we've created shortcuts so that you can type 'trait/add' or 'trait/update' in addition to 'trait/set'.