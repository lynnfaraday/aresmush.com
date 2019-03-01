---
title: Roll Command
description:
layout: tutorial
createPluginTutorial: true
tutorialName: Creating a Plugin
tutorialIndex: tutorials/code/create-plugin
prevstep: sheet-cmd
nextstep: locale-file
tags: 
- code
- plugins
---

The final command we'll look at is the one to roll an ability.

    roll <roll string>[/<difficulty>]

The roll string can take several forms:

* A single ability - usually an attribute but we're not limiting it to that. (roll Strength)
* Two abilities - usually a skill and attribute, but we're not limiting it to that. (roll Strength+Athletics)
* A die step. (roll d4)

The difficulty is optional.  If omitted, the roll is simply done as an open-ended roll.

{% tip %} 
This roll command does not directly handle opposed rolls.  To do an opposed roll, you have both sides do open-ended rolls and compare the results.
{% endtip %}

## Command Class

The command class gets a bit ugly, so let's once agai take it apart piece by piece.

## Arg Parsing

Since the syntax uses "vs", none of our standard arg1_equals_arg2 parsers apply.  We can simply use the 'before' and 'after' methods to get the pieces.

      attr_accessor :roll_str, :difficulty
      def parse_args
         return if !cmd.args
         self.roll_str = trim_arg(cmd.args.before("vs"))
         self.difficulty = titlecase_arg(cmd.args.after("vs"))
      end

## Error Checking

We can error-check to ensure that the roll string is specified.  Difficulty is optional, but if it's specified we need to check to make sure it's valid.

      def require_args
        [ self.roll_str ]
      end
      
      def check_difficulty
        return nil if self.difficulty.blank?
        return t('cortex.invalid_difficulty') if !Cortex.difficulty_names.include?(self.difficulty)
        return nil
      end

## Handle Method

The handler method is pretty involved because there are a number of things it has to do:

* Figure out what dice to roll.
* Roll the dice and add them up.
* Figure out if the roll was a botch.
* If rolled vs. a difficulty, figure out the degree of success compared to the difficulty target number.
* If rolled open-ended, calculate the total.
* Emit the results to the room, including the result, the total, and the individual die results.

That's a lot going on in one command!

Fortunately we can break up the code a little.  Let's look at one small piece of the handler method:

    roll_results = Cortex.roll_ability(enactor, self.roll_str)
    
    if (!roll_results)
      client.emit_failure t('cortex.invalid_ability')
      return
    end

This uses a **helper** method, `Cortex.roll_ability`.

Helpers allow us to offload some of the behavior into self-contained methods.  This makes the code easier to follow and understand.  You can look at each helper method individually and see very clearly what it's trying to do.

Helpers also allow us to avoid duplicating functionality.  If there were other places where we needed to roll abilities (for instance - if we created a combat or crafting system), we could just call `Cortex.roll_ability` and re-use all the same code.

## Roll Results

To make some of the processing easier, the Cortex plugin uses a special helper class called `CortexRollResults`.  This stores the results of the roll and offers several methods to get information about the results.  For example:

    results = Cortex.roll_ability(enactor, self.roll_str)
    if (results.is_botch?)
       ...
    end