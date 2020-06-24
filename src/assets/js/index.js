import ScrollMagic from 'scrollmagic'
import $ from 'jquery'

window.addEventListener('DOMContentLoaded', () => {

  // Hero animation
  $('.hero-title').animate({ 'opacity': '1' }, 2000)

  setTimeout(function () {
    $('.hand-left').addClass('slidein')
    $('.hand-right').addClass('slidein')

  }, 1000)
})


function scrollVideo(video, difference) {
  const videoLength = video.duration
  video.currentTime = (difference / ($(document).height() - $(window).height())) * videoLength * 3
}


$(window).scroll(function () {
  $('.video').each(function () {
    const objectBottom = $(this).position().top
    const windowBottom = $(window).scrollTop() + $(window).height()
    const difference = windowBottom - objectBottom

    if (windowBottom > objectBottom) {
      scrollVideo(this, difference)
    }
  })
})
