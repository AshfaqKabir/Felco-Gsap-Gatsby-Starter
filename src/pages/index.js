import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Hero from "../components/HomePage/Hero/Hero"
import Service from "../components/HomePage/services/Service"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Service />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
)

export default IndexPage
