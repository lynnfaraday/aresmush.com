---
title: Arg Parsers
description: 
layout: page
tags:
- code
- plugins
- commands
---

An important part of [command handling](/tutorials/code/commands.html) is parsing arguments.  Arguments coming out of the `Command` class are raw strings.  Ares provides a variety of argument parsing utilities to handle command args that are intended to be interpreted as numbers, lists, or even complex sequences like "name=subject/message".

{% include toc.html %}

## Arg Converters

Arg converters alter the format of the argument string - changing it to a number, a list, a titlecased string, etc.  They are part of the `Command Handler` class, so they can be used by any command handler.  

* `trim_arg` - Strips leading and trailing spaces from an arg.
* `titlecase_arg` - Capitalizes words (like a title).  Also strips spaces like trim_arg.
* `upcase_arg` - Makes every letter uppercase.  Also strips spaces like trim_arg.
* `upcase_arg` - Makes every letter lowercase.  Also strips spaces like trim_arg.
* `integer_arg` - Interprets the arg as a number.  Returns 0 if you give it a non-numeric string.
* `list_arg` - Splits an argument into an array.  Splits on spaces by default, but you can pass any delimeter.
* `trimmed_list_arg` - Splits an argument into an array and strips spaces on each entry like trim_arg.  Splits on spaces by default, but you can pass any delimeter.
* `titlecase_list_arg` - Splits an argument into an array and strips spaces and formats each entry like a title.  Splits on spaces by default, but you can pass any delimeter.

{% tip %} 
All of the arg converters are safe to use even if the arg is `nil`.  They will just return `nil`.
{% endtip %}

    def parse_args
      self.value = downcase_arg(cmd.args)
    end

## Arg Parsers

The `ArgParser` class helps to split up commands that are in more complex formats, like "mail players=subject/message".  It is used in conjunction with the `cmd.parse_args` method.  For example:

    def parse_args
      args = cmd.parse_args(ArgParser.arg1_equals_arg2)
      self.property = downcase_arg(args.arg1)
      self.value = titlecase_arg(args.arg2)
    end

The first line cracks apart the arguments and stores them in 'args'.  Then we can access the pieces with things like `args.arg1` and `args.arg1`.  

There are a variety of common parsers available, described in more detail below.

Under the hood, a parsers like `ArgParser.arg1_equals_arg2` is just a fancy regular expression that matches the pieces of the commands and assigns names to them (arg1 and arg2 in this case).  `cmd.parse_args` is a method that uses one of those fancy regexes and stores the results in an easily-accessed hash (args).

{% note %} 
By default, <b>all</b> args will end up as `nil` if the command string doesn't match the intended format.  In the example above, both property and value would be nil if you just passed "set x" instead of "set x=y".  However, some of the arg parsers expressly allow optional args.
{% endnote %}

## arg1_equals_arg2

This is probably the most commonly-used parser, intended for commands where you've got a target and a value.

	describe object=description
	channel/alias channel=alias

## arg1_equals_optional_arg2

Similar to `arg1_equals_arg2`, this version allows the second arg to be optional.  It is commonly used on commands that can work on yourself or on an optional target.

	group/set myfaction or group/set player=faction
	channel/join channel  or  channel/join channel=alias

## arg1_slash_arg2

Less common than its 'equals' counterpart, this version is usually used when there's a target and a more detailed identifier. 

	bbs/read board/number
	look object/detail

## arg1_slash_optional_arg2

Similar to `arg1_slash_arg2`, this version allows the more detailed identifier to be optional.

	mail/review char vs mail/review char/#
	combat/join combat_number or  combat/join combat_number/combatant_type

## arg1_equals_arg2_slash_arg3

This parser appears when there's a target followed by multiple pieces of information.  It is commonly used in admin commands where the syntax is "command player=thing/value". 

	demographic char=hair/haircolor
	mail to list=subject/message

## arg1_equals_arg2_slash_optional_arg3

This version is similar to arg1_equals_arg2_slash_arg3 but allows the second piece of information to be optional.

	mail/fwd mail_number=char or mail/fwd mail_number=char/comment
	combat/join npc=combat_number or combat/join npc=combat_number/combatant_type

## arg1_slash_arg2_equals_arg3 

This very uncommon parser is used to act on items that have multiple identifiers. 

	bbs/deletereply board/post_num/reply_num