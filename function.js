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
  // first, how many images are there?
  var num_img = $('.gal-wrap img').length;
  // change the percentage
  var percent = 100/num_img;
  // apply it to the images
  $('.gal-wrap img').css({
     'width' : percent +'%'
  });
  // get the width of the gal-wrap div
  var gal_wid = $('.gal-wrap').outerWidth();
  console.log(gal_wid);
  // multiply the width by the number of images
  var ful_wid = num_img * gal_wid;
  // set it
  $('.gal-wrap').css({
    'width' : ful_wid +'px'
  });
  
  // gallery navigation
  $('.galnav.prev').click(function(){
    // previous moves the last child to the front of the line (we're always viewing the first image)
    $('.gal-wrap img:last-child').prependTo('.gal-wrap');
  });
  $('.galnav.next').click(function(){
    // next moves the first child to the end of the line (we're always viewing the first image)
    $('.gal-wrap img:first-child').appendTo('.gal-wrap');
  });
});