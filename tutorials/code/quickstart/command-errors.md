---
title: Command Errors
description: 
layout: tutorial
quickstartTutorial: true
tutorialName: Code Quickstart
tutorialIndex: tutorials/code/quickstart
prevstep: parsing-args
nextstep: config-intro
tags:
- code
- code-quickstart
---

You may already have stumbled upon this, but the code we used in the previous exercise had a problem.  If you ran the `tinker` command without specifying any arguments, you'd get an error.

Whenever the code suffers an unexpected failure, you'll get a red "Oops! The code has lost its mind..." message explaining what the problem is.

## Try It! - What Errors Look Like

Let's see what this looks like.  Change the tinker code back to our previous example:

    def handle
      piggies = integer_arg(cmd.args)
      if (piggies < 5)
        client.emit_ooc "#{piggies} is a small number of piggies."
      else
        client.emit_ooc "#{piggies} is a lot of piggies!"
      end
    end

Now run the `tinker` command by itself without giving it any arguments.  You should get a bunch of red error text including this message:

    Error: "undefined method `<' for nil:NilClass"

## Try It! - Looking in the Error Log

There's minimal information about the error printed to the screen, but a lot more is captured in the game's [log file](/tutorials/code/logs.html).  The log file records most commands (minus some for privacy), errors, and other important game events.

1. In the web portal, go to Admin -> Logs.  (You can open this in a new tab to avoid losing your tinker window).
2. Select the most recent (highest-numbered) log file.
3. Search for "ERROR" and near the top you should see an entry like this:

```
2018-10-23 20:08:50 ERROR - Error in tinker: client=73 error=undefined method `<' for nil:NilClass backtrace=["/home/ares/aresmush/plugins/tinker/commands/tinker_cmd.rb:14:in `handle'", "/home/ares/aresmush/engine/aresmush/plugin/command_handler.rb:25:in `on_command'",
... other junk ...
 "/home/ares/aresmush/engine/aresmush/commands/dispatcher.rb:137:in `with_error_handling'", "/home/ares/aresmush/engine/aresmush/commands/dispatcher.rb:66:in `on_command'"] 
````

This shows you the exact link of code that had the problem - `tinker_cmd.rb` line 14 - and what's called a "stack trace" showing all the method calls leading up to it.  We can use this information to find out that our problem is the line of code:  `if (piggies < 5)`.

## Try It! - Debugging

So now we know where the error is happening, but we still don't know _why_.  We'll need to do some debugging.  The '5' looks okay, but maybe there's something wrong with our `piggies` variable.  Let's add a log statement to our code to figure out what's going on.

    def handle
      piggies = integer_arg(cmd.args)
      Global.logger.debug "Number of piggies was: #{piggies}."
      if (piggies < 5)
        client.emit_ooc "#{piggies} is a small number of piggies."
      else
        client.emit_ooc "#{piggies} is a lot of piggies!"
      end
    end

If we log in the log file again (you'll need to reload the page if you left it open in a different tab), we'll see a line like this:

    2018-10-23 20:15:09 DEBUG - Number of piggies was: . 

We have no number piggies specified!  That makes sense, because we didn't actually type a number in our tinker command.  Because we left off the number of piggies, `integer_arg(cmd.args)` just returns nil.  In Ruby, you aren't allowed to do a comparison between nil and a number - hence the error.

## Try It! - Adding An Error Check

So now we know where and why the error is happening.  Let's add an error check to make sure the player specified a number of piggies.  Give it a try:

    def handle
      piggies = integer_arg(cmd.args)
      if (!piggies)
        client.emit_failure "You didn't say how many piggies you had."
        return
      end
      
      if (piggies < 5)
        client.emit_ooc "#{piggies} is a small number of piggies."
      else
        client.emit_ooc "#{piggies} is a lot of piggies!"
      end
    end

Now if we fail to specify an argument, we'll get an error message and the handler will return (aka stop handling the command.)

{% tip %}
`if (!piggies)` is a common syntax in error handling.  It basically just means: "Do this if piggies is `nil` - i.e. wasn't set."  You may also see `if (piggies.blank?)` for string arguments, which means "Do this if piggies is `nil` *or* an empty string."
{% endtip %}