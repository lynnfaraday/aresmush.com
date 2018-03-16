---
title: Digital Ocean Easy Mode
description:
layout: install-ares
prevstep: choosing-a-host
nextstep: next-steps
tags: 
- install
---

If you're willing to use [Digital Ocean](http://www.digitalocean.com/?refcode=5c07173bc1f2) as your MU host, I'm happy to set up Ares for you.   

Here's how it works:

1. Submit a request and receive a Digital Ocean snapshot image.
2. Clone your own server from the snapshot.
3. Finalize your hostname settings.

These steps are described in more detail in the next few sections.

> **Full Disclosure:** I get a referral bonus from Digital Ocean if you sign up using [this referral link](http://www.digitalocean.com/?refcode=5c07173bc1f2), but so do you!  You get $10 in credit, and the referral bonus helps keep the doors at [AresCentral](/arescentral) open.  Using the referral is not required for Easy Mode, but it is appreciated.

## Disclaimers

There is NO WARRANTY for the server provided via Easy Mode, express or implied. You accept it as-is, and agree that the AresMUSH staff is not responsible for any defects in operation or harm to the game, server, or anything else.  You are responsible for maintaining the server after initial setup, including software upgrades and security patches.

## Submit a Request

Create an account on [Digital Ocean](http://www.digitalocean.com/?refcode=5c07173bc1f2) if you don't already have one.  Then [contact Faraday](/feedback) and provide the following information:

* The email address associated with your Digital Ocean account.
* Your desired game port number. (Must be > 1024; default is 4201.)
* Your desired hostname (yourgame.somewhere.com).  You can request an aresmush.com hostname or [register your own](/tutorials/install/getting-a-hostname).

> <i class="fa fa-exclamation-triangle"></i> **Note:** Your email is needed to transfer the server snapshot image to you.   It must match the email you used for your Digital Ocean account.  We pledge not to do anything nefarious with your email.  See our [privacy policy](/privacy) for details.

## Clone Your Server

Once the game is set up, a Digital Ocean snapshot image will be transferred to your account. The snapshot image has everything you need to create a droplet (aka server) with Ares installed on Ubuntu Linux.  You use the image to clone your own server.

> <i class="fa fa-exclamation-triangle"></i> **Note:** You are responsible for the server costs once your droplet is created.  The standard Ares install uses the small droplet size.  As of 3/2018 this is 1GB RAM, 25GB disk, $5/month but Digital Ocean may change their droplet plans at any time.

1. Log into your Digital Ocean account.  
2. Go to 'Images' and you should see a pending snapshot transfer request.  Click 'Accept'.
3. Now on the Images page you should see the snapshot.  Select 'Create Droplet' to turn that snapshot image into a droplet (aka server).
3. You can keep the Snapshot around so you have a handy restoration point if something goes awry with your server.  Digital Ocean charges a tiny fee for this.  Or you can delete it once your game is stable.

## Finalize the Hostname Settings

Hostnames are linked to IP addresses, so you can't fully set them up until you have cloned a droplet from the snapshot.  If you're using an aresmush.com hostname, simply [contact Faraday](/feedback) with your droplet's IP address (visible on the 'Droplets' screen in your Digital Ocean account).  If you're using your own custom host name, you'll need to set up the DNS through your domain provider.