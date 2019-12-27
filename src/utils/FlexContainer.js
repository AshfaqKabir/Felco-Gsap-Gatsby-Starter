import styled from "styled-components"

// To Align Items in Container to center
export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItem};
  flex-wrap: ${props => (props.wrap ? "wrap" : null)};
  min-height: ${props => props.flexHeight};
  width: ${props => props.width || null};
  overflow: ${props => props.overflow};
`
