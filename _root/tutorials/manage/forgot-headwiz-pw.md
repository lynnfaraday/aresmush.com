---
title: Reset the Headwiz Password
description:
layout: page
tags: 
- manage
- password
- headwiz
---

An admin can change anyone's password except Headwiz. If you forget your Headwiz password, you'll need to use the [tinker command](/code/tinker] to reset it through code.

    def handle
       headwiz = Game.master.master_admin
       headwiz.change_password("somenewpassword")
       headwiz.save!
    end
