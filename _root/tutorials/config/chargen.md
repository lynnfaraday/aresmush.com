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
* `welcome_message` - This message is posted to the forum when a character is approved.  %{name} and %{position} are parameters passed to the message representing the character's name and position.  You can place them wherever you want in the string.

## Web Chargen Blurbs

You can also configure the character creation instructions that appear in the Web Chargen.

* `bg_blurb` - Background instructions.
* `hooks_blurb` - RP Hook instructions.
* `desc_blurb` - Description instructions.

> <i class="fa fa-info-circle"></i> **Tip:** Abilities instructions are set up in the [FS3Skills Chargen Config](/tutorials/config/fs3skills_chargen).

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

> <i class="fa fa-info-circle"></i> **Tip:** Tutorial files should be stored in the `chargen/templates` folder.

For example, the first stage in the sample configuration below will show the 'chargen.md' tutorial file and the second stage will show the 'sheet' help file.

    start:
        tutorial: 'chargen.md'
    sheet:
        help: 'sheet'
