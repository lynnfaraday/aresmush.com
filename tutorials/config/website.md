---
title: Configuring the Web Portal.
layout: page
tags:
- config
---

There are a variety of things you can configure about the Web Portal.

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Home Page Text

You can configure the welcome text on the Web Portal's home page.

1. Select Admin -> Setup -> Website
2. Select Home Page Text.

The home page text can contain [Markdown formatting](https://daringfireball.net/projects/markdown/syntax) and ansi formatting codes.

## Changing the Colors

You can configure the colors on the Web Portal.

The Web Portal uses SCSS, which is an enhanced version of CSS that - among other things - lets you set up variables so you can change a color in one spot and have it take effect in many styles. Changing the primary color will affect both headings and table headers, for example.

To change the colors:

1. Select Admin -> Setup
2. Select Edit Theme Colors.
3. Use the color widgets to select the desired colors.

You can alternately edit the colors.scss config file (via Admin -> Setup -> Text Files) and enter colors manually using [HTML color codes](https://htmlcolorcodes.com/).

Here are the available colors:

* Background color - The main page background.
* Text color - The main text color.
* Primary color - Headings and table headers.
* Primary outline color - Border around the primary headings.
* Primary words color - The words inside something that uses the primary color.
* Secondary color - Links and contrast colors.
* Gutter color - The gutter borders on the left and right side of the page.
* Border color - Boxes and lines around things.
* Faded text color - Hints and subtle headings, like the sidebar headings.

> <i class="fa fa-exclamation-triangle"></i> **Note:** After changing the colors, you'll usually need to do a force-refresh on your browser to make it reload the page.  This is a browser thing, not an Ares thing.

## Images

There are three main images used by the website.  You can upload new versions on the website.

1. Select Directory -> Files.
2. Upload new versions for any files in the `theme_images` folder.  This folder is locked to admins.
3. Be sure to check the 'overwrite' box to overwrite the existing version.

* background.png - Used as a background image across the page title/header area.
* box-bg.png - Used as a background behind the character profile and log pages.
* jumbotron.png - Home page image.

> <i class="fa fa-exclamation-triangle"></i> **Note:** Some browsers (notably Chrome) are stubborn about reloading theme images right away.  You may need to clear your image cache or try viewing it in private/incognito mode to see your images right after you've uploaded them.

You can use [Custom CSS](#custom-css-style), explained below, to change which images are used in each section.  For example, if you want to use different backgrounds for the profile and log pages, or a JPG instead of a PNG for the title background.

### Choosing a Header Background

The default style positions the header background in a 200 pixel high area using `background-size: cover` and `background-position: center`.   

* **Cover** will either stretch or crop the image to make it cover the entire header area.  
* **Center** always tries to keep the center of the image in view.

Take the BSGU background image, for example.  Here is the original image.  Notice that the center of the image is near the Cylon's shoulder.

{% include pretty_image.html file='web-portal/background-main.jpg' %}

In wide browsers, you'll get a 200 pixel wide swath across the center of the image.  Notice that the Cylon's shoulder is still in the center of the header.

{% include pretty_image.html file='web-portal/background-wide.jpg' %}
{% include pretty_image.html file='web-portal/background-wide-example.jpg' %}

And in narrow browsers, including mobile, the height will be scaled down to be 200 pixels high, and the width will be cropped to fit.  Notice again that the Cylon's shoulder is still in the center of the header.

{% include pretty_image.html file='web-portal/background-narrow.jpg' %}

You can pick a different focal point (other than center) with custom CSS, as explained in the [W3Schools](https://www.w3schools.com/css/css_background.asp) tutorial on background positioning.  See below for information on custom CSS styles.

## Changing the Navigation Bars

A few of the navigation bar settings are configurable, described in Advanced Configuration below.

* Whether the sidebar appears on the left or right.  (`left_sidebar`)
* What pages to show on the top navbar.  (`top_navbar`)

Changing what's on the sidebar requires a change to the website code.  See [Web Navigation](/tutorials/code/web-nav.html) for details.

## Configuring Recaptca

You can use Google's [Recaptcha](https://www.google.com/recaptcha/intro/) to keep bots from creating accounts.  This is optional, but if you don't turn it on you should disable `allow_web_registration`.  Otherwise you'll get bot accounts for sure.

Sign up for your own Recaptcha key by clicking "Get Recaptcha" from that website.

1. Create a new "Recaptcha v2" key.
2. List your game's website domain under the domains list.  You can also list 'localhost' if you're doing local testing.
3. Google will show your key info.

Under 'Client Side Integration' you'll find a code snippet like this:

`<div class="g-recaptcha" data-sitekey="ABCD123"></div>`

The 'ABCD123" is your Recaptcha Site.

Under 'Server Side Integraton' you'll see an entry like this:

`secret(required): DEFGH789`

The 'DEFGH789 is your Recaptcha Secret.

To configure the recaptcha information:

1. Select Admin -> Setup
2. Edit `secrets.yml`.

Enter the Recaptcha Site and Secret you got from the code snippet above.

## Custom CSS Style

Beyond the colors, you can add custom CSS styles that will override the Web Portal style to your heart's content.

1. Select Admin -> Setup
2. Edit `custom_style.scss`.

> <i class="fa fa-exclamation-triangle"></i> **Note:** After changing the custom CSS style, you'll usually need to do a force-refresh on your browser to make it reload the page.  This is a browser thing, not an Ares thing.

### Changing the Font

Many games want to change the text font.  You can easily use a Google font by adding the following to your custom CSS style:

    @import url('https://fonts.googleapis.com/css?family=Roboto');
    body {    
      font-family: 'Roboto', sans-serif;
    }

### Changing the Jumbotron Image Size

The jumbotron is the banner image that shows on the home page.  By default, this stretches across the screen, so it's designed for wide images.  If the image you want to use doesn't look good that way, you can adjust the width of that image using CSS:

    .jumbotron-image { 
      width: 500px;
    }

Set whatever width fits your image.

### Advanced Color Variables

The web portal uses the [Bootstrap](hhttps://getbootstrap.com/docs/3.3/css/#less) website layout and the [Ember Power Select](http://ember-power-select.com/docs/styles) addon for dropdown menus.  Although you _can_ style these things with regular CSS by modifying `custom_style.scss`, it might be easier to use their own built-in variable names.  

> <i class="fa fa-exclamation-triangle"></i> **Note:** Bootstrap and Power Select variables are **not** editable through the Ares `colors.scss` file.  You have to modify the code file `ares-webportal/app/styles/advanced-colors.scss` and then re-deploy the portal.

Here are some examples of how you can set Bootstrap and Power Select styles:

    $ember-power-select-border-color: orange;
    $state-info-bg:  yellow;
    $brand-success: blue;

### Icons

[FontAwesome](http://fontawesome.io/icons/) icons are used throughout the site and available for your use in custom HTML.

### Custom Images

You can use custom CSS to change which images are used in each section.  For example, to use the jumbotron image for the scene log background, override the 'background-image' property of the `log-wrap` class:

    .log-wrap {
      background-image: url('/game/uploads/theme_images/jumbotron.png');
    }

## Wiki Options

See [Configuring the Wiki](/tutorials/config/wiki.html).

## Advanced Options

The Web Portal has a number of configuration options.  To set them:

1. Select Admin -> Setup
2. Edit `website.yml`.

### allow_html_in_markdown

Many of the Web Portal pages allow players to enter [Markdown](https://daringfireball.net/projects/markdown/syntax).  By default, Ares allows HTML in its Markdown text.  This gives players a great deal of flexibility for embedding images, youtube videos, or custom styles.  However, it *could* be used to run malicious or annoying javascript code.  If you run into trouble, you can tell Ares to run Markdown in safe mode by disabling HTML.

### max_upload_size_kb

You can configure the maximum file upload size.  By default it is 5000 kB (5 MB).

### website_code_path

By default, Ares assumes that the website will be installed in your home folder in a folder named 'ares-webportal'.  You can change this option if you've installed it in a different location.

### character_gallery_group and character_gallery_subgroup

By default, the character gallery page shows characters organized into tabs by Faction and then into sub-groups by Position.  You can change this by editing the two character gallery settings to be any two groups.   For example, on BSG:U the gallery was organized by Department then Position.

### left_sidebar

If set to true, the sidebar appears on the left instead of the default right.

### top_navbar

This setting lets you customize the top navigation bar.  The home, account and admin links are always fixed, so the navbar goes:

    Home | Account (on small browsers) | CUSTOM NAV | Admin

You control what appears in the CUSTOM NAV section.

> <i class="fa fa-exclamation-triangle"></i> **Note:** If you mess up your custom navigation configuration, you can cause your web portal to not load properly.  When in doubt, [ask for help](/feedback.html).

The basic format is:

    - title: First Menu Title
      menu:
         - page: some-ember-page
           title: First Page Title
         - page: another-ember-page
           title: Second Page Title
    - title: Second Menu Title
      menu:
         - page: random-ember-page
           title: Third Page Title
         - page: other-ember-page
           title: Fourth Page Title

Within each `menu` config, you can list internal pages, external pages, and a divider.

For an internal page, list the page route, a display title, and an *optional* id.  Some routes, notably help-topic and wiki-page, require you to specify an identifier matching the help topic name or wiki page name.  For example:

    - page: wiki-page
      title: Getting Started
      id: getting_started

> <i class="fa fa-exclamation-triangle"></i> **Note:** The 'page' entries must match Ember page routes **not** regular URLs (e.g. `wiki-page` not `/wiki/page`, or `characters` not `/chars`).  You'll find most of the routes you need already listed in the default top_navbar configuration.  If the one you want isn't listed, just [ask for help](/feedback.html).

For an external page, list the URL, a display title, and an *optional* [browser tab target](https://www.w3schools.com/tags/att_a_target.asp).  For example:

    - target: blank
      title: Interactive Combat Walkthrough <i class="fa fa-external-link-alt" aria-hidden="true">
      url: http://aresmush.com/fs3/fs3-3/combat-walkthrough

For a dividing line, just use:

    - divider: true

### HTTPS Web Portal

If you want your web portal to use HTTPS for security, it requires some advanced server setup.  See [HTTPS Web Portal Setup](/tutorials/config/server.html#https-web-portal).