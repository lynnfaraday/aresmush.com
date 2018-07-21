---
title: Ports
description:
layout: page
tags: 
- engine
---

The engine maintains several ports.

* The **Telnet Port** accepts connections from traditional MU clients and responds to client input.  The game can also send text to the client in response to events at any time.
* The **API Port** accepts API requests from the Web Portal.   It is a JSON-based API with a simple request-response model.  The Engine can't send unsolicited responses to the Web Portal from the API port.
* The **WebSocket Port** lets the Web Portal establish a two-way WebSocket connection between the game and the web browser.  This allows for asynchronous notifications like new activity in a scene or a new mail message arriving.  It is also the basis for the 'Play' screen web client.
* The **Web Portal Port** (aka HTTP Connection) is simply the port where the web server (nginx/Apache/etc.) is hosting the website.  Typically this will be the standard HTTP port 80, but you can configure the web server however you want.

> <i class="fa fa-info-circle"></i> **Tip:** WebSockets are sometimes blocked by firewalls or security software, which is why this method is not used for all Web Portal queries.  It's helpful, but don't rely on it too much.