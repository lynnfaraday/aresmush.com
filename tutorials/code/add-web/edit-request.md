---
title: Modifying the Edit Request
description:
layout: tutorial
nextstep: edit-template
prevstep: get-template
tutorialIndex: tutorials/code/add-web
addWebTutorial: true
tutorialName: Modifying the Web Portal
tags: 
- code
- website
---

Everything we added so far lets us *view* our goals on the web portal, but what if we want to edit them too?  This requires us to modify another pair of web requests.

## Edit Request

The edit request is used when someone wants to edit a character's profile.  It supplies the data for editing, which is subtly different from the data for viewing.  In particular, we use a *different* helper when formatting markdown data for input instead of output.  This helper converts %R's to linebreaks, but leaves ansi codes alone.

The edit request handler lives here:  `aresmush/plugins/profile/web/profile_edit_request_handler.rb`

    {
        id: char.id,
        rp_hooks: Website.format_input_for_html(char.rp_hooks),
        goals: Website.format_input_for_html(char.goals),
    }

## Edit Save Request

There's a separate request when the user clicks the 'save' button on the web portal.  It lives here: `aresmush/plugins/profile/web/profile_save_request_handler.rb`.

This handler does the actual *updating* of the character data.  Our data comes in the `request.args` variable.  We can use *yet another* helper method to format our input for MUSH.  This converts line breaks back into %r's and does a few other things to make the website entry suitable for storage.

        char.update(rp_hooks: Website.format_input_for_mush(request.args[:rp_hooks]))
        char.update(goals: Website.format_input_for_mush(request.args[:goals]))

{% include tip.html content="Though it's not covered by this tutorial, it's useful to note that there's a lot of other handling at the top of these requests to check things like whether the user is logged in and has access to edit the character.  Always be sure to check permissions in your web requests." %}

