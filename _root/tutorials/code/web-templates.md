---
title: Web Portal Templates
description:
layout: page
tags: 
- code
- webportal
---

Ember templates use [Handlebars](https://guides.emberjs.com/v2.18.0/templates/handlebars-basics/).  Handlebars is extremely similar to the ERB templates used by the Ares game code, only it mixes HTML and dynamic content instead of text and embedded Ruby code.

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

> <i class="fa fa-info-circle"></i> **Tip:** The curly braces in Handlebars templates are essentially like the markers in ERB templates.

<pre>
    &#x7b;&#x7b;#each model.events as |event|}}
    &lt;tr>
        &lt;td>
            &#x7b;&#x7b;#link-to 'event' event.id}}&#x7b;&#x7b;event.title}}&#x7b;&#x7b;/link-to}}
        &lt;/td>

        &lt;td>
            &#x7b;&#x7b;event.organizer}}
        &lt;/td>
        &lt;td>
            &#x7b;&#x7b;event.start_datetime_local}} &#x7b;&#x7b;event.start_time_standard}})
        &lt;/td>
    &lt;/tr>

    &#x7b;&#x7b;/each}}
    
</pre>

## Model Properties

The **Model** is the basic data that the template displays.  It is set by the [Route](/tutorials/code/web-routes).  The template can access various fields within the model.  In the Events example above, you can see that the template uses `model.events` to get the list of events.

## Controller Properties

In addition to the `model` data, templates can also access methods and properties from the screen's [Controller](/tutorials/code/web-controllers).  We can see that in the Events template where it uses the `isApproved` property in the Events controller to hide the 'Add' event button if the character is not approved.

## Ansi and Markdown Text

Some of the text data coming back from the game is going to be blocks of ansi-formatted rendered Markdown - descriptions, backgrounds, help files, etc.   The proper way to display this in a template is with the ansi helper:

<pre>
    &#x7b;&#x7b;&#x7b;ansi-format text=gameText&#x7d;&#x7d;&#x7d;
</pre>

Three braces are important because it's already got HTML in it.


## Title Helper

The template also needs to set the page title, which is shown in the browser titlebar and bookmarks.  It uses the title helper for this. The title helper can accept either a plain string or a controller property (such as the model).  For example:

<pre>
    &#x7b;&#x7b;title 'Events'&#x7d;&#x7d;  -- plain string
    &#x7b;&#x7b;title model.heading&#x7d;&#x7d;  -- model property
    &#x7b;&#x7b;title pageTitle&#x7d;&#x7d; -- custom property that you can define in the controller
</pre>