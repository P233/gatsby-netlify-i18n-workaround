import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="关于" keywords={[`about`]} />
    <Image />
    <Link to="/cn/">跳转到首页</Link>
  </Layout>
)

export default AboutPage
