---
title: Ember in a Nutshell
description:
layout: portal-anatomy
nextstep: events-template
tags: 
- code
- webportal
---

EmberJS is a Javascript web application framework.  It gets its raw data from the game server, but otherwise everything is handled client-side (in the browser).  This allows a more responsive and interactive player experience overall.  It also minimizes load on the server, which is important because MU servers tend to be running on bare-bones hardware.

We're not going to spend a lot of time on how to write Ember code.  See [Learning Ember](/tutorials/code/ember) for some helpful tutorials.  Instead we're going to focus on the Ares-specific bits.

An Ember screen consists of three basic parts:

* A **Route**, which gets the data.
* A **Template**, which handles the display.
* A **Controller**, which handles any actions resulting from buttons on the screen and helps the template make any decisions about what to show.

