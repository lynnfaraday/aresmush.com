---
tags:
- config
title: Configuring the Game Wiki.
aliases:
- css
- recaptcha
---
# Configuring the Game Wiki

The Web Portal wiki has a number of configuration options.  To set them:

1. Select Admin -> Setup
2. Edit `website.yml`.

## wiki_nav

You can provide a list of wiki pages to show in the Wiki dropdown menu.  Just give the page names one by one as a list.  For example:

    - Home
    - Getting Started
    - Policies

## restricted_pages

You can lock down certain pages on the wiki so they can only be edited by people with the `manage_wiki` permission.  Just list the page names one by one in list format:

    - home

## wiki_aliases

You can create aliases for redirects or commonly-misspelled wiki page names to avoid broken links.  Just list the alias and the page you want it to go to.  In this example, someone linking to 'main' will be directed to 'home' instead:

    main: home