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

> <i class="fa fa-exclamation-triangle"></i> **Note:**  If you change the Engine API port and are using the API proxy feature, you will need to update your web server configuration.  See [Website Configuration](/tutorials/config/website) for details.

To configure the server:

1. Select Admin -> Setup
2. Edit `server.yml`.
4. Shutdown and restart the game. (See the tutorials at [aresmush.com](http://www.aresmush.com) if you need help doing this.)

> <i class="fa fa-exclamation-triangle"></i> **Note:** Server setting changes will not take effect until the game is restarted.

## Advanced Server Options

These advanced server options will not be needed by every game.

### HTTPS Web Portal

If you want to have your web portal use HTTPS instead of HTTP, you will need to first install a security certificate.  [CertBot](https://certbot.eff.org/) is a really easy way to do this.  If you're using the Ares default setup of Ubuntu/Nginx, you can just enter that on their main page and CertBot will give you the commands to run on the game's server shell to set up the certificate.

Once you have that installed, you'll need to set a couple advanced server options.

* `use_https` - Set this to true to use HTTPS.
* `private_key_file_path` - This path should be the same as your CertBot "Private Key Path", which you can get by typing `sudo certbot certificates` in the server shell.
* `certificate_file_path` - This path should be the same as your CertBot "Certificate Path", which you can get by typing `sudo certbot certificates` in the server shell.

> <i class="fa fa-exclamation-triangle"></i> **Note:** Remember to restart the game engine after changing this setting.

### bind_address

When hosting a game on a host with separate public/private IP addresses (commonly found with AWS) you'll need to tell the server to start up on the private IP.  Do this by setting the `bind_address` config option to the private IP.

> <i class="fa fa-exclamation-triangle"></i> **Note:** Remember to restart the game engine after changing this setting.

