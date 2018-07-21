1. Install [Oracle VirtualBox](https://www.virtualbox.org/).
2. Follow the VirtualBox instructions to create a guest VM using Ubuntu Linux.
3. Follow the VirtualBox instructions to set up a "host-only network adapter" so you can connect to the VM from your host PC.
4. Install Ares on the VM.  

> <i class="fa fa-info-circle"></i> **Tip:** The default install scripts will work for the most part, but may require some environment-specific tweaks.  In particular, the `setup_server` script should be run in a root shell (`sudo -s`) because VMs, unlike droplets, don't come with a root user enabled by default.