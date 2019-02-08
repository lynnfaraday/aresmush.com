---
title: Troubleshooting YAML
description:
layout: page
tags: 
- config
- yaml
---

YAML is the data format used for Ares' configuration files.  For general information about how to use YAML, see [Understanding YAML](/tutorials/code/yaml.html).  This article will help you troubleshoot issues with your YAML files.

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## YAML Errors

Sometimes your YAML configuration goes awry, and you'll get errors like this:

    Error reading YAML from /Users/ares/Code/aresmush/game/plugins/fs3combat/fs3combat.yml.  See http://aresmush.com/tutorials/code/yaml/ for troubleshooting help: (<unknown>): mapping values are not allowed in this context at line 3 column 17

The information in the error message can help you find the problem.  In the example above, it says that the problem is line 3, column 17.

## Validator

If your game is running, you can use the `config/check` command to identify YAML problems.  This guide will help you troubleshoot common errors.

If the game won't start, or if you can't figure out the problem, there are several online YAML validator tools that can help.  You copy/paste your YAML (from the Advanced Editor mode or the raw YML file) into the tool and it tells you if there are any problems.  Here's a good one to use: [YAML Lint](http://www.yamllint.com/).

If you're not sure what file is having the issue, you can use a command-line validator to check all your files at once.  Here are some commands you can run on your server shell to install the tool and run it on every file in your config folder:

    npm install -g yaml-lint
    cd aresmush/game/config
    find . -iname '*' -exec yamllint {} \;

## Common Errors

Here are a few common YAML errors you might encounter.

### Quote Errors

One common error is forgetting to put quotes around strings with special characters.

    Error reading YAML from cookies.yml ... mapping values are not allowed in this context at line 3 column 17

Looking at the line of text mentioned in the error message, you might see something like this:

    cookie_forum: Foo:Bar

Oops!  If there are special characters inside a string, you need to put quotes around it.  Change it to:

    cookie_forum: "Foo:Bar"

### Indentation Errors

Another common error happens when you don't have the indentation levels lined up right.

    Error reading YAML from fs3combat.yml ... did not find expected key while parsing a block mapping at line 5 column 9

Looking at line in the file, you might see:

    stances:
        Reckless:
               attack_mod: 4
            defense_mod: -4

Ooops!  The attack and defense mod lines aren't lined up right.  Change it to:

    stances:
        Reckless:
            attack_mod: 4
            defense_mod: -4

### Number Type Errors

Sometimes the code expects a number, like the maximum number of ability points or the number of cookies per week.  If you accidentally put a string instead of a number in the config file, you'll get a type mismatch error:

    Error: "comparison of Integer with String failed"
    Error: "comparison of Fixnum with String failed"

The solution is to change the affected parameter to a number.

    Correct (a number):
    max_ap: 40
    
    Incorrect (a string):
    max_ap: '40'

### Merge Errors

The final 'common' error happens when you accidentally have duplicate copies of the same configuration setting.  

    Error reading YAML from chargen.yml# ... undefined method `merge_recursively' for "Foo":String

This can happen in two ways:

#### Duplicate Config Options

Often this error happens if you have the same config option defined in multiple _files_ for the same _section_.  (Usually when it's a big system with multiple config files like FS3 or one of the other skills systems).  For example:

    In fs3_armor.yml you have: 
       fs3combat:
          Foo: "A"
    
    In fs3_weapons.yml you have:
       fs3combat:
          Foo: "B"

Since "Foo" is defined twice in the fs3combat section in different files, the game tries to merge it together and can't - hence the error.   Just remove one of the duplicate entries.

{% include tip.html content="It's okay to have the same option defined in _different sections_, as sections are completely independent.  It also won't be an error if the option is defined twice in the same section if it's in the the _same file_.  The last entry \"wins\"." %}

#### Rogue Config File

The other way a merge error can happen is if you accidentally end up with two copies of the same config file.  This commonly happens with editor autosave files when editing on the command line.  You'll end up with `chargen.yml` and an autospace file like `#chargen.yml` both in the config directory.

Just remove the erroneous config file.

## Weird Errors

Sometimes the error is not quite so straightforward and you'll end up with an error that isn't one of the above:

    Error reading YAML from fs3combat.yml ... undefined method `merge_yaml' for 3:Fixnum

This usually happens when you restart the game.  Since it's loading all the config files at once, it's not quite so easy to pinpoint which file actually is at fault.  

Start, of course, with the file that's reporting the error (fs3combat.yml in the example above).  Run it through the YAML validator mentioned above.

If that file is OK, though, sometimes the error is in a file loaded previously.  The game's log file can help you here.  See [Using Log Files](/tutorials/code/logs.html) for help.  If the log shows:

    2017-07-04 08:33:53 DEBUG - Loading config from .../events.yml. 
    2017-07-04 08:33:53 DEBUG - Loading config from .../friends.yml. 
    2017-07-04 08:33:53 DEBUG - Loading config from .../fs3combat.yml.
    Error reading YAML from fs3combat.yml

You can be pretty sure that the error is either in fs3combat.yml or in friends.yml, since everything was okay before that.

If that still doesn't help, you'll just have to go on a scavenger hunt for bad YAML.  Start with files you've changed recently or ones that were touched by a recent code merge (if you're using [git](/tutorials/code/git.html) for code management).  A YAML validator may help, as explained in the introduction.

If all else fails, you can always [ask for help](/feedback.html).