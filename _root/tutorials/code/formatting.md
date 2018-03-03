---
title: Using Formatting Codes
description:
layout: page
tags: 
- ansi
- colors
---

Ares provides a number of formatting codes, which can be used pretty much anywhere: templates, poses, descriptions, and more.  

## Format Codes

    %r - A linebreak
    %b - A single blank space
    %t - Five blank spaces (like a tab)
    %lh, %lf, %ld, %la - One of the border lines - header, footer, divider, alt-divider
    %x or %c - Ansi color.  See below.

## Ansi Color

Ares allows the use of ansi color codes in virtually all text.  The game supports the FANSI 256 color standard, and colors will be converted back to standard ansi for players who indicate they don't want FANSI.  

You can use ansi codes in game text by using `%x` or `%c` followed by the ansi color code.  For example, `%xb` is blue, and `%x33` is an aqua color.  The following images show the available colors.   

> **Note:** The exact appearance of colors can vary in different MU clients.

{{#pretty-image}}/assets/media/colors/1.png{{/pretty-image}}

{{#pretty-image}}/assets/media/colors/2.png{{/pretty-image}}
{{#pretty-image}}/assets/media/colors/3.png{{/pretty-image}}
{{#pretty-image}}/assets/media/colors/4.png{{/pretty-image}}
{{#pretty-image}}/assets/media/colors/5.png{{/pretty-image}}
{{#pretty-image}}/assets/media/colors/6.png{{/pretty-image}}
{{#pretty-image}}/assets/media/colors/7.png{{/pretty-image}}
{{#pretty-image}}/assets/media/colors/8.png{{/pretty-image}}
{{#pretty-image}}/assets/media/colors/9.png{{/pretty-image}}
{{#pretty-image}}/assets/media/colors/10.png{{/pretty-image}}
{{#pretty-image}}/assets/media/colors/11.png{{/pretty-image}}