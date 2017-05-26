---
title: Backing Up the Game
description:
layout: page
tags: 
- manage
- database
- backup
---

It's important to make backups of your game database and code.  There are many ways to do this, a few of which are discussed here.

## Performing Manual Backups

The Redis database already periodically dumps your database to a file on the server.  You can manually FTP that file, along with everything in your aresmush code directory, for a simple backup.

### Where's My Database File?

If you're using Digital Ocean, it will prompt you with the location of your dump file when you log into the [Server Shell](/install-ares/server-shell).  

For example, it will tell you:  `Data dir: /var/lib/redis/1234`   

If you're not using Digital Ocean, you probably installed redis yourself so hopefully you know where you installed it!

### Where's My Code?

If you followed the standard setup, it should be in `/home/ares/aresmush`.

## Digital Ocean Automatic Backups

If you are using a Digital Ocean droplet, you can use their [Automatic Backup](https://www.digitalocean.com/community/tutorials/digitalocean-backups-and-snapshots-explained) feature to create a weekly backup of your entire server.  This includes the database, the code - everything.  There is a modest fee for this service.

## Configuring Automatic Backups with S3

AresMUSH can automatically perform daily backups to Amazon's S3 storage service. 

> **Important:** Setting up anything with AWS can be tricky.  **AWS is not recommended for those without prior server admin experience.**  Make sure you're familiar with their cost tiers.  Most games will fit comfortably into their 'free tier', but you'll want to make sure you know what you're getting into.

### Setting up S3

To set up automatic backups, you'll need:

1. An account with Amazon Web Services.
2. An AWS S3 Bucket.  (which is like a folder to store your files)
3. An AWS access key.

You'll need to follow the Amazon tutorials, particularly [Getting Started With S3](http://docs.aws.amazon.com/AmazonS3/latest/gsg/AmazonS3Basics.html) and [Managing Access to S3](http://docs.aws.amazon.com/AmazonS3/latest/dev/intro-managing-access-s3-resources.html).

Once you have these three bits of information, see the web portal help file on "Configuring Backups" for what to do with them.

> **Important:** Even if you use S3 for other things, create a separate bucket just for your AresMUSH backups.  Ares will delete older files to make room for new backups, and you don't want it to accidentally delete anything important!
