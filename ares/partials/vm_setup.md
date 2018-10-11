
#### Setup the VM

1. Download and install [Oracle VirtualBox](https://www.virtualbox.org/).
2. Install the VirtualBox Extension Pack (available from the same downloads page as VirtualBox itself).
3. Create a VM in VirtualBox.  Use the following options:
  * type: Linux
  * version: Ubuntu
  * memory: 512MB
  * hard disk: 10GB virtual memory hard disk (VirtualBox Disk Image, fixed size)
4. Download the Ubuntu **Server Install Image**.  The current version is [here](http://releases.ubuntu.com/18.04/ubuntu-18.04.1-live-server-amd64.iso), but this may change over time.
5. Start the VM.
6. When asked for the startup disk, browse to and select the Ubuntu ISO image you downloaded.
7. Run through the Ubuntu setup using the default options.  Create an ares user and save its password.
8. The VM will reboot when finished.
9. When the VM restarts, log in.
10. Type `ifconfig`.  This will tell you the VM's **Private IP Address**.
{{#pretty-image}}/assets/media/ifconfig.png{{/pretty-image}}
11. Go to Devices -> Network -> Network Settings -> Adapter1 -> Advanced and select Port Forwarding.
12. Create ports to forward from localhost (127.0.0.1) to the VM's Private IP for ports: 22, 4200, 4201, 4202 and 4203.  This is going to let your local PC connect to the VM.
{{#pretty-image}}/assets/media/port-forwarding.png{{/pretty-image}}
13. Now you should be able to connect to the VM using a SSH client like PuTTY ([Windows](http://www.putty.org/) / [Mac](https://www.ssh.com/ssh/putty/mac/)) by connecting to localhost port 22.  (Say yes to the security key message.)
14. Using SSH, run the `setup_server` script as described in the [install instructions](/tutorials/install/setup-server/).
15. Then run the `install` script as described in the [install instructions](/tutorials/install/install-game/).  Use the following options:
  * host: Use the VM's Private IP from above.
  * ports: Use defaults for all ports.
16. Shutdown the VM by doing File -> Power Off.

#### Using the VM

Your VM is now ready to use.  You can leave it powered off whenever you're not using it.  Here are the steps to start the game:

1. Open VirtualBox and start the VM.
2. Open a SSH client shell and start the game in development mode:
    cd aresmush
    bin/devstart
2. Open another SSH client shell and start the web portal in development mode:
    cd ares-webportal
    bin/devportal
3. From your PC, you should now be able to connect to the game using 127.0.0.1 port 4201, and to the web portal using http://localhost:4200.

To change the code on the VM, you can use any of the methods described in the [Editing Code](/tutorials/code/edit-code/) tutorial.  You can edit code directly through the SSH client, upload new code via FTP (the VM will accept SFTP on 127.0.0.1) or use GitHub to push code to the cloud and then pull it down to the server.