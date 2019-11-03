import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ children, to, className }) => {
  const internal = /^\/(?!\/)/.test(to)

  return (
    internal
      ? <GatsbyLink to={to} className={className}>{children}</GatsbyLink>
      : <a href={to} className={className}>{children}</a>
  )
}

export default Link;
