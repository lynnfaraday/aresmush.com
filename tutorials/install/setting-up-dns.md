---
title: Setting Up A Custom Domain with Namecheap
description: 
layout: page
tags:
- install
- hosting
- dns
---

If you don't already have a domain name provider of your own, consider [Namecheap](https://namecheap.com). They're affordable, and their tools are pretty straightforward. I don't get anything for recommending them; I just like them.  

To set up your MUSH's domain on namecheap:

1. Create an account and purchase the domain.
2. [Install the game](/tutorials/install) up to the point where you have the droplet IP address and need to set up the domain.
3. Go to your account dashboard.
4. Click "Manage" next to your domain name.
5. Click "Advanced DNS".
6. Click "Add New Record".  (You might need to scroll down a little bit to see the button.)
{% include pretty_image.html file='/install-ares/namecheap.png' %}

{:start="7"}
7. A little editor will appear where you can enter the new domain mapping.
  * Select "A Record".
  * Enter "@" for the "Host".
  * Enter your droplet's IP address for "IP Address".
  * Leave the TTL setting as "Automatic".
  * Click the green checkmark to save.
8. Finish the game installation.

{% note %} 
The hostname may take up to 24 hours to be recognized.  
{% endnote %}

You can tell that the hostname is working when you're able to see the web portal when you go to `http://yourmushaddress`.  (There will be a Sad Picard error message, but that's OK for now.)  Once this happens, you can continue with the installation,  [restart the game](/tutorials/manage/shutdown.html) for everything to start working. 
