---
title: Command Switches and Args
description:
layout: tutorial
quickstartTutorial: true
tutorialName: Code Quickstart
tutorialIndex: tutorials/code/quickstart
prevstep: templates-intro
nextstep: parsing-args
tags: 
- code
- code-quickstart
---

Commands often have switches and arguments.  The basic command format is:

    root/switch args

For example:

    scene/join 123

There are some other advanced command options, but for now let's focus on the basics.

{% tip %} 
The root ignores prefixes, so if the player types 'where', '+where', or '@where' the root will be 'where'.
{% endtip %}

## Accessing Command Parameters

We can access the different parts of the command using the `cmd` variable, which is one of those handy variables (like `client` and `enactor`) provided by the `CommandHandler` class.

    cmd.root
    cmd.switch
    cmd.args

There are also two methods for easily determining if a root or switch matches some text.

    cmd.switch_is?("someswitch")
    cmd.root_is?("someroot")

{% tip %} 
In Ruby code, it's common to put a ? on the end when naming methods that return true or false.  You'll see this a lot in Ares code, like  `enactor.is_approved?` .
{% endtip %}

## Try It! - Adding a Switch

The tinker command doesn't have any switches and arguments by default, but we can add some.  

Let's try a switch first.  Edit the tinker handle method as shown and save it.

    def handle
       if (cmd.switch_is?("one"))
         client.emit_success "One success!"
       elsif (cmd.switch_is?("two"))
         client.emit_success "Two successes!"
       else
         client.emit_failure "Unrecognized tinker switch."
       end
     end

Try out the command with different switches:  `tinker/one`, `tinker/two`, `tinker/three`.  Observe how the output changes.

{% tip %} 
It's good practice to actually break up different switches into different command handlers living in different files.  Otherwise for many commands the  `handle`  method would get gigantic and overly complicated.  This is similar to the way that MUSH softcode would use different attributes like &CMD-BBS-READ and &CMD-BBS-POST.   Since we're just doing some simple tinkering here, we'll keep everything together for now.
{% endtip %}

## Try It! - Adding an Argument

Now let's try using an argument.  Change the tinker handle method as shown and save it.

    def handle
      client.emit_ooc "#{cmd.args} little piggies!"
    end

Try out the command with different arguments:  `tinker 1`, `tinker 2`.  Observe the output.

It would be nice to make the grammar correct though, wouldn't it?   Try this:

    def handle
      if (cmd.args == "1")
        client.emit_ooc "#{cmd.args} little piggy!"
      else
        client.emit_ooc "#{cmd.args} little piggies!"
      end
    end

Notice that we used a string ("1") instead of an actual number in the `if` check.  That's because all arguments are **strings** by default.  We'll learn how to parse arguments in different formats (numbers, lists, etc.) in the next exercise.