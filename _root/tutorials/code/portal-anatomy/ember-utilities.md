---
title: Ember Utilities
description:
layout: portal-anatomy
prevstep: events-web-request
nexstep: next-steps
tags: 
- code
- webportal
---

We've talked about the Route/Controller/Template that are part of a single screen, but Ember also has some utilities that are used by many screens.

* **Services** provide centralized functionality - such as the ability to show notices on the screen or talk to the game server.   See the advanced tutorial [Web Portal Services](/tutorials/code/web-services) for more information.
* **Mixins** are like `inclues` in Ruby - they make common utilities available to screens that need them. See the advanced tutorial [Web Portal Mixins](/tutorials/code/web-mixins) for more information.
* **Helpers** and **Components** are little snippets you can use in other templates.  Helpers are very small - like a utility function call.  Components are self-contained screen widgets.