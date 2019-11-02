const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type == 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })

    console.log(slug)
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

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
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  // Extract query results
  const posts = result.data.allGhostPost.edges

  // Load templates
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const postTemplate = path.resolve('./src/templates/post.js')

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
    path: `/blog`,
    component: blogTemplate,
    items: posts
  })
}
