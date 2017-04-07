---
title: FS3.3 - Combat Mechanics
description:
layout: fs3
---

For those who care about the nitty-gritty about how the combat system works, this article is for you.

<a name="attacks">

# Attacks

## Aim

Aiming givs a +3 bonus to attack the next turn. Spending more than one turn aiming does not increase the modifier, and the modifier is lost if you switch targets.

## Suppress

Suppression is resolved by making an attack roll as normal, with a defense of a Composure Roll instead of the normal defense skill. If the attack “hits”, no damage is done but it applies a number of stress points equal to 2 plus the difference between the attacker and defender’s roll results.

For example: Bruno fires his pistol to suppress Tom. Bruno rolls a 3 Hits and Tom rolls 1, giving a difference of 2. This inflicts 4 stress points on Tom.

A fully automatic or explosive weapon can suppress up to 3 targets in a single turn. Each target requires a separate attack and defense roll.

## Subdue and Escape

A subdue attempt is resolved by making an attack roll as normal. If the attack “hits”, the target is subdued. No damage is done.

The attacker cannot take any other action (other than “free” actions) while subduing another character; if he does, the other character automatically escapes.  An escape is resolved with the same roll again.  If the defender wins, they escape and may take a normal action next turn.

## Rally

Rally requires no special roll, but immediately allows the rallied character to make another Knockout Roll. If the Knockout Roll succeeds, the character is no longer knocked out.

## Treat

The healer makes a first aid ability roll. If successful, it reduces wound modifiers for the target's worst injury (the same as if a wound had been healed).  It also allows a knocked out character to immediately make another Knockout Roll. If the Knockout Roll succeeds, the character is no longer knocked out.

## Burst and Auto Fire

Full-auto (8-round burst) or burst fire (3-round burst) is resolved just like a regular attack, but with a separate attack and defense roll per bullet. All bullets after the first one receive a negative modifier based on the recoil statistic of the weapon multiplied by the number of bullets so far (excluding the first).

Example: Bob is firing full-auto at a single target. His weapon has a recoil modifier of 1. He makes 8 attack rolls total, the first with a -0 modifier, the second with -1, the third with -2, etc. Defense rolls, damage, armor, etc. must be determined separately for each of the bullets.

Full-auto fire can be directed at up to 3 targets in a single turn.

| Number of Targets | Bullets Per Target |
| ---- |
| 1 | 8 |
| 2 | 3 |
| 3 | 1 |

## Explosions

Third edition has done away with the different target ranges for explosive attacks.  Instead you can target up to three people with the explosive.  There is a separate attack and defense roll for each target. 

In addition to the regular attack, explosive weapons with shrapnel have a chance of doing 0-5 shrapnel wounds to each target in the blast.

<a name="armor">

# Stress

Stress accumulates in combat as your character is attacked, making you less effective.  Each stress point causes a -1 to your attack rolls.

Every attack - even if it does no damage - inflicts 1 stress point, up to a maximum of 5.  The suppress attack inflicts more stress than normal - see that attack description for details.

You automatically recover 1 stress point every turn.  You can recover additional stress by making a successful Composure roll - 1 extra point per success.

# Armor

Some characters may wear body armor to protect them from damage. Most armor will only protect certain body parts, so the first step is using the hit location to determine whether the armor even comes into play.   Next, some areas are protected better than others, so figure out the Protection value of the location struck.

Armor is handled as an opposed roll between the weapon's Penetration value and the armor's Protection value, augmented by the net successes on the attack roll.

> For example:  Bob is firing an Assault Rifle (penetration 4) against Harry.  It hits Harry in the chest, which is protected by his flak jacket (protection 4).   Bob got 2 net successes on the attack roll.   The system will make an opposed roll with 4 dice (Protection) versus 6 dice (Penetration + Net Successes).

Use the table below to determine the armor result:

| Roll | Result |
| ---- |
| Weapon gets a Solid Victory or higher. | Attack found a weak spot; armor doesn't apply. |
| Weapon gets a Marginal Victory or Draw. | Armor applies a random lethality penalty from 1-100, reducing damage. |
| Armor gets a Solid Victory or higher. | Armor stops the attack completely; no damage is done.|

The table below shows some suggested protection and penetration based on the modern world.
  
| Weapon / Armor| Penetration / Protection Value | 
| ---- |
|Interior wall (drywall / plaster)|1|
|Knife|2| 
|Solid wood furniture|3|
|Anti-Personnel Shrapnel|3|
|Light body armor (undershirt vest)|3|
|Light small arms (pistols, SMGs)|3|
|Military body armor (kevlar vest)|4|
|Medium small arms (rifles)|4|
|Car door|4|
|Brick wall|5|
|Light Truck|5|
|Fighter Jet|5|
|Heavy small arms (12.5mm/.50cal)|8|
|Cargo aircraft / Bomber|8|
|Anti-Aircraft Missile|10|
|Light cannon (20mm)|10|
|Armored Personnel Carrier (APC)|10|
|Medium cannon (40mm)|15|
|Tank|20|
|Anti-Tank Missile|20|

<a name="cover">

# Cover

If a target is in cover, the attack has a chance of being stopped by cover instead of hitting the target. 

| Attack Roll | Chance of Hitting Cover |
| ---- |
| Crushing Victory | 0% |
| Solid Victory | 25% |
| Marginal Victory | 50% |

<a name="damage">

# Damage

The damage severity of a wound is based on a percentile dice roll modified by:

* The weapon’s lethality statistic.
* +30 if you're a NPC, because you're not a hero and you get badly wounded more easily.
* +20 if the hit location was deemed a "Critical" one on the hit location chart.
* +0 if the hit location was deemed a "Vital" one on the hit location chart.
* -10 if the hit location is neither Critical nor Vital on the hit location chart.
* armor, if it applies

All modifiers are cumulative, and are added to the percentile roll to give a final result.

| Roll | Result |
| ---- |
| 20 or less| Graze |
| 21 - 60 | FleshWound |
| 61 - 100 | Impaired |
| 101 or higher | Incapacitated |


Knockout is based on a composure roll, offset by the damage modifier.  PCs receive an automatic +3 bonus to the knockout roll.

<a name="hit-location">

# Hit Location

FS3 uses a custom hit location system.  First choose a hit location you're aiming at.  Typically this is the center of mass (chest for humans) unless you're doing a called shot.  Imagine an archery target with rings superimposed over this hit location.

{{#pretty-image}}/assets/media/hitloc_chest.jpg{{/pretty-image}}

The better you roll, the closer you'll get to the bullseye.

Mechanics-wise, each hit location is assigned a list of 10 places where a hit might land, corresponding to the green, yellow and red zones of the bullseye chart.

Hit location is determined by rolling a random number from 1-10, then adding the attacker's net successes.  So the more successes, the closer you'll get to the bullseye.

## Called Shots

When you target a hit location *other than the center of mass*, it shifts the bullseye to that location.

{{#pretty-image}}/assets/media/hitloc_head.jpg{{/pretty-image}}

{{#pretty-image}}/assets/media/hitloc_hand.jpg{{/pretty-image}}

Notice that more of the bullseye now falls on dead air, increasing the chance of a miss.  With a called shot, consider the attacker's net successes.

| Attacker Net Successes | Location |
| ---- |
| > 3 | Exactly Where Aimed |
| 1-3 | Random roll with the bullseye centered on a different location  |
| 0 (tie) | Near Miss |

So each location has its own hit location chart for use in called shots. 

<a name="vehicles">

# Vehicle Crew Hits

If a vehicle is hit in a crew compartment, each passenger may receive shrapnel wounds.  The amount of shrapnel depends on the damage to the vehicle.

| Vehicle Damage | Shrapnel |
| ---- |
| Graze | 0 |
| Flesh | 0-1  |
| Impair | 0-2 |
| Incap | 0-4 |