---
title: Essential Config - Demographics
description: 
layout: tutorial
nextstep: groups
prevstep: config-files
tutorialIndex: tutorials/config/config-basics
essentialConfigTutorial: true
tutorialName: Essential Config
tags:
- config
---

Demographics are simple fields in the character profile, where you can set things like their gender, hair color, etc.  While the default demographics will suit many games, you may want to tweak them a little.

{% tip %}
Demographics are best for free-form text fields.  If you have a specific list of possible values in mind, you should probably use Groups, explained in the next step.
{% endtip %}

{% include toc.html %}

## Edit Demographics List

To edit demographics settings:

1. Go to Admin -> Setup in the web portal.
2. Edit `demographics.yml`.

The basic demographics will be something like this:

```
- full name
- callsign
- gender
- hair
- eyes
...
- birthdate
```

This is a [YAML List](/tutorials/config/config-basics/config-files.html#list-values), so we'll have one entry per line, with each line starting with a dash.

For example: if we aren't a military game, we might want to replace "callsign" with "nickname" or remove it entirely.  You might add a new demographic for "hometown" or "occupation".

{% note %}
Gender and birthdate are two demographic fields that have special handling in the code.  Birthdate feeds into age and gender has a fixed drop-down list of values.  You can omit them, but you can't change how they work without custom code.
{% endnote %}

## Advanced Demographics Config

In addition to the basic demographics list, you can also configure:

* Which fields are required in chargen.
* Which fields are editable after chargen.  (You probably want to let them change their hair, but not their age.)
* Which fields are private, meaning they're hidden from your profile except for admins.
* What help text is shown for each field in the `demographics` command.

See [Configuring the Demographics System](/tutorials/config/demographics.html) for more information.