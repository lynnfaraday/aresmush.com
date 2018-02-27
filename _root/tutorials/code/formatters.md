TODO!

Ansi formatting and substitutions like %r/%b are handled by the emit methods, so you don't have to worry about those. But there are a couple other formatters you may find useful, like:

PoseFormatter - given a string that starts with :, ", etc. and a name, it will format a pose like Faraday says, "whatever"
TimeFormatter - given a duration, will format a MUSH time string like 2d or 5m.
Paginator - when you have a big list, helps you break things up neatly into pages.