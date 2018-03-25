1. Install [Homebrew](https://brew.sh/), Mac's package manager.

2. Copy/paste the following commands into a Mac terminal.

        curl https://raw.githubusercontent.com/aresmush/aresmush/master/bin/local_setup_mac > setup_ares
        
        chmod +x setup_ares
        
        ./setup_ares

3. The install script will set up the command-line version of Git, but you probably also want to install [GitHub Desktop](https://desktop.github.com/).  Either one will work for Ares.

4. If you want the Redis database server to be running all the time, set it up as a Homebrew service using `brew services start redis`.  Otherwise you'll have to start it every time you want to use it by typing `redis-server /usr/local/etc/redis.conf`.