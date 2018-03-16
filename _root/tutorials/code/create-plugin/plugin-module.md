---
title: Create a Plugin Module
description:
layout: create-plugin
prevstep: plugin-folder
nextstep: config-file
tags: 
- code
- plugins
---

All plugins reside within their own Ruby Module, within the main AresMUSH module.  There are special conventions around module names, as explained in [Plugins](/tutorials/code/plugins), but generally it should be a capitalized name of your plugin folder.

The module must include two special methods - one to help the game find the plugin files, and another to tell it the plugin's command shortcuts.

## Try It

Create a file `traits.rb` in the `aresmush/plugins/traits` directory with the following code:

    module AresMUSH
      module Traits
        def self.plugin_dir
          File.dirname(__FILE__)
        end
        
       def self.shortcuts
          Global.read_config("traits", "shortcuts")
        end
      end
    end

We'll add more code to this module later, but this will do for now.




