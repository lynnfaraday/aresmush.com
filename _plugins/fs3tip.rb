module Jekyll
  class RenderFs3tipBlock < Liquid::Block

    def render(context)
      text = super
      return "<div markdown='span' class='alert alert-success' role='alert'><i class=\"fas fa-cubes\"></i> <b>Tip</b><br/>#{text}</div>"
    end

  end
end

Liquid::Template.register_tag('fs3tip', Jekyll::RenderFs3tipBlock)