---
title: Reloading Code
description:
layout: page
tags: 
- code
- plugins
- reload
---

Changes to the Ares game engine require a [restart](/tutorials/manage/shutdown), but the plugins can be reloaded while the game is running.  The load command lets you reload the code for a specific plugin.

    > load fs3skills
    %% Plugin 'fs3skills' loading.  Please wait...
    %% Plugin 'fs3skills' (including config, help and locale) reloaded.


## How Code is Loaded

To understand the reload feature (and its limitations), it helps to understand a bit about how Ruby loads code.

Take the following example of tinker_cmd.rb:

    module AresMUSH
        module Tinker
            class TinkerCmd
            # ... other stuff 
            
            def handle
              client.emit_success "Done!"
            end
        end
    end

When Ruby loads this file, it creates a module `AresMUSH`, then a module `AresMUSH::Tinker`, then a class `TinkerCmd`, then it adds the `handle` method to the command class.  The handle method contains a single emit.

Let's say we change the command's behavior:

    module AresMUSH
        module Tinker
            class TinkerCmd
            # ... other stuff 
            
            def handle
              client.emit_success "Starting!"
              client.emit_success "Definitely Done!"
            end
        end
    end

When we reload the tinker plugin, Ares first _unloads_ the old one.  Anything in the `AresMUSH::Tinker` module is deleted from memory so we can start fresh.  When Ruby encounters the `module Tinker` line, it'll create a new `AresMUSH::Tinker` module containing the new code.   The next time someone uses the tinker command, they'll get the new behavior.

## Loading Pitfalls

The reload functionality works pretty well overall, but there are a few situations that can cause issues.

### Database Models

Database models don't belong to a plugin module - they're always part of the root `AresMUSH` module.  (There are reasons for this, which we won't go into here.)

    module AresMUSH
      class GameMap < Ohm::Model
        # ... other stuff
      end
    end

Since the database models aren't part of the plugin module, they won't be *unloaded* before being reloaded.  Because of this, you can **add** things to database models through a reload, but you can't remove things.

### Module Mix-Ups

Sometimes you'll accidentally put code in the wrong module.  For example:

    module AresMUSH
        module Chargen
            class TinkerCmd
            # ...

You wanted `TinkerCmd` to be in the Tinker module, but instead it ended up in the Chargen module. 

Reloading the Tinker module (after fixing the code) will add the `AresMUSH::Tinker::TinkerCmd` class correctly.  But the one in Chargen is still there.

Normally this doesn't do any harm.  Having an extra, unused command laying around the Chargen module doesn't really matter.  But if it were a database model or an interface method, it may cause some unexpected behavior.  Just reload the Chargen plugin to fix it.

### Killing the Manager

The Manage plugin is the one that provides all the code necessary to load other code.  Be extra cautious when making code changes to the Manage plugin.  If anything goes haywire when loading it, you'll find yourself without a Manage plugin ... which means you won't be able to load any other code!   The only way to recover from that is to [shutdown](/tutorials/manage/shutdown) and restart the game.

## Further Reading

In case you're interested in some more nitty-gritty examples of how code reloading can go awry, check out this [great article](http://blog.rkh.im/code-reloading) by Konstantin Haase.