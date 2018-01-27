---
toc: ~config~ Configuring FS3 Combat
title: Configuring FS3 Combat skills.
---
# Configuring FS3 Combat - Skills

To configure the FS3 Combat Skills:

1. Go to the Web Portal's Admin screen.
2. Select 'FS3 Combat'.

The combat rules require you to determine which abilities are used for the following rolls:

- `composure_skill` (default = Composure) - Used for knockout rolls and stress resistance.
- `recovery_skill` (default = Brawn) - Used to determine if someone gets a bonus healing point during the daily healing roll.
- `treat_skill` (default = Medicine) - Used for the treat commands to provide immediate assistance to injuries.
- `healing_skill` (default = Medicine) - Used to determine how many patients a doctor can heal at once, and whether those people get a bonus healing point during the daily healing roll.
- `initiative_skill` (default = Alertness) - Used to determine who goes first in a combat turn.
- `default_defense_skill` (default = Reflexes) - Used for defense rolls outside of melee and vehicle combat.  Melee combat uses the defender's melee weapon skill, and vehicle combat uses their piloting skill.  You can override this for a specific combatant type.  See [Combatant Types Config](/tutorials/config/fs3combat_misc).
- `strength_skill` (default = Brawn) - Used for augmenting melee weapon damage.

> **Tip:** Although they're named "skills", you can use attributes instead.  Most of them are skill-based, but things like strength and recovery don't really have any _skill_ involved so they use raw attributes.

