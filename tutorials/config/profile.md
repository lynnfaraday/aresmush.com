---
title: Configuring the Profile System
layout: page
tags:
- config
---

To configure the Profile plugin:

1. Select Admin -> Setup.
2. Edit `profile.yml`

{% include toc.html %}

## backup_commands

You can customize what commands get executed when someone does the `backup` command.  By default it will include their profile, description, sheet and damage.

## Custom System Tabs

With custom code, you can add new tabs that appear in the "System" section of the web portal character profiles.

Add a tab control to `ares-webportal/app/templates/components/profile-custom-tabs.hbs`.  Make it it look like this, replacing `#systemgoals` with `#UNIQUE_NAME_FOR_YOUR_TAB`.  (The # is important). 

    <li><a data-toggle="tab" href="#systemgoals">Goals</a></li> 

Add the actual tab contents to `ares-webportal/app/templates/components/profile-custom.hbs`. Make it look like this, replacing `systemgoals` with the same unique tab name you used in the prior step.  But without the # this time.  You can use `char` to access character information, such as `char.goals` here.

<pre>
     &lt;div id="systemgoals" class="tab-pane fade"&gt;
     &#x7b;&#x7b;char.goals}}
     &lt;/div&gt;
</pre>

If your tab has any buttons or actions, add the code to handle them in `ares-webportal/app/components/profile-custom-tabs.js`.
