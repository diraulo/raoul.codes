import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout } from '../components'

/**
 * Single post view (/:slug)
 *
 * This file is used to render a single post and loads all the content
 *
 */

const Post = ({ data }) => {
  const post = data.ghostPost

  return (
    <>
      <Layout>
        <article>
          <h1>{post.title}</h1>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </Layout>
    </>
  )
}

Post.prototype = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`
