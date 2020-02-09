---
title: Database Relationships
description: 
layout: page
tags:
- code
- database
---

## Relationships - References, Sets and Collections

Although Redis is not a relational database like SQL, we still need to define _relationships_ between our objects. A mail message has an author and recipients (all characters), a scene is attached to a room, etc.  Ohm provides some built in concepts that let us manage these relationships.

### References

References reflect a single relationship between two objects: A vehicle has a single driver.  We can define a reference  and then use it like any other database property:

    class Vehicle < Ohm::Model
      reference :driver, "AresMUSH::Character"
    end
    
    in some command handler...
    vehicle.update(driver: some_char)
    client.emit "The driver is: #{vehicle.driver.name}."

{% tip %} 
You need to specify the class name that the reference refers to, including the full module name, e.g.  `AresMUSH::ModelClassName` .
{% endtip %}

{% tip %}
References may be nil if the object it's referring to has been deleted, so always check for that.
{% endtip %}


For a 1-to-1 relationship, we may want to define the relationship going the other way as well:

    class Character
      reference :vehicle, "AresMUSH::Vehicle"
    end
    
    in some command handler:
    some_char.update(vehicle: some_vehicle)
    some_vehicle.update(driver: some_char)
    client.emit "They are driving: #{some_char.vehicle.name}"

{% tip %}
Ohm does not keep these references in sync for you.  If you change someone's vehicle, you also need to change the vehicle's driver at the same time as shown above.
{% endtip %}


### Collections

Some references reflect a one-to-many relationship.  A character is in a single room, but a room can hold multiple characters.  Collections are the "many" side of the one-to-may relationship.  They always must be used in conjunction with a reference.

    class Character
       reference :room, "AresMUSH::Room"
    end
    
    class Room
       collection :characters, "AresMUSH::Character"
    end
    
    in some command handler...
    enactor.room.emit "Some message to the room."
    enacotr.room.characters.each { |c| ... }  # Do something for each character in the room

{% tip %}
Notice that the class names match the names of the reference and collection (Character-&gt;characters, Room-&gt;room). This is important if you want the database engine to automatically figure out the links.  If your names don't match, or you have multiple references to the same kind of object (for example, a mail message has both a recipient and an author who are both characters), you'll have to specify extra settings.  See the [Ohm](http://ohm.keyvalue.org/) documentation or ask for help.
{% endtip %}

### Sets

Sets are used when there is a many-to-many relationship between objects. A scene has a set of participants *and* a participant can be in many scenes. 

To define and use a set:

    class Scene
      set :participants, "AresMUSH::Character"
    end
    
    in some command handler...
    scene.participants.add some_char
    scene.participants.delete some_char
    client.emit "Participants: #{scene.participants.map { |p| p.name }.join(" ")}"