import React from 'react'
import PropTypes from 'prop-types'

import { rhythm } from '../utils/typography'

const PostCard = ({ post }) => {
  const { slug, title, published_at_pretty, excerpt, tags } = post

  return (
    <>
      <a href={slug}>
        <h3 style={{ marginBottom: `${rhythm(1 / 2)}` }}>
          <span style={{ color: '#737373', fontSize: `${rhythm(1 / 2)}` }}>
            {tags[0].name}
          </span>{' '}
          <br />
          {title} <br />
          <span style={{ color: '#737373', fontSize: `${rhythm(1 / 2)}` }}>
            {published_at_pretty}
          </span>
        </h3>
      </a>
      <p>{excerpt}</p>
    </>
  )
}

PostCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    feature_image: PropTypes.string,
    featured: PropTypes.bool,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    excerpt: PropTypes.string.isRequired,
    primary_author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

export default PostCard
