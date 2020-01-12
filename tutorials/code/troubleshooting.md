---
title: Troubleshooting Issues
description: 
layout: page
tags:
- code
- troubleshooting
---

Sometimes things go wrong, and you'll get the "Sorry! The code lost its mind while executing a command..." message or the Sad Picard screen on the web portal.  This article will help you diagnose the problem.

If the information below doesn't help you, you can always ask for help on the [Ares Forums](/feedback.html).

{% include toc.html %}

## Log Files

The first place to check is the game log.  Most errors will add an entry in the log file telling exactly what the problem is.  You have several options for checking the log:

* Go to Admin -> Logs on the web portal.  The highest-numbered log will be the most recent, but you may want to look at the one prior as well.
* In the server shell, look in the `aresmush/game/logs` directory.  You can use a unix terminal text editor like nano to open them, or FTP them to your PC.
* In the MU client, the `debuglog` command will show you only the most recent log entries.

Once you have the log file open, search for `ERROR`.  You'll see some code stuff that may look like gibberish:

    2018-02-20 04:21:39 ERROR - Error in Web Request: client= error=private method `select' called for nil:NilClass backtrace=[
    "/home/ares/aresmush/plugins/arescentral/web/get_players_handler.rb:13:in `block in handle'", 
    "/home/ares/.rvm/gems/ruby-2.4.1/gems/ohm-3.0.3/lib/ohm.rb:123:in `block (2 levels) in each'", 
    "/home/ares/aresmush/plugins/arescentral/web/get_players_handler.rb:11:in `handle'", 
    "/home/ares/aresmush/engine/aresmush/commands/dispatcher.rb:125:in `block (2 levels) in on_web_request'", 
    "/home/ares/aresmush/engine/aresmush/commands/dispatcher.rb:119:in `each'"]

## Common Issues

### YAML Issues

The configuration files use YAML, and there are several common issues that can result from trouble with your game configuration.  Often you'll see an error message like "Error reading YAML from fs3combat.yml...", but any error that happens right after you changed your game configuration should make you suspect a YAML problem.  See [Troubleshooting YAML](/tutorials/code/troubleshooting-yaml.html) for more details.

### Port In Use

Sometimes you'll see an error in the logs like "Couldn't start the game: error=no acceptor (port is in use or requires root privileges)".  This usually means:

1. Your game is already started.  Maybe it auto-started after a reboot and you're unnecessarily trying to start it again.
2. Some other application is using the port you want to use.  This is unlikely if you're using a high port number (>1024).
3. You have a collision in your Ares port configuration. Remember that Ares needs multiple ports, and they all have to be different.  You can't use the same port number for both your telnet server and engine API, for instance.

### Server Won't Start

Sometimes you'll get a 'connection refused' error in your MU client or a 'This site can't be reached' error in your web browser.  When this happens, there are a few things to check:

* Make sure your hostname is correct and your DNS is set up.  Ares can't start if the hostname is inaccessible
* Try starting the game in debug mode using `bin/devstart` instead of startares.  This will run until you hit CTRL-C, and you will see log messages live on your screen.
* Try changing your hostname (in server.yml) to 'localhost' or the machine's IP address to rule out DNS issues.
* If you have a firewall running, make sure that all four Ares server ports are allowed through the firewall.  (Not just the port you connect to with a MUSH client, but the back-end ports for web portal communication as well.)

### Database Issues

If your game can't connect to the database you'll see an error like:  "Error connecting to database. Check your database configuration."   Here are a few things to try:

* Check your database config file (database.yml) and make sure you have the correct URL and password.  You can compare these values to the 'port', 'bind' and 'requirepass' parameters in your redis configuration file.   In the standard install, this file is located at `/etc/redis/redis.conf`.
* Make sure your database service is running.  You can use the server shell command `service redis-server status`.

### Multiple Copies of the Game

Having multiple copies of the game running on different ports with the same database can cause some *really* wacky effects.  This is not a normal configuration, but some people do it accidentally or intentionally while testing.  If you're getting weird errors and think you may have done this, check to see if you've got multiple copies of the game running.  Use `ps -aux | grep ares` on the server shell and look for multiple entries with 'startares' or 'devstart'.  For example:

    ares     27590  0.0  5.5 1373916 113564 ?      Sl   Jan14   2:12 /home/ares/.rvm/rubies/ruby-2.5.1/bin/rake startares[]

### Web Portal Unavailable

If you get a 'page not found' error for your web portal, here are some things to check:

* Make sure that your web server is running.  You can use the server shell command `service nginx status`.
* Make sure that the website code successfully deployed to `/var/www/html`.  You should see index.html and other files there.
* Make sure your web server has a site configured to use that directory and the web portal port in `server.yml`.  In nginx, this site configuration should be in `/etc/nginx/sites-available/deault`.

### Web Portal Can't Connect to the Game

Sometimes you'll get a Sad Picard message saying the web portal can't connect to the game.  

* Try a [force-refresh](https://en.wikipedia.org/wiki/Wikipedia:Bypass_your_cache) in your web browser.  
* Make sure the game is actually running and you can connect to it with a MU client.
* Make sure there's a symbolic link from your web portal directory to your game directory.  If you do `ls -l` in your `/var/www/html` directory, you should see an entry like this: 

        ares ares   24 Apr  2 01:01 game -> /home/ares/aresmush/game

### Web Portal Sad Picard

Most of the time, problems on the web portal are actually problems in the web request on the game side.  You'll see those errors in the game log and troubleshoot them in the same way you would any other game error.   Occasionally, though, the problem will be in the web portal Javascript code.  

* Try a [force-refresh](https://en.wikipedia.org/wiki/Wikipedia:Bypass_your_cache) in your web browser.  
* Troubleshoot using the web browser's debugging tools.  In Chrome, for instance, you can open `View -> Developer -> Developer Tools` to see the Javascript console, which will tell you the error.

### Web Sockets Not Working

If you get a warning saying "The website is not receiving live updates from the game", it means that the websocket connection allowing real-time updates between the web page and the game isn't working.  Regular page requests will be fine, but 'live' updates like scene poses or alerts about new mail messages won't come through.

* Try a [force-refresh](https://en.wikipedia.org/wiki/Wikipedia:Bypass_your_cache) in your web browser.
* Try shutting down and restarting the game engine.
* Troubleshoot using the web browser's debugging tools.  In Chrome, for instance, you can open `View -> Developer -> Developer Tools` to see the Javascript console, which will tell you the error.
* Check for a certificate error, explained in the next section.

### Certificate Expired

If you are using HTTPS for your web portal, a common reason for getting "The website is not receiving live updates from the game" is that your security certificate has expired.  If this happens, you will see a `ERR_CERT_DATE_INVALID` in the browser developer tools.

Shutting down and restarting the game engine usually fixes this.  If not, just go to the aresmush directory and re-run `bin/certs <your domain name>`.
  
### Web Portal Stuck on Old Version

Sometimes you'll do an upgrade and you'll see mismatched versions between the game and the web portal (on the bottom of all portal pages):

    AresMUSH game v0.70, portal v0.69

This indicates that something went wrong on your web portal upgrade.  The web portal and game engine always have to have the same version.  If they don't, you will get unpredictable errors.

Here's what you can do:

1. Try a force-refresh in your browser, and/or open the web portal in a private/incognito browser window.  This will rule out any javascript cache issues.
2. Try to re-deploy the website using the `website/deploy` command in-game or by running `bin/deploy` from the ares-webportal directory on the server shell.   Make sure there were no weird errors on the deploy.
3. If your own private code fork, make sure you updated the webportal code too.  Sometimes folks forget and only update the game engine code.

A successful website deploy will end with a list of files, like this:

```
Built project successfully. Stored in "dist/".
File sizes:
 - dist/assets/ares-webportal-5d9f5985e1460779a552cf47f222971d.css: 143.77 KB (23.25 KB gzipped)
 - dist/assets/ares-webportal-7d7c53430414e59c856937e57e284827.js: 894.15 KB (98.25 KB gzipped)
etc.
```

### Key Not Found Error on Approval or Roster Claim

You may see the approval welcome message or roster claim message not appearing, and a key error in the log:

    error=key{position} not found
    error=key{faction} not found

This means your welcome messages are configured to use a group that doesn't exist.  Probably you changed your groups from the default (position/faction) and just need to update the messages in [idle config](https://aresmush.com/tutorials/config/idle.html#roster_welcome_msg) and [chargen config](https://aresmush.com/tutorials/config/chargen.html#messages).  
  
## Web Portal Warnings

When you deploy the web portal, you may see any or all of the following warnings that you can safely ignore.

### fsevents

```
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
```

fsevents is an optional dependency for one of the javascript libraries we use.  Its absence doesn't affect anything.

### Watchman

```
Could not start watchman
```

Watchman is an optional tool for local debugging; it doesn't apply to your server.

### Node Version Untested

```
WARNING: Node v11.0.0 is not tested against Ember CLI on your platform. We recommend that you use the most-recent "Active LTS" version of Node.js. See https://git.io/v7S5n for details.
```

If you're using 11.0, it's been extensively tested for Ares and works just fine.  If you've got some other weird version of node you might want to use 12.x, which is the LTS version.

### NPM Audit

```
audited 218632 packages in 30.459s
found 69 vulnerabilities (11 low, 26 moderate, 32 high)
  run `npm audit fix` to fix them, or `npm audit` for details
```

The NPM audit warnings come from off-the-shelf javascript libraries.  They either apply to features that Ares doesn't use, or are obscure enough edge cases that we're not going to worry about it.  (Seriously - MUSH clients use open unsecured telnet to connect; someone hacking some wacky javascript vulnerability is the least of your security issues.)

## Debug Mode

For tricky issues - especially during development - it can be helpful to run the game in [Debug Mode](/tutorials/code/debug-mode.html).