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

If you're using Digital Ocean, it will prompt you with the location of your dump file when you log into the [Server Shell](/tutorials/install/server-shell).  

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

> **Important:** Even if you use S3 for other things, create a separate bucket just for your AresMUSH backups.  Ares will delete older files to make room for new backups, and you don't want it to accidentally delete anything important!

### Configuring the Game to Use S3

Once you have an S3 account, you'll need to configure the game to use it.

1. Go to the Web Portal's Admin screen.  
2. Select Secret Codes.
3. Scroll down to 'AWS'.

You'll need your AWS access key, bucket name and the code for the region your bucket is in.  You can find the AWS region codes [here](http://docs.aws.amazon.com/general/latest/gr/rande.html#apigateway_region).

### Test the Backup

There are many moving parts in the backup process.  Once you have it all set up, we recommend that you test it once using the manual `dbbackup` command.  Make sure that the database file ends up in your S3 bucket successfully before relying on the automatic daily backups.

### Other Backup Preferences

There are a few other backup preferences you can configure.

1. Go to the Web Portal's Admin screen.  
2. Select 'Advanced Config'.
3. Select `manage.yml`.

#### Number of Backups

You can configure the number of backups the game keeps.  By default this is 5.  Older backups are automatically deleted.

#### Backup Cron Job

You can also configure when backups are done.  By default it's early morning, after peak MU* times.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/code/configuring-cron) for help if you want to change this.

#### Database File Path

If you performed a custom installation, you may also need to configure a different path for where the database dump file lives.  

1. Go to the Web Portal's Admin screen.  
2. Select 'Advanced Config'.
3. Select `database.yml`.
4. Enter the path to redis' dump file.