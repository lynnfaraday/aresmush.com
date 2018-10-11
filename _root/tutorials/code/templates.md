---
title: Templates
description:
layout: page
tags: 
- code
- templates
---

Templates are a special code class that handle complex information display.  There are templates for all sorts of things in the game:  the who/where list, mail messages, forums, character sheets, profile, descriptions and more.

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

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

## Customizing a Template

A few templates will automatically be customized based on your game configuration.  The 'who' template lets you pick fields and the 'profile' template automatically shows whatever demographics you've configured.

You can customize other templates too - it just requires you to change the template code.  Just edit the ERB file directly.  Usually they are located in a `templates` folder within each plugin - for example `aresmush/plugins/describe/templates/character.erb`.   In our desc template above, for example, you might remove the "military_name" line if you just wanted to show the character's basic name instead of their full name plus rank.

## Template Renderer

Templates use a "renderer" class to help decide what to show.  *Technically* you could put all the code logic into the ERB file itself, but that gets really ugly really fast.  It's better to keep the decision-making in a separate file.

All template renderers have some common helpers.   The `<%= header %>`, `<%= footer %>` and `<%= divider %>` we saw in the example above are helpers that use the lines defined in the game's [Skin Configuration](/tutorials/config/skin).  There are also left/right/center methods for justifying text.  They are used like so: `left(text, width, padding_char)`, `center(text, width, padding_char)`, etc.

A template can also define its own custom helpers.  These helpers are located in the same folder as the ERB file, named similarly but with a 'rb' extension instead of 'erb'.  For example:  `aresmush/plugins/describe/templates/character_template.rb` contains the `military_name` helper used in the description example.

    def military_name(char)
      Ranks.military_name(char)
    end

> <i class="fa fa-info-circle"></i> **Tip:** Some of the template renderers share common helpers with another template.  You'll see this when the renderer has a line like `include CharDescTemplateFields` near the top of the file.  For example, the description and glance templates share some helpers from `plugins/describe/char_desc_template_fields.rb`.  If you don't see the helper you're looking for (e.g. military_name), look for a shared helper file.

## Using Templates

To use a template, you simply instantiate the renderer class and call the render method.  For example:

        template = WhoTemplate.new online_chars
        client.emit template.render

Many renderers expect some parameters passed in - a character, a room, or - in this case - the list of characters who are currently online.  Templates handle _how_ to display data, but other code should figure out _what_ to show.

## Common Templates

Ares provides a few common templates in the Utils plugin that are used everywhere.  The two most common are `BorderedDisplayTemplate` and `BorderedListTemplate`:

    ------------------------------
              Title
              SubTitle
    Text
    SubFooter
    ------------------------------

> <i class="fa fa-info-circle"></i> **Tip:** Everything except the text/list is optional, so you can customize the display as desired.

There's also a table, a line with text in the middle, and a standard page footer for multi-page commands.  See the code in `aresmush/plugins/utils/templates` for details.

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