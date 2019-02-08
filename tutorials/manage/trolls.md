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

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Player Commands

### Booting Trolls

If someone is causing a ruckus, you can forcibly disconnect them using the boot command.  See `help boot` in-game.

> It is preferable to let the game admin deal with problem players.  However, the default Ares configuration allows all approved characters to use the boot command.  This helps players protect each other even when an admin is not available. 

### Reporting Channel Abuse

The channel/report command allows you to report someone being abusive on channel.  It will create an admin job with the channel recall buffer automatically included.  See `help channels` in-game.

### Monitoring and Reporting Harassing Pages

Individual players can activate a personal log to monitor pages from a player who's harassing them.  The page/report command can then be used to lodge a complaint, automatically including the logged pages.  See `help page` in-game.

{% include tip.html content="For privacy reasons, the page log is **off** by default, and it will only log pages to/from players you specify.  It won't help with a one-time offender, but if someone is repeatedly harassing you, you can activate the log and then report them the next time." %}

### Reporting Offensive Mails

You can use the mail commands to forward an offensive mail to the game admin.  See `help mail` in-game.

## Admin Commands

### Booting Trolls

Admins can forcibly disconnect characters using the boot command.  See `help boot` in-game.

### Turning Trolls into Statues

The statue command similar to Rhost's FUBAR flag or MUX's @toad, can deter trolls whose goal is to be sitebanned.   When you turn a player into a statue, they will be unable to use any commands at all - not even to quit.  See `help statue` in-game.

### Unapproving Trolls

Most game-altering commands (building, posting to forums, sending mails, starting scenes) are locked to approved characters by default.  This inherently protects you against malicious guests and characters fresh off the login screen.  If an already-approved character causes mischief, you can unapprove them to deny them access to these commands.  See `help manage apps` in-game.

### Banning Trolls

In the [Web Portal banned/suspect sites configuration](/tutorials/config/ban.html), you can designate certain IP addresses and/or hostnames as suspect or banned sites.  

Banning a site prevents players from logging in at all from that site.

Marking a site as suspect will alert you (via staff job) any time a new character first logs in for the first time from that site.

### Blacklisting Proxy Sites

_Developed with assistance from Ashen Shugar@RhostMUSH._

If someone is using a proxy server, banning them can be like playing whack-a-mole as they keep switching IPs.  An extreme measure is to ban all known proxy sites.  This can make things more difficult for a troll, but at a risk of blocking users who are running a proxy server for legitimate reasons.  We recommend not enabling this feature unless you're having trouble with a proxy troll.

To ban proxy sites, simply enable the option in the [Web Portal banned/suspect sites configuration](/tutorials/config/ban.html)

{% include note.html content=" There are thousands of proxy IPs on the Internet, and the list is constantly changing.  Blocking them all is impossible, but blocking some can sometimes be better than nothing." %}

### Monitoring Trolls

General commands appear in the [game log](/tutorials/code/logs.html), but private conversations (pages, poses, mail and channels) are not.  Ares does not have a 'SUSPECT' flag in the way you might be used to from other MU* servers.  It is often used for malicious purposes and rarely for good.  Players have tools to report page and channel harassment, as explained in the *Player Commands* section above.