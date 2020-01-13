---
title: Custom FS3Combat New Turn Triggers
description: 
layout: page
tags:
- code
- custom hooks
---

> This [custom code hook](/tutorials/code/custom-hooks.html) is part of the FS3Combat plugin.

If you have [custom combat actions](/tutorials/code/hooks/fs3-actions.html), you may also have some processing that needs to happen at the end of each turn.  Resetting flags, handling special kinds of damage, etc.  

Put your reset code in `plugins/fs3combat/custom_hooks.rb` in the `custom_new_turn_reset` method.

For example, if you had a flag to represent whether someone was under a 'mind trick' influence, you might reset that at the end of the turn.

    def self.custom_new_turn_reset(combatant)
       if (combatant.is_mind_tricked?)
          combatant.update(mind_tricked: false)
       end
    end