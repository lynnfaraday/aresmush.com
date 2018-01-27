---
toc: ~config~ Configuring the Plugins
title: Configuring the roles system.
---
# Configuring the Roles System

To configure the Roles plugin:

1. Go to the Web Portal's Admin screen.  
2. Select Advanced Config.
3. Edit `roles.yml`

## default_roles

You can configure the list of roles that everyone starts with.  By default, this is just the 'everyone' role.

## restricted_roles

Restricted roles can only be assigned and removed by the master admin character (Headwiz).  By default, this includes the 'admin' role, meaning that only the master admin can add/remove other admins.

## admin_list_roles

You can list roles that show up on the admin list.  For example, if you wanted to have the admin list show Code Staff and App Staff separately, you could create/assign separate roles for those people and then configure the admin list like so:

    admin_list_roles:
        - code_staff
        - app_staff