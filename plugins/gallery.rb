module Ruhoh::Base
  module PageViewable

    def gallery_photos
      data['gallery_photos']
    end
    
    def gallery2
      data['gallery2']
    end
    
    def image
      data['image']
    end
  end
  
end

puts "Gallery Loaded"

module Ruhoh::Views
  module Helpers ; end
  class MasterView
    
    # Use the full URL
    # {{#pretty_image}}{{urls.production_url}}{{urls.media}}/postpics/lets-go-bucs2.jpg{{/pretty_image}}    
    def pretty_image(sub_context)
      "<a href=\"#{sub_context}\"><img src=\"#{sub_context}\" class=\"prettyImage-image\"/></a>"
    end
    
    # Use the first part of the URL - it appends _b.jpg to it.
    # {{#flickr_image}}https://farm6.staticflickr.com/5577/14733266571_f0e6bef31d{{/flickr_image}}
    def flickr_image(sub_context)
      "<a href=\"#{sub_context}_b.jpg\"><img src=\"#{sub_context}.jpg\" class=\"prettyImage-image\"/></a>"
    end
  end
end
