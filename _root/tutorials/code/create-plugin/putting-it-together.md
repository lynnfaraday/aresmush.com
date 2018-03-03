---
title: Putting It All Together
description:
layout: create-plugin
prevstep: cmd-dispatch
nextstep: removing-plugin
tags: 
- code
- plugins
---

That's it!  Our plugin should be ready.  

## Try It Out

Let's give it a try.  Type `load traits` to load all the code we just wrote and then try out our commands:

* trait/set A Trait=Some trait description.
* traits
* help traits

Of course, if we were doing this plugin for real we'd want some more commands... a way to view other peoples' traits, and an admin command for setting traits, a command to delete a trait.  But for now this is all we need it to do.