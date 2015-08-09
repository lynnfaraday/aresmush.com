---
title: Player Handles
description:
layout: page
tags: 
- features
- handles
---

Handles bring a little taste of social media to MUSHing. A handle is your OOC identity, used across all Ares games.  Through your handle, people can identify you as a **player**, not just as a character.

Handles have an @-sign in front to distinguish them from regular player names.  I'm @Faraday.

We've all seen posts like "Looking for SoAndSo from SuchAndSuchMUSH."  Games close, people drift.  Handles provide tools to help you keep in touch with your friends, and keep track of who's who.

## What about my privacy?

Handles are optional, so if you're really worried about privacy, simply don't create one.

Having a handle does nothing until you **link** a character to it.  You decide which characters are linked.  Don't want anyone knowing you're playing on KinkyMUSH?  Just don't link that character to your handle.

You can also configure a **privacy setting** for each linked character (aka "**alt**"):  Public,  Friends-Only or Private.  This affects how your handle is used, as we'll see in a minute.


## How do I get a handle?

Handles are created and managed through [AresCentral](/arescentral), a social MU devoted to all things AresMUSH.  This server is the central authority for handles, ensuring that handles are unique across all Ares games. 

To create a handle, connect to AresCentral and make a character with the name you want to use as your handle. AresCentral is the only game where your character name and handle name need to be the same.  

Often people use their wikidot account name as their handle name.  You *can* have more than one handle if you really want to, but it's kind of like having multiple Facebook accounts - you're splitting up your identity and your friends lists and losing out on some of the convenience.

## How do I link characters?

 To protect your security, linking is a three-step process so we know that you're you on both ends.  This prevents someone from linking characters to your handle without your permission.

1) Using the character you want to link, find your character ID.

    handle/id

2) On AresCentral, use the character ID from step 1 to generate a one-time use link code specific to that character.

    handle/linkcode <character id>  (AresCentral only)
    
3) Back on the original game, use your one-time link code from step 2 to link the character to your handle.

    handle/link <handle name>=<link code>

## General Features

Some handle features are available on all alts, no matter what your privacy settings are.

### Alt Mail Notification

When you log in with one alt, the game will let you know if your other alts (on the same game) have unread mail.

### Handle Friends

You can add a handle as your friend, and that friendship will carry over across all of your alts (on all games).

    friend/add @Faraday  -->  Now I'll be your friend on all your games

### Sync Preferences

If you set certain preferences on AresCentral, they will carry over across all of your alts (on all games):

* Timezone
* Autospace

## Privacy-Dependent Features

Some handle features behave differently depending on your privacy settings.

> Remember, privacy is set **per character**, so your handle may be used differently on different characters.

### Public Alt

On a public alt, the connection between the alt and your handle is obvious.

When you talk on a channel, it shows your handle name:

    <Chat> Cate (@Faraday) says, "Hi everyone."

When **anyone** looks at your character's profile, it also shows your handle profile:

    profile Cate -->  shows Cate's profile and @Faraday's profile

When **anyone** looks at your handle profile, they'll see this character listed under the alts list.

<pre class="prettyprint">
    <span class="nocode">
    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
                              -~- @Faraday -~-                           
    ------------------------------------------------------------------------------
    Profile
    Faraday is the creator of AresMUSH.  http://www.aresmush.com
    ------------------------------------------------------------------------------
    Alts(*)                                  Last Seen
    ------------------------------------------------------------------------------
    Cate@BSG                                 2015-08-06 19:31:33 UTC
    
    (*) Alt visibility is based on the player's privacy settings.  
        Do not share this info with others.
    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
</span>
</pre>

When **anyone** adds your handle as a friend, this character will show up on their friends list.

> Notice that you can also add regular old characters as friends too - but that only applies on that particular game.

<pre class="prettyprint">
    <span class="nocode">        
    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
    Friends On This Game      Last On
    ------------------------------------------------------------------------------
    Jackson                   2015-08-06 19:31:33 UTC
    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
    Handle Friends            Alts On This Game(*)
    ------------------------------------------------------------------------------
    @Faraday                  Cate

    (*) Alt visibility is based on the player's privacy settings.  
        Do not share this info with others.
    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+        
</span>
</pre>

### Friends-Only Alt

On a friends-only alt, the connection between the alt and your handle is only visible to your friends.

Friends-only alts do not show the handle name on channels, not even to friends.

When **one of your friends** looks at your alt's profile, it also shows your handle profile.

When **one of your friends** looks at your handle profile, they'll see this alt listed under the alts list.

When **one of your friends** adds your handle as a friend, this alt will show up on their friends list.

See the Public Alt section for more information about each of those features.

### Private(*) Alt

A private alt has only the 'General Features' available, meaning that the handle benefits are for you and you alone.

> It's worth noting that true privacy on a MUSH is an illusion.  It's not *that* hard to figure out who people are, and game admins have always had access to your IP Address.

### Staff Alt

If you create an alt with the same name as your handle (as admins commonly do), there is not automatically a link between that character and the handle.  You still have to go through the linking process.

But what's nice about handles is you don't always have to use the same staff alt name to be recognized.  Let's say I admin on a game who uses city names for their admins.  I could link my London character to Faraday and show up on channels as London (@Faraday).
