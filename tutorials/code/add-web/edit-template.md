---
title: Modifying the Edit Template
description: 
layout: tutorial
nextstep: modify-chargen
prevstep: edit-request
tutorialIndex: tutorials/code/add-web
addWebTutorial: true
tutorialName: Modifying the Web Portal
tags:
- code
- website
---

Finally, we modify the web portal to let us enter some goals.  The template lives here:  `ares-webportal/app/templates/char-edit.hbs`.

We can add a section right after the RP hooks to let us edit the goals.  As with the profile show template, we must add a tab reference and then tab content.

        <li><a data-toggle="tab" href="#hooks">RP Hooks</a></li>
        <li><a data-toggle="tab" href="#goals">Goals</a></li>

<pre>
        &lt;div id="hooks" class="tab-pane fade in">
          &#x7b;&#x7b;markdown-editor text=model.rp_hooks}}
        &lt;/div>
        
        &lt;div id="goals" class="tab-pane fade in">
          &#x7b;&#x7b;markdown-editor text=model.goals}}
        &lt;/div>
</pre>

The markdown-editor helper lets players easily edit and preview markdown text.

This lets us *enter* the data.  To actually *send* the data to the game, there's one more place we need to wire up: the edit controller.  That lives here: `ares-webportal/app/controllers/char-edit.js`

The controller has as `buildQueryDataForChar` method that gets activated when the player clicks the 'save' button.  In there it sets up a hash with all the profile data the player entered.  We'll modify it to add our goals.

    return { 
            id: this.get('model.id'),
            rp_hooks: this.get('model.rp_hooks'),
            goals: this.get('model.goals'),
            ...
            }

{% tip %} 
This controller uses a helper method to build its data, which is common when the data is complex.  In simpler controllers, you might see the data plugged right into the  `save`  action function.
{% endtip %}