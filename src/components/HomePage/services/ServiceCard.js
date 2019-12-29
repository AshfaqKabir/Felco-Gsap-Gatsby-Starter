import React from "react"

import styled from "styled-components"
import { color, fonts, fontSizes, fontWeight } from "../../../utils/theme"

const ServiceCard = props => {
  return (
    <CardWrapper>
      <div className="imgBox" data-text={props.data}>
        <img src={props.img} alt="" />
      </div>
      <div className="content">
        <div>
          <h3>{props.title}</h3>
          <hr />
          <p>{props.content}</p>
          {/* <a href="#">Read More</a> */}
        </div>
      </div>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  /** Global Card Layout */
  position: relative;
  height: 400px;
  background: ${color.white};
  display: flex;
  width: 30%;
  margin: 30px 0;

  /** Global Card Layout Ends*/
  .imgBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #333;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 0.5s all ease-in-out;
    img {
      max-width: 100px;
      transition: 0.5s all ease-in-out;
    }
  }
  .content {
    width: 90%;
    height: 100%;
    margin-top: 95px;
    margin-left: auto;
    height: 100%;
    h3 {
      font-family: ${fonts.heading};
      font-size: ${fontSizes[6]};
      font-weight: ${fontWeight.bold};
      margin-bottom: 5px;
    }
    p {
      font-family: ${fonts.para};
      text-align: justify;
      padding-right: 20px;
    }
  }
  &:hover {
    .imgBox {
      width: 100px;
      height: 100px;
      top: calc(50% - 180px);
      left: -30px;
      transition: 0.5s ease-in-out;
      background: #ff0057;
      img {
        max-width: 75px;
      }
    }
  }
  @media (max-width: 992px) {
    width: 70%;
    img {
      width: 150px !important;
    }
    &:hover {
      img {
        max-width: 75px;
      }
    }
  }
  @media (max-width: 768px) {
    max-width: 350px;
    height: auto;
    flex-direction: column;
    .imgBox {
      position: relative;
      width: 100%;
      height: 200px;
      left: 0;
    }
    .content {
      width: 100%;
      height: 100%;
      margin-top: 0;
      margin-left: 10px;
    }
    &:hover {
      .imgBox {
        top: 0;
        width: 100%;
        height: 200px;
        left: 0;
        img {
          max-width: 100px;
        }
      }
    }
  }
`

export default ServiceCard
