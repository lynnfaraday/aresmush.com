---
title: Configuring the Jobs System
layout: page
tags:
- config
---

To configure the Jobs plugin:

1. Select Admin -> Setup.
2. Edit `jobs.yml`

{% include toc.html %}

### Categories

Job categories are created with in-game commands.  You can set up in-game category colors and access roles using the game commands.  See `help manage jobs` for details.  

To customize the web portal category colors, you'll need to use a [custom CSS style](https://aresmush.com/tutorials/config/website.html#custom-css-style).  For example:

    .job-category-REQ {
        background-color: purple;
        color: white;
    }

### request_category

You can set the category used for player requests.  By default it's the REQ category.

### trouble_category

You can also configure which job category is used when the system creates a job for a suspect or boot alert.  By default it's the ALERT category.

## system_category

You can set the job category used for various system jobs, like XP notices. By default it's the SYS category.

## status

The status values define your workflow.  The default workflow is:

NEW -> OPEN -> HOLD (if necessary to pause a job) -> DONE -> ARCHIVED

You can add more status steps to your workflow.

{% note %} 
Adding new status values is fine.  If you change or delete existing status values, you need to check to see if any code is using the old status.  For example, the chargen system allows you to configure which status a job goes to when an application is rejected or re-submitted.
{% endnote %}

### Status Color

You can also set a color for each job.  This can be changed at will.  For example, NEW jobs are green by default:

        NEW:
            color: "\%xg"

This color config is only used in-game.  To customize the web portal status colors, you'll need to use a [custom CSS style](https://aresmush.com/tutorials/config/website.html#custom-css-style).  For example:

    .job-status-NEW {
        background-color: yellow;
        color: black;
    }

### Special Status Values

The jobs system has two special status values: 

* `default_status` - This is the status that all brand new jobs are first assigned.  "NEW" by default.
* `open_status` - This is the status that jobs go to when they are opened. "OPEN" by default.
* `archive_status` - This is the status that jobs go to when archived.  "ARCHIVED" by default.
* `active_statuses` - **This is a list**.  Jobs with these status values show up in the 'Active' jobs filter.
* `closed_statuses` - **This is a list.** Jobs with these status values are assumed to be closed and do not show up on the current jobs list.  You need to use the jobs/all command to see them.  Includes "DONE" and "ARCHIVED" by default.

## archive_job_days and archive_cron

Jobs are automatically archived a certain number of days after they're closed.  Archived jobs are not included in the basic jobs list, but can still be searched.  The delay between closing and archiving gives other staffers a chance to read the final job comment.

You can configure how long to wait before closing the job, and also configure the cron job for when the job archiving happens (by default weekly). See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/code/cron.html) for help if you want to change this.


