---
title: Getting Started With Digital Ocean
description:
layout: install-ares
prevstep: choosing-a-host
nextstep: install-db
---

This article will walk you step-by-step through the process of setting up your hosting account through [Digital Ocean](http://www.digitalocean.com/?refcode=5c07173bc1f2).

> **Note:** These instructions were correct at the time of writing, but Digital Ocean can change their screens at any time.  If you find that the instructions are wrong, please [let me know](/feedback)!

## Sign Up and Log In

First you'll need to [sign up](http://www.digitalocean.com/?refcode=5c07173bc1f2) for an account.

> **Full Disclosure:** I get a referral bonus from DO if you sign up using [this referral link](www.digitalocean.com/?refcode=5c07173bc1f2), but so do you!  You get $10 in credit, and the referral bonus helps keep the doors at [AresCentral](/arescentral) open.

Digital Ocean's pricing may be confusing, because they list both an hourly and a monthly cost.  Since a MUSH is running 24/7, you'll use the monthly rate.

## Create a Droplet

A "droplet" is just what DO calls a server.  You'll only need one droplet, even if you want to have multiple Ares games.   

To create a new droplet, log into your account and click **Create Droplet**.  

1. Enter a hostname, like 'myares'.
2. Select a size.  The $5/month droplet size meets all of Ares' [System Requirements](/install-ares/system-requirements), but you'll want to get the $10/month droplet size if you also plan on running a website or multiple games.
3. Select a region close to you.
4. Select an image.  Click the "Applications" tab and select "Ruby on Rails".
5. Ignore the Available Settings.  You don't need any of that.
6. Only add a SSH key if you're already familiar with connecting using SSH clients or wish to learn.  Connecting with SSH is beyond the scope of this tutorial.  See Digital Ocean's article on [SSH Keys](https://www.digitalocean.com/community/tutorials/how-to-use-ssh-keys-with-putty-on-digitalocean-droplets-windows-users) for more information.
 
{{#pretty-image}}{{urls.media}}/install-ares/droplet.png{{/pretty-image}}

## Connect To Your Droplet

You can connect directly to your droplet using the Digital Ocean control panel.  

1. Log into your Digital Ocean account and select "Droplets" from the top menu.
2. Select your droplet.
3. Click "Console Access".
4. Login using the username "root" and the password that was emailed to you.
    > Note: Digital Ocean doesn't send you the root password if you set up a SSH key.  You'll have to connect using an SSH client or else click "Reset Root Password" on the droplet control panel to get a new root password emailed to you.

Now you have a console prompt.  This is called the **server shell**.

{{#pretty-image}}{{urls.media}}/install-ares/droplet-connect.png{{/pretty-image}}

## Install Git

You'll need the 'git' source control program to get the Ares code.  Connect to your droplet console and type:

    sudo apt-get install git

## Create a User

The root user has special superpowers, so you don't want to be using it for everyday stuff.  You should create an AresMUSH user.   Connect to your droplet console and type:

    adduser ares

It will prompt to choose a password. 

> From now on, use this ares user whenever you're logging into the console, unless the instructions tell you to do something as 'root'.

## Website

FYI - your droplet can run a website too.  Setting it up is outside the scope of this tutorial, especially since most MUSHes use a wiki.  Check out the Digital Ocean support section for details if you're interested.
