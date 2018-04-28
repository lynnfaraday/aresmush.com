---
tags:
- config
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

## Lines with Text

There's a special line that's used in a few places - it has text shown on a divider line like so:

    -----[ Languages ]--------------------------------------------------------------

You can configure the color of this line and the main line symbol (-) using `line_with_text_color` and `line_with_text_padding`.  If you want to radically change the way the line looks, you'll need to tweak the `LineWithText` code in `aresmush/utils/templates`.