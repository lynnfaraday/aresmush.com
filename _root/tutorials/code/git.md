---
title: Using GitHub
description:
layout: page
tags: 
- code
- git
---

If you intend to do advanced coding (like swapping out FS3 for another skills system, or making major changes to the built-in templates), I highly recommend you use version control.

AresMUSH uses [GitHub](http://www.github.com) for its version control, so using that for your own game's code enables easy synchronization and support.  Some benefits of using GitHub:

* It can serve as a backup location for your custom code and configuration.
* It helps you coordinate among multiple coders.
* It lets you track changes and go back to old versions if needed.
* It will be easier for you to handle upgrades and bugfixes from the main Ares code.
* It helps me to help you if you later need assistance.

If you're not familiar with how version control works, here's a [great tutorial](https://betterexplained.com/articles/a-visual-guide-to-version-control/).

## Creating a Fork

The first step in using GitHub for your own game code is to create your own semi-independent version of Ares, called a ‘**fork**’ in GitHub lingo. 

1. Create an account on [Github](https://www.github.com).
2. Browse to the main [AresMUSH repository](https://github.com/aresmush/aresmush).
    {{#pretty-image}}{{urls.media}}/code/git.png{{/pretty-image}}
3. Click the "Fork" button (near the top right).

    You are now the proud owner of your own version of AresMUSH.  You can tell that you're on your version by looking at the repository name near the upper left.  The main Ares code is **aresmush/aresmush**.  Yours will be something like  **YOURUSERNAME/aresmush**.    

4. The **Clone URL** is a URL that you use in the git commands to access your code.  On the right of the repository, you should see a 'clone or download' button.  Click on it to see the clone URL. Click on the **"Use HTTPS"** button to get the HTTP clone URL. 
5. Repeat the above steps for the [Ares Web Portal Repository](https://github.com/aresmush/ares-webportal) if you also want to create a fork of the Web Portal code.

## Making the Game Use the Fork

If you create your fork before you install the code, you can use specify it when you [install the game](/tutorials/install/basic-config).

    ./install <game clone URL> <Web Portal clone URL>

If you've already installed the game, you just need to make your install point at your new fork instead of the standard AresMUSH repository.  In the server shell, change to the aresmush folder and run the following commands:

    git remote rm origin
    git remote add origin <your fork's clone URL>
    git pull origin master

 > <i class="fa fa-exclamation-triangle"></i> **Note:** Repeat the above commands for both the aresmush and ares-webportal folders.

Now your game will be set up to get code updates from your fork instead of from the main Ares repository.

## Pushing and Pulling

GitHub stores your code in the cloud.  After you've made some code changes, you **push** those changes to your repo so they're stored safely and there's a record of who changed what.   You can **pull** changes from the cloud into your local copy.  These could be changes made by other coders (if your game has more than one) or changes made in the main Ares repository that you want to incorporate.

Let's say you've made some code changes and uploaded them to your server.  Here's how you push those changes to GitHub.

1. Log into the server shell and change into the aresmush folder.
2. Type `git add -A .` to add all local changes to the 'staging' list - this is the list of the changes that will be pushed.
3. Type `git status` to review the staging list and make sure everything you expect is there.
4. Type `git commit -m "<a description of the changes>"` to create a 'commit', which is a collection of changes.
5. Type `git push` to push the changes to GitHub.

You can look in your repository in GitHub to see the commit.

## Git from the Game

You can actually execute selected `git` commands from within the game without needing to connect to the server shell.  See `help git` in-game.  This is handy if you're using GitHub to sync changes between a local PC and the server because you can push to GitHub from your PC and pull the code down from inside the game itself.

## Working Locally

Commonly people will actually make code changes on their local computer, push them to GitHub, and pull them down to the MUSH server when they're done.  This lets you make changes without affecting the running game.

{{#pretty-image}}{{urls.media}}/code/git-pull.png{{/pretty-image}}

You can even set up a test game on your PC so you can test the code before pushing it.  See [Setting Up Ares Locally](/tutorials/code/local-setup) for more help getting Ares running on your PC/Mac.

<a name="upgrade"></a>

## Updating Your Fork

While you're changing your own copy of the code, there's also work going on in the main Ares repository. Whenever a new AresMUSH version is announced, you should update your fork.

> <i class="fa fa-info-circle"></i> **Tip:** It's recommended that you keep up with updates as they happen.  Not only does it ensure that you have the latest features and bugfixes at all times, but it's easier to do updates one at a time.  If you let them stack up and your code gets too far behind, the upgrade will be more difficult.

To pull code from the main Ares repository into your own, you'll need to add a link in your local Git working folder.  
In the aresmush directory, run the command:

    git remote add upstream https://github.com/aresmush/aresmush

In the ares-webportal directory, run:

    git remote add upstream https://github.com/aresmush/ares-webportal

Now whenever you want to upgrade your fork to include the latest Ares code, you can just do:

    git pull upstream master

> <i class="fa fa-exclamation-triangle"></i> **Note:**  Always remember to update **both** aresmush and ares-webportal when getting the latest code.

### Dealing with Conflicts

There may be merge conflicts if both you and the Ares devs changed the same bits of code differently.  See [Upgrades - Resolving Conflicts](/tutorials/manage/upgrades) for more information, and [ask for help](/feebdack) if you get stuck.

## Learning GitHub

There are a plethora of good tutorials on the internet about using GitHub, including [Try Git](https://try.github.io)  and [Learn Enough Git To Be Dangerous](https://www.learnenough.com/git-tutorial).  There's also detailed guides on GitHub's own website, and the first couple chapters of the [Pro Git](https://git-scm.com/book/en/v2) ebook (later chapters go into gory details you won't need).
