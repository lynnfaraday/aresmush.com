---
title: Custom Server
description: 
layout: tutorial
installTutorial: true
tutorialName: Installing AresMUSH
tutorialIndex: tutorials/install
prevstep: choosing-a-host
nextstep: getting-a-hostname
tags:
- install
---

Because AresMUSH has different needs than Penn or Tiny, most dedicated "MUSH Hosting" plans won't work.  They won't have enough resources or the right software packages.  Instead, you'll want to get a Virtual Private Server (VPS) or similar sort of setup that will let you install the software you need.

This article details the system requirements to help you find the right server and get everything set up.

{% include toc.html %}

## Supported Environment

The supported environment for Ares is:

* Ubuntu Linux. (Ares has been fully tested on Ubuntu 16.04 and 18.04.)
* 1GB RAM.
* Stand-alone server, such as a [Digital Ocean droplet](http://www.digitalocean.com/?refcode=5c07173bc1f2) or [Linode](https://www.linode.com/?r=80bc21df5f92ff5773de26419237b57a203623bd) VPS with a single game running on it.
* Hard drive space is not generally a concern.  In testing, a database with 1000 rooms, exits and characters was about 2MB in size.  Considering most modern servers have multiple GB, the amount used by Ares is insignificant.

Of course you are welcome to use other environments.  However, support for custom setups is limited.  If something isn't working, you may be on your own.  Using a custom environment is only recommended for people with server admin experience (or a server admin buddy).

## Software Packages

There are several software packages that Ares requires, and you'll need to make sure they're installed on your server.

{% note %} 
The [`setup_server`](https://github.com/AresMUSH/aresmush/blob/master/bin/setup_server) script will install all of these packages automatically in the Supported Environment listed above, but it will not work on most custom environments.
{% endnote %}

* Ruby - runs the game code.  We recommend using Ruby Version Manager (RVM) to control which version of Ruby you get.
* EmberJS - builds the web portal code.
* Redis - the database.
* Ruby's Bundler - installs dependencies for the game code.
* Yarn and Node Package Manager (NPM) - installs dependencies for the web portal code.
* Git - updates the code to new versions.

You can use the [`setup_server`](https://github.com/AresMUSH/aresmush/blob/master/bin/setup_server) script as a guide for how to install the necessary software packages on your server.  Go through the script line by line and decide whether that step applies to your environment or needs to be modified.  

For example, this line in `setup_server` installs the web server (nginx):

    echo -e "${ARES_INSTALL_TEXT} Nginx for web server."
    apt-get install -y nginx

You could change that to a different web server (e.g. apache).  You might need a different package management command (e.g. yum instead of apt-get) or just download the installer manually.  You might skip this completely if you already have a web server installed (or only plan on running the game in test mode).

Be advised that changing a step may affect subsequent steps too, so keep a sharp eye out.  If you change the web server to apache, you'll also need to change a later step that sets up the default nginx web server configuration.

## Installing the Game

Once you have all the necessary software packages set up, you'll need to install the game.  

{% note %} 
The [`install`](https://github.com/AresMUSH/aresmush/blob/master/bin/install) script will install the game automatically in the Supported Environment listed above, but it will not work on most custom environments.
{% endnote %}

The basic installation steps include:

* Get the code from GitHub.
* Copy the default game configuration from `aresmush/install/game.distr` to `aresmush/game`.
* Run `bin/configure` to set up game options like the hostname and port.
* Run `bin/wipedb` to initialize the database.
* Run `bin/startares` to start the game.

The [`install`](https://github.com/AresMUSH/aresmush/blob/master/bin/install) script also sets up a few server environment things that need to be done with the ares game user and not the root user.  You should use that script as a guide to ensure that everything is wired up correctly.
