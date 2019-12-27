import React from "react"

import { FlexContainer } from "../../../utils"

import TitlePart from "./TitlePart"
import HeroImage from "./HeroImage"

export default function Hero() {
  return (
    <FlexContainer
      justifyContent={"space-between"}
      flexHeight={"90vh"}
      overflow={"hidden"}
    >
      <TitlePart />
      <HeroImage />
    </FlexContainer>
  )
}
