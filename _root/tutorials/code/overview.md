---
title: Coding Overview
description:
layout: page
tags: 
- code
---

The Ares coding experience is different from what you might be familiar with from other MUSH servers.  There is no softcode.  You can't alter the code just by slinging some `&CMD-+WHERE #123=$+where:think pemit(%#,switch(...))` text into your MUSH client.  The game code lives on the server, like MUSH hardcode.  Unlike hardcode, though, it can be changed while the game is running. 


## What Ares Code is Like

The Ares game server code is written in Ruby.  The Ares web portal front-end is written in Ember.JS javascript.  These are mainstream languages, so you'll find tons of tutorials, reference guides and community support sites.  It's far easier to find someone with Ruby or Javascript experience than to find someone who knows MUSH softcode.

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
    if (!cmd.args)
      self.names = []
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

 
## Changing the Code

The [Tinker](/tutorials/code/tinker) command is an easy way to do quick, one-off code tasks.  But for anything more involved, you'll need to change the code on the server side.   There are three main ways to edit the code, in order from least-recommended/complex to most-recommended/complex.

* Live Edit
* FTP Upload
* Local Test Game

### Live Edit

Editing directly in the server shell is the simplest option. 

1. [Connect to the server shell](/tutorials/manage/server-shell).
2. Run a code editor command (e.g. `emacs aresmush/plugins/cookies/commands/cookie_cmd.rb`).
3. Edit and save the file.
4. Reload the plugin in-game (more on this in a moment).

There are down-sides to this though.  The server shell editors like Emacs are pretty bare-bones.  If you mess something up, the players in the game are immediately affected.  Template and text file changes take effect as soon as they're saved, so players might catch code in an in-between state.  And it's harder to roll back if you have a problem.

These are the same pitfalls you'd find when editing old MUSH softcode live in the game, so those down-sides might be acceptable to some.  It's just not really thegreatest option.

### FTP Upload

A middle ground between the other two options is to change the code on your local PC, and then use a FTP client to upload the changes to the server.  The up-sides of this method:

* You can use a fancier code editor like , making your life easier.
* You don't upload until you're ready, so the players get all the changes at the right time.

The down-side is that you don't really know if the code *works* before you upload it.

### Local Test Game

The safest option - which is also the way pro programmers make their changes - is to set up a test game on your local PC.  You make your changes to the test game's code on your local PC and try them out.  You only upload to the game after you're sure that the new code works.

[Setting up Ares locally](/tutorials/code/local-setup) takes some work, but you can reap great benefits in convenience and overall code stability down the line.

## Reloading the Code

After you've made your changes, you need the game to recognize them.

If you've only changed **plugins**, you can reload each plugin while the game is still running by using the `load <plugin name>` command in-game. 

If all you've changed are **configuration files**, the `load config` command will read them.   The config is automatically reloaded when using the web portal config editor.

If you've changed the **web portal**, you'll need to re-deploy it through the Admin -> Manage menu on the web portal or the `website/deploy` command in-game. 

If you've changed the **engine**, you'll need to actually [shutdown and restart](/tutorials/manage/shutdown) the game before the changes will take effect.   You probably shouldn't be changing the engine, though.

For more information about how the code reloading works, and some potential pitfalls, see [Reloading Code](/tutorials/code/reload).