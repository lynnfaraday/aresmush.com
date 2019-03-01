---
title: Help System
description:
layout: page
tags: 
- code
- engine
- help
---

Ares contains a robust help system that can be accessed from the game (via the `help` command) or through the Web Portal.

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Help Files

Help files live in a `help\<language code>` folder under the plugin folder.  This supports having help files in multiple languages, based on the game's locale.

{% tip %} 
\"en\" is the language code for English, so help files will typically be in the  <code>help/en</code>  folder.
{% endtip %}

Help files use [Markdown Text](https://daringfireball.net/projects/markdown/syntax).  This lets you use formatting and hyperlinks that will show up nicely on the Web Portal and also in-game.

You can link to other help files using `See also [Jobs](/help/jobs)`.

## Help Metadata

Inside the help file, the first few lines are embedded YAML, where you can set various fields. 

* toc - Defines where the topic falls in the help table of contents.  If omitted, the topic will appear under "Miscellaneous".
* summary - The summary text that shows up next to the topic in the help table of contents.
* order - If specified, controls the order that help files appear in that section of the table of contents.
* aliases - Creates aliases for the topic name.  See 'Topic Names' below for more details.

{% tip %} 
Table of contents categories are free-form, so you can use anything you like in your help files.  However, it's probably best to look at what already exists so you don't create similar-but-subtly-different categories.
{% endtip %}

## Topic Names

The name of the help file will be the topic name.  For instance, if we name the file `traits.md` then you can type `help traits`.

The help system has a number of automatic features that try to help players find the help file they wanted even if they don't type in the exact topic name.  For example:

* Singular vs plural:  e.g. 'help traits', will match 'help trait' and vice-versa.
* Switches: e.g. 'help trait/set' it will match 'help traits'.
* Manage: e.g. 'help combat manage' will match 'help manage combat' and vice-versa.

You can also set up manual aliases in the help metadata.  This is particularly important when you have old-school MUSH shortcuts.  For example, the help entry for 'profile' defines an alias for 'finger' and 'info' since those are common old-school names for the same basic command.

    ---
    toc: Community
    summary: Using character profiles.
    aliases:
    - finger
    - info
    ---
