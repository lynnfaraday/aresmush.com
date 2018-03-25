---
title: Create a Command Handler
description:
layout: create-plugin
prevstep: db-model
nextstep: locale-file
tags: 
- code
- plugins
- commands
---

Now that we've set up the plugin basics, it's time to create the traits command.

Commands can live in any folder in your plugin folder, but traditionally they'll be placed in the `commands` folder.

## Try It

Create the command to set a trait.  Name it `set_trait_cmd.rb` and put it in `aresmush/plugins/traits/commands`.

First let's put in the basic scaffolding - a `TraitCmd` in the `AresMUSH::Traits` module, that includes the standard command handling functionality.  All commands will start off like this.

    module AresMUSH
      module Traits
        class SetTraitCmd
          include CommandHandler
          
          # Remaining command handling will go here.
        end
      end
    end

### Command Handler Organization

Although in the Quickstart tutorial we just put everything into a single `handle` method, there's a better way to do this.  The [`CommandHandler` utility](/tutorials/code/commands) provides a framework for handling commands that involves multiple methods.  Splitting up the code makes it more readable and lets us take advantage of a few common utilities.

> <i class="fa fa-exclamation-triangle"></i> **Note:** The remaining code snippets should go after `include Command Handler` and before the first end, as shown in the example above.

### Arg Parsing

The syntax for this command is `trait/set <trait name>=<description>`, so we can use the `arg1_equals_arg2` parser to get our two arguments.  

Using the CommandHandler framework, we should put the argument parsing into the `parse_args` method.   Since we're going to need these arguments in other methods, we'll need to create class attribute accessors for them too.

    attr_accessor :trait_name, :description
    
    def parse_args
      args = cmd.parse_args(ArgParser.arg1_equals_arg2)
      self.trait_name = titlecase_arg(args.arg1)
      self.description = args.arg2
    end

We use the `titlecase_arg` helper on the trait name to ensure consistency among the names - and in case the player typed something crazy like  "SuPeR STRENGTH".

### Error Checking

Of course we want to make sure the players specifies both parts of the command - otherwise we should show an error message.  We can use the built-in `required_args` error checker to do so.

    def required_args
       [ self.description, self.trait_name ]
    end

If either one of those arguments is omitted, the `CommandHandler` code will alert the player and halt processing.

### Handler

Finally we have the actual `handle` method that does the guts of the command.

    def handle
      new_traits = enactor.traits || {}
      new_traits[self.trait_name] = self.description
      enactor.update(traits: new_traits)
      client.emit_success t('traits.trait_set')
    end

Setting hash values into the database is a little more complicated than setting a string.  Here we need to set up a local variable (`new_traits`) that initially is set to the enactor's current traits.  It then gets the new trait added on to it.  This will replace a trait if there's already one with the same name.  Then we save `new_traits` back to the database model.

## Try It Again

We also need another command to view the traits.  We'll create another file in the same folder named `traits_cmd.rb`.

> <i class="fa fa-info-circle"></i> **Tip:** It's best practice to store separate commands in separate files for organization and readability.

    module AresMUSH
      module Traits
        class TraitsCmd
          include CommandHandler
          
          def handle
            traits = (enactor.traits || {}).sort.map { |name, desc| "%xh#{name}%xn - #{desc}"}
            template = BorderedListTemplate.new traits, t('traits.traits_title')
            client.emit template.render     
          end
        end
      end
    end

This one's more straightforward because there are no arguments or error checking.   We get the enactor's traits and sort them (by default, hashes sort by key name - in this case by trait name).  Then we format the name and description the way we want them to appear.  The `map` method gives us a list of name/description pairs, which we then use in the standard bordered list template.