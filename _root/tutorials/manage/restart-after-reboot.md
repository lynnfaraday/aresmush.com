---
title: Restart After Reboot
description:
layout: page
tags: 
- manage
- restart
- reboot
---

You'll want to make sure that your game restarts if the server is ever rebooted. 

If you followed the install tutorial on Digital Ocean, the `install_ares` script should do that for you automatically.

If not, the exact instructions will vary depending on your machine's operating system. Please consult your system documentation for details, but the info here might help.

## Ubuntu

Adding **/home/yourusername/aresmush/bin/startares&** to the machine's **/etc/rc.local** file should do the trick. This requires root access to the machine.

