---
toc: ~config~ Configuring the Plugins
title: Configuring the web portal.
aliases:
- css
- recaptcha
---
# Configuring the Web Portal

The web portal has a number of configuration options.  To set them:

1. Go to the Web Portal's admin screen.
2. Select 'Website'.

## Web Portal Search

Ares doesn't come with a search feature for the web portal, but you can set one up easily using [Google Custom  Search Engine](https://cse.google.com/cse/all).  Just log in with your Google account and add your site, and it will give you the HTML code.  Paste this into the 'search code' box on the admin configuration screen.

## Markdown

Many of the web portal pages allow players to enter [Markdown](https://daringfireball.net/projects/markdown/syntax).  By default, Ares allows HTML in its Markdown text.  This gives players a great deal of flexibility for embedding images, youtube videos, or custom styles.  However, it *could* be used to run malicious or annoying javascript code.  If you're worried about this, you can tell Ares to run Markdown in safe mode by disabling HTML.

## File Uploads

You can configure the maximum file upload size.  By default it is 5000 kB (5 MB).

## CSS Style

The custom stylesheet for the game web portal is located in `game/plugins/website/web/public/custom_style.css`.   You can customize your website style there.

It's also worth noting that the AresMUSH web portal uses the [Bootstrap](http://getbootstrap.com/) website layout system, so all standard Boostrap styles are available.   It also includes [FontAwesome](http://fontawesome.io/icons/) icons and [JQuery UI](https://jqueryui.com/) styles.

## Home Page

You can configure the tag line and welcome text on the Web Portal's home page.

## Images

There are three main images used by the website.  They are stored in the `game/plugins/website/web/public` directory, but you can upload new versions on the website admin page.

* background.png - Used as a background image across the page title area.
* box-bg.png - Used as a background behind the character and log pages.
* jumbotron.png - Home page image.

## Configuring Recaptca

The game website uses Google's [Recaptcha](https://www.google.com/recaptcha/intro/) to keep bots from creating accounts.  Sign up for your own key by clicking "Get Recaptcha" from that website.

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

## Server Configuration

The website's server configuration (how it talks to your game) should be updated automatically whenever you change the game config.  However, it can still be useful to understand how it works.

In the `game/plugins/website/web/public` directory is a file named `config.js`.  This javascript file contains the configuration information that the web client uses to talk to your game.

    var config = {
        port: '4202',
        mu_name: 'AresMUSH',
        host: 'localhost'
    }

The port name and host must match the websocket_port and hostname from your server configuration.   The MUSH name should match the MU name from your game configuration.