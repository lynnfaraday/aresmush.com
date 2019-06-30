---
title: Wiki Extensions
description: 
layout: page
tags:
- code
- webportal
---

The wiki supports a number of Markdown extensions designed to replicate Wikidot syntax and provide some MU-specific utilities like a scene list.  You can edit the code to add new extensions.

Wiki extensions live in the `aresmush/plugins/website/wiki_markdown` folder.

{% include toc.html %}

## Markdown Processing

Before trying to create your own extension, it's important to understand how the markdown processing works.  The overall goal is to convert Markdown text to HTML, but there are several steps involved:

### Pre-Processing

Pre-processing extensions operate **before** the other Markdown has been handled, and they usually output Markdown.  For example:

    [http://somewhere Wikidot Style Link]

becomes:

    [Wikidot Style Link](http://somewhere)

### Processing

This is the core of the Markdown processing engine.  It converts standard Markdown extensions to HTML.  Ares uses the [Redcarpet](https://github.com/vmg/redcarpet) markdown engine.

### Post-Processing

Post-processing extensions operate **after** the other Markdown has been convered to HTML.  They output HTML.  For example:

    [[musicplayer E5TsA6CHpII Description]]

becomes:

    <div class="row musicplayer-wrap">
    ... other musicplayer HTML
    </div>

### Finalizing

The finalizer is a special extension that operates **at the end** after everything else has been converted.  It has the benefit of seeing the entire text.

For example, the `[[toc]]` extension needs to know all of the headings in the entire text so it can build the table of contents.

## Creating an Extension

An extension operates on a single line of Markdown text.  It needs to be a class that implements two methods:

* `regex` - A regular expression that examines the line and figures out if it matches the extension's sought-after tag.
* `parse` - A method that operates on the line and returns new text (either Markdown for a preprocessing extension, or HTML for a postprocessing extension).  The `matches` parameter is the result of the regex call.

For example, the StartCollapsibleMarkdownExtension class matches text in the form `[[collapsible Show More]]`.  The button text piece is enclosed in () to make it a regex match group, and can be accessed via `matches[1]` in the parse method.

    class StartCollapsibleMarkdownExtension
      def self.regex
        /\[\[collapsible ([^\]]*)\]\]/i
      end
      
      def self.parse(matches, sinatra)
        button_text = matches[1]
        ...      
      end
    end

## Extension Templates

Several extensions use Handlebars templates, similar to the web portal, to help format their output.  For example, the music player extension has a fair bit of HTML involved.  Create a template by placing it in `aresmush/plugins/website/templates` and then use it in your extension class.  You can even pass variables to it.  For example, the collapsible extension uses a template:

    template = HandlebarsTemplate.new(File.join(AresMUSH.plugin_path, 'website', 'templates', 'collapsible.hbs'))
    data = { "button_text" => button_text, "id" => SecureRandom.uuid.gsub('-','') }
    template.render(data) 

## Registring an Extension

Extensions must be registered by adding them to the list in `WikiMarkdownExtensions`.  Just add the class name to either the pre- or post-processing extension lists.

{% note %} 
 Not sure whether to make your extension a pre- or post-processing one?  As a general rule, pre-processing extensions output Markdown and are pretty simple.  Post-processing extensions are complex, may involve templates, and may contain Markdown inside them.
{% endnote %}

## Finalizer

The `MarkdownFinalizer` class performs the final processing - things that examine the entire text after all other Markdown formatting has been done.