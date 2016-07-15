---
title: FS3.3 - Conflict Resolution
description:
layout: fs3
---

An Ability Roll is used when you want to know if you succeed or fail at a given task using one of your Abilities.   You roll (virtual) dice based on how good you are, and the result determines the outcome.

> <i class="fa fa-info-circle" aria-hidden="true"></i> **To Roll or Not to Roll.**  You don’t need to roll for every little thing.  Ability rolls are intended for challenging situations or direct opposition.  Driving to the grocery store would not normally require an ability roll, unless maybe you’re racing someone there or driving up an icy hill during a blizzard.  Players are free to skip rolls and negotiate a resolution as befits the story, as long as everyone agrees.

# Success Level

FS3 uses 8-sided dice.  You roll a number of dice equal to the Ability Rating.  Skills are boosted by the appropriate Talent, and can be further raised or lowered by special Modifiers.

> <i class="fa fa-cubes" aria-hidden="true"></i>  **Roll Tip:** Dice to Roll = Ability Rating + Talent Bonus +/- Modifiers
>
> Note:  For Traits, roll double the Ability Rating (since they go from 1-5 instead of 1-8).  They are not affected by Talents. 

Any die that is a 6 or higher is counted as a success.   It only takes one success to accomplish what you set out to do.  Extra successes mean you did really well.   You can think of success levels like letter grades on a school exam.  Did you scrape by with a passing grade or score top marks?

| Rating | Description |
| ---- |
|0|Failure|
|1|Success|
|2-3|Good Success|
|4-5|Great Success|
|6+|Amazing Success|

An Embarrassing Failure happens when you get no successes and roll more than two 1’s.   You don’t just fail, you fail is a spectacular and embarrassing fashion - like shooting your friend or falling flat on your face.

> <i class="fa fa-codepen" aria-hidden="true"></i> **Code Tip:** To make an Ability Roll, use the command `roll <ability>`.   You can specify an ability name or a rating number.  The latter is particularly useful when rolling for NPCs.  If you try to roll an ability not listed on your sheet, the system will automatically use the Everyman rating.

# Modifiers

Modifiers can boost or reduce your Ability Rating, making the task easier or harder than usual.   Talents are a special kind of modifier, which automatically raise your Ability rating. 

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

# Switching Talents

Each Action Skill is linked to a particular Talent, but there may be times when another Talent is better suited.  For example, Firearms is normally a Hand-Eye skill, but Academic might be more appropriate when trying to identify the caliber from a bullet wound.

> <i class="fa fa-codepen" aria-hidden="true"></i> **Code Tip:** The system will automatically use the talent linked to an Action Skill.  If you want to use a different one, you can specify it in the roll command.  `roll <ability>+<talent>`

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


# Defaulting

If a task does not fall under an ability listed on your character sheet, you may have the chance to make a Default Roll.   You have two options:

* Use a semi-related skill with a negative modifier (typically -2).  For instance, if you lack a Vet skill you could default to First Aid to treat a hurt baby animal.
* Use the Everyman rating.

In both cases, your roll will be modified by the appropriate talent.  

Use common sense when deciding whether a default roll is appropriate.  Throwing a baseball or running a footrace?  Sure.   Attempting brain surgery or flying a fighter jet?  Not so much.

> <i class="fa fa-codepen" aria-hidden="true"></i> **Code Tip:** You can make a default roll just by rolling the appropriate Talent.  For example `roll Academic` will make an Everyman roll modified by your Academic talent.

# Teamwork

Up to three characters can combine their efforts toward a single task.   One character is designated the leader, and will make a single roll for the group.  The other characters each make a separate Assist Roll first to see if they can modify the Group Roll.

| Assist Result | Group Roll Modifier |
| ---- |
| Failure | -1  |
| Success | +0  |
| Good Success | +1  |
| Great Success | +2  |
| Amazing Success | +3  |

The modifiers for the Assist Rolls are added together and applied to the leader's Group Roll.  The maximum total modifier for the Group Roll is +3, no matter how well everyone succeeds.

> Example: Elodie and Zoe are assisting Tug with a Repair roll. Elodie and Zoe each roll Repair first, and get a Great Success (+2) and a Good Success (+1).  This lets Tug roll Repair+3 for the Group Roll.


