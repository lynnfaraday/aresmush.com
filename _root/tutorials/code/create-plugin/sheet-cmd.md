---
title: Sheet Command
description:
layout: create-plugin
prevstep: set-ability-cmd
nextstep: app-review-cmd
tags: 
- code
- plugins
---

Now that we have some abilities, we can create a character sheet command to show them.

    sheet <name>

## Command Class

The command class for this one is pretty simple, allowing an optional target name that defaults to the enactor name.  This version makes all character sheets public, but you could easily add an error check to restrict viewing if you wanted.

    module AresMUSH    
      module Cortex
        class SheetCmd
          include CommandHandler
          attr_accessor :target_name
      
          def parse_args
             self.target_name = cmd.args ? titlecase_arg(cmd.args) : enactor_name
          end
      
          def handle
            ClassTargetFinder.with_a_character(self.target_name, client, enactor) do |model|
               template = SheetTemplate.new(model)
               client.emit template.render
            end
          end
        end
      end
    end

## Sheet Template

The real work lies in generating the [Template](/tutorials/code/templates).  Without a template, we'd have to build up the sheet output line by line, which would be a real chore.  Templates provide a way to cleanly render multi-line output.

The real template has a bunch of pieces to show attributes, skills and traits.  We're just going to examine the attribute section.  The others are very similar.

### Template ERB File

The first part of the template is the ERB (Embedded Ruby) file.  This mixes plain text and Ruby code.

This snippet shows the header line, character sheet title, attributes title, the attributes display, and then the footer line:

    %lh
    <%= t('cortex.sheet_title', :name => char.name) %>
    <%= line_with_text t('cortex.attributes_title') -%>
    <% attrs.each do |a| -%>
    <%= a -%>
    <% end %>
    %lf

Here are a few quick notes about template code.  For more information, see [Template](/tutorials/code/templates).

* We can use our template helper methods, like `line_with_text` and `left()` to help format things.
* `<%= ruby code %>` displays the result of the Ruby code.  For example:  <%= t('key') %> will display the translated string.
* `<% ruby code %>` (without the equals sign) is a non-display version, typically used in 'each' loops.
* We can use formatting codes like `%xh` for bold and `%lh` for the header line.
* There's no need to use %R for linebreaks; whenever there's a new line in the file - there will be a new line in the output.  A line that ends in `-%>` won't have a linebreak after it though.

### Template Renderer

In the above example, we used two things - char and attrs - that don't appear anywhere in the ERB file.  Where did they come from?   Every template has a helper class called a Renderer.  This defines methods and variables that can be accessed by the template's ERB file.  It also provides the base `render` method called by the command class.

    module AresMUSH    
      module Cortex
        class SheetTemplate < ErbTemplateRenderer
          attr_accessor :char
      
          def initialize(char)
            @char = char
            super File.dirname(__FILE__) + "/sheet.erb"
          end
      
          def attrs
            @char.cortex_attributes.to_a.sort_by { |a| a.name }
              .each_with_index
                .map do |a, i| 
                  linebreak = i % 2 == 0 ? "\n" : ""
                  title = left("#{ a.name }:", 15)
                  step = left(a.die_step, 20)
                  "#{linebreak}%xh#{title}%xn #{step}"
            end
          end
        end
      end
    end

The `char` variable is passed in from the command class when it does `template = SheetTemplate.new(model)`.

The `attrs` method loops through each of the attributes and formats them for display.  Technically we _could_ do this in the ERB file.  But since we want to show two attributes on each line in columns, the ERB template code would look pretty messy.  It's cleaner to do it this way.  In general, you want to minimize the amount of code that appears in your ERB file and leave it to simple data access like `<%= char.name %>` or `<% attrs.each >`.