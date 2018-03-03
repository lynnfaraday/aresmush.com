---
title: Backing Up the Game
description:
layout: page
tags: 
- manage
- database
- backup
---

It's important to make backups of your game database and files.  There are many ways to do this, a few of which are discussed here.  

## What Do I Need to Back Up?

Here are the things that you need to back up in order to protect your game from disaster:

### The Database

The Redis database periodically dumps your database to a file on the server.  If you used the standard install scripts on Digital Ocean, your database file should be located in `/var/lib/redis/dump.rdb`.   Otherwise, you probably installed redis yourself so hopefully you know where you installed it!

### Game Files

Everything in your `aresmush/game` directory is custom for your game.  This includes your connect screen, configuration files, and Web Portal file uploads.

> **Important:** Ares' automated backup tools do not include source code.  It's assumed that you're either using [GitHub](/tutorials/code/git) (which is an awesome way to protect your code that provides other benefits too) or that you're making changes on your local computer and uploading them through FTP.  Making code changes directly through the server shell without version control is not advisable.  If you choose to do so, you'll need to decide on your own backup strategy.

## Backup Options

The next few sections will give you different options for backing up your game, listed in order from **most reliable** to least reliable.

### Option 1: Digital Ocean Automatic Backups

If you are using a Digital Ocean droplet, you can use their [Automatic Backup](https://www.digitalocean.com/community/tutorials/an-introduction-to-digitalocean-backups) feature to create a weekly backup of your entire server.  This includes the database, the code, the server config - everything.  

This is the most robust form of backup strategy, but it costs a little extra.  As of 2/18, automated weekly backups of the standard Ares droplet size cost $1/month.

### Option 2: Configuring Automatic Backups with S3

AresMUSH can automatically perform daily backups to Amazon's S3 storage service for a safe, off-site storage solution. 

> **Important:** AWS is a great backup option, but AWS' menu options can be overwhelming for novice server admins.  Make sure you're familiar with their cost tiers.  Most games **should** fit comfortably into their 'free tier' and cost you nothing; however, it's your responsibility to understand their pricing tiers and know what you're signing up for.

#### Setting up S3

To set up automatic backups, you'll need:

1. An account with Amazon Web Services.
2. An AWS S3 Bucket.  (which is like a folder to store your files)
3. An AWS access key.

You'll need to follow the Amazon tutorials, particularly [Getting Started With S3](http://docs.aws.amazon.com/AmazonS3/latest/gsg/AmazonS3Basics.html) and [Managing Access to S3](http://docs.aws.amazon.com/AmazonS3/latest/dev/intro-managing-access-s3-resources.html).

> **Important:** Even if you use S3 for other things, create a separate bucket just for your AresMUSH backups.  Ares will delete older files to make room for new backups, and you don't want it to accidentally delete anything important!

#### Configuring the Game to Use S3

Once you have an S3 account, you'll need to configure the game to use it.

1. Go to the Web Portal's Admin screen.  
2. Select 'Setup'.
3. Select 'secrets.yml'.

Enter your AWS access key, bucket name and the code for the region your bucket is in into the AWS section.  You can find the AWS region codes [here](http://docs.aws.amazon.com/general/latest/gr/rande.html#apigateway_region).

#### Test the Backup

There are many moving parts in the AWS backup process.  Once you have it all set up, we recommend that you test it once using the manual `dbbackup` command.  Make sure that the database file ends up in your S3 bucket successfully before relying on the automatic daily backups.

### Option 3: Automated Local Backups

AresMUSH will periodically back up your database and game directory to the local server.  This isn't a great backup strategy (since your backups will be toast if anything happens to the server itself) but it's better than nothing.  Edit the backup type (explained below) to 'local' to enable automated local backups.

Backups are stored in your `aresmush/backups` directory.

### Option 4: Manual FTP

You can manually FTP the database dump file and game files to your local hard drive for a simple backup.  The catch is you need to remember to do this periodically!


## General Backup Configuration

For the automated backup strategies (local or AWS), there are a few things you'll want to configure.

1. Go to the Web Portal's Admin screen.  
2. Select 'Setup'.
3. Select `backup.yml`.

#### Backup Type

Set the backup type to 'aws' for AWS backups and 'local' for local backups.

#### Number of Backups

You can configure the number of backups the game keeps.  By default this is 5.  Older backups are automatically deleted.

#### Backup Cron Job

You can configure when backups are done.  By default it's early morning, after peak MU* times.  See the [Cron Job Tutorial](http://www.aresmush.com/tutorials/config/cron) for help if you want to change this.

#### Database File Location

If you used the standard install scripts, the game should already be configured with the proper database file location.  But if you performed a custom installation, you'll need to tell the game where the database file is.

1. Go to the Web Portal's Admin screen.  
2. Select 'Setup'.
3. Select `database.yml`.
4. Enter the path to redis' dump file.



## Restoring Backups

In the event you need to restore a backup, see [Restoring Backups](/tutorials/manage/restore-db).