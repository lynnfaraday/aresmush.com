If you're using [http://mongolab.com MongoLab], you can pay them a modest fee (about 50 cents per backup) to do the backups for you.  With one click, you can restore an old backup.  This is by far the easiest option.

If you want to save a few pennies, you can [http://docs.mongodb.org/manual/installation/ install the Mongo shell] on your local PC and use the //mongodump// tool for your MongoLab instance.  Here are [http://docs.mongolab.com/backups/#dump-and-restore instructions] for doing a dump and restore.

If you're hosting your own Mongo instance, you can use the same //mongodump// command line tool, but you don't have to install it locally.  You can use it on the server shell.