---
title: Create a Help File
description:
layout: create-plugin
prevstep: config-file
nextstep: db-model
tags: 
- code
- plugins
- help
---

All commands need a help file.  It's useful to make the helpfile first because it lets you think about what the commands are actually supposed to do _before_ you code them.

Help files live in a `help\<language code>` folder under the plugin directory.  This supports having help files in multiple languages, based on the game's locale.

> **Tip:** "en" is the language code for English, so help files will typically be in the `help/en` directory.

The name of the help file will be the topic name.  For instance, if we name the file `traits.md` then you can type `help traits`.

Inside the help file, the first few lines are embedded YAML, where you can set various fields.  See [Help Files](/tutorials/code/help) for all the options.  We're only going to use the two basic ones here:

* toc - Defines where the topic falls in the help table of contents.
* summary - The summary text that shows up next to the topic in the help table of contents.

## Try It

Create a file named `traits.md` in the directory `aresmush/plugins/traits/help/en/`.  Give it the following contents:

    ---
    toc: Character Creation
    summary: Setting traits.
    ---
    # Traits
    You can set descriptive traits on your character.  Each trait can have a name and a free-form description.
    
    `traits` - Show you own traits.
    `trait/set <trait name>=<trait description>` - Set a trait.

This will create an help topic `help traits` and place an entry for it in the "Character Creation" section of the help files.