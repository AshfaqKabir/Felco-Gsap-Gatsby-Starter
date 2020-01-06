import styled from "styled-components"
import { color, fonts, fontWeight, transObject } from "./theme"

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: none;
  background: ${color.primary};
  font-family: ${fonts.primary};
  color: ${color.white};
  a {
    /* text-decoration: none; */
    color: ${color.white};
    font-weight: 600;
    ${transObject({})};
    &:hover {
      color: #ddd;
    }
  }
`
