---
title: Web Portal Navigation
description:
layout: page
tags: 
- code
- webportal
---

The Web Portal supports two navigation menus - a sidebar and a top navbar.  These navigation menus are controlled by the following code files:

* `ares-webportal/app/templates/components/global-sidebar`
* `ares-webportal/app/templates/components/global-navbar`

{% include tip.html content="Always use the Ember link-to helper rather than raw  <code><a href></code>  tags for internal web portal links.  This is important for maintaining the internal web portal state.  It's also the reason why changing the navbar requires changing the code instead of just a configuration file." %}

The sidebar is driven by the `GetSidebarInfoRequestHandler` web request.  If you want additional data to appear on the sidebar (for example - adding a list of recently-approved characters), you'll need to update that handler.