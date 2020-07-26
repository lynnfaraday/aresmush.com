---
title: Modifying the Web Request
description: 
layout: tutorial
nextstep: get-template
prevstep: custom-hooks
tutorialIndex: tutorials/code/add-web
addWebTutorial: true
tutorialName: Modifying the Web Portal
tags:
- code
- website
---

The first step is to get the data from the game to the website.  This is done through a *Web Request*.

The actual web request can be found in `aresmush/plugins/profile/web/character_request_handler.rb`, but since there's a custom code hook available we don't need to modify that file directly.

Instead we edit `aresmush/plugins/profile/custom_char_fields.rb` and modify the `get_fields_for_viewing` method.

      def self.get_fields_for_viewing(char, viewer)
        return { goals: Website.format_markdown_for_html(char.goals) }
      end

Here we're using the `format_markdown_for_html` helper method to turn ansi, carriage returns and other formatting codes into HTML-friendly equivalents for display on the web portal.

Note that this code makes goals visible to everybody.  You could optionally use the `viewer` parameter to limit who can see them.

{% tip %}
If you ever need to support multiple custom fields, you have to combine them into a single return statement.

`return { goals: xxx, other: xxx }`
{% endtip %}