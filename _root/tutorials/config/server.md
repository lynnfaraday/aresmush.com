---
title: Configuring the Server
layout: page
tags:
- config
---

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

Your server host and port information are set up during installation.  If they ever change, you'll need to update the configuration.

For more info on server configuration options, see [Installing the Game](/tutorials/install/install-game).

To configure the server:

1. Select Admin -> Setup
2. Edit `server.yml`.
4. Shutdown and restart the game. (See the tutorials at [aresmush.com](http://www.aresmush.com) if you need help doing this.)

> <i class="fa fa-exclamation-triangle"></i> **Note:** Server setting changes will not take effect until the game is restarted.

## Advanced Server Options

These advanced server options will not be needed by every game.

### HTTPS Web Portal

If you want to have your web portal use HTTPS instead of HTTP, you will need to first install a security certificate.  [CertBot](https://certbot.eff.org/) is a really easy way to do this.  

If you're using the Ares default setup of Ubuntu/nginx, go to CertBot's website and select 'nginx' and your server's version of Ubuntu (usually either 16.04 or 18.04; you will see the version printed in your server shell when you log in.) 

CertBot will give you the commands you need.  Run those commands in the game's server shell to set up the certificate.  Allow it to update your nginx configuration for you.

Once you have that installed, you'll need to set a couple advanced server options.

1. Run `sudo certbot certificates` to get your certificate info.  It will look something like this:

            Certificate Name: YOURSITE

              Domains: YOURSITE

              Expiry Date: whenever

              Certificate Path: /etc/letsencrypt/live/YOURSITE/fullchain.pem

              Private Key Path: /etc/letsencrypt/live/YOURSITE/privkey.pem

You will need to use the same YOURSITE value in a moment.

2. From the aresmush directory, run `bin/certs YOURSITE`.

3. Edit `server.yml` in the game configuration:
  - Set `use_https` to true.
  - Set `certificate_file_path` to `/home/ares/certs/fullchain.pem`.
  - Set `private_key_file_path` to `/home/ares/certs/privkey.pem`.

4. Restart the game engine.  See [Shutting Down the Game](/tutorials/manage/shutdown).

5. Restart the website with `sudo service nginx restart`.

6. Do a force-refresh in the browser to reload the web portal.

### bind_address

When hosting a game on a host with separate public/private IP addresses (commonly found with AWS) you'll need to tell the server to start up on the private IP.  Do this by setting the `bind_address` config option to the private IP.

> <i class="fa fa-exclamation-triangle"></i> **Note:** Remember to restart the game engine after changing this setting.

