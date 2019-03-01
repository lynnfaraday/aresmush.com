---
title: Config Reader
description:
layout: page
tags: 
- code
- engine
- config
---

The Config Reader is part of the Ares Engine code.  It loads all the configuration files and lets you query for specific configuration settings.  

## Reading Configuration Values

The `Global.read_config` method lets you read configuration values.

You can query for a section:

    Global.read_config("tinker")

Or a specific value: 

    Global.read_config("tinker", "example")

### Reading Hashes

Some configuration options are hashes, meaning they are key-value pairs.  For example:

    tinker:
      example:
        color: "%xb"
        text: Blue

{% tip %} 
Color's value needs to be in quotes because it's using a special character (%).  The text value doesn't.  Err on the side of using quotes if you're not sure if they're needed.
{% endtip %}

If we were to just do `Global.read_config("tinker", "example")`, we would get a hash:  `{ color: "%xb", text: "Blue"}`.   

The Config Reader provides a shortcut to get a particular value out of a hash.

      Global.read_config("tinker", "example", "color")
      Global.read_config("tinker", "example", "text")

The hash version does error-checking automatically and will return `nil` if the section, hash or value isn't found.