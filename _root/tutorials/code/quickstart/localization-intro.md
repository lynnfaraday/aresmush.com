---
title: Localization
description:
layout: tutorial
quickstartTutorial: true
tutorialName: Code Quickstart
tutorialIndex: tutorials/code/quickstart
prevstep: config-intro
nextstep: db-intro
tags: 
- code
- code-quickstart
- localization
---

In our examples so far, we've used raw text in all of our messages, like: `client.emit "Here, piggy piggy piggy."`.  In the real Ares code, however, you'll see things like this:

    client.emit t('describe.description_set')

What's up with that `t()` stuff?

Ares is designed for non-English games too.  All of the game code can be translated into other languages simply by swapping in different translation files, called a **Locale**.  The `t()` function (short for 'translate') takes a key like "describe.description_set" and turns it into the appropriate text (like "Description set!" or "Bescreibung gesetzt!" depending on the game's language.

You don't _have_ to worry about localizing the strings if you don't want to.  It's fine to just write the messages in whatever language your game is using.

We mostly mention localization here as a FYI so you understand what's going on when you see `t()` all over the place. But there are advantages to using localized strings if you choose to:

* It keeps all your text prompts in an easy-to-find place.
* You can re-use prompts in multiple files and only have to change them in one spot.
* You can share your code with the broader Ares community.
* It's just a good software practice to learn.

There's a separate article on [Localization](/tutorials/code/localization) for you in the Advanced Coding section if you ever want to incorporate localized strings into your code.