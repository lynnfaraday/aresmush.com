---
toc: ~config~ Configuring the Plugins
title: Configuring the web portal.
aliases:
- css
- recaptcha
---
# Configuring the Web Portal

## Basic Configuration

The web portal has a number of configuration options.  To set them:

1. Go to the Web Portal's admin screen.
2. Look for the section titled 'Web Portal Setup'. 
3. Select one of the options.

### Search Box

Ares doesn't come with a search feature for the web portal, but you can set one up easily using [Google Custom  Search Engine](https://cse.google.com/cse/all).  Just log in with your Google account and add your site, and it will give you the HTML code.  Paste this into the search config box.

### Home Page Text

You can configure the tag line and welcome text on the Web Portal's home page.

### Changing the Colors

The Ares web portal uses [SCSS](http://sass-lang.com/guide), which is an enhanced version of CSS that - among other things - lets you set up variables so you can change a color in one spot and have it take effect in many styles.  For example, the colors stylesheet lets you set up colors like so:

    $primary-color: #6B0C22;
    $background-color: #fff;

Changing the primary color will affect both headings and table headers, for example.

* Primary color - Headings and table headers.
* Primary outline color - Border around the primary headings.
* Primary words color - The words inside something that uses the primary color.
* Secondary color - Links and contrast colors.
* Background color - The main page background.
* Gutter color - The gutter borders on the left and right side of the page.
* Border color - Boxes and lines around things.
* Faded text color - Hints and subtle headings, like the sidebar.

### CSS Style

Beyond the colors, you can add custom CSS styles that will override the web portal style to your heart's content.

It's also worth noting that the AresMUSH web portal uses the [Bootstrap](http://getbootstrap.com/) website layout system, so all standard Boostrap styles are available.   It also includes [FontAwesome](http://fontawesome.io/icons/) icons and [JQuery UI](https://jqueryui.com/) styles.

### Images

There are three main images used by the website.  They are stored in the `game/theme_images` directory, but you can upload new versions on the website admin page.

* background.png - Used as a background image across the page title area.
* box-bg.png - Used as a background behind the character and log pages.
* jumbotron.png - Home page image.

## Advanced Options

The web portal has a number of configuration options.  To set them:

1. Go to the Web Portal's admin screen.
2. Look for the section titled 'Web Portal Setup'. 
3. Select one of the options.

### allow_html_in_markdown

Many of the web portal pages allow players to enter [Markdown](https://daringfireball.net/projects/markdown/syntax).  By default, Ares allows HTML in its Markdown text.  This gives players a great deal of flexibility for embedding images, youtube videos, or custom styles.  However, it *could* be used to run malicious or annoying javascript code.  If you're worried about this, you can tell Ares to run Markdown in safe mode by disabling HTML.

### max_upload_size_kb

You can configure the maximum file upload size.  By default it is 5000 kB (5 MB).

## character_gallery_group and character_gallery_subgroup

By default, the character gallery page shows characters organized into tabs by Faction and then into sub-groups by Position.  You can change this by editing the two character gallery settings to be any two groups.   For example, on BSG:U the gallery was organized by Department then Position.

## Configuring Recaptca

You can use Google's [Recaptcha](https://www.google.com/recaptcha/intro/) to keep bots from creating accounts.  This is optional - if you don't set it up, the web portal will just let anyone sign up.

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

1. Go to the Web Portal's admin screen.
2. Select 'Secret Codes'.
3. Scroll down to 'Recaptcha'.
4. Enter your secret and site ids.