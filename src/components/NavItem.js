import React from 'react'

import Link from './Link'

const NavItem = ({ children, to, className }) => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={to} className={className}>{children}</Link>
  </li>
)

export default NavItem
