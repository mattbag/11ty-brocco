// import { Application } from 'stimulus'
// import Turbolinks from 'turbolinks'

import './api'
import nav from './nav'

import { initLayout } from './demo'

document.addEventListener('DOMContentLoaded', function() {
  // Handler when the DOM is fully loaded
  initAll()
  document.documentElement.classList.toggle(['no-js'])
  document.documentElement.classList.toggle(['js'])
})
// document.addEventListener('turbolinks:load', function() {
//   // document.body.classList.toggle(['loading'])
//   initAll()
// })

function initAll() {
  initLayout()
  nav()
}

// import HelloController from './controllers/hello_controller'

// const application = Application.start()
// application.register('hello', HelloController)

// Turbolinks.start()
