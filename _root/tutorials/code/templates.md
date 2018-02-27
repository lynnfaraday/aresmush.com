---
title: Templates
description:
layout: page
tags: 
- code
- templates
---

Templates are a special code class that handle complex information display.  There are templates for all sorts of things in the game:  the who/where list, mail messages, forums, character sheets, profile, descriptions and more.

## The Template Engine

Templates use the Ruby [ERB Template system](http://www.stuartellis.name/articles/erb/), which mingles text with embedded Ruby code.  (Similar to embedded Python for those familiar with that.)

Here's an example of a simple ERB template for a character description:

    <%= header %>
    %xh<%= char.name %>%xn
    <%= military_name(char) %>
    <%= divider %>
    <%= char.description %>
    <%= divider %>
    %xhPlayed By:%xn <%= char.actor %>
    <%= footer %>

Anything inside `<%= %>` brackets is evaluated as code by the template engine.   Here's what that would look like in a MU client:

    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
    Stirling
    Major Nyssa "Whisper" Stirling
    ------------------------------------------------------------------------------
    Fiery red hair falls down past this woman's shoulders, usually bound in a sensible braid. Her average height and lithe build aren't very remarkable, but they belie a well-toned muscular form. She's wearing standard-issue green fatigues, the pins showing a rank of Major.
    ------------------------------------------------------------------------------
    Played By: Jessica Chastain
    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+

## Template Renderer

Templates use a "renderer" class to help decide what to show.  Technically you could put all the code logic into the ERB file itself, but that gets pretty ugly pretty fast.  It's better to keep the decision-making in a separate file.

All template renderers have some common helpers.   The `<%= header %>`, `<%= footer %>` and `<%= divider %>` we saw in the example above are helpers that use the lines defined in the game's [Skin Configuration](/tutorials/config/skin).  There are also left/right/center methods for justifying text.  They are used like so: `left(text, width, padding_char)`.

A template can also define its own custom helpers, like the `<%= military_name(char) %>` helper used in the description example.  This strings together the character's rank (if applicable), name and callsign (if applicable) into a single string.

## Using Templates

To use a template, you simply instantiate the renderer class and call the render method.  For example:

        template = WhoTemplate.new online_chars
        client.emit template.render

Many renderers expect some parameters passed in - a character, a room, or - in this case - the list of characters who are currently online.  Templates handle _how_ to display data, but other code should figure out _what_ to show.

## The One-Line Trick

ERB Templates take linebreaks literally.  If text appears on a different line in the template file, it'll show up on a different line on the screen.

The only trouble is that sometimes MUSHes have a lot of different fields on one line of the screen - like a who list with six columns.  If you tried to jam the code for every column into one line of the template, it would be really ugly.

Fortunately there's an ERB trick for this.  If you end a line with a field like `<% -%>` instead of `<% %>`, then there won't be a linebreak displayed between those two lines.

For example: 
 
    <% chars.each do |c| %>
    <%= status_color(c) %><%= left( status(c), 7 ) %><%= "%xn" -%>
    <%= left( c.name, 23 ) -%>
    <%= left( department(c), 20 ) -%>
    <% end >

The status, name and department fields will all appear on the same line.