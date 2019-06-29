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

{% note %} 
These instructions assume that you've followed the standard installation process and have your game server pointed at GitHub (either to the main Ares repository or to [your own fork](/tutorials/code/git.html)).  If you've done something different with your server, you may need to adapt the instructions to your environment.
{% endnote %}
 
<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Updating Your Own Fork

If you are making custom code changes and have your own GitHub fork, you'll need to update your fork to get the latest code from the main Ares repository. See [upgrading forks](/tutorials/code/git.html#upgrade).

## Upgrade While Running

Many version upgrades can be done while the game is still running.

{% note %} 
The version's release notes will advise you if a restart is required.  If so, follow the instructions in **Upgrade With a Restart** instead.
{% endnote %}

1. Type `upgrade` in-game to commit any local changes and get the latest game code from GitHub.  If you see any CONFLICT notices from the upgrade, you'll need to edit the code on the server shell as explained in Resolving Conflicts below.
2. Once any conflicts have been resolved, type `upgrade/finish` in-game to complete the upgrade.

{% tip %}
The `upgrade/finish` command runs `load all` (to reload the code modules), `migrate` (to update your database and configuration files to the latest versions), and `website/deploy` (to update the website).  You can also run these three commands independently.  You will need to run the commands manually if your Ares version is older than Beta 44, since the upgrade/finish command doesn't exist.
{% endtip %}

## Upgrade With a Restart

Some version upgrades require a game restart, particularly if game engine changes or there's a major database update.  Even if the version doesn't *require* a restart, it's still fine to do one.  You'll shut the game down, update the code, and then restart it.  Total downtime should be a few minutes at most.

1. [Shut down the game](/tutorials/manage/shutdown.html) using the `shutdown` command in-game or the web portal admin screen.
2. Connect to the [server shell](/tutorials/install/server-shell.html) and change to the `aresmush` folder.
3. Use git commands or the `bin/upgrade` script to commit any local changes and get the latest game code from GitHub.  If you see any CONFLICT notices from the upgrade, see Resolving Conflicts below.
4. Type `bin/startares` to restart the game.


## Important Note About Downgrades

{% note %} 
Ares has a lot of support for **upgrades** but not for *downgrades*.  If you ever find yourself needing to revert back to a previous version, you may need to make some custom code tweaks to prevent data loss (since database fields may be different between versions).  Unless you're super-comfortable with the code, it's probably best to [ask for help](/feedback.html) before attempting this. 
{% endnote %}


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

If you run into trouble resolving conflicts, don't be shy about [asking for help](/feedback.html).