---
title: FS3.3 - Running Combats
description:
layout: fs3
---

This help file is aimed at people who are organizing FS3 Combat scenarios.  Typically this will be staff, but with FS3 anyone can run a combat.

# Joining People to Combat

The organizer can force other people (PCs or NPCs) to join the combat.  For example: `combat/join Marine1 Marine2=123`.  Often this is faster/simpler than paging a bunch of people with the combat number and expecting them to do it.

A game can define some custom combatant types to use when joining combat.  This is handy for games with robots, bug-eyed monsters, space marines in full body armor, or other non-human combatants.  A custom combatant type will automatically set weapons, armor and vehicle type when you join someone to the combat.  For example: `combat/join Cylon1 Cylon2=123/Centurion`.

# Ignoring Combat Results

The most important rule when running combats is to know when to ignore the rules :)

Code cannot possibly accommodate every possible scenario.   If a bound prisoner has a gun to their head and is being shot execution-style, just remove them from combat.  Don't force an attack roll, or a damage roll.  Just get rid of them.   If the combat results say that you're hit in the leg but you're buried hip-deep in sand, just ignore it and pretend it hit somewhere else.

> <i class="fa fa-cubes" aria-hidden="true"></i> **Tip:** Code is no substitute for common sense.

# Pacing

The second most important rule when running combat is to keep thing moving.  Players get bored quickly.

A hallmark of FS3 combat is that the system spits out all the results at once, so everyone is reacting to the same thing.  This allows players to pose **in parallel** rather than enforcing pose order.

As the organizer, the combat system will notify you when everyone has posed and entered their actions into the system. You can check the `combat/slackers` command to see who's snoozing. You can then choose to poke them, enter an action on their behalf, or simply skip over them. 

> <i class="fa fa-cubes" aria-hidden="true"></i> **Tip:** 15 minutes per combat round is usually plenty of time for everyone to pose and enter an action.

# NPCs in Combat

Combat is designed to handle PCs and NPC opponents.  NPCs exist only as long as they are in combat, and their damage is wiped as soon as they leave.  For important/permanent NPCs, it is suggested that you actually create a player for them like a PC and give them some skills.

NPCs are assigned a broad ability level that gives them a pack of skills.  The skill levels vary, but here are some rough guides:

| NPC Level | Abilities  |
| ---- |
| Goon | 4 |
| Henchman | 6 |
| Boss | 8 |

> <i class="fa fa-cubes" aria-hidden="true"></i> **Tip:** When you start the first turn, NPCs will automatically pick random targets.

Someone must be responsible for posing for the NPC and entering their actions into the combat system.  This could be the organizer, another player who's PC is involved in the combat, or just someone who's there solely to run that particular NPC. 
 
> <i class="fa fa-cubes" aria-hidden="true"></i> **Tip:** If you are only joining combat to run NPCs, you should join using the "Observer" type so you're not accidentally targeted by people.
 
NPCs and PCs are treated fundamentally the same in combat. You target a NPC just by using his name, and there are versions of every combat command that allow you to specify a NPC as the actor. 

All combat commands can take a NPC name and equal sign in front to control a NPC.  For instance, `combat/pass MyNPC=` or `combat/attack MyNPC=Target`.
 
> <i class="fa fa-cubes" aria-hidden="true"></i> **Tip:** The NPC versions of commands also work on PCs too, in case someone is AFK or disconnected and you need to set their action for them.

KO’d NPCs are immediately removed from the combat. They cannot be treated, rallied, or revived with a hero roll. 

# Teams and Targets

Teams are a convenient way of organizing combatants into smaller groups when they split up. PCs are automatically assigned to Team 1 and NPCs to Team 2.  Use `combat/team <name>=<team>` to switch teams.

PCs pick their targets when they aim or attack. NPCs do so automatically. By default, NPCs on Team 1 will aim at Team 2, Team 2 will aim at Team 1, and NPCs on other teams will aim at anyone not on their team.   You can assign specific team targets with the `combat/target` command.

# Modifiers

Organizers may apply situational modifiers to characters based on things like darkness, rain, or what-have-you. A modifier is just like a skill roll modifier - a +/- number of dice.  Damage modifiers are factored in automatically.  Use `combat/attackmod <char>=<modifier>`.  There's also a `defensemod` and `lethalmod` command to apply damage or defense mods.  

> <i class="fa fa-cubes" aria-hidden="true"></i> **Tip:** The damage mod applies to damage TAKEN.  It is most handy when combat is dragging on too long and you want to make sure the next shot takes out a bad guy.

# Special Combat Situations

## Mock Combat

Combat can be designated as 'mock' or 'real'. Mock combat represents training, sparring, paintball wars, etc.  Damage from a mock combat is erased as soon as the combat is over.   Use `combat/start mock` to start a mock combat.

## Ambushes

If a character is caught unawares, they shouldn't get an attack and should have a -3 modifier to defense.  You can simulate this by making them take the **pass** action and giving the attacker the aggressive stance.

## Booby Traps and Unmanned Vehicles

You may have a situation where there is an "unmanned" attacker or defender, be it a booby trapped grenade or an empty vehicle. The combat system doesn’t handle these situations, so you have two choices: 
 
1. Just RP it. Have folks make some appropriate rolls and wing it. You can even manually inflict the damage using `damage/inflict` if it's important that it be in the combat system. 
2. Put in a dummy NPC to reflect the thing.
 
As always, remember that the combat system is a tool to aid RP, and will never be able to account for all possible situations. 

# Balancing Combat

Lopsided combats are generally not much fun for either side, and sometimes may be downright detrimental to the theme/plot. As an organizer, it is important for you to balance the skills of PCs and NPCs to ensure a reasonably fair fight. You should also check to make sure everyone has the proper gear and stance setup. You can use the NPC command to adjust NPC skill levels. 
 
Another way to balance combat is to simply apply a modifier. Badguys kicking your players' butts and you don't want them to? Give a few of them a -3 modifier and watch the tables turn. 
 
You can also give someone a lethality modifier, which applies to weapon damage. This is also a percentage, just like the weapon's lethality rating. So if you really want to take someone out, set them up with a huge lethality modifier.
 
Just as a gamemaster in a tabletop game sometimes rolls behind a screen and ignores the results to further the plot, MUSH Storytellers should be allowed the same flexibility. These commands let you “stack the deck” for dramatic effect.  It is up to you to use them responsibly.
