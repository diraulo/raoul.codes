import React from 'react'
import { Link, graphql } from 'gatsby'

import { rhythm } from '../utils/typography'

import Layout from '../components/Layout'

const IndexPage = ({ data }) => (
  <Layout>
    {
      data.allMarkdownRemark.edges.map(({ node: { id, frontmatter, fields, excerpt } }) => (
        <div key={id}>
          <Link to={fields.slug}>
            <h3 style={{ marginBottom: `${rhythm(1 / 2)}` }}>
              {frontmatter.title}{' '} <br />

              <span style={{ color: '#bbb', fontSize: `${rhythm(1 / 2)}` }}>
                {frontmatter.date}
              </span>
            </h3>
          </Link>
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
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
