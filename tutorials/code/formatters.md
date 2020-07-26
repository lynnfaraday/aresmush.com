---
title: Formatting
description: 
layout: page
tags:
- code
- plugins
- commands
---

Ansi formatting and substitutions like %r/%b are handled by the emit methods automatically, but there are a few other formatters that can be used in commands.

{% include toc.html %}

## Pose Formatter

Given some text and the enactor's name, the `PoseFormatter` class will format the text in the same way that a pose would.

    "Hello.  -->  Faraday says, "Hello.""
    :waves.  -->  Faraday waves.
    etc.


## Time Formatter

Given a duration (in seconds), the `TimeFormatter` class will turn it into the familiar MUSH duration string like 2d or 5m.

## Markdown and HTML Formatters

Because the game engine side displays information in ASCII but the website uses HTML, there are some formatters for converting things back and forth.

Let's say we start with a string for some character notes that includes a mix of markdown and MUSH formatting:

    notes = "Some info\nanother line with **bold**%Rmore stuff with %xbblue%xn"

Notice that we can use either traditional ruby linebreaks (\n) or MUSH linebreaks (%R) interchangeably.

### Displaying in MUSH

The traditional emit methods and templates all handle markdown formatting automatically.

    client.emit(notes)

### Displaying on Web

To **display** this string on the website, we need to convert our markdown/MUSH formatting to HTML.  Our web request might contain something like this:

    { notes: Website.format_markdown_for_html(notes) }

Then in the web code, we need to use the ANSI helper to display it properly:

    <AnsiFormat @text={{model.notes}} />

### Editing on Web

If we wanted to display the notes in an input box for editing on the website, we want to show the ansi/formatting codes.  It's also helpful to turn the MUSH %R linebreaks into regular linebreaks for easier editing. Our web request might contain something like this:

    { notes: Website.format_input_for_html(notes) }

In the web code, we can use a regular HTML input box or the fancier Ares markdown editor:

    <MarkdownEditor @text={{model.notes}} />

### Saving Web Input

When the website sends the edited text back to the game, we need to turn the regular linebreaks back into MUSH linebreaks (%R) before saving it.  Our save handler might look something like this:

    notes = Website.format_input_for_mush( request['notes'] )