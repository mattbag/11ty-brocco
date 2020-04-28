// https://prismic.io/docs/javascript/getting-started/integrating-with-an-existing-javascript-project

import { initLayout } from './demo'

var Prismic = require('prismic-javascript')

var apiEndpoint = 'https://broccolou.cdn.prismic.io/api/v2'
// var apiToken = 'MC5XVHFod1NrQUFDWUE0RVFw...e-_vX5dYu-_vQnvv70'

Prismic.getApi(apiEndpoint)
  .then(function(api) {
    return api.query([Prismic.Predicates.at('document.type', 'project')]) // An empty query will return all the documents
  })
  .then(
    function(response) {
      console.log('Documents: ', response.results)
      const proj = response.results.slice(0, 4)
      let _html = proj
        .map(
          (prj, i) => `
        <figure class="grid__item grid__item--slide">
            <span class="number">0${(i += 1)}</span>
            <div class="img-wrap">
            <div
                class="img"
                style="background-image: url(${prj.data.project_image.url});"
            ></div>
            </div>
            <figcaption class="caption">${
              prj.data.project_name[0].text
            }</figcaption>
        </figure>`
        )
        .join(' ')

      let titles = `<div class="titles-wrap">
      <div class="grid grid--titles">
        ${proj.map(
          prj =>
            `<h3 class="grid__item grid__item--title">${prj.project_short ||
              'empty'}</h3>`
        )}
      </div>
    </div>`

      const interactions = `<div class="grid grid--interaction">
      <div class="grid__item grid__item--cursor grid__item--left"></div>
      <div class="grid__item grid__item--cursor grid__item--center"></div>
      <div class="grid__item grid__item--cursor grid__item--right"></div>
    </div>`

      document.querySelector('#projects').innerHTML =
        _html + titles + interactions
      initLayout()
    },
    function(err) {
      console.log('Something went wrong: ', err)
    }
  )
