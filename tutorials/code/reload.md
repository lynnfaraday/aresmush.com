---
title: Reloading Code
description: 
layout: page
tags:
- code
- plugins
- reload
---

Changes to the Ares game engine require a [restart](/tutorials/manage/shutdown.html), but the plugins can be reloaded while the game is running.  

{% include toc.html %}

## How to Reload

If you've only changed **plugins**, you can reload each plugin while the game is still running by using the `load <plugin name>` command in-game. 

If all you've changed are **configuration files**, the `load config` command will read them.   The config is automatically reloaded when using the Web Portal config editor.

If you've changed the **Web Portal**, you'll need to re-deploy it through the Admin -> Manage menu on the Web Portal or the `website/deploy` command in-game. 

If you've changed the **engine**, you'll need to actually [shutdown and restart](/tutorials/manage/shutdown.html) the game before the changes will take effect.   You probably shouldn't be changing the engine, though.

## How Code is Loaded

The load command lets you reload the code for a specific plugin.

    > load fs3skills
    %% Plugin 'fs3skills' loading.  Please wait...
    %% Plugin 'fs3skills' (including config, help and locale) reloaded.

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

The Manage plugin is the one that provides all the code necessary to load other code.  Be extra cautious when making code changes to the Manage plugin.  If anything goes haywire when loading it, you'll find yourself without a Manage plugin ... which means you won't be able to load any other code!   The only way to recover from that is to [shutdown](/tutorials/manage/shutdown.html) and restart the game.
