---
title: Coding Overview
description:
layout: page
tags: 
- code
---

The Ares coding experience is different from what you might be familiar with from other MUSH servers.  There is no softcode.  You can't alter the code just by slinging some `&CMD-+WHERE #123=$+where:think pemit(%#,switch(...))` text into your MUSH client.  The game code lives on the server.  Unlike old MUSH hardcode, though, it can be changed while the game is running. 

## What Ares Code is Like

The Ares game server code is written in Ruby.  Ruby is a mainstream language, so you'll find tons of tutorials, reference guides and community support sites.

You can run quick one-off tasks straight from your MU client, but anything more advanced will require you to change the code server-side and then reload it.  You can change and reload code while the game is running, so it's not like MUSH hardcode.

Many people find Ares code more readable and easier to learn than softcode.  The following example shows a snippet of code from the AFK command (`afk <message>`), comparing traditional MUSH softcode and Ares code.

> <i class="fa fa-info-circle"></i> **Tip:** Don't worry if you don't understand all of this right now.  This site has a number of tutorials that will walk you through Ares code step by step.  This is just a small piece to show you what it looks like.


  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseMUEx" aria-expanded="false" aria-controls="collapseExample">
    Show MUSH softcode sample.
  </button>

<div class="collapse" id="collapseMUEx">
  <div class="card card-block">

Normally MUSHcode would be all smushed together in one line, but let's assume we're using a code prettifier to break it apart:

      <pre>

    @@ Update the afk message and flag on the character executing the command (%#)
    
    [set(%#,afk_message: %0)]
    [set(%#,is_afk: 1)]
    
    @@ Save their last IC location so they can go back with the 'onstage' command later.

    [u(#493/fun_update_last_ic_location, %#)]
    
    @@ Tell the room they went AFK. 
    
    [remit(%l, %N has gone afk: %0.)]
    
    </pre>
  </div>
</div>

  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Show Ares code sample.
  </button>

<div class="collapse" id="collapseExample">
  <div class="card card-block">

Ares code is inherently done on multiple lines:

      <pre>
 
    # Store the command arguments into a variable

    self.message = cmd.args
    
    # Update the afk message and flag on the character executing the command (enactor)

    enactor.update(afk_message: self.message)
    enactor.update(is_afk: true)
    
    # Save their last IC location so they can go back with the 'onstage' command later.

    Status.update_last_ic_location(char)
    
    # Tell the room they went AFK.  
    
    enactor.room.emit_ooc "#{enactor.name} has gone AFK: #{self.message}."

    </pre>
  </div>
</div>

A lot of learning Ares code boils down to knowing what functions are available and how to call them.  That's what the basic Ares coding tutorials will teach you.

## Triggering Commands

The scaffolding around how commands get triggered is also different.  In MUSH Softcode, commands are placed on objects, which in turn are placed in rooms.  To make a command global, you put an object into the master room.  Commands are triggered by pattern matching:

    &CMD-Cookie Cookie Command Object=$+cookie *:(cookie code goes here)

In Ares, all commands are global unless you put code inside them restricting them to only work under certain conditions (like if the character is in a particular room or belongs to a particular faction).  Commands don't live on objects, but rather in Ruby classes.

    class CookieCmdHandler
       def handle
         (cookie code goes here)
       end
    end

There's a dispatcher for each plugin that sends the command to the appropriate class - typically based on the command's base name (aka root) and switch.

    module Cookies
      def get_cmd_handler(cmd, client)
        if (cmd.root_is?("cookie"))
          if (cmd.switch_is?("here"))
            return CookieHereCmdHandler
          else
            return CookieCmdHandler
        end
      end
    end
