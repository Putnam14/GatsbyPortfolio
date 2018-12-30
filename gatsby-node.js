const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        const postsPerPage = 6
        const numPages = Math.ceil(posts.length / postsPerPage)
        // Pagination for blog page
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? '/blog' : `/blog/${i + 1}`,
            component: path.resolve('./src/templates/blog.js'),
            context: {
              numPages,
              currentPage: i + 1,
              limit: postsPerPage,
              skip: i * postsPerPage,
            },
          })
        })
        // Create each blog post
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}
