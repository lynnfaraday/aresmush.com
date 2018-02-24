---
toc: ~config~ Configuring the Game
title: Configuring banned and suspect sites.
tags: 
- siteban
- suspect
- trouble
---

# Configuring Banned and Suspect Sites

You can register certain IPs or hostnames as banned or suspect to block/alert you to problem players.  

To configure banned and suspect sites:

1. Select Admin -> Setup
2. Edit `sites.yml`.

Add IP addresses or host names to the banned or suspects list, one per line with dashes.  For example:

    - 123.45.678
    - verizon.com

To make the list empty, enter empty brackets, like so:  `[]`

To enable the proxy site ban, set `ban_proxies` to true.  

To learn more about how banned and suspect sites work and what other options you have, see the [Dealing with Trolls](/tutorials/manage/trolls) tutorial.