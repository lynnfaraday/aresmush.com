---
title: Hello MUSH
description: 
layout: tutorial
quickstartTutorial: true
tutorialName: Code Quickstart
tutorialIndex: tutorials/code/quickstart
nextstep: tinker-intro
prevstep: try-ruby
tags:
- code
- code-quickstart
---

For our first exercise, we'll adapt the universal "Hello World" code example.  We're going to make use of the `emit` method on the client object. 

The `ruby` command lets you execute arbitrary Ruby code from your MUSH client window and see the results, similar to how you might have done MUSHcode in the past.  You can't create entire commands or systems this way (unlike MUSHcode) but you can run little utilities and test things.

## Try It!

In your MU client, type this:

    ruby "Hello #{enactor.name}!"

The game should respond by saying hello to you.

{% tip %} 
Wondering where enactor came from?  Stay tuned for details.  For now, just know that `enactor`  is the character object running the command.
{% endtip %}