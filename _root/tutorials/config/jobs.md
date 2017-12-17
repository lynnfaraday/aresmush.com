---
toc: ~config~ Configuring the Plugins
title: Configuring the jobs system.
---
# Configuring the Jobs System

To configure the Idle plugin:

1. Go to the Web Portal's Admin screen.  
2. Select Advanced Config.
3. Edit `config_jobs.yml`

## Job Categories

The jobs system comes with a set of default categories, but you can add more.

> **Important!** Adding categories is fine.  If you change or delete categories, you need to update any code that was using the old category name.  For example, the chargen code uses the "APP" category when an application is submitted.

* APP - Character applications
* BUILD - Build requests.
* BUG - Bug reports.
* CODE - Code requests.
* MISC - Anything else.
* PLOT - Plot related.
* REQ - Player request.
* RP - General RP related.
* ALERT - Trouble alerts.

### Category Color

You can also set a color for each category.  For example, REQ jobs are magenta by default:

        REQ:
            color: "\%xm"

### Request Category

You can set the category used for player requests.  By default it's the REQ category.

### Trouble Job Category

You can also configure which job category is used when the system creates a job for a suspect or boot alert.  By default it's the ALERT category.

## Status

The status values define your workflow.  The default workflow is:

NEW -> OPEN -> HOLD (if necessary to pause a job) -> DONE

You can add more status steps to your workflow.

> **Important!** Adding new status values is fine.  If you change or delete existing status values, you need to check to see if any code is using the old status.  For example, the chargen system allows you to configure which status a job goes to when an application is rejected or re-submitted.

### Status Color

You can also set a color for each job.  This can be changed at will.  For example, NEW jobs are green by default:

        NEW:
            color: "\%xg"

### Special Status Values

The jobs system has two special status values: 

* `default_status` - This is the status that all brand new jobs are first assigned.
* `closed_status` - Jobs with this status are assumed to be closed and do not show up on the current jobs list.  You need to use the jobs/all command to see them.

