---
title: Set Ability Command
description:
layout: tutorial
tutorialName: Creaing a Plugin
tutorialIndex: tutorials/code/create-plugin
prevstep: abilities-cmd
nextstep: sheet-cmd
tags: 
- code
- plugins
---

Next up - we need a way to set character abilities.  The processing is slightly different for each type of ability.   We're only going to look at the attribute set command in detail.  There are two verisons of this command:

    attribute/set <ability name>=<die step>  (for players)
    attribute/set <char name>=<ability name>/<die step> (for admins)

This command is more complex than the previous ones we've looked at, so we'll take it apart piece by piece.

## Parsing Args

We can tell the difference between the two versions of the command based on whether the command args contains a '/'.  That affects how we parse the arguments.

      attr_accessor :target_name, :ability_name, :die_step
      
      def parse_args
         # Admin version
         if (cmd.args =~ /\//)
           args = cmd.parse_args(ArgParser.arg1_equals_arg2_slash_arg3)
           self.target_name = titlecase_arg(args.arg1)
           self.ability_name = titlecase_arg(args.arg2)
           self.die_step = downcase_arg(args.arg3)
         else
           args = cmd.parse_args(ArgParser.arg1_equals_arg2)
           self.target_name = enactor_name
           self.ability_name = titlecase_arg(args.arg1)
           self.die_step = downcase_arg(args.arg2)
         end
      end

> <i class="fa fa-info-circle"></i> **Tip:** We use titlecase for the target name so it'll be pretty when we display it later.  Titlecase is also important for the ability name, so it's always consistent.  You don't want someone to have one rating in Guns and another in GUNS.  We use downcase for the die step because 'd2' is a more standard way of writing it than 'D2'.

## Error Checking

There are a number of error checks needed here.  First we want to make sure that all the pieces of the command were specified.

      def required_args
        [self.target_name, self.ability_name, self.die_step]
      end

Then we check that the die step is valid.  We can use one of the helper methods for that.

      def check_valid_die_step
        return t('cortex.invalid_die_step') if !Cortex.is_valid_die_step?(self.die_step)
        return nil
      end

> <i class="fa fa-info-circle"></i> **Tip:** Methods that return true/false often have a ? on the end, like `is_valid_die_step?`.  This is not universal, but you'll see it a lot.

There's a similar check to make sure the attribute name is valid, since Cortex has a fixed list.

      def check_valid_ability
        return t('cortex.invalid_ability_name') if !Cortex.is_valid_attribute_name?(self.ability_name)
        return nil
      end

Next we make sure the character is allowed to edit abilities.  If the target is yourself, you can.  Otherwise we use a helper to ensure they have the 'manage_apps' permission.

      def check_can_set
        return nil if enactor_name == self.target_name
        return nil if Cortex.can_manage_abilities?(enactor)
        return t('dispatcher.not_allowed')
      end      

Finally we make sure that their character is unlocked.  The character gets locked by the chargen system once they've submitted their app (to prevent changes while the staff is reviewing) and when they're approved.  Admins are allowed to override this.

      def check_chargen_locked
        return nil if Cortex.can_manage_abilities?(enactor)
        Chargen.check_chargen_locked(enactor)
      end

> <i class="fa fa-info-circle"></i> **Tip:** The fact that the permissions check came up in a number of commands is the reason why it was turned into a helper method.  Helpers let you use a chunk of code all over without repeating yourself.

## Handling

Finally we can actually set the attribute!   We use the target name to look up the character.  The `with_a_character` helper does all the error checking for us to make sure the character exists.

          
    def handle
      ClassTargetFinder.with_a_character(self.target_name, client, enactor) do |model|
         # See if we already have this attribute
         attr = Cortex.find_attribute(model, self.ability_name)
         
         # If so, update it.  Otherwise create a new one.
         if (attr)
           attr.update(die_step: self.die_step)
         else
           CortexAttribute.create(name: self.ability_name, die_step: self.die_step, character: model)
         end
         
         client.emit_success t('cortex.ability_set')
      end
    end