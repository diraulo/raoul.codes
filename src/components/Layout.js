import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

import NavItem from './NavItem'

import "./layout.css"

const Layout = ({ data, children }) => {
  const site = data.allGhostSettings.edges[0].node

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
        <html lang={site.lang} />
        <script>{site.codeinjection_head}</script>
        <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape({
    file: PropTypes.object,
    allGhostSettings: PropTypes.object.isRequired,
  }).isRequired
}

const LayoutSettingsQuery = props => (
  <StaticQuery
    query={
      graphql`
        query GhostSettings {
          allGhostSettings {
            edges {
              node {
                ...GhostSettingsFields
              }
            }
          }
        }
      `
    }

    render={data => <Layout data={data} {...props} />}
  />
)

export default LayoutSettingsQuery
