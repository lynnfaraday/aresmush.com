---
title: Development Tools
description:
layout: page
tags: 
- code
- tools
---

This article lists some tools that you'll probably want to get if you're doing Ares coding.

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Code Editors

Do yourself a favor and get a decent code editor.  Here are some good ones:

* [Atom](https://atom.io/) - Windows/Mac/Linux
* [Visual Studio Code](https://code.visualstudio.com/) - Windows/Mac/Linux
* [Sublime](http://www.sublimetext.com/) - Windows/Mac/Linux
* [Textmate](https://macromates.com/) - Mac Only

I personally don't think a Ruby IDE like RubyMine is worth the cost for the benefits you get, but YMMV.

## Github Desktop

[GitHub Desktop](https://desktop.github.com/) is a nice tool that makes it easy to work with GitHub.  It's available for Mac or Windows.

For help using GitHub, including GitHub desktop, see the [Git tutorial](/tutorials/code/git).

## Test Environment

It's helpful to have a place to test your code that *isn't* your main game.  That way you can make sure everything works right before unleashing it on your players.  

> <i class="fa fa-exclamation-triangle"></i> **Note:** It's strongly recommended that you follow the standard [installation instructions](/tutorials/install) for your very first Ares game.  For just a few bucks, less than the price of a grande coffee, you can spin up a droplet for a couple weeks and get your feet wet.  That way you're not trying to learn both Ares code and Ares server setup at the same time!  Once you have a little more experience with Ares, you can explore these other options for setting up a game for development purposes.

There are several options available to you.

### Dual Droplets

The simplest and quickest way to set up a test game is to just get a second droplet and install a new copy of the game using the standard [installation instructions](/tutorials/install).

You don't need a separate host name for the test game; you can just use the droplet's IP address as the host name.

> <i class="fa fa-info-circle"></i> **Tip:** All of the other test game setups require some degree of sever administration fiddling.  If that's not your thing, then dual droplets is probably the best solution for you.

### Installing on Your Local Mac

If you have MacOS installed on your home PC, you can actually install your own copy of Ares and run the code locally.  This makes testing a breeze.

<button data-toggle="collapse" data-target="#macsetup" class="btn btn-info">Show Mac Setup Instructions</button>
<div id="macsetup" class="collapse">
 
{{> setup_mac }}
</div>

### Installing on Your Local PC

AresMUSH won't run on Windows due to a limitation in the database driver, but you can install Ares using a Virtual Machine (VM).  A VM is like a computer within a computer.  Once your VM is installed and configured, you can connect to it just as you would a server in the cloud.

<button data-toggle="collapse" data-target="#vmsetup" class="btn btn-info">Show Virtual Machine Setup Instructions</button>

<div id="vmsetup" class="collapse">
{{> setup_vm }}
</div>

### Installing on Your Droplet

If you're using the standard installation setup (on a droplet or other virtual private server), you can install a test game on the same droplet.

<button data-toggle="collapse" data-target="#dropletsetup" class="btn btn-info">Show Droplet Instructions</button>

<div id="dropletsetup" class="collapse">
{{> setup_droplet }}
</div>

## Getting Code to the Test Game

You edit code on the test game the same way you do on the real game: through direct editing, FTP, or GitHub.  GitHub offers the most reliable workflow.

1. Develop code on your PC.
2. Push it to GitHub.
3. Pull it to the test game.
4. Load the code on the test game and see how it works.
5. Repeat steps 1-4 as needed, then when you're happy, pull the code to the real game.
6. Reload the code on the real game and go!

{{#pretty-image}}{{urls.media}}/code/git-test.png{{/pretty-image}}

For more help using GitHub, including GitHub desktop, see the [Git tutorial](/tutorials/code/git).