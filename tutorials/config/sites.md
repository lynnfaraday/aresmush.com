---
title: Configuring Banned and Suspect Sites
layout: page
tags: 
- siteban
- suspect
- trouble
- config
---

You can register certain IPs or hostnames as banned or suspect to block/alert you to problem players.  

To learn more about how banned and suspect sites work and what other options you have, see the [Dealing with Trolls](/tutorials/manage/trolls.html) tutorial.

<div id="inline_toc" markdown="1">
**Table of Contents**

* TOC
{:toc}
</div>

## Banned and Suspect Sites

To configure banned and suspect sites:

1. Select Admin -> Setup
2. Edit `sites.yml`.

Add IP addresses or host names to the banned or suspects list, one per line with dashes.  For example:

    - 123.45.678
    - verizon.com

To make the list empty, enter empty brackets, like so:  `[]`

### Findsite

The findsite command (help findsite) helps you to find the IP and host of a troublesome player so you can add their site to the banned or suspect lists.

### Partial Matches

Only part of a site needs to match, so listing `verizon.net` would block 123.456.pool.verizon.net and 678.901.pool.verizon.net and so forth.  

This is a 'contains' search, so wildcards (like *) are not supported.

{% include tip.html content="Be wary of making the match *too* broad.  You don't want to block an entire region of the country." %}

## Banning Proxy Sites

To enable the proxy site ban, set `ban_proxies` to true.  

