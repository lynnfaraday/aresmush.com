---
title: Custom Chargen Approval Triggers
description: 
layout: page
tags:
- code
- custom hooks
---

> This [custom code hook](/tutorials/code/custom-hooks.html) is part of the Chargen plugin.

With custom code, you can create triggers that run when a character is approved.  You could use this to assign a role or add someone to a channel based on a group value (e.g. faction or department).

Edit `aresmush/plugins/chargen/custom_approval.rb` and make the `custom_approval` method do whatever you want to do when someone is approved.  

Here's an example of how to assign a role based on the character's faction (assuming you've already created the roles using `role/create` ahead of time).

    def self.custom_approval(char)
      faction = char.group("Faction")
      role = Role.find_by_name(faction)
      if (role)
        char.roles.add role
      end
    end