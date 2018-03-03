---
title: Parsing Args
description:
layout: code-quickstart
prevstep: command-args
nextstep: command-errors
tags: 
- code
- code-quickstart
---

In the previous exercise, we learned how to access command arguments.  We saw, though, that `cmd.args` was a string.  We can't do numeric operations on string.  What if we wanted to count our little piggies?  

## Arg Utilities

Ares provides a variety of argument parsing utilities to handle args that are numbers, lists, or even complex sequences like "name=subject/message".  We're just going to go over a couple here, but the rest are documented in [Arg Parsers](/tutorials/code/arg-parsers).  You can check that out later.

We'll start with the `integer_arg` helper, which will help us turn our number of piggies from a string to a number that we can do something with.

    def handle
      piggies = integer_arg(cmd.args)
      if (piggies < 5)
        client.emit_ooc "#{piggies} is a small number of piggies."
      else
        client.emit_ooc "#{piggies} is a lot of piggies!"
      end
    end

Try tinkering with different numbers of piggies and see how the message changes when you have a small or large number.

> **Note:** If you leave off the argument and just use `tinker` by itself, you'll get an error.  We'll talk about why this is and how to fix it in the next exercise.

## Arg Parsers

What if we have multiple parts to our arguments, like `tinker <number of piggies>=<names of piggies>`?

Here we can leverage the `ArgParser` helper class.  It has pre-set parsers for a variety of common MUSH command formats, including `arg1_equals_arg2`.  Let's try it.

    def handle
      args = cmd.parse_args(ArgParser.arg1_equals_arg2)      
      num_piggies = integer_arg(args.arg1)
      names = list_arg(args.arg2)
      
      client.emit "You have #{num_piggies} and their names are #{names.join(', ')}"
      
      if (num_piggies > names.count)
        client.emit_failure "You didn't name all your piggies!"
      end
    end

Calling `parse_args` will split our argument string into the "3" (arg1) and the "A B C" (arg2).   Then we use the other two arg helpers to interpret the 3 as a number and the names as a list.  Now that we've converted our number of piggies to an actual number, we can use it in a numeric comparison to make sure we named all our piggies.

Try using the command with a number of piggies and their names, like `tinker 3=A B C`.