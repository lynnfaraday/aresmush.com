---
tags:
- config
title: Configuring the Who/Where System.
---

# Configuring the Who/Where System

To configure the Who/Where plugin:

1. Select Admin -> Setup.
2. Edit `who.yml`

## who_fields

You can configure which fields are shown in columns on the who list.  For each field, you can specify the field name, the column width, the column title, and sometimes a value to control the specifics.  For example, this config makes two columns (25 wide and 15 wide) showing name and position.

    - field: name
      width: 25
      title: Name
    - field: group
      value: position
      width: 15
      title: Position

The following fields are available by default.

* name
* group  (value required to specify which group - e.g. faction, position, department)
* demographic (value reuquired to specify which demographic - e.g. fullname, callsign)
* status (colored IC/OOC status)
* connected (time connected - e.g. 2h)
* idle (time idle - e.g. 8s)
* rank
* room (current room name)
* handle (character handle, if available)

You can also create your own fields by creating methods in the [template renderer](/tutorials/code/templates) `aresmush/plugins/who/char_who_fields.rb`.

    def my_field(char)
      "Some value"
    end

## where_style

The 'where' command comes with three pre-defined styles.

### scene

The default style, 'scene', emphasizes open scenes by highlighting them at the top.  Other people are then shown below.

    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
                                   Ares Local Test                                
    -----[ Open Scenes ]----------------------------------------------------------
    #938  My House                      Cate, Hannah
    
    -----[ Other ]----------------------------------------------------------------
          Canceron - Jungle             Faraday
    ------------------------------------------------------------------------------
            3 Online                    3 IC                    4 Record         
    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+

### room

If you don't want to highlight scenes, the 'room' display will simply group people by room.

    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
                                   Ares Local Test                                
    ------------------------------------------------------------------------------
    Location                            People
    A1 - My House                       Cate, Hannah
    Canceron - Jungle                   Faraday
    ------------------------------------------------------------------------------
            3 Online                    3 IC                    4 Record         
    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+

### basic

The basic display mirrors 'who' by showing each person on their own line.

    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
                                   Ares Local Test                                
    ------------------------------------------------------------------------------
    Status Name                   Location                            Conn   Idle
    NEW    Hannah                 A1 - My House                       14s    3s
    ADM    Faraday                Canceron - Jungle                   1h     0s
    OOC    Cate                   Offstage - Offstage                 20s    12s
    ------------------------------------------------------------------------------
            3 Online                    2 IC                    4 Record         
    +==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
