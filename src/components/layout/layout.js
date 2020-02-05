/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import "./layout.css"
import ForestBackground from "../../images/forest_background.jpg";

const layoutContainerStyles = {
    //backgroundImage: "url(" + ForestBackground + ")"
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div id="layout-container" style={layoutContainerStyles}>
        <main id="layout-main-container">{children}</main>
        <footer id="layout-footer">
          © {new Date().getFullYear()}, built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://material-ui.com">Material UI</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
