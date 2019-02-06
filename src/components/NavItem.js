import React from 'react'

import Link from './Link'

const NavItem = ({ children, to }) => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={to}>{children}</Link>
  </li>
)

export default NavItem
