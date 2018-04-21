---
toc: ~config~ Configuring the Plugins
title: Configuring the Web Portal.
aliases:
- css
- recaptcha
---
# Configuring the Web Portal

There are a variety of things you can configure about the Web Portal.

## Home Page Text

You can configure the welcome text on the Web Portal's home page.

1. Select Admin -> Setup
2. Edit `website.txt` 

The home page text can contain [Markdown formatting](https://daringfireball.net/projects/markdown/syntax) and ansi formatting codes.

## Changing the Colors

You can configure the colors on the Web Portal.

The Web Portal uses SCSS, which is an enhanced version of CSS that - among other things - lets you set up variables so you can change a color in one spot and have it take effect in many styles.  

Changing the primary color will affect both headings and table headers, for example.  Here are the available colors:

* Background color - The main page background.
* Text color - The main text color.
* Primary color - Headings and table headers.
* Primary outline color - Border around the primary headings.
* Primary words color - The words inside something that uses the primary color.
* Secondary color - Links and contrast colors.
* Gutter color - The gutter borders on the left and right side of the page.
* Border color - Boxes and lines around things.
* Faded text color - Hints and subtle headings, like the sidebar headings.

To change the colors:

1. Select Admin -> Setup
2. Edit `colors.scss`.

For example, the colors stylesheet lets you set up colors like so:

    $primary-color: #6B0C22;
    $background-color: #fff;

You can use any [HTML color code](https://htmlcolorcodes.com/) (like #6B0C22) or a limited set of pre-defined HTML color names (like darkorange or salmon).

## Images

There are three main images used by the website.  You can upload new versions on the website admin page.

1. Select Directory -> Files.
2. Upload new versions for any files in the `theme_images` folder.  This folder is locked to admins.

* background.png - Used as a background image across the page title/header area.
* box-bg.png - Used as a background behind the character and log pages.
* jumbotron.png - Home page image.

> <i class="fa fa-info-circle"></i> **Tip:** The default header background style makes it *centered* in the available space - 200px high and as wide as the browser window.   It works best when you have a wide but short background image - something like 1600x400 works pretty well.  Be sure to test it at different browser window sizes, including mobile.  You can also adjust the `header-wrap` CSS style if you want to adjust the formatting to something more suited to your particular header image.

## Changing the Navigation Bars

A few of the navigation bar settings are configurable, described in Advanced Configuration below.

* Whether the sidebar appears on the left or right.
* Wiki pages to show under the Wiki menu.

Beyond that, changing the navigation bars requires a slight change to the website code.  See [Web Navigation](/tutorials/code/web-nav) for details.


## Setting up the Search Box

Ares doesn't come with a search feature for the Web Portal, but you can set one up easily using [Google Custom  Search Engine](https://cse.google.com/cse/all).  Just log in with your Google account and add your site.  The GCSE control panel will tell you your search engine ID, which will be a string of numbers and letters like:  `123456:abcdef`. 
  
1. Select Admin -> Setup
2. Edit `secrets.yml`.

Enter your search engine ID under the gcse option.

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

### Advanced Color Variables

The web portal uses the [Bootstrap](hhttps://getbootstrap.com/docs/3.3/css/#less) website layout and the [Ember Power Select](http://ember-power-select.com/docs/styles) addon for dropdown menus.  Although you _can_ style these things with regular CSS by modifying `custom_style.scss`, it might be easier to use their own built-in variable names.  

> <i class="fa fa-exclamation-triangle"></i> **Note:** Bootstrap and Power Select variables are **not** editable through the Ares `colors.scss` file.  You have to modify the code file `ares-webportal/app/styles/advanced-colors.scss` and then re-deploy the portal.

Here are some examples of how you can set Bootstrap and Power Select styles:

    $ember-power-select-border-color: orange;
    $state-info-bg:  yellow;
    $brand-success: blue;

### Icons

[FontAwesome](http://fontawesome.io/icons/) icons are used throughout the site and available for your use in custom HTML.

## Advanced Options

The Web Portal has a number of configuration options.  To set them:

1. Select Admin -> Setup
2. Edit `website.yml`.

### allow_web_registration

By default, players can create characters from the Web Portal.  If you wish to lock this down, you can set `allow_web_registration` to `false`.   If you allow web registration, be sure to configure Recapta to prevent bots, as explained below.

### portal_requires_registration

Set this to `true` if you want to require people to log in before they can access the Web Portal at all.  Often coupled with `allow_web_registration` to require people to create a character from the game itself instead of registering on the Web Portal.

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

### wiki_nav

You can provide a list of wiki pages to show in the Wiki dropdown menu.  Just give the page names one by one as a list.  For example:

    - Home
    - Getting Started
    - Policies
