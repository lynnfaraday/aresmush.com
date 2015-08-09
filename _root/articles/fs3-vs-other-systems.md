In order to help people who may be familiar with other RPG systems, I have done a little comparison between some of the more popular systems and FS3 to show how the dice work.   This research was inspired by a [http://www.criticalmiss.com/issue8/bitaboutd201.html nice article comparing D20 and 3D6].

+ Background
The systems used in this article are D20, new World of Darkness (nWoD), FUDGE and FS3.  In my examples, I've used four people and the Firearms skill:

* **Nate the Newbie** - Nate has just started out and he's still got a lot to learn.  He's probably taken a basic firearms course or gone to the range a few times.
* **Pete the Professional** - Pete is a professional soldier who is thoroughly competent with his rifle.
* **Victor the Veteran** - Vic is a highly skilled marksman.
* **Maria the Master** - Maria is an amazing marksman, an elite sniper or a world-class Olympic shooting competitor.

I used the skill descriptions in each system to find comparable levels for each of these people.  They are outlined in the table below.


|| Person || D20 || nWoD || FUDGE || FS3.1 || FS3.2 ||
|| Nate the Newbie || skill 1 (dex 11) || firearms 1 + dex 2 || Mediocre -1 || Rookie - 1 (reactive 4) || Rookie - 1 (reactive 2) ||
|| Pete the Professional || skill 4 (dex 11) || firearms 3 + dex 2 || Good  +1  || Professional - 5 (reactive 4) || Professional - 5 (reactive 2) ||
|| Victor the Veteran || skill 8 (dex 11) || firearms 4 + dex 2 || Great +2  || Veteran - 8 (reactive 4) || Veteran - 8 (reactive 2) ||
|| Maria the Master || skill 13 (dex 11) || firearms 5 + dex 2 || Superb +3  || Expert - 11 (reactive 4) || Expert - 11 (reactive 2) ||

+  Skill Level Equivalents 

We'll get to the actual results in a minute, but I wanted to summarize before spamming everyone with percentages.

As it turns out, the skill descriptions don't really match up with the dice results across skill systems.  A so-called "professional" in D20 has a 50% chance of success at a routine task, but in World of Darkness that same "professional" has an 83% chance of success.

So.. if you go solely by **chance of success** rather than the textual skill descriptions, ratings in FS3 are roughly equivalent to the following skill ratings in other systems:


|| FS3 Skill Level || D20 Equivalent || nWoD Equivalent || FUDGE Equivalent ||
|| Rookie (1-3) || skill rating 4-7 (char level 1-3) || skill 1 + stat 2 (3 dice) || Good (+1) ||
|| Professional (4-6) || skill rating 8-12 (char level 5-9) || skill 3 + stat 2 (5 dice) || Great (+2) ||
|| Veteran (7-9) || skill rating 13+ (char level 10+) || skill 4 + stat 2 (6 dice) || Superb (+3) ||
|| Expert (10-12) || not calculated - higher than veteran obviously || skill 5 + stat 2 (7 dice) || Higher than Superb ||

+  Chance of Success  
The goal of this experiment was to show the chance of success for each of these people at different tasks.   To compute success chance, I wrote a dice simulator that would calculate the probability of success for each system at three task difficulties:

* **Easy** -  Target shooting on the firing range.
* **Routine** - Firing a gun in combat at close range.
* **Hard** - Shooting a target under adverse conditions - wind or long range.

Once again it was necessary to define these tasks consistently across the different skill systems.  I used their difficulty descriptions to figure out the numbers.  Here are the details:



|| Difficulty Level || D20 || nWoD || FUDGE || FS3.1 || FS3.2 ||
|| Easy || DC 10 || +1 dice pool || +2 to skill || +30 % modifier || +3 to skill ||
|| Routine || DC 15 || +0 dice pool || +0 to skill || +0 % modifier || +0 to skill ||
|| Hard || DC 20 || -2 dice pool || -2 to skill || -30 % modifier || -3 to skill ||

+  Observations  

Some random observations from the numbers:

* FS3 and nWoD are roughly comparable in success chance.  In other words, a 'professional' in FS3 is roughly equivalent to a 'professional' in WoD.
* In D20, even an expert has an unusually high (5%) chance of utterly botching an easy or routine task.
* D20 and FUDGE have rather awful success chances - especially for low level characters. Even a veteran in D20 only has a 70% chance of success at a routine task!
* Hard things in FUDGE are *really* hard.
* Hard things in D20 are *really* hard at low levels.

+  Success Results 

The exact success percentages are illustrated below.  Some of the nWoD numbers were taken from [http://wiki.white-wolf.com/worldofdarkness/index.php?title=Probability_Math#New_World_of_Darkness this site] because my dice program brought my computer to its knees trying to calculate the percentages :)

++  Routine Task 

|| Person || D20 || nWoD || FUDGE || FS3.1 || FS3.2 ||
|| Nate the Newbie || 35% || 65% || 17% || 60% || 57% ||
|| Pete the Professional || 50% || 83% || 59% || 80% || 86% ||
|| Victor the Veteran || 70% || 88% || 78% || 92% || 94% ||
|| Maria the Master || 95% || 91% || 90% || 98% || 98% ||

++  Easy Task 

|| Person || D20 || nWoD || FUDGE || FS3.1 || FS3.2 ||
|| Nate the Newbie || 60% || 75% || 59% || 80% || 82% ||
|| Pete the Professional || 75% || 88% || 90% || 99% || 94% ||
|| Victor the Veteran || 95% || 91% || 99% || 99% || 98% ||
|| Maria the Master || 95% || 94% || 99% || 99% || 99% ||

++  Hard Task 

|| Person || D20 || nWoD || FUDGE || FS3.1 || FS3.2 ||
|| Nate the Newbie || 10% || 30% || 1% || 40% || 25% ||
|| Pete the Professional || 25% || 75% || 17% || 60% || 67% ||
|| Victor the Veteran || 45% || 83% || 36% || 72% || 86% ||
|| Maria the Master || 70% || 88% || 59% || 78% || 94% ||

++ Opposed Roll Matchups

**FS3 Chance of Attacker Success / nWOD Chance of Attacker Success**

|| Attacker v   Defender --> || Nate || Pete || Victor || Maria || Firearms ||
|| Nate the Newbie || 67% / 66% || 36% / 46% || 21% / 38% || 11% / 31% || 69% / N/A ||
|| Pete the Professional || 84% / 78% || 64% / 62% || 44% / 54% || 31% / 47% || 86% / N/A || 
|| Victor the Veteran || 95% / 83% || 76% / 68% || 61% / 61% || 48% / 54% || 93% / N/A || 
|| Maria the Master || 96% / 87% || 83% / 74% || 72% / 67% ||61% / 60% ||96% / N/A ||