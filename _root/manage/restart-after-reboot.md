---
title: Restart After Reboot
description:
layout: page
tags: 
- manage
- restart
- reboot
---

You'll want to make sure that your game restarts if the machine is ever rebooted. The exact instructions will vary depending on your machine's operating system. Please consult your system documentation for details.

## Digital Ocean

Adding **/home/yourusername/aresmush/bin/startares&** to the machine's **/etc/rc.local** file should do the trick. This requires root access to the machine.
