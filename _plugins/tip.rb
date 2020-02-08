module Jekyll
  class RenderTipBlock < Liquid::Block

    def render(context)
      text = super
      return "<div markdown='span' class='alert alert-success' role='alert'><i class=\"fas fa-check-square\"></i> <b>Tip</b><br/>#{text}</div>"
    end

  end
end

Liquid::Template.register_tag('tip', Jekyll::RenderTipBlock)