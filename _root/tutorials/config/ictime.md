---
toc: ~config~ Configuring the Plugins
title: Configuring IC Time.
---
# Configuring the IC Time System

To configure the IC Time plugin:

1. Go to the Web Portal's Admin screen.  
2. Select Advanced Config.
3. Edit `ictime.yml`

## year_offset

The IC time system follows RL time at a 1:1 ratio, but you can shift it by a number of years.

For example, assume it's currently 2017 in RL.  To make it 1817 you would set the `year_offset` to -200.  June 1, 2017 would then become June 1, 1817.

    year_offset: -200
    day_offset: 0

## day_offset

You can also shift the game to be a number of days ahead of or behind RL.

For example, if it's June 1, 2017 and you want the date to be 200 years and 6 months ahead of RL, you can do:

    year_offset: 200
    day_offset: 180

June 1, 2017 would then become roughly Dec 1, 2217. 

> **Tip:** The exact day it shifts ahead to will vary due to months having different lengths.  Just keep adjusting the day offset until you get the starting date you want.  From there it will advance 1 IC day for every RL day that passes.