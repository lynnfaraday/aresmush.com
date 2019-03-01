---
title: Configuring the Database
layout: page
tags:
- config
---

Your database was set up initially during the game installation.  If for some reason your database server changes, or you need to reset the password, you'll need to update the configuration.

To configure the database:

1. Select Admin -> Setup
2. Edit`database.yml` to edit the database URL -or- `secrets.yml` to edit the password.
3. Shut down and restart the game.  (See the tutorials at [aresmush.com](http://www.aresmush.com) if you need help doing this.)

{% note %} 
Database configuration changes will not take effect until the game is restarted.
{% endnote %}

## url

This is the URL and port number to access the database.

## path

Redis stores its data in a file on disk, usually named `dumb.rdb`.  This is the path to that file.  In the default installation, it's `/var/lib/redis/dump.rdb`.

## password

In the `secrets.yml` configuration is the database password.