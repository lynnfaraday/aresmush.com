---
title: Command Handlers
description:
layout: tutorial
quickstartTutorial: true
tutorialName: Code Quickstart
tutorialIndex: tutorials/code/quickstart
prevstep: hello-mush
nextstep: emits
tags: 
- code
- code-quickstart
---

In the last exercise, we made our game say hello to us by updating the tinker handler:

    def handle
      client.emit "Hello, #{enactor.name}!"
    end

But wait - how did the code know *which* client to use?  Why did it emit to Headwiz and not to someone else?

The magic here is in the `CommandHandler` module.  Near the top of the tinker code you'll see a line:

    include CommandHandler

`include` is a Ruby directive that makes use of code defined in another file.  In this case, the `CommandHandler` code defines some variables that are going to be used in nearly every command:

* **client** - Represents the connection to the MUSH client.  You can use this to send messages and query information like the client's IP address or last idle time.
* **enactor** - The character executing the command.  This may be `nil` - a Ruby null value - if the command was issued from someone sitting on the login screen who hasn't logged in yet.
* **enactor_room** - As its name implies, it's a shortcut to the room the enactor's in.  As with enactor, it may be `nil` if the command is attempted on the login screen.
* **cmd** - An object representing the command being executed.  We'll dive into this further in another exercise.

{% include tip.html content="Throughout the Ares code, you'll see 'Cmd' used as an abbreviation for 'Command'." %}

## Try It!

Let's use some of these other automatic variables.  Edit the tinker code as shown, save, and then execute the tinker command in the MU client to see how you can access the enactor's room as well as their name.

    def handle
      client.emit "Hello, #{enactor.name}!  Looks like you're in the #{enactor_room.name}.  The command you typed was: #{cmd}"
    end


