---
title: FS3.3 - Combat Quick Reference
description: 
layout: fs3
---

This is a quick-reference help file for FS3 combat commands.  For full details on the combat system, see the [FS3 Combat Player's Guide](/fs3/fs3-3/combat.html).

{% include toc.html %}

## Interactive Tutorial

An interactive tutorial to introduce you to the basic combat commands is available [here](/fs3/fs3-3/combat-walkthrough.html).

## Starting Combat

`combat/start`

`combat/start mock`

Someone (the "organizer") needs to start the combat.  Mock combats are for training exercises where damage is fake (e.g. laser tag, flight simulators, etc.)

There are more tips for organizers in [Running Combats](/fs3/fs3-3/running-combat.html).

## Joining Combat

`combat/join <#>`

`combat/join <#>/<type>`

You need to know the combat number to join it.  Usually the organizer will tell you, or you can find it with `combat/all`

If a game supports multiple combatant types, these are shortcuts that will set you up with the appropriate weapon, vehicle and armor automatically.  Otherwise you default to being a soldier.  `combat/types` will show you the options.

If you ever need to leave combat, use `combat/leave`.

## Combat HUD

The combat Heads-Up Display is your summary of the combat status.

`combat`


    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
    Combat 8                                                  Organized by Faraday
    ------------------------------------------------------------------------------
    Combatant           Damage    Weapon(ammo)             Action(stance)
    -- Team 1 --
    Cate                X---      Cannon                   ---- (plt)
    -- Team 2 --
    Bob                 ----      Rifle (15)               Attack Cate  (COV)
    ------------------------------------------------------------------------------
    Observers
    Faraday
    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+

## Choosing Gear

`combat/weapon <weapon>`

`combat/armor <armor>`

The system will pick default gear for you, but you can change it if you need to.  Use `weapons` and `armor` to see available gear.

## Choosing Stance

`combat/stance <stance>`

[Stances](/fs3/fs3-3/combat.html#stance) affect your character's general attitude and behavior in combat, and give attack/defense penalties.  Available stances are **Normal**, **Reckless**, **Aggressive**, **Defensive**, **Evasive**, **Cover** and **Hidden**.  Always be sure that your RP mirrors your stance.

## Choosing Vehicles

`combat/pilot <vehicle>`

`combat/passenger <vehicle>`

`combat/disembark`

You can become a pilot or passenger in a vehicle.  Use a vehicle type from `vehicles` to create a new vehicle, or a specific vehicle name if one already exists.  Disembark leaves your vehicle, and stays in combat as a soldier.

## Starting a Turn

`combat/newturn`

The organizer will trigger each new turn.  You will then:

1. Pose the results of what happened *last* turn and what you are going to do *this* turn.
2. Enter your action for this turn.

When everyone has posed and chosen their actions, the organizer will trigger a new turn.  The system will spit out the results of the last turn, and the cycle repeats.

{% fs3tip %}
Because the system spits out all results at the same time, it is not necessary to follow a pose order during combat scenes. Everyone is reacting to the same events, so poses can happen in parallel.
{% endfs3tip %}

## Choosing an Action

{% fs3tip %}
Your selected action will carry over from one turn to the next until you switch weapons or you or your target are knocked out.
{% endfs3tip %}

### Attack 

`combat/attack <target>`

`combat/attack <target>/called:<location>` - Called shot to a particular hit location.

`combat/attack <target>/burst` - Fires a short burst (3 rounds) if the weapon allows.
    
`combat/attack <target>/mod:<attack modifier>` - Imposes a modiifer, positive or negative, on the roll.
    
`combat/attack <target>/crew` - Targets the crew instead of the vehicle.
    
`combat/attack <target>/mount` - Targets the mount instead of the rider.

The basic attack makes a single strike with your equipped weapon.

{% fs3tip %}
You can combine multiple attack options with commas (e.g. combat/attack Bob=mod:2,burst).  You cannnot combine a called shot and a burst.
{% endfs3tip %}

### Full-Auto

`combat/fullauto <list of targets>`

If your weapon supports full-auto fire, you can attack up to three targets with an 8-round burst.

### Explosions

`combat/explode <list of targets>`

Explosive weapons can hit multiple targets with shrapnel.

### Suppress / Distract

`combat/suppress <list of targets>`

`combat/distract <target>`

Both suppression and distract do no damage, but instead reduce the opponent's effectiveness.  

Suppressive fire keeps the target's heads down and applies negative modifiers to their attacks.  To attack multiple targets, you need either an explosive weapon or a fully automatic one (using an 8 round burst).

Distractions can disorient a target, causing them to not be able to act for the rest of the turn.


### Subdue / Escape

`combat/subdue <target>`

`combat/escape`

The subdue command gets someone into a hold, and the escape command lets them try to get out of it.

### Aim

`combat/aim <name>`

Instead of attacking, you can bide your time and take careful aim.  This will give you a bonus on your next attack on that target.


### Treat

`combat/rally <name>`

`combat/treat <name>`

Treat tends to a a wounded character.  You can treat one wound per action.  The system chooses the worst one automatically.  A treated wound has less of a wound modifier, and has a chance to awaken a knocked out character.  Rally also attempts to rouse a KO'd character, but without first aid.


### Misc

`combat/pass` - Do nothing.

`combat/reload` -  Reload your weapon.  Some weapons may take more than one turn to reload.


## Knockout and Luck

`combat/luck <attack, defense or initiative>`

`combat/hero`

You can spend luck to get a single-turn bonus on attack, defense or initiative.  This only lasts a turn, so don't waste it.  You can also spend a luck point to heroically recover from a knockout.

{% fs3tip %}
If there's a medic on your team, they might be able to revive you with a combat/treat action.  Or someone else could rally you.  Consider those options before spending luck points. 
{% endfs3tip %}


## Watching and Controlling NPCs

`combat/join <#>/observer`

If you want to watch combat, or you're just there to emit some NPCs, you can join combat as an **Observer**.

All combat commands can take a NPC name and equal sign in front to control a NPC.  For instance, `combat/pass MyNPC=` or `combat/attack MyNPC=Target`.