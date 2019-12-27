import React from "react"

import { Section, Title, FlexContainer } from "../../../utils"

import ServiceList from "./ServiceList"

const Service = () => {
  return (
    <Section>
      <Title>Services</Title>
      <FlexContainer
        justifyContent={"center"}
        alignItem={"center"}
        flexHeight={"80vh"}
      >
        <ServiceList />
      </FlexContainer>
    </Section>
  )
}

export default Service
