---
title: FS3.3 - Combat
description:
layout: fs3
---

Any combat situation could be resolved either through consent or a set of simple Ability Rolls. The only trouble with either of these solutions is that they require a great deal of interpretation. If Harvey shoots Bob, what does he roll? If he gets a good success, what does it mean? If Jane also shoots Bob, how do you fairly determine whether Bob is taken out by the combination of the two wounds?

If combat scenes are a regular occurrence, or if you have combat scenes involving large numbers of players, it helps to have a system to quickly, fairly, and consistently determine the outcome of the combat. The FS3 combat system is intended to fill that need.

> <i class="fa fa-info-circle" aria-hidden="true"></i> **Tip:** Always remember that the purpose of a MUSH is to roleplay. The combat system is designed to support roleplay, not replace it.  If the combat system spits out stupid results - ignore them!

<a name="turns"/>

# Turns

Combat is organized into turns. Turns are not a specific length of time, but generally represent a few seconds.  Each turn, everyone involved gets to pose and act. The general flow of combat is: 
 
1. Pose the results of what happened *last* turn and what you are going to do *this* turn.
2. Enter your action for this turn into the combat system.
3. When everyone has posed and selected their action, the organizer triggers a new turn. 
4. The system rolls the necessary (virtual) dice to figure out what happened, and spits out a summary.
5. Rinse and repeat until the combat is over. 

<a name="actions"/>

# Actions

## Attack Actions

* **Attack** – Use a weapon.  The basic attack command hits at a single target with your currently equipped weapon. Special options to the basic attack command allow you to execute a short (3-round) or fullauto burst if the weapon allows or make a called shot.  A called shot has a greater chance of hitting your intended hit location (or nearby), but also has a higher chance of missing completely.
* **Aim** – Take careful aim at a target to increase your chance to hit next turn. Aiming with a melee weapon is allowed; it represents sizing up your opponent and waiting for your opening.
* **Suppress** – You can perform suppressive fire to keep a target’s head down.  You won't hit them, but you'll impose a greater suppression modifier upon them than if you just targeted them directly.  Fully automatic weapons can suppress multiple targets at once.   Some electronic weapons (like the ECM system on a BSG Raptor) can also suppress targets.  Suppression with a melee weapon is allowed; it represents feints or other distracting moves to keep someone occupied.
* **Reload** – Reload a weapon that has run out of ammo.  Some weapons may take multiple turns to reload. 

## Special Attacks

* **Subdue** – Subdue is a melee attack that does no damage but has a chance of subduing the target.   You can also use this action to simulate an attempted disarm.  Subdued targets may not act until they successfully escape or the attacker stops subduing them. 
* **Escape** – If you have been subdued, you can attempt to escape during your action.

## Supportive Actions

* **Rally** – You can attempt to rally a knocked out character, giving them a chance at getting back into the fight. This can reflect anything from slapping a lightly- wounded soldier on the face and yelling at him to “snap out of it” to giving a big morale boosting speech to encourage a badly wounded comrade to keep fighting. It does not reflect first aid, which is handled by the Treat action.
* **Treat** – You can treat an injured person during combat to reduce their wound modifiers.  You can do this with vehicles too, to represent jury-rigged workarounds.  Treating a knocked-out player has a chance of undo-ing the knockout.

Both treat and rally should only be used when appropriate.  You can't treat someone who's wrestling with another character or up a tree, for instance.

## Free Actions

“Free” actions can be done in conjunction with the character’s main action. These include:

* Speaking.
* Moving.
* Drawing or switching weapons, as long as it's readily available.
* Changing stance (see **Stance** below).

<a name="initiative"/>

# Initiative

Actions within a turn are resolved in order based on an Ability Roll for initiative. The game determines which ability is used for initiative.  In **[FS3 Core](/fs3/fs3-3/core)**, it's Composure.  The number of Successes determines the order of actions, with higher results going first. In case of ties, choose who goes first at random.

It is important to note that Knockout rolls (see **Knockout** below) are made after all actions have been resolved. This means that a character still gets a chance for a dying gasp even as he’s being taken out.

> For example: Kid and Jesse are involved in a gunfight. Kid rolls higher on initiative, so he goes first and shoots Jesse. Jesse gets to shoot back, but suffers damage modifiers from Kid’s wound. After all the actions are done, Knockout rolls are made and Jesse is taken out.

<a name="stance"/>

# Stance

As a free action, a character may change their Stance. Stance reflects your general attitude and behavior in the combat. Most stances offer modifiers to attack and defense rolls. 

* Normal - The default stance.
* Aggressive - You are attacking aggressively with little regard for your own safety.  You get a +3 to attack, but everyone else gets a +3 to attack *you*.
* Defensive - You are focusing more on *not* being hit.  Serpentine!  You get a -3 to attack, but everyone else gets a -3 to attack *you*.
* Cover - You are attacking from behind hard cover, like a tree or wall.  There is no modifier to attack, but hits aimed at you have a chance of hitting the cover instead.
* Hidden - You are out of sight, but can still attack as normal.  This stance just exists so that NPCs don't auto-target you when they can't see you.  It is mostly used for snipers.

Always be sure that your RP mirrors your stance.  You can't attack aggressively while crouched behind a wall, or be defensive while running down a corridor shouting a war cry, or take cover on an open plain.  That's just silly.  

<a name="attack-resolution"/>

# Attack Resolution

Many combat actions result in an “attack” of some sort. The basic steps for resolving an attack are outlined below and described further in subsequent sections:

1. Determine whether the attack hit, missed, or was dodged.
2. Determine hit location.
3. Determine the effect of cover and armor.
4. Determine damage.

In general, all attacks are resolved using simple ability rolls. The attacker rolls his weapon’s attack skill. The defender rolls a defense skill based on his weapon and the attacker's weapon.

> <i class="fa fa-cubes" aria-hidden="true"></i>  **Roll Tip:** Because there's no real skill in dodging bullets, FS3 allocates everyone the same dice for a defense roll against firearms.  Your stance has the most impact for defending yourself.

There may be modifiers to either roll based on wounds, the weapon itself, the attacker and defender’s stance, or other special situations.

Use the table below to determine the outcome of the attack based on the result of both the attack and defense rolls.

| Roll | Result |
| ---- |
| Attack roll fails (no successes). | Attacker misses completely. |
| Attacker has fewer Hits than defender. | Defender manages to block, dodge, duck, etc. Attack misses. |
| Attacker has same or more Hits than defender. Ties go to the attacker. | Attack hits. Proceed to the next step.|
 
<a name="hit-location"/>

# Hit Location

Where the attack hit affects damage, determines whether armor applies, and is generally useful for roleplay.  

Humanoid hit locations include:  Head, Neck\*, Torso, Arm (right/left), Hand\* (right/left), Leg (right/left), Foot\* (right/left), Groin\*.

Hit locations marked with a (*) will never be hit by random rolls, but can be targeted explicitly as called shots.

When you attack, you choose where you’re aiming. The default assumption is that you’re aiming for center of mass. For a human, this is the chest. The better your attack roll, the closer you’ll get to your intended target location. If you don’t roll great, you may hit a nearby location or get a "Near Miss".

There is no direct modifier for taking a “called shot” in FS3; you just declare that you’re aiming for a different body part. However, smaller body parts (like a hand) will require a better roll to hit the desired target location, and have a greater chance of missing completely.

The system will tell you where an attack landed.  You can use some creative license here.  Just keep it in the ballpark. The torso can be any part of the chest, shoulders, abdomen, back, buttocks, etc.  The head can include the face, ears, scalp, jaw, etc.

<a name="cover-and-armor"/>

# Cover and Armor

Both cover and armor have a chance of reducing the damage done by an attack.  You will see a message like:  "Graze (Reduced by Cover)" or "FleshWound (Reduced by Armor)" to indicate when this happens, so you can roleplay accordingly.

<a name="damage"/>

# Damage

There are no hit points in FS3. Wounds are tracked individually, and each wound's *Wound Modifier* contributes to a total modifier  applied to all skill rolls while wounded.  So the more seriously hurt you are, the less effective you become until finally you are knocked out of the fight completely.

| Damage Level | Wound Modifier | Example |
| ---- |
| Graze | 0 | Just a scratch!  No big deal. |
| FleshWound | 0.25 | It's just a flesh wound! Gonna hurt tomorrow, but doesn't affect your ability to fight too much. |
| Impairing | 1 | Ouch!  Somewhat impairs your use of the affected area for awhile, and will probably leve a scar. |
| Incapacitating | 4 | That's going to leave a mark!  Seriously impairs your use of the affected area for awhile, and may have long-term effects. (See **Healing** below.)|

Characters are free to roleplay wounds creatively; they are deliberately vague to give freedom for interpretation based on the circumstances at hand.

Incapacitating wounds are relatively rare, but are meant to be just that - incapacitating.  While you may be able to keep fighting, you're going to suffer some serious impariment in that body part and should roleplay accordingly.  For example, you could be dizzy or blinded by blood in your eyes from a head wound, or be unable to use an incapacitated arm or bear weight on an incapacitated leg. 

<a name="knockout"/>

# Knockout

There is no death in FS3, except at the admin or player’s discretion. The worst result of combat is a knockout, which means you have been taken out of the fight.

Knockout does **not** literally mean you are knocked unconscious, although that is an easy interpretation.  You could be out cold, writhing in pain, subdued, panicked, sitting in a disabled vehicle, killed, or any other appropriate result – as long as you’re no longer fighting.

At the end of any turn in which you took damage and your total Wound Modifier is 1 or more, you must make a Knockout Roll, modified by your total wound modifier.  Each game determines which ability is used for the Knockout Roll.  In **[FS3 Core](/fs3/fs3-3/core)**, it's Composure.

<a name="luck"/>

# Hero Factor and Luck

Player characters and important NPCs can use **[Luck Points](/fs3/fs3-3/luck)** in combat to gain an advantage.

Each turn, you may spend a luck point to get a +3 bonus to ONE of the following: 

* Attack 
* Defense 
* Initiative 
 
These bonuses last only a turn, so don’t waste them. 
 
You can spend a luck point to move damage from one hit location to another immediately after an injury.  It doesn't affect the damage; it is purely for cosmetic/roleplay reasons.

You can also spend a luck point to recover immediately from a Knockout using the `combat/hero` command.  This allows you to keep going despite your wounds.  You still suffer the same wound penalties, so you might want to think twice about using this if you're too injured to be effective.

<a name="healing"/>

# Healing

In the real world, combat injuries are often devastating and disabling, but most players don't find it fun to be laid up for weeks after an injury and then spend months in physical therapy.  Combat damage results are deliberately Hollywood-ized.

Lesser wounds heal pretty quickly, but Incapacitating lay you up for awhile.  Each day you accumulate **Healing Points**.  When you have enough, your wound is reduced to the next lower level.

| Damage Level | Healing Points  |
| ---- |
| Graze | 3 |
| FleshWound | 10 |
| Impairing | 14 |
| Incapacitating | 30 |

Normally you gain 1 healing point per day.  You get a bonus point if you're in a hospital or under the care of a PC doctor (via the `heal` command).  You may gain an additional 0.5 healing points by making a successful Recovery Roll.  In **[FS3 Core](/fs3/fs3-3/core)**, Athletics is used for recovery.  So normally an Incapacitating wound would take about 2 months to heal completely, but with a hospital/doctor and some successful healing rolls, it could be as quickly as three weeks.

Some weapons do "stun" damage, which heals three times as fast as regular damage.

Long-term effects from an Incapacitating wound are left up to the player/storyteller.  The damage system does not model these effects, so it's up to you to incorporate them appropriately into your RP and rolls.  If you say that an Incapacitating wound to the arm results in a broken arm, then you should RP being in a cast with an appropriate wound modifier even after the system says you're healed.

> <i class="fa fa-codepen" aria-hidden="true"></i> **Code Tip:** Once a wound begins healing, the Wound Modifier is reduced by 1/3rd.
