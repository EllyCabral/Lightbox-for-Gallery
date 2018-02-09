// jquery library should be included

$(document).ready(function($){
  // handle the opening trigger
  $('a.button').click(function(){
    // get the href
    var href = $(this).attr('href');
      href = href.replace('#', '');
    // find the appropriate .cont div
    $('.cont#'+href).addClass('show');
    // turn on the lightbox
    $('.lightbox-wrap').addClass('open');
  });
  
  // handle the close
  $('a#close').click(function(){
    $('.cont.show').removeClass('show');
    $('.lightbox-wrap').removeClass('open');
  });
  
  // handle the gallery
  
});