---
title: Custom Code
layout: page
tags: 
- code
- shortcuts
- plugins
---

The 'custom' plugin is special because it will not be affected by future Ares upgrades. It's intended to be a place where you can easily stick your custom code and configuration options here without worrying about colliding with changes in the standard codebase.

For example, if you're going to add a new scene-related command, you don't have to put it in the Scenes plugin.   You can put it in the Custom plugin.

Likewise, if you're adding custom shortcuts for your game-specific group commands (like `nationality` for `groups nationality`), you can put them in the custom configuration instead of in the the demographics config.

## Game-Specific Configuration

To configure the Custom plugin:

1. Select Admin -> Setup.
2. Edit `custom.yml`

You can add whatever config options you want here.  A common thing to do is to add game-specific shortcuts.  For example, to create a shortcut where typing 'foo' executes the 'ooc' command, you could add this to the shortcuts list:

    custom:
        shortcuts:
            foo: ooc