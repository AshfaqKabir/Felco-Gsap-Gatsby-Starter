import React from "react"

import { Link } from "gatsby"

import { FaAlignRight } from "react-icons/fa"

import styled from "styled-components"
import { color } from "../../../utils/theme"

import logo from "../../../images/logo.svg"

const NavHeader = ({ handleNavbar }) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <img src={logo} alt="company logo" width="50%" />
      </Link>
      <FaAlignRight
        className="toggle-icon"
        onClick={() => {
          handleNavbar()
        }}
      />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    transition: all 0.4s ease;
    font-size: 1.75rem;
    color: ${color.secondary};
    cursor: progress;
    &:hover {
      color: ${color.primary};
    }
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`
export default NavHeader
