---
title: Configuring the Game Skin
layout: page
tags:
- config
---

To configure the game skin:

1. Select Admin -> Setup
2. Edit `skin.yml` 

{% include toc.html %}

## Border Lines

You can configure the border lines that are used in almost every command.  Ares lets you define four different lines.  Each of the lines can contain ansi codes and linebreaks (%r).

* Header - used at the top
* Footer - used at the bottom
* Divider - used to divide sections
* Plain - just a plain old line

You can access the border lines using special control codes `%lh` for header, `%lf` for footer, `%ld` for divider, `%lp` or `%l1` for plain.

Here's an example of how the lines would be used:

{% include pretty_image.html file='code/skin.png' %}

## line_with_text

The basic border lines are just basic lines, but some code uses a line with text embedded, like so:

    -----[ Languages ]--------------------------------------------------------------

The line_with_text option lets you configure how this looks. 

    default:
      color: "%x!"
      pattern: "-=-"
      text_position: 5
      left_bracket: '[ '
      right_bracket: ' ]'

The options available are:

* `color` - the color of the line.
* `padding` - the pattern used to build the line
* `text_position`: an absolute position where you want the text to appear, or the word 'center' to center the text.
* `left_bracket` and `right_bracket`: Symbols used to bracket the text.

### Additional Line Styles

The core code only uses a single style, 'default'.  However, you can define additional styles for use in your custom code.  For example, you could define one named 'centered' and use it in custom code as `<%= line_with_text("Some text", "centered")>`.

    centered:
      color: "%xg"
      pattern: "===~~~"
      text_position: center
      left_bracket: '<<<'
      right_bracket: '>>>'

## random_colors

The `%x!` code uses a random color.  This is a tradition from my old softcode system, which changed the colors of the border lines every half a minute.  If you find this too distracting, you can always change the ansi code in the border lines from `%x!` to a specific color.  You can also configure what colors are used when a random color is selected.  For example - if you have a red color palette for your game, you might use only reds.

To change what colors are used by the random selector, list ansi codes - one per line.