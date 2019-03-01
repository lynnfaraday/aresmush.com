module Jekyll
  class RenderWarningBlock < Liquid::Block

    def render(context)
      text = super
      return "<div markdown='span' class='alert alert-warning' role='alert'><i class='fa fa-exclamation-circle'></i> <b>Warning</b><br/>#{text}</div>"
    end

  end
end

Liquid::Template.register_tag('warning', Jekyll::RenderWarningBlock)