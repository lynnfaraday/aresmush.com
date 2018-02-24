---
toc: ~config~ Configuring the Game
title: Configuring the game skin (lines).
---
# Configuring the Game Skin (Lines)

To configure the game skin:

1. Select Admin -> Setup
2. Edit `skin.yml` 

You can configure the border lines that are used in almost every command.  Ares lets you define four different lines.  Each of the lines can contain ansi codes and linebreaks (%r).

* Header - used at the top
* Footer - used at the bottom
* Divider - used to divide sections
* Plain - just a plain old line

You can access the border lines using special control codes `%lh` for header, `%lf` for footer, `%ld` for divider, `%lp` or `%l1` for plain.

Here's an example of how the lines would be used:

{{#pretty-image}}/assets/media/code/skin.png{{/pretty-image}}
