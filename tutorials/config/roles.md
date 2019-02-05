---
title: Configuring the Roles System
layout: page
tags:
- config
---

To configure the Roles plugin:

1. Select Admin -> Setup.
2. Edit `roles.yml`

## Before You Start

Read the [roles](/tutorials/manage/roles.html) tutorial to find out how AresMUSH uses roles and permissions work.

## default_roles

You can configure the list of roles that everyone starts with.  By default, this is just the 'everyone' role.  List the roles one per line with dashes in front, like so:

    - everyone

## restricted_roles

Restricted roles can only be assigned and removed by the master admin character (Headwiz).  By default, this includes the 'admin' role, meaning that only the master admin can add/remove other admins.  List the roles one per line with dashes in front, like so:

    - admin

## admin_list_roles

You can list roles that show up on the admin list.  For example, if you wanted to have the admin list show Code Staff and App Staff separately, you could create/assign separate roles for those people and then configure the admin list like so:

    - code_staff
    - app_staff