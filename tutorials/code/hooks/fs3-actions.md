---
title: Custom FS3Combat Actions
description: 
layout: page
tags:
- code
- custom hooks
---

> This [custom code hook](/tutorials/code/custom-hooks.html) is part of the FS3Combat plugin.

Creating your own combat actions takes a fair amount of custom code.  But once you have them, you can easily [register them](https://aresmush.com/tutorials/code/fs3-roadmap.html#adding-a-new-action) with the combat system.

You can register your own custom combat actions in `plugins/fs3combat/custom_hooks.rb` in the `custom_actions` method. This acts as a sort of mini dispatcher for combat actions.  

For example, to add a new action named 'combat/mindtrick' with an action class named `MindTrickAction`, you would do:

    def self.custom_actions
       {
          'mindtrick' => MindTrickAction
       }