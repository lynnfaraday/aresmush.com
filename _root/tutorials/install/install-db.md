---
title: Install the Database
description:
layout: install-ares
prevstep: getting-a-hostname
nextstep: install-game
tags: 
- install
- database
---

Penn and Tiny store their data in a single text file, but Ares uses a full database: [Redis](http://redis.io/).  You may already be familiar with SQL databases. Redis is similar, but without the SQL.

If you used the [Digital Ocean](/tutorials/install/digital-ocean) setup instructions, Redis will already be set up for you and running on port 6379.  If not, see the [System Requirements](/tutorials/install/system-requirements).