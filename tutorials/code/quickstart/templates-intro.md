---
title: Templates
description: 
layout: tutorial
quickstartTutorial: true
tutorialName: Code Quickstart
tutorialIndex: tutorials/code/quickstart
prevstep: emits
nextstep: command-args
tags:
- code
- code-quickstart
- templates
---

We already talked about [emits](/tutorials/code/quickstart/emits.html), which are the basic way of communicating text to a MU client.  But what if you need something more complicated, like a character sheet or the who list?   Technically you could shove a whole bunch of text together in the command handler and emit it, but there's a better way: **Templates**.

## The Template Engine

Templates are a special code class that handle complex information display.  There are templates for all sorts of things in the game:  the who/where list, mail messages, forums, character sheets, profile, descriptions and more.  Templates use the Ruby [ERB Template](http://www.stuartellis.name/articles/erb/) system, which mingles text with embedded Ruby code.

Diving deep into how to design templates is beyond the Quickstart Tutorial.  There's a separate article on [Templates](/tutorials/code/templates.html) for you in the Advanced Coding section when you're ready.  Right now we're just going to go into how to _use_ existing templates.

Tons of MU commands have a similar display structure:

    ------------------------------
              Title
    Some text
    ------------------------------

Ares provides a template to make this easy:  `BorderedDisplayTemplate`  

## Try It!

Let's give the bordered template a try.  Modify the tinker command as shown below.  Save it, then run the command in-game to see how it looks.

    def handle
      template = BorderedDisplayTemplate.new "Some text to show.", "A Title"
      client.emit template.render
    end