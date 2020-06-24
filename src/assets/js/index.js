import ScrollMagic from 'scrollmagic'
import $ from 'jquery';

window.addEventListener('DOMContentLoaded', () => {
  console.log('Hello')
});

$(document).ready(function(){

  //hero animation
  $('.hero-title').animate({'opacity':'1'},2000);

  setTimeout(function(){

    $('.hand-left').addClass('slidein');
    $('.hand-right').addClass('slidein');

  }, 1000);

});


function scrollVideo(video, difference) {

  var videoLength = video.duration;
  video.currentTime = (difference / ($(document).height() - $(window).height())) * videoLength;

}


$(window).scroll( function(){

  $('.video').each( function(i){

    let bottom_of_object = $(this).position().top;
    let bottom_of_window = $(window).scrollTop() + $(window).height();
    let difference = bottom_of_window - bottom_of_object;

    if( bottom_of_window > bottom_of_object ){
      scrollVideo(this, difference);
    }

  });

});