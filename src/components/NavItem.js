import React from 'react'

import Link from './Link'

const NavItem = ({ children, to, className, ariaLabel }) => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={to} className={className} ariaLabel={ariaLabel}>{children}</Link>
  </li>
)

export default NavItem
