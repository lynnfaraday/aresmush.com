---
title: Troubleshooting YAML
description:
layout: page
tags: 
- config
- yaml
---

YAML is the data format used for Ares' configuration files.  For general information about how to use YAML, see [Understanding YAML](/tutorials/code/yaml). 

Sometimes, though, your YAML configuration goes awry, and you'll get errors like this:

    Error reading YAML from /Users/ares/Code/aresmush/game/plugins/fs3combat/config_fs3combat.yml.  See http://aresmush.com/tutorials/code/yaml/ for troubleshooting help: (<unknown>): mapping values are not allowed in this context at line 3 column 17

The information in the error message can help you find the problem.  In the example above, it says that the problem is line 3, column 17.

## Validator

There are several online YAML validator tools.  You copy/paste your YAML into the tool and it tells you if there are any problems.  Here's a good one to use: [YAML Lint](http://www.yamllint.com/).

## Common Errors

Here are a few common YAML errors you might encounter.

### Quote Errors

One common error is forgetting to put quotes around strings with special characters.

    Error reading YAML from config_cookies.yml ... mapping values are not allowed in this context at line 3 column 17

Looking at the line of text mentioned in the error message, you might see something like this:

    cookie_board: Foo:Bar

Oops!  If there are special characters inside a string, you need to put quotes around it.  Change it to:

    cookie_board: "Foo:Bar"

### Indentation Errors

Another common error happens when you don't have the indentation levels lined up right.

    Error reading YAML from config_fs3combat.yml ... did not find expected key while parsing a block mapping at line 5 column 9

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

## Weird Errors

Sometimes the error is not quite so straightforward and you'll end up with an unhelpful error like this one:

    Error reading YAML from config_fs3combat.yml ... undefined method `merge_yaml' for 3:Fixnum

This usually happens when you restart the game.  Since it's loading all the config files at once, it's not quite so easy to pinpoint which file actually is at fault.  

Start, of course, with the file that's reporting the error (config_fs3combat.yml in the example above).  Run it through the YAML validator mentioned above.

If that file is OK, though, sometimes the error is in a file loaded previously.  The game's log file can help you here.  See [Using Log Files](/tutorials/code/logs) for help.  If the log shows:

    2017-07-04 08:33:53 DEBUG - Loading config from .../config_events.yml. 
    2017-07-04 08:33:53 DEBUG - Loading config from .../config_friends.yml. 
    2017-07-04 08:33:53 DEBUG - Loading config from .../config_fs3combat.yml.
    Error reading YAML from config_fs3combat.yml

You can be pretty sure that the error is either in config\_fs3combat or in config_friends, since everything was okay before that.

If that still doesn't help, you'll just have to go on a scavenger hunt for bad YAML.  Start with files you've changed recently or ones that were touched by a recent code merge (if you're using [git](/tutorials/code/git) for code management).

If all else fails, you can always [ask for help](/feedback).