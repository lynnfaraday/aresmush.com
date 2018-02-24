---
title: Player Handles
description:
layout: page
tags: 
- features
- handles
---

Handles bring a little taste of social media to MUSHing. A handle is your OOC identity, used across all Ares games.  Through your handle, people can identify you as a **player**, not just as a character.

Handles have an @-sign in front (like @Faraday) to distinguish them from regular player names.

> With a handle, you essentially have TWO names:  the *character* name, on your local game, and the *handle* name, which is the same across all games.   These names *could* be the same (like if you have a staff character or OOC alt) but usually they will be different.

Why use handles?  We've all seen posts like "Looking for SoAndSo from SuchAndSuchMUSH."  Games close, people drift.  Handles provide tools to help you keep in touch with your friends, and keep track of who's who.

## How do I get a handle?

Handles are created and managed through [AresCentral](/arescentral), the social hub for AresMUSH.

## What does a handle do?

Having a handle does nothing until you **link** a character to it.  This basically tells everyone that you play that character.  It also allows access to handle features from that character.  More on that in a moment.

You can also mark other handles as your friends, and these friendships carry over across all AresMUSH games.

## What about my privacy?

Handles are optional.  If you're really worried about privacy, simply don't create one.

You decide which characters are linked.  Don't want anyone knowing you're playing on KinkyMUSH?  Just don't link that character to your handle.

> All linked characters are publicly visible.  Think of them them as cross-game public alts.   All friendships are also publicly visible, like on Facebook.

## How do I link characters?

Linking is a two-step process requiring you to log in on both AresCentral and the game you want to link from. This prevents someone from linking characters to your handle without your permission.

1. Log in to AresCentral and go to `My Account -> Manage Characters`.
2. Click `Get A New Link Code` and copy the code it gives you.
3. Log into an AresMUSH game with the character you wish to link and type the command: `handle/link <handle name>=<code>`.

## Features

Several features are available on characters who have been linked to a handle.

### Handle Identity

Your handle is shown when you talk in channels using a linked character. 

<pre class="prettyprint">
    <span class="nocode">
      &lt;Public&gt; Cate (@Faraday) says, "Hi everyone."   
         </span>  
</pre>

### Handle Friends

When you add a handle as your friend on AresCentral, that friendship carries across all AresMUSH games.  You can use the `friends` command from one of your linked characters to see if anyone on your friends list is playing on that game.

<pre class="prettyprint">
    <span class="nocode">        
    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
    Friends On This Game      Last On
    ------------------------------------------------------------------------------
    Jackson                   2015-08-06 19:31:33 UTC
    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
    Handle Friends With Alts On This Game
    ------------------------------------------------------------------------------
    @Faraday                  Cate
    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+        
    </span>
</pre>

### Sync Preferences

Certain preferences you set on AresCentral will automatically carry over across all of your alts (on all games).  This keeps you from having to re-set them everywhere.

* Timezone
* Autospace

### Alt Mail Notification

When you log in with one alt, the game will let you know if your other alts (on the same game) have unread mail.

### Future Features

The handle system is in its infancy right now.  Further down the road, handles could be used for cross-game communication (anybody remember MudBot?) and other cool things.