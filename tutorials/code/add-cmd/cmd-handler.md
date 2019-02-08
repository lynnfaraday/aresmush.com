---
title: Create a Command Handler
description:
layout: tutorial
prevstep: db-field
nextstep: cmd-handler2
tutorialIndex: tutorials/code/add-cmd
addCmdTutorial: true
tutorialName: Adding a Command
tags: 
- code
- plugins
- commands
---

To create a command, we need a [Command Handler](/tutorials/code/commands.html) class to do the command processing.  In the Quickstart tutorial, we used the tinker command handler.  Now we're going to create one of our own.

Our goals system has two commands.  Let's tackle the set goals command first.

    `goals/set <goals>` - Sets goals.

## Create the Set Goals Command

Create a file named `set_goals_cmd.rb` in `aresmush/plugins/custom`.  Give it the following contents:

    module AresMUSH
      module Custom
        class SetGoalsCmd
          include CommandHandler
          
          attr_accessor :goals
    
          def parse_args
           self.goals = trim_arg(cmd.args)
          end
    
          def handle
            enactor.update(goals: self.goals)
            client.emit_success "Goals set!"
          end
        end
      end
    end

Then modify the `get_cmd_handler` method in `aresmush/plugins/custom.rb` to wire up the command handler:

    def self.get_cmd_handler(client, cmd, enactor)
      case cmd.root
      when "goals"
        case cmd.switch
        when "set"
          return SetGoalsCmd
        end
      end
      return nil
    end

In the game, type `load custom` to reload the custom plugin.

Type `goals/set Some goals.` to set some goals on yourself.

Type `ruby enactor.goals` to view them.

## About Command Handlers

When we were tinkering in the Quickstart tutorial, we just smushed all of our command processing into the `handle` method.  But for real commands, that can get unwieldy.  There's a better way to do it.

Just as the [`CommandHandler` utility](/tutorials/code/commands.html) gives us some useful utilities like `enactor` and `client`, it also gives us a structured way to handle commands.  There are three steps:

* Parse the command arguments.
* Perform error checking and abort if there are any problems.
* Execute the command.

Splitting up the code into multiple methods makes it more organized and readable.

In this example, the `parse_args` method takes the arguments from `cmd.args` and stuffs it into a class variable named goals.  The `trim_arg` processing strips off any leading or trailing spaces.

{% include tip.html content="It's common practice to use Ruby's class variables (defined by  <code>attr_accessor</code> ) to store command arguments.  A class variable defined by  <code>attr_accessor</code>  can be accessed throughout the class.  To distinguish it from regular variables, you put  <code>self.</code>  in front of the name when using it.  For example:   <code>self.goals</code> ." %}

The `handle` method takes the goals (again from `self.goals`) and updates the goals database attribute on the enactor.  It then emits a success message to the client.

{% include tip.html content="Remember we need to use  <code>update</code>  to save a database field.  " %}

Goals are just a free-form string, so there isn't any error checking to do here.

## About the Command Dispatcher

We've talked a lot about how commands get handled, but how do you get from the player typing "goals/set" in their MU client to the `SetGoalsCmd` class?  The answer is the Dispatcher.  

One of the Dispatcher's jobs is calling each plugin's `get_cmd_handler` method any time it gets a command.  A plugin can return `nil` - if they don't want the command - or an appropriate command handler if they do.

In this example, we have a simple case statement that returns the `SetGoalsCmd` class if the command root is 'goals' and the switch is 'set'.

You can learn more about the dispatcher in the Advanced Tutorial on [Command Dispatching](/tutorials/code/dispatcher.html).