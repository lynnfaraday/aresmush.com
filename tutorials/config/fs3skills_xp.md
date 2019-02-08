---
title: Configuring FS3 - Experience
layout: page
tags:
- config
---

To configure the FS3 Skills List:

1. Select Admin -> Setup.
2. Edit `fs3skills_xp.yml`

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Before You Start

You should read the article [Tweaking FS3](http://aresmush.com/fs3/fs3-3/tweaking-fs3.html), which contains important information to help guide you in customizing your game.

## periodic_xp

This is the amount of XP that is given out each time the periodic cron job runs (weekly by default).

## max_xp_hoard

You can configure the maximum amount of XP that someone can save up.  The default gives people a little buffer in case they forget to spend their XP, but keeps them from raising a flurry of skills all at once.

## days_between_learning

This is essentially a 'cooldown' between XP spends on a specific skill.

## skills_requiring_training

When transitioning from amateur (rating 2, Fair) and professional (rating 3, Competent) in these skills, the player will be warned that they need some IC training to justify the increase.  This warning does not apply once you cross over into the professional levels.

## dots_beyond_chargen_max

After chargen, `max_points_on_attrs` and `max_points_on_action` still control how many dots above average a character can have in attributes and action skills.  This prevents the dinosaur effect where someone can become awesome at everything given enough time.

You may want to allow characters some room to grow a bit beyond the chargen maximum.  The `dots_beyond_chargen_max` setting is added to the two chargen settings to determine the absolute maximum anyone can achieve, even with XP. 

For example: If `max_points_on_attrs` is set to 12 (6 dots) and `dots_beyond_chargen_max` is set to 2, that means a character can spend XP on attributes up to a max of 8 dots above average.

## allow_advantages_xp

This setting controls whether you can raise advantages directly with XP.  In some games they may be fixed at chargen and only alterable through plots.  In other games they may require special approval.  Set this to 'true' if you want to allow them to be learned just like any other ability.

## xp_costs

XP in Third Edition works a little differently than you might be used to.  Instead of saving up a ton of XP and spending them all at once, you spend them a little bit at a time to represent improvement over time.  There is a "cooldown" between XP spends on a single skill.

When you have spent the total number of XP needed for the new ability rating, your rating rises.  The first rating point (e.g. "Everyman" or "Interest") always costs 1XP and raises immediately.  You can configure how many XP are needed for subsequent levels.

{% include tip.html content="High skills take a long time to improve, but since you earn XP each week, you still have extra to spread around on other abilities while you're waiting." %}

Consider the following example configuration: 

        language:
            1: 4
            2: 12
        action:
            1: 1
            2: 2

Raising a Language from 1 (Beginner) to 2 (Conversational) costs 4 XP and going from 2 (Conversational) to 3 (Fluent) costs 12 XP.  Assuming a 1-month cooldown between raises, it will take 4 months to become Conversational and 12 to become Fluent.

Raising an Action Skill in that example is much easier.  It takes only 1 XP to go from 1 (Everyman) to 2 (Fair) and 2 XP to go from 2 (Fair) to 3 (Competent).  After that, though, the costs go up rapidly.  

## xp_cron

The game will periodically award all approved/active characters XP.  By default this happens weekly on Saturday evenings.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/code/cron.html) for help if you want to change this.
