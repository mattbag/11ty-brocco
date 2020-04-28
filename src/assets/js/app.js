// import { Application } from 'stimulus'
// import Turbolinks from 'turbolinks'

import './api'

import { initLayout } from './demo'

document.addEventListener('DOMContentLoaded', function() {
  // Handler when the DOM is fully loaded
  initLayout()
  document.documentElement.classList.toggle(['no-js'])
  document.documentElement.classList.toggle(['js'])
})

// import HelloController from './controllers/hello_controller'

// const application = Application.start()
// application.register('hello', HelloController)

// Turbolinks.start()
