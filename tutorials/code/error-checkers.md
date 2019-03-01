---
title: Error Checkers
description:
layout: page
tags: 
- code
- plugins
- commands
---

An important part of [command handling](/tutorials/code/commands.html) is handling errors.  The command handler framework gives you an easy way to insert error handling into your code.

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Error Checkers

These get run in the following order:

* `parse_args`
* Error checkers
* `handle`

If an error is detected, the handler will emit a failure message to the player and not execute the `handle` method.  

## Creating an Error Checker

Any method in a command handler named with `check_` is considered an error checker.   Error checkers return `nil` if everything's okay, or an error message string if there was a problem.   If the return value is not nil, the command handler will emit a failure to the client and stop processing.  For example:

    def check_can_view
       return nil if enactor.has_permission("view_bgs")
       return "You don't have permission to view that."
    end

## When *not* to Use Error Checkers

Error check methods are designed to work on the enactor or the arguments - checking whether the enactor has permissions or the arguments are missing/invalid.   But sometimes you can't tell if an argument is valid until you've done some database queries (for example, verifying if the specified player actually exists).

You don't want to do database queries twice.  It's 100% appropriate to do error checking _inside_ the `handle` method when it's more efficient.  

The [Database Finder Utilities](/tutorials/code/database.html) are very handy when it comes to checking whether an item was found in the database.  Many commands are simply:

    ClassTargetFinder.with_a_character(name, client, enactor) do |model|
      ... do something with the found model ...
    end

The `ClassTargetFinder` handles the emits if the item wasn't found, or multiple items were found with that same name, etc.

## Universal Error Checks

There are a couple error checkers that are so universal they're built right into `CommandHandler` itself.

### Required Arguments Checker

The first universal error checker makes sure that all required args are specified.  You just need to have your command handler specify which args are required.  This should be an array of class attributes.  For example:

    attr_accessor :num, :name
    def required_args
      [ self.num, self.name ]
    end

{% tip %} 
You can have some args be required and others not; just change which ones appear in the required_args list.  If none are required, you may omit  <code>required_args</code>  entirely.
{% endtip %}

### Login Checker

The other universal error checker makes sure that the player is logged into a character.  Most commands require this, so it's on by default.  You don't have to do anything.  If you want to allow a command to work on the login screen (like who or help), you need to expressly enable it by adding this to your command handler:

    def allow_without_login
      true
    end