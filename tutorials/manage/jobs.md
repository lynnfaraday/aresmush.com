---
title: Using Jobs and Requests
description: 
layout: page
---

Ares has a lightweight job tracking system. It is not as robust as Anomaly Jobs, but does provide a lot of the same basic functionality.  This article gives a general overview of the jobs system. For specific command syntax, see the "Jobs" help topic in-game.

{% include toc.html %}

## Jobs vs Requests

Jobs and requests are actually the same system.  The player-side commands are just named "requests" because it's more intuitive than "jobs". 

## Job Workflow

You can customize the job workflow for your game, but the default flow is:

* A job is submitted, either a player request or an assignment from another admin. (NEW state)
* Someone handles the job and starts working on it.  (OPEN state)
* The admin handling the job communicates with other players/admins to gather information and determine a resolution.  (OPEN state)
* The admin responds to the job with the resolution and closes it.  (DONE state)
* Periodically, old, closed jobs are archived so they don't clutter up the main jobs display.  (ARCHIVE state)

## Comments and Replies

Comments on a job can be admin-only (visible only to other job admins) or responses directed to the player. 

You can also loop in other players to a job by adding them as 'participants'. When you do, the other players will see and be able to respond to the job as if it were their own request.

## Permissions

Anyone with the `can_acess_jobs` permission has access to the jobs system.  However, you can fine-tune access using roles.  Anyone with the 'admin' role automatically has access to all job categories.  For other staff roles, you'll need to use the job category commands to assign their role to the categories you want them to access.

For example, you might add the 'builder' role to the BUILD category.  If you create [custom roles](/tutorials/manage/roles.html) for app/plot staff, you could assign those roles to their respective job categories. They will not have access to other categories.

## Filtering and Searching

There are various filters to help you find jobs by state or by category.  Valid filters are:

* Active - Jobs that are active (not done or on hold) and/or have new activity since you last looked.  This is the default filter.
* Mine - Active jobs assigned to you.
* Unfinished - All jobs not marked done.
* Unread - Jobs with new activity.
* (Category Name) - Active jobs in the given category.
* All - All jobs.

You can also use the search feature on the web portal to search all jobs--including closed and archived ones.
