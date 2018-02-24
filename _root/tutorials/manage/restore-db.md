---
title: Restoring the Database
description:
layout: page
tags: 
- manage
- database
- backup
---

Setting up [automatic backups](/tutorials/manage/backups) of your game is important.  In the unlikely event that disaster strikes, you'll have a backup copy of your game's database and files. This article describes how to restore the game from a backup.

## Restoring from a Digital Ocean Weekly Backup

If you elected to use Digital Ocean's backup feature, see DO's [backups tutorial](https://www.digitalocean.com/community/tutorials/an-introduction-to-digitalocean-backups) for help restoring.

## Restoring Game Files

You can restore game configuration files, uploads, and everything else in the `aresmush/game` directory just by using a FTP client to upload files from your backup copy.   After the upload, run `load config` in-game to reload the configuration settings.

## Restoring the Database

To restore the database:

1. Stop the database service.  In the [server shell](/tutorials/install/server-shell), type `sudo service redis stop`.
2. Copy the `dump.rdb` file from your back copy into the database data path.  Typically this is `/var/lib/redis/dump.rdb`.
3. Restart the database service by typing `sudo service redis start` in the server shell.

> **Note:** If you used a non-standard installation, your database commands and file path may be different than what's shown above.

## Restoring Code

If you use GitHub to store your code, you can use the `git` commands to clone a stable version of the code from your repository.

If you don't use GitHub, you'll need to manually restore the `aresmush` and `ares-webportal` directories, typically using FTP.