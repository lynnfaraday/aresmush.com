---
title: System Requirements
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

Because AresMUSH has different needs than Penn or Tiny, most dedicated "MUSH Hosting" plans won't work.  They won't have enough resources or the right software packages.  Instead, you'll want to get a Virtual Private Server (VPS) that will let you install anything you want.  

This article details the system requirements to help you find the right VPS and get everything set up.


## Local Install

If you are trying to install the game on your local computer, see [Setting up a Development Environment](/tutorials/code/dev-tools).

## Digital Ocean

I recommend [Digital Ocean](http://www.digitalocean.com/?refcode=5c07173bc1f2).  It's what I use for [AresCentral](/arescentral).  If you want to use that, hop on over to [Getting Started with Digital Ocean](/tutorials/install/digital-ocean) for step-by-step instructions on setting up your game there.

## Custom VPS

If you don't want to use Digital Ocean, you can use any VPS server.

### Operating System

AresMUSH was designed to run on **Ubuntu Linux**.  Ares has been fully tested on Ubuntu 16.04 and 18.04.  Newer versions are probably fine too.

It may work on other OSes, but you're on your own for support.

### RAM

1GB is the recommended minimum value for decent performance.   Modestly-sized games can scrape by with 500MB of RAM but may bog down if your website sees heavy traffic.

### CPU

Processor speed doesn't matter.  Any VPS will have sufficient horsepower for Ares.

### Disk Space

Any VPS should have more than enough disk space.

The code itself is small, less than 50MB, but you'll also need room for the OS and tools.

For the database, it will depend on the size of your game, but it's pretty insignificant.  In testing, a database with 1000 rooms, exits and characters was about 2MB in size.  Considering most VPS' have multiple GB, that's nothing.

### Software Packages

There are several software packages that Ares requires.  

> <i class="fa fa-exclamation-triangle"></i> **Note:** The automated install scripts assume you're using a Digital Ocean droplet with only a single MUSH running on it.  If you're using a different environement, you may need to customize the install script or just use it as a reference and run the commands manually.

There are two install scripts: `setup_server` and `install`.  Find the files corresponding to your AresMUSH version in [GitHub](https://github.com/AresMUSH/aresmush/tree/master/bin).