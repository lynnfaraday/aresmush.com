---
title: System Requirements
description:
layout: install-ares
prevstep: choosing-a-host
nextstep: install-db
---

Because AresMUSH has different needs than Penn or Tiny, most dedicated "MUSH Hosting" plans won't work.  They won't have enough resources or the right software packages.  Instead, you'll want to get a Virtual Private Server (VPS) that will let you install anything you want.  

This article details the system requirements to help you find the right VPS and get everything set up.

> I recommend [**Digital Ocean**](/install-ares/digital-ocean).  It's what I use for [AresCentral](/arescentral).  If you want to use that, hop on over to [Getting Started with Digital Ocean](/install-ares/digital-ocean) for step-by-step instructions on setting up your game there.

## VPS Specs

### Operating System

AresMUSH runs best on a Unix-like operating system, such as Linux or MacOSX.  If you have no other preference, choose **Ubuntu Linux** because that's what I use and I'll be able to help you better.

> AresMUSH _can_ run on Windows, but all Ares scripts and instructions are geared towards Unix-like environments.  If you want to run it on Windows, it will require some gymnastics.  [Contact me](/feedback) for help.

### RAM

I wouldn’t recommend anything less than 500MB. In testing, Ares RAM usage has been about 70MB-80MB with up to a dozen players connected, but you also need RAM for the OS itself and any other utilities you want to be running. 

Most VPS servers will give you at least 500MB, so that shouldn’t be a problem.

### CPU

Any standard processor should work just fine.

### Disk Space

Less than 1GB for the code and tools.

For the database, it will depend on the size of your game, but it's pretty insignificant.  In testing, a database with 1000 rooms, exits and characters was about 2MB in size.

## Software Packages

There are several software packages that Ares requires.  Installing these packages will require root access (i.e. admin permissions) on the server.   For your convenience, the instructions to install these packages on Ubuntu Linux are given below.

### Curl

The Ruby installation requires the Curl file transfer package.

    sudo apt-get install curl

### Ruby

The best way to install Ruby is using the Ruby version Manager.  Use the "stable with ruby" option.  At the time of this writing, the command you need is below, but refer to [Installing RVM](https://rvm.io/rvm/install) for the latest instructions.

    \curl -sSL https://get.rvm.io | bash -s stable --ruby

Once RVM is installed, you can install and use a particular version of ruby:

    rvm install 2.2.1
    rvm use 2.2.1

### Bundler

Bundler is a ruby utility that makes sure you have the right versions of everything your application depends on.

    gem install bundler

### Git

The Git version control client can be installed as a package.

    sudo apt-get install git


### Create a User

Your VPS will come with a root user, but you don't want to be using that for everyday stuff because it has special superpowers.  You should create an AresMUSH user.   

    adduser ares

It will prompt to choose a password. 

> From now on, use this ares user whenever you're logging into the console, unless the instructions tell you to do something as 'root'.