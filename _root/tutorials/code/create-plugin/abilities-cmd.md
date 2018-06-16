---
title: List Abilities Command
description:
layout: tutorial
createPluginTutorial: true
tutorialName: Creating a Plugin
tutorialIndex: tutorials/code/create-plugin
prevstep: db-model
nextstep: set-ability-cmd
tags: 
- code
- plugins
---

Now we're going to examine a few of the Cortex plugin commands to see how they work.  These commands are pretty standard across all skill systems.

Back in [Create a Config File](/tutorials/create-plugin/config-file), we added a lot of configuration entries for skills, attributes, etc.  But we need a way for players to view that information.  We'll create a set of commands -- attributes, skills, assets and complications -- to show the different categories.

Let's look at the simplest one first - the list of attributes.  There are only a few, and they have only a name and description, so our display is pretty simple.

    module AresMUSH    
      module Cortex
        class AttributesCmd
          include CommandHandler
      
          def handle
          
            # Get the hash of attributes out of the configuration
            attrs = Global.read_config("cortex", "attributes")
            
            # Sort the hash and then convert it to a list of the form "Name    Description"
            list = attrs.sort_by { |a| a['name']}
                        .map { |a| "%xh#{a['name'].ljust(15)}%xn #{a['description']}"}
                        
            # Use the standard bordered list template to show the list with a title above it.
            template = BorderedListTemplate.new list, t('cortex.attributes_title')
            client.emit template.render
          end
        end
      end
    end

Skills, on the other hand, are a little complicated.  Not only are there potentially a ton of them, they also have specialties to show.  Here we're going to use the BorderedPagedListTemplate to let the player browse the skills list a page at a time using skills, skills2, skills3, etc.  The desired page number can be accessed straight from the command class via `cmd.page`.

    module AresMUSH    
      module Cortex
        class SkillsCmd
          include CommandHandler
          
          def handle
            skills = Global.read_config("cortex", "skills")
            
            # Sort the hash and then convert it to a list of the form "Name - Description (Specialties)"
            list = skills.sort_by { |s| s['name']}
                        .map { |s| "%xh#{s['name'].ljust(15)}%xn #{s['description']} (#{s['specialties']})"}
                        
            template = BorderedPagedListTemplate.new list, cmd.page, 25, t('cortex.skills_title')
            client.emit template.render
          end
        end
      end
    end

The BorderedPagedListTemplate does a lot for us -- it figures out which piece of the list to show, formats everything, and even shows the handy 'page x of y' text at the bottom.

There are similar commands for assets and complications, but we're not going to go into them here. 