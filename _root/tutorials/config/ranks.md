---
toc: ~config~ Configuring the Plugins
title: Configuring the ranks system.
---
# Configuring the Ranks System

To configure the Ranks plugin:

1. Select Admin -> Setup.
2. Edit `ranks.yml`

## rank_group

The ranks system is designed so that one group setting controls what ranks are available to you.  The default configuration bases ranks on Faction, so each faction will have a different rank system.

## ranks

You list the ranks for each group in order of seniority (least senior to most senior), along with a true/false indicator of whether that rank is available in chargen or not.  Restricted ranks must be set by admins or people with the manage_rank permission.

There are types within a group - typically this would be for Officer/Enlisted ranks or Patrol/Detective or something like that.  Types are used for display within the ranks list.  Even if you only have one rank type per faction, you still need a subsection.  Just make it "All".

> <i class="fa fa-info-circle"></i> **Tip:** If you aren't using Officer/Enlisted as your types, you'll also need to switch the ranks template as explained in the next section.

    Navy:
        Officer:
            Ensign: true
            Lieutenant JG: true
            ...
            Admiral: false
            
        Enlisted:
            Crewman Recruit: true
            Crewman Apprentice: true
            ...
            Chief Petty Officer: false

## Ranks Template

The default template for the ranks display (`military_ranks.erb`) shows a side-by-side listing of Officer and Enlisted ranks, suitable for a military game.

If your game is different, there's also a more generic ranks template (`ranks.erb`).  To use this one, modify the `ranks_template.rb` file's initialize method.  You'll see code like this:

    # There are two built-in rank templates - a generic one and one that shows 
    # officer/enlisted ranks side by side
    super File.dirname(__FILE__) + "/military_ranks.erb"
    #super File.dirname(__FILE__) + "/ranks.erb"

Just un-comment the template you want to use, and comment out the other, then reload the ranks plugin.