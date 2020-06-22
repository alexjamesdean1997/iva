import './css/main.css'

import ScrollMagic from 'scrollmagic'

window.addEventListener('DOMContentLoaded', () => {
  const controller = new ScrollMagic.Controller()

  const scene = new ScrollMagic.Scene({
    triggerElement: '.title', // starting scene, when reaching this element
    duration: 400 // pin the element for a total of 400px
  }).setPin('.title') // the element we want to pin

  controller.addScene(scene)
})
