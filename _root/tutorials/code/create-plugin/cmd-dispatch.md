---
title: Dispatching
description:
layout: tutorial
tutorialName: Creaing a Plugin
tutorialIndex: tutorials/code/create-plugin
prevstep: locale-file
nextstep: next-steps
tags: 
- code
- plugins
- dispatcher
---

We need to have a dispatch method to map our commands to our command handlers.  This lives inside the plugin definition file: `aresmush/plugins/cortex/cortex.rb`.

The `get_cmd_handler` method performs the command dispatching:
 
    def self.get_cmd_handler(client, cmd, enactor)
      case cmd.root
      when "attribute"
        if (cmd.switch_is?("set"))
          return AttributeSetCmd
        else
          return AttributesCmd
        end
      when "skill"
        if (cmd.switch_is?("set"))
          return SkillSetCmd
        else
          return SkillsCmd
        end
      ... etc
      end
      return nil
    end