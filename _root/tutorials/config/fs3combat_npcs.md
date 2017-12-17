---
toc: ~config~ Configuring FS3 Combat
title: Configuring FS3 NPC skills.
---
# Configuring FS3 Combat - NPC Skills

You can configure the skill levels used by NPCs in FS3 combat.

1. Go to the Web Portal's Admin screen.
2. Select 'Advanced Configuration'.
3. Edit `config_fs3combat_npcs.yml`

FS3 has three NPC types: Goon, Henchman and Boss.  

## Default Die Rating

The simplest configuration is just to assign each of them a die rating:

    npc_types:
        Goon:
            Default: 4
        Henchman:
            Default: 6
        Boss:
            Default: 8

> **Tip:** This is a dice pool.  So if you want a boss to be equivalent to an "Expert" PC with a "Good" attribute, you need to give them a die pool of 9 (6+3).

## Specific Skills

However, you can also fine-tune their specific skills.  This is helpful if you want to make a Boss tough to take down without making them extraordinarily deadly (or vice-versa).

    npc_types:
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

## Wound Modifier

Finally, there is a setting for 'Wounds' which is a lethality bonus (or penalty) added to all damage they **take**. To make goons easier to damage and bosses harder, you could do:

    npc_types:
        Goon:
            Default: 4
            Wounds: 30
        Boss:
            Default: 6
            Wounds: -10