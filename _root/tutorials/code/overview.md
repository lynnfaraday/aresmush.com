---
title: Coding Overview
description:
layout: page
tags: 
- code
---

The Ares coding experience is different from what you might be familiar with from other MUSH servers.  There is no softcode.  You can't alter the code just by slinging some `&CMD-+WHERE #123=$+where:think pemit(%#,switch(...))` text into your MUSH client.  The game code lives on the server.  Unlike old MUSH hardcode, though, it can be changed while the game is running. 

## What Ares Code is Like

The Ares game server code is written in Ruby.  Ruby is a mainstream language, so you'll find tons of tutorials, reference guides and community support sites.  It's far easier to find someone with Ruby experience than to find someone who knows MUSH softcode.

Many people find Ares code more readable and easier to learn than softcode.   Here is the code for the `cookie` command, which gives a cookie to a list of names.


  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Show Ares code sample.
  </button>

<div class="collapse" id="collapseExample">
  <div class="card card-block">
      <pre>
class CookieCmd
  # Include basic command handling functionality
  include CommandHandler
  
  # Parse the command arguments and store them into the 'names' variable.
  attr_accessor :names
  def parse_args

    # If they left off the list of players, default to an empty list.
    if (!cmd.args)
      self.names = []

    # Otherwise separate the names into a list.
    else
      self.names = cmd.args.split(" ")
    end
  end

  # Exceute the command.
  def handle
  
    # Loop through each name in the list
    self.names.each do |name|

      # Look up the name to find its corresponding character object.
      result = ClassTargetFinder.find(name, Character, enactor)
  
      # If the name wasn't found, emit an error.
      if (!result.found?)
        client.emit_failure(t('cookies.invalid_recipient', :name => name))
        return
      end
  
      # Make sure the name wasn't your own.
      if (recipient == giver)
        client.emit_failure t('cookies.cant_cookie_yourself')
        return
      end
    
      # See if there's already a cookie award this week.
      cookies_from_giver = recipient.cookies_received.select { |c| c.giver == giver }
      if (!cookies_from_giver.empty?)
        client.emit_failure t('cookies.cookie_already_given', :name => recipient.name)
        return
      end
    
      # Create the cookie award database entry.
      CookieAward.create(giver: giver, recipient: recipient)
    
      # Tell the giver that the cookie has been given
      client.emit_success t('cookies.cookie_given', :name => recipient.name)
  
      # If the other character is logged in, tell them that they got a cookie.
      Global.client_monitor.emit_ooc_if_logged_in(recipient,  t('cookies.cookie_received', :name => giver.name))
    
      # Log the award to the game log file for tracking purposes.
      Global.logger.info "#{giver.name} gave #{recipient.name} a cookie."
    end
  end
end
    </pre>
  </div>
</div>

> <i class="fa fa-info-circle"></i> **Tip:** The Web Portal code is written in Javascript, not Ruby, but it's designed to be generic and configurable.   Most games won't need to change the Web Portal.

## Changing the Code

You can run quick one-off tasks straight from your MU client through [Tinkering](/tutorials/code/tinker), but anything more advanced will require you to change the code server-side and then reload it.  You can change and reload code while the game is running, so it's not like MUSH hardcode.  The main difference is in how you physically edit the code.