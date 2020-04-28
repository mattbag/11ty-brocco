const fs = require('fs')

var Prismic = require('prismic-javascript')

var apiEndpoint = 'https://broccolou.cdn.prismic.io/api/v2'

module.exports = function(eleventyConfig) {
  /**
   * Opts in to a full deep merge when combining the Data Cascade.
   *
   * @link https://www.11ty.dev/docs/data-deep-merge/#data-deep-merge
   */
  eleventyConfig.setDataDeepMerge(true)

  /**
   * Add custom watch targets
   *
   * @link https://www.11ty.dev/docs/config/#add-your-own-watch-targets
   */
  eleventyConfig.addWatchTarget('./src/assets/')

  /**
   * Passthrough file copy
   *
   * @link https://www.11ty.io/docs/copy/
   */
  eleventyConfig.addPassthroughCopy('./src/site/favicon.ico')
  // eleventyConfig.addPassthroughCopy('./img')

  /**
   * Add filters
   *
   * @link https://www.11ty.io/docs/filters/
   */

  /**
   * Add Transforms
   *
   * @link https://www.11ty.io/docs/config/#transforms
   */
  if (process.env.ELEVENTY_ENV === 'production') {
    eleventyConfig.addTransform('htmlmin', require('./src/utils/htmlmin.js'))
  }

  /**
   * Override BrowserSync Server options
   *
   * @link https://www.11ty.dev/docs/config/#override-browsersync-server-options
   */
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function(snippet, match) {
          return snippet + match
        },
      },
    },
    // Set local server 404 fallback
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('dist/404/index.html')

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404)
          res.end()
        })
      },
    },
  })

  // Get all projects
  eleventyConfig.addCollection('projects', async function(collection) {
    return Prismic.getApi(apiEndpoint)
      .then(function(api) {
        return api.query([Prismic.Predicates.at('document.type', 'project')]) // An empty query will return all the documents
      })
      .then(res => res.results)
    // collection = await api.posts
    //   .browse({
    //     include: "tags,authors",
    //     limit: "all"
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
    // collection.forEach(post => {
    //   post.url = stripDomain(post.url);
    //   post.primary_author.url = stripDomain(post.primary_author.url);
    //   post.tags.map(tag => (tag.url = stripDomain(tag.url)));
    //   // Convert publish date into a Date object
    //   post.published_at = new Date(post.published_at);
    // });
    // // Bring featured post to the top of the list
    // collection.sort((post, nextPost) => nextPost.featured - post.featured);
    // return collection;
  })

  return {
    dir: {
      layouts: '_layouts',
      input: 'src/site',
      data: '_data',
      output: 'dist',
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  }
}
