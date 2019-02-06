import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ children, to }) => {
  const internal = /^\/(?!\/)/.test(to)

  return (
    internal
      ? <GatsbyLink to={to}>{children}</GatsbyLink>
      : <a href={to} target='_blank'>{children}</a>
  )
}

export default Link;
