---
title: Custom Character Scene Cards
description: 
layout: page
tags:
- code
- custom hooks
---

> This [custom code hook](/tutorials/code/custom-hooks.html) is part of the Scenes plugin.

Character cards are mini-profiles that are shown when you click on a character's icon next to their pose.  You can design your own custom character cards with custom code.  There are three steps to this:

1. Set `use_custom_char_cards` to true in the scenes configuration.
2. Implement the web template for your card display in `ares-webportal/app/templates/components/char-card-custom.hbs`.
3. If you need extra data beyond what's already provided, implement custom fields in the `custom_char_card_fields` method of `aresmush/plugins/scenes/custom_char_card.rb`

For example, say we wanted to show traits.  In the custom fields you could set the traits:

    def self.custom_char_card_fields(char, viewer)
      {
         traits: char.traits.map { |k, v| { name: k, description: v } }
      }
    end

And then in the web template here's a simple display.

<pre>
    &#x7b;&#x7b;#each char.custom.traits as |trait|}}
    &lt;p>&lt;b>&#x7b;&#x7b;trait.name}}:</b> &#x7b;&#x7b;trait.description}}&lt;/p>
    &#x7b;&#x7b;/each}}
</pre>

{% note %} 
Your custom fields will be under `char.custom`.  You can also use any of the basic fields.  Use the `char-card.hbs` for reference.
{% endnote %}
