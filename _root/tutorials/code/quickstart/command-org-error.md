---
title: Command Organization - Error Checking
description:
layout: code-quickstart
prevstep: command-org-arg
nextstep: config-intro
tags: 
- code
- code-quickstart
---

So far we've split up our code so that the arg parsing is now done in its own method.  Now we're going to do the same with the error checking.  

## Error Checkers

Any method named with `check_` is considered an error checker.  The `CommandHandler` code will run those *after* `parse_args` and *before* `handle`.

> **Tip:** You may have noticed that the tinker command class already has an error checker to make sure that the enactor has coding privileges.

Error checkers should always return `nil` if everything's OK, and an error message if something's wrong.  The `CommandHandler` code will automatically do an `emit_failure` if there's a message returned.


    attr_accessor :piggies
    def parse_args
      self.piggies = integer_arg(cmd.args)
    end
    
    def check_piggies
      return "You didn't say how many piggies you had." if !self.piggies
      return nil
    end
    
    def handle
      if (self.piggies < 5)
        client.emit_ooc "#{self.piggies} is a small number of piggies."
      else
        client.emit_ooc "#{self.piggies} is a lot of piggies!"
      end
    end

> **Tip:** Here's a Ruby trick - you can put the 'if' at the END of a simple statement to save some space on a return.  If we don't return after the first line, we return nil on the second line.

## Universal Error Checkers

There are a couple error checkers so common they're built right into the `CommandHandler` class.  One of them is checking to make sure no required arguments are nil.  All you have to do is tell the code which arguments are required. So we can remove our `check_piggies` method and replace it with:

    attr_accessor :piggies
    def parse_args
      self.piggies = integer_arg(cmd.args)
    end
    
    def required_args
      [ self.piggies ]
    end
    
    def handle
      if (self.piggies < 5)
        client.emit_ooc "#{self.piggies} is a small number of piggies."
      else
        client.emit_ooc "#{self.piggies} is a lot of piggies!"
      end
    end

Try it out.  Notice that we no longer get our custom message about the piggies, but a more generic message that refers us to the proper help file.