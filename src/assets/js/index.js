import ScrollMagic from 'scrollmagic'
import { gsap, Linear, TweenMax } from 'gsap/all'


window.addEventListener('DOMContentLoaded', () => {
  const images = [
    '/images/hand_r.png',
    '/images/hand_l.png'
  ]

  // TweenMax can tween any property of any object. We use this object to cycle through the array
  const imageObject = { currentImage: 0 }

  // create tween
  const tween = TweenMax.to(imageObject, 0.5,
    {
      currentImage: images.length - 1,	// animate property currentImage to number of images
      roundProps: 'currentImage',				// only integers so it can be used as an array index
      repeat: 3,									      // repeat 3 times
      immediateRender: true,			      // load first image automatically
      ease: Linear.easeNone,			      // show every image the same amount of time
      onUpdate: function () {
        document.querySelector('#clientNeedsIllustration').src = images[imageObject.currentImage] // set the image source
      }
    }
  )

  // init controller
  const controller = new ScrollMagic.Controller()

  // build scene
  const scene = new ScrollMagic.Scene({
    triggerElement: '#clientNeedsSection',
    duration: 300
  }).setTween(tween)

  controller.addScene(scene)

  gsap.registerPlugin(Linear, TweenMax)
})
