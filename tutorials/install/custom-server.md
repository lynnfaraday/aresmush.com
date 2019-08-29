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

{% warning %} 
The automated install scripts **only** work on the supported environment - a stand-alone Digital Ocean droplet with only a single MUSH running on it.  If you're using a different environment, **do not** try to run the install scripts directly.  Refer to them as a guide for what needs to be done, and adjust the specific steps needed for your environment.
{% endwarning %}

This article details the system requirements to help you find the right server and get everything set up.

{% include toc.html %}

## Supported Environment

The supported environment for Ares is:

* Ubuntu Linux. (Ares has been fully tested on Ubuntu 16.04 and 18.04.)
* 1GB RAM.
* Stand-alone server, such as a [Digital Ocean droplet](http://www.digitalocean.com/?refcode=5c07173bc1f2) or [Linode](https://www.linode.com/?r=80bc21df5f92ff5773de26419237b57a203623bd) VPS with a single game running on it.
* Hard drive space is not generally a concern.  In testing, a database with 1000 rooms, exits and characters was about 2MB in size.  Considering most modern servers have multiple GB, the amount used by Ares is insignificant.

Of course you are welcome to use other environments.  However, support for custom setups is limited.  If something isn't working, you may be on your own.  Using a custom environment is only recommended for people with server admin experience (or a server admin buddy).

## Installation

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

You can use the [`setup_server`](https://github.com/AresMUSH/aresmush/blob/master/bin/setup_server) and [`install`](https://github.com/AresMUSH/aresmush/blob/master/bin/setup_server) scripts as a **guide** for how to install the necessary software packages on your server, but **do not attempt to run these scripts directly on anything other than the supported environment**.  

Go through the scripts line by line and decide what to do for your server.  For example, this line installs the web server (nginx):

    echo -e "${ARES_INSTALL_TEXT} Nginx for web server."
    apt-get install -y nginx

You might want to install Apache instead.  Your system might need to use a different package management command (e.g. yum instead of apt-get).  You might already have nginx installed.

This line creates a symbolic link from your ares game directory to your web directory.  Either of these directories may be different in a custom environment.

    echo -e "${ARES_INSTALL_TEXT} Create a symbolic link so the web portal can easily read game files."
    cd /var/www/html/
    ln -s "${HOME_DIR}/aresmush/game" game

Ultimately, you need to figure out what's needed in each step based on what's right for your environment.