---
title: Configuring the Game Skin
layout: page
tags:
- config
---

To configure the game skin:

1. Select Admin -> Setup
2. Edit `skin.yml` 

## Border Lines

You can configure the border lines that are used in almost every command.  Ares lets you define four different lines.  Each of the lines can contain ansi codes and linebreaks (%r).

* Header - used at the top
* Footer - used at the bottom
* Divider - used to divide sections
* Plain - just a plain old line

You can access the border lines using special control codes `%lh` for header, `%lf` for footer, `%ld` for divider, `%lp` or `%l1` for plain.

Here's an example of how the lines would be used:

{% include pretty_image.html file='code/skin.png' %}

## Lines with Text

There's a special line that's used in a few places - it has text shown on a divider line like so:

    -----[ Languages ]--------------------------------------------------------------

You can configure the color of this line and the main line symbol (-) using `line_with_text_color` and `line_with_text_padding`.  If you want to radically change the way the line looks, you'll need to tweak the `LineWithText` code in `aresmush/utils/templates`.

## random_colors

The `%x!` code uses a random color.  This is a tradition from my old softcode system, which changed the colors of the border lines every half a minute.  If you find this too distracting, you can always change the ansi code in the border lines from `%x!` to a specific color.   You can also configure what colors are used when a random color is selected.  For example - if you have a red color pallette for your game, you might use only reds.

To change what colors are used by the random selector, list ansi codes - one per line.