// JavaScript Document
$(function()
{
    $('#main-content') .css({'height': (($(window).height()) - 361)+'px'});

    $(window).resize(function(){
        $('#main-content') .css({'height': (($(window).height()) - 361)+'px'});
        alert('resized');
    });
});

$( "#box" ).one( "click", function() {
  $( this ).css( "width", "+=200" );
});

