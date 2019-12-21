---
title: Reset the Master Admin Password
description: 
layout: page
tags:
- manage
- password
- headwiz
---

An admin can change anyone's password except the master admin (named Headwiz by default). If you forget your Headwiz/God password, here are a few ways to change it.

## Shell Method

Log into the server shell and change into the aresmush folder.  Run the following script with the desired new password:

    bin/script reset_headwiz_password,somenewpassword

## Tinker Method

If you have access to an admin with tinker privileges, use the [tinker command](/tutorials/code/tinker.html) to reset it through code.

Change the tinker handler method to be:

    def handle
       headwiz = Game.master.master_admin
       headwiz.change_password("somenewpassword")
    end

Then you can just type `tinker` and it will reset the password.

## Forgotten Ares Shell Password

If you've forgotten your ares user password to the server shell, you can use the 'root' user to reset it.  Just type `passwd ares` and enter a new password.

{% tip %}
This is one of the rare instances where you'll actually want to use the root user.  Most other Ares operations should be done with the 'ares' user.
{% endtip %}

If you've _also_ forgotten your root user password, you can reset it in your Digital Ocean account.  See the DO help article [reset droplet root passwords](https://www.digitalocean.com/docs/droplets/resources/reset-root-password/) for details.