import React from "react"

import styled from "styled-components"
import { theme, Title } from "../../utils"

const PageLayout = props => {
  return (
    <PageWrapper>
      <Title headerTitle>{props.title}</Title>
      <PageContainer>
        <div className="content">{props.children}</div>
      </PageContainer>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  background: ${theme.color.white};
`

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 98%;
  /* width: 960px; */
  min-height: 70vh;
  background: #ddd;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  .content {
    padding: 50px 20px;
    p {
      display: block;
      margin: 0 auto;
      width: 80%;
      font-family: ${theme.fonts.para};
      font-size: ${theme.fontSizes[4]};
      text-align: justify;
    }
  }
  @media (max-width: 992px) {
    min-height: auto;
    .content {
      p {
        font-size: ${theme.fontSizes[3]};
      }
    }
  }
  @media (max-width: 568px) {
    .content {
      padding: 20px 5px;
      p {
        font-size: ${theme.fontSizes[1]};
        width: 90%;
      }
    }
  }
`
export default PageLayout
