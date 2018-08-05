---
title: Create a Help File
description:
layout: tutorial
prevstep: custom-plugin
nextstep: db-field
tutorialIndex: tutorials/code/add-cmd
addCmdTutorial: true
tutorialName: Adding a Command
tags: 
- code
- plugins
- help
---

All commands need a help file.  It's useful to make the helpfile first because it lets you think about what the commands are actually supposed to do _before_ you code them.

## Help File Location

Help files live in a `help\<language code>` folder under each plugin's folder.  This supports having help files in multiple languages, based on the game's locale.

> <i class="fa fa-info-circle"></i> **Tip:** "en" is the language code for English, so help files will typically be in the `help/en` folder.

The name of the help file will be the topic name.  For instance, if we name the file `goals.md` then you can type `help goals`.

## Help File Metadata

Inside the help file, there's some metadata followed by the actual help file text.

The metadata is in YAML format, which is a simple markup language using a `field: value` format.  There are many help fields available (you can find a complete list in the Advanced Tutorial on [Help Files](/tutorials/code/help) later), but for now we're just going to set the two basic ones:

* toc - Defines where the topic falls in the help table of contents.
* summary - The summary text that shows up next to the topic in the help table of contents.

## Help File Contents

After the metadata (which is set off by `---` lines) comes the actual help text.  Like a lot of Ares text, this uses [Markdown](https://daringfireball.net/projects/markdown/syntax) format.  Markdown is nice because it can be shown in both text-only format (for the MU client) and web format (for the web portal).  If you've ever used web forum or wiki formatting codes, you've probably used Markdown.

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

> <i class="fa fa-info-circle"></i> **Tip:** The code markers <pre>`goals`</pre> are the standard way to highlight command text in help files.

> <i class="fa fa-info-circle"></i> **Note:** The help file won't actually show up yet because we haven't told the game it's there.  We'll get to that in a later step - stay tuned.
