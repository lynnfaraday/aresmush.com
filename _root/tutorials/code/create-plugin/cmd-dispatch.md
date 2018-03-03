---
title: Dispatching
description:
layout: create-plugin
prevstep: locale-file
nextstep: putting-it-together
tags: 
- code
- plugins
- dispatcher
---

We've talked a lot about how commands get handled, but how do you get from the player typing "traits" in their MU client to the `TraitsCmd` class' `handle` method?  The answer is the [Dispatcher](/tutorials/code/dispatcher).  

The Dispatcher does a lot of things, but for our purposes the important thing is that it calls the `get_cmd_handler` method any time it gets a command.  Each plugin needs to implement that method and return either `nil` - if they don't want the command - or an appropriate command handler if they do.

If the plugin returns a command handler, then the Dispatcher will execute the `parse_args`, error checkers and `handle` methods as we've previously discussed.

## Try It

Remember that plugin module file we created [near the beginning](/tutorials/code/create-plugin/plugin-module) of the tutorial?  We're going to add a dispatch handler to it now.  Add the following to `aresmush/plugins/traits/traits.rb` after the shortcuts method:

    def self.get_cmd_handler(client, cmd, enactor)
      case cmd.root
      when "traits"
        return TraitsCmd
      when "trait"
        case cmd.switch
        when "set"
          return SetTraitCmd
        end
      end
      return nil
    end

This dispatcher will return the `TraitsCmd` handler for the "traits" command, and the `SetTraitCmd` handler for "trait/set".  Otherwise it will return `nil` and the command will be ignored and other plugins can handle it.

