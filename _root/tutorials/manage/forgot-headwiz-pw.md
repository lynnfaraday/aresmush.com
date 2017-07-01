---
title: Reset the Headwiz Password
description:
layout: page
tags: 
- manage
- password
- headwiz
---

An admin can change anyone's password except Headwiz. If you forget your Headwiz password, you'll need to use the [tinker command](/tutorials/code/tinker) to reset it through code.

Change the tinker handler method to be:

    def handle
       headwiz = Game.master.master_admin
       headwiz.change_password("somenewpassword")
    end

Then with any regular admin character you can just type `tinker` and it will reset the password.

If you don't have an admin character with tinker access, [ask for help](/feedback).