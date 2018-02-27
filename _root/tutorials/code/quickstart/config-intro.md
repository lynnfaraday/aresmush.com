---
title: Configuration
description:
layout: code-quickstart
prevstep: command-org-error
nextstep: localization-intro
tags: 
- code
- code-quickstart
- config
---

The Ares [config tutorials](/tutorials/config) explain all about how configuration files are set up and how to change them to set up your game.  But how does that all translate into code?  Let's find out.

Go to the Admin -> Setup menu in the web portal and edit the `tinker.yml` config file.  You should see a single option named "example" with a value of "%xb".   We're going to use that in our code.  Change the tinker handle method as shown below:

> **Tip:** You can click the Reset button on the tinker screen to put the tinker code back to the default values and remove all the piggy processing we did in prior exercises.

    def handle
      color = Global.read_config("tinker", "example")
      client.emit "Here is some #{color}colored%xn text."
    end

Save the code and run the tinker command.  Notice that the color is blue, the color in our configuration setting.

Change the configuration file to use a different color code (like "%xg" for green) and run the command again.  The color changed without you needing to touch the code.

## Config Reader

The Config Reader is part of the Ares Engine code.  It loads all the configuration files and lets you query for specific configuration settings.  You can query for a section:

    Global.read_config("tinker")

Or a specific value: 

    Global.read_config("tinker", "example")

## Reading Hashes

Some configuration options are hashes, meaning they are key-value pairs.  Let's change our example setting to be a hash.  Edit the tinker config file and make the "example" value look like this:

    color: "%xb"
    text: Blue

> **Tip:** Color's value needs to be in quotes because it's using a special character (%).  The text value doesn't.  Err on the side of using quotes if you're not sure if they're needed.

If we were to just do `Global.read_config("tinker", "example")`, we would get a hash:  `{ color: "%xb", text: "Blue"}`.   

The Config Reader provides a shortcut to get a particular value out of a hash.  It does error-checking automatically and will return `nil` if the hash or value isn't found.

Let's give it a try.  Change the tinker code as shown:

    def handle
      color = Global.read_config("tinker", "example", "color")
      text = Global.read_config("tinker", "example", "text")
      client.emit "The color of the day is #{color}#{text}%xn"
    end

Run the tinker command and check out the results.

Change the configuration values to a different color code and text.  Run the command again and notice how the output changes.