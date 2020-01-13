---
title: Modifying the Profile Template
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

Now that we have our data being sent from the game to the website, we can actually show it on the web profile.  A custom code hook lets us add new tabs to the "System" section of the character profile without touching the core code.

## Define the Tab Navigation

First we're going to define the tab navigation control.  Edit `ares-webportal/app/templates/components/profile-custom-tabs.hbs` and add:

        <li><a data-toggle="tab" href="#systemgoals">Goals</a></li> 

## Define the Tab Contents

Next we'll define the contents of the tab.  This lives in a _different file_, so edit `ares-webportal/app/templates/components/profile-custom.hbs` and add:

<pre>
    &lt;div id="systemgoals" class="tab-pane fade">
        &#x7b;&#x7b;&#x7b;ansi-format text=char.custom.goals}}}
     &lt;/div>
</pre>

{% tip %}
The name in `id=systemgoals` must match the name you used in the tab navigation control, but _without_ the # in front. This name must be unique across the entire character edit template, so it's suggested that you use something like `myplugin-tabname`.
{% endtip %}

Here we're using the ansi-format helper because the goals can contain fancy formatting.   For a raw text field we could have just used char.goals by itself.
