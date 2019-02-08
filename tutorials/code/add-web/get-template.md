---
title: Modifying the Character Template
description:
layout: tutorial
nextstep: edit-request
prevstep: get-request
tutorialIndex: tutorials/code/add-web
addWebTutorial: true
tutorialName: Modifying the Web Portal
tags: 
- code
- website
---

Now that we have our data being sent from the game to the website, we can actually show it on the web profile.

The actual profile template is located in `ares-webportal/app/templates/char.hbs`, but it leverages Ember components for the various pieces of the profile.  This makes the code a bit cleaner.  For example, all of the demographics information is located in a component named profile-demographics:

<pre>
   &lt;div class="row profile-wrap">
    &#x7b;&#x7b;profile-demographics char=model.char}}
   &lt;/div>
</pre>

You can find the components under `ares-webportal/app/templates/components/<name>.hbs`.
  
For this example, we're going to put goals into the "System" section near character sheet and RP hooks.  That file lives here:  `ares-webportal/app/templates/components/profile-system.hbs`.

First we'll need to add a new tab definition near the top.  For example:

    <li><a data-toggle="tab" href="#systemhooks">RP Hooks</a></li>
    <li><a data-toggle="tab" href="#systemgoals">Goals</a></li> 
    <li><a data-toggle="tab" href="#systembg">Background</a></li> 

Then we can add the goals themselves down below as a tab-pane div.  For example:

<pre>
    &lt;div id="systemhooks" class="tab-pane fade">
        &#x7b;&#x7b;&#x7b;ansi-format text=char.rp_hooks}}}
    &lt;/div>
    
    &lt;div id="systemgoals" class="tab-pane fade">
        &#x7b;&#x7b;&#x7b;ansi-format text=char.goals}}}
     &lt;/div>
     
    &lt;div id="systembg" class="tab-pane fade">
        &#x7b;&#x7b;&#x7b;ansi-format text=char.background}}}
     &lt;/div>
</pre>

Here we're using the ansi-format helper because the goals can contain fancy formatting.   For a raw text field we could have just used `&#x7b;&#x7b;&#x7b;char.goals}}`.

Re-deploy the website using the `website/deploy` command.  This will take a few minutes.  Then you can test it!

{% include tip.html content="You can also run the website in [debug mode](/tutorials/code/debug-mode.html).  This spins up a second copy of the website on a different port for testing.  The advantage is that changes to the web code will be immediately loaded without needing to wait for a deploy, and without potentially messing up your main site." %}