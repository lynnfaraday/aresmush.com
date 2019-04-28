---
title: Configuring the Chargen System
tags:
- config
layout: page
---

To configure the Chargen plugin:

1. Select Admin -> Setup.
2. Edit `chargen.yml`

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Messages

You can configure the messages that are put into the approval job when characters are approved or rejected.  Commonly you will edit the approval message to tell new players anything special they need to know to get started.

* `approval_message` - This message is sent when they're approved.
* `rejection_message` - This message is sent when they're rejected.
* `post_approval_message` - The system will also create a job *after* someone is approved, to remind the game admin to do any ancillary tasks, like adding them to lists, or making sure they have a log icon.  You can configure the todo list in the job message.
* `welcome_message` - This message is posted to the forum when a character is approved.  You can use %{name} in the message where you want the char's name to go.  You can also use any group.  For example:  `"Welcome %{name} - the newest %{position} in %{faction}."`  Make sure the group actually exists, or you'll get an error when you try to approve someone.

## Web Chargen Blurbs

You can also configure the character creation instructions that appear in the Web Chargen.

* `bg_blurb` - Background instructions.
* `hooks_blurb` - RP Hook instructions.
* `desc_blurb` - Description instructions.

{% tip %} 
Abilities instructions are set up in the [FS3Skills Chargen Config](/tutorials/config/fs3skills_chargen.html).
{% endtip %}

## allow_web_submit

This setting controls whether characters can submit their application from the web portal.  If your game isn't using FS3 and doesn't have the ability to set stats via the web, you'll probably want to disable this to force people to complete chargen in-game.

## app_review_commands

You can configure which commands execute when you do `app/review`.  Just supply a list of commands, and use %{name} where you want the character's name to go in the command.  For example:

    - app %{name}
    - profile %{name}
    - bg %{name}

## arrivals_category

You can configure which forum category the welcome message is posted to.  Making it a forum that doesn't exist will effectively disable the welcome post.

## Application  Jobs

You can edit the categories and states that the chargen system uses for its application jobs.

* `app_category` - Character applications use this category.
* `app_resubmit_status` - When an app is re-submitted, the job enters this state.
* `app_hold_status` - When an app is rejected, the job enters this state.

## hooks_required

You can configure whether RP hooks must be set in chargen or not.

## stages

Character creation is done as a series of 'stages'.  For each stage, you can choose to display either a help file, a tutorial file, or both.

{% tip %} 
Tutorial files should be stored in the  `chargen/templates`  folder.
{% endtip %}

For example, the first stage in the sample configuration below will show the 'chargen.md' tutorial file and the second stage will show the 'sheet' help file.

    start:
        tutorial: 'chargen.md'
    sheet:
        help: 'sheet'

## Custom App Review

The standard chargen ensures that values are _set_, but doesn't do much to see if the values _make sense_ (i.e. that only nobles can be knights).  Doing these kinds of checks requires custom code, but there's a built-in hook where you can put that code.  Open `aresmush/plugins/chargen/custom_app_review.rb` and make the `custom_app_review` method do whatever checks you want.

{% tip %} 
Custom app review doesn't actually _prevent_ someone from choosing stupid values, it just flags it on the app review screen.
{% endtip %}

For example, if we wanted to restrict the 'knight' position to nobles, we could do:

    def self.custom_app_review(char)
      faction = char.group("Faction")
      position = char.group("Position")
      
      if (position == "Knight" && faction != "Noble")
        msg = "%xrOnly nobles can be knights.%xn"
      else
        msg = t('chargen.ok')
      end
      
      return Chargen.format_review_status "Checking groups.", msg
    end


Notice how we're using the `format_review_status` helper.  This is how most of the lines in the app review are formatted.  It will display like this:

    Checking groups.                                   Only nobles can be knights.

The Chargen helper has several built-in status values:

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

## Custom Approval Steps

In addition to having custom app review steps, you can also have custom code that's triggered when a character is approved.  Open `aresmush/plugins/chargen/custom_approval.rb` and make the `custom_approval` method do whatever you want to do when someone is approved.  Common examples include:

* Setting starting location based on a group value (e.g. home world, faction).
* Assigning a role or adding to a channel based on a group value (e.g. faction-based roles/channels).
* etc.

Here's an example of how to assign a role based on the character's faction (assuming you've already created the roles using `role/create` ahead of time).

    def self.custom_approval(char)
      faction = char.group("Faction")
      role = Role.find_by_name(faction)
      if (role)
        char.roles.add role
      end
    end