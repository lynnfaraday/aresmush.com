---
title: Setting up Guests
description: 
layout: page
tags:
- customization
- guests
---

The default Ares database includes several guest characters, Guest-1 through Guest-4, each with a default password of 'guest'.

You can rename these guests to whatever you like. The game looks for the 'guest' role, not specific names.

## Adding Guests

Four guests should be sufficient, but if you find yourself needing more, you can add new ones simply by assigning a character the 'guest' role. See [Roles tutorial](/tutorials/manage/roles.html) for more information.

## Disabling Guests

If you want to disable guest logins completely, you can change the `guest_role` option in the login config to a non-existent role.