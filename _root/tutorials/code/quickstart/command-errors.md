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

You may already have stumbled upon this, but the code we used in the previous exercise had a problem.  If you ran the `tinker` command witohut specifying any arguments, you'd get an error.

## What Errors Look Like

Whenever the code suffers an unexpected failure, you'll get a red "Oops! The code has lost its mind..." message explaining what the problem is.  Because players are not always great about reporting the details of errors, the error message is also included in the game's [log file](/tutorials/code/logs).  

Let's see what this looks like.  Change the tinker code back to our previous example:

    def handle
      piggies = integer_arg(cmd.args)
      if (piggies < 5)
        client.emit_ooc "#{piggies} is a small number of piggies."
      else
        client.emit_ooc "#{piggies} is a lot of piggies!"
      end
    end

Now run the `tinker` command by itself without giving it any arguments?  Give it a try.  You should get a bunch of red error text including this message:

    Error: "undefined method `<' for nil:NilClass"

This is because `integer_arg`, like all the arg parsers, returns `nil` if the arg is missing.  You can't use nil in a greater-than/less-than comparison because it's not a number.

## Adding An Error Check

We need to do some error checking to make sure that doesn't happen.  Give it a try:

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