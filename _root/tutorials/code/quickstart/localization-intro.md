---
title: Localization
description:
layout: code-quickstart
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

Ares is designed for non-English games too.  All of the game code can be translated into other languages simply by swapping in different translation files, called a **Locale**.

Diving deep into how locales work is beyond the Quickstart Tutorial.  There's a separate article on [Localization](/tutorials/code/templates) for you in the Advanced Coding section when you're ready.

The important thing to know is that the translate method `t()` can take a key like "describe.description.set" and translate that into a string based on the current language.  In English it's "Description set!" but in German it's "Beschreibung gesetzt!"   The game will pick the appropriate text based on the game's language setting.

You probably don't need to worry about localizing the strings in your own custom code, but it's still good to be aware of what's going on behind the scenes.
