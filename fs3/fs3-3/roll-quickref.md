---
title: FS3.3 - Rolls Quick Reference
description: 
layout: fs3
---

This is a quick-reference help file for FS3 ability roll commands.

## Basic Rolls

`roll <ability>`

Typically you will roll a skill.  The linked attribute value is factored in automatically.  (e.g. roll Firearms will roll Firearms+Reflexes)

## Linked Attributes

`roll <ability>+<other linked attr>`

You can override the linked attribute and use a different one (e.g. roll Firearms+Mind).

## Modifiers

`roll <ability>+<modifier>`

`roll <ability>-<modifier>`

You can apply a + or - modifier.  The modifier increases or decreases your ability rating, adding or subtracting dice.  (e.g. roll Firearms-1)

## Default Rolls

`roll <related ability>-3`

`roll <attribute>`

If you need to roll an ability you don't have, there are two choices.  Roll a related ability at -3, or roll the attribute with an assumed *Everyman* ability rating.  This effectively rolls attribute + 1.

## Opposed Rolls

`roll <character>/<ability> vs <character>/<ability>`

You can combine two rolls into one and it will show you both the individual results and the overall comparison (marginal victory, etc.)  You can specify linked attributes or modifiers here just like in a normal roll.

## Forced Rolls

`roll <character>/<ability>`

You can make a roll for someone else using this command.  You can specify linked attributes or modifiers here just like in a normal roll.

## NPC Rolls

`roll <npc>/<dice>`

You can simulate a NPC in the same way you do other characters.  Just specify a number of dice to roll rather than an ability name, since NPCs don't have sheet.

## Private Rolls

`roll/private <ability>`

You can make a roll that is hidden from others in the room.   You can specify linked attributes or modifiers here just like in a normal roll.

{% note %} 
Admins can see all rolls, even private ones.  This enables them to judge the results of secret rolls.
{% endnote %}



