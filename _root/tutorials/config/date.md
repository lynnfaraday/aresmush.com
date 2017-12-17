---
toc: ~config~ Configuring the Game
title: Configuring the date and time formats.
---
# Configuring the Date and Time Formats

The game shows dates and times in various places.  You can configure how these are shown. 

To configure the date and time preferencse:

1. Go to the Web Portal's Admin screen.  
2. Select 'Date/Time Formats'.
 
## Date Formats

The game supports several different types of formats, each of which may be configured:

* Short Date Format - This is used when you just want a short date, like 1/2/2016.  
* Long Date Format - This combines date and time into a longer format, like 27 March 2016, 5:45pm.
* Time Format - This is just the time by itself, like 5:45pm.
* Date and Time Entry Format - This is used for parsing date/time strings (e.g. when inputting event start times like 12/25/2016 2:45pm).

You have complete control over each format.  You can change the it use hyphens, put the month first or second, use two-digit years instead of four-digit years, use 12 or 24-hour time, etc.  

> **Tip:** For full details of the available options, see the [Ruby Date/Time Format Documentation](https://apidock.com/ruby/DateTime/strftime).

## Help Prompts

There are two date options that are not used for date formatting by the code, but are shown to the user as help prompts.

* Date Entry Format Help - A human-readable string telling someone how to enter a date in "Short Date Format".  For example, if short date format is 12/25/2016 then your help would be mm/dd/yyyy.
* Date and Time Entry Format Help - A human-readable string telling someone how to enter a date and time in "Date and Time Entry Format".  For example, if your entry format is 12/25/2016 2:45pm then your help would be mm/dd/yyyy hh:mm(am/pm).

