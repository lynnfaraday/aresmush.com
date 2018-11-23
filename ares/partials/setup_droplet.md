Before we start, a few things you should know:

* This assumes you've already installed your main game on the 'ares' user.
* This will set up the test game under an 'arestest' user.  It is not advisable to run two copies of the game on the same user.
* You start the test game on-demand; it is not running all the time.

1. Log into your server shell with the **ares user** and run the following commands to create a test user named 'arestest':

        curl https://raw.githubusercontent.com/aresmush/aresmush/master/bin/create_test_user > create_test_user  
    
        chmod +x create_test_user
    
        sudo ./create_test_user

2. Log out and then log back in with the new arestest user using the password printed on-screen in step 1.

3. **With the arestest user**, run the following commands to create a copy of the database configuration file and a place for your second database to live

        cp /etc/redis/redis.conf redis.conf
        mkdir redis
        chgrp redis redis
 
4. Edit the redis.conf file to make the following changes:

        - Change pidfile to "/home/arestest/redis/redis-server.pid"
        - Change logfile to "/home/arestest/redis/redis-server.log"
        - Change dir to "/home/arestest/redis"
        - Change port to something else, like 6380
        - Change demonize from true to false.

5. Run the following commands:

> <i class="fa fa-exclamation-triangle"></i> **Note:** 
> 1. Be super-sure you're running this with the **arestest** user.  
> 2. For configuring the game, you don't need a new host name.  You can just use the IP address of the droplet.  
> 3. Use different ports for everything, **especially** the database port.  This will initialize the database fresh, and you don't want to wipe out your main game's database.

        curl https://raw.githubusercontent.com/aresmush/aresmush/master/bin/setup_test_game > setup_test_game  
    
        chmod +x setup_test_game
    
        sudo ./setup_test_game

        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 

The game will not be running 24/7 like your main game.  When you want to start it, you'll need to open three separate terminal shells and do:

        First shell:  
          redis-server /home/arestest/redis.conf
        
        Second shell, from the aresmush directory:  
          bin/devstart
        
        Third shell, from the ares-webportal directory:
          bin/devportal