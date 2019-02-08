require 'fileutils'

plugins_dir = "/Users/lynn/Code/aresmush/game/plugins/"

files = Dir["#{plugins_dir}**/README.md"]

files.each do |f|
   name = f.gsub("/README.md", "")
   splits = name.split("/")
   plugin = splits[-1]
   cmd = "cp \"#{f}\" \"_root/plugins/#{plugin}.md\""
   `#{cmd}`

   puts "* [#{plugin.capitalize}](/plugins/#{plugin})"
end