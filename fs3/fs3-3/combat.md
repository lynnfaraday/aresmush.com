---
title: FS3.3 - Combat
description: 
layout: fs3
prev-article: experience.html
---

Any combat situation could be resolved either through consent or a set of simple Ability Rolls, but both require a great deal of interpretation. If Harvey shoots Bob, what does he roll? If he gets a good success, what does it mean? If Jane also shoots Bob, how do you fairly determine whether Bob is taken out by the combination of the two wounds?  

It helps to have a system to quickly, fairly, and consistently determine the outcome of the combat. That's where the FS3 combat system comes in.

{% fs3tip %}
Always remember that the purpose of a MUSH is to roleplay. The combat system is designed to support roleplay, not replace it.  If the combat system gives nonsensical results--ignore them!
{% endfs3tip %}

{% include toc.html %}

<a name="turns"/>

# Turns

Combat is organized into turns. Turns generally represent about 5-10 seconds.  Each turn, everyone involved gets to pose and act. The general flow of combat is: 
 
1. **Pose** the results of what happened *last* turn and what you are going to do *this* turn.
2. Enter your action for this turn into the combat system.
3. When everyone has posed and selected their action, the organizer triggers a new turn. 
4. The system rolls the necessary (virtual) dice to figure out what happened, and spits out a summary.
5. Rinse and repeat until the combat is over. 

{% fs3tip %}
Because the system spits out **all** results at the same time, it is not necessary to follow a pose order during combat scenes.  Everyone is reacting to the same events, so poses can happen in parallel.
{% endfs3tip %}


<a name="actions"/>

# Actions

Each turn, you can take a single action.

## Attack Actions

* **Attack** – Use a weapon.  The basic attack command hits at a single target with your currently equipped weapon. Special options to the basic attack command allow you to shoot a burst (if the weapon allows) or make a called shot.  A called shot has a greater chance of hitting your intended hit location, but also has a higher chance of missing completely.
* **Aim** – Take careful aim at a target to increase your chance to hit next turn. Aiming with a melee weapon is allowed; it represents sizing up your opponent and waiting for your opening.
* **Suppress** – You can perform suppressive fire to keep a target’s head down.  You won't hit them, but you'll impose a greater suppression modifier upon them than if you just targeted them directly.  Fully automatic weapons can suppress multiple targets at once.  Some electronic weapons (like the ECM system on a BSG Raptor) can also suppress targets.  Suppression with a melee weapon is allowed; it represents feints or other distracting moves to keep someone occupied.
* **Reload** – Reload a weapon that has run out of ammo.

## Special Attacks

* **Subdue** – Subdue is a melee attack that does no damage but has a chance of subduing the target.  Subdued targets may not act until they successfully escape or the attacker stops subduing them. 
* **Escape** – If you have been subdued, you can attempt to escape during your action.
* **Distract** - This attack does no damage, but causes the target to not be able to act for the rest of the turn.

## Supportive Actions

* **Rally** – You can attempt to rally a knocked out character, giving them a chance at getting back into the fight. This can reflect anything from a big speech to a "snap out of it!" slap to the face.
* **Treat** – You can treat an injured person during combat.  You can treat one wound per action.  The system chooses the worst one automatically.  A treated wound has less of a wound modifier, and treating a knocked-out character has a chance of undo-ing the knockout.
* **Pass** - Use this if you're not doing anything.

Both treat and rally should only be used when appropriate.  You can't treat someone who's wrestling with another character or up a tree, for instance.

## Creative Actions

Don't feel restricted by the combat system.  If what you want to do isn't precisely reflected by the available actions, you can get creative--like using Subdue to model a disarm.  If nothing fits at all, just use a **Pass** action and figure out the results manually.
  
## Free Actions

“Free” actions can be done in conjunction with the character’s main action. These include:

* Speaking.
* Moving.
* Drawing or switching weapons (as long as they're easily accessible).
* Changing stance (see **Stance** below).

<a name="initiative"/>

# Initiative

Actions within a turn are resolved in order based on an Ability Roll for initiative. The game determines which ability is used for initiative (Alertness by default).  The number of Successes determines the order of actions, with higher results going first.

Wound modifiers take effect as soon as they happen, but Knockout rolls (see **Knockout** below) are done at the end. This means that a character still gets a chance for a dying gasp even as he’s being taken out.

> For example: Kid and Jesse are involved in a gunfight. Kid rolls higher on initiative, so he goes first and shoots Jesse. Jesse gets to shoot back, but suffers damage modifiers from Kid’s wound. After all the actions are done, Knockout rolls are made and Jesse is taken out.

<a name="stance"/>

# Stance

As a free action, a character may change their Stance. Stance reflects your general attitude and behavior in the combat. Most stances offer modifiers to attack and defense rolls. 

* **Normal** - The default stance.
* **Reckless** - You are going all-out with no regard for your own safety.  You get a +4 to attack, but everyone else gets a +4 to attack *you*.
* **Aggressive** - You are attacking aggressively with less regard for your own safety.  You get a +2 to attack, but everyone else gets a +2 to attack *you*.
* **Defensive** - You are focusing more on *not* being hit.  You get a -2 to attack, but everyone else gets a -2 to attack *you*.
* **Evasive** - Serpentine!  You're doing everything to dodge and not caring whether you can strike back.  You get a -4 to attack, but everyone else gets a -4 to attack *you*.
* **Cover** - You are attacking from behind hard cover, like a tree or wall.  There is no modifier to attack, but hits aimed at you have a chance of hitting the cover instead.
* **Hidden** - You are out of sight, but can still attack as normal. This stance just exists so that NPCs don't auto-target you when they can't see you. It is mostly used for snipers.

{% fs3tip %}
Always be sure that your RP mirrors your stance. It's tough to be reckless while sitting in a car, or take cover on an open plain.  Use common sense. 
{% endfs3tip %}

<a name="vehicles"/>

# Vehicles

The combat system supports characters in vehicles.  A character can join a vehicle as either a **Pilot** or a **Passenger**.  Any time someone in a vehicle is targeted, the vehicle itself takes the damage.  Vehicles have different hit locations than people.  If a passenger compartment is hit, the people inside may take damage too.

{% fs3tip %}
If you use the "crew" special option on your attack, you can target a crew member inside a vehicle directly (e.g. shooting through a window).  Otherwise an atack against either the pilot or a passenger is considered to be an attack against the vehicle.
{% endfs3tip %}

# Mounts
 
In addition to vehicles, the system supports mounts.  A character can specify their type of mount, which can give them certain bonuses against unmounted targets.  When someone attacks a rider, there's a chance of hitting the mount instead.  An injured mount has no game effect; it's just for RP purposes.  If your mount is taken out, though, you'll become dismounted and suffer fall damage.

{% fs3tip %}
If you use the "mount" special option on your attack, you can target the mount instead of the rider.
{% endfs3tip %}

<a name="attack-resolution"/>

# Attack Resolution

Many combat actions result in an “attack” of some sort. The system will take care of resolving attacks for you, but it can be helpful to understand the basics of how it works.  If you want more nitty-gritty details, see [Combat Mechanics](/fs3/fs3-3/combat-mechanics.html).

The basic steps for resolving an attack are outlined below and described further in subsequent sections:

1. Determine whether the attack hit, missed, or was dodged.
2. Determine hit location.
3. Determine the effect of cover and armor.
4. Determine damage.

In general, all attacks are resolved using simple ability rolls. The attacker rolls his weapon’s attack skill. The defender rolls a defense skill based on his weapon and the attacker's weapon.

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

When you attack, you choose where you’re aiming. The default assumption is that you’re aiming for center of mass. For a human, this is the chest.

There is no direct modifier for taking a “called shot” in FS3; you just declare that you’re aiming for a different body part. However, smaller body parts (like a hand) will require a better roll to hit the desired target location, and have a greater chance of missing completely.

The system will tell you where an attack landed.  You can use some creative license here.  Just keep it in the ballpark. The torso can be any part of the chest, shoulders, abdomen, back, buttocks, etc.  The head can include the face, ears, scalp, jaw, etc.

<a name="cover-and-armor"/>

# Cover and Armor

Armor can reduce damage from an attack or even stop it completely.  If a character is in cover, the attack might hit the cover instead of them.  You will see messages like "reduced by armor", "stopped by armor", or "hits the cover they're behind" to indicate when this happens, so you can roleplay accordingly.

<a name="damage"/>

# Damage

There are no hit points in FS3. Wounds are tracked individually, and each wound's *Wound Modifier* contributes to a total modifier  applied to all skill rolls.  The more seriously hurt you are, the less effective you become until finally you are knocked out of the fight completely.

| Damage Level | Wound Modifier | Example |
| ---- |
| Graze | 0 | Graze wounds are not tracked on the damage display.  They are just a RP effect - a glancing blow, a scratch, or a bruise through armor. |
| Flesh Wound | 0.25 | A typical Hollywood flesh wound.  Hurts but doesn't slow you down. |
| Impaired | 2 | Hurts badly enough to affect your use of that body part, but still not a big deal. May need stitches, a sling or a brace for a few days. |
| Incapacitated | 7 | Hurts badly enough to keep you from using that body part effectively for a few days. |

Characters are free to roleplay wounds creatively; they are deliberately vague to give freedom for interpretation based on the circumstances at hand.

{% fs3tip %}
The system assumes that there are no long-term effects from damage; no broken bones, severed arteries or internal organs damaged.  If you're going to impose more serious effects, you'll need to manually adjust your [Healing](/fs3/fs3-3/combat.html#healing).
{% endfs3tip %}

<a name="knockout"/>

# Knockout

There is no death in FS3 combat, except at the admin or player’s discretion. The worst result of combat is a knockout, which means you have been taken out of the fight.

Knockout does **not** literally mean you are knocked unconscious, although that is an easy interpretation.  You could be out cold, writhing in pain, subdued, panicked, sitting in a disabled vehicle, killed, or any other appropriate result--as long as you’re no longer fighting.

At the end of any turn in which you took damage and your total Wound Modifier is 1 or more, you must make a Knockout Roll (using Composure by default), modified by your total wound modifier. 

<a name="luck"/>

# Hero Factor and Luck

Player characters and important NPCs can use **[Luck Points](/fs3/fs3-3/luck.html)** in combat to gain an advantage.

Each turn, you may spend a luck point to get a +3 bonus to ONE of the following: 

* Attack 
* Defense 
* Initiative 
 
These bonuses last only a turn, so don’t waste them. 

You can also spend a luck point to recover immediately from a Knockout.  This allows you to keep going despite your wounds.  Although recovering from a knockout does *reduce* wound penalties, it doesn't eliminate them.  You might want to think twice about spending a luck point if you're too injured to be effective.

<a name="healing"/>

# Healing

In the real world, combat injuries are often devastating and disabling, but most players don't find it fun to be laid up for weeks after an injury and then spend months in physical therapy.  Combat damage results are deliberately Hollywood-ized.

Some weapons do "stun" damage, which heals overnight.

For physical wounds, each day you accumulate **Healing Points**.  When you have enough, your wound is reduced to the next lower level.

| Damage Level | Healing Points  |
| ---- |
| FleshWound | 7 |
| Impaired | 10 |
| Incapacitated | 5 |

Normally you gain 1 healing point per day.  You get a bonus point if you're under the care of a PC doctor **or** make a successful Recovery Roll (using Brawn by default).

Once a wound begins healing, the Wound Modifier is reduced by 1/3rd.

{% fs3tip %}
The system assumes that there are no long-term effects from damage; no broken bones, severed arteries or internal organs damaged.  If you're going to impose more serious effects, you'll need to take that into account manually.  For example, if you assume you've got a broken arm, the system may tell you that you're "healed" in a week but you'd still need a cast for a month or so after that.
{% endfs3tip %}