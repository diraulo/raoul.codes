import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

/**
 * Single page (/:slug)
 *
 * This file is used to render a single page and loads all the content
 *
 */

const Page = ({ data }) => {
  const page = data.ghostPage

  return (
    <>
      <Layout>
        <article>
          <h1>{page.title}</h1>
          <section
            dangerouslySetInnerHTML={{ __html: page.html }}
          />
        </article>
      </Layout>
    </>
  )
}

Page.prototype = {
  data: PropTypes.shape({
    ghostPage: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query($slug: String!) {
    ghostPage(slug: { eq: $slug }) {
      ...GhostPageFields
    }
  }
`
