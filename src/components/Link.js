import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ children, to, className, ariaLabel }) => {
  const internal = /^\/(?!\/)/.test(to)

  return (
    internal
      ? <GatsbyLink to={to} className={className} aria-label={ariaLabel}>{children}</GatsbyLink>
      : <a href={to} className={className} aria-label={ariaLabel}>{children}</a>
  )
}

export default Link;
