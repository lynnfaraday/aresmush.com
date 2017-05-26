### Creating an AWS Account

To use the automatic backups, you must first create an AWS account.  AWS is free below certain limits, and very reasonably priced thereafter.  Most MU*s will fit nicely within their free tier, but you should review the pricing information to be sure.  AresMUSH developers are not responsible for unforseen charges.

To create an AWS account:

1. Go to [Amazon Web Services](https://aws.amazon.com/).
2. Create an account.

### Creating a Backup User

For security reasons, you really don't want to give the game access to your AWS account.  You want to make a user that only has access to read and write files in your backup "bucket" (which is like a folder in AWS).

To create a backup user:

1. Sign into the [AWS console](https://console.aws.amazon.com).
2. Find 'IAM' on the dashboard, or visit https://console.aws.amazon.com/iam.
3. Click 'Users'.
4. Click 'Add User'.
5. Give them a username (e.g. 'backup') and choose **Programmatic Access**.
6. Click next a few times.  You'll get a warning that the user has no permissions.  That's OK.
7. Click 'Create User' to finalize everything.

At this point, you'll see a screen containing an **Access Key ID** and a **Secret Access Key**, both of which will be a random string of letters and numbers.  You may need to click "Show" to see the secret key.

Keep the key and ID in a safe place.  You'll need them in a minute.

You'll be taken back to the users list.  Click on the user you just created and look for its **User ARN**, something like `arn:aws:iam::12345:user/backup`.  You'll also need this in a minute.

### Creating an S3 Bucket

S3 is Amazon's simple cloud storage service. A "bucket" in S3 is just a place to store files - like a folder.  For security and to avoid accidentally messing with other files, you'll want to create a separate bucket just for your AresMUSH backups.

To create a S3 bucket:

1. Sign into the [AWS console](https://console.aws.amazon.com).
2. Find 'S3' on the dashboard, or visit https://console.aws.amazon.com/s3/.
3. Click 'Create a bucket'.
4. Enter a bucket name, like 'mygame-backup'.  Bucket names must be unique across all AWS users (like usernames).
5. Select a region close to your game server.
6. Click 'Next' a few times until you get to 'Create Bucket'.

Your bucket now exists.  Now we need to let your backup user access it.  Remember, our backup user was created with no special permissions.

1. Click on the bucket you just created.
2. Click 'Permissions'.
3. Click 'Bucket Policy'.
4. Enter the policy and click 'Save'.

The policy you need is below.  Edit the text below to replace YOURBUCKET with your bucket name and BACKUPUSER with the User ARN (remember - something like `arn:aws:iam::12345:user/backup`) of the backup user you created.

> **Note!** There are two places where you need to put the user and the bucket name.

    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Principal": {
                    "AWS": [
                        "%xrBACKUPUSER%xn"
                    ]
                },
                "Action": [
                    "s3:DeleteObject",
                    "s3:GetObject",
                    "s3:PutObject"
                ],
                "Resource": "arn:aws:s3:::%xrYOURBUCKET%xn/*"
            },
            {
                "Effect": "Allow",
                "Principal": {
                    "AWS": [
                        "%xrBACKUPUSER%xn",
                    ]
                },
                "Action": "s3:ListBucket",
                "Resource": "arn:aws:s3:::%xrYOURBUCKET%xn"
            }
        ]
    }

