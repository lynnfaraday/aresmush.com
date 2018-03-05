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


Unfortunately, you will sometimes have troublesome players trolling you or your game.  There are a variety of commands for players and admin to deal with them.

## Player Commands

### Booting Trolls

If someone is causing a ruckus, you can forcibly disconnect them using the boot command (help boot).

> It is preferable to let the game admin deal with problem players.  However, the default Ares configuration allows all approved characters to use the boot command.  This helps players protect each other even when an admin is not available. 

### Reporting Channel Abuse

The channel/report command (help channels) allows you to report someone being abusive on channel.  It will create an admin job with the channel recall buffer automatically included.

### Monitoring and Reporting Harassing Pages

Individual players can activate a personal log to monitor pages (help pages) from a player who's harassing them.  The page/report command can then be used to lodge a complaint, automatically including the logged pages.

## Admin Commands

### Booting Trolls

Admins can forcibly disconnect characters using the boot command (help boot).  

### Turning Trolls into Statues

The status command (help statue) similar to RHost's FUBAR flag or Penn's @toad, can deter trolls whose goal is to be sitebanned.   When you turn a player into a statue, they will be unable to use any commands at all - not even to quit.

### Unapproving Trolls

Most game-altering commands (building, posting to forums, sending mails, starting scenes) are locked to approved characters by default.  This inherently protects you against malicious guests and characters fresh off the login screen.  If an already-approved character causes mischief, you can unapprove them (help manage apps) to deny them access to these commands.

### Banning Trolls

In the [Web Portal banned/suspect sites configuration](/tutorials/config/ban), you can designate certain IP addresses and/or hostnames as suspect or banned sites.  

Banning a site prevents players from logging in at all from that site.

Marking a site as suspect will alert you (via staff job) any time a new character first logs in for the first time from that site.

The findsite command (help findsite) helps you to find the IP and host of a troublesome player so you can add their site to the banned or suspect lists.

Only part of a site needs to match, so listing `verizon.net` would block 123.456.pool.verizon.net and 678.901.pool.verizon.net and so forth.

> **Tip:** Be wary of making the match *too* broad.  You don't want to block an entire region of the country.

### Blacklisting Proxy Sites

_Developed with assistance from Ashen Shugar@RhostMUSH._

If someone is using a proxy server, banning them can be like playing whack-a-mole as they keep switching IPs.  An extreme measure is to ban all known proxy sites.  This can make things more difficult for a troll, but at a risk of blocking users who are running a proxy server for legitimate reasons.  

To ban proxy sites, simply enable the option in the [Web Portal banned/suspect sites configuration](/tutorials/config/ban)

> **Note:**  There are thousands of proxy IPs on the Internet, and the list is constantly changing.  Blocking them all is impossible, but blocking some can sometimes be better than nothing.

### Monitoring Trolls

General commands are routinely logged for everyone, but private conversations (pages, poses, mail and channels) are not.  Ares does not have a 'SUSPECT' flag in the way you might be used to from other MU* servers.  It is often used for malicious purposes and rarely for good.  Players have tools to report page and channel harassment, as explained in the *Player Commands* section above.