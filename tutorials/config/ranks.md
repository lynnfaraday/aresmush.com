---
title: Configuring the Ranks System
layout: page
tags:
- config
---

To configure the Ranks plugin:

1. Select Admin -> Setup.
2. Edit `ranks.yml`

## rank_group

The ranks system is designed so that one group setting controls what ranks are available to you.  The default configuration bases ranks on Faction, so each faction will have a different rank system.

## ranks

You list the ranks for each group in order of seniority (least senior to most senior), along with a true/false indicator of whether that rank is available in chargen or not.  Restricted ranks must be set by admins or people with the manage_rank permission.

There are types within a group - typically this would be for Officer/Enlisted ranks or Patrol/Detective or something like that.  Types are used for display within the ranks list.  Even if you only have one rank type per faction, you still need a subsection.  Just make it "All".

{% tip %} 
If you aren't using Officer/Enlisted as your types, you'll also need to switch the ranks template as explained in the next section.
{% endtip %}

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

## rank_style

There are two display styles available for the faction ranks.

### military

The default style, 'military', shows a side-by-side listing of Officer and Enlisted ranks, suitable for a military game.

    Ranks for Navy
    
         Enlisted                           Officer
    1    Crewman Apprentice                 Ensign
    2    Crewman                            Lieutenant Jg

### basic

The basic style just shows the rank groups one after the other.  This is more useful when the ranks have no parallel structure and the groups are more distinct.

    Ranks for Navy
    
    Enlisted
    Crewman Apprentice
    Crewman
    
    Officer
    Ensign
    Lieutenant Jg