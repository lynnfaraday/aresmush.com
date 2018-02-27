---
title: Hello MUSH
description:
layout: code-quickstart
prevstep: tinker-intro
nextstep: command-handlers
tags: 
- code
- code-quickstart
---

For our first exercise, we'll adapt the universal "Hello World" code example.  We're going to make use of the `emit` method on the client object. 

[Edit the Tinker Code](/tutorials/code/quickstart/tinker-intro) to make the handle method look like this:

    def handle
      client.emit "Hello, #{enactor.name}!"
    end

After saving, go back to your MUSH client (logged in with your coder character) and type 'tinker'.  You should see:  "Hello, Headwiz!" (or whatever your character's name is.)