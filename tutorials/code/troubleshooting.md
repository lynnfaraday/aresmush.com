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

The first place to check is the game log.  This will help you pinpoint the exact file and line number where the code failed.  See [Using Log Files](/tutorials/code/logs.html) for help.

## Debug Mode

For tricky issues - especially during development - it can be helpful to run the game in [Debug Mode](/tutorials/code/debug-mode.html).

## YAML Issues

The configuration files use YAML, and there are several common issues that can result from trouble with your game configuration.  Often you'll see an error message like "Error reading YAML from fs3combat.yml...", but any error that happens right after you changed your game configuration should make you suspect a YAML problem.  See [Troubleshooting YAML](/tutorials/code/troubleshooting-yaml.html) for more details.

## Port In Use

Sometimes you'll see an error in the logs like "Couldn't start the game: error=no acceptor (port is in use or requires root privileges)".  This usually means:

1. Your game is already started.  Maybe it auto-started after a reboot and you're unnecessarily trying to start it again.
2. Some other application is using the port you want to use.  This is unlikely if you're using a high port number (>1024).
3. You have a collision in your Ares port configuration. Remember that Ares needs multiple ports, and they all have to be different.  You can't use the same port number for both your telnet server and engine API, for instance.

## Server Won't Start

Sometimes you'll get a 'connection refused' error in your MU client or a 'This site can't be reached' error in your web browser.  When this happens, there are a few things to check:

* Make sure your hostname is correct and your DNS is set up.  Ares can't start if the hostname is inaccessible
* Try starting the game in debug mode using `bin/devstart` instead of startares.  This will run until you hit CTRL-C, and you will see log messages live on your screen.
* Try changing your hostname (in server.yml) to 'localhost' or the machine's IP address to rule out DNS issues.
* If you have a firewall running, make sure that all four Ares server ports are allowed through the firewall.  (Not just the port you connect to with a MUSH client, but the back-end ports for web portal communication as well.)

## Database Issues

If your game can't connect to the database you'll see an error like:  "Error connecting to database. Check your database configuration."   Here are a few things to try:

* Check your database config file (database.yml) and make sure you have the correct URL and password.  You can compare these values to the 'port', 'bind' and 'requirepass' parameters in your redis configuration file.   In the standard install, this file is located at `/etc/redis/redis.conf`.
* Make sure your database service is running.  You can use the server shell command `service redis-server status`.

## Multiple Copies of the Game

Having multiple copies of the game running on different ports with the same database can cause some *really* wacky effects.  This is not a normal configuration, but some people do it accidentally or intentionally while testing.  If you're getting weird errors and think you may have done this, check to see if you've got multiple copies of the game running.  Use `ps -aux | grep ares` on the server shell and look for multiple entries with 'startares' or 'devstart'.  For example:

    ares     27590  0.0  5.5 1373916 113564 ?      Sl   Jan14   2:12 /home/ares/.rvm/rubies/ruby-2.5.1/bin/rake startares[]

## Web Portal Unavailable

If you get a 'page not found' error for your web portal, here are some things to check:

* Make sure that your web server is running.  You can use the server shell command `service nginx status`.
* Make sure that the website code successfully deployed to `/var/www/html`.  You should see index.html and other files there.
* Make sure your web server has a site configured to use that directory and the web portal port in `server.yml`.  In nginx, this site configuration should be in `/etc/nginx/sites-available/deault`.

## Web Portal Can't Connect to the Game

Sometimes you'll get a Sad Picard message saying the web portal can't connect to the game.  

* Try a [force-refresh](https://en.wikipedia.org/wiki/Wikipedia:Bypass_your_cache) in your web browser.  
* Make sure the game is actually running and you can connect to it with a MU client.
* Make sure there's a symbolic link from your web portal directory to your game directory.  If you do `ls -l` in your `/var/www/html` directory, you should see an entry like this: 

    ares ares   24 Apr  2 01:01 game -> /home/ares/aresmush/game

## Web Portal Sad Picard

Most of the time, problems on the web portal are actually problems in the web request on the game side.  You'll see those errors in the game log and troubleshoot them in the same way you would any other game error.   Occasionally, though, the problem will be in the web portal Javascript code.  

* Try a [force-refresh](https://en.wikipedia.org/wiki/Wikipedia:Bypass_your_cache) in your web browser.  
* Troubleshoot using the web browser's debugging tools.  In Chrome, for instance, you can open `View -> Developer -> Developer Tools` to see the Javascript console, which will tell you the error.

## Web Sockets Not Working

If you get a warning saying "The website is not receiving live updates from the game", it means that the websocket connection allowing real-time updates between the web page and the game isn't working.  Regular page requests will be fine, but 'live' updates like scene poses or alerts about new mail messages won't come through.

* Try a [force-refresh](https://en.wikipedia.org/wiki/Wikipedia:Bypass_your_cache) in your web browser.  
* Troubleshoot using the web browser's debugging tools.  In Chrome, for instance, you can open `View -> Developer -> Developer Tools` to see the Javascript console, which will tell you the error.
