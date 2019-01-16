---
title: Create Another Command Handler
description:
layout: tutorial
prevstep: cmd-handler
nextstep: removing-cmd
tutorialIndex: tutorials/code/add-cmd
addCmdTutorial: true
tutorialName: Adding a Command
tags: 
- code
- plugins
- commands
---

Our goals system has two commands.  Now we're going to tackle the second one:

    `goals <character>` - Views goals.

## Create the View Goals Command

Create a file named `goals_cmd.rb` in `aresmush/plugins/custom`.  Give it the following contents:

    module AresMUSH
      module Custom
        class GoalsCmd
          include CommandHandler
          
          attr_accessor :name
    
          def parse_args
            self.name = cmd.args ? titlecase_arg(cmd.args) : enactor_name
          end
          
          def check_can_view
             return nil if self.name == enactor_name
             return nil if enactor.has_permission?("view_bgs")
             return "You're not allowed to view other peoples' goals."
          end    
          
          def handle
            ClassTargetFinder.with_a_character(self.name, client, enactor) do |model|
              template = BorderedDisplayTemplate.new model.goals, "#{model.name}'s Goals"
              client.emit template.render
            end
          end
        end
      end
    end

> <i class="fa fa-info-circle"></i> **Tip:** It's best practice to store separate commands in separate files for organization and readability.

Then, like before, we need to wire up the command handler.

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

In the game, type `load custom` to reload the custom plugin.

Type `goals/set Some goals.` to set some goals on yourself.

Type `goals` to view your own goals.

With another non-admin character, use `goals/set My goals.` to set some goals.  

Use `goals <non admin char>` from your admin character to see the other person's goals.
  
Use `goals <admin char>` from your non-admin character, and you should be told you don't have permission to do so.

## About the View Goals Command Handler

The syntax is `goals <name>` so we have a single argument for the name.  This is stored in the `name` class attribute.  If they didn't specify a name, we'll just assume they wanted to look at their own goals and use their own name.
  
For this command, we're assuming we want to restrict it so only staff can view other peoples' goals.  We didn't have to do this - we could just make goals public - but for the sake of this example we'll restrict the command.

This is done by adding a an error check method.  Error check methods start with `check_` and either return nil (if everything's okay) or an error message (if there's a problem).  Here we're going to:

* Return nil (A-OK) if they're looking at their own goals.
* Return nil (A-OK) if they've got the 'view_bgs' permission.  This uses the standard `has_permission?` method of the character model.
* Return an error otherwise.

In the handle method, we use the `ClassTargetFinder.with_a_character` [Database Finder Helper](/tutorials/code/database) to search for the character by name.  This helper will only execute the code in-between the "do" and "end" if the character is found.  If the name is ambiguous or doesn't exist, the helper will notify the player automatically.

Finally, the handle method uses simple bordered template to show the goals with a title.

## About the Command Dispatcher

Our dispatcher has gotten a little more complicated as well.  Now it's handling two commands - `SetGoalsCmd` for goals/set and `GoalsCmd` for goals or goals/anythingelse.