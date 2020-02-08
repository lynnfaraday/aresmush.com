---
title: Custom Web Portal Routes
description: 
layout: page
tags:
- code
- custom hooks
---

> This [custom code hook](/tutorials/code/custom-hooks.html) is part of the web portal.

Routes are the URLs (pages) you can go to in your web portal.  All routes must be defined in the Ember `Router` class.  You can add your own routes `ares-webportal/app/custom-routes.js`.  You must specify whether the router accepts parameters as part of its URL or not.  For example:

    export default function setupCustomRoutes(router) {
        router.route('monsters');
        router.route('monster', { path: '/monster/:monster_id'} );
    };

Here we're defining two custom routes: `https://yourmush.com/monsters` and `https://yourmush.com/monster/<id>`.