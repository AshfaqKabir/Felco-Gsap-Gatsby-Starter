import styled from "styled-components"
import { color, fonts, fontSizes, fontWeight } from "./theme"

export const Title = styled.h1`
  position: relative;
  padding: ${props => props.headerTitle ?  "50px 0" : ""};
  font-family: ${props => (props.headerTitle ? fonts.title : fonts.heading2)};
  font-size: ${props => (props.headerTitle ? fontSizes[11] : fontSizes[10])};
  font-weight: ${fontWeight.bold};
  color: ${color.secondary};
  margin: 0 auto;
  text-align: center;
  width: ${props => (props.headerTitle ? "" : "400px")};
  text-transform: capitalize;
  &::before {
    content: "";
    position: absolute;
    top: 40%;
    right: ${props => (props.headerTitle ? "65%" : "85%")};
    background: ${color.primary};
    width: 80px;
    height: 2px;
  }
`
