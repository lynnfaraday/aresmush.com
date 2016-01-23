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

> With a handle, you essentially have TWO names:  the *character* name, on your local game, and the *handle* name, which is the same across all games.   If you have a staff alt or an alt you use to segregate OOC spam, it is possible for these names to be the same, but they don't have to be.

Why use handles?  We've all seen posts like "Looking for SoAndSo from SuchAndSuchMUSH."  Games close, people drift.  Handles provide tools to help you keep in touch with your friends, and keep track of who's who.

## What about my privacy?

Handles are optional, so if you're really worried about privacy, simply don't create one.

Having a handle does nothing until you **link** a character to it.  You decide which characters are linked.  Don't want anyone knowing you're playing on KinkyMUSH?  Just don't link that character to your handle.

You can also configure a **privacy setting** for each linked character (aka "alt"):  Public,  Friends-Only or Private.  This affects how your handle is used, as we'll see in a minute.

## How do I get a handle?

Handles are created and managed through [AresCentral](/arescentral), a social MU devoted to all things AresMUSH.  This server is the central authority for handles, ensuring that handles are unique across all Ares games. 

To create a handle, connect to AresCentral and make a character with the name you want to use as your handle.  Often people use their wikidot account name as their handle name, but this is not required.

> The character on AresCentral is like your master handle character.  You control all your handle settings through that character.

## How do I link characters?

 To protect your security, linking is a three-step process so we know that you're you on both ends.  This prevents someone from linking characters to your handle without your permission.

1) On your local game, log in with the character you want to link and find your character ID.

    handle/id

2) On AresCentral, use the character ID from step 1 to generate a one-time use link code specific to that character.

    handle/linkcode <character id>
    
3) Back on the local game, use your one-time link code from step 2 to link the character to your handle.

    handle/link <handle name>=<link code>

Tada!  That character is now linked to your handle.   You can unlink characters on AresCentral.  See `help handles`.

## General Features

Some handle features are available on all alts, no matter what your privacy settings are.

### Alt Mail Notification

When you log in with one alt, the game will let you know if your other alts (on the same game) have unread mail.

### Handle Friends

You can add a handle as your friend, and that friendship will carry over across all of your alts (on all games).

    friend/add @Faraday  -->  Now I'll be your friend on all your games

When you log into a new game, you can use the `friends` command to see if anyone on your friends list is playing there (if their privacy settings allow).

<pre class="prettyprint">
    <span class="nocode">        
    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
    Friends On This Game      Last On
    ------------------------------------------------------------------------------
    Jackson                   2015-08-06 19:31:33 UTC
    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
    Handle Friends With Alts On This Game(*)
    ------------------------------------------------------------------------------
    @Faraday                  Cate

    (*) Alt visibility is based on the player's privacy settings.  
        Do not share this info with others.
    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+        
</span>
</pre>

### Sync Preferences

If you set certain preferences on AresCentral, they will carry over across all of your alts (on all games):

* Timezone
* Autospace

You can turn this syncing on and off on a per-character basis.  See `help handles`.

## Privacy-Dependent Features

Some handle features behave differently depending on your privacy settings.

> Remember, privacy is set **per character**, so your handle may be used differently on different characters.

### Public Alt

On a public alt, the connection between the alt and your handle is obvious.

#### On Channels

When you talk on a channel, it shows your handle name:

    <Chat> Cate (@Faraday) says, "Hi everyone."

#### In Handle Profiles

When **anyone** looks at your handle profile, they'll see this character listed under the alts list.

<pre class="prettyprint">
    <span class="nocode">
    > profile @Faraday
    
    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
                              -~- @Faraday -~-                           
    ------------------------------------------------------------------------------
    Profile
    Faraday is the creator of AresMUSH.  http://www.aresmush.com
    ------------------------------------------------------------------------------
    Alts(*)
    ------------------------------------------------------------------------------
    SomeBSGGame
        Cate
    
    (*) Alt visibility is based on the player's privacy settings.  
        Do not share this info with others.
    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
</span>
</pre>

#### In Character Profiles

When **anyone** looks at your character's profile, it shows your handle and public alts (on that game).

<pre class="prettyprint">
    <span class="nocode">
    > profile Cate
    
    ==============================================================================
                           -~- Cate@SomeBSGGame -~-                        

    Status:     Not Yet Approved
    Last On:    Sun Aug 09, 2015  9:10am
    Location:   OOC - Character Creation
    Timezone:   America/New_York
    Played By:  None Set
    Handle:     @Faraday
    Alts (*):   Faraday, Cate

    (*) Alt visibility is based on the player's privacy settings.  Do not share this info with others.
    ==============================================================================
</span>
</pre>

#### In Friends Lists

When **anyone** adds your handle as a friend, this character will show up on their friends list as explained in the General Features above.

> You can also add regular old characters as friends too - but that only applies on that particular game.

### Friends-Only Alt

On a friends-only alt, the connection between the alt and your handle is only visible to your friends.

* Friends-only alts do not show the handle name on channels, not even to friends.
* When *one of your friends* looks at your alt's profile, it also shows your handle profile.
* When *one of your friends* looks at your handle profile, they'll see this alt listed under the alts list.
* When *one of your friends* adds your handle as a friend, this alt will show up on their friends list.

See the Public Alt section for more information about each of those features.

### Private(*) Alt

A private alt has only the 'General Features' available, meaning that the handle benefits are for you and you alone.

Your handle name never appears, and your alts are not listed - not even to your friends.

> Why is there a '*' after private?  Because true privacy on a MUSH is an illusion.  It's not *that* hard to figure out who people are, and game admins have always had access to your IP Address.  On AresMUSH, local game admins have access to the database, which means they *could* see your handle information even for a private alt.  AresCentral admins are bound by our [Privacy Policy](/privacy).

### Staff Alt

If you create an alt with the same name as your handle (as admins commonly do), there is not automatically a link between that character and the handle.  You still have to go through the linking process.