import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PostCard } from '../components'

/**
 * Blog page
 *
 * Loads all post from Ghost and list them here.
 *
 */

const Blog = ({ data }) => {
  const posts = data.allGhostPost.edges

  return (
    <>
      <Layout>
        {posts.map(({ node }) => (
          <PostCard key={node.id} post={node} />
        ))}
      </Layout>
    </>
  )
}

Blog.prototype = {
  data: PropTypes.shape({
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
}

export default Blog

export const pageQuery = graphql`
  query GhostPostQuery {
    allGhostPost(sort: { order: DESC, fields: [published_at] }) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
