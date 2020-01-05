import styled from "styled-components"

import { color, fonts, fontSizes, fontWeight, transFunc } from "./theme"

export const FormGroup = styled.div`
  display: flex;
`
export const Label = styled.label`
  margin: 15px;
`

export const Input = styled.input`
  color: #7d7d7d;
  font-size: ${fontSizes[0]};
  font-family: ${fonts.primary};
  font-weight: ${fontWeight.medium};
  border: 2px solid #eee;
  width: 235px;
  max-height: 50px;
  padding: 10px;
  margin: 10px;
  margin-bottom: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &::placeholder {
    font-weight: ${fontWeight.medium};
  }
`

export const TextArea = styled.textarea`
  border: none;
  justify-content: center;
  font-size: ${fontSizes[0]};
  font-family: ${fonts.primary};
  width: 69%;
  height: 200px;
  padding: 10px;
  color: #7d7d7d;
  ${transFunc("all", ".4s", "ease-in-out")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &::placeholder {
    font-weight: ${fontWeight.medium};
  }
  @media( max-width: 552px){
    width:73%;
  }
`

export const Button = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.primary};
  font-weight: ${fontWeight.medium};
  background: ${color.secondary};
  color: ${color.white};
  width: 100px;
  padding: 10px;
  margin-right: 107px;
  margin-top: 20px;
  border: none;
  ${transFunc("all", ".1s", "ease-in-out")};
  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

`
