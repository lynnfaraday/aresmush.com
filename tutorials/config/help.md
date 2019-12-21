---
title: Configuring the Help System
layout: page
tags:
- config
---

The help system has no special configuration options besides the standard command shortcuts.

## Customizing Help Files

You can customize help files for your game by clicking the "Customize" button when viewing any help file.  You can also do this with a code editor, placing the custom help file in `aresmush/game/help/en`.  The name of the help file must exactly match the one you're overriding--e.g., `beginner.md`.

{% note %}
Overriding a help file means you will no longer get any updates to that help topic, due to new commands, fixes, etc.  Consider carefully about whether it's worth it to override the help or just use a supplemental wiki article.
{% endnote %}

To restore a help file to its default version, click the "Restore Default" button on an overriden help file topic.  This will delete your customizations.