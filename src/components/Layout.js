import React from 'react'
import { Link } from 'gatsby'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

import NavItem from './NavItem'

import "./layout.css"

const navLinks = [
  { to: '/about', text: 'About', icon: '' },
  { to: '/blog', text: 'Blog', icon: '' },
  { to: '//github.com/diraulo', text: 'github', icon: faGithub },
  { to: '//twitter.com/diraulo', text: 'twitter', icon: faTwitter },
  { to: '//za.linkedin.com/in/diraul', text: 'linkedin', icon: faLinkedinIn }
]

export default ({ children }) => (
  <div style={{ margin: '3rem auto', maxWidth: 650, padding: '0 1rem' }}>
    <header style={{ marginBottom: '1.5rem' }}>
      <Link to="/" style={{ textDecoration: 'none', backgroundImage: 'none' }}>
        <h3 style={{ display: 'inline', fontStyle: 'normal' }}>Raoul Diffouo</h3>
      </Link>

      <ul style={{ listStyle: 'none', marginLeft: '0' }}>
        {
          navLinks.map(({ to, text, icon }) => {
            return (
              <NavItem key={text} to={to} className={text}>
                {icon !== '' ? <FontAwesomeIcon icon={icon} /> : text}
              </NavItem>
            )
          })
        }
      </ul>
    </header>

    {children}
  </div>
)
