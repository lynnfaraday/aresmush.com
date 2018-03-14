---
toc: ~config~ Configuring FS3 Combat
title: Configuring FS3 combat damage.
---
# Configuring FS3 Combat - Hit Locations

To configure the FS3 hit location tables:

1. Select Admin -> Setup.
2. Edit `fs3combat_hitloc.yml`

## Before You Start

FS3 uses a somewhat unique hit location system.  See **[How Hit Location Works](http://aresmush.com/fs3/fs3-3/combat-mechanics#hit-location)** for more info on how it works.

## Hit Location Types

FS3 lets you define different hit location tables for different combatant types.  Usually you'll have one for humanoids and one for each distinct kind of vehicle, but you can do more than that.  Maybe your game needs one for "alien quadraped" or "horse" too.

Each hit location type has several properties, described below.

### areas

The 'areas' configuration lists all possible hit locations on the target.  The **first location** is considered the default hit location, assuming the person is aiming at the target's "center of mass". This would be the chest on a human or the body of an aircraft, for example.

When you aim at a location, there's a chance you might hit somewhere nearby.  Each hit location has a list of nearby locations.  For example:

    Humanoid:
        areas:
            Chest: [ 'Left Leg', 'Right Leg',  'Left Arm', 'Right Arm', 'Abdomen', 'Abdomen', 'Head', 'Chest', 'Chest', 'Chest' ]
            Left Leg: [ 'Chest', 'Right Foot', 'Right Leg', 'Right Leg', 'Abdomen', 'Abdomen', 'Left Foot', 'Left Leg', 'Left Leg', 'Left Leg' ]

Each location should have **ten** entries.  Generally, **three** of those entries (the ones at the end of the list) should be the place you were aiming for.  The other seven should be nearby areas.

The more times you list an entry, the more likely it'll come up.  Each entry is a 10% chance.  In the chest example above, the chances of hitting each area are:

    Left Leg: 10%, Right Leg: 10%, Left Arm: 10%, Right Arm: 10%, Abdomen: 20%, Head: 10%, Chest: 30%

Hit location is shifted to the right based on the success of the to-hit roll, so entries closest to the desired hit location should be at the **end** of the list.  Notice that the Chest hit location table begins further away (the legs) and then gets closer until finally reaching the chest.

> <i class="fa fa-info-circle"></i> **Tip:** If an area is not listed in the first hit location area (Chest for humans), then it won't be hit unless someone does a called shot.  For example, you'll never hit the foot or neck while aiming for the chest, but you can aim for those locations on purpose.  You may also hit them if you do a called shot nearby and roll poorly (e.g. hitting the foot while aiming for the leg).

### vital_areas and critical_areas

For each hit location type, you can list "Vital" and "Critical" areas.  All other areas not listed are considered "Non-Vital".  

Vital areas have no damage modifier.  Critical areas have +30% and Non-Vital areas have a -10%.

    Humanoid:
        vital_areas:
            - Chest
            - Abdomen
        critical_areas:
            - Head
            - Neck

###  crew_areas

For a vehicle, you need to specify which hit locations have crew/passengers in them.  A hit to this location has a chance of injuring the people inside.

    Transport:
        crew_areas:
            - Cockpit