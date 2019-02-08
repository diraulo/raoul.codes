import React from 'react'
import { graphql } from 'gatsby'

import { rhythm } from '../utils/typography'

import Layout from '../components/Layout'

const IndexPage = ({ data }) => (
  <Layout>
    {
      data.allMarkdownRemark.edges.map(({ node: { id, frontmatter, excerpt } }) => (
        <div key={id}>
          <h3 style={{ marginBottom: `${rhythm(1 / 2)}` }}>
            {frontmatter.title}{' '} <br />

            <span style={{ color: '#bbb', fontSize: `${rhythm(1 / 2)}` }}>
              {frontmatter.date}
            </span>
          </h3>
          <p>{excerpt}</p>
        </div>
      ))
    }
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
