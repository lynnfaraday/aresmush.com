---
title: Rebooting the Server
description: 
layout: page
tags:
- reboot
- upgrade
---

Sometimes your server will tell you it needs to be restarted.  Usually this happens after it has auto-installed security updates.  You might see this notice when you log into the server shell, or when you view the Ares jobs list.

In the server shell:

> `*** System restart required ***`

In the game:

> Your operating system is indicating that your server needs to be rebooted - probably to finish installing automatic updates.  Please restart the server (not just the game) as soon as you can.  You may encounter performance or memory issues until this is done.

{% note %} 
It is highly recommended that you reboot your system as soon as possible when you see this message.  Not only will this get you the necessary security updates faster, but it will avoid lag and other performance issues.
{% endnote %}

## How to Reboot

1. Shut down the game, either using the `shutdown` command or the Admin->Manage->Shutdown button on the Web Portal.
2. Log into the [Server Shell](/tutorials/install/server-shell.html).
3. Type `sudo reboot`.  (On older linux systems you may need to do `sudo shutdown -r now`.)
4. Wait.  It could take up to 10 minutes to install updates.

Your game should restart automatically after the server reboots. 

If it does not, check your log files and see if there was an error. If there was no error, your server might not be configured right.  See [Restarting After a Reboot](/tutorials/manage/restart-after-reboot.html).