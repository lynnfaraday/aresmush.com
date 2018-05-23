---
title: Using the API proxy feature.
tags:
- webportal
- api
---

The web portal uses a special forwarding feature of the web server to make it easier to talk to the game engine.  This feature is called a proxy, and it translates requests to `http://<hostname>/api` into `http://<hostname>:<engine_api_port>`.   This helps people behind corporate/school firewalls, who might otherwise not be able to access the web portal from school/work.   

If you used the standard setup scripts on a droplet/linode/VPS, you don't need to worry about this.  It should be set up already.  

## Using the API Proxy

The API proxy is enabled by default.  However, if you're running in development mode on a local machine, or are using a non-standard web server configuration, you may want to turn the API proxy off.  Then your web portal will communicate with `http://<hostname>:<engine_api_port>` directly.

To disable the API proxy, specify "disableproxy" when you start the server.  `bin/startares disableproxy`   The `bin/devstart` script does this for you automatically.

> <i class="fa fa-exclamation-triangle"></i> **Note:**  Be aware that turning this feature off may cause some people with strict work/school firewalls to be unable to connect to the web portal.

## Updating the Engine API Port

In the unlikely event that you change your engine API port number, you'll need to update your web server's forwarding configuration.  On Nginx (the Ares default), this means editing the file `etc/nginx/sites-enabled/default`.  At the top of that file you should see a line:

    upstream api_upstream {
        server 127.0.0.1:4203;
    }

Change 4203 to the correct port number.  Then restart the web service:

    sudo service nginx restart