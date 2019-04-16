import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const AboutPageTemplate = ({ redirectButtonText, langKey }) => (
  <>
    <Link to={`${langKey === "en" ? "" : langKey}/`}>{redirectButtonText}</Link>
  </>
)

AboutPageTemplate.propTypes = {
  redirectButtonText: PropTypes.string,
  langKey: PropTypes.string,
}

const AboutPage = ({
  data: {
    markdownRemark: {
      fields: { langKey },
      frontmatter: { metaTitle, metaDescription, redirectButtonText },
    },
  },
}) => (
  <Layout>
    <SEO title={metaTitle} description={metaDescription} keywords={[`about`]} />
    <AboutPageTemplate
      redirectButtonText={redirectButtonText}
      langKey={langKey}
    />
  </Layout>
)

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate($langKey: String!) {
    markdownRemark(
      fields: { langKey: { eq: $langKey } }
      frontmatter: { templateKey: { eq: "about-page" } }
    ) {
      fields {
        langKey
      }
      frontmatter {
        metaTitle
        metaDescription
        redirectButtonText
      }
    }
  }
`
