---
toc: ~config~ Configuring the Plugins
title: Configuring the wikidot integration.
---
# Configuring the Wikidot Integration

AresMUSH can integrate with wikis on [Wikidot](http://wikidot.com) to automatically generate character profiles and RP logs.   

> **Tip:** Even if you don't activate the wikidot integration, you can still generate wiki templates that players can copy and paste from within the game to the wiki.  See the help on the wiki command in-game for more information.

## Getting a Wikidot API Key

The interface (API) that AresMUSH uses to talk to Wikidot is not available on Wikidot's free account tier.  You need a **Wikidot Pro Lite** account or higher.  At the time of this writing it was about $4/month.  You get access to the API plus a lot more storage and other features.

Once you have an account with API access, you can go to `Account -> Settings -> API Access` to find your API keys.  You'll need the one that says "read-write".

## Activating API Access on Your Wiki

The API key will only work if you've allowed API access on your wiki.  Go to your sites "Site Manager" screen (usually http://YOURWIKINAME.wikidot.com/_admin).  Select `Security -> API Access` and make sure the enable box is checked.

## Configuring the Game to Talk to Wikidot

Next you'll need to configure the game to talk to your wikidot site.  First save your API key in the secret codes settings:

1. Go to the Web Portal's Admin screen.  
2. Select 'Secret Codes'.
3. Scroll down to 'Wikidot'.
4. Enter the API Key.
5. Click Save.

Then configure your wikidot settings.

1. Go to the Web Portal.
2. Select 'Advanced Configuration'.
3. Edit `config_wikidot.yml`

Set your wikidot site name.  For example, in http://YOURWIKINAME.wikidot.com it's the YOURWIKINAME part.

## Additional Wiki Settings

There are a few additional wiki settings you can configure.

1. Go to the Web Portal.
2. Select 'Advanced Configuration'.
3. Edit `config_wikidot.yml`

## Enable Autopost

You can control whether Ares is allowed to auto-generate wiki pages.  Set autopost to 'false' to disable it.

## Character Page Category

You can configure which wikidot category character pages will appear in.  By default it's "char" so character pages will be "char:Faraday".  You can leave this blank if you don't want a category.

## Log Page Categories

You can configure the wikidot category that log pages will appear in.  This varies by scene type, so you could have multiple categories - for example "social:" and "event:".

## Icon Url Format

Ares can automatically set the character's log icon when their wiki page is created.  You just need to set up the format for the log icon URL.  You can use %{site} for your wikidot site name (YOURWIKINAME, set above) and %{name} for the character name.

For example, if your icon URLs are like `http://bsgunificationmush.wdfiles.com/local--files/log-icons/Faraday_icon.png` then your icon URL format should be:

`http://%{site}.wdfiles.com/local--files/log-icons/%{name}_icon.png`


