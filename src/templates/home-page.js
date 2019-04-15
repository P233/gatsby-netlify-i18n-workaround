import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const HomePageTemplate = ({ heading, redirectButtonText, langKey }) => (
  <>
    <h1>{heading}</h1>
    <Link to={`${langKey === "en" ? "" : langKey}/about/`}>
      {redirectButtonText}
    </Link>
  </>
)

HomePageTemplate.propTypes = {
  heading: PropTypes.string,
  redirectButtonText: PropTypes.string,
  langKey: PropTypes.string,
}

const HomePage = ({
  data: {
    markdownRemark: {
      fields: { langKey },
      frontmatter: { seoTitle, heading, redirectButtonText },
    },
  },
}) => (
  <Layout>
    <SEO title={seoTitle} keywords={[`gatsby`, `application`, `react`]} />
    <HomePageTemplate
      heading={heading}
      redirectButtonText={redirectButtonText}
      langKey={langKey}
    />
  </Layout>
)

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query HomePageTemplate($langKey: String!) {
    markdownRemark(
      fields: { langKey: { eq: $langKey } }
      frontmatter: { templateKey: { eq: "home-page" } }
    ) {
      fields {
        langKey
      }
      frontmatter {
        seoTitle
        heading
        redirectButtonText
      }
    }
  }
`
