---
title: Configuring the Achievements System
tags:
- config
layout: page
---

Achievements is an optional plugin that lets you set up in-game achievements for characters to earn.   To configure the Achievements plugin:

1. Select Admin -> Setup.
2. Edit `achievements.yml`

{% include toc.html %}

## announce_channel

By default, announcements are only shown to the person who received them.  You can optionally have them announced on a channel.  Just set `announce_channel` to the name of the channel you wish to use.  Leave the setting blank to disable the announcement.

## types

You can configure what achievement types exist and what their icon is.  Standard types include things like community, story, and portal.  Icons come from the [Font Awesome](https://fontawesome.com/?from=io) icon library, so you'll see codes like `fa-globe` and `fa-users`.

{% tip %} 
Don't erase the existing types, because they're used by various plugins.  You can change their icons, though, and add new types.
{% endtip %}

## Custom Achievements (Manually Awarded)

To add a custom achievement that you plan to award with the `achievement/add` admin command, you just need to define the achievement in the 'achievements' config option in `achievements.yml`.  For example:

    player_of_the_month:
      type: social
      message: Recognized as Player of the Month.

## Custom Achievements (Awarded Through Code)

The prior section describes the configuration necessary to define a custom achievement that you can award manually with the `achievement/add` command.  Sometimes you want custom achievements to be automatically awarded through your own code.  To do this, there are three steps:

1. Define the achievement in a config file.
2. Register the achievement config with the plugin manage.
3. Award the achievement.

### Defining Achievements

Manually-awarded achievements are defined in the `achievements.yml` config file.  But if you have custom code awarding achievements, you'll usually want to define the achievement in its related plugin config.  This is particularly important if you plan on sharing your plugin with others.

For example, in the `forum.yml` config file, we define the forum-related achievements:

    achievements:
      forum_reply:
        type: community
        message: Replied to a forum post.
      forum_post:
        type: community
        message: Created a forum post.

### Registering Achievements with the Plugin Manager

Any plugin that uses achievements needs to register their achievements with the plugin manager. For example, in `aresmush/plugins/forum.rb`, we link the forum plugin's achievements list to the 'achievements' config option:

    def self.achievements
      Global.read_config('forum', 'achievements')
    end

### Awarding Achievements

If you want some piece of code to award a custom achievement automatically, just call: `Achievements.award_achievement(char, achievement_name)`.  For example:

    Achievements.award_achievement(char, "player_of_the_month")

{% tip %} 
You don't have to check to see if the person already has the award; the Achievements plugin does that automatically.
{% endtip %}

### Multi-Level Achievements

Some achievements can be earned more than once at different levels.  For instance, the `scene_participant` achievement is "Participated in XXX scenes", and is awarded at various scene thresholds (1, 10, etc.)

To avoid spamming the config list with the same achievement named differently (scene_participant_1, scene_participant_10, etc.), you can instead track a _count_ along with the achievement.  There are two pieces to this:

* In the achievement message, use `%{count}` where you want the count to be.  For example:  "Participated in %{count} scenes."
* When you award the achievement, specify the count.  `Achievements.award_achievement(char, "scene_participant", 20)`

