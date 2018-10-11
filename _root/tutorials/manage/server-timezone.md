---
title: Changing the Server Timezone
description:
layout: page
tags: 
- timezone
---

Sometimes your server ends up in UTC time or some other weird timezone by default.  If you want to make it something more accessible to the typical US MUSH audience, you can run this command from the server shell:

    sudo dpkg-reconfigure tzdata

Follow the prompts to select a new timezone.