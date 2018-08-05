---
title: Create a Command Handler
description:
layout: tutorial
prevstep: db-field
nextstep: cmd-dispatch
tutorialIndex: tutorials/code/add-cmd
addCmdTutorial: true
tutorialName: Adding a Command
tags: 
- code
- plugins
- commands
---

To create a command, we need a [Command Handler](/tutorials/code/commands) class to do the command processing.  In the Quickstart tutorial, we used the tinker command handler.  Now we're going to create one of our own.

We're going to make two commands:

    `goals/set <goals>` - Sets goals.
    `goals [<name>]` - Views goals.

When we were tinkering in the Quickstart tutorial, we just smushed all of our command processing into the `handle` method.  But for real commands, that can get unwieldy.  There's a better way to do it.

Just as the [`CommandHandler` utility](/tutorials/code/commands) gives us some useful utilities like `enactor` and `client`, it also gives us a structured way to handle commands.  There are three steps:

* Parse the command arguments.
* Perform error checking and abort if there are any problems.
* Execute the command.

Each step has a method in the command class:

* `parse_args`
* Error check methods whose names start with `check_`.
* `handle`

Splitting up the code into multiple methods makes it more organized and readable.

## Try It

The first command will set the goals.  Create a file named `set_goals_cmd.rb` in `aresmush/plugins/custom`.

> <i class="fa fa-info-circle"></i> **Note:** The commands won't work just yet because we haven't finished wiring everything up.  We'll get to that in a later step - stay tuned.

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

### Parse Arguments

Our syntax is `goals/set <goals>` so we have a single argument.  It's common practice to use Ruby's class variables (defined by `attr_accessor`) to store command arguments.

    attr_accessor :goals
    
    def parse_args
      self.goals = trim_arg(cmd.args)
    end

> <i class="fa fa-info-circle"></i> **Tip:** A class variable defined by `attr_accessor` can be accessed throughout the class.  To distinguish it from regular variables, you put `self.` in front of the name when using it.  For example:  `self.goals`.

### Check Errors

Goals are just a free-form string, so there isn't really any error checking to do here.

### Execute Command

The handle method will simply update the character's goals and give a success message to the player.
  
     def handle
        enactor.update(goals: self.goals)
        client.emit_success "Goals set!"
      end          

> <i class="fa fa-info-circle"></i> **Tip:** Remember we need to use `update` to save a database field.  

## Try It Again

We also need a command to view the goals.  We'll create another file in the same folder named `goals_cmd.rb`.

> <i class="fa fa-info-circle"></i> **Tip:** It's best practice to store separate commands in separate files for organization and readability.

This is a very simple version that allows people to see each others' goals.

> <i class="fa fa-info-circle"></i> **Note:** The commands won't work just yet because we haven't finished wiring everything up.  We'll get to that in a later step - stay tuned.

### Basic Scaffolding

The basic command scaffolding is the same as the previous command, just with a different class name.

    module AresMUSH
      module Custom
        class GoalsCmd
          include CommandHandler
          
          # Remaining command handling will go here.
        end
      end
    end

### Parse Arguments

The syntax is `goals <name>` so we have a single argument.  If they didn't specify a name, we'll just assume they wanted to look at their own goals.

    attr_accessor :name
          
    def parse_args
        self.name = cmd.args ? titlecase_arg(cmd.args) : enactor_name
    end

### Check Errors

We really don't need any error checking for this command either.  But just for the sake of an example, let's say we wanted to restrict the command so only staff could view other peoples' goals.  In that case we'd add an error checker method (with a name starting with `check_`).  

Error checker methods return `nil` if everything was OK, or an error message if something's wrong.  If they return an error message, the command will abort and the error will be shown to the player.

For example, we could use the existing "view_bgs" permission and only allow you to view goals if you are looking at your own goals, or if you are able to view backgrounds.

      
    def check_can_view
       return nil if self.name == enactor_name
       return nil if enactor.has_permission?("view_bgs")
       return "You're not allowed to view other peoples' goals."
    end

### Execute Command

The handle method is going to use the simple bordered template to show the list of goals, one per line, with a title.

Here we're using the `ClassTargetFinder.with_a_character` [Database Finder Helper](/tutorials/code/database) to search for the character by name.  This helper will only execute the code in-between the "do" and "end" if the character is found.  If the name is ambiguous or doesn't exist, the helper will notify the player automatically.
   
    def handle
        ClassTargetFinder.with_a_character(self.name, client, enactor) do |model|
          template = BorderedDisplayTemplate.new model.goals, "#{model.name}'s Goals"
          client.emit template.render     
        end
    end