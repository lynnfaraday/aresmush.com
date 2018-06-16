---
title: Tinkering
description:
layout: tutorial
quickstartTutorial: true
tutorialName: Code Quickstart
tutorialIndex: tutorials/code/quickstart
nextstep: command-handlers
prevstep: hello-mush
tags: 
- code
- code-quickstart
---

The `ruby` command is handy, but often you'll want to run code that's too involved to write comfortably in a single line of text.  For that, we have the `tinker` command.   The `tinker` command lets you enter some code in a mini code editor on the web portal and then execute it in the game.

We're going to To change the tinker code:

1. Log into the Web Portal.
2. Go to Admin -> Tinker.
3. Edit the handle method to do the desired processing.
4. Click Save.
5. Back in the MUSH client window, type `tinker` to execute the code.

To make our tinker command say hello, we would make the `handle` method look like this:

    def handle
      client.emit "Hello, #{enactor.name}!"
    end

After saving, go back to your MUSH client (logged in with your coder character) and type 'tinker'.  You should see:  "Hello, Headwiz!" (or whatever your character's name is.)

> <i class="fa fa-info-circle"></i> **Tip:** If you get an error when saving your code, check to make sure you've typed it exactly as indicated in each exercise.  Usually errors result from misplaced braces `{}` or missing `end` statements.

We're going to continue using the tinker command for the remaining exercises in this tutorial.  There's a more in-depth [Tinkering Tutorial](/tutorials/code/tinker) if you want to learn more about tinkering when you've finished with the Quickstart.

