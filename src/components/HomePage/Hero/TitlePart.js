import React from "react"

import styled from "styled-components"
import { color, fonts, fontSizes, fontWeight } from "../../../utils/theme"

export default function TitlePart() {
  return (
    <TitleWrapper>
      <h1>Built With Gatsby</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nunc, vel
        sit ut tortor. Mus malesuada lobortis diam nisl imperdiet duis turpis
        augue. Elit in quis molestie duis lobortis diam nisl imperdiet duis
        turpis augue. Elit in quis molestie duis
      </p>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  h1 {
    color: ${color.title};
    font-family: ${fonts.title};
    font-size: ${fontSizes[11]};
    font-weight: 100;
    width: 70%;
    margin-bottom: 30px;
  }
  p {
    width: 90%;
    color: ${color.primary};
    font-family: ${fonts.primary};
    font-size: ${fontSizes[3]};
    font-weight: ${fontWeight.medium};
  }
`
