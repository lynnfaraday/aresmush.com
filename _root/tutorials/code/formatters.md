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

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Pose Formatter

Given some text and the enactor's name, the `PoseFormatter` class will format the text in the same way that a pose would.

    "Hello.  -->  Faraday says, "Hello.""
    :waves.  -->  Faraday waves.
    etc.


## Time Formatter

Given a duration (in seconds), the `TimeFormatter` class will turn it into the familiar MUSH duration string like 2d or 5m.

## Paginator

When you have a big list of items, the `Paginator` helper class makes it easy to display it one page at a time.

You can use the `Paginator.paginate` method to figure out which objects (if any) would be on the requested page.  

        paginator = Paginator.paginate(full_list, cmd.page, items_per_page)

> <i class="fa fa-info-circle"></i> **Tip:** Remember that the Ares [Command Format](/tutorials/code/commands) has a built-in way for the user to request multiple pages.  The page number appears after the command root but before the switch.  For example:  actors2 or jobs2/new.

You can then call methods like:

* `paginator.out_of_bounds` - Tells if the requested page was valid.
* `paginator.page_items` - The list of items on the current page.
* `paginator.page_footer` - The standard footer in the form  "page x of y".
