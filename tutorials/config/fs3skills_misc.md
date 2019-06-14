---
title: Configuring FS3 - Luck and Miscellaneous
layout: page
tags:
- config
---

To configure the FS3 Skills List:

1. Select Admin -> Setup.
2. Edit `fs3skills.yml`

## roll_channel

FS3 can optionally output rolls to a channel in addition to the room where the roll is made.  This can help staff call for rolls from afar.  Remove this entry if you don't want to use a rolls channel.

## max_luck

You can configure the maximum number of Luck Points a character can save up at any one time.

## luck_for_scene

This controls how much luck a person gets for participating in a scene with another player, based on how often they've previously RPed with that person.  The more scenes they've done together, the less the luck award.

For example, in the default config the base luck award is 0.1.  After 10 scenes together, the luck award reduced to 0.075.   After 25 scenes together, the luck award becomes 0.05, and so on.

    0: 0.1
    10: 0.075
    25: 0.05
    50: 0.025

Bear in mind that the luck is calculated for *each participant*, so even though the numbers are small they add up quickly.

The configured luck award is doubled for someone you've never RPed with before, and tripled for the first time you RP with a newbie (less than 30 days old).

## public_sheets

By default, players can view each others' sheets.  You can disable that by changing this setting to false.