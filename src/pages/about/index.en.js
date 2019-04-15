import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`about`]} />
    <Image />
    <Link to="/">Go to homepage</Link>
  </Layout>
)

export default AboutPage
