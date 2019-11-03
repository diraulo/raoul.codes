import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

import NavItem from './NavItem'

import "./layout.css"

const Layout = ({ children }) => {
  const navLinks = [
    { to: '/about', text: 'About', cssClass: '', icon: '', ariaLabel: 'Read more about me' },
    { to: '/', text: 'Blog', cssClass: '', icon: '', ariaLabel: 'Visit my blog' },
    { to: '//github.com/diraulo', cssClass: 'github', icon: faGithub, ariaLabel: 'View my GitHub profile' },
    { to: '//twitter.com/diraulo', cssClass: 'twitter', icon: faTwitter, ariaLabel: 'Read some of my tweets' },
    { to: '//za.linkedin.com/in/diraul', cssClass: 'linkedin', icon: faLinkedinIn, ariaLabel: 'View my LinkedIn profile' }
  ]

  return (
    <>
      <Helmet>
        <html lang="en"></html>
      </Helmet>

      <div style={{ margin: '3rem auto', maxWidth: 650, padding: '0 1rem' }}>
        <header style={{ marginBottom: '1.5rem' }}>
          <Link to="/" style={{ textDecoration: 'none', backgroundImage: 'none' }}>
            <h3 style={{ display: 'inline', fontStyle: 'normal' }}>Raoul Diffouo</h3>
          </Link>

          <ul style={{ listStyle: 'none', marginLeft: '0' }}>
            {
              navLinks.map(({ to, text, cssClass, icon, ariaLabel }) => {
                return (
                  <NavItem key={text || cssClass} to={to} className={cssClass} ariaLabel={ariaLabel}>
                    {icon !== '' ? <FontAwesomeIcon icon={icon} width="0" /> : text}
                  </NavItem>
                )
              })
            }
          </ul>
        </header>

        {children}
      </div>
    </>
  )
}

export default Layout
