
> <i class="fa fa-exclamation-triangle"></i> **Note:**   Ares hasn't really been tested on Windows.  It _should_ work, but please provide [feedback](/feedback) if you run into any issues.
 
1. Install [Chocolatey](https://chocolatey.org/), a package manager for Windows.

2. Copy/paste the following commands into a Powershell window with administrator access.

        (New-Object System.Net.WebClient).DownloadString("https://raw.githubusercontent.com/aresmush/aresmush/master/bin/local_setup_windows") > setup_ares.ps1
        
        ./setup_ares.ps1

The install script sets up both the command-line version of Git and [GitHub Desktop](https://desktop.github.com/).  Either will work with Ares.

> <i class="fa fa-exclamation-triangle"></i> **Note:**   It's not clear whether Chocolatey installs Redis as a Windows service by default (which means it's always on) or whether you have to start it manually by typing `redis-server` in a powershell prompt.  Stay tuned.