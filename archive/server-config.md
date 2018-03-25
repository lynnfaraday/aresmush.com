---
title: Configuration Info
description:
layout: page
tags: 
- install
- database
- hosting
- config
---

This article helps you determine what configuration information to use when performing the [Basic Game Configuration](/tutorials/install/basic-config).

## Database Host

If you are using MongoLab, you can find your host and port by logging into your account and looking at your dashboard. It will be shown in a connection string like this: host:port/database_name. For example: ds059170.mongolab.com:51970/footest

{{#pretty-image}}{{urls.media}}/tutorials/install/mongo5.png{{/pretty-image}}

If you installed Mongo yourself, you'll need to know the server it's running on.

## Database Port

The port number the database is running on.  If you're using MongoLab, it can be found next to the host name as explained above.

## Database Name

This was the name you used when you created the MongoDB database.  If you're using MongoLab, it can be found next to the host name as explained above.

## Database User and Password

This is **not** the same as your MongoLab username and password - it's for the custom user you created as part of the database installation.   You can find the username on the MongoLab dashboard under the "Users" tab.  You can also reset the password there if you forgot.

## Server Hostname

You can use the game's IP address, or if you registered a custom [host name](/tutorials/install/getting-a-hostname), you can use that.

> This is the address that people will use when connecting to your game.

## Server Port

Some MUSH hosts will assign you a port number.  If you're using Digital Ocean you can pretty much pick any port you want as long as it's not being used by something else.  4201 has traditionally been the default MUSH port number, so that's a safe bet.

## Name

Give your MUSH a name.

## Category

Pick which category best describes your MUSH for the Ares games folder.

## Description

An ad or brief description of your game.  You can leave this blank and edit it later.

## Website

Your game's website, if you have one.  You can leave this blank and edit it later.
