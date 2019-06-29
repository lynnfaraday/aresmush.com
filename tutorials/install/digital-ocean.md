---
title: Digital Ocean Self-Install
description: 
layout: tutorial
installTutorial: true
tutorialName: Installing AresMUSH
tutorialIndex: tutorials/install
prevstep: choosing-a-host
nextstep: getting-a-hostname
tags:
- install
- hosting
---

This article will walk you step-by-step through the process of setting up your hosting account through [Digital Ocean](http://www.digitalocean.com/?refcode=5c07173bc1f2).

{% note %} 
These instructions were correct at the time of writing, but Digital Ocean can change their screens at any time.  If you find that the instructions are wrong, please [let me know](/feedback.html)!
{% endnote %}

## Sign Up and Log In

First you'll need to [sign up](http://www.digitalocean.com/?refcode=5c07173bc1f2) for an account.

> **Full Disclosure:** I get a referral bonus from Digital Ocean if you sign up using [this referral link](http://www.digitalocean.com/?refcode=5c07173bc1f2), but so do you!  You get $10 in credit, and the referral bonus helps keep the doors at [AresCentral](/arescentral.html) open.

Digital Ocean's pricing lists both a monthly and hourly rate.  A MUSH server will be up 24/7 all month long, so it uses the monthly rate.

## Create a Droplet

A "droplet" is just what DO calls a server.   To create a new droplet, log into your account and click **Create -> Droplet**.  

1. Select the Ubuntu distribution image.  (Ares has been fully tested on Ubuntu 16.04 and 18.04.  Newer versions are probably fine too.)  Just use the regular Ubuntu, not any other image.
{% include pretty_image.html file='/install-ares/droplet.png' %}
2. Select a size.  The 1GB droplet meets all of Ares' system requirements, including the Web Portal.
3. Don't add block storage.
4. Select a region close to you.
5. Don't add additional options.
6. Select 1 droplet, and enter a name for it (like 'ares').
