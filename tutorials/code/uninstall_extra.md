---
title: Uninstalling an Extra
description: 
layout: page
tags:
- code
- extras
---


```
module AresMUSH

  # Add the attributes you need to clear.
  class Character
    
    attribute :fate_stunts
    attribute :fate_aspects
    attribute :fate_points
    attribute :fate_refresh
  end
    
  module Tinker
    class TinkerCmd
      include CommandHandler
      
      def check_can_manage
        return t('dispatcher.not_allowed') if !enactor.has_permission?("tinker")
        return nil
      end
      
      def handle
  
        # Clear all the fields.
        Character.all.each do |c|
          c.update(fate_stunts: nil)
          c.update(fate_aspects: nil)
          c.update(fate_points: nil)
          c.update(fate_refresh: nil)
          c.update(fate_skills: nil)
        end
        
        client.emit_success "Done!"
      end

    end
  end
end
```