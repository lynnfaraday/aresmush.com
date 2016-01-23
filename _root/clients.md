---
title: Setting Up Your Client
description:
layout: page
tags: 
- client
---

To connect to AresMUSH (or any other MUSH), you'll need a MUSH client.  Ares is routinely tested with the following clients, so we recommend using one of these:

* [Potato MUSH Client](http://www.potatomushclient.com/) for Windows, Mac and Linux
* [Atlantis MUSH Client](http://www.riverdark.net/atlantis/) for Mac 

## Character Encoding

For the optimal Ares experience, you'll need to set up your client to use the **UTF-8** Unicode character set.  Basically this allows your client to show you characters that go beyond basic ASCII, like accented characters and symbols.

UTF-8 is backwards-compatible with ASCII, so you can safely make it your client's global default.

### Character Encoding in Atlantis

1. Open the Atlantis 'Preferences' menu (Atlantis -> Preferences)
2. Select 'World Defaults'
3. Select the 'Formatting' tab.
4. Find the 'Character Set / Encoding' dropdown.
5. Select 'Unicode (UTF-8)'.

> You can also adjust this setting on a per-world basis in your Address Book.  Select the desired world and look under the 'Formatting' tab.  You may need to do this for any existing worlds.

### Character Encoding in Potato

1. Select the 'Options' menu.
2. Select 'Configure Program Settings'.
3. Select 'Connection'.
4. Find the 'Starting Encoding' dropdown.
5. Select 'UTF-8'.

> You can also adjust this setting on a per-world basis in your Address Book.  Select the desired world and look under the 'Connection' section.  You may need to do this for any existing worlds.

### Character Encoding in MUSHClient

1. While in the world, hit ALT+Enter or open the world properties menu (File -> World Properties). 
2. Select 'Appearance'.
3. Select 'Output'.
4. On the right, make sure the "UTF-8 (Unicode)" checkbox is checked.
5. Click 'OK' to save the settings.

### Other Clients

If your client isn't listed here, please provide [Feedback](/feedback).
 
## Grab/Edit

AresMUSH doesn't support the old `/grab object/attribute` syntax you may be familiar with from Penn and TinyMUX, because its database works differently.  However, many commands support an /edit switch, which allows you to easily grab game text into your client's input buffer (the place where you type).  For example, typing `desc/edit me` will put your description into your input buffer so you can edit it and send it right back.

The edit feature only works if your MU client supports grab/FugueEdit functionality.  When the client sees text with a special prefix in front, it sends the text to your input buffer instead of to your screen.  The default prefix is `FugueEdit >`, a long-standing MUSH tradition.  This will work by on many clients, but some clients require special configuration.  You can set your edit prefix in-game using:

    edit/prefix <prefix> - Sets your grab/edit prefix.

Some clients also require special setup, described below.

### Editing in Atlantis

1. Open the Atlantis 'Preferences' menu (Atlantis -> Preferences)
2. On the 'General' tab, check 'Support FugueEdit input grabbing'.
3. You do not need to set the edit prefix; the default one should work.

### Editing in Potato

You shouldn't need to do anything to make Potato work.

### Editing in MUSHClient

1. While in the world, hit ALT+Enter or open the world properties menu (File -> World Properties). 
2. Select 'Appearance'.
3. Select 'Triggers'.
4. Add a new trigger.
5. In the top 'Trigger' box, enter:  `FugueEdit > *`.
6. In the 'Send' box, enter: `%1`.
7. Under 'Send To', select 'Command'.
8. On the right, check the 'Omit from Output' checkbox.

### Other Clients

If your client isn't listed here and the edit feature is not working, please provide [Feedback](/feedback).