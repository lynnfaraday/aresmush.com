---
title: Connecting to the Server Shell
description:
layout: install-ares
prevstep: getting-a-hostname
nextstep: install-db
tags: 
- install
- hosting
- manage
---

To manage certain parts of your game, you will need to connect to the **Server Shell**, which is like a command prompt for your game server.  This is different than connecting to the game itself through a MUSH client.

## Connecting through Digital Ocean

If you used the [Digital Ocean](/tutorials/install/digital-ocean) setup instructions, you can connect directly to your droplet using the Digital Ocean control panel.  

1. Log into your Digital Ocean account and select "Droplets" from the top menu.
2. Select your droplet.
3. Click "Console Access".
{{#pretty-image}}{{urls.media}}/tutorials/install/droplet-connect.png{{/pretty-image}}
4. Log in.

> The very first time you log in, you'll use the username "root" and the password that was emailed to you.  Once you complete this tutorial, you'll end up with a different "ares" user and password.  Use the "ares" user for day-to-day operations and save the "root" user for things that require special permissions.

## Connecting through a Client

You can also connect to your server using a telnet client like [PuTTY](http://www.putty.org/) for Windows or the terminal 'telnet' command on Mac/Linux.