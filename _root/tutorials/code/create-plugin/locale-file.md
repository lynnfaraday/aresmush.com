---
title: Create a Locale File
description:
layout: create-plugin
prevstep: cmd-handler
nextstep: cmd-dispatch
tags: 
- code
- plugins
- localization
---

In the previous step, we created command that utilized some translations:  `t('traits.traits_title')` and `t('traits.trait_set')`.  Now we need to create a locale file to define real strings for those translations.

Locale files need to live in the `locales` folder under your plugin folder.  They need to be named `locale_<language code>.yml`.  'en' is the language code for English.

Locale files use YAML format just like configuration files.   Each plugin has its own top-level locale section.

## Try It

Create a file `local_en.yml` and place it in `aresmush/plugins/traits/locales`.  Give it the following contents:

    en: 
      traits:
        traits_title: "Traits"
        trait_set: "Trait set!"

This defines the two translations we need for our commands.