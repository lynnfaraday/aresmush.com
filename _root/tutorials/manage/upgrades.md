---
title: Upgrades
description:
layout: page
tags: 
- manage
- code
- upgrade
---

At some point there will be a new version of Ares code available and you'll want to upgrade.

> **Note:** The following instructions assume you have not made any custom code changes.  If you have, you may run into conflicts between what you've changed and what's changed in the main codebase.  Sorting that out is beyond the scope of this tutorial.

If you followed the standard installation instructions, your source code will be linked to the AresMUSH GitHub code repository.  You just need to "pull" the latest code from GitHub.

Here's how:

1. [Shut down the game](/tutorials/manage/shutdown).
2. Connect to the server shell and change to the `aresmush` directory.
3. Type `git add -A .` then `git commit -am "Saving before upgrade."`  These two commands will create a local Git checkpoint of your code prior to the upgrade, in case anything goes wrong.
5. Type `git pull`.  
6. If you see any warnings about `CONFLICT!` then resolve the conflicts.  See below for details.
7. Run any [Database Migrations](/tutorials/code/db-migration) as instructed by the new version's release notes.
8. [Restart the game](/tutorials/manage/start).
9. Assuming everything went OK, repeat step 3 with a different message "Saving after upgrade." to update your local Git checkpoint.

## Resolving Conflicts

It's uncommon, but sometimes something will be added to the configuration files and GitHub will have a hard time figuring out how to reconcile that with your local changes.   When that happens, you'll need to examine the files in question.  You'll see lines like this where there are conflicts between your code and the main Ares code:

    Some code.
    <<<<<<< HEAD
    your code
    =======
    main Ares code
    >>>>>>> master

Edit the file manually to choose which version you want, and get rid of all the <<< >>> junk.  The final file should look clean, like:

    Some code.
    your modified code

Sometimes, rather than dealing with the conflict it's easier to just copy/paste the code for that file from [GitHub](http://github.com/aresmush/aresmush) and start fresh.  Once you have the new main Ares version, you can redo your custom changes.

If you run into trouble resolving conflicts, don't be shy about [asking for help](/feedback).

## Your Own Fork

It's never too late to create your own [custom GitHub fork](/tutorials/code/git) to have a place to store your code.  [Ask for help](/feedback) if you get stuck.