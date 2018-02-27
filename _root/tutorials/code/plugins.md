TODO!  Coming soon.


Directory Organization
Each plugin has its own directory inside the game/plugins directory. The name of the directory is the name of the plugin.

Plugin names ultimately become code names, and may not contain spaces or special characters.

The Hello MUSH plugin was extremely simple (only 4 files) so there wasn't really a need to worry about organization within the plugin. But most of the existing plugins are more complicated and follow a consistent directory organization to help you find things:

config - Config files go here, named config_<plugin>.yml, help_<plugin>.yml and shortcuts_<plugin>.yml
help - Help files go here. There need to be sub-directories for each language, with "en" being English.
interfaces - Code that is used by other plugins goes here. See Understanding Interfaces.
lib - Most of the code files go here.
locales - Translation files go here. You probably don't need to worry about this unless you're designing for international audiences.
templates - Customizable Template files go here.
template_helpers - Code that drives the templates goes here. See Advanced Templates.
Plugin Modules
All plugin code starts with module statements to keep the code organized:

module AresMUSH
   module <Your Module Name>
   end
end
The first module statement makes you part of the AresMUSH family and gives you access to all of the other Ares methods. The second one keeps your code separate from the other Ares code.

It is super important that the name you use in your "module" statement match your plugin's folder name. (case is ignored though so usually the module name will be uppercase and the folder lowercase).

Plugin Class
All commands need to be in their own class, and that class needs to include the Plugin base.

module AresMUSH
   module <Your Module Name>
      class <Class Name>
         include Plugin
      end
   end
end
Plugin Methods
By including the Plugin base module, you're importing a bunch of built-in methods that help you define the behavior of your command.

want_command?(client, cmd)
This method tells the command dispatcher whether you're interested in a particular command. Returns 'true' or 'false'.

def want_command?(client, cmd)
   # Wants the mail/new command
   cmd.root_is?("mail") && cmd.switch_is?("new")
end
crack!
Cracks open the command string to figure out the arguments, usually putting them into class variables (aka attributes). See Commands for more info.

attr_accessor :value
def crack!
   self.value = cmd.args
end
handle
The handle method is where the 'guts' of your command go. 99% of handle methods will end with an emit to the client.

def handle
   # Do something, then...
   client.emit_success "Something is done."
end
You should avoid multiple emits in a single handle method because it's inefficient. It's better to build up a single string and emit it all at once.

log_command
This method is optional. If you leave it out, Ares will automatically log your command for Troubleshooting purposes. You may wish to override the auto-logging in special cases, to log just general information about a command - or perhaps nothing at all.

Ares overrides and disables logging of commands that include passwords, poses, mail, pages and channel chat for privacy reasons. A local game admin obviously has access to the source code and can un-disable this, but the base Ares configuration does not spy on you.

Shared Plugin Methods
You might find yourself doing the same thing across multiple commands within your plugin. In this case, you'll probably want to create a shared method to avoid duplicating code.

A shared method doesn't live in any individual command class; instead it lives in the plugin's module. For example:

module AresMUSH
  module Bbs
    def self.can_manage_bbs?(actor)
      return actor.has_any_role?(Global.config["bbs"]["roles"]["can_manage_bbs"])
    end
  end
end
You access shared methods using the module name.

Bbs.can_manage_bbs?(client.char)
In the built-in plugins, shared methods will be found in game/plugins/<plugin name>/lib/shared.rb.


The plugins talk to each other through database fields and interface methods (api's).

For example, the Scenes plugin provides the interface method `Scenes.add_to_scene()`, which is used by various utilities (like skills and combat) to add system messages to a scene.   The Ranks plugin provides a database model so you can do `character.rank`.

If you want to eradicate a plugin completely, you'd need to hunt through the code hunting down all references to its models and interfaces.  You'd also have to remove the fields from the database itself.


Although the plugins are designed to be plug-and-play, some of them do depend on one another. Interfaces are the way that plugins talk to one another. If you unplug one of them, or drastically change the shape of its plug, you need to check to make sure you haven't messed up any of the things that depend on it.

All interface methods should be placed into the interfaces directory of the plugin. For example, the Mail plugin defines an interface for sending mail:

module Mail
    def self.send_mail(names, subject, body, client)
    end
end
You can implement an entirely different mail system, and everything would be fine as long as you still provided that same interface. If you do change (or delete) the interface, you would need to search through the code for anywhere that used "Mail.send_mail" and update those places too.