---
title: Modifying the Web Request
description: 
layout: tutorial
nextstep: get-template
prevstep: data
tutorialIndex: tutorials/code/add-web
addWebTutorial: true
tutorialName: Modifying the Web Portal
tags:
- code
- website
---

The first step is to get the data from the game to the website.  This is done through a *Web Request*.

{% note %} 
You can manually set character goals for testing using `ruby Character.find_one_by_name(\"Someone\").update(goals: \"Test goals\")`.
{% endnote %}


For goals, we can modify the exiting character profile web request, found in `aresmush/plugins/profile/web/character_request_handler.rb`.  At the end of the file, you'll see the return value is a big hash containing all the profile data:

    {
          id: char.id,
          name: char.name,
          ...
    }


All we need to do is modify this hash to include the goals:

    {
          id: char.id,
          name: char.name,
          goals: char.goals,
          ...
    }

There's one catch though.  Using just `char.goals` by itself will return a plain string.  That's fine if the goals don't contain any formatting codes, but it's quite likely that someone would use ansi or carriage returns in their goals.  We'll want to format it more nicely.  Fortunately there's a helper method to do that for us:

    {
          id: char.id,
          name: char.name,
          goals: Website.format_markdown_for_html(char.goals),
          ...
    }

One more catch:  We may want our goals to be private.  That's up to you, really.  With the code shown above, goals will be visible to everyone.  You can restrict it using code similar to what's done for backgrounds.  For example, the profile request supplies background only if the character is on the roster, the player has expressly shared their background, or the enactor has permission to see it.  Otherwise the background will be `nil`.

    show_background = (char.on_roster? || char.bg_shared || Chargen.can_view_bgs?(enactor)) && !char.background.blank?
    {
          id: char.id,
          name: char.name,
          background: show_background ? Website.format_markdown_for_html(char.background) : nil,
          ...
    }

Once the goals are added, type `load profile` from the game to reload the code.

{% note %} 
You won't be able to see any changes yet because we haven't modified the website itself.  We'll do that in the next step.
{% endnote %}