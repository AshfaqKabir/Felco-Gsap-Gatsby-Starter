import React, { useRef, useEffect } from "react"

import styled from "styled-components"
import { gsap, TweenMax, TimelineMax, Power2 } from "gsap/dist/gsap";
// import { color, fonts, fontSizes, fontWeight } from "../../../utils/theme"

import Hero from "../../../images/hero.jpg"

const HeroImage = () => {
  let heroImg = useRef(null)
  let animes = useRef(null)

  let tl = new TimelineMax()

  useEffect(() => {
    TweenMax.to(heroImg, 0, { visibility: "visible" })

    let box = animes.firstElementChild
    let img = animes.lastElementChild

    tl.from(box, 1.1, { width: "100%", ease: Power2 }).to(box, 1, {
      height: "380px",
    })

    tl.to(img, 1.2, { y: "135%", scale: 1, ease: Power2.easeInOut }).from(
      img,
      1.2,
      { scale: 0.97, ease: Power2.easeInOut },
      2.7
    )

    // Used REF to hook the ImageWrapper component
    console.log(heroImg)
  })

  return (
    <ImageWrapper ref={el => (heroImg = el)}>
      <div className="animeWrapper" ref={el => (animes = el)}>
        <div className="back-div"></div>
        <div className="heroImg">
          <img src={Hero} alt="" />
        </div>
      </div>
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  visibility: hidden;
  /* overflow: hidden; */
  margin: 0;
  padding: 0;

  .animeWrapper {
    position: relative;
    width: 630px;
    height: 90vh;
  }

  .back-div {
    position: absolute;
    /* top: 32%; */
    top: 25%;
    right: 0;
    background: #ddd;
    /* width: 830px; */
    width: 1050px;
    /* height: 320px; */
    height: 720px;
    z-index: -1;
  }
  .heroImg {
    img {
      width: 65%;
      scale: 1.2;
      height: auto;
    }
    position: absolute;
    /* top: 12%; */
    top: -120%;
    right: 2%;
    /* left: 50%; */
  }
`

export default HeroImage
