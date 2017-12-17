---
title: Dealing with Trolls
description:
layout: page
tags: 
- manage
- trouble
- trolls
- boot
---


Unfortunately, you will sometimes have troublesome players trolling your game.  There are a variety of commands for players and admin to deal with them.

## Player Commands

### Booting Trolls

If someone is causing a ruckus, you can forcibly disconnect them using the [boot](/help/1-0/login/boot/) command.  

> It is preferable to let the game admin deal with problem players.  However, the default Ares configuration allows all approved characters to use the boot command.  This helps players protect each other even when an admin is not available. 

### Reporting Channel Abuse

The [channel/report](/help/1-0/channels/channels) command allows you to report someone being abusive on channel.  It will create an admin job with the channel recall buffer automatically included.

### Monitoring and Reporting Harassing Pages

Individual players can activate a personal log to [monitor pages](/help/1-0/page/page) from a player who's harassing them.  The `page/report` command can then be used to lodge a complaint, automatically including the logged pages.

## Admin Commands

### Booting Trolls

Admins can forcibly disconnect characters using the [boot](/help/1-0/login/boot/) command.  

### Turning Trolls into Statues

The freeze command is inspired by RHost's mechanism for thwarting trolls whose goal is to be sitebanned.  Instead of giving them what they want, or booting them, you can just turn them into a [statue](/help/1-0/manage/statue/).  They will be unable to use any commands at all - not even to quit.  This can also be used to effectively put someone in 'timeout' for a few minutes so they cool off.

### Unapproving Trolls

Most game-altering commands (building, posting to bulletin boards, sending mails, starting scenes) are locked to approved characters by default.  This inherently protects you against malicious guests and characters fresh off the login screen.  If an already-approved character causes mischief, you can [unapprove](/help/1-0/chargen/manage_apps/) them to deny them access to these commands.

### Banning Trolls

In the [web portal configuration](/tutorials/config/ban.md), you can designate certain IP addresses and/or hostnames as suspect or banned sites.  Players from banned sites will be unable to log in at all.  Players from suspect sites can log in, but you will be alerted via staff job any time a new character first logs in from that site.

The [findsite](/help/1-0/manage/findsite/) command helps you to find the IP and host of a troublesome player so you can add their site to the banned or suspect lists.

If a troll is using a proxy to evade your siteban, the ban configuration can also block known proxy servers.

### Monitoring Trolls

General commands are routinely logged for everyone, but private conversations (pages, poses, mail and channels) are not.  Ares does not have a 'SUSPECT' flag in the way you might be used to from other MU* servers.  It is often used for malicious purposes and rarely for good.  Players can individually choose to monitor pages to report harassment, as explained in the *Player Commands* section above.