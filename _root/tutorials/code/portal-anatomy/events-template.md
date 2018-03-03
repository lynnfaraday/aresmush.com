---
title: Events Template
description:
layout: portal-anatomy
prevstep: ember
nextstep: events-route
tags: 
- code
- webportal
---

Ember templates use [Handlebars](https://guides.emberjs.com/v2.18.0/templates/handlebars-basics/).  Handlebars is extremely similar to the ERB templates used by the Ares game code, only it mixes HTML and dynamic content instead of text and embedded Ruby code.

> **Tip:** The curly braces in Handlebars templates are essentially like the markers in ERB templates.


You can see the events template [here](https://github.com/AresMUSH/ares-webportal/blob/master/app/templates/events.hbs).


## Model Properties

The heart of the Ares Events template is just a table.  It loops through all events using `model.events`.  The model is the basic data that the template displays.  We'll talk more about what's in the model in the next step.

## Controller Properties

In addition to the `model` data, templates can also access methods and properties from the screen's controller.  We can see that in the Events template where it uses the `isApproved` property in the Events controller to hide the 'Add' event button if the character is not approved.