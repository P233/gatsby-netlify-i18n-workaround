import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content, { HTMLContent } from "../components/Content"

export const BlogPostTemplate = ({
  title,
  date,
  content,
  contentComponent,
}) => {
  const PostContent = contentComponent || Content
  return (
    <>
      <h1>{title}</h1>
      <p>{date}</p>
      <PostContent content={content} />
    </>
  )
}

BlogPostTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  contentComponent: PropTypes.func,
}

const BlogPost = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { date, title, description, tags },
    },
  },
}) => (
  <Layout>
    <SEO title={title} description={description} keywords={tags} />
    <BlogPostTemplate
      title={title}
      date={date}
      content={html}
      contentComponent={HTMLContent}
    />
  </Layout>
)

BlogPost.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.string,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostTemplate($langKey: String!) {
    markdownRemark(
      fields: { langKey: { eq: $langKey } }
      frontmatter: { templateKey: { eq: "blog-post" } }
    ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
