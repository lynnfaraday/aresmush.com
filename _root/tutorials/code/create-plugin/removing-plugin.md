---
title: Removing the Plugin
description:
layout: create-plugin
prevstep: putting-it-together
nextstep: next-steps
tags: 
- code
- plugins
- database
---

Assuming you don't want to keep the traits plugin we just created, here's how you remove it.

## Remove the Database Field

First, we need to wipe out the database field.  Change the database model to make the `traits` field into a regular string instead of a hash.   Edit `traits_char.rb` as shown:

    module AresMUSH
      class Character
        attribute :traits
      end
    end

Reload the traits plugin using `load traits`.  

Now edit the tinker command (in the Web Portal, go to Admin -> Tinker) to execute a one-off code snippet that will wipe out everyone's traits:

    def handle
      Character.all.each { |c| c.update(traits: nil)}
    end

Run that tinker command.

Now everyone's traits are nil.  If you want to know more about why this is important, you can see the advanced tutorial [Removing a Database Field](/tutorials/code/remove-field).

## Unloading the Plugin

Use the `unload traits` command to unload the plugin.  This doesn't change anything on disk, but removes the commands and help files from the game engine.

## Remove the Folder

To keep the traits plugin from being automatically re-loaded when the game starts, you'll need to delete the `aresmush/plugin/traits` folder.


