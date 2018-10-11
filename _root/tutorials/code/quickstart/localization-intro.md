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

You don't need to worry about localizing the strings in your own custom code unless you plan on sharing it with the broader Ares community.  Presumably you'll just write the messages in whatever language your game is using.

We only mention localization here as a FYI so you understand what's going on when you see `t()` all over the place.  There's a separate article on [Localization](/tutorials/code/localization) for you in the Advanced Coding section if you ever want to know more about translations.