---
title: Getting Started With Digital Ocean
description:
layout: install-ares
prevstep: choosing-a-host
nextstep: getting-a-hostname
tags: 
- install
- hosting
---

This article will walk you step-by-step through the process of setting up your hosting account through [Digital Ocean](http://www.digitalocean.com/?refcode=5c07173bc1f2).

> **Note:** These instructions were correct at the time of writing, but Digital Ocean can change their screens at any time.  If you find that the instructions are wrong, please [let me know](/feedback)!

## Sign Up and Log In

First you'll need to [sign up](http://www.digitalocean.com/?refcode=5c07173bc1f2) for an account.

> **Full Disclosure:** I get a referral bonus from DO if you sign up using [this referral link](http://www.digitalocean.com/?refcode=5c07173bc1f2), but so do you!  You get $10 in credit, and the referral bonus helps keep the doors at [AresCentral](/arescentral) open.

Digital Ocean's pricing lists both an hourly and a monthly cost.  The monthly rate just assumes that your server is running 24/7 for the whole month, which is what a MUSH does.

## Create a Droplet

A "droplet" is just what DO calls a server.   To create a new droplet, log into your account and click **Create Droplet**.  

1. Select an image.  Click the "One-Click Apps" tab and select the "Redis" app (for example, it is currently "Redis 3.2.1 on 14.04" but the numbers may change over time).
{{#pretty-image}}{{urls.media}}/install-ares/droplet.png{{/pretty-image}}
2. Select a size.  The $5/month droplet size meets all of Ares' [System Requirements](/install-ares/system-requirements), but the $10/month droplet will give you more horsepower to run other apps and better performance.
3. Don't add block storage.
4. Select a region close to you.
5. Don't add additional options.
6. If you're familiar with SSH and wish to connect using a SSH client, see Digital Ocean's article on [SSH Keys](https://www.digitalocean.com/community/tutorials/how-to-use-ssh-keys-with-putty-on-digitalocean-droplets-windows-users).  Setting up a SSH key is beyond the scope of this tutorial.
7. Select 1 droplet, and enter a name for it (like 'ares').
