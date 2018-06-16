---
title: Removing the Commands
description:
layout: tutorial
prevstep: putting-it-together
nextstep: next-steps
tutorialIndex: tutorials/code/add-cmd
tutorialName: Adding a Command
tags: 
- code
- plugins
- database
---

If you want to keep the goals commands we just created, skip to the [next step](/tutorials/code/add-cmd/next-steps).  Otherwise, read on to find out how to remove them.

## Remove the Database Field

First, we need to wipe out all the goals from the database.  Run the following code snippet from your MUSH client.

    ruby Character.all.each { |c| c.update(goals: nil)}

Now everyone's goals are nil.  

This step is needed because the system will generate a warning message if it detects a mismatch between what's actually in the database and what the code thinks should be in the database.  Wiping out the goals before we remove the code prevents that.

## Removing the Code

Remove the new files we created in the custom plugin folder.  Leave the `custom.rb` plugin file though.

## Remove the Dispatch Handler

Remove the goals commands from the custom dispatch handler, so it looks like it did before:

    def self.get_cmd_handler(client, cmd, enactor)      
      return nil
    end

## Load the Plugin

Type `load custom` to reload the custom.  The goals commands will be no more.