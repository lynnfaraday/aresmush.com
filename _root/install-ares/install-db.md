---
title: Install the Database
description:
layout: install-ares
prevstep: getting-a-hostname
nextstep: mongolab
tags: 
- install
- database
---

Penn and Tiny store their data in a single text file, but Ares uses a full database: [MongoDB](https://www.mongodb.com/). You're probably familiar with SQL databases. MongoDB is similar, but without the SQL.

The database is separate from the game.  Although they *can* live on the same server, I recommend using the cloud Mongo service MongoLab.  It's simple and free, and instead of using clunky command line tools you get a nice graphical interface for managing your database.  See **[Getting Started with MongoLab](/install-ares/mongolab)** for step-by-step instructions.

If you prefer to run MongoDB locally on your MUSH server, see [Installing MongoDB Locally](install-mongodb).