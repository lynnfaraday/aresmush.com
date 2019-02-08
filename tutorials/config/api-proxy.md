---
title: Using the API Proxy Feature
layout: page
tags:
- webportal
- api
---

The web portal uses a special forwarding feature of the web server to make it easier to talk to the game engine.  This feature is called a proxy, and it translates requests to `http://<hostname>/api` into `http://<hostname>:<engine_api_port>`.   This helps people behind corporate/school firewalls, who might otherwise not be able to access the web portal from school/work.   

{% include note.html content=" Be aware that without this feature, it may cause some people with strict work/school firewalls to be unable to connect to the web portal." %}

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Setting Up the Proxy

If you're running locally in development mode, you don't need to use the proxy.

If you used the standard setup scripts on a droplet/linode/VPS, the API proxy should be set up already.  

If you used a non-standard setup, you'll need to edit your nginx config file `/etc/nginx/sites-enabled/default` to add the proxy:

    # Outside server block, define an upstream endpoint.  
    # Specify localhost (127.0.0.1) and the engine api port (4203 in this example)
    upstream api_upstream {
        server 127.0.0.1:4203;
    }
    
    server {
        
        # ... Leave the other configuration alone. ...
        
        # Inside the server block, create a new location as shown here.
        location /api/ {
            proxy_set_header HOST $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://api_upstream;
        }
    }

After updating the configuration, you'll need to do `sudo service nginx restart`.

## Starting the Game

You can control whether the game uses the API proxy when you start it.

`bin/devstart` will start *without* the API proxy.

`bin/startares` will start *with* the API proxy by default.  

You can tell it not to use the API proxy by using `bin/startares disableproxy`

## Updating the Engine API Port

In the unlikely event that you change your engine API port number, you'll need to update your web server's forwarding configuration.  On Nginx (the Ares default), this means editing the file `etc/nginx/sites-enabled/default`.  At the top of that file you should see a line:

    upstream api_upstream {
        server 127.0.0.1:4203;
    }

Change 4203 to the correct port number.  Then restart the web service with `sudo service nginx restart`.

