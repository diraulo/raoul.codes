import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout } from '../components'

import { rhythm } from '../utils/typography'

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
        {posts.map(
          ({
            node: { id, slug, title, excerpt, published_at_pretty, tags },
          }) => (
            <div key={id}>
              <a href={slug}>
                <h3 style={{ marginBottom: `${rhythm(1 / 2)}` }}>
                  <span
                    style={{ color: '#737373', fontSize: `${rhythm(1 / 2)}` }}
                  >
                    {tags[0].name}
                  </span>{' '}
                  <br />
                  {title} <br />
                  <span
                    style={{ color: '#737373', fontSize: `${rhythm(1 / 2)}` }}
                  >
                    {published_at_pretty}
                  </span>
                </h3>
              </a>
              <p>{excerpt}</p>
            </div>
          )
        )}
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
