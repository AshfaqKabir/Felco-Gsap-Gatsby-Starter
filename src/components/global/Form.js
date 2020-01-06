import React from "react"

import { FlexContainer, Container } from "../../utils"

import { FormGroup, Label, Input, TextArea, Button } from "../../utils/FormItem"

const Form = () => {
  return (
    <Container minWidth={"60%"} minHeight={"100%"}>
      <form
        name="contact"
        method="POST"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <FlexContainer justifyContent={"center"}>
          <FormGroup>
            <Input type="text" name="Name" id="name" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Input type="email" name="email" id="email" placeholder="Email" />
          </FormGroup>
        </FlexContainer>
        <FlexContainer justifyContent={"center"}>
          <TextArea name="message" id="message" placeholder="Write a Message" />
        </FlexContainer>
        <FlexContainer
          justifyContent={"flex-end"}
          alignItem={"center"}
          tabJustify
        >
          <Button type="submit">Send</Button>
        </FlexContainer>
      </form>
    </Container>
  )
}

export default Form
