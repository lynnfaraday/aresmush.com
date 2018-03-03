---
title: Command Organization - Arg Parsing
description:
layout: code-quickstart
prevstep: command-errors
nextstep: command-org-error
tags: 
- code
- code-quickstart
---

In the previous exercise, we created a `handle` method that was doing a couple of things:

* Parse the arguments.
* Check for errors.
* Actually handle the command.

It turns out that those three steps are common to virtually all MUSH commands.  Additionally, there are some common error checks.  If we do a little code reorganization, we can both make our code more readable *and* leverage some utilities for common errors.

### Using parse_args

The first thing we can do is break out the arg parsing into a method named `parse_args`.  This name is special - the `CommandHandler` code knows to look for it and call it *before* it calls `handle`.

There's just one catch:  variables are normally only accessible within a single function.  We need our `piggies` variable to be accessible across both the `parse_args` function (which will set it) and the `handle` function (which will use it).   Fortunatey we can accomplish this with a "class attribute" - basically a variable that's available throughout the entire `TinkerCmd` class.

Let's add the `parse_args` method and our `piggies` attribute accessor:

    attr_accessor :piggies
    def parse_args
      self.piggies = integer_arg(cmd.args)
    end
    
    def handle
      if (!self.piggies)
        client.emit_failure "You didn't say how many piggies you had."
        return
      end
      
      if (piggies < 5)
        client.emit_ooc "#{self.piggies} is a small number of piggies."
      else
        client.emit_ooc "#{self.piggies} is a lot of piggies!"
      end
    end

> **Tip:** Using `self.` makes it clear that we're using a class attribute and not a local variable.

Try it out.  It should work exacty the same as before.  We haven't changed any functionality, just the internal organization of the code.

Now it may not seem like we gained much here.  In fact, it may seem like the code is now a little more complicated, with all that `self.piggies` stuff.   But when you start working with real commands and complex argument parsing, separating the arguments from the commands can really simplify things.  It also provides other benefits, as we'll see in the next exercise.