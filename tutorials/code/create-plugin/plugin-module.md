---
title: Create a Plugin Module
description: 
layout: tutorial
createPluginTutorial: true
tutorialName: Creating a Plugin
tutorialIndex: tutorials/code/create-plugin
prevstep: plugin-folder
nextstep: config-file
tags:
- code
- plugins
---

All plugins reside within their own Ruby Module, within the main AresMUSH module.  There are special conventions around module names, as explained in [Plugins](/tutorials/code/plugins.html), but generally it should be a capitalized name of your plugin folder.

The module must include two special methods - one to help the game find the plugin files, and another to tell it the plugin's command shortcuts.

The create plugin script creates a file named `aresmush/plugins/cortex/cortex.rb`.  It will have a module like the following with a few methods inside it, including these:

    module AresMUSH
      module Cortex
        def self.plugin_dir
          File.dirname(__FILE__)
        end
        
       def self.shortcuts
          Global.read_config("cortex", "shortcuts")
        end
      end
    end

We'll add more code to this module later.  For now it's enough just to know it exists.




