---
title: Custom Config
tags:
- config
layout: page
---

The `custom.yml` file lets you store any custom configuration you may want. 

1. Select Admin -> Setup.
2. Edit `custom.yml`

You can add whatever config options you want here.  A common thing to do is to add game-specific shortcuts.  For example, to create a shortcut where typing 'foo' executes the 'ooc' command, you could add this to the shortcuts list:

    custom:
        shortcuts:
            foo: ooc