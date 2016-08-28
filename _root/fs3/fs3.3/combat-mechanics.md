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

Suppression is resolved by making an attack roll as normal, with a defense of a Knockout Roll instead of the normal defense skill. If the attack “hits”, no damage is done but it applies a number of Suppression Points equal to twice the difference between the attacker and defender’s roll results. Suppression Points apply a modifier to attacks.

For example: Bruno fires his pistol to suppress Tom. Bruno rolls a 3 Hits and Tom rolls 1, giving a difference of 2. This inflicts 4 Suppression Points on Tom.

A fully automatic firearm can suppress up to 5 targets in a single turn, expending 1 bullet per target. Each target requires a separate attack and defense roll.

Suppressive fire with a full-auto weapon can be directed at up to 3 targets in a single turn, with the bullets distributed as equally as possible among the targets.

## Subdue and Escape

A subdue attempt is resolved by making an attack roll as normal. If the attack “hits”, the target is subdued. No damage is done.

The attacker cannot take any other action (other than “free” actions) while subduing another character; if he does, the other character automatically escapes.  An escape is resolved with the same roll again.  If the defender wins, they escape and may take a normal action next turn.

## Rally

Rally requires no special roll, but immediately allows the rallied character to make another Knockout Roll. If the Knockout Roll succeeds, the character is no longer knocked out.

## Treat

The healer makes a first aid ability roll. If successful, it reduces wound modifiers (the same as if a wound had been healed) and also allows a knocked out character to immediately make another Knockout Roll. If the Knockout Roll succeeds, the character is no longer knocked out.

## Burst and Auto Fire

Full-auto (6-round burst) or burst fire (3-round burst) is resolved just like a regular attack, but with a separate attack and defense roll per bullet. All bullets after the first one receive a negative modifier based on the recoil statistic of the weapon multiplied by the number of bullets so far (excluding the first).

Example: Bob is firing full-auto. His weapon has a recoil modifier of 1. He makes 6 attack rolls total, the first with a -0 modifier, the second with -1, the third with -2, etc. Defense rolls, damage, armor, etc. must be determined separately for each of the bullets.

Full-auto fire can be directed at up to 3 targets in a single turn, with the bullets distributed as equally as possible among the targets.

## Explosions

Third edition has done away with the different target ranges for explosive attacks.  An explosive attack now uses the same command as a regular attack, but has an additional effect of apply 1-8 shrapnel wounds in addition to the main weapon damage.

<a name="armor">

# Armor

Some characters may wear body armor to protect them from damage. Most armor will only protect certain body parts, so the first step is using the hit location to determine whether the armor even comes into play.   Next, some areas are protected better than others, so figure out the Protection value of the location struck.

Armor is handled as an opposed roll between the weapon's Penetration value and the armor's Protection value, augmented by the net successes on the attack roll.

> For example:  Bob is firing an Assault Rifle (penetration 4) against Harry.  It hits Harry in the chest, which is protected by his flak jacket (protection 4).   Bob got 2 net successes on the attack roll.   The system will make an opposed roll with 4 dice (Protection) versus 4 dice (Penetration + Net Successes).

Use the table below to determine the armor result:

| Roll | Result |
| ---- |
| Weapon gets a Solid Victory or higher. | Attack found a weak spot; armor doesn't apply. |
| Weapon gets a Marginal Victory or Draw. | Armor applies a -30 lethality penalty, reducing damage. |
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

Cover is essentially a fixed armor with protection 3 (representing a solid wall or furniture) that covers the lower part of your body (abdomen, legs, feet).  It is assumed that you're exposing just your upper body to fire.

If the character is wearing body armor, the effects of armor and cover are cumulative.

<a name="damage">

# Damage

The damage severity of a wound is based on a percentile dice roll modified by:

* The weapon’s lethality statistic.
* +20 if you're a NPC, because you're not a hero and you get badly wounded more easily.
* +20 if the hit location was deemed a "Vital" one on the hit location chart.
* -20 if armor applies.
* -20 if cover applies.

All modifiers are cumulative, and are added to the percentile roll to give a final result.

| Roll | Result |
| ---- |
| 30 or less| Graze |
| 31 - 75 | FleshWound |
| 76 - 100 | Impaired |
| 101 or higher | Incapacitated |

<a name="hit-location">

# Hit Location

FS3 uses a custom hit location system.  First choose a hit location you're aiming at.  Typically this is the center of mass (chest for humans) unless you're doing a called shot.

Imagine an archery target with rings superimposed over this hit location.  If you hit, you get somewhere on the target. 

{{#pretty-image}}/assets/media/hitloc_chest.jpg{{/pretty-image}}

When you target a hit location other than the center of mass, some of the archery target will fall on dead air.  This is termed a "Near Miss", meaning close but no cigar.  It would've been a hit if you hadn't done a called shot.  The more difficult an area is to hit, the more of it will result in a Near Miss.

{{#pretty-image}}/assets/media/hitloc_head.jpg{{/pretty-image}}

{{#pretty-image}}/assets/media/hitloc_hand.jpg{{/pretty-image}}

Mechanics-wise, each hit location is assigned a list of 15 places where a hit might land.   The first five correspond to the red zones in the archery target example, some of which may be a near miss if the location is very hard to hit.  The second five correspond to the yellow zones - close to the intended target but not quite.  And the third five should always be the desired hit location.

Hit location is determined by rolling a random number from 1-15, then adding the attacker's net successes.  So the more successes, the closer you'll get to the bullseye.

Example Chest: `LeftLeg LeftLeg RightLeg RightLeg LeftArm LeftArm RightArm RightArm Head Head Chest Chest Chest Chest Chest`

Example Neck: `MISS MISS MISS MISS RightArm LeftArm Chest Chest Chest Head Neck Neck Neck Neck Neck`

Notice the extra MISS locations on Neck to reflect a Near Miss.

<a name="vehicles">

# Vehicle Crew Hits

If a vehicle is hit in a crew compartment, there's a chance that each passenger will take some shrapnel wounds.  This is based on a percentile roll.

| Roll | Result |
| ---- |
| 30 or less| No Damage |
| 31 - 75 | 1 shrapnel hit |
| 76 - 95 | 2 shrapnel hits |
| 96 or more | 3 shrapnel hits |
