/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Nav from "./global/Navbar/Nav"

import styled from "styled-components"
import { Footer } from "../utils"
// import "./layout.css"

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
    <LayoutWrapper>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Nav />
      <div
        style={{
          // margin: `0 auto`,
          // maxWidth: 960,
          // padding: `0px 1.0875rem 1.45rem`,
          // paddingTop: 0,
          margin: 0,
          padding: 0,
        }}
      >
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Built with 💙  By
          <span style={{marginLeft: "10px"}}>
            <a href="https://ashfaqkabir.com" target="_blank">
              Ashfaq Kabir
            </a>
          </span>
        </Footer>
      </div>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const LayoutWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
`

export default Layout
