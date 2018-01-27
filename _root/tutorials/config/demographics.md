---
toc: ~config~ Configuring the Plugins
title: Configuring demographics.
---
# Configuring the Demographics Plugin

To configure the Demographics plugin:

1. Go to the Web Portal's Admin screen.  
2. Select Advanced Config.
3. Edit `demographics.yml`

## min_age and max_age

You can enforce minimum and maximum age limits in chargen with the `min_age` and `min_age` values.

If you don't want a limit, just set them to 0 and 99 respectively.

## demographics

You are able to specify all of the demographics you're going to use.  

> **Tip:** Use all-lowercase names!  These are going to be converted into code variables, and lowercase is important.
 
### required_properties

Any demographics you list in `required_properties` are mandatory in chargen.  

> **Tip:** The names here must exactly match the names in the demographics list.

### editable_properties

Any demographics you list in `editable_properties` may be changed after chargen.  You want to allow mutable things like hair color to change, but probably not birthdate or eye color.

> **Tip:** The names here must exactly match the names in the demographics list.

## groups

The groups list is where you set up your game's groups.  Each group has a description and a list of possible values.  Each value has a name and a description.

If you omit the values, the group will be freeform, allowing the player to specify any value they want.  This is commonly used for Position if you don't have a fixed list of available positions but still want Position to show up in census and whatnot like the other groups.

    groups:
        Faction:
            desc: "Military faction."
            values:
                Navy: "Join the fleet, see the worlds."
                Marines: "Semper fi."



