import React, { Component } from "react"

import NavHeader from "./NavHeader"
import NavLinks from "./NavLinks"

import styled from "styled-components"

export default class Nav extends Component {
  state = {
    navbarOpen: false,
  }

  handleNavbar = () => {
    this.setState({
      navbarOpen: !this.state.navbarOpen,
    })
  }
  render() {
    return (
      <NavWrapper>
        <NavHeader handleNavbar={this.handleNavbar} />
        <NavLinks navbarOpen={this.state.navbarOpen} />
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  min-height: 38px;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
