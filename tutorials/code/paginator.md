---
title: Multi-Page Output (Paginator)
description: 
layout: page
tags:
- code
- plugins
- commands
---

When you have a big list of items, the `Paginator` helper class makes it easy to display it one page at a time.  

## Page Property

The Ares [Command Format](/tutorials/code/commands.html) has a built-in way for the user to request multiple pages.  The page number appears after the command root but before the switch.  For example:  actors2 or jobs2/new.  

The page number gets placed into the `page` property of the command class.  So you can do `cmd.page` just like you do `cmd.root` or `cmd.switch`.

## Bordered Page List Template

The `BorderedPagedListTemplate` template is the simplest way to use the paginator. It will get you a display like:

    --------------------------------
    TITLE
    item
    item
    item
    --------------------------------
    page 1 of 4
    --------------------------------

You use this template by passing in the list, the current page (from the `cmd.page` helper), the number of items per page, and any titles/subtitles.

        template = BorderedPagedListTemplate.new list, cmd.page, 25, "Title"
        client.emit template.render

## Custom Templates

You can also use the paginator directly in your own templates.

First, call `Paginator.paginate` to figure out which objects (if any) would be on the requested page.  You can check if the requested page is out of bounds and return the paginator's error message if so.  For example:

        paginator = Paginator.paginate(full_list, cmd.page, items_per_page)
        if (paginator.out_of_bounds?)
          client.emit_failure paginator.out_of_bounds_msg
          return
        end

In your template, you can use `paginator.page_items` to iterate over every item on the current page.

    <% paginator.page_items.each do |p| %>
    <% end %>

And finally you'll want the 'page x of y' footer across the bottom.

    <%= paginator.page_footer %>