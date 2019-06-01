---
title: Configuring the Page System
layout: page
tags:
- config
---

To configure the Page plugin:

1. Select Admin -> Setup.
2. Edit `page.yml`

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## page_color

You can configure the default page color.  Players can customize this either in-game or through their handle profiles.  You can use multiple color codes.  For example: %xh%xc

## page_start_marker and page_end_marker

You can configure the markers used in the `<PM>` tag at the beginning of pages, to make them mirror your channel format.
  
## page_deletion_days and page_deletion_cron

The system will clear out old pages, mostly to prevent database bloat.  You can control how long pages are kept.  By default it's 60 days.

There is a cron job to control when pages are cleared.  By default it runs once a week in the middle of the night.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/code/cron.html) for help if you want to change this.