---
title: Custom Code Hooks
description: 
layout: page
tags:
- code
- features
---

Normally, modifying the base Ares code exposes you to *merge conflicts*.  This is an annoying process that forces you to reconcile your changes with the base code changes whenever you upgrade.

There are, however, several places that are designed with **custom code hooks**, which let you hook in custom code without exposing yourself to merge conflicts.

{% include toc.html %}

## Chargen App Review

You can define custom [app review](/tutorials/config/chargen.html#custom-app-review) checks.  For example, if you want to warn people if they choose a nonsensical combination of group settings, or if you want to limit certain abilities to certain groups.

## Chargen Post-Approval Steps

You can trigger custom [post-approval](/tutorials/config/chargen.html#custom-approval-steps) steps in chargen.  Commonly this is used to assign roles or add people to channels based on their groups.

## IC Starting Location

The default code has a single IC starting location.  If you want to start people from different factions/homeworlds/etc. in different places, you can design a custom [IC starting location](/tutorials/config/status.html#custom-ic-start-locations) selection.

## Live Scene Controls

In the web portal, you can add custom menu items and buttons to the controls.  This is useful for plugin extras.  For example, the text message plugin extra adds an "Add Txt" button, and the cookies plugin extra adds a "Give Cookies" button to the "Play" menu.

* [Scene pose](/tutorials/config/scenes.html#custom-scene-pose-buttons) buttons interact with the pose box.
* [Scene menu](/tutorials/config/scenes.html#custom-scene-menu-buttons) option show up in the live scene "Play" menu.

## Character Profile System Tabs

You can add custom tabs that appear in the "System" section of the [character profile](/tutorials/config/profile.html#custom-system-tabs).

## Character Cards

It's possible to customize the [character cards](/tutorials/config/scenes.html#custom-character-cards) (mini profiles) that show up when you click someone's icon next to their pose during live web portal scenes.

## FS3 Combat Actions and New Turn Events

Creating your own combat actions takes a fair amount of custom code.  But once you have them, you can easily [register them](https://aresmush.com/tutorials/code/fs3-roadmap.html#adding-a-new-action) with the combat system.

If you have custom combat actions, you may also have some processing that needs to happen at the end of each turn.  Resetting flags, handling special kinds of damage, etc.  There's a place for you to [tie those in](https://aresmush.com/tutorials/code/fs3-roadmap.html#turn-reset-hook) as well.