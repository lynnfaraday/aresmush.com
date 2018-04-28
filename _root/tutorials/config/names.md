---
tags:
- config
title: Configuring restricted names.
---
# Configuring Restricted Names

You can configure character names that are off-limits.  For example, if your theme is Star Wars you may want to reserve Luke and Yoda. 

To configure restricted names:

1. Select Admin -> Setup
2. Edit `names.yml`.

List the names one per line with dashes at the front.  For example:  

    - me
    - here

Capitalization doesn't matter.  Entering 'Yoda' will prevent yoda, yODa, YODA, and so forth.

To make the list empty, enter empty brackets, like so:  `[]`