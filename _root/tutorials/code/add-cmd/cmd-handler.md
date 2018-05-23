---
title: Create a Command Handler
description:
layout: add-command
prevstep: db-field
nextstep: cmd-dispatch
tags: 
- code
- plugins
- commands
---

To create a command, we need a [Command Handler](/tutorials/code/commands) class to do the command processing.  In the Quickstart tutorial, we used the tinker command handler.  Now we're going to create one of our own.

## Try It

Create a file named `set_goals_cmd.rb` in `aresmush/plugins/custom`.

> <i class="fa fa-info-circle"></i> **Tip:** For bigger plugins, files will usually be organized into sub-folders.  Commands would go into the 'commands' sub-folder.  The custom plugin is small enough that's not necessary.

### Basic Scaffolding

Edit the file and add the basic scaffolding - a `GoalsCmd` in the `AresMUSH::Custom` module, that includes the standard command handling functionality.  All commands will start off like this.

    module AresMUSH
      module Custom
        class SetGoalsCmd
          include CommandHandler
          
          # Remaining command handling will go here.
        end
      end
    end

### Processing

Although in the Quickstart tutorial we just put everything into a single `handle` method, for more complex commands there's a better way to do this.  The [`CommandHandler` utility](/tutorials/code/commands) provides a framework for handling commands that involves multiple methods.  Splitting up the code makes it more readable and lets us take advantage of a few common utilities.  Using the CommandHandler framework, we'll end up with three methods:

* `parse_args` to parse cmd.args into the individual arguments needed for this command.
* Error check methods, including `required_args` if we want a simple error check for missing arguments.
* `handle` to do th actual command handling.

The syntax for this command is `goals/set <goals>`.  We're going to grab the goals from the command arguments, check to make sure they're not empty, and then update a database field on the character object.

Our command handler should look like this:

    module AresMUSH
      module Custom
        class SetGoalsCmd
          include CommandHandler
          
          # You'll usually see attribute accessors defined for the different command arguments.
          # This is accessible from all the methods in the command handler class using self.goals.
          
          attr_accessor :goals
    
          def parse_args
            self.goals = trim_arg(cmd.args)
          end
          
          # Note that this returns an array, since you can require multiple arguments if needed.
          # Here we have only one, but it still needs to be an array.  If you want to allow
          # them to clear their goals, just remove this error check.
          
          def required_args
             [ self.goals ]
          end
          
          def handle
          
            # Remember from the Quickstart tutorial that you always need to use the update
            # method when updating database fields. You can't just say enactor.goals = self.goals
            
            enactor.update(goals: self.goals)
            client.emit_success "Goals set!"
          end          
        end
      end
    end

> <i class="fa fa-info-circle"></i> **Tip:**  For custom game code, there's generally no need to do [Localization](/tutorials/code/localization).  You can just use raw strings like "Goals set!"  Localization is only needed if you plan to share your code with others, who may be using a different language for their game.


## Try It Again

We also need another command to view the goals.  We'll create another file in the same folder named `goals_cmd.rb`.

> <i class="fa fa-info-circle"></i> **Tip:** It's best practice to store separate commands in separate files for organization and readability.

This command gets a tiny bit trickier because there are two versions:  `goals` for regular players to view their own goals, and `goals <name>` for admin to view someone else's goals.  Our `parse_args` method needs to be smart enough to handle both.

The `check_can_view` method does error checking to make sure you're allowed to view the goals.  Like all [Error Checkers](/tutorials/code/error-checkers), it returns nil if you're allowed, or an error message if you're not.  We could have created our own [custom permission](/tutorials/manage/roles) for this, but in this case the existing "view_bgs" permission seemed appropriate.

Finally the `handle` method makes use of the `with_a_character` helper to translate the name into a database character model.  The helper will handle any error messages automatically if the character can't be found.

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
