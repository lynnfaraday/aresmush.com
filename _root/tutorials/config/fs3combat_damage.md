---
title: Configuring FS3 combat damage.
tags:
- config
---
# Configuring FS3 Combat - Damage

To configure the FS3 damage system:

1. Select Admin -> Setup.
2. Edit `fs3combat_damage.yml`

## damage_mods

You can configure the wound modifiers for each damage level to make combat either more realistic (higher modifiers) or more Hollywood-ish (lower modifiers).  Fractional modifiers are allowed, so small wounds can add up.

For context, remember that -3 is a very significant modifier - it can take a Great person down to an Fair level.

## pc_knockout_bonus

You can configure a bonus to give PCs on their knockout rolls.  Make this 0 if PCs have no advantage over NPCs.  

> <i class="fa fa-info-circle"></i> **Tip:** Be careful making this too high.  PCs are already harder to knock out in combat because they (generally) have higher composure scores and have luck points to burn.  Give them too much of a bonus and you can make them nigh-invincible.

## damage_table

The base damage level (before being modified by things like luck or armor) is determined by a simple percentage roll.  You can configure the chance of each wound level coming up on this roll by adjusting the damage table.  

For example:

    GRAZE: 20
    FLESH: 70
    IMPAIR: 95

A roll of 0-19 would be a graze, 20-69 would be a flesh wound, 70-94 would be impaired, and 95+ would be incapacitated.  (Incap is not listed because it's automatically anything higher than the final value).

If you wanted to make incap wounds more rare and grazes more common, you might make the chart:

    GRAZE: 40
    FLESH: 60
    IMPAIR: 100

Now 0-39 is a graze, 40-59 is flesh, 60-99 is impaired, and 100+ is incap.  This means you'd never get an incap wound through a random roll alone; you'd need a damage modifier.

## healing_points

You can configure the number of healing points required to lower a wound to the next damage level.  You can make damage either more realistic (higher numbers, slower healing) or more Hollywood-ish (lower numbers, faster healing).

A character gets 1 healing point per day by default, and 2 if they're in a hospital, under a doctor's care, or successfully make a healing roll.  So if you set the healing time for IMPAIR to 7, it means that the character will heal from Impaired down to Flesh Wound in 4-7 days.

## healing_cron

You can configure when the healing code runs.  By default it runs daily after midnight.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/config/cron) for help if you want to change this.