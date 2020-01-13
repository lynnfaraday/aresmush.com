---
title: Setting up the Data
description: 
layout: tutorial
nextstep: custom-hooks
tutorialIndex: tutorials/code/add-web
addWebTutorial: true
tutorialName: Modifying the Web Portal
tags:
- code
- website
---

In order to show and edit character goals from the web portal, we'll need to actually have some data storage for those goals.  

If you still have the code from the Goals Command Tutorial in your game, you're good to go.  

Otherwise, follow the steps in [Creating a Database Field](/tutorials/code/add-cmd/db-field.html) and then come back here.

{% note %} 
If you don't have the goals command installed, you can manually set character goals for testing using `ruby Character.named("Someone").update(goals: "Test goals")`.
{% endnote %}