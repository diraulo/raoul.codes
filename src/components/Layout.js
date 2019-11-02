import React from 'react'
import { Link } from 'gatsby'

import NavItem from './NavItem'

import "./layout.css"

const navLinks = [
  { to: '/blog', text: 'Blog' },
  { to: '//github.com/diraulo', text: 'GitHub' },
  { to: '//twitter.com/diraulo', text: 'Twitter' },
  { to: '//za.linkedin.com/in/diraul', text: 'LinkedIn' }
]

export default ({ children }) => (
  <div style={{ margin: '3rem auto', maxWidth: 650, padding: '0 1rem' }}>
    <header style={{ marginBottom: '1.5rem' }}>
      <Link to="/" style={{ textDecoration: 'none', backgroundImage: 'none' }}>
        <h3 style={{ display: 'inline', fontStyle: 'normal' }}>Raoul Diffouo</h3>
      </Link>

      <ul style={{ listStyle: 'none', marginLeft: '0' }}>
        {navLinks.map(({ to, text }) => <NavItem key={text} to={to}>{text}</NavItem>)}
      </ul>
    </header>

    {children}
  </div>
)
