---
title: MUSH 101 - Playing from a MUSH Client (Transcript)
description:
layout: tutorial
mush101Tutorial: true
tutorialName: MUSH 101
tutorialIndex: mush-101
prevstep: before-you-start
nextstep: play-webportal
tags: 
- clients
- commands
---

This is the text transcript from the [Playing from a MUSH Client](/mush-101/play-muclient) tutorial.

## Introduction

Hi.  This is Faraday from AresMUSH and this is Part II of the MUSH 101 tutorial.  In this segment we’ll cover how to play the game using a MUSH client.  

A MUSH client is a special kind of application that lets you to connect to MUSH servers in the same way a web browser lets you to connect to web servers.

You can access some of the game’s features through the web, which we’ll cover in the next segment, but for the complete game experience you’ll need a MUSH client.   There are MUSH clients available for every operating system, and you can find links to some of them on aresmush.com.   The one I’m going to show you today is Atlantis, a popular client for MacOS.

## Adding Games

Once you have the client app installed, you can connect to a game.  To do this you’ll need to know the game’s address on the internet.  This is similar to a web page URL, but it consists of two parts: a host and a port.

For example, the AresMUSH demo game’s address is mush.aresmush.com port 7206.

Most MUSH clients have an address book that lets you store games, just like a web browser stores bookmarks.  Let’s add the Ares demo game to our address book.  

The exact steps for this may vary on the client you choose, but the general concepts will be the same.  In Atlantis, we’ll:
- Open the address book
- Click the button to add a new game
- Enter the game’s name, host name and port number
- There are lots of other advanced options we can ignore for now.

## Connecting

Once the game is added, we can click Connect to connect to it.  We’ll see the game’s welcome screen, which usually shows some nifty ASCII art telling which game we’ve connected to.  The demo game is currently set up as a Battlestar Galactica MUSH.

MUSHes are primarily text-driven.  There are no buttons or menus on the game itself - everything is done by typing commands.  You type a command in the MUSH client’s input window.  When you hit ‘Enter’, the command is sent to the game.  The game will respond with text on your screen.

## Help and Who

For example - if we type the ‘help’ command, we’ll see a list of help topics.  To read a specific help topic, we would type ‘help’ followed by the topic name.  For example - ‘help beginner’.  Notice that sometimes the text scrolls off the screen and we have to scroll back up to read it.

Another useful command is ‘who’, which will show us who’s online.  This shows us a list of characters who are currently connected.  A character is our avatar in the game, and typically represents a person inhabiting the game’s universe.  On a Battlestar game, your character might be a marine or a Viper pilot.

## Logging In

To log into the game with a character, we use the “connect” command followed by the character’s name and their password.  

We don’t have a character on this game yet.  The way to get a character will vary from game to game, so you’ll need to check out the game’s help topics or website for details.

Most games, though, will have some shared “guest” characters you can borrow just to log in, look around, and talk to people.  To log in using one of these characters, you use “guest” for both the name and the password.  Let’s give it a try and type ‘connect guest guest’.

We got spammed with a bunch of information, which we’ll ignore for now, and it’s telling us our temporary guest name is “Guest-1”.   If we look at the ‘who’ list again, we can see ourselves listed.

## Channels

The next thing we’ll probably want to do is talk to people.  MUSHes have a public chat system.   There are channels for different subjects, kind of like chatrooms, and you can join them and talk to other interested players.  

On AresMUSH games, you can see the list of available channels by typing ‘channels’.   For channels you’ve joined, this command will also tell you how to talk on them.

For example, to talk on the general chit-chat channel, we would type ‘cha’ and then the message we wanted to say.  For example:  ‘cha Hi there.’   Everyone on the channel would see us say hello, and hopefully someone would respond.   The markers at the front of the message indicate that this came from the chat system.

Channels are considered OOC communication - that means Out of Character.  Even though the message is tagged with your character’s name, it’s assumed that you’re speaking as the *player*, not the character.

## Pages

Another way to talk to people is through a private message, known as a ‘page’ in MUSH lingo.   Like channels, pages are also OOC communication - a way for one player to talk to one another.

Even though you’re talking OOC, the game only knows you by your character name, so that’s what you need to use to talk to each other.  To send a private page to Faraday, for instance, you would type: ‘page Faraday=Hello.  I’m new here.  Can you help me?’    And Faraday would hopefully respond with something like,   “Sure.  What do you need?”

The markers at the front of the message indicate that these are private pages.  You can include multiple people in a page, similar to a conference call.

## Rooms

MUSHes have a virtual map consisting of multiple locations (aka ‘rooms’ in MUSH lingo) connected by exits.

Using a theater analogy, some of these locations represent offstage or out-of-character areas.  There might be a backstage player lounge or a welcome room.   Other locations represent onstage or in-character areas.

To see where you are in the game, type ‘look’.   This will show you the description of the room you’re in, along with any other characters in the room with you, and a list of exits leading to other rooms.   Here we can see we’re in the Welcome Room.

The letter in brackets next to the exit is the command we type to go that way.  So to leave the Welcome Room and enter the Offstage area, we would type “O”.

Notice how the room description changes when we move and more destinations become available to us.

Contrary to the name, a MUSH “room” doesn’t have to be just a single room.  It can represent any area of any size - from a closet to a planet.  You have to read the room description to find out what it represents.

## Going Onstage

Once you’ve gotten a character of your own and you’ve been approved to play, you’ll be able to venture onstage.   Here the rooms represent the actual in-character areas of the game.  In this example here, we’re on the Hangar Deck of the Battlestar Galactica.

When we see other people onstage, it’s assumed that they’re available to play with - just as an actor would be in-character on a theater stage.  There are exceptions, so it doesn’t hurt to ask first.  You could either page them or use the “OOC” command to make an out-of-character remark to the people in the room with you.

For example, we could type:  “ooc Would you like to play?”

## Roleplaying

Finally we get to the actual heart of the game - the roleplaying itself.  When two or more characters occupy the same room onstage and want to interact, they start a scene.  They each take turns writing a short paragraph of action and dialogue, and continue round-robin style until the scene is over.

There are a few commands to do this.  The two most common ones are emit and pose.  Both will show your character's actions and dialogue to the other players in the room.  The only difference is how it's formatted.

An emit is freeform.  You can put whatever text you want into it and it will be shown to the room exactly as you type it.   For example:  'emit A Raptor has just landed and Stirling strides down the ramp...'

A pose, on the other hand, tacks your character's name on the front automatically as a shortcut.  For example:  ':strides down the ramp of a recently-landed Raptor.'

It's the same basic information - just a slightly different syntax and formatting.


We’ll go over more of the ebb and flow of how a roleplay scene works in another segment of the tutorial.  For now, though, you know all the basic commands you need to play through the MUSH client.  That concludes this tutorial.  Thanks for listening.