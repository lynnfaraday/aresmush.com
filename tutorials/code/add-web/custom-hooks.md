---
title: About Custom Hooks
description: 
layout: tutorial
nextstep: get-request
prevstep: data
tutorialIndex: tutorials/code/add-web
addWebTutorial: true
tutorialName: Modifying the Web Portal
tags:
- code
- website
---

Just as the [custom plugin](/tutorials/code/add-cmd/custom-plugin.html) gives you a place to put your custom MUclient-side commands, the web portal has some dedicated *custom code hooks* where you can put custom web stuff.  Custom hooks insulate you somewhat from other game code, preventing annoying collisions between your changes and future changes to the core code.

Not everything has a custom code hook, just commonly-modified sections like character fields, scene actions, and [so forth](/tutorials/code/custom-hooks.html).  If the code you want to change doesn't have a custom hook, you'll have the same basic components, but you'll have to modify the core code files.