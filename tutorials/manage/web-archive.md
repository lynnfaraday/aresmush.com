---
title: Archiving the Web Portal
description:
layout: page
tags: 
- manage
- backup
- webportal
---

All games come to an end eventually, and when that happens you don't want to lose your entire website.  Ares allows you to export the key bits of the web portal to disk:  Characters, Scenes and Wiki.   

{% tip %} 
The exporter doesn't fully re-create the web portal, and it's not perfect.  Some internal links may not function right and may require manual tweaks if you want a pristine archive.  The exporter just does the heavy lifting for you.
{% endtip %}

To run the exporter, go to the `aresmush` folder on the Server Shell and type:

> bundle exec rake webexport

This generates raw HTML files in the `wiki_export` folder.  You can use FTP to download the files and browse them on your local PC.  You can even host it on a static web server, or create a ZIP file and put it somewhere for your players to download for their future reading enjoyment.

{% tip %} 
If you've made extensive changes to the web portal styles and/or templates, you may need to tweak the code in  `aresmush/plugins/website/wiki_exporter.rb`  to get the exported files to look similar to your web portal.
{% endtip %}