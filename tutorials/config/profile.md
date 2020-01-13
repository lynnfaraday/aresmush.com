---
title: Configuring the Profile System
layout: page
tags:
- config
---

To configure the Profile plugin:

1. Select Admin -> Setup.
2. Edit `profile.yml`

{% include toc.html %}

## backup_commands

You can customize what commands get executed when someone does the `backup` command.  By default it will include their profile, description, sheet and damage.

## Custom Character Fields

With custom code, you can add new fields to the character profile and/or chargen.  See [Custom Character Fields](/tutorials/code/hooks/char-fields.html).