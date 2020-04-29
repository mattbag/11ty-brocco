import TweenMax from './TweenMax.min'

document.addEventListener(
  'click',
  function(event) {
    // console.log('====')
    // console.log(event.target, $burger)
    // console.log('====')

    if (event.target.matches('#hamburger.off')) {
      console.log('====')
      console.log('off')
      console.log('====')
      // Run your code to open a modal
      event.target.classList.toggle('on')
      event.target.classList.toggle('off')
      runmenu(true)
    } else if (event.target.matches('#hamburger.on')) {
      console.log('====')
      console.log('on')
      console.log('====')
      event.target.classList.toggle('on')
      event.target.classList.toggle('off')
      // Run your code to close a modal
      runmenu(false)
    }
  },
  false
)
// document.querySelector('#hamburger.off').addEventListener('click', function(e) {
//   //   $(this).toggleClass('off on')
//   //   runmenu(true)
//   console.log(true, e, this)
// })
// document.querySelector('#hamburger.on').addEventListener('click', function(e) {
//   //   $(this).toggleClass('off on')
//   //   runmenu(true)
//   console.log(false)
// })

// $(document).on('click', '#hamburger.on', function() {
//   console.log(false)
//   runmenu(false)
//   $(this).toggleClass('off on')
// })

function runmenu(what) {
  if (what === true) {
    tl.play().timeScale(1)
  } else {
    tl.reverse().timeScale(2)
  }
}

let params = {
  y: 90,
  ease: Power4.easeOut,
  opacity: 0,
}
let tl = new TweenMax.TimelineMax()
tl.pause()
tl.to('.menudrop', 0.3, {
  top: 0,
  width: '100%',
  ease: params.ease,
})
tl.from(
  'nav ul li:nth-child(1)',
  0.5,
  {
    opacity: params.opacity,
    y: params.y,
    ease: params.ease,
  },
  '-=0.1'
)
tl.from(
  'nav ul li:nth-child(2)',
  0.5,
  {
    opacity: params.opacity,
    y: params.y,
    ease: params.ease,
  },
  '-=0.4'
)
tl.from(
  'nav ul li:nth-child(3)',
  0.3,
  {
    opacity: params.opacity,
    y: params.y,
    ease: params.ease,
  },
  '-=0.4'
)
tl.from(
  'nav ul li:nth-child(4)',
  0.3,
  {
    opacity: params.opacity,
    y: params.y,
    ease: params.ease,
  },
  '-=0.3'
)
tl.from(
  'nav ul li:nth-child(5)',
  0.2,
  {
    opacity: params.opacity,
    y: params.y,
    ease: params.ease,
  },
  '-=0.3'
)
