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

> I recommend [Digital Ocean](http://www.digitalocean.com/?refcode=5c07173bc1f2).  It's what I use for [AresCentral](/arescentral).  If you want to use that, hop on over to [Getting Started with Digital Ocean](/install-ares/digital-ocean) for step-by-step instructions on setting up your game there.

## VPS Specs

### Operating System

AresMUSH runs best on a Unix-like operating system, such as Linux or MacOSX.  If you have no other preference, choose **Ubuntu Linux** because that's what I use and I'll be able to help you better.

> AresMUSH _can_ run on Windows, but all Ares scripts and instructions are geared towards Unix-like environments.  If you want to run it on Windows, it will require some gymnastics.  It is not officially supported, but it can work.

### RAM

I wouldn’t recommend anything less than 500MB. In testing, Ares RAM usage has been about 70MB-80MB with up to a dozen players connected, but you also need RAM for the OS itself and any other utilities you want to be running. 

Most VPS servers will give you at least 500MB, so that shouldn’t be a problem.

### CPU

Processor speed doesn't matter.  Any VPS will have sufficient horsepower for Ares.

### Disk Space

Any VPS should have more than enough disk space.

The code itself is small, less than 50MB, but you'll also need room for the OS and tools.

For the database, it will depend on the size of your game, but it's pretty insignificant.  In testing, a database with 1000 rooms, exits and characters was about 2MB in size.

## Software Packages

There are several software packages that Ares requires, including Ruby, Git and a Redis database. 

Installing these packages will require root access (i.e. admin permissions) on the server.   In the [AresMUSH Code](https://github.com/lynnfaraday/aresmush/) there are two scripts in the 'bin' directory (install\_ares1 and install\_ares2) that will install what you need.

> The install scripts reqiure root/sudo access.  If you don't have that, you'll need to figure out how to work around it step by step.  For example, one of the steps involves installing git using apt-get.  If you don't have root/sudo, you can't do that, but git may already be installed or you may be able to get the server admin to do it for you.