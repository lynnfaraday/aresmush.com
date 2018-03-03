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

Commands can live in any folder in your plugin directory, but traditionally they'll be placed in the `commands` folder.

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

Now we'll add argument parsing.  The syntax for this command is `trait/set <trait name>=<description>`, so we can use the `arg1_equals_arg2` parser to get our two arguments.  Since we're using the best practic of separating arg parsing from handling, we'll also need two class attributes to store the data.

> **Note:** The remaining code snippets should go after `include Command Handler` and before the first end, as shown in the example above.

    attr_accessor :trait_name, :description

    def parse_args
      args = cmd.parse_args(ArgParser.arg1_equals_arg2)
      self.trait_name = titlecase_arg(args.arg1)
      self.description = args.arg2
    end

We use the `titlecase_arg` helper on the trait name to ensure consistency among the names - and in case the player typed something crazy like  "SuPeR STRENGTH".

Of course we want to make sure the players specifies both parts of the command - otherwise we should show an error message.  We can use the built-in `required_args` error checker to do so.

    def required_args
       [ self.description, self.trait_name ]
    end

If either one of those arguments is omitted, the `CommandHandler` code will alert the player and halt processing.

Finally we have the actual `handle` method that does the guts of the command.

    def handle
      new_traits = enactor.traits || {}
      new_traits[self.trait_name] = self.description
      enactor.update(traits: new_traits)
      client.emit_success t('traits.trait_set')
    end

Setting hash values into the database is a little more complicated than setting a string.  Here we need to set up a local variable (`new_traits`) that initially is set to the enactor's current traits.  It then gets the new trait added on to it.  This will replace a trait if there's already one with the same name.  Then we save `new_traits` back to the database model.

We also need another command to view the traits.  We'll create another file in the same directory named `traits_cmd.rb`.

> **Tip:** It's best practice to store separate commands in separate files for organization and readability.

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