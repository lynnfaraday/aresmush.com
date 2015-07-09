$(document).ready(function(){

    /*
    $(".navbar li").mouseover(function(event){
        var caption = $(this).find(".nav-caption:first");
        showTooltip($(this), caption);
    });
    
    $(".navbar li").mouseleave(function(event){
        $(this).find(".nav-caption:first").hide();
    });

    function showTooltip(parent, caption){
        // .position() uses position relative to the offset parent, 
        var pos = parent.position();

        // .outerWidth() takes into account border and padding.
        var width = parent.outerWidth();
            
        //var tPosX = (pos.left - width - 129);
        var tPosX = pos.left - 10;
        var tPosY = pos.top + 5;
        caption.css({'position': 'absolute', 'top': tPosY, 'left': tPosX});
        caption.show();
    };
    */
    
 
    $(function() {
        $( "#menubutton" ).click(function() {
            $("#navbar").toggle( "slide", { direction: "right" }, 500 );

        });
      });
      

});
