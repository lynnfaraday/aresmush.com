---
toc: ~config~ Configuring the Game
title: Configuring banned and suspect sites.
tags: 
- siteban
- suspect
- trouble
---

# Configuring Banned and Suspect Sites

To configure the game skin:

1. Go to the Web Portal's Admin screen.  
2. Select 'Ban/Suspect Sites'.

You can register certain IPs or hostnames as "suspect" and you'll be alerted (via a job) when a new character is created from one of these sites.  

Banned sites work similarly but they actually prevent the character from logging in at all.

Use `findsite <name>` to find a character's IP and host information.

> **Tip:** You can use part of a hostname - often only the last bit is meaningful - but be careful about making it too broad.  Blocking a generic verizon or comcast host could end up blocking an entire region of players. 

To remove a ban or suspect site, just remove it from the list.

## Blacklisting Proxy Sites

_Developed with assistance from Ashen Shugar@RhostMUSH._

If someone is using a proxy server, banning them can be like playing whack-a-mole as they keep switching IPs.  An extreme measure is to ban all known proxy sites.  This can make things more difficult for a troll, but at a risk of blocking users who are running a proxy server for legitimate reasons.  

To enable the proxy site ban, simply check the "disable known proxies" box on the ban/suspect configuration screen.

> Note:  There are thousands of proxy IPs on the Internet, and the list is constantly changing.  Blocking them all is impossible, but blocking some can sometimes be better than nothing.
