---
title: MUSH 101 - Telling Your Story
description:
layout: tutorial
tutorialName: MUSH 101
mush101Tutorial: true
tutorialIndex: mush-101
prevstep: connecting-and-commo
nextstep: mu-glossary
tags: 
- roleplay
- plots
---

In this part of the MUSH 101 tutorial, we will cover how to create a character and start telling stories.

## Joining the Cast

So far we've used a guest character to log in and chat with people.  But to play the game fully, you'll need a character of your own.  First, you'll need a name.  MUSH character names are usually the character's first name, but sometimes people use a last name or a nickname.  Be consistent with the game's setting (e.g. don't be Lancelot on a zombie game or Bob in a fantasy one) and avoid picking names that come directly from books and movies (e.g. no Skywalkers).

{{#pretty-image}}/assets/media/postpics/genre-mixup.jpg{{/pretty-image}}
<div class="caption">Some themes just don't go together.</div>

Once you've got your name in mind, make your character using these steps:


1. Quit the game by clicking 'disconnect' in your MUSH client.
2. Click 'reconnect' to connect again.  
3. Instead of connecting to an existing character this time, type `create <name> <password>` to make a new one.

Congratulations – you have your very first MUSH character!

## Chargen

Many games require you to flesh out your character in a process called Character Generation (Chargen for short).  You'll often choose some **Skills** to quantify what your character is good at, write a **Description** so other players know what they look like, and possibly even a short **Background Profile** (like a mini biography).  These details will be reviewed by the game's administrators to make sure that the character is a good fit for the game.  Once you're reviewed and approved, you'll be able to play.

## Stories of All Shapes and Sizes

A MUSH will have plots of different shapes and sizes, just like a TV show.

There will be **major plots**, which stretch out for longer periods of time and involve large numbers of players.  On a zombie MUSH, you might have a plotline where the characters try to develop a zombie vaccine. 

Individual players will have **minor plots**.  These will often be short (sometimes no more than a scene or two) and involve fewer players.   On a zombie MUSH, you might have a plotline where a few people go out to hunt for food.

A lot of scenes are just **fluff**, filling the time between plotlines.  Fluff scenes usually involve one-off social encounters – drinks at the bar, a chat in the park, etc.  These may not be the most thrilling scenes in the world, but they're important.   If you want to do a plotline where your character has to deal with their long lost father returning to town, nobody's going to care unless you've first spent time building up connections with other characters.   

{{#pretty-image}}/assets/media/postpics/bar-scene.jpg{{/pretty-image}}
<div class="caption">Bars are popular hangouts on MUSHes, just like in real life.</div>

## Starting a Scene

The primary storytelling element on a MUSH is the scene.  It's just like a scene in a novel or a TV show – a snapshot of the characters' lives.   There are several steps toward making a scene a successful.

### Organize

It takes at least two people to play a scene, so you'll need to coordinate with someone else.   The easiest way to do this is simply to ask on the public chat system.  

    <Chat> Faraday says, "Anybody up for a scene?"
    <Chat> Jo says,  "Sure.  What did you have in mind?"

> Don't be offended or discouraged if the answer at any particular moment is 'no'.  It's like any social activity – sometimes people are busy doing other things or just not in the mood.

Figuring out what to play can be the hardest part.  Sometimes it will be obvious, like if your character is injured and the other character is a doctor.    Other times it can feel like the lead-in to a bad joke:  "So a schoolteacher, an outlaw and a barber walk into a bar…" Be creative!  Sometimes the best scenes come from the most random collection of characters.

{{#pretty-image}}/assets/media/postpics/bar-joke.jpg{{/pretty-image}}
<div class="caption">Image by Maury Aaseng</div>

### Pick a Location

A MUSH has an entire virtual world available.  Where is your scene going to be set?  The hospital?  The bar?  The woods outside of town? 

The easiest scene to do on any MUSH is a 'meet and greet' at a public place, like a bar, a park, or the town square.  Once you get familiar with a MUSH, you'll learn where the popular hangouts are.   When you're new, don't be afraid to ask.

Most games have a 'meetme' command that will help you get to a place where other players are - you just need to ask for a lift.  Sometimes you have to use virtual walk commands to move from one location to another until you find the place you want to play.

### Set the Scene

Once you've gotten the characters together, the next step is for someone to **set the scene** by writing a paragraph to establish a few key things:

* What time of day is it?
* What's the weather like?
* Who's here?
* Where are they?
* What are they doing?

That can seem like a lot, but it can be distilled into a simple paragraph.  Here's an example (from a Battlestar Galactica game, incidentally):

> The sun is just starting to go down, painting the sky all sorts of pretty colors over the spaceport. Cate is sitting on the grass near the edge of the runway, leaning back on her arms. She idly watches the ground crews working on the aircraft in the distance.  Wires run from earbuds to a small music player clipped to a belt loop.

To write a scene set, you use the emit command  (`@emit <message>` or `emit <message>` depending on the game).  Emits are only shown to players in your room. 

### Strike a Pose 

After the first person sets the scene, everyone takes turns writing a paragraph in round-robin fashion.   These are called **poses**.  (The name comes from the idea of 'striking a pose' with your character.)

Your pose should include:

* Your character's speech and actions.
* Your character's thoughts (within reason – see below).
* A 'hook' for the other player(s) to respond to.

Here is an example continuing the scene after the set in the previous paragraph:

> The rumble of an engine punctuates whatever Cate is listening to from her music player, though it's far closer than the distant aircraft engines. A black motorcycle is skirting the edge of the runway, it's matte finish beat to hell and back and looking as if it were pieced together from a chop shop rather than a showroom. The rider is motoring along sans helmet, Ari dropping the throttle to let the machine coast the last few feet until he has to put a foot down to keep his balance. He drops the kickstand and kills the engine, dismounting with a swing of his leg. He comes out here for privacy, and yet here is someone else encroaching on his make believe territory. Angling himself into her sight line, he gives Cate a single twitch of his hand in a wave.
>
> A perplexed expression creases Cate's brow when she hears the motorcycle, which turns to one of mild surprise when Cole drives up. She raises a hand briefly to return the wave, then pulls the earbuds out. "And he has a motorcycle too," she comments lightly. "You're really working the 'bad boy' image there. Hi," she adds, as almost an afterthought.

{{#pretty-image}}/assets/media/postpics/ari-motorcycle.jpg{{/pretty-image}}
<div class="caption">We imagine Adam Levine "playing" Ari in our dream cast.  Did I mention MUSHes were fantasy?</div>

You can write your poses using the same `emit` command you used for the scene set.  There's also a pose command that puts your character's name in front of what you type:  `:<message>` -   For example, `:waves.` will pose  "Cate waves."

A few tips about posing:

* Always include your character's name in your pose somewhere, so it's clear who is doing what. 
* Posing is like a tennis match.  You always want to serve the other person something they can hit back.
* It's okay to give some insight into your character's thoughts, but don't go overboard.  Nobody wants to read an entire paragraph of inner monologue.
* Remember that the other players are waiting for you to pose.  Don't write a novel.
* Don't pose other peoples' actions or assume anything about their reaction; always give them a chance to respond.

Once you've gotten the basics down, I highly recommend reading the article [Give Your Roleplay Sparkle](/articles/give-your-rp-sparkle), an amazing tutorial that's all about making your poses engaging and memorable.

### Yelling 'Cut'

Whether a scene has reached its natural conclusion, or it must be cut short due to pesky thing called real life, all good scenes must come to an end.  Here's how that motorcycle scene ended, after a little chat by the runway.

> Cate smiles a little, "I'll see you," she yells back over the motor. She watches him drive away for a few moments before tucking the earbuds back in her ears and returning to her chilling out.  
