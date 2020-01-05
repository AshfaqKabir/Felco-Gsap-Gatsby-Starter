import styled from "styled-components"

// To Align Items in Container to center
export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItem};
  flex-wrap: ${props => (props.wrap ? "wrap" : null)};
  min-height: ${props => props.flexHeight};
  width: ${props => props.width};
  overflow: ${props => props.overflow};
  @media (max-width: 992px) {
    width: 100%;
    justify-content: ${props => props.tabJustify ? "flex-end" : "center"};
    /* flex-direction: column; */
    align-items: center;
  }
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`
