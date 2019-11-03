const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allGhostPost(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
          }
        }
      }

      allGhostPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  // Extract query results
  const pages = result.data.allGhostPage.edges
  const posts = result.data.allGhostPost.edges

  // Load templates
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const pageTemplate = path.resolve('./src/templates/page.js')
  const postTemplate = path.resolve('./src/templates/post.js')

  // Create pages
  pages.forEach(({ node }) => {
    node.url = `/${node.slug}/`

    createPage({
      path: node.url,
      component: pageTemplate,
      context: {
        slug: node.slug
      }
    })
  })

  // Create post pages
  posts.forEach(({ node }) => {
    node.url = `/${node.slug}/`

    createPage({
      path: node.url,
      component: postTemplate,
      context: {
        slug: node.slug
      }
    })
  })

  // Create blog index
  createPage({
    path: `/`,
    component: blogTemplate,
    items: posts
  })
}
