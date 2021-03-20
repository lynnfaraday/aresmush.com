---
title: Using Formatting Codes
description: 
layout: page
tags:
- ansi
- colors
---

Ares provides a number of formatting codes, which can be used pretty much anywhere: templates, poses, descriptions, and more.  

## MUSH Format Codes

    %r - A linebreak
    %b - A single blank space
    %t - Five blank spaces (like a tab)
    %lh, %lf, %ld, %la - One of the border lines - header, footer, divider, alt-divider
    %x or %c - Ansi color.  See below.

## Markdown

Most text also supports [Markdown](/help/markdown.html), which is simple markup that can be rendered as text in the MUSH client (e.g., `**bold text**`) or as HTML on the web portal (**bold text**).

## Ansi Color

Ares allows the use of ansi color codes in virtually all text.  The game supports the FANSI 256 color standard, and colors will be converted back to standard ansi for players who indicate they don't want FANSI.  

You can use ansi codes in game text by using `%x` or `%c` followed by the ansi color code.  For example, `%xb` is blue, and `%x33` is an aqua color.  

Color will stay on until you turn it off.  Always use the normal color `%xn` or `%cn` at the end of your colored string to return the color to normal.  For example:

    This is my %xbblue%xn text.

The following images show the available colors.  

{% note %} 
The exact appearance of colors can vary in different MU clients. If you use FANSI colors (any of the colors with a number in them) and the client doesn't support FANSI, the closest approximate ANSI color will be used instead.
{% endnote %}

{% include pretty_image.html file='colors/1.png' %}

{% include pretty_image.html file='colors/2.png' %}
{% include pretty_image.html file='colors/3.png' %}
{% include pretty_image.html file='colors/4.png' %}
{% include pretty_image.html file='colors/5.png' %}
{% include pretty_image.html file='colors/6.png' %}
{% include pretty_image.html file='colors/7.png' %}
{% include pretty_image.html file='colors/8.png' %}
{% include pretty_image.html file='colors/9.png' %}
{% include pretty_image.html file='colors/10.png' %}
{% include pretty_image.html file='colors/11.png' %}