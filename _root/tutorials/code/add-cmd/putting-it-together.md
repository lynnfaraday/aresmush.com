---
title: Putting It All Together
description:
layout: tutorial
prevstep: cmd-dispatch
nextstep: removing-cmd
tutorialIndex: tutorials/code/add-cmd
addCmdTutorial: true
tutorialName: Adding a Command
tags: 
- code
- plugins
---

That's it!  Our commands should be ready.  

Except for one minor problem... the game doesn't know we added all this stuff!

When you edit things through the web portal (as we did in the Quickstart tutorial), the portal is smart enough to tell the game "Yo - we changed the tinker command!" so the game can re-load the code.  When we're editing things ourselves, though, we need to do that step manually using the `load` command.

The load command has several options that let you load just the configuration, or an entire plugin.  See `help load` in-game for all the options.

## Try It Out

Let's give it a try.  Type `load custom` to load all the code we just wrote and then try out our commands:

* help goals
* help (to see goals listed under the Character Creation section)
* goals/set Some goals.
* goals
* goals SomeoneElse (try it with both an admin and non-admin and see the difference)