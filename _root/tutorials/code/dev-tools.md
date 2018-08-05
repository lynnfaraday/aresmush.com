---
title: Development Tools
description:
layout: page
tags: 
- code
- tools
---

This article lists some tools that you'll probably want to get if you're doing Ares coding.

## Github Desktop

[GitHub Desktop](https://desktop.github.com/) is a nice tool that makes it easy to work with GitHub.  It's available for Mac or Windows.

The [Using GitHub](/tutorials/code/edit-code/github) screencast walks you through how to use GitHub Desktop.

## Code Editors

Do yourself a favor and get a decent code editor.  Here are some good ones:

* [Atom](https://atom.io/) - Windows/Mac/Linux
* [Visual Studio Code](https://code.visualstudio.com/) - Windows/Mac/Linux
* [Sublime](http://www.sublimetext.com/) - Windows/Mac/Linux
* [Textmate](https://macromates.com/) - Mac Only

I personally don't think a Ruby IDE like RubyMine is worth the cost for the benefits you get, but YMMV.

## Test Environment

It's helpful to have a place to test your code that *isn't* your main game.  That way you can make sure everything works right before unleashing it on your players.  

> **Important!** It's strongly recommended that you follow the standard [installation instructions](/tutorials/install) for your very first Ares game.  For just a few bucks, less than the price of a grande coffee, you can spin up a droplet for a couple weeks and get your feet wet.  That way you're not trying to learn both Ares code and Ares server setup at the same time!  Once you have a little more experience with Ares, you can explore some of the [other options](/tutorials/code/dev-tools) for setting up a game for development purposes.


See the [Setting Up a Test Game](/tutorials/code/edit-code/test-game) tutorial for a screencast explaining and demonstrating your options.  Some technical details for each can be found below.

### Installing on a Local PC

If you have MacOS or Linux installed on your home PC, you can actually install your own copy of Ares and run the code locally.  This makes testing a breeze.

Unfortunately, AresMUSH doesn't run on Windows at the present time due to a limitation of a third-party library used in the database adapter.  :(

<button data-toggle="collapse" data-target="#macsetup" class="btn btn-info">Show Mac Setup Instructions</button>
<div id="macsetup" class="collapse">
 
{{> local_mac_setup }}
</div>

### Dual Droplets

A quick and easy way to have a test environment is to just get a second droplet and install a new copy of the game using the standard [installation instructions](/tutorials/install).   

A droplet costs only a few dollars a month, but if you're extra-strapped for cash you can use Digital Ocean's snapshot feature to save a backup of the droplet and spin it up only for a few hours each month while testing.

### Using a Virtual Machine

You can run a Virtual Machine (VM) - a computer within a computer - on your local PC running MacOS, Windows or Linux.  If the machine is running Ubuntu Linux, you can install Ares on it.  With [GitHub](/tutorials/code/edit-code/github), you can transfer code to the Virtual Machine and test it there.

<button data-toggle="collapse" data-target="#vmsetup" class="btn btn-info">Show Virtual Machine Setup Instructions</button>
<div id="vmsetup" class="collapse">
 
{{> vm_setup }}
</div>

### Using a Cloud IDE

You can install Ares on a cloud development environment.  You'll need one like [CodeAnywhere.com](https://codeanywhere.com) that allows you to use an Ubuntu virtual machine for testing and provides SSH access to the machine so you can install the database and other tools.  The standard installation scripts will require some tweaking.

### Using a Dual Install (Not Advised)

It's possible to install two copies of AresMUSH on a single server - one for the real game, one for development - but it's really not recommended.  Running two copies on the same server requires a fair bit of changes to the install scripts, as well as jumping through hoops to get two separate instances of redis running in parallel.  It can be done, but it will be a pain and you may end up with performance issues on the standard droplet size when the test game is running.  It's far easier to just get two separate droplets, as described above.

 