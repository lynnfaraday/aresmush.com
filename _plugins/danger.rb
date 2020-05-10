module Jekyll
  class RenderDangerBlock < Liquid::Block

    def render(context)
      text = super
      return "<div markdown='span' class='alert alert-danger' role='alert'><i class='fa fa-exclamation-circle'></i> <b>Warning</b><br/>#{text}</div>"
    end

  end
end

Liquid::Template.register_tag('danger', Jekyll::RenderDangerBlock)