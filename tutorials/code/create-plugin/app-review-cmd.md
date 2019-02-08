---
title: App Review Command
description:
layout: tutorial
createPluginTutorial: true
tutorialName: Creating a Plugin
tutorialIndex: tutorials/code/create-plugin
prevstep: sheet-cmd
nextstep: roll-cmd
tags: 
- code
- plugins
---

The `app` method provided by the Chargen plugin is meant to be generic.  It provides hooks so you can add whatever processing is needed to alert the user to problems with their character application: Points overspent, missing required skills, etc.

{% include tip.html content="AresMUSH' Chargen plugin is designed around the idea that it's better to let people set things they way they want in peace and then checking everything when they're done.  This prevents information overload by spamming them with warnings while things are still only half-set." %}

In the chargen app template (`aresmush/plugins/chargen/templates/app.erb`) you'll see a section:

    <% if AresMUSH::FS3Skills.is_enabled? %>
    <%= section_title(t('chargen.abilities_review_title')) %>
    <%= abilities %>      
    <% end %>

This is for the built-in FS3 plugin, and will not appear if FS3 is disabled.  You'll want to add your own similar section right after that:

    <%= section_title(t('cortex.cortex_review_title')) %>
    <%= cortex_abilities %>      
    <% end %>

Then inside the app template renderer (`aresmush/plugins/chargen/templates/app_template.rb`), add the `cortex_abilities` method needed by the ERB file.  This calls out to the Cortex app review method:

      def cortex_abilities
        Cortex.app_review(@char)
      end

Finally we need to define the app review method itself.  This has a number of pieces.  

    def self.app_review(char)
      text = Cortex.attribute_point_review(char)
      text << "%r"
      text << Cortex.skill_point_review(char)
      text << "%r"
      ...
      text
    end

One of those pieces is checking the total number of attributes spent.

    def self.attribute_rating_review(char)
       total = 0
       char.cortex_attributes.each do |a|
          total += Cortex.points_for_attribute(a.die_step)
       end
       max = Global.read_config("cortex", "starting_attribute_points")
       message = t('cortex.total_attribute_points_check', :total => total, :max => max)
       status = total <= max ? t('chargen.ok') : t('chargen.too_many')
       Chargen.format_review_status message, status
    end

Here we've calculated the total number of attribute points spent (using a helper method to convert a die_step like 'd6' to a cost in attribute points) and then compared it to our configured 'starting_attribute_points' value.  

We use the Chargen helper method `Chargen.format_review_status` to create a line in the app review screen like:

    36 attribute points spent. (40 max)                    < OK! >

It will use either 'OK' or 'Too Many' depending on how many points were spent.  The Chargen helper has several built-in status values:

**Green (OK)**

    t('chargen.ok')  --> < OK! >

**Yellow (Warnings)**

    t('chargen.missing')       < Missing %{missing} >

**Red (Errors)**

    t('chargen.too_many')      < Too Many! >
    t('chargen.not_enough')    < Not Enough! >
    t('chargen.not_set')       < Not set! >
    t('chargen.oops_missing')  < Oops! Missing %{missing} >

You are not limited to these, of course, but using the standard that people are familiar with will help players to understand your system.