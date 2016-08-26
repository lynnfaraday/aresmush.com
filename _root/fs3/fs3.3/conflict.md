---
title: FS3.3 - Conflict Resolution
description:
layout: fs3
---

An Ability Roll is used when you want to know if you succeed or fail at a given task using one of your Abilities.   You roll (virtual) dice based on how good you are, and the result determines the outcome.

<a name="when-to-roll"/>

# When to Roll

You don’t need to roll for every little thing.  Ability rolls are intended for challenging situations or direct opposition.  Driving to the grocery store would not normally require an ability roll, unless maybe you’re racing someone there or driving up an icy hill during a blizzard.  

> <i class="fa fa-cubes" aria-hidden="true"></i>  **Roll Tip:** Players are always free to skip rolls and negotiate a resolution as befits the story, as long as everyone agrees.

<a name="hail-mary"/>

# Limitations and Hail Mary Rolls

Rolling dice is fun and all, but it's also important to consider what your character *actually knows* and can *reasonably have a chance to accomplish*.  

This is particularly important for Abilities rated *Everyman* or even *Amateur*.  Running a footrace or shooting a pistol?  Sure.  But trying to take off a fighter jet with Everyman Piloting or perform brain surgery with Everyman Medicine?  No.  That's just ridiculous.

But the same logic applies to higher skills too.  You can't turn a cow's ear into a silk purse or leap a tall building no matter how well you roll.  Some things just *aren't possible*.

The only exception to this is if the storyteller decides to allow a "Hail Mary" roll.  If so, you can spend one or more [Luck Points](/fs3-3/luck) (at the storyteller's discretion) to get a roll out of blind luck even when one would not normally be allowed.

<a name="what-to-roll"/>

# What to Roll

Before rolling, you need to figure out which Skill or Advantage applies best to the task at hand.  When more than one applies equally well, you can choose the one with the highest rating.  If you don't have an applicable Skill/Advantage, you can make a *Default Roll* using an Attribute, as explained in the next section.

FS3 uses 8-sided dice.  You roll a number of (virtual) dice equal to the Ability Rating plus the linked Attribute.  You can gain or lose dice through special Modifiers.

> <i class="fa fa-cubes" aria-hidden="true"></i>  **Roll Tip:** Dice to Roll = 1 + Ability Rating + Linked Attribute +/- Modifiers

You won't normally be rolling unrated abilities like Languages and Background Skills.  Those are mostly for RP flavor.  If you do roll them, the code will use a rating of Expert for languages (assuming fluency) and Amateur for Background Skills (assuming a hobby/interest).  You can add an appropriate modifier (explained below) if your character is more or less skilled.

> <i class="fa fa-codepen" aria-hidden="true"></i> **Code Tip:** The `roll` command accepts a variety of options.  For instance:  `roll Melee` or `roll Melee+Wits-1`.   You can even specify a number of dice (handy for NPCs) like `roll 4`. 

<a name="defaulting"/>

# Defaulting

If a task does not fall under an ability listed on your character sheet, you may have the chance to make a Default Roll (see *Limitations and Hail Mary Rolls* above for some caveats).   You have two options:

* Use a semi-related skill with a negative modifier (typically -2).  For instance, if you lack a Vet skill you could default to Medicine to treat a hurt animal.
* Use the Everyman rating to fall back on 'common knowledge'.

> <i class="fa fa-codepen" aria-hidden="true"></i> **Code Tip:** You can make a default roll just by rolling the appropriate Attribute.  For example `roll Brawn` will make an Everyman roll linked to your Brawn attribute, effectively rolling Brawn+1.

<a name="specialties"/>

# Specialties

Abilities in FS3 are deliberately broad to simplify chargen, but some games require you to choose Specialties in certain skills to narrow your character's focus.  

If you use a specialized skill outside of the specialty, you are at a disadvantage.  Usually this means applying a negative modifier depending on how closely the task is related to one of your specialties.  There will often be house rules on a game to cover this, but here are some guidelines:

* Closely Related - -1 modifier (e.g. using Pilot/Jet when flying a single-seat plane, since single-seaters would've been part of basic fighter pilot training)
* Loosely Related - -2 modifier (e.g. using Melee/Knife when wielding a quarterstaff.  They're kinda similar, but very different styles)
* Not Related - Don't roll, it's silly.  (e.g. using Medicine/Paramedic to perform brain surgery, or Pilot/Helicopter to fly a space shuttle)

<a name="success-level"/>

# Success Level

When you roll your ability dice, any die that is a 6 or higher is counted as a success.   It only takes one success to accomplish what you set out to do.  Extra successes mean you did really well.   You can think of success levels like letter grades on a school exam.  Did you scrape by with a passing grade or score top marks?

| Rating | Description |
| ---- |
|0|Failure|
|1|Success|
|2-3|Good Success|
|4-5|Great Success|
|6+|Amazing Success|

An Embarrassing Failure happens when you get no successes and more than half your dice are 1’s.   You don’t just fail, you fail is a spectacular and embarrassing fashion - like shooting your friend or falling flat on your face.

<a name="modifiers"/>

# Modifiers

Modifiers can boost or reduce your Ability Rating, making the task easier or harder than usual.

| Modifier | Description |
| ---- |
|+/- 1|Modest boost or challenge|
|+/- 2|Significant boost or challenge|
|+/- 3|Extreme boost or challenge|

Here are some sample modifiers for a climbing roll:

| Modifier | Description |
| ---- |
|0|Climbing a tree.|
|-1|Climbing a slippery obstacle course wall.|
|-2|Climbing a challenging mountain.|
|-3|Remember Tom Cruise in Mission Impossible 2?|

> <i class="fa fa-codepen" aria-hidden="true"></i> **Code Tip:** To make an Ability Roll with a modifier, use the command `roll <ability>+/-<modifier>`.

<a name="linked-attributes"/>

# Linked Attributes

Each Action Skill is linked to a particular Attribute, but there may be times when another Attribute is better suited.  For example, Firearms is normally a Reflexes skill, but Wits might be more appropriate when trying to identify the caliber from a bullet wound.

> <i class="fa fa-codepen" aria-hidden="true"></i> **Code Tip:** The system will automatically use the Attribute linked to a Skill.  If you want to use a different one, you can specify it in the roll command.  `roll <skill>+<attribute>`

<a name="opposed-rolls"/>

# Opposed Rolls

When someone is directly opposing you, you don’t just need to do well, you need to do *better* than the opponent.  That’s where Opposed Rolls come in.

Each contestant makes a roll as normal, and the one with the most successes wins.   It is also possible that nobody gets any successes and they both fail.  To determine how well the winner did, you look at the "net" successes:

> <i class="fa fa-cubes" aria-hidden="true"></i>  **Roll Tip:** Net Successes = Winner’s Successes - Loser’s Successes

| Net Successes | Description |
| ---- |
|0|Draw|
|1|Marginal Victory|
|2|Victory|
|3+|Crushing Victory|

> Example: Nemesis and Mavros are sparring.  They both roll Melee.  Nemesis gets 2 successes (Good Success) and Mavros gets 1 success.  Nemesis has a net of 1 success, giving her a Marginal Victory.

<a name="teamwork"/>

# Teamwork

Up to three characters can combine their efforts toward a single task.   One character is designated the leader, and will make a single roll for the group.  The other characters each make a separate Assist Roll first to see if they can modify the Group Roll.

| Assist Result | Group Roll Modifier |
| ---- |
| Failure | -1  |
| Success | +1  |
| Good Success | +2  |
| Great Success | +3  |
| Amazing Success | +4  |

The modifiers for the Assist Rolls are added together and applied to the leader's Group Roll.  The maximum total modifier for the Group Roll is +4, no matter how well everyone succeeds.

> Example: Elodie and Zoe are assisting Tug with a Repair roll. Elodie and Zoe each roll Repair first, and get a Good Success (+2) and a Success Success (+1).  This lets Tug roll Repair+3 for the Group Roll.


