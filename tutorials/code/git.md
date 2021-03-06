---
title: Using GitHub
description: 
layout: page
tags:
- code
- git
---

[GitHub](http://www.github.com) source control is the best way to transfer code between your PC and the game server.  In this tutorial, we'll discuss how to use GitHub and take your code workflow to the next level.

{% include toc.html %}

## Video Tutorial
 
You can view the [Using GitHub](/tutorials/code/git.html) screencast for a full walkthrough of how to use GitHub to help you when editing Ares code.  This article describes some additional details.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jc0GLdMZya8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

*[Link to video](https://www.youtube.com/embed/jc0GLdMZya8)*

The transcript is available [here](/tutorials/code/github-transcript.html).

Here is a basic summary of the workflow:

{% include pretty_image.html file='/code/git-pull.png' %}

{% note %}
This guide covers the standard workflow illustrated above: moving changes from your PC to GitHub and then to the game. You _can_ also do this in reverse (server->GitHub->PC), but that is an uncommon use case. See [Advanced GitHub](#advanced-github) for more information.
{% endnote %}

## GitHub Desktop

You can find the GitHub Desktop installer mentioned in the tutorial [here](https://desktop.github.com/).

## Creating a Fork

The first step in using GitHub for your own game code is to create your own semi-independent version of Ares, called a ‘**fork**’ in GitHub lingo. 

1. Create an account on [GitHub](https://www.github.com).
2. Browse to the main [AresMUSH repository](https://github.com/aresmush/aresmush).
    {% include pretty_image.html file='/code/git.png' %}
3. Click the "Fork" button (near the top right).

    You are now the proud owner of your own version of AresMUSH.  You can tell that you're on your version by looking at the repository name near the upper left.  The main Ares code is **aresmush/aresmush**.  Yours will be something like  **YOURUSERNAME/aresmush**.   

4. The **Clone URL** is a URL that you use in the git commands to access your code.  On the right of the repository, you should see a 'clone or download' button.  Click on it to see the clone URL. Click on the **"Use HTTPS"** button to get the HTTP clone URL. 
5. Repeat the above steps for the [Ares Web Portal Repository](https://github.com/aresmush/ares-webportal) if you also want to create a fork of the Web Portal code.

## Making the Game Use the Fork

GitHub will pull from the main ares repo when you set the game up. To use your own fork, you'll need to re-point the GitHub “origin” to your forked repository instead of the main one.

In the server shell:

1. Go to the aresmush directory.
2. Type `git remote set-url origin <Your Clone URL>`
3. Type `git pull`.
4. Change to the ares-webportal directory.
5. Repeat steps 2 and 3 in the webportal directory with the webportal clone url.

Now your game will be set up to get code updates from your fork instead of from the main Ares repository.

## Git from the Game

You can actually execute selected `git` commands from within the game without needing to connect to the server shell.  See `help git` in-game.  This is handy if you're using GitHub to sync changes between a local PC and the server because you can push to GitHub from your PC and pull the code down from inside the game itself.

<a name="upgrade"></a>

## Updating Your Fork

While you're changing your own copy of the code, there's also work going on in the main Ares repository. Whenever a new AresMUSH version is announced, you should update your fork.

{% tip %} 
It's recommended that you keep up with updates as they happen.  Not only does it ensure that you have the latest features and bugfixes at all times, but it's easier to do updates one at a time.  If you let them stack up and your code gets too far behind, the upgrade will be more difficult.
{% endtip %}

How you update your fork will vary depending on what tool you're using, and you can find many GitHub tutorials online.  The [Using GitHub](/tutorials/code/git.html#video-tutorial) video tutorial gives an example walkthrough using GitHub Desktop. 

{% note %} 
 Always remember to update **both** aresmush and ares-webportal when getting the latest code.
{% endnote %}

### Dealing with Conflicts

There may be merge conflicts if both you and the Ares devs changed the same bits of code differently.  See [Upgrades - Resolving Conflicts](/tutorials/manage/upgrades.html#resolving-conflicts) for more information, and [ask for help](/feedback.html) if you get stuck.

## Controlling Your Config Files

By default, the AresMUSH repository does not contain configuration files.  This prevents conflicts between the default configuration and your game's configuration when you're doing updates.

You *can* add your config files to source control, but there are a few caveats:

* You'll have to be careful *not* to push changes to server.yml, secrets.yml and sites.yml between your test game and real game, or it can mess up your server settings or expose sensitive information.
* If your test game is missing roles, forum categories, etc. that are in your real game and used in your config files, you may get errors or unexpected behavior.

If you still want to add your config files to source control, here's how.

Modify the .gitignore file in your Ares fork.  **Remove** the final line that excludes the entire game directory:

    # Game directory
    # -----------------------------
    /game/

Whenever you make changes to your game config, you'll have to use the git shell commands on the game server to push your config changes to GitHub. See [Advanced GitHub](#advanced-github).

{% tip %} 
Git will still ignore other parts of the game directory, including uploads, logs, and the secrets.yml config file (to keep your secret codes secret).
{% endtip %}

## Advanced GitHub

There are a plethora of good tutorials on the internet about using GitHub, including [Try Git](https://try.github.io)  and [Learn Enough Git To Be Dangerous](https://www.learnenough.com/git-tutorial).  There's also detailed guides on GitHub's own website, and the first couple chapters of the [Pro Git](https://git-scm.com/book/en/v2) ebook (later chapters go into gory details you won't need).

