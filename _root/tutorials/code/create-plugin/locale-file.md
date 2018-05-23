---
title: Create a Locale File
description:
layout: create-plugin
prevstep: roll-cmd
nextstep: cmd-dispatch
tags: 
- code
- plugins
- localization
---

All of our commands have been using translation keys, such as `t('cortex.ability_set')`, so we'll need to create a locale file to convert those keys to actual string values.

Locale files need to live in the `locales` folder under your plugin folder.  They need to be named `locale_<language code>.yml`.  'en' is the language code for English.

Locale files use YAML format just like configuration files.   Each plugin has its own top-level locale section.  For example:

    en: 
      cortex:
        attributes_title: "Attributes"
        ability_set: "Ability set!"