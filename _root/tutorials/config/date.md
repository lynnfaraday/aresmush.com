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

* `short_date_format` - This is used when you just want a short date, like 1/2/2016.  
* `long_date_format` - This combines date and time into a longer format, like 27 March 2016, 5:45pm.
* `time_format` - This is just the time by itself, like 5:45pm.
* `date_and_time_entry_format` - This is used for parsing date/time strings (e.g. when inputting event start times like 12/25/2016 2:45pm).

|~ Format | American | European |
| Short Date | %m/%d/%Y | %d-%m-%Y |
| Long Date | %a %b %d, %Y %l:%M%P  |  %d-%m-%Y %k%M |
| Time | %l:%M%P  | %k%M |
| Date and Time Entry | %m/%d/%Y %H:%M%p | %d-%m-%Y %k%M |


You have complete control over each format.  You can change it use hyphens, put the month first or second, use two-digit years instead of four-digit years, use 12 or 24-hour time, etc.  Some common examples:

    %d - Day of month
    %m - Month number
    %b - Month abbreviation (e.g. Jan)
    %Y - Four-digit year
    %k - 24-hour clock hour
    %M - Clock minute
    %l - 12-hour clock hour
    %P - am or pm

For a detailed explanation of all possible options, see the [Ruby Date/Time Format Documentation](https://apidock.com/ruby/DateTime/strftime).

## Help Prompts

There are two date options that are not used for date formatting by the code, but are shown to the user as help prompts.

* `date_entry_format_help` - A human-readable string telling someone how to enter a date in `short_date_format`.  For example, if short date format is 12/25/2016 then your help would be mm/dd/yyyy.
* `date_and_time_entry_format_help` - A human-readable string telling someone how to enter a date and time in `date_and_time_entry_format`.  For example, if your entry format is 12/25/2016 2:45pm then your help would be mm/dd/yyyy hh:mm(am/pm).

