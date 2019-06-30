---
title: Database Indices
description: 
layout: page
tags:
- code
- database
---

## Index Fields

Ohm lets you define an index field to make queries faster.  For example, the Character class defines `name_upcase` as an index, because we quite frequently look up characters by name.

Defining an index lets you use the built-in Ohm `find` method on that field.  For example: `Character.find(name_upcase: "BOB")`.

If you try to use `find` on a field that isn't indexed, you'll get a `Ohm::IndexNotFound` error.

{% tip %} 
Most Ares fields are _not_ indexed for various reasons, but you can always do a regular Ruby select.  For example:  `Character.all.select { |c| c.some_field == 'some_value' }`.
{% endtip %}

### Collection Indices

Collections do some auto-magic indexing for you, so you can also get the `Ohm::IndexNotFound` error when the name of the collection and reference don't match.  For example:

    class Photo < Ohm::Model
      reference :photo_album, "PhotoAlbum"
    end
    
    class PhotoAlbum < Ohm::Model
      collection :photos, "Photo"
    end

The reference above needs to be named `photo_album` for the auto-indexing to work right, because that matches the name of the other class (PhotoAlbum).  If you just name it `album`, you'll get the index error.