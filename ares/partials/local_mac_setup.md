1. Install [Homebrew](https://brew.sh/), Mac's package manager.

2. Copy/paste the following commands into a Mac terminal.

        curl https://raw.githubusercontent.com/aresmush/aresmush/master/bin/local_setup_mac > setup_ares
        
        chmod +x setup_ares
        
        ./setup_ares

3. The install script will set up the command-line version of Git, but you probably also want to install [GitHub Desktop](https://desktop.github.com/).  Either one will work for Ares.

4. If you want the Redis database server to be running all the time, set it up as a Homebrew service using `brew services start redis`.  Otherwise you'll have to start it every time you want to use it by typing `redis-server /usr/local/etc/redis.conf`.

5. Clone the aresmush and ares-webportal code repositories to your local drive.  They must reside in adjacent directories (e.g. /home/Users/you/Code/aresmush and /home/Users/you/Code/ares-webportal).  See the [Editing Code](/tutorials/code/edit-code) tutorial for help.

6. From the aresmush directory, run `bin/configure` then `bin/wipedb` to set up the game.

7. Now you can start the game using `bin/devstart` in the aresmush directory and start the web portal using `bin/devportal` from the ares-webportal directory.   The development web portal runs on http://localhost:4200.