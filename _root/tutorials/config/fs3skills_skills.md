---
toc: ~config~ Configuring FS3 Skills
title: Configuring FS3 skills list.
---
# Configuring FS3 - Skills List

To configure the FS3 Skills List:

1. Select Admin -> Setup.
2. Edit `fs3skills_action.yml`, `fs3skills_attrs.yml`, `fs3skills_bg.yml` and `fs3skills_langs.yml`.

## Before You Start

You should read the article [Tweaking FS3](http://aresmush.com/fs3/fs3-3/tweaking-fs3/), which contains important information to help guide you in customizing your game.

## Attributes

You can configure the list of Attributes, specifying a name and description for each.

    - name: Reflexes
      desc: 'Reflexes, dexterity, and hand-eye coordination.'
    - name: Brawn
      desc: Physical strength and toughness.

### default_linked_attr

This is the Attribute used by default when someone rolls a Background or Language skill and doesn't specify an Attribute.  For example, if you set this to 'Wits' then someone rolling Basketweaving will really be rolling 'Basketweaving+Wits'.

> <i class="fa fa-exclamation-triangle"></i> **Note:** This only applies to Background and Language Skills.  Action Skills all specifiy their own linked Attribute.

## Action Skills

You can configure the list of Action Skills, specifying a name, description and linked Attribute for each.

    - name: Alertness
      desc: Noticing things and being aware of your surroundings.
      linked_attr: Perception
    - name: Athletics
      desc: General running, jumping, climbing, etc.
      linked_attr: Brawn

You may optionally specify a list of specialties for a skill.

    - name: Medicine
      desc: Tending to the ill and injured.
      linked_attr: Wits
      specialties:
      - Doctor
      - Surgeon

## Languages

You can configure the list of Langauges, specifying a name and description for each.

    - name: Standard
      desc: Spoken across the colonies.
    - name: Gemenese
      desc: Dead language known by academics and religious scholars.

### Starting Languages

You can specify the languages that everyone should start the game Fluent at.  List one language per line, with dashes in front.  For example:

    - Standard

> <i class="fa fa-info-circle"></i> **Tip:** Make sure you allocate enough free language points in chargen to cover rating 3 (Fluent) in each starting language, otherwise the languages will count towards a character's Ability Point total.

## Removing an Ability

If you remove an Action Skill, Attribute or Language from the game configuration while people have that ability, you'll get errors or weird results.

    Error: "Error in skills configuration -- action skill Archery not found."

If your game is still in development and you've just got characters in chargen, having them do a 'reset' to wipe their abilities will fix this.

Otherwise, **before** removing an ability from the game configuration, you must first run a [Tinker snippet](/tutorials/code/tinker) to remove that ability everyone's character sheet.  You can also do special handling, like refunding them some XP or transferring it to a background skill or something.  

For example, if we wanted to remove the Archery action skill, we would modify the tinker command to do:

      def handle
        FS3ActionSkill.all.each do |a|
           if (a.name == 'Archery')
             client.emit "Deleting Archery from #{a.character.name} -- was at rating #{a.rating}."
             a.delete
           end
        end
      end

After you have successfully removed the ability from everyone's sheet, *then* it is safe to remove the ability from the config file.