---
title: Configuring the Chargen System
tags:
- config
layout: page
---

To configure the Chargen plugin:

1. Select Admin -> Setup.
2. Edit `chargen.yml`

{% include toc.html %}

## Messages

You can configure the messages that are put into the approval job when characters are approved or rejected.  Commonly you will edit the approval message to tell new players anything special they need to know to get started.

* `approval_message` - This message is sent when they're approved.
* `rejection_message` - This message is sent when they're rejected.
* `post_approval_message` - The system will also create a job *after* someone is approved, to remind the game admin to do any ancillary tasks, like adding them to lists, or making sure they have a log icon.  You can configure the todo list in the job message.
* `welcome_message` - This message is posted to the forum when a character is approved.  You can use `%{name}` in the message where you want the char's name to go.  You can also use `%{rp_hooks}` for their RP Hooks, or any group name.  For example:  `"Welcome %{name} - the newest %{position} in %{faction}.\n\nRP Hooks:\n%{rp_hooks}"`  (The quotes there are important.)

{% tip %}
Make sure the groups used in the welcome message actually exist, or you'll get an error when you try to approve someone. 
{% endtip %}

## Web Chargen Blurbs

You can also configure the character creation instructions that appear in the Web Chargen.

* `bg_blurb` - Background instructions.
* `hooks_blurb` - RP Hook instructions.
* `desc_blurb` - Description instructions.
* `groups_blurb` - Group instructions.
* `demographics_blurb` - Demographics instructions.
* `rank_blurb` - Description of the rank field.
* `icon_blurb` - Instructions for uploading a profile icon.

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

Character creation is done as a series of 'stages'.  For each stage, you can choose to display either a help file, a title and text, or both.

For example, the following config will show custom text for the first stage, a help file for the second, and both text and a help file for the third.

    start:
        title: "A Title"
        text: "Some text about starting chargen."
    sheet:
        help: 'sheet'
    demographics:
        help: 'demographics'
        text: 'Some extra help text you want to say about demographics.'

{% tip %} 
Make sure the help file actually exists. It should exactly match the help file name (without the .md extension).
{% endtip %}

## Custom App Review

With custom code, you can add extra automated system checks on the App Review screen in chargen, like making sure their groups make sense.  See [Custom Chargen App Review](/tutorials/code/hooks/app-review.html).

## Custom Approval Triggers

With custom code, you can automate certain actions to be taken when a character is approved, like adding people to channels or roles.  See [Custom Chargen Approval Triggers](/tutorials/code/hooks/approval-triggers.html).

## Custom Character Fields

With custom code, you can add new fields to the character profile and/or chargen.  See [Custom Character Fields](/tutorials/code/hooks/char-fields.html).