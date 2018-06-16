---
title: Configuration
description:
layout: tutorial
quickstartTutorial: true
tutorialName: Code Quickstart
tutorialIndex: tutorials/code/quickstart
prevstep: command-errors
nextstep: localization-intro
tags: 
- code
- code-quickstart
- config
---

The Ares [config tutorials](/tutorials/config) explain all about how configuration files are set up and how to change them to set up your game.  But how does that all translate into code?  Let's find out.

Go to the Admin -> Setup menu in the Web Portal and edit the `tinker.yml` config file.  You should see a single option named "example" with a value of "%xb".   We're going to use that in our code.  Change the tinker handle method as shown below:

> <i class="fa fa-info-circle"></i> **Tip:** You can click the Reset button on the tinker screen to put the tinker code back to the default values and remove all the piggy processing we did in prior exercises.

    def handle
      color = Global.read_config("tinker", "example")
      client.emit "Here is some #{color}colored%xn text."
    end

Save the code and run the tinker command.  Notice that the color is blue, the color in our configuration setting.

Change the configuration file to use a different color code (like "%xg" for green) and run the command again.  The color changed without you needing to touch the code.