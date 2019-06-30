---
title: Formatting
description: 
layout: page
tags:
- code
- plugins
- commands
---

Ansi formatting and substitutions like %r/%b are handled by the emit methods automatically, but there are a few other formatters that can be used in commands.

{% include toc.html %}

## Pose Formatter

Given some text and the enactor's name, the `PoseFormatter` class will format the text in the same way that a pose would.

    "Hello.  -->  Faraday says, "Hello.""
    :waves.  -->  Faraday waves.
    etc.


## Time Formatter

Given a duration (in seconds), the `TimeFormatter` class will turn it into the familiar MUSH duration string like 2d or 5m.
