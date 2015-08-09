---
title: MUSH 101 - Connecting and Communicating
description:
layout: mush-101
prevstep: game-of-words
nextstep: joining-the-cast
tags: 
- commands
---

This is the transcript for the [Connecting and Communicating](/mush-101/connecting-and-commo) screencast.

## Transcript

The first step is to get a MUSH client.  A MUSH client is just a special kind of app that lets you access MUSH games, just like a web browser lets you access a website.   There are many MUSH clients out there.  The one I’m going to show you is [Potato](http://www.potatomushclient.com/).   Potato runs on Windows, Mac and Linux and supports all the basic features you’ll need.

> Some other popular MUSH clients include [Atlantis](http://www.riverdark.net/atlantis/) for Mac and [MUSHClient](http://www.gammon.com.au/mushclient/mushclient.htm) for Windows.

### Adding a Game to the Address Book

There are lots of MUSH games out there, and finding one to play on is a topic for another tutorial.  Today we’re going to connect to [AresCentral](/arescentral).   AresCentral is more of a social hub than an actual game, but it’s a good place to get familiar with the basic MUSH commands.

Just like a website, a MUSH has an address on the Internet.  This address has two parts, a name and a number, the host and the port.  The address for AresCentral is **mush.aresmush.com port 7206**.

To connect to AresCentral, we’re going to need to add it to our MUSH client’s address book.   Like bookmarks in a web browser, the address book lets you store the addresses of all your favorite MUSHes.  In Potato, you can simply click “Add New World” from the main screen.

> MUSH games are often called "worlds", because they represent virtual worlds.

### Connecting to a Game

Once we have the game in our address book, we can either use the shortcuts on the main screen, or open the address book and click “Connect to World” to connect.  The first thing you’re going to see is the connect screen.   This usually has some nifty ASCII art to let you know which game you’ve connected to.

<pre class="prettyprint">
    <span class="nocode">
           |\                     /)
         /\_\\__               (_//
         |   `>\-`     _._       //`)       \ 
          \ /` \\  _.-`   `-._  //         _ \    __| _ \  __|
           `    \|\     \     /|/         ___ \  |    __/\__ \ 
                 |     / \\    |        _/    _\_|  \___|____/
                 |   //----\   |
                 | //--    -\\ |         \  | |   |  ___|  |   |
                 */-          \*        |\/ | |   |\___ \  |   |
                 \             /        |   | |   |      | ___ |
                  \           /        _|  _|\___/ _____/ _|  _|
                   `-.     .-'
                    //`:::`\\          +-------------------------+
                   //   '   \\         | Still in Development    |
                  |/         \\        |                         |
                                       |                         |
                                       |                         |
                                       | http://www.aresmush.com |
          ASCII Art modified from jgs  +-------------------------+
          %% Welcome to AresMUSH!
         </span>
</pre>

Now, since MUSHes are purely text-based, there are no menus or buttons or graphics.  You interact with the game by typing commands in the little window at the bottom of the screen - that’s called the input window.   Whenever you hit ‘Enter’, the command will be sent to the game, and the game will respond with text on your screen.

The first command we’re going to learn is the connect command.  This connects you to a particular character, which is like your avatar in the game world.   We don’t have a character of our own yet on this game, but just about every MUSH has a couple of shared “guest” characters you can use.   A guest doesn’t participate in the actual story, but they can still log in, look around and talk to people.  It’s a great way to learn about a game.  

The connect command is `connect <name> <password>`.    By convention, you can connect to one of the shared guest characters by using ‘guest’ for both the name and password, so we can type:  `connect guest guest`.

We can see who else is online using the who command.  Just type `who` in the input window and then hit ‘Enter’.  Here we can see there are four total players connected - Bob, Emma, Faraday and Guest-1 (that’s us!).

<pre>
    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
                                     AresCentral                                  
    ------------------------------------------------------------------------------
    Status Name                   Handle              Faction         Conn   Idle
    IC     Bob                                                        10s    8s    
    OOC    Emma                                                       2h     8s    
    ADM    Faraday                @Faraday                            1h     0s    
    NEW    Guest-1                                                    5m     8s    
    ------------------------------------------------------------------------------
            4 Online                   1 IC                   10 Record        
    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
</pre>
MUSHes are inherently a social activity, so how do we talk to these people?   The most common way is through the public chat system.   This system has multiple channels, which are kind of like chatrooms.  Players can join the channels that interest them and chat with each other.  

> Most games have at least two channels - one for new player questions (usually called Questions or Newbie) and one for general chitchat (usually called Chat or Public). 

On MUSHes that use the AresMUSH game engine, you can see the available public chat channels by typing `channels`.   This command also tells you how to talk on them.  For example, to talk on the chat channel we would type `cha <message>`.  So we could type `cha Hi there!`.   That message will be sent to everyone who has joined that channel.  Here we see that Faraday has replied saying hi back to us.  Notice how the channel output is prefixed by the channel name in brackets.

    <Chat> Guest-1 says, "Hi there!"
    <Chat> @Faraday (Fara) says, "Hi, Guest!"

> Not all MUSHes use the AresMUSH engine.  Other common engines include PennMUSH and TinyMUX.  Channel commands work differently on the other game engines.

If you have trouble talking on the channels or just want to talk to someone privately, you can also use the page command to send a private message to any other player.  You do this using the character name (from the who list).    It’s important to keep in mind the distinction between a player - the real life person playing the game - and the character they’re playing.   MUSHes don’t tell you someone’s real name, only their character name, so that’s how we communicate with each other.   So if we wanted to talk to Emma’s player, we could type:  `page Emma=Hi.  Can you please help me?`    Only Emma’s player would see that message, and hopefully she would respond:  “Sure!  What do you need?”

    %% (to Emma): Guest-1 says, "Hi.  Can you please help me?"
    %% (to Guest-1): Emma says, "Sure!  What do you need?"

## Next Steps

That’s the end of this tutorial.   Now you know how to log into a game, connect to a character, see who’s online and talk to them.  In the next part of the tutorial, [Joining the Cast](/mush-101/joining-the-cast), we will look at how to find a game and create a character.  