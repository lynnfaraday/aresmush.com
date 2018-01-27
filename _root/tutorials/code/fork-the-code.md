---
title: Forking AresMUSH
description:
layout: page
tags: 
- code
- git
---

If you intend to do advanced coding (like swapping out FS3 for another skills system, or making major changes to the built-in templates), I recommend you create your own semi-independent version of Ares (called a ‘**fork**’ in GitHub lingo). 

If you're not familiar with the idea of version control, here's a [great tutorial](https://betterexplained.com/articles/a-visual-guide-to-version-control/) explaining why it's awesome.

## Benefits of Forking

Forking Ares a few extra steps to start, but it gives you several benefits:

* It can serve as a backup location for your custom code and configuration.
* It helps you coordinate among multiple coders.
* It will be easier for you to handle upgrades and bugfixes from the main Ares code.
* It helps me to help you if you later need assistance.

> **Note:** GitHub's projects are public unless you pay for a 'pro' account.  Sharing your code is in line with the spirit of Ares, but if it gives you heartburn, you can skip it.

## Create the Fork

Here is what you do to create your own Ares version.

1. Create an account on [Github](https://www.github.com).
2. Browse to the main [AresMUSH repository](https://github.com/lynnfaraday/aresmush).
    {{#pretty-image}}{{urls.media}}/code/git.png{{/pretty-image}}
3. Click the "Fork" button (near the top right).

    You are now the proud owner of your own version of AresMUSH.  You can tell that you're on your version by looking at the repository name near the upper left.  The main Ares code is **lynnfaraday/aresmush**.  Yours will be something like  **YOURUSERNAME/aresmush**.    

<a name="clone-url">

## Get the Clone URL

On the right, you should see a 'clone URL'. Click on the "HTTPS" button to get the HTTP clone URL. You will need it when you [install the game](/tutorials/install/install-game).