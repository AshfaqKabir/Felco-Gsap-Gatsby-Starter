import React, { Component } from "react"

import { Link } from "gatsby"

import styled from "styled-components"
import {
  fonts,
  fontWeight,
  color,
  transObj,
  transFunc,
} from "../../../utils/theme"

const LinkWrapper = styled.ul`
  padding-left: 0px;
  margin-left: 0px;
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${color.black};
    font-family: ${fonts.primary};
    /* font-weight: ${fontWeight.bold}; */
    text-decoration: none;
    text-transform: capitalize;
    cursor: pointer;
    &:hover {
      background: ${color.primary};
      color: ${color.white};
      border-bottom: none;
    }
  }
  height: ${props => (props.open ? "122px" : "0px")};
  overflow: hidden;
  ${transFunc(
    "all",
    ".4s",
    "ease-in-out"
  )}; /*override default params from functions*/
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    margin-right: 20px;
    .nav-link {
      &:hover {
        background: none;
        color: ${color.primary};
        border-bottom: 2px solid ${color.primary};
      }
    }
  }
`

export default class NavLinks extends Component {
  state = {
    links: [
      { id: 1, path: "/", name: "Home" },
      { id: 21, path: "/about", name: "About Me" },
      { id: 2, path: "/contact", name: "Contact Me" },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}
