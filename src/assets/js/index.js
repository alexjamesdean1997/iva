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