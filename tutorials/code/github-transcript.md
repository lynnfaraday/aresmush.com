---
title: Using GitHub (Transcript)
layout: page
description: 
tags:
- code
---

This is the transcript for the [Using GitHub](/tutorials/code/git.html) segment of the Editing Ares Code tutorial.

## Introduction

Hi - this is Faraday from AresMUSH and this is part III of the Editing Ares Code tutorial.  In this segment, we'll look at how to use GitHub to manage our source code and easily transfer our changes from our PC to the game server.

Source control is a cornerstone of software development.  It's what the pros do, and with just a little bit of practice it can be what you do, too.

## GitHub Advantages

GitHub is a free, cloud-based source control system used by millions of developers worldwide.  Here's the basic idea:

Step 1 - **Clone** a copy of the latest code from the cloud.
Step 2 - **Change** code on your local PC.
Step 3 - **Push** those changes from your PC to GitHub.
Step 4 - **Pull** the changes from GitHub to the game server.

You may wonder what you gain by using GitHub as a middleman - isn't it easier just to upload directly to the game instead of going through GitHub?  

There are lots of benefits to source control.  Here are just a few:

* GitHub essentially serves as a cloud backup of your code.
* GitHub tracks what you change automatically, and will selectively upload only the files you changed.  This is far more efficient than FTP.
* GitHub maintains a history of all your changes, making it easier to track down problems or revert to prior versions.

Another big advantage is collaboration.  It's easier to coordinate multiple coders, and it enables you to grab patches and updates from the main AresMUSH code far more easily than using direct editing or FTP.

## Forking the Code

To use GitHub, first you'll need to create an account.  Then you'll need to create your own version, which they call a 'fork', of the AresMUSH code.  This basically creates a parallel repository under your own account, where you'll be able to store your code changes for your game.

To set up a fork - log into your account and go to the AresMUSH code repositories.  You can find a link to them through the "Source Code" link on aresmush.com.

Click the "Fork" button to create your own fork.  Be sure to do that for both the main game and the web portal.

## Cloning the Code

To work with the code on your PC, you'll need to **Clone** it from GitHub.  The easiest way to do that is to use GitHub Desktop, which is available for Mac and Windows.

Log in with your GitHub account and then click "Clone a Repository".  Select your aresmush fork and choose a local directory to store the code in.

Then do the same for the ares-webportal fork.

## Editing the Code

Now that we have the code on our hard drive, we can edit it using our favorite code editor, just like we saw in the previous tutorial.  If we look in GitHub Desktop, though, we'll see that it actually tracks the files that we've changed.  And if we click on the individual files, it will show us exactly what we changed, line by line. 

These changes, though, are still just local to our PC.  To get them up to GitHub, we need to do a **commit**.  We put in a summary of what changed and commit the changes to the main branch - master.  Now we have no local changes.  But there's still another step.  To get the changes up to GitHub, we need to also do a Push.

Now if we go to GitHub and refresh the page, we'll see the tinker text we just did.

## Getting the Code to the Game

So the code's in GitHub - but how do we get it to the game itself?

Assuming that you're ONLY doing changes through GitHub and not messing with the code on the server shell through direct editing or FTP, it's simple.

With a coder character on the game, just use the command `git pull`.  This **pulls** the latest changes from GitHub to your game server.   Then - as usual - we need to reload the code we just changed by typing `load tinker`.   We can reload as many plugins as we touched, or just do 'load all' to cover all the bases.

If we've got conflicting changes or made some changes through FTP or direct editing, you'll need to log into the server shell and use the git command line.  That's a bit outside the scope of our tutorial, but there are lots of git tutorials out there.  Feel free to ask on the forums if you get stuck.

## Resolving Conflicts

If we have made direct modifications on the server shell or in certain other unusual situations, we might get this sort of message when we do a git pull.  When this happens, we can't do it automatically through the game itself, and we need to go to the server shell to sort things out.  

So we go to the server shell and do a git status.  We see here that both the game server - through direct code editing - and GitHub have both tried to modify the tinker command in different ways.   We have to go into that file, directly edit it, and sort out the conflict between the two.

We can use nano.  We see these weird markers here.  This indicates a "merge conflict".  Basically - one version is what we had on the server before I did the git pull.  The other version is what we had in GitHub.  We have to figure out which version we want the code to be when all is said and done.  Sometimes we'll just take one section, sometimes you'll just take the other, or sometimes you'll have to combine them to get the proper version.

In this case we're going to combine them.  We're going to take the emit that just says "Done" but we're also going to keep the test comment.  We don't have to - I'm just using this as an example.

Once it's saved, we need to do a commit manually.  We don't have GitHub desktop on our server shell, so we have to use the command line.  The command we want to use is `git commit -am <commit message>`.   Now it's committed locally on the server shell, and now we need to push it back to GitHub to make everything right.

## Getting Updates

At some point, you'll want to grab the latest code from the main AresMUSH repository so you have all the latest features and bugfixes in your own game that exist in the latest aresmush release.

It's recommended that you do this operation every time there's a code release announced for AresMUSH, which you can find out about through either the forum or the Facebook page.  Just trust me - doing frequent, smaller updates will be way easier than waiting ages and trying to do some massive updates.


The way we do an update is a GitHub operation called an upstream pull.  Upstream is the place we forked from.  Your Ares repository is a fork from the main Ares repository, so that's your upstream.  Pull is because it's the same basic operation we use when we pull the code from GitHub into our game server - except in this place we're pulling from a different place (the main Ares repository) into our local PC.

I can't show you the upstream pull operation using my Ares code because you need a fork for that.  My code isn't a fork - it's the original.  So I'm going to use a different repository that is a fork.  Even though it's different code, the commands I'm going to show you are the same commands you'll use for your Ares code.

Normally we start out in the Changes area, but for this operation we're going to go over to the History area.  We select a branch to compare.  There may be many listed, but the one we're looking for is called "upstream/master" - upstream for where we came from, and master for the main branch.   Once we select that, we'll see that there are 217 commits that are in the upstream code that we don't have yet.  They've been busy.   To get them, all we do is click Merge into Master.  That will pull all of their code into my local copy.

It didn't happen this time, but it is possible that if you changed a file that I also changed in the main Ares code, you'd get a notice here that there's a merge conflict.  Just like we saw in the previous example, you need to open up that file in your favorite text editor on your local PC and sort out the conflict.  Look for those funny merge markers and figure out which version you want to keep - your version, my version, or stitch them together into a combined version.

Once you've done all that, you just do one final push to GitHub and now everything is in sync.  Then you can pull the latest changes over to your game so you have all of your code plus all the latest Ares code. 

## Conclusion

That covers all the basic things you need to know to use GitHub to manage your source code.  GitHub is the best way to transfer code between your PC and the game server.

There's still one more thing we can do to improve our development workflow.  We still don't know if the code actually works before we're putting it on our real game.  That's not ideal.

In the next segment, we'll look at different options for setting up a separate game you can use for your development, so you can test your code before you upload it to your real game.

For now, though, that concludes this part of the tutorial.  Thanks for listening.










