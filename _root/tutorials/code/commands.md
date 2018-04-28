---
title: Command Handling
description:
layout: page
tags: 
- code
- plugins
- commands
- dispatcher
---

When a MU client sends text to the game's telnet port, several things happen:

1. The text is converted into a `Command` object.
2. The `Command` object is added to the [Dispatcher's](/tutorials/code/dispatcher) dispatch queue.  
3. When it gets to that command in the queue, the Dispatcher will ask each plugin if it's interested in that command.  
4. If a plugin returns a command handler object, the Dispatcher will call `on_command` in the handler and then stop asking other plugins if they want the command.  
5. If no plugins handle the command, the Dispatcher will emit the default "Huh?" message.

> <i class="fa fa-info-circle"></i> **Tip:** Only one plugin may handle a command.

## Handling Commands

If a plugin wants to handle and event, it must implement the `get_cmd_handler` method in its plugin module.  This method is given a command object and  and can return either nil (if the plugin doesn't want the event) or an event handler class (if it does).

Most plugins have a case statement based on the root command, and ten a second case statement based on the switch.  For example:

    module AresMUSH
      module Events
        def self.get_cmd_handler(client, cmd, enactor)
          case cmd.root
          when "event"
            case cmd.switch
            when nil
              if (cmd.args)
                return EventDetailCmd
              else
                return EventsCmd
              end
            when "create"
              return EventCreateCmd
            ...
          end
          nil
        end
      end
    end

> <i class="fa fa-info-circle"></i> **Tip:** A few commands check the args too, especially commands that use a shortcut to make both singular and plural versions of the commands work the same.  In the example above, there's a shortcut (not shown) that converts events -> event.  So if the command root is `event` and there are no arguments, it uses EventsCmd to show the events list.  If there is an argument, then it assumes you're doing `event 1`.

## Command Class

The `Command` class embodies a player's typed command.  Commands are interpreted based on a standard format:

    [prefix]root[page][/switch] [args]

All components except the root are optional, so valid commands might include:

|input|prefix|root|page|switch|args |
| ---- |
|mail Faraday=Subj/Msg||mail|||Faraday=Subj/Msg|
|actors2||actors|2|||
|bbs/new||bbs||new||
|+ch Hiya.|+|ch|||Hiya.|
|+bbs/post 1=Subj/Msg|+|bbs||post|1=Subj/Msg|

The `Command` class provides easy access to these components through methods like `cmd.root` and `cmd.args`.

## Command Handler Class

In all the tutorials thus far, we've never talked about `on_command` - it's always been `parse_args` and `handle` and things like that.  That's because all Ares commands use the `CommandHandler` class.

`CommandHandler` defines the `on_command` method for you, and breaks it up into steps with their own individual methods:

* Log the command.
* Parse arguments.
* Perform error checking.
* If no errors, handle the command.

It also provides useful utilities like variables for `enactor` and `enactor_room` and the [Arg Parsers](/tutorials/code/arg-parsers).

To utilize the `CommandHandler` functionality, just include it in your command class and implement a `handle` method.  The rest of the methods are optional:

    module AresMUSH
      module Mail
        class MailSendCmd
          include CommandHandler
          
          def handle
            ...
          end
        end
      end
    end

## Logging

By default, Ares logs all non-sensitive commands.  This aids in troubleshooting and also is a security safeguard to track who did what.

> <i class="fa fa-exclamation-triangle"></i> **Important:** Ares does not log pages, mails, poses or passwords for privacy reasons.

For sensitive commands, you can disable logging in your command handler just by overriding the log method.  For example, the mail command just logs the fact that you sent mail - it doesn't log the contents of the message.

    class MailSendCmd
      ...
      def log_command
        # Don't log full command for message privacy
        Global.logger.debug("#{self.class.name} #{client} sending mail.")
      end
    end

The page command logs nothing at all:

    class PageCmd
      ...
      def log_command
        # Don't log pages
      end
    end

## Arg Parsing

The `parse_args` method is the place where you can parse the command string into its individual args.  See [Arg Parsers](/tutorials/code/arg-parsing) for more information.

    attr_accessor :num
    def parse_args
      self.num = integer_arg(cmd.args)
    end

## Error Checking

Any method named with `check_` is considered an error checker.  The command handler will execute these after parsing args but before handling the command.  

Error checkers return `nil` if everything's okay, or an error message string if there was a problem.   If the return value is not nil, the command handler will emit a failure to the client and stop processing.

### When *not* to Use Error Checkers

Error check methods are designed to work on the enactor or the arguments - checking whether the enactor has permissions or the arguments are missing/invalid.   But sometimes you can't tell if an argument is valid until you've done some database queries (for example, verifying if the specified player actually exists).

You don't want to do database queries twice.  It's 100% appropriate to do error checking _inside_ the `handle` method when it's more efficient.  

The [Database Finder Utilities](/tutorials/code/database) are very handy when it comes to checking whether an item was found in the database.  Many commands are simply:

    ClassTargetFinder.with_a_character(name, client, enactor) do |model|
      ... do something with the found model ...
    end

The `ClassTargetFinder` handles the emits if the item wasn't found, or multiple items were found with that same name, etc.

### Universal Error Checks

There are a couple error checkers that are so universal they're built right into `CommandHandler` itself.

#### Required Arguments Checker

The first universal error checker makes sure that all required args are specified.  You just need to have your command handler specify which args are required.  This should be an array of class attributes.  For example:

    attr_accessor :num, :name
    def required_args
      [ self.num, self.name ]
    end

> <i class="fa fa-info-circle"></i> **Tip:** You can have some args be required and others not; just change which ones appear in the required_args list.  If none are required, you may omit `required_args` entirely.

#### Login Checker

The other universal error checker makes sure that the player is logged into a character.  Most commands require this, so it's on by default.  You don't have to do anything.  If you want to allow a command to work on the login screen (like who or help), you need to expressly enable it by adding this to your command handler:

    def allow_without_login
      true
    end

## Handle

The `handle` method is where the 'guts' of your command go. 99% of handle methods will end with an emit to the client.

    def handle
       # Do something, then...
       client.emit_success "Done!"
    end

> <i class="fa fa-info-circle"></i> **Tip:** If you have multiple pieces of information to send to the player, build up a single string and emit it all at once for efficiency.  You can also use a [Template](/tutorials/code/templates).

Don't forget that you can emit in multiple ways depending on the type of message.  See [emits](/tutorials/quickstart/emits).