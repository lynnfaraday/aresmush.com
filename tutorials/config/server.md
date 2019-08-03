---
title: Configuring the Server
layout: page
tags:
- config
---


Your server host and port information are set up during installation.  If they ever change, you'll need to update the configuration.

For more info on server configuration options, see [Installing the Game](/tutorials/install/install-game.html).

To configure the server:

1. Select Admin -> Setup
2. Edit `server.yml`.
4. Shutdown and restart the game. (See the tutorials at [aresmush.com](http://www.aresmush.com) if you need help doing this.)

{% note %} 
Server setting changes will not take effect until the game is restarted.
{% endnote %}

{% include toc.html %}

## Advanced Server Options

These advanced server options will not be needed by every game.

### HTTPS Web Portal

If you want to have your web portal use HTTPS instead of HTTP, you will need to first install a security certificate.  [CertBot](https://certbot.eff.org/) is a really easy way to do this.  

{% warning %} 
These instructions only apply to the default Ares installation, and to games **installed from** Beta 45 (late March 2019) and higher.  If your game was installed pre-45 (even if it's been upgraded since), [contact Faraday](/feedback.html) for a few extra steps you'll need.
{% endwarning %}


1. Edit `server.yml` in the game configuration:
  - Set `use_https` to true.
  - Set `certificate_file_path` to `/home/ares/certs/fullchain.pem`.
  - Set `private_key_file_path` to `/home/ares/certs/privkey.pem`.

2. Go to the [CertBot](https://certbot.eff.org/) website.  Select 'nginx' for your web server and your server's version of Ubuntu (usually either 16.04 or 18.04; you will see the version printed in your server shell when you log in.)  This will give you the necessary steps to install CertBot.

3. Run the CertBot instructions from the game's server shell to set up the security certificate.  There are some apt-get things you install first, and then you run `sudo certbot --nginx`.
  - Be sure to make the certificate name exactly the same as your MUSH hostname.  (e.g. yourgame.somewhere.com)
  - Allow it to update your nginx config.
  - Allow it to redirect HTTP traffic to HTTPS.

4. From the aresmush directory, run `bin/certs YOURHOSTNAME`.  Again, make sure that the domain name exactly matches the certificate name/MUSH hostname.

5. Reboot the server.  See [Rebooting the Server](/tutorials/manage/reboot.html).

6. It may take a few minutes for the server to reboot.  When it does, test out the web portal (you probably need a force-refresh in your browser) and the game.

#### Certificate Renewal

Security certificates expire after 90 days.  If all went well with your install, CertBot should automatically renew your certificates when they expire.  If you get a security warning saying that your certificate is invalid when viewing the web portal, you may need to [reboot the server](/tutorials/manage/reboot.html) so that the game and web portal recognize the renewed certificate.

#### Devstart and HTTPS

The `bin/devstart` command to run the game in dev mode will not work if HTTPS is enabled.  Instead you must run the start command manually: `bundle exec rake startares`

#### MUSH Client SSL

This feature only applies to the web portal.  Ares does not currently support a SSL connection through standard MU clients.


### bind_address

When hosting a game on a host with separate public/private IP addresses (commonly found with AWS) you'll need to tell the server to start up on the private IP.  Do this by setting the `bind_address` config option to the private IP.

{% note %} 
Remember to restart the game engine after changing this setting.
{% endnote %}

