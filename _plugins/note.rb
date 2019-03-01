module Jekyll
  class RenderNoteBlock < Liquid::Block

    def render(context)
      text = super
      return "<div markdown='span' class='alert alert-info' role='alert'><i class='fa fa-info-circle'></i> <b>Note</b><br/>#{text}</div>"
    end

  end
end

Liquid::Template.register_tag('note', Jekyll::RenderNoteBlock)