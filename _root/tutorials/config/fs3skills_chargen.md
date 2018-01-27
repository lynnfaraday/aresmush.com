---
toc: ~config~ Configuring FS3 Skills
title: Configuring FS3 chargen.
---
# Configuring FS3 - Chargen

To configure the FS3 Chargen Limits:

1. Go to the Web Portal's Admin screen.
2. Select 'Advanced Configuration'.
3. Edit `fs3skills_chargen.yml`

## Before You Start

You should read the article [Tweaking FS3](http://aresmush.com/fs3/fs3-3/tweaking-fs3/), which contains important information to help guide you in customizing your game.

## free_languages and free_backgrounds

The first few points in Language and Background Skills are free, meaning they do not count toward a character's Ability Point total.  

* **free_languages**: Free points in Language Skills.  Make sure you assign 3 (Fluent) for each of the starting languages you set up in the skill list.
* **free_backgrounds**: Free points in Background Skills.

## min_backgrounds

You can require how many Background Skills (distinct skills, not points) a character must start with.

## max_skill_rating and max_attr_rating

FS3 Attributes are rated from 1-5 (with 5 being Exceptional) and Skills are rated from 1-8 (with 8 being Legendary).  Some games may not want to allow characters at the top end of the spectrum by setting these values lower than the maximum possible ratings.

## Guiding Maximums

You can configure various guidelines about what skills and attributes a character can have. 

> **Note:** These are soft limits.  The system will let someone go over them, but a warning will appear in their app command status.  You can choose whether to allow a special exception when approving the character.

### max_ap

This is the maximum Ability Points a character can spend.  Free skills and attributes don't count toward this total.

### max_attributes

This is the maximum number of points a character can spend on attributes.  Ratings 1-2 are not counted towards the total, so this is effectively the number of points *above average* a character can be.

### max_skills_at_or_above and max_attrs_at_or_above

You can set break points for attributes and skills to limit how many a character can have at or above a given level. 

    max_skills_at_or_above:
        6: 2
        7: 1
    
    max_attrs_at_or_above: 
        4: 2
        5: 1

Remember that these limits are at *or above*.  So given the max skills example above:

    1 at 6, 1 at 7 --> OK
    2 at 6 --> OK
    2 at 7 --> *NOT* OK  (even though you can have 2 above 6, only 1 of them may be at or above 7)
    2 at 6, 1 at 7 --> *NOT* OK (you can only have 2 skills total at or above 6)

## starting_skills

FS3 lets you assign starting skills and specialties for different groups.  For example, you may want to ensure that people from a certain colony all start with a particular language, or that people in a certain position start with certain professional skills.

> **Note:** As with the rating limits, these are soft targets.  The app command status will have a warning if any starting skills are missing or too low.

### Group Skills

Starting skills are group-based, so you'll see multiple entries for different groups in the list.  You can list skills and also specialties.  Here is an example:

    starting_skills:
        Faction:
            Navy:
                skills:
                    Swimming: 2
            Marines:
                skills:
                    Melee: 2
        Position:
            Pilot:
                skills:
                    Piloting: 3
                specialties:
                    Piloting:
                        - Viper
                        - Raptor
            Rifleman:
                skills:
                    Firearms: 3
                    Melee: 3

A Navy Pilot would start with Swimming: 2 and Piloting: 3, whereas a Marine Pilot would start with Melee: 2 and Piloting: 3.  The system will take the highest rating out of all applicable groups, so a Marine Rifleman would start with Melee: 3 and Firearms: 3.

### Skill Notes

Sometimes you may want to prompt the player with a note about their skills.  You can do this with the optional 'notes' field.  For example, the following configuration will give a Combat Engineer Demolitions: 2 and prompt them to either raise it to 3 or add Technician at 3.

            Combat Engineer:
                notes: "A combat engineer should also take a 3 or higher in either Demo or Tech."
                skills:
                    Demolitions: 2
                    Firearms: 3

### Everyone Skills

Sometimes you may want to give a skill to everybody.  Instead of duplicating the information in each group, you can use the special "Everyone" group.   For example, to make everyone start with Alertness 2:

        Everyone:
            skills:
                Alertness: 2

## unusual_skills

You can mark certain skills as unusual in your setting.  Characters with those skills above Fair will receive a warning prompting them to have a good reason.