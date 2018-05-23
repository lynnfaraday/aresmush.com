---
title: Reset the Master Admin Password
description:
layout: page
tags: 
- manage
- password
- headwiz
---

An admin can change anyone's password except the master admin (named Headwiz by default). If you forget your Headwiz password, there's a special tool to reset it. are a few ways to change it.

## Shell Method

Log into the server shell and change into the aresmush folder.  Run the following script with the desired new password:

    bin/script reset_headwiz_password,somenewpassword

## Tinker Method

If you have access to an admin with tinker privileges, use the [tinker command](/tutorials/code/tinker) to reset it through code.

Change the tinker handler method to be:

    def handle
       headwiz = Game.master.master_admin
       headwiz.change_password("somenewpassword")
    end

Then you can just type `tinker` and it will reset the password.