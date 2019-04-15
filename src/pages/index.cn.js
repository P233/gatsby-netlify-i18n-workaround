import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="首页" keywords={[`gatsby`, `application`, `react`]} />
    <h1>你好，世界</h1>
    <Link to="/cn/about/">跳转到关于页面</Link>
  </Layout>
)

export default IndexPage
