---
title: Using Log Files
description: 
layout: page
tags:
- logs
- troubleshooting
---

Ares has an internal logging system (log4r) to help diagnose code issues.  The log includes error messages, important game events, and every command executed on the game *except* those omitted for player privacy (pages, poses, channel chat, and passwords).

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Logging in Code

Throughout the code, you'll see statements like:

    Global.logger.debug "Loading config from #{file}."

This writes a statement to the log file.  You can use string interpolation (e.g. `#{file}` to pass variables into the log statements.)

## Log Files

Ares by default will maintain up to ten log files, switching when each one gets too big.  The log files are numbered sequentially (log1.txt, log2.txt, etc.)   Log files are stored on the server in the `aresmush/game/logs` folder.

## Reading Log Files

The easiest way to browse log files is from the Web Portal.  Go to Admin -> Logs.  The newest log file will be at the top of the list.  Log entries are timestamped.  The Web Portal will show log entries in reverse chronological order, so the newest ones are listed first.

    2018-02-20 13:08:44 DEBUG - AresMUSH::Who::WhereCmd: ID=229 Enactor=Faraday Cmd=+where 
    2018-02-20 13:08:25 DEBUG - Emptying trash for John. 
    2018-02-20 13:08:25 INFO - Character Disconnected: John 

## Log Levels

There are four different levels of logging statements:  

* **Error** - Unexpected code errors.  `Global.logger.error("Something bad happened.")`
* **Warning** - Unusual issues that did not cause a big problem, but might indicate an unexpected condition.  `Global.logger.warn("Attempted to post to a forum that doesn't exist.")`
* **Info** - Important informational messages that help you keep track of what's happening in the game. `Global.logger.info("Client connected from #{ip_address}.")`
* **Debug** - Nitty-gritty details that are helpful for troubleshooting but not necessariy of general interest.  `Global.logger.debug "Reading help file #{topic_key}"`

## Debugging With Stack Traces

Errors include a backtrace, which helps you identify the line of code where the error occurred, as well as the function calls preceding it.  For example:

    2018-02-20 04:21:39 ERROR - Error in Web Request: client= error=private method `select' called for nil:NilClass backtrace=[
    "/home/ares/aresmush/plugins/arescentral/web/get_players_handler.rb:13:in `block in handle'", 
    "/home/ares/.rvm/gems/ruby-2.4.1/gems/ohm-3.0.3/lib/ohm.rb:123:in `block (2 levels) in each'", 
    "/home/ares/aresmush/plugins/arescentral/web/get_players_handler.rb:11:in `handle'", 
    "/home/ares/aresmush/engine/aresmush/commands/dispatcher.rb:125:in `block (2 levels) in on_web_request'", 
    "/home/ares/aresmush/engine/aresmush/commands/dispatcher.rb:119:in `each'"]

The root problem is that we tried to call `select` on a nil class.  This happened on `plugins/arescentral/web/get_players_handler.rb` line 13.  We see some of the events leading up to it, starting with the dispatcher's `on_web_request` and then going into the `handle` method of the 'get players' handler.

## Changing the Log Level

By default, the Ares log file will include all four levels of log messages.  If your game is stable and you find the logs too spammy, you can change the minimum log level from DEBUG to INFO (or even to WARN or ERROR though that's not advisable).

Edit `logger.yml`: 

      loggers:
        - name      : ares
          level     : DEBUG