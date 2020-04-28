// // https://david.darn.es/tutorial/2019/06/01/use-eleventy-to-generate-a-ghost-blog/

// var Prismic = require('prismic-javascript')

// var apiEndpoint = 'https://broccolou.cdn.prismic.io/api/v2'

// // async function fetchUserData(username) {
// //   // do some async things
// //   return username
// // }

// module.exports = async function() {
//   console.log('====')
//   console.log('project.js')
//   console.log('====')

//   // let user1 = await fetchUserData('user1')
//   // let user2 = await fetchUserData('user2')

//   return Prismic.getApi(apiEndpoint)
//     .then(function(api) {
//       return api.query([Prismic.Predicates.at('document.type', 'project')]) // An empty query will return all the documents
//     })
//     .then(res => res.results)

//   // return filename [projects]
//   // return [user1, user2]
// }
