---
title: Getting Started With MongoLab
description:
layout: tutorial
tutorialName: Installing AresMUSH
tutorialIndex: tutorials/install
prevstep: install-db
nextstep: install-game
tags: 
- install
- database
---

Here are step-by-step instructions for setting up Ares with [MongoLab](https://mongolab.com/), a cloud hosting service for MongoDB.

> <i class="fa fa-exclamation-triangle"></i> **Note:**  These instructions were current as of the time of this writing, but MongoLab can change their screens at any time.  If you find these instructions are incorrect, plase [let me know](/feedback)!

1. Create a MongoLab account.  
2. Click 'Create New' to create a new db.
   {{#pretty-image}}{{urls.media}}/tutorials/install/mongo1.png{{/pretty-image}}
3. Choose the options for your db.
    * Choose a provider you like (it doesn’t matter).
    * Choose a location close to your MU* server (or close to you).
    * Choose “single-node’ plan.
    * Choose 'sandbox (free)'.
    * Enter a db name, like  "mymush_db".
    {{#pretty-image}}{{urls.media}}/tutorials/install/mongo2.png{{/pretty-image}}
4. Back at the dashboard, select your new db.
    {{#pretty-image}}{{urls.media}}/tutorials/install/mongo3.png{{/pretty-image}}
5. You should see an alert telling you to create a user.  Click on that to create a user so the MUSH can talk to the dabase.  **Don't use the same user and password as your MongoLab account for security reasons.**
     
     Note: This same screen also shows you the hostname information.  You will need the username, password, db name and hostname when you set up the game in a minute, so make a note of them.
    {{#pretty-image}}{{urls.media}}/tutorials/install/mongo4.png{{/pretty-image}}
6. If you want multiple database admins, you can create a second account user under Account -> Account Users -> Add Account User.  Give that person their own username and password, and they'll be able to log in and manage the database too.

You're all set!