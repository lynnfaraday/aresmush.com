---
title: Recovering from Config Errors
description: 
layout: page
tags:
- manage
- config
- yaml
---

Sometimes you'll have a troublesome config error that you can't figure out even with the [troubleshooting YAML tips](/tutorials/code/troubleshooting-yaml.html).  When that happens, you may want to roll back a specific config file to its default values.

{% note %} 
This will roll back **all settings** in a single configuration file, so it's a good idea to copy/paste the original config from the "Advanced Editor" in the web portal or the `config <section>` command in-game.  Other settings in other config files will not be affected.
{% endnote %}

## Recovering from the Web Portal

If your web portal is functioning, you can edit the config file using Admin->Setup and click "Restore Default Values".

## Recovering from the Game

If your web portal is not working (usually because your top navbar settings were messed up), you can restore a config file in-game using `config/restore <file>`.
  
## Recovering from the Shell

If none of that works, you can also recover a default file from the shell.  In your aresmush directory, run:

    cp install/game.distr/config/SOMEFILE.yml game/config

Just specify the name of the file you wish to restore (e.g. demographics.yml).

