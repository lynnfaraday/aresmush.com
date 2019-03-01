---
title: Digital Ocean Easy Mode
description:
layout: tutorial
installTutorial: true
tutorialName: Installing AresMUSH
tutorialIndex: tutorials/install
prevstep: choosing-a-host
nextstep: next-steps
tags: 
- install
---

If you're willing to use [Digital Ocean](http://www.digitalocean.com/?refcode=5c07173bc1f2) as your MU host, I'm happy to set up Ares for you.   

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## How It Works

Here's how it works:

1. Submit a request and receive a Digital Ocean snapshot image.
2. Clone your own server from the snapshot.
3. Finalize your hostname settings.

These steps are described in more detail in the next few sections.

> **Full Disclosure:** I get a referral bonus from Digital Ocean if you sign up using [this referral link](http://www.digitalocean.com/?refcode=5c07173bc1f2), but so do you!  You get $10 in credit, and the referral bonus helps keep the doors at [AresCentral](/arescentral.html) open.  Using the referral is not required for Easy Mode, but it is appreciated.

## Disclaimers

There is NO WARRANTY for the server provided via Easy Mode, express or implied. You accept it as-is, and agree that the AresMUSH staff is not responsible for any defects in operation or harm to the game, server, or anything else.  You are responsible for maintaining the server after initial setup, including software upgrades, security patches, and all associated hosting fees.

## Submit a Request

Create an account on [Digital Ocean](http://www.digitalocean.com/?refcode=5c07173bc1f2) if you don't already have one.  Then [contact me](/feedback.html) and provide the following information:

* The email address associated with your Digital Ocean account.
* Your desired game port number. (Must be > 1024; default is 4201.)
* Which region you want the server hosted in.  (Default is US East Coast.  You may also select US West Coast or one of Digital Ocean's global regions.)
* A name and description for your game.  (You can change this later.)
* Your desired hostname (yourgame.somewhere.com).  You can request an aresmush.com hostname or [register your own](/tutorials/install/getting-a-hostname.html).

{% note %} 
Your email is needed to transfer the server snapshot image to you.   It must match the email you used for your Digital Ocean account.  I pledge not to do anything nefarious with your email.  See our [privacy policy](/privacy.html) for details.
{% endnote %}

## Clone Your Server

I will transfer a Digital Ocean snapshot image to your account. This image has everything you need to clone a droplet (aka server) with Ares installed on Ubuntu Linux.

{% note %} 
You have seven days to accept the transfer otherwise the request will be aborted.  You are responsible for the server costs once you accept the transfer.
{% endnote %}

1. Log into your Digital Ocean account.  
2. Go to 'Images' and you should see a pending snapshot transfer request.  Click 'Accept'.
3. Now on the 'Images' page you should see the snapshot.  Select 'Create Droplet' to turn that snapshot image into a droplet (aka server).
  * Choose a droplet size.  (1GB RAM is the standard Ares size)
  * Select 1 droplet, and enter a name for it (like 'ares').
  * All other options may be left as the defaults.
4. You can keep the snapshot around as a backup until you're sure your server is up and running, but then you should delete it.

## Finalize the Hostname Settings

Hostnames are linked to IP addresses, so you can't fully set them up until you have cloned a droplet from the snapshot.  

If you're using an aresmush.com hostname, simply [contact me](/feedback.html) with your droplet's IP address (visible on the 'Droplets' screen in your Digital Ocean account).  

If you're using your own custom host name, you'll need to set up the DNS through your domain provider.

{% note %} 
The hostname may take up to 24 hours to be recognized.  
{% endnote %}

You can tell that the hostname is working when you're able to see the web portal when you go to `http://yourmushaddress`.  Once this happens, you'll need to [restart the game](/tutorials/manage/shutdown.html) for everything to start working. 

## Next Steps

Your game should be up and running.  Check out [Next Steps](/tutorials/install/next-steps.html) to learn about connecting to it and testing it out.
