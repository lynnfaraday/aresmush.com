TODO!  Coming soon.



The plugins talk to each other through database fields and interface methods (api's).

For example, the Scenes plugin provides the interface method `Scenes.add_to_scene()`, which is used by various utilities (like skills and combat) to add system messages to a scene.   The Ranks plugin provides a database model so you can do `character.rank`.

If you want to eradicate a plugin completely, you'd need to hunt through the code hunting down all references to its models and interfaces.  You'd also have to remove the fields from the database itself.
