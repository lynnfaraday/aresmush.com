---
toc: ~config~ Configuring the Plugins
title: Configuring the communication with AresCentral.
---
# AresCentral - Configuration

To configure the AresCentral plugin:

1. Go to the Web Portal's Admin screen.  
2. Select Advanced Config.
3. Edit `arescentral.yml`

## directory_update_cron

The game will periodically contact AresCentral to update its status and game directory info.  There is a cron job to control when this happens.  By default it does this daily during off-hours.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/code/configuring-cron) for help if you want to change this.

## arescentral_url

This is the URL for contacting AresCentral.  You shouldn't ever have to change it unless for some reason AresCentral moves.