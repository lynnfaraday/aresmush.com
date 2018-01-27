---
title: System Requirements
description:
layout: install-ares
prevstep: choosing-a-host
nextstep: getting-a-hostname
tags: 
- install
---

Because AresMUSH has different needs than Penn or Tiny, most dedicated "MUSH Hosting" plans won't work.  They won't have enough resources or the right software packages.  Instead, you'll want to get a Virtual Private Server (VPS) that will let you install anything you want.  

This article details the system requirements to help you find the right VPS and get everything set up.

> I recommend [Digital Ocean](http://www.digitalocean.com/?refcode=5c07173bc1f2).  It's what I use for [AresCentral](/arescentral).  If you want to use that, hop on over to [Getting Started with Digital Ocean](/tutorials/install/digital-ocean) for step-by-step instructions on setting up your game there.

## VPS Specs

### Operating System

AresMUSH runs best on a Unix-like operating system, such as Linux or MacOSX.  The Ares install scripts and tutorials are geared toward **Ubuntu Linux**.

> AresMUSH _can_ run on Windows, but it will require some gymnastics and is not officially supported.

### RAM

For just the telnet portal, you can get away with 500MB of RAM for a modestly-sized game.  The web portal requires 1GB of RAM to run decently.

### CPU

Processor speed doesn't matter.  Any VPS will have sufficient horsepower for Ares.

### Disk Space

Any VPS should have more than enough disk space.

The code itself is small, less than 50MB, but you'll also need room for the OS and tools.

For the database, it will depend on the size of your game, but it's pretty insignificant.  In testing, a database with 1000 rooms, exits and characters was about 2MB in size.

## Software Packages

There are several software packages that Ares requires:

* [Ruby](/https://rvm.io/rvm/install)
* [Redis database]((http://redis.io/topics/quickstart))
* [Git version control](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

If you use the [Digital Ocean](/tutorials/install/digital-ocean) instructions, these will automatically be installed for you.  Otherwise you'll have to set them up on your own.  Doing so is outside the scope of this tutorial.