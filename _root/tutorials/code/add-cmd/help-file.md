---
title: Create a Help File
description:
layout: add-command
prevstep: edit-code
nextstep: db-field
tags: 
- code
- plugins
- help
---

All commands need a help file.  It's useful to make the helpfile first because it lets you think about what the commands are actually supposed to do _before_ you code them.

Help files live in a `help\<language code>` folder under the plugin folder.  This supports having help files in multiple languages, based on the game's locale.

> <i class="fa fa-info-circle"></i> **Tip:** "en" is the language code for English, so help files will typically be in the `help/en` folder.

The name of the help file will be the topic name.  For instance, if we name the file `goals.md` then you can type `help goals`.

Inside the help file, the first few lines are embedded YAML, where you can set various fields.  See [Help Files](/tutorials/code/help) for all the options.  We're only going to use the two basic ones here:

* toc - Defines where the topic falls in the help table of contents.
* summary - The summary text that shows up next to the topic in the help table of contents.

## Try It

Create a file in `aresmush/plugins/custom/help/en` named `goals.md`.  Give it the following text:

    ---
    toc: Character Creation
    summary: Setting goals.
    ---
    # Goals
    This command lets you record your character's goals.  Goals are only visible to yourself and staff, and may be changed at any time.
    
    `goals` - Show you own goals.
    `goals/set <goals>` - Sets your goals.
    
    Characters with the "view_bgs" permission can view goals using `goals <name>`.


This will create an help topic `help goals` and place an entry for it in the "Character Creation" section of the help files.

> <i class="fa fa-info-circle"></i> **Tip:** Help files use [Markdown Text](https://daringfireball.net/projects/markdown/syntax).  This lets you use formatting and hyperlinks that will show up nicely on the Web Portal and also in-game.  The code markers <pre>`goals`</pre> are the standard way to highlight command text.
