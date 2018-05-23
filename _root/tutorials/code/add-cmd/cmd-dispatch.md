---
title: Dispatching
description:
layout: add-command
prevstep: cmd-handler
nextstep: putting-it-together
tags: 
- code
- plugins
- dispatcher
---

We've talked a lot about how commands get handled, but how do you get from the player typing "goals" in their MU client to the `GoalsCmd` class?  The answer is the [Dispatcher](/tutorials/code/dispatcher).  

One of the Dispatcher's jobs is calling each plugin's `get_cmd_handler` method any time it gets a command.  A plugin can return `nil` - if they don't want the command - or an appropriate command handler if they do.

If the plugin returns a command handler, then the Dispatcher will execute the `parse_args`, error checkers and `handle` methods as we've previously discussed.

## Try It

The plugin definition file always lives in the top level of the plugin folder, and is named the same as the plugin.  In our case, the file we need is `aresmush/plugins/custom/custom.rb`.

In that file you'll see a `get_cmd_handler` method.  It returns nil by default, but we're going to add our new commands to it.
 
    def self.get_cmd_handler(client, cmd, enactor)
      case cmd.root
      when "goals"
        case cmd.switch
        when "set"
          return SetGoalsCmd
        else
          return GoalsCmd
        end
      end
      return nil
    end

> <i class="fa fa-info-circle"></i> **Tip:** Since this plugin only handles two commands at the moment, an if/else check would have been a little simpler.  But case/when is better when you have a whole bunch of commands, and is the standard in most plugins.

This dispatcher will return the `GoalsCmd` handler for the "goals" command, and the `SetGoalsCmd` handler for "goals/set".  Otherwise it will return `nil` and the command will be ignored so other plugins can handle it.

