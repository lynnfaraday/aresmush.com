---
title: Configuring the Emoji
layout: page
tags:
- config
---

Ares allows you to use emoji defined within the [unicode standard](https://unicode.org/emoji/charts/full-emoji-list.html).

You cannot add custom emoji graphics at this time.  However, there are a few things about the system you can configure.


To configure the game preferences:

1. Select Admin -> Setup.
2. Edit `emoji.yml`.

## allow_emoji

Emoji are on by default, but if you hate them you can turn them off for your game with this setting.

## aliases

The unicode standard defines [names](https://unicode.org/emoji/charts/emoji-ordering.txt) for each emoji, but sometimes they're unwieldy.  You can define aliases for convenience.  For example:

```
    cool: smiling_face_with_sunglasses
    grin: grinning_face
```

This allows you to do `:cool:` and `:grin:` instead of typing out the long names.  There are a few common aliases built into the default config, and you can add your own.

## smileys

Ares does pattern matching for common smileys, to turn them into emoji.  You can add extra smileys, but don't go crazy.  You don't want to bog down the text processor.

```
":)": grinning_face
";)": winking_face
```

## emoji

This is the main emoji list of names and unicode character codes.  You probably won't be editing this, as it's defined in the unicode standard.
