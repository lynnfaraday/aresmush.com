---
title: Modifying Chargen
description:
layout: tutorial
prevstep: edit-template
nextstep: next-steps
tutorialIndex: tutorials/code/add-web
addWebTutorial: true
tutorialName: Modifying the Web Portal
tags: 
- code
- website
---

We addressed editing goals from the character profile page, but what about during character creation?  That actually will require us to modify another set of templates and handlers.  Here's a starting point - look for how 'rp hooks' are done and see if you can figure out how to add goals to chargen as well:

- Chargen request handler: `aresmush/plugins/chargen/web/chargen_char_request_handler.rb`
- Chargen save request handler: `aresmush/plugins/chargen/web/chargen_save_request_handler.rb`
- Chargen template: `ares-webportal/app/templates/chargen.hbs`

{% tip %} 
RP Hooks has a configurable blurb that gets displayed as instructions above the data entry field in chargen.  You don't need a config option for goals - just put some plain text there instead.
{% endtip %}