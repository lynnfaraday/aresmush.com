---
title: MUSH 101 - Connecting and Communicating
description:
layout: mush-101
prevstep: game-of-words
nextstep: telling-your-story
tags: 
- commands
---

In this part of the MUSH 101 Tutorial, we'll discuss the mechanics of connecting to a game and talking to other players.

# Getting the App

To connect to a MUSH, you'll need a MUSH client - an app that lets you access MUSH games, just like a web browser lets you access a website.   

There are many MUSH clients around.  Popular MUSH clients include:

* [Potato](http://www.potatomushclient.com/) (Windows/Linux - it's broken on Mac at the time of this writing)
* [Atlantis](http://www.riverdark.net/atlantis/) (Mac) 
* [MUSHClient](http://www.gammon.com.au/mushclient/mushclient.htm) (Windows)
* [Duck Client](http://duckclient.com/) (Any Chrome browser - including Chromebook)

Download and install a MUSH Client app to continue with this tutorial.

# Finding a Game

When it comes to traditional video games, you can visit your local game store or website and browse the titles until you find one you like.  Not so with MUSHes.  A lot of advertising is done through word of mouth.

There are a couple of MUSH directories:

* [AresCentral Game Directory](http://arescentral.aresmush.com/)
* [Evennia Game Index](http://www.evennia.com/)
* [MudConnector[http://www.mudconnect.com/] lists some MUSHes, but is often out of date.


# Connecting to a Game

Once you've found a game, you need to know its address.  This will usually be prominently placed on the game's webpage and consists of a server name and port number, like "mygame.somehost port 1234".

You can add the game to your MUSH client's address book, which is similar to a web browser's bookmarks list.  In Potato, just click "Add New World" and enter the game's information.

Next click "Connect to World" to connect.  You'll see some ASCII art containing the game's welcome screen.  For example:

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
                   //   '   \\         |                         |
                  |/         \\        |                         |
                                       |                         |
                                       |                         |
                                       | http://www.aresmush.com |
          ASCII Art modified from jgs  +-------------------------+
          %% Welcome to AresMUSH!
         </span>
</pre>

Since MUSHes are purely text-based, there are no menus or buttons or graphics for the game itself.  You interact with the game by typing commands in the little window at the bottom of the screen - that’s called the input window.   Whenever you hit ‘Enter’, the command will be sent to the game, and the game will respond with text on your screen.

# Logging In

The first command we’re going to learn is the "connect" command.  This connects you to a particular character, which is like your avatar in the game world.   We don’t have a character of our own yet on this game, but just about every MUSH has a couple of shared “guest” characters you can use.   A guest doesn’t participate in the actual story, but they can still log in, look around and talk to people.  It’s a great way to learn about a game.  

The connect command is `connect <name> <password>`.    By convention, you can connect to one of the shared guest characters by using ‘guest’ for both the name and password, so we can type:  `connect guest guest`.

# Seeing Who's Online

We probably don't have the game all to ourselves, so it's nice to see who else is around.  You can see who all's logged into the game using the "who" command.  Just type `who` in the input window and then hit ‘Enter’.  Here we can see there are four total players connected - Bob, Emma, Faraday and Guest-1 (that’s us!).

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

# Talking On Channels

MUSHes are inherently a social activity, so how do we talk to these people?   The most common way is through the public chat system.   This system has multiple channels, which are similar to chatrooms.  Players can join the channels that interest them and chat with each other.   Most games have a public chat and questions channel.

    <Chat> Guest-1 says, "Hi there!"
    <Chat> Faraday (Fara) says, "Hi, Guest!"

The commands to talk on channels vary from game to game.  Type `help channels` or `help comsys` to find the appropriate help file and follow the instructions.

You can use the chat channels to ask questions and find out more about the game.

# Talking Privately

If you just want to talk to someone privately, you can also use the page command to send a private message to any other player.  You do this using the character name (from the who list).    

> There's an important distinction between a player - the real life person playing the game - and the character they’re playing.   MUSHes don’t tell you someone’s real name, only their character name.

So if we wanted to talk to Emma’s player, we could type:  `page Emma=Hi.  Can you please help me?`    Only Emma’s player would see that message, and hopefully she would respond:  “Sure!  What do you need?”

    %% (to Emma): Guest-1 says, "Hi.  Can you please help me?"
    %% (to Guest-1): Emma says, "Sure!  What do you need?"