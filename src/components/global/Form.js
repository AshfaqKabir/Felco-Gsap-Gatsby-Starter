import React from "react"

import { FlexContainer, Container } from "../../utils"

import { FormGroup, Label, Input, TextArea, Button } from "../../utils/FormItem"

const Form = () => {
  return (
    <Container minWidth={"60%"} minHeight={"100%"}>
      <FlexContainer justifyContent={"center"}>
        <FormGroup>
          <Input type="text" name="Name" id="email" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Input type="emai" name="email" id="email" placeholder="Email" />
        </FormGroup>
      </FlexContainer>
      <FlexContainer justifyContent={"center"}>
        <TextArea name="message" id="message" placeholder="Write a Message" />
      </FlexContainer>
      <FlexContainer justifyContent={"flex-end"} alignItem={"center"}>
        <Button type="submit">Send</Button>
      </FlexContainer>
    </Container>
  )
}

export default Form
