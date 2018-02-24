---
toc: ~config~ Configuring FS3 Combat
title: Configuring FS3 NPC skills.
---
# Configuring FS3 Combat - NPC Skills

You can configure the skill levels used by NPCs in FS3 combat.

1. Select Admin -> Setup.
2. Edit `fs3combat_npcs.yml`

## npc_types

You can define the NPC types available in your game.  The standard ones are Goon, Henchman, Miniboss and Boss.

### default

The default rating is what the NPC rolls for skills by default.

> **Tip:** This is a total dice pool, encompassing skill plus attribute.  So if you want a boss to be equivalent to an "Expert" PC with a "Good" attribute, you need to give them a die pool of 9 (6+3).

    Goon:
        Default: 4
    Henchman:
        Default: 6
    Boss:
        Default: 8

### Fine-Tuning Skills

You can also fine-tune dice pools for specific skills.  This is helpful if you want to make a Boss tough to take down without making them extraordinarily deadly (or vice-versa).  You can also make specialist NPCs who are good with some weapons but not others.

    Goon:
        Default: 4
        Firearms: 6
        Gunnery: 6
        Piloting: 4
    Henchman:
        Default: 6
        Firearms: 8
        Gunnery: 8

Any skills not expressly listed will use the 'Default' value.

## wounds

Finally, there is a setting for 'Wounds' which is a lethality bonus (or penalty) added to all damage they **take**. To make goons easier to damage and bosses harder, you could do:

    Goon:
        Default: 4
        Wounds: 30
    Boss:
        Default: 6
        Wounds: -10