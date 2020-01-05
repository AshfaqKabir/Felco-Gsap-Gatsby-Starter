import styled from "styled-components"

export const Container = styled.div`
  display: block;
  margin: 0 auto;
  width: ${props => props.minWidth};
  min-height: ${props => props.minHeight};
  height: ${props => props.Height};
  @media (max-width: 992px) {
    width: 100%;
  }
`
