---
title: Tinkering With Code
description:
layout: page
tags: 
- code
- tinker
---

Ares does not have the ability to execute softcode directly from a MU client.  You can't just whip up a `think iter(switch(...))` off the cuff in your MUSH window.   However, there are times when you just need to do a quick thing - find all characters over 30 years old, or change a database field that doesn't have an associated admin command.  In Ares, you can do these one-off code tasks with the `tinker` command.

> <i class="fa fa-info-circle"></i> **Tip:** Not all admins can tinker - only characters with the `coder` role.  This is a security feature, because giving someone access to the code essentially gives them the keys to the kingdom.  They could do literally anything with the database.

## How to Tinker

Tinkering involves three steps:

1. Log into the Web Portal with a coder character and select Admin -> Tinker.  
2. Edit the code to do what you want and save it.
3. Type `tinker` in-game to run the code.

> <i class="fa fa-info-circle"></i> **Tip:** Coders who prefer to edit code in the server shell can edit `aresmush/plugins/tinker/commands/tinker_cmd.rb` then reload the code using `load tinker` in-game.

## Tinkering Examples

Here is what the default tinker command looks like:

    module AresMUSH
      module Tinker
        class TinkerCmd
          include CommandHandler
            
          def check_can_tinker
            return t('dispatcher.not_allowed') if !enactor.is_coder?
            return nil
          end
      
          def handle
            client.emit_success "Done!"
          end
        end
      end
    end


Let's say you wanted to write a quick code snippet to find all the characters who are 30 years or older.  All you need to do is modify the `handle` method to find those characters and emit their names to you.  

> <i class="fa fa-exclamation-triangle"></i> **Note:** This example only shows the handle method, but you still need all the rest of the code in the file too.

For example:

          def handle
            client.emit Character.all.select { |c| c.age >= 30 }.map { |c| "#{c.name} - #{c.age}" }
            client.emit_success "Done!"
          end

> <i class="fa fa-info-circle"></i> **Tip:** When doing a database query, make sure to do the 'map' at the end so you don't spam yourself with full database objects when all you really want is their name (or in this case, name + age).

You can also use the tinker command to update things in the database.  For example, if you wanted to change Bob's hair color (and didn't want to use the demographic/set command because that would be too easy):

          def handle
            char = Character.find_one_by_name("Bob")
            char.update_demographic("hair", "Gray" )
            client.emit_success "Done!"
          end

You can even combine the two - a query and an update - to act on a list of characters.  Say you changed a faction's name and wanted to update everyone with the old faction name to the new one:

          def handle
            chars = Character.all.select { |c| c.group("Faction") == "Old Faction" }
            chars.each do |c|
                Demographics.set_group(c, "Faction", "New Faction")
            end
            client.emit_success "Done!"
          end


## Multiple Tinkerers

Tinkering is set up with the assumption that only one person will be tinkering at a time, because frankly most games only have one coder.   In the remarkable event that you have multiple coders wanting to tinker at the same time, the recommended solution is to have the tinker command run different code based on who's triggering it, as shown below.

> <i class="fa fa-exclamation-triangle"></i> **Note:** You still need to take turns _editing_ the file, otherwise you'll end up clobbering each others' code changes.  But once the file is edited, you can each independently run your own tinker snippet.

    module AresMUSH
      module Tinker
        class TinkerCmd
          include CommandHandler
            
          def check_can_tinker
            return t('dispatcher.not_allowed') if !enactor.is_coder?
            return nil
          end
      
          def handle
            if (enactor_name == "Faraday")
               faraday_tinker
            elseif (enactor_name == "Chaos")
               chaos_tinker
            end
            client.emit_success "Done!"
          end
          
          def faraday_tinker
             # Whatever Fara's tinkering with goes here.
          end
          
          def chaos_tinker
             # Whatever Chaos is tinkering with goes here.
          end
        end
      end
    end

If taking turns editing the tinker file is too much trouble, have your multitude of coders just create their own individual tinker commands (tinker/faraday, tinker/chaos, etc.) in files they can edit separately.