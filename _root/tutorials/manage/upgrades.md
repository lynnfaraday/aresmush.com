---
title: Upgrades
description:
layout: page
tags: 
- manage
- code
- upgrade
---

At some point there will be a new version of Ares code available and you'll want to upgrade the code on the game server.

 > <i class="fa fa-exclamation-triangle"></i> **Note:** These instructions assume that you've followed the standard installation process and have your game server pointed at GitHub (either to the main Ares repository or to [your own fork](/tutorials/code/git)).  If you've done something different with your server, you may need to adapt the instructions to your environment.
 
## Important Note About Downgrades

> <i class="fa fa-exclamation-triangle"></i> **Note:** Ares has a lot of support for **upgrades** but not for *downgrades*.  If you ever find yourself needing to revert back to a previous version, you may need to make some custom code tweaks to prevent data loss (since database fields may be different between versions).  Unless you're super-comfortable with the code, it's probably best to [ask for help](/feedback) before attempting this. 

## Updating Your Own Fork

If you have your own GitHub fork, you can update it to get the latest code from the main Ares repository. See [upgrading forks](/tutorials/code/git#upgrade).  It's never too late to create your own [custom GitHub fork](/tutorials/code/git) to have a place to backup and track changes to your game code.  [Ask for help](/feedback) if you get stuck.

## Upgrade While Running

Many version upgrades can be done while the game is still running.

> <i class="fa fa-info-circle"></i> **Tip:** The version's release notes will advise you if a restart is required.  If so, follow the instructions in **Upgrade With a Restart** instead.

1. Type `upgrade` to commit any local changes and get the latest game code from GitHub.  If you see any CONFLICT notices from the upgrade, you'll need to edit the code on the server shell as explained in Resolving Conflicts below.
2. Type `load all`  to reload the code and configuration.
3. Type `migrate` to run any database updates.
4. Type `website/deploy` to re-deploy the website.

## Upgrade With a Restart

Some version upgrades require a game restart, particularly if game engine changes or there's a major database update.  Even if the version doesn't require a restart, you can still do one safely.  You'll shut the game down, update the code, and then restart it.  Total downtime should be a few minutes at most.

1. [Shut down the game](/tutorials/manage/shutdown) using the `shutdown` command in-game or the web portal admin screen.
2. Connect to the [server shell](/tutorials/install/server-shell) and change to the `aresmush` folder.
3. Use git commands or the `bin/upgrade` script to commit any local changes and get the latest game code from GitHub.  If you see any CONFLICT notices from the upgrade, see Resolving Conflicts below.
4. Type `bin/migrate` to perform any necessary database migrations.
5. Type `bin/startares` to restart the game.

## Resolving Conflicts

Sometimes there may be conflicts between code that changed in the new version and code/configuration changes you've made yourself.  When that happens, you'll see a message during the upgrade like:

    CONFLICT! Merge conflict in plugins/channels/channels.rb

You'll need to edit the files in question to resolve the conflict.  You'll see lines like this where there are conflicts between your code and the main Ares code:

    Some code.
    <<<<<<< HEAD
    your oriignal version will be in this section
    =======
    the upgraded main Ares code will be in this section
    >>>>>>> master

Edit the file manually to choose which version you want, and get rid of all the `<<< >>>` junk.  The final file should look clean, like:

    Some code.
    your modified code

Sometimes, rather than dealing with the conflict it's easier to just copy/paste the code for that file from [GitHub](http://github.com/aresmush/aresmush) and start fresh.  Once you have the new main Ares version, you can redo your custom changes.

If you run into trouble resolving conflicts, don't be shy about [asking for help](/feedback).