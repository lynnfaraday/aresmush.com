---
title: Reviewing Character Applications
description: 
layout: page
---

Whether you're using FS3 or some other skills system, Ares comes with a generic character generation and approval system that can be done either on the web portal or in-game.

{% include toc.html %}

## Chargen

The Ares chargen system is not tied directly to FS3.  The stages are [configurable](/tutorials/config/chargen.html), and the FS3 web portal screens can be turned off by [disabling the FS3 plugin](/tutorials/config/plugins.html).  You can also disable the chargen plugin entirely if you don't want approvals and just want people to go IC immediately without setting any stats.

## Applications

Assuming you do use the default chargen application system, here's the general workflow:

* The player completes chargen and submits their character.  This creates an approval job.
* App staff reviews the character's background and abilities.
* App staff can either approve or reject the character.  The approval job is automatically updated and either closed (if approved) or placed on hold (if rejected).
* If rejected, the player makes the necessary revisions and then submits again.  The approval job is re-opened and the process repeats as many times as necessary.

There's a single approval job throughout the process, making it easier to keep track of the status and revisions, and to make it clear who's handling a character.

All of this can be done either through the web portal or through in-game app commands.

## App Review

A key feature that allows Ares chargen to remain generic is that characters are not *prevented* from doing things in chargen, they're only **warned** about it on the app review screen.

For example, the game will not stop them from taking a skill too high or set a weird combination of faction/job, but it will *warn* them if they've done so.  They can then tweak that or submit a justification for why they've done something unusual.

Admins see the same app review screen that the players do.  If it's all "green"/OK, then you know that the character has everything set within the allowable limits.  If there are yellow warnings or red errors, you know that there is a potential issue with the character.  You can even add your own [custom checks](/tutorials/config/chargen.html) with a little code, thus making app review a very quick and painless process.

## After Approval

When a character is approved, they will get a message (that you configure) telling them their next steps.  They will be allowed to go onstage to the IC areas, and will have access to the forums and other approved-only commands.