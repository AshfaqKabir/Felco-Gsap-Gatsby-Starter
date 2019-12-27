// import styled from 'styled-components'
// import {color, fonts, fontSizes, fontWeight } from '../utils/theme.js'

export const color = {
  primary: `#8A929D`,
  secondary: `#361F33`,
  title: `#616C77`,
  para: `#5A4545`,
  white: `#fff`,
  black: `#000`,
}

export const fonts = {
  primary: `Montserrat, sans-serif`,
  title: `Acme, sans-serif`,
  heading: `Alegreya Sans SC`,
  heading2: `Alegreya Sans`,
  para: `Poppins, sans-serif`,
}

export const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900,
}

export const fontSizes = [
  `14px`,
  `16px`,
  `18px`,
  `20px`,
  `26px`,
  `30px`,
  `34px`,
  `40px`,
  `50px`,
  `60px`,
  `80px`,
  `100px`,
]
// console.log(fontSizes[11]);

export const transFunc = (property = "all", time = ".4s", type = "ease") => {
  return `transition: ${property} ${time} ${type}`
}
export const transObject = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}
