---
toc: ~config~ Configuring the Game
title: Configuring the database.
---
# Configuring the Database

Your database was set up initially during the game installation.  If for some reason your database server changes, or you need to reset the password, you'll need to update the configuration.

To configure the database:

1. Go to the Web Portal's Admin screen.  
2. Select 'Advanced Config'.
3. Select `database.yml` to edit the database URL -or- select `secrets.yml` to edit the password.
4. Shut down and restart the game.  (See the tutorials at [aresmush.com](http://www.aresmush.com) if you need help doing this.)

> **Important!** Database configuration changes will not take effect until the game is restarted.

## url

This is the URL and port number to access the database.

## path

Redis stores its data in a file on disk, usually named `dumb.rdb`.  This is the path to that file.

## password

In the `secrets.yml` configuration is the database password.